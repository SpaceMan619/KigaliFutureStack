# Google Sheets CORS Fix - Summary

## What Was Wrong

### 1. CORS Preflight Not Handled
The original Apps Script did not implement `doOptions()`, which is **critical** for cross-origin POST requests. When a browser sends a POST request with `Content-Type: application/json`, it first sends an OPTIONS "preflight" request to check if the server allows the request. Without handling this, the browser blocks the actual POST.

### 2. Missing CORS Headers in Responses
Apps Script requires explicit CORS headers in EVERY response:
- `Access-Control-Allow-Origin: *` (or your domain)
- `Access-Control-Allow-Methods: POST, GET, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type`

### 3. Potential Issues with the Original Deployment
The 404 error suggests the Apps Script URL might have been:
- Not deployed as a Web App (only saved as a script)
- Deployed with incorrect permissions (not "Anyone")
- A stale/deleted deployment

---

## How to Fix It

### Step 1: Update the Apps Script Code

1. Go to https://script.google.com
2. Create a new project (or open existing)
3. **Delete** all existing code
4. **Copy and paste** the entire contents of `apps-script-fixed.js`
5. Save (Ctrl+S / Cmd+S)

### Step 2: Deploy as Web App

1. Click the **Deploy** button (top right)
2. Select **New deployment**
3. Click the gear icon ⚙️ and select **Web App**
4. Configure:
   - **Description**: "KigaliFutureStack Quiz API"
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone** ← CRITICAL
5. Click **Deploy**
6. Copy the **Web App URL** (looks like `https://script.google.com/macros/s/.../exec`)

### Step 3: Update Your React Code

Replace the URL in `FounderQuiz.tsx`:

```typescript
// OLD (if different)
await fetch('https://script.google.com/macros/s/OLD_URL/exec', {...})

// NEW (use your new deployment URL)
await fetch('https://script.google.com/macros/s/YOUR_NEW_URL/exec', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email,
    archetype: result.archetype.id,
    topSector: result.matchedSectors[0]?.id,
    answers: state.answers,
    submittedAt: new Date().toISOString()
  })
});
```

### Step 4: Create/Select the Google Sheet

The script will automatically:
- Create a spreadsheet named "KigaliFutureStack Quiz Data" if none exists
- Create a sheet named "Quiz Results"
- Add headers on first write
- Append each submission as a new row

If you want to use an **existing spreadsheet**:
1. Open the spreadsheet
2. Go to **Extensions** → **Apps Script**
3. Paste the fixed code there instead

---

## Key Changes in the Fixed Code

### 1. Added `doOptions()` Handler
```javascript
function doOptions(e) {
  return createResponse({}, 200);
}
```
This handles the CORS preflight request that browsers send automatically.

### 2. Proper CORS Headers Object
```javascript
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400'
};
```

### 3. JSON Response Helper
```javascript
function createResponse(data, statusCode = 200) {
  const output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
```

### 4. Validation
```javascript
if (!data.email || !data.archetype) {
  return createResponse({
    status: 'error',
    message: 'Missing required fields'
  }, 400);
}
```

### 5. Automatic Sheet Setup
```javascript
function getOrCreateSheet() { ... }
function addHeadersIfNeeded(sheet) { ... }
```

---

## Testing the Fix

### Test 1: Browser Console
```javascript
fetch('YOUR_NEW_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'test@example.com',
    archetype: 'builder',
    submittedAt: new Date().toISOString()
  })
}).then(r => r.json()).then(console.log);
```

### Test 2: Check the Sheet
After a successful test, data should appear in:
- Spreadsheet: "KigaliFutureStack Quiz Data"
- Sheet: "Quiz Results"
- Columns: Timestamp, Email, Archetype, Top Sector, Answers, Submitted At

---

## Common Pitfalls to Avoid

1. **Don't use "Execute as: User accessing the web app"** - This causes auth issues
2. **Don't forget to redeploy after code changes** - Editing code doesn't update the deployment
3. **Don't restrict "Who has access" to "Only myself"** - This blocks the quiz submissions
4. **Don't skip the OPTIONS handler** - Browsers require it for POST with JSON

---

## Debugging Tips

If it still doesn't work:

1. **Check browser Network tab** - Look for the OPTIONS request response
2. **Check Apps Script logs** - View → Executions in the script editor
3. **Verify deployment URL** - Make sure you're using the latest Web App URL
4. **Test with a simple GET first**:
   ```
   curl https://script.google.com/macros/s/YOUR_URL/exec
   ```
   Should return: `{ "status": "success", "message": "..." }`

---

## Deployment Checklist

- [ ] Code copied from `apps-script-fixed.js`
- [ ] Script saved
- [ ] New deployment created (not just saved)
- [ ] "Who has access" set to "Anyone"
- [ ] Web App URL copied to clipboard
- [ ] URL updated in `FounderQuiz.tsx`
- [ ] React app rebuilt/redeployed
- [ ] Test submission made
- [ ] Data appears in Google Sheet

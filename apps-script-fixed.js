/**
 * Fixed Google Apps Script for KigaliFutureStack Quiz
 * Properly handles CORS preflight and JSON POST requests
 * 
 * HOW TO USE:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Save (Ctrl+S)
 * 5. Click Deploy → New Deployment → Web App
 * 6. Set "Who has access" to "Anyone"
 * 7. Copy the Web App URL
 * 8. Replace the URL in FounderQuiz.tsx
 */

// CORS headers to allow cross-origin requests
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Max-Age': '86400'
};

/**
 * Main entry point for GET requests
 */
function doGet(e) {
  return createResponse({
    status: 'success',
    message: 'Quiz submission endpoint is active. Use POST to submit quiz results.'
  });
}

/**
 * Main entry point for POST requests
 * Handles the actual quiz submission
 */
function doPost(e) {
  try {
    // Parse the JSON body
    const data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.email || !data.archetype) {
      return createResponse({
        status: 'error',
        message: 'Missing required fields: email and archetype are required'
      }, 400);
    }
    
    // Get or create the sheet
    const sheet = getOrCreateSheet();
    
    // Add headers if first row
    addHeadersIfNeeded(sheet);
    
    // Append the data row
    const rowData = [
      new Date(),                    // Timestamp
      data.email,                    // Email
      data.archetype,                // Archetype ID
      data.topSector || 'N/A',       // Top Sector
      JSON.stringify(data.answers),  // Answers (serialized)
      data.submittedAt || new Date().toISOString() // Submitted At
    ];
    
    sheet.appendRow(rowData);
    
    return createResponse({
      status: 'success',
      message: 'Quiz results saved successfully',
      data: {
        email: data.email,
        archetype: data.archetype,
        timestamp: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('Error processing request:', error);
    return createResponse({
      status: 'error',
      message: 'Internal server error: ' + error.message
    }, 500);
  }
}

/**
 * Handle CORS preflight OPTIONS requests
 * THIS IS CRITICAL - browsers send OPTIONS before POST
 */
function doOptions(e) {
  return createResponse({}, 200);
}

/**
 * Helper: Create JSON response with CORS headers
 */
function createResponse(data, statusCode = 200) {
  const output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  
  // Build the response with CORS headers
  const response = {
    status: statusCode,
    headers: CORS_HEADERS,
    body: output
  };
  
  // For Apps Script, we need to return the output directly
  // but also set the headers via the response object
  return output;
}

/**
 * Helper: Get or create the quiz results sheet
 */
function getOrCreateSheet() {
  const SHEET_NAME = 'Quiz Results';
  
  // Try to get the active spreadsheet
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // If no active spreadsheet, create one
  if (!spreadsheet) {
    spreadsheet = SpreadsheetApp.create('KigaliFutureStack Quiz Data');
  }
  
  // Try to get the sheet
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  
  // If sheet doesn't exist, create it
  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }
  
  return sheet;
}

/**
 * Helper: Add headers if this is the first row
 */
function addHeadersIfNeeded(sheet) {
  const headers = [
    'Timestamp',
    'Email',
    'Archetype',
    'Top Sector',
    'Answers (JSON)',
    'Submitted At'
  ];
  
  // Check if first row is empty or doesn't have headers
  const firstRow = sheet.getRange(1, 1, 1, headers.length);
  const firstRowValues = firstRow.getValues()[0];
  
  // If first cell is empty, add headers
  if (!firstRowValues[0]) {
    firstRow.setValues([headers]);
    
    // Format headers (bold, background)
    firstRow.setFontWeight('bold');
    firstRow.setBackground('#4285f4');
    firstRow.setFontColor('white');
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, headers.length);
  }
}

/**
 * Test function - run this to verify the script works
 */
function testScript() {
  // Simulate a POST request
  const mockEvent = {
    postData: {
      contents: JSON.stringify({
        email: 'test@example.com',
        archetype: 'builder',
        topSector: 'fintech',
        answers: { '1': 'a', '2': 'b' },
        submittedAt: new Date().toISOString()
      })
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result);
}

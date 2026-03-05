import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocaleProvider } from '@/contexts/LocaleContext';
import { AudienceProvider } from '@/contexts/AudienceContext';
import { Navbar } from '@/components/navigation/Navbar';
import { Home } from '@/pages/Home';
import { OpportunityAtlas } from '@/pages/OpportunityAtlas';
import { StartupIdeas } from '@/pages/StartupIdeas';
import { NST2Explorer } from '@/pages/NST2Explorer';
import { BuildersToolkit } from '@/pages/BuildersToolkit';
import { About } from '@/pages/About';
import './App.css';

function App() {
  return (
    <LocaleProvider>
      <AudienceProvider>
        <Router>
          <div className="min-h-screen bg-slate-950">
            <Navbar />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/opportunity-atlas" element={<OpportunityAtlas />} />
                <Route path="/startup-ideas" element={<StartupIdeas />} />
                <Route path="/nst2-explorer" element={<NST2Explorer />} />
                <Route path="/builders-toolkit" element={<BuildersToolkit />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
          </div>
        </Router>
      </AudienceProvider>
    </LocaleProvider>
  );
}

export default App;

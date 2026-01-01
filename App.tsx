
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Publications from './views/Publications';
import Contact from './views/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-emerald-500/30 bg-slate-950">
        <Navigation />
        {/* Added significant top padding (pt-32) to ensure no page content is covered by the nav */}
        <main className="flex-grow pt-32 lg:pt-40">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

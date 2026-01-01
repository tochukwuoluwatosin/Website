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
      <div className="min-h-screen flex flex-col relative">
        {/* Abstract Background Elements */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full animate-blob"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-indigo-500/10 blur-[120px] rounded-full animate-blob animation-delay-2000"></div>
          <div className="absolute top-[40%] left-[20%] w-[25%] h-[25%] bg-blue-500/5 blur-[100px] rounded-full animate-blob animation-delay-4000"></div>
        </div>

        <Navigation />
        
        <main className="flex-grow pt-32 lg:pt-44">
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

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Tochukwu Oluwatosin Maduka</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Doctoral Researcher at Saitama University. Specializing in Environmental Chemistry & Molecular Simulations.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Graduate School of Science and Engineering</li>
              <li>Saitama University, Japan</li>
              <li>Wang / Suzuki Laboratory</li>
              <li>Email: maduka.t.o@saitama-u.jp</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-4">Research Profiles</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <span className="sr-only">ResearchGate</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.37 12.83c-.52 0-.93.41-.93.93 0 .52.41.93.93.93.52 0 .93-.41.93-.93 0-.52-.41-.93-.93-.93zm-7.1 1.7c-.52 0-.93.41-.93.93s.41.93.93.93.93-.41.93-.93-.41-.93-.93-.93zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-3.37 3.51c-.62 0-1.11-.49-1.11-1.11s.49-1.11 1.11-1.11 1.11.49 1.11 1.11-.49 1.11-1.11 1.11z"/></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <span className="sr-only">Google Scholar</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.8 3.8C5 12.5 5.8 12 6.7 12h10.7c.8 0 1.6.5 1.9 1.3L24 9.5 12 0z"/></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Tochukwu Oluwatosin Maduka. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs text-slate-500">
            <span>Saitama, Japan</span>
            <span>•</span>
            <span>PhD Candidate</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

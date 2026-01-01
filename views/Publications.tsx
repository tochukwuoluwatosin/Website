
import React, { useState } from 'react';
import { PUBLICATIONS } from '../data';
import BibTeXModal from '../components/BibTeXModal';

const Publications: React.FC = () => {
  const [selectedBibtex, setSelectedBibtex] = useState<string | null>(null);

  const years = Array.from(new Set(PUBLICATIONS.map(p => p.year))).sort((a, b) => b - a);

  return (
    <div className="max-w-7xl mx-auto px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Selected Output</h2>
          <p className="text-slate-400 text-lg border-l-2 border-emerald-500/30 pl-8">Peer-reviewed research across materials science, environmental toxicology, and molecular simulations.</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="group flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 text-slate-300 rounded-2xl hover:text-emerald-400 hover:border-emerald-500/30 transition-all shadow-xl">
            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.8 3.8C5 12.5 5.8 12 6.7 12h10.7c.8 0 1.6.5 1.9 1.3L24 9.5 12 0z"/></svg>
            <span className="text-xs font-black uppercase tracking-widest">Scholar</span>
          </a>
        </div>
      </div>

      <div className="space-y-20">
        {years.map(year => (
          <div key={year} className="relative">
            {/* Sticky Year Heading adjusted to clear the nav safely */}
            <div className="sticky top-28 lg:top-36 z-20 bg-slate-950/80 backdrop-blur-md py-4 mb-8 flex items-center gap-6">
              <h3 className="text-3xl font-black text-emerald-500 mono">{year}</h3>
              <div className="flex-grow h-[1px] bg-gradient-to-r from-emerald-500/30 to-transparent"></div>
            </div>
            
            <div className="grid gap-6">
              {PUBLICATIONS.filter(p => p.year === year).map(pub => (
                <div key={pub.id} className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] hover:bg-slate-900/60 transition-all group">
                  <div className="flex flex-col gap-6">
                    <div className="space-y-3">
                      <h4 className="text-xl font-bold text-white leading-snug tracking-tight group-hover:text-emerald-400 transition-colors">
                        {pub.title}
                      </h4>
                      <p className="text-slate-400 text-sm font-medium">{pub.authors}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-emerald-500/80 font-black uppercase tracking-widest text-[10px]">{pub.journal}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {pub.doi && (
                        <a 
                          href={`https://doi.org/${pub.doi}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white bg-slate-800 px-4 py-2 rounded-xl transition-colors border border-slate-700/50"
                        >
                          DOI Identity
                        </a>
                      )}
                      <button 
                        onClick={() => setSelectedBibtex(pub.bibtex)}
                        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white bg-slate-800 px-4 py-2 rounded-xl transition-colors border border-slate-700/50"
                      >
                        BibTeX Source
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedBibtex && (
        <BibTeXModal bibtex={selectedBibtex} onClose={() => setSelectedBibtex(null)} />
      )}
    </div>
  );
};

export default Publications;

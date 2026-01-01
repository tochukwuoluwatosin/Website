
import React, { useState } from 'react';
import { PUBLICATIONS } from '../data';
import BibTeXModal from '../components/BibTeXModal';

const Publications: React.FC = () => {
  const [selectedBibtex, setSelectedBibtex] = useState<string | null>(null);

  const years = Array.from(new Set(PUBLICATIONS.map(p => p.year))).sort((a, b) => b - a);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Publications</h2>
          <p className="text-slate-400 text-lg">Peer-reviewed articles, conference proceedings, and reviews.</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 text-slate-300 rounded-lg hover:text-white hover:bg-slate-800 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.8 3.8C5 12.5 5.8 12 6.7 12h10.7c.8 0 1.6.5 1.9 1.3L24 9.5 12 0z"/></svg>
            Google Scholar
          </a>
          <a href="#" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 text-slate-300 rounded-lg hover:text-white hover:bg-slate-800 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.37 12.83c-.52 0-.93.41-.93.93 0 .52.41.93.93.93.52 0 .93-.41.93-.93 0-.52-.41-.93-.93-.93zm-7.1 1.7c-.52 0-.93.41-.93.93s.41.93.93.93.93-.41.93-.93-.41-.93-.93-.93z"/></svg>
            ResearchGate
          </a>
        </div>
      </div>

      <div className="space-y-16">
        {years.map(year => (
          <div key={year} className="relative">
            <div className="sticky top-16 z-20 bg-slate-950 py-4 flex items-center gap-4">
              <h3 className="text-2xl font-bold text-emerald-400">{year}</h3>
              <div className="flex-grow border-b border-slate-800"></div>
            </div>
            
            <div className="grid gap-6 mt-8">
              {PUBLICATIONS.filter(p => p.year === year).map(pub => (
                <div key={pub.id} className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-xl hover:bg-slate-900 hover:border-slate-700 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-grow">
                      <h4 className="text-xl font-bold text-white mb-2 leading-snug">
                        {pub.title}
                      </h4>
                      <p className="text-slate-300 text-sm mb-2">{pub.authors}</p>
                      <p className="text-emerald-500 font-medium italic text-sm mb-4">{pub.journal}</p>
                      
                      <div className="flex flex-wrap gap-3">
                        {pub.doi && (
                          <a 
                            href={`https://doi.org/${pub.doi}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-800 px-3 py-1.5 rounded-md transition-colors"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            DOI
                          </a>
                        )}
                        <button 
                          onClick={() => setSelectedBibtex(pub.bibtex)}
                          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-800 px-3 py-1.5 rounded-md transition-colors"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                          </svg>
                          BibTeX
                        </button>
                      </div>
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


import React from 'react';
import { PROJECTS } from '../data';

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Active Research</h2>
        <p className="text-slate-400 text-lg border-l-2 border-emerald-500/30 pl-8">Detailed overview of current doctoral work and core research directions.</p>
      </div>

      <div className="grid gap-10">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/10 to-indigo-600/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden p-8 lg:p-12 transition-all group-hover:bg-slate-900/60">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-grow space-y-8">
                  <div className="flex items-center justify-between">
                    <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-black rounded-full uppercase tracking-[0.2em] border border-emerald-500/20">
                      {project.id === 'phd-main' ? 'Doctoral Focus' : 'Computational Theme'}
                    </span>
                    <span className="text-slate-500 text-xs font-bold mono uppercase tracking-widest">{project.period}</span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-lg leading-relaxed font-medium">
                    {project.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-10 pt-4">
                    <div className="space-y-4">
                      <h4 className="text-[11px] font-black text-slate-200 uppercase tracking-[0.3em] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Key Objectives
                      </h4>
                      <ul className="space-y-3">
                        {project.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                            <span className="w-1 h-1 rounded-full bg-emerald-500/50 mt-2 shrink-0"></span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-[11px] font-black text-slate-200 uppercase tracking-[0.3em] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                        Methodologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techniques.map((t, idx) => (
                          <span key={idx} className="px-3 py-1.5 bg-slate-800/80 text-slate-300 rounded-xl text-[10px] font-bold border border-slate-700/50 uppercase tracking-widest">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

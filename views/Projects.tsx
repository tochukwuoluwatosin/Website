
import React from 'react';
import { PROJECTS } from '../data';

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Research Projects</h2>
        <p className="text-slate-400 text-lg">Detailed overview of current doctoral work and thematic research directions.</p>
      </div>

      <div className="grid gap-12">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/20 to-indigo-600/20 rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-full uppercase tracking-widest border border-emerald-500/20">
                      {project.id === 'phd-main' ? 'Primary Focus' : 'Parallel Theme'}
                    </span>
                    <span className="text-slate-500 text-sm font-medium">{project.period}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-4">Key Objectives</h4>
                      <ul className="space-y-3">
                        {project.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-4">Methods Utilized</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techniques.map((t, idx) => (
                          <span key={idx} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md text-xs font-medium border border-slate-700">
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

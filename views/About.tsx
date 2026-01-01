
import React from 'react';
import { EDUCATION_DATA, SKILLS } from '../data';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-20 sm:px-6 lg:px-8">
      <div className="space-y-20">
        
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Academic Journey</h2>
          <p className="text-slate-400 leading-relaxed text-lg border-l-2 border-emerald-500/30 pl-8">
            Focusing on the intersections of environmental pollutants and biological systems using both 
            advanced experimental techniques and multiscale computational modeling.
          </p>
        </div>

        {/* Education */}
        <section className="space-y-8">
          <h3 className="text-xl font-black text-emerald-400 uppercase tracking-[0.2em] flex items-center gap-4">
            <span className="w-8 h-[1px] bg-emerald-500/30"></span>
            Education
          </h3>
          <div className="grid gap-6">
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl relative hover:bg-slate-900/60 transition-all">
                <div className="flex flex-col md:flex-row md:justify-between gap-6">
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-white tracking-tight">{edu.degree}</h4>
                    <div className="space-y-1">
                      <p className="text-emerald-400 font-bold">{edu.institution}</p>
                      <p className="text-slate-500 text-sm mono uppercase tracking-widest">{edu.period}</p>
                    </div>
                    
                    {edu.thesis && (
                      <div className="mt-4 p-4 bg-slate-950/50 rounded-2xl border border-slate-800">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">Thesis Title</span>
                        <p className="text-sm text-slate-300 italic leading-relaxed">"{edu.thesis}"</p>
                      </div>
                    )}

                    {edu.supervisors && (
                      <div className="flex flex-wrap gap-3">
                        {edu.supervisors.map((s, i) => (
                          <span key={i} className="text-[11px] font-bold text-slate-400 bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700/50">
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="space-y-8">
          <h3 className="text-xl font-black text-indigo-400 uppercase tracking-[0.2em] flex items-center gap-4">
            <span className="w-8 h-[1px] bg-indigo-500/30"></span>
            Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
                Experimental Techniques
              </h4>
              <ul className="space-y-4">
                {SKILLS.experimental.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 group">
                    <svg className="w-5 h-5 text-emerald-500/40 mt-0.5 group-hover:text-emerald-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"></span>
                Computational Methods
              </h4>
              <ul className="space-y-4">
                {SKILLS.computational.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 group">
                    <svg className="w-5 h-5 text-indigo-500/40 mt-0.5 group-hover:text-indigo-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

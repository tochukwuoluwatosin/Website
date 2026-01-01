
import React from 'react';
import { EDUCATION_DATA, SKILLS } from '../data';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Academic Background</h2>
          <p className="text-slate-400 leading-relaxed text-lg">
            Focusing on the intersections of environmental pollutants and biological systems using both 
            advanced experimental techniques and multiscale computational modeling.
          </p>
        </div>

        {/* Education */}
        <section>
          <h3 className="text-2xl font-bold text-emerald-400 mb-8 flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Education
          </h3>
          <div className="grid gap-8">
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative">
                <div className="absolute top-8 right-8 text-emerald-500 font-bold opacity-20 text-4xl select-none">
                  0{idx + 1}
                </div>
                <div className="flex flex-col md:flex-row md:justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <p className="text-slate-300 font-medium mt-1">{edu.institution}</p>
                    <p className="text-slate-500 text-sm mt-1">{edu.period}</p>
                    
                    {edu.thesis && (
                      <div className="mt-4 p-4 bg-slate-950 rounded-lg border border-slate-800">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Thesis</span>
                        <p className="text-sm text-slate-400 italic">"{edu.thesis}"</p>
                      </div>
                    )}

                    {edu.supervisors && (
                      <div className="mt-4">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Supervisors</span>
                        <div className="flex flex-wrap gap-2">
                          {edu.supervisors.map((s, i) => (
                            <span key={i} className="text-sm text-slate-300 bg-slate-800 px-3 py-1 rounded-full">{s}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Expertise */}
        <section>
          <h3 className="text-2xl font-bold text-emerald-400 mb-8 flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            Technical Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Experimental Skills
              </h4>
              <ul className="space-y-4">
                {SKILLS.experimental.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400">
                    <svg className="w-5 h-5 text-emerald-500/60 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Computational Skills
              </h4>
              <ul className="space-y-4">
                {SKILLS.computational.map((skill, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400">
                    <svg className="w-5 h-5 text-indigo-500/60 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    {skill}
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

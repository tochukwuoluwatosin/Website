
import React from 'react';
import { Link } from 'react-router-dom';
import { RESEARCHER_NAME, HERO_BIO, METRICS } from '../data';

const CryJ1Visualization = () => (
  <div className="relative w-full h-full flex items-center justify-center p-4">
    <svg viewBox="0 0 400 400" className="w-full h-full max-w-[400px] drop-shadow-[0_0_30px_rgba(16,185,129,0.25)]">
      <defs>
        <linearGradient id="helixGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Dynamic Ribbon Structure */}
      <path 
        d="M60,180 Q120,40 180,180 T300,320 T380,180" 
        fill="none" 
        stroke="url(#helixGrad)" 
        strokeWidth="10" 
        strokeLinecap="round" 
        className="animate-[draw_12s_ease-in-out_infinite] opacity-60"
      />
      <path 
        d="M100,120 Q180,280 260,120 T360,220" 
        fill="none" 
        stroke="#10b981" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeDasharray="8 16"
        className="animate-[pulse_5s_ease-in-out_infinite] opacity-40"
      />
      
      {/* Interaction Sites */}
      {[
        { cx: 60, cy: 180, r: 7, color: '#10b981' },
        { cx: 180, cy: 180, r: 9, color: '#6366f1' },
        { cx: 300, cy: 320, r: 5, color: '#10b981' },
        { cx: 260, cy: 120, r: 4, color: '#f59e0b' }
      ].map((node, i) => (
        <circle 
          key={i} 
          {...node} 
          fill={node.color} 
          filter="url(#glow)"
          className="animate-pulse"
          style={{ animationDelay: `${i * 0.7}s` }}
        />
      ))}
    </svg>
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full text-center">
      <p className="text-[10px] font-black tracking-[0.4em] text-emerald-400 uppercase opacity-80">Cry j 1 Molecular Geometry</p>
      <p className="text-[9px] text-slate-500 mono mt-1">Saitama University | Wang-Suzuki Lab</p>
    </div>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="relative text-slate-200 pb-20 overflow-visible">
      {/* Professional Ambience Layer */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-emerald-600/5 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-indigo-600/5 blur-[160px] rounded-full"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(2,6,23,0)_0%,rgba(2,6,23,1)_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Main Content Block */}
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black tracking-[0.3em] text-emerald-400 uppercase">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              PhD Researcher @ Saitama University
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-tight">
                {RESEARCHER_NAME.split(' ').slice(0, 2).join(' ')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-500">
                  {RESEARCHER_NAME.split(' ').slice(2).join(' ')}
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 font-bold mono">
                Environmental Chemistry & Molecular Dynamics
              </p>
            </div>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-medium border-l-2 border-emerald-500/30 pl-8">
              {HERO_BIO}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/projects" className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-emerald-950/20 active:scale-95">
                Research Projects
              </Link>
              <Link to="/publications" className="px-8 py-3.5 bg-slate-900 border border-slate-800 text-white rounded-xl font-bold text-sm transition-all hover:bg-slate-800 active:scale-95">
                Full Publications
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              <span className="hover:text-emerald-400 transition-colors cursor-default">Microplastics</span>
              <span className="hover:text-indigo-400 transition-colors cursor-default">Cry j 1</span>
              <span className="hover:text-emerald-400 transition-colors cursor-default">MD Simulations</span>
              <span className="hover:text-indigo-400 transition-colors cursor-default">Phytochemistry</span>
            </div>
          </div>

          {/* Visual Identity Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl h-[340px] relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent"></div>
              <CryJ1Visualization />
            </div>

            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Citations</p>
                  <p className="text-3xl font-black text-white mono">{METRICS.citations}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">h-index</p>
                  <p className="text-3xl font-black text-emerald-400 mono">{METRICS.hIndex}</p>
                </div>
                <div className="col-span-2 pt-6 border-t border-slate-800 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">ResearchGate</p>
                    <p className="text-3xl font-black text-white mono">{METRICS.researchGate}</p>
                  </div>
                  <div className="px-3 py-1 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-[9px] font-black text-emerald-400 uppercase tracking-widest">
                    Top 10%
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes draw {
          0% { stroke-dasharray: 0 1000; opacity: 0; }
          10% { opacity: 0.6; }
          40% { stroke-dasharray: 1000 1000; }
          60% { stroke-dasharray: 1000 1000; opacity: 0.6; }
          100% { stroke-dasharray: 1000 1000; opacity: 0; }
        }
      `}} />
    </div>
  );
};

export default Home;

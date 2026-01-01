
import React from 'react';
import { Link } from 'react-router-dom';
import { RESEARCHER_NAME, HERO_BIO, METRICS } from '../data';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <section className="max-w-7xl mx-auto px-4 pt-20 pb-24 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for 2026 Postdoc Opportunities</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-tight">
              {RESEARCHER_NAME}
            </h1>
            
            <p className="text-xl text-slate-400 font-medium max-w-2xl leading-relaxed">
              Doctoral Researcher (PhD Candidate), Materials Science
              <br />
              <span className="text-emerald-500/80">Saitama University, Japan</span>
            </p>

            <blockquote className="border-l-4 border-emerald-500 pl-6 text-lg text-slate-300 italic max-w-3xl leading-relaxed">
              "{HERO_BIO}"
            </blockquote>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/projects"
                className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold shadow-lg shadow-emerald-900/20 transition-all hover:-translate-y-1"
              >
                View My Research
              </Link>
              <Link
                to="/publications"
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold border border-slate-700 transition-all hover:-translate-y-1"
              >
                Publications
              </Link>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl w-full lg:w-80 shadow-2xl">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Research Impact
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-slate-800 pb-4">
                    <span className="text-slate-400 text-sm">Citations</span>
                    <span className="text-2xl font-bold text-white">{METRICS.citations}</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-slate-800 pb-4">
                    <span className="text-slate-400 text-sm">h-index</span>
                    <span className="text-2xl font-bold text-white">{METRICS.hIndex}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-slate-400 text-sm">RG Interest</span>
                    <span className="text-2xl font-bold text-emerald-400">{METRICS.researchGate}</span>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Expected Graduation: <span className="text-slate-300 font-semibold">2026</span>
                    <br />
                    Lab: <span className="text-slate-300">Wang / Suzuki Laboratory</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Keywords */}
      <section className="bg-slate-900/50 py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 opacity-50 text-sm font-medium tracking-widest uppercase">
            <span>Environmental Chemistry</span>
            <span className="hidden sm:inline">•</span>
            <span>Microplastics</span>
            <span className="hidden sm:inline">•</span>
            <span>Molecular Dynamics</span>
            <span className="hidden sm:inline">•</span>
            <span>Phytochemistry</span>
            <span className="hidden sm:inline">•</span>
            <span>Medicinal Chemistry</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

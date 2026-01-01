
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simple mock to avoid actual submission in this context, but using your URL
    try {
      const response = await fetch('https://formspree.io/f/mbdlldep', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Collaboration</h2>
        <p className="text-slate-400 text-lg border-l-2 border-emerald-500/30 pl-8">Connect for academic inquiries, data requests, or professional opportunities.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Info Column */}
        <div className="space-y-8">
          <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-10 rounded-[2.5rem] shadow-2xl">
            <h3 className="text-sm font-black text-slate-500 uppercase tracking-[0.4em] mb-8">Lab Location</h3>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-500/20">
                <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-slate-400 space-y-2 text-sm leading-relaxed">
                <p className="text-slate-200 font-bold text-lg">Saitama University</p>
                <p>Graduate School of Science and Engineering</p>
                <p>255 Shimo-Okubo, Sakura-ku</p>
                <p>Saitama City, 338-8570, Japan</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <a href="mailto:maduka.t.o@saitama-u.jp" className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl hover:border-emerald-500/30 transition-all group shadow-2xl">
              <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors border border-indigo-500/20">
                <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Direct Reach</p>
              <p className="text-slate-200 text-sm font-bold truncate">maduka.t.o@saitama-u.jp</p>
            </a>
            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl shadow-2xl">
              <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 border border-amber-500/20">
                <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Timezone</p>
              <p className="text-slate-200 text-sm font-bold">JST (UTC+9)</p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="bg-slate-900/60 backdrop-blur-2xl border border-white/5 p-10 rounded-[2.5rem] shadow-2xl relative">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-8 border border-emerald-500/20">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Transmission Sent</h3>
              <p className="text-slate-400">Thank you. Your inquiry has been processed. I will review and respond as soon as academic schedules permit.</p>
              <button onClick={() => setSubmitted(false)} className="mt-8 text-emerald-500 font-black uppercase tracking-widest text-xs hover:text-emerald-400 transition-colors">New Submission</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Name</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all placeholder:text-slate-700" placeholder="Academic Colleague" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Email</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all placeholder:text-slate-700" placeholder="colleague@inst.edu" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Inquiry Subject</label>
                <input required type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all placeholder:text-slate-700" placeholder="Research Proposal" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Message Body</label>
                <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all resize-none placeholder:text-slate-700" placeholder="Detailed inquiry regarding molecular simulations..."></textarea>
              </div>
              <button disabled={isSubmitting} type="submit" className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all shadow-2xl shadow-emerald-950/40">
                {isSubmitting ? 'Transmitting...' : 'Send Transmission'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

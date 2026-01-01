
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mbdlldep', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        alert(data.error || 'Oops! There was a problem submitting your form');
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
        <p className="text-slate-400 text-lg">Reach out for academic collaborations, postdoc opportunities, or research inquiries.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Info Column */}
        <div className="space-y-12">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Institutional Address</h3>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-slate-400 space-y-1">
                <p className="text-slate-200 font-medium">Saitama University</p>
                <p>Graduate School of Science and Engineering</p>
                <p>255 Shimo-Okubo, Sakura-ku</p>
                <p>Saitama City, 338-8570, Japan</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <a href="mailto:maduka.t.o@saitama-u.jp" className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/50 transition-colors group">
              <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</p>
              <p className="text-slate-200 truncate">maduka.t.o@saitama-u.jp</p>
            </a>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Timezone</p>
              <p className="text-slate-200">Japan Standard Time (UTC+9)</p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative overflow-hidden">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
              <p className="text-slate-400">Thank you for reaching out. I will respond to your inquiry as soon as possible.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-emerald-500 font-bold hover:text-emerald-400"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input
                    required
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <input
                  required
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                  placeholder="Collaboration Proposal"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  required
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none"
                  placeholder="Tell me about your research or inquiry..."
                ></textarea>
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-bold transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

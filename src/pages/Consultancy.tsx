
import React, { useState } from 'react';

const Consultancy: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <section className="py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-top duration-700">
            <h1 className="text-5xl md:text-6xl font-outfit font-bold text-slate-900 mb-6">
              Get a Free Technology <br /> <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Consultation</span>
            </h1>
            <p className="text-lg text-slate-600">
              Speak with our senior engineers and strategists to identify the right technology path for your business. No strings attached.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-500/5 p-8 md:p-16 border border-white">
              {isSubmitted ? (
                <div className="py-20 flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom duration-500">
                  <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8">
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">You're All Set!</h2>
                  <p className="text-xl text-slate-500 max-w-md">Thank you — our experts will contact you within 24 hours to schedule your session.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-900 ml-1">Full Name</label>
                      <input required type="text" placeholder="e.g. Michael Chen" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-900 ml-1">Work Email</label>
                      <input required type="email" placeholder="e.g. mike@company.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-900 ml-1">Phone Number</label>
                      <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-900 ml-1">Business Type</label>
                      <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg appearance-none cursor-pointer">
                        <option>Tech Startup</option>
                        <option>E-commerce</option>
                        <option>SaaS Platform</option>
                        <option>Enterprise</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900 ml-1">Project Description</label>
                    <textarea required rows={4} placeholder="Describe what you are building or the challenge you are facing..." className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg resize-none"></textarea>
                  </div>

                  <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"/><path d="M22 12A10 10 0 1 1 12 2"/></svg>
                    </div>
                    <p className="text-blue-800 text-sm font-medium">Your data is secure. We use it only to prepare for your consultation.</p>
                  </div>

                  <button type="submit" className="w-full py-6 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-2xl shadow-blue-600/20 transition-all hover:scale-[1.01] active:scale-95">
                    Claim My Free Strategy Session
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultancy;

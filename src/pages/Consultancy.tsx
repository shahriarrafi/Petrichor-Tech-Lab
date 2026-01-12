import React, { useState } from 'react';

const Consultancy: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as any;
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/consultation`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json' 
      },
      body: JSON.stringify({
        full_name: target[0].value,
        email: target[1].value,
        phone: target[2].value,
        description: target[3].value,
      }),
    });

    if (response.ok) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="pt-20 bg-petrichor-light/30 min-h-screen selection:bg-petrichor-sky/30">
      <section className="py-24 relative overflow-hidden">
        {/* Brand Accents */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-petrichor-sky/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-petrichor-navy/5 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-top duration-700">
            <h2 className="text-petrichor-sky font-black uppercase tracking-[0.3em] text-sm mb-4">Strategic Partnership</h2>
            <h1 className="text-5xl md:text-7xl font-outfit font-bold text-petrichor-navy mb-8 leading-tight">
              Get a Free <br /> 
              <span className="relative inline-block">
                Technology Session
                <span className="absolute bottom-2 left-0 w-full h-3 bg-petrichor-sky/20 -z-10 rounded-full"></span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Speak with our senior engineers to identify the right technology path for your business. Let's turn your vision into scalable architecture.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,85,140,0.08)] p-8 md:p-16 border border-white relative overflow-hidden">
              {/* Decorative side bar */}
              <div className="absolute left-0 top-0 w-2 h-full bg-petrichor-sky"></div>

              {isSubmitted ? (
                <div className="py-20 flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom duration-500">
                  <div className="w-24 h-24 bg-petrichor-light text-petrichor-sky rounded-3xl flex items-center justify-center mb-8 shadow-inner">
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                  </div>
                  <h2 className="text-4xl font-bold text-petrichor-navy mb-4">Request Received!</h2>
                  <p className="text-xl text-slate-500 max-w-md">Our lead engineer will contact you within 24 hours to schedule your deep-dive session.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-petrichor-navy ml-1">Full Name</label>
                      <input required type="text" placeholder="e.g. Michael Chen" className="w-full px-8 py-5 rounded-2xl bg-petrichor-light/50 border border-transparent focus:bg-white focus:outline-none focus:ring-4 focus:ring-petrichor-sky/10 focus:border-petrichor-sky transition-all text-lg placeholder:text-slate-300" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-petrichor-navy ml-1">Your Email</label>
                      <input required type="email" placeholder="e.g. mike@company.com" className="w-full px-8 py-5 rounded-2xl bg-petrichor-light/50 border border-transparent focus:bg-white focus:outline-none focus:ring-4 focus:ring-petrichor-sky/10 focus:border-petrichor-sky transition-all text-lg placeholder:text-slate-300" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-petrichor-navy ml-1">Phone Number</label>
                      <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full px-8 py-5 rounded-2xl bg-petrichor-light/50 border border-transparent focus:bg-white focus:outline-none focus:ring-4 focus:ring-petrichor-sky/10 focus:border-petrichor-sky transition-all text-lg placeholder:text-slate-300" />
                    </div>
                    <div className="flex items-end pb-2">
                       <p className="text-xs text-slate-400 font-medium italic">We typically respond within 1 business day.</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-petrichor-navy ml-1">Project Vision</label>
                    <textarea required rows={5} placeholder="Describe the intelligent solution you want to build..." className="w-full px-8 py-5 rounded-2xl bg-petrichor-light/50 border border-transparent focus:bg-white focus:outline-none focus:ring-4 focus:ring-petrichor-sky/10 focus:border-petrichor-sky transition-all text-lg resize-none placeholder:text-slate-300"></textarea>
                  </div>

                  <div className="flex items-center gap-5 p-6 bg-petrichor-navy/[0.02] rounded-3xl border border-petrichor-navy/5">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-petrichor-sky shrink-0 shadow-sm border border-slate-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"/><path d="M22 12A10 10 0 1 1 12 2"/></svg>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Your data is encrypted. We only use this information to assign the most relevant senior engineer to your session.
                    </p>
                  </div>

                  <button type="submit" className="w-full py-6 bg-petrichor-navy text-white rounded-2xl font-black text-xl hover:bg-petrichor-sky shadow-[0_20px_40px_-10px_rgba(0,85,140,0.3)] transition-all hover:-translate-y-1 active:scale-95">
                    Book My Strategy Session
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
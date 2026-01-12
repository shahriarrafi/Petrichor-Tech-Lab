import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-20 selection:bg-petrichor-sky/30">
      {/* Story Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="transition-all duration-700 animate-in fade-in slide-in-from-left">
              <h2 className="text-petrichor-sky font-black uppercase tracking-[0.3em] text-sm mb-4">Our Story</h2>
              <h1 className="text-5xl md:text-6xl font-outfit font-bold text-petrichor-navy mb-8 leading-tight">
                Engineering <span className="text-petrichor-sky">Fresh Innovation</span> Like Rain.
              </h1>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                The word <span className="text-petrichor-navy font-semibold italic">"Petrichor"</span> describes the earthy scent produced when rain falls on dry soil. To us, it represents the moment innovation meets necessity — a fresh, revitalizing transformation for businesses waiting for growth.
              </p>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Petrichor Tech Lab was founded with a single mission: to provide high-level, research-driven engineering to companies that refuse to settle for generic digital tools. We believe technology should be as unique as the vision it supports.
              </p>
              
              {/* Stats Bar */}
              <div className="flex flex-wrap gap-12 py-10 border-y border-slate-100">
                <div>
                  <div className="text-4xl font-bold text-petrichor-navy">30+</div>
                  <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Engineers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-petrichor-navy">100+</div>
                  <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Solutions Deployed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-petrichor-navy">93.78%</div>
                  <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Retention Rate</div>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative transition-all duration-700 animate-in fade-in slide-in-from-right">
              <div className="relative z-10 bg-petrichor-light rounded-[3rem] overflow-hidden aspect-square shadow-2xl border-8 border-white">
                 <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                    alt="Abstract Tech" 
                    className="w-full h-full object-cover mix-blend-multiply opacity-90"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-petrichor-navy/40 to-transparent"></div>
              </div>
              
              {/* Mission Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl z-20 max-w-xs border border-white/50">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="w-2 h-8 bg-petrichor-sky rounded-full"></div>
                   <p className="text-petrichor-navy font-black uppercase tracking-widest text-xs">Our Mission</p>
                 </div>
                 <p className="text-slate-700 font-medium leading-relaxed">
                   To democratize complex AI and high-end software engineering for businesses globally.
                 </p>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-petrichor-sky/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-petrichor-light/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-petrichor-sky font-black uppercase tracking-[0.3em] text-sm mb-4">The Values</h2>
          <h3 className="text-4xl md:text-5xl font-outfit font-bold text-petrichor-navy mb-20">What Drives Petrichor</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="group p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-0 bg-petrichor-sky group-hover:h-full transition-all duration-500"></div>
              <div className="w-20 h-20 bg-petrichor-light text-petrichor-navy rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-petrichor-navy group-hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h4 className="text-2xl font-bold text-petrichor-navy mb-4">Visionary Thinking</h4>
              <p className="text-slate-500 leading-relaxed">
                We look beyond the horizon to anticipate technological shifts before they happen.
              </p>
            </div>

            {/* Value 2 */}
            <div className="group p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-0 bg-petrichor-sky group-hover:h-full transition-all duration-500"></div>
              <div className="w-20 h-20 bg-petrichor-light text-petrichor-navy rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-petrichor-navy group-hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
              </div>
              <h4 className="text-2xl font-bold text-petrichor-navy mb-4">Precision Engineering</h4>
              <p className="text-slate-500 leading-relaxed">
                Good is not enough. We strive for technical perfection in every line of code we ship.
              </p>
            </div>

            {/* Value 3 */}
            <div className="group p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-0 bg-petrichor-sky group-hover:h-full transition-all duration-500"></div>
              <div className="w-20 h-20 bg-petrichor-light text-petrichor-navy rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-petrichor-navy group-hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4 className="text-2xl font-bold text-petrichor-navy mb-4">Unwavering Trust</h4>
              <p className="text-slate-500 leading-relaxed">
                We treat every client as a partner, ensuring transparency at every stage of the journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
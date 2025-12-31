
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Story</h2>
              <h1 className="text-5xl md:text-6xl font-outfit font-bold text-slate-900 mb-8 leading-tight">
                Engineering <span className="text-blue-600">Fresh Innovation</span> Like Rain.
              </h1>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                The word "Petrichor" describes the earthy scent produced when rain falls on dry soil. To us, it represents the moment innovation meets necessity — a fresh, revitalizing transformation for businesses waiting for growth.
              </p>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Petrichor Tech Lab was founded with a single mission: to provide high-level, research-driven engineering to companies that refuse to settle for generic digital tools. We believe technology should be as unique as the vision it supports.
              </p>
              
              <div className="flex flex-wrap gap-8 py-8 border-y border-slate-100">
                <div>
                  <div className="text-3xl font-bold text-slate-900">50+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest">Engineers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">200+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest">Solutions Deployed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">99%</div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest">Client Retention</div>
                </div>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right duration-700">
              <div className="relative z-10 bg-slate-100 rounded-[40px] overflow-hidden aspect-square shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                    alt="Abstract Tech" 
                    className="w-full h-full object-cover"
                 />
              </div>
              <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl shadow-xl z-20 max-w-xs">
                 <p className="text-blue-600 font-bold mb-2">Our Mission</p>
                 <p className="text-slate-700 font-medium">To democratize complex AI and high-end software engineering for businesses globally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-outfit font-bold text-slate-900 mb-16">The Values That Drive Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Visionary Thinking</h4>
              <p className="text-slate-500 leading-relaxed">We look beyond the horizon to anticipate technological shifts before they happen.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Precision Engineering</h4>
              <p className="text-slate-500 leading-relaxed">Good is not enough. We strive for mathematical and technical perfection in our code.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Unwavering Trust</h4>
              <p className="text-slate-500 leading-relaxed">We treat every client as a partner, ensuring transparency and accountability at every stage.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

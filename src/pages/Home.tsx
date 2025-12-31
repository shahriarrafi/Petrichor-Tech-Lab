
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, PILLARS, PROCESS_STEPS } from '../../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
    {/* Hero Section */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
      {/* Animated Background Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl motion-safe:animate-pulse" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="transition-all duration-700 opacity-0 translate-y-6 motion-safe:animate-[fadeUp_0.7s_ease-out_forwards]">

          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 motion-safe:animate-ping"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
            </span>
            Pioneering Intelligent Innovation
          </div>

          <h1 className="font-outfit text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Building Intelligent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Digital Solutions
            </span>{" "}
            <br />
            for the Future
          </h1>

          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Petrichor Tech Lab helps businesses scale with next-generation software,
            custom AI models, and research-driven technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/consultancy"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Get Free Consultancy
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-200 bg-white text-slate-900 font-bold text-lg transition hover:bg-slate-50"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden md:block transition-all duration-1000 opacity-0 scale-95 motion-safe:animate-[fadeZoom_1s_ease-out_forwards]">

          <div className="relative z-10 p-2 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
              alt="Modern SaaS Dashboard"
              loading="lazy"
              className="rounded-2xl w-full h-auto"
            />
          </div>

          {/* Floating Card – Growth */}
          <div className="absolute -top-10 -right-10 z-30 rounded-2xl bg-white/80 backdrop-blur-xl p-4 shadow-xl motion-safe:animate-bounce">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                ↑
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                  Growth Rate
                </div>
                <div className="text-lg font-bold text-slate-900">+124%</div>
              </div>
            </div>
          </div>

          {/* Floating Card – Clients */}
          <div className="absolute -bottom-6 -left-10 z-30 rounded-2xl bg-slate-900 text-white p-5 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[101, 102, 103].map(id => (
                  <img
                    key={id}
                    src={`https://picsum.photos/id/${id}/40/40`}
                    className="w-8 h-8 rounded-full border-2 border-slate-900"
                    alt="Client avatar"
                  />
                ))}
              </div>
              <div className="text-sm font-medium">500+ Clients Scaled</div>
            </div>
          </div>

        </div>
      </div>
    </section>


      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-6">Expertise That Drives Tomorrow</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              We combine engineering excellence with strategic insight to build solutions that solve complex business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <Link 
                key={service.id} 
                to={service.path}
                className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h4>
                <p className="text-slate-500 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our DNA</h2>
              <h3 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 mb-8 leading-tight">Why Leading Companies Trust Petrichor</h3>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                We bring a unique blend of engineering rigor and creative thinking to every project, ensuring your technology is an asset, not a liability.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {PILLARS.map((pillar, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="text-blue-600">
                      {pillar.icon}
                    </div>
                    <h5 className="font-bold text-slate-900">{pillar.title}</h5>
                    <p className="text-sm text-slate-500 leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-blue-600 rounded-3xl overflow-hidden shadow-2xl rotate-3 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-full h-full border-2 border-blue-100 rounded-3xl -rotate-3 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Workflow</h2>
            <h3 className="text-4xl font-outfit font-bold text-slate-900 mb-6">A Proven Path to Digital Success</h3>
          </div>

          <div className="relative">
            {/* Timeline Connector */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
              {PROCESS_STEPS.map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-6 shadow-lg shadow-blue-500/30">
                    {step.number}
                  </div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h5>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-outfit font-bold text-white mb-8">
            Start Your Free Technology <br /> Consultation Today
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Ready to transform your business with intelligent digital solutions? Our experts are standing by to help you map out your next move.
          </p>
          <Link to="/consultancy" className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-50 hover:scale-105 transition-all shadow-xl shadow-black/10">
            Book Consultation Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

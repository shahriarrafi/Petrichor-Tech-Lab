import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PILLARS, PROCESS_STEPS } from '../../constants';
import { 
  Loader2, 
  Layout, 
  Code2, 
  TrendingUp, 
  BrainCircuit, 
  FlaskConical, 
  UserSquare2 
} from 'lucide-react';

// Map the icon_name from your JSON to the actual Lucide components
const iconMap: Record<string, React.ElementType> = {
  Layout: Layout,
  Code2: Code2,
  TrendingUp: TrendingUp,
  BrainCircuit: BrainCircuit,
  FlaskConical: FlaskConical,
  UserSquare2: UserSquare2,
};

const Home: React.FC = () => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/services`);
        const result = await res.json();
        setServices(result.data || []);
      } catch (err) {
        console.error("Failed to fetch services:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="animate-spin text-petrichor-navy" size={48} />
      </div>
    );
  }

  return (
    <div className="pt-20 selection:bg-petrichor-sky/30">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-[#FFFFFF]">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-petrichor-sky/10 rounded-full blur-[120px] motion-safe:animate-pulse" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-petrichor-navy/5 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="transition-all duration-700 opacity-0 translate-y-6 motion-safe:animate-[fadeUp_0.7s_ease-out_forwards]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-petrichor-light border border-petrichor-sky/20 text-petrichor-navy text-xs font-bold uppercase tracking-[0.15em]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-petrichor-sky opacity-75 motion-safe:animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-petrichor-sky"></span>
              </span>
              Pioneering Intelligent Innovation
            </div>

            <h1 className="font-outfit text-5xl md:text-7xl font-bold text-petrichor-navy leading-[1.1] mb-8">
              Building Intelligent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-petrichor-navy via-petrichor-sky to-petrichor-sky">
                Digital Solutions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-lg leading-relaxed">
              Petrichor Tech Lab helps businesses scale with next-generation software, 
              custom AI models, and research-driven technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/consultancy"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-petrichor-navy text-white font-bold text-lg transition-all hover:bg-petrichor-sky hover:shadow-2xl hover:shadow-petrichor-sky/30"
              >
                Get Free Consultancy
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-slate-100 bg-white text-petrichor-navy font-bold text-lg transition hover:border-petrichor-sky hover:bg-petrichor-light"
              >
                Our Services
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block transition-all duration-1000 opacity-0 scale-95 motion-safe:animate-[fadeZoom_1s_ease-out_forwards]">
            <div className="relative z-10 p-3 rounded-[2.5rem] bg-gradient-to-tr from-petrichor-navy/10 to-petrichor-sky/10 backdrop-blur-sm border border-white/50 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                alt="Modern SaaS Dashboard"
                className="rounded-[2rem] w-full h-auto object-cover shadow-inner"
              />
            </div>
            <div className="absolute -top-6 -right-6 z-30 rounded-2xl bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 motion-safe:animate-bounce">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-petrichor-sky/10 flex items-center justify-center text-petrichor-sky">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Growth</div>
                  <div className="text-xl font-bold text-petrichor-navy">+124%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-petrichor-sky font-black uppercase tracking-[0.3em] text-sm mb-4">Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-outfit font-bold text-petrichor-navy mb-6">Built to Scale</h3>
            <div className="h-1.5 w-24 bg-petrichor-sky mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => {
              // Get the component from the map based on the string from API
              const IconComponent = iconMap[service.icon_name] || Layout;

              return (
                <Link 
                  key={service.id} 
                  to={`/services/${service.slug}`}
                  className="group relative p-10 rounded-[2rem] border border-slate-100 bg-white hover:border-petrichor-sky/30 hover:shadow-[0_30px_60px_-15px_rgba(0,85,140,0.1)] transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-petrichor-light rounded-bl-[5rem] -mr-12 -mt-12 transition-all group-hover:bg-petrichor-sky/10 group-hover:scale-150"></div>
                  
                  <div className="relative z-10 w-16 h-16 bg-petrichor-light rounded-2xl flex items-center justify-center text-petrichor-navy mb-8 group-hover:bg-petrichor-navy group-hover:text-white transition-all duration-300">
                    <IconComponent size={32} />
                  </div>
                  
                  <h4 className="relative z-10 text-2xl font-bold text-petrichor-navy mb-4">{service.title}</h4>
                  <p className="relative z-10 text-slate-500 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="relative z-10 flex items-center gap-2 text-petrichor-sky font-bold text-sm uppercase tracking-wider">
                    Explore Service 
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 bg-petrichor-light/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square bg-petrichor-navy rounded-[3rem] overflow-hidden shadow-2xl relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Team Collaboration" 
                    className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[12px] border-petrichor-sky/20 rounded-[3rem] z-0"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-petrichor-sky font-black uppercase tracking-[0.3em] text-sm mb-4">Our DNA</h2>
              <h3 className="text-4xl md:text-5xl font-outfit font-bold text-petrichor-navy mb-8 leading-tight">Why Leading Companies Trust Petrichor</h3>
              
              <div className="grid gap-8">
                {PILLARS.map((pillar, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-petrichor-light flex items-center justify-center text-petrichor-sky">
                      {pillar.icon}
                    </div>
                    <div>
                      <h5 className="font-bold text-petrichor-navy text-lg mb-1">{pillar.title}</h5>
                      <p className="text-slate-500 text-sm leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-petrichor-sky font-black uppercase tracking-[0.3em] text-sm mb-4">Workflow</h2>
            <h3 className="text-4xl font-outfit font-bold text-petrichor-navy mb-6">Methodology for Success</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 relative">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="group relative flex flex-col items-center text-center">
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-petrichor-navy text-white flex items-center justify-center font-black text-xl mb-8 shadow-xl shadow-petrichor-navy/20 group-hover:bg-petrichor-sky group-hover:-translate-y-2 transition-all duration-300">
                  {step.number}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="absolute left-full w-full h-[2px] bg-slate-100 top-1/2 -translate-y-1/2 hidden lg:block z-[-1]"></div>
                  )}
                </div>
                <h5 className="text-lg font-bold text-petrichor-navy mb-3">{step.title}</h5>
                <p className="text-xs text-slate-400 font-medium leading-relaxed px-4">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-6 mb-12 rounded-[3rem] py-24 bg-petrichor-navy relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-petrichor-sky/20 to-transparent"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-petrichor-sky/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-outfit font-bold text-white mb-8">
            Let's build something <br /> <span className="text-petrichor-sky">extraordinary.</span>
          </h2>
          <p className="text-blue-100/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business with intelligent digital solutions? 
            Our experts are standing by to help you map out your next move.
          </p>
          <Link 
            to="/consultancy" 
            className="inline-block bg-petrichor-sky text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-petrichor-navy transition-all hover:scale-105 shadow-2xl"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
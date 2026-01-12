import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { Loader2, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
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

  const DynamicIcon = ({ name }: { name: string }) => {
    const IconComponent = (LucideIcons as any)[name] || LucideIcons.Layout;
    return <IconComponent size={32} />;
  };

  const getImageUrl = (path: string) => {
    const baseUrl = import.meta.env.VITE_API_URL.replace('/api', '');
    return `${baseUrl}${path}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="animate-spin text-petrichor-navy" size={48} />
      </div>
    );
  }

  return (
    <div className="pt-20 selection:bg-petrichor-sky/30">
      {/* Header Section */}
      <section className="py-24 bg-white border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-petrichor-sky font-black uppercase tracking-[0.3em] text-sm mb-4">Our Capabilities</h2>
            <h1 className="text-5xl md:text-7xl font-outfit font-bold text-petrichor-navy mb-8">
              Intelligence <br /> <span className="text-slate-400">&</span> Architecture
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We provide a comprehensive suite of digital engineering services designed to scale 
              enterprises through research-driven innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-40">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full animate-in fade-in slide-in-from-bottom duration-700">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-petrichor-light text-petrichor-navy mb-8 font-bold text-sm">
                    <div className="text-petrichor-sky">
                      <DynamicIcon name={''} />
                    </div>
                    <span>Service 0{index + 1}</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-outfit font-bold text-petrichor-navy mb-6">
                    {service.title}
                  </h2>
                  
                  <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                    {service.features?.map((f: string, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold group/item">
                        <div className="w-5 h-5 bg-petrichor-sky/10 text-petrichor-sky rounded-full flex items-center justify-center shrink-0 group-hover/item:bg-petrichor-sky group-hover/item:text-white transition-colors">
                          <LucideIcons.Check size={12} strokeWidth={4} />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to={`/services/${service.slug}`} 
                    className="group inline-flex items-center gap-3 text-petrichor-navy font-black uppercase tracking-widest text-xs hover:text-petrichor-sky transition-colors"
                  >
                    View Engineering Specs
                    <div className="w-8 h-[2px] bg-petrichor-sky group-hover:w-12 transition-all"></div>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full">
                  <div className="relative group animate-in fade-in zoom-in duration-1000">
                    {/* Decorative back-layer */}
                    <div className="absolute -inset-4 bg-petrichor-light rounded-[3rem] -z-10 group-hover:bg-petrichor-sky/5 transition-colors duration-500"></div>
                    
                    <div className="aspect-[4/3] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                      <img 
                        src={getImageUrl(service.image)} 
                        alt={service.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-petrichor-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    </div>

                    {/* Badge */}
                    <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl hidden lg:block border border-slate-50">
                       <p className="text-petrichor-sky font-black text-[10px] uppercase tracking-widest mb-1">Status</p>
                       <p className="text-petrichor-navy font-bold">Lab Certified</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-petrichor-light/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-outfit font-bold text-petrichor-navy mb-8">Not sure which solution fits your needs?</h3>
          <Link 
            to="/consultancy" 
            className="inline-block bg-petrichor-navy text-white px-12 py-5 rounded-full font-black text-lg hover:bg-petrichor-sky shadow-2xl transition-all hover:-translate-y-1"
          >
            Request Technical Assessment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
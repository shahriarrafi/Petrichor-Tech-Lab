import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { Loader2, ArrowLeft } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>(); 
  const navigate = useNavigate();
  const [service, setService] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/services`);
        const result = await res.json();
        const found = result.data.find((s: any) => s.slug === serviceId);
        
        if (!found) {
          navigate('/services');
        } else {
          setService(found);
        }
      } catch (err) {
        navigate('/services');
      } finally {
        setLoading(false);
      }
    };
    fetchService();
    window.scrollTo(0, 0);
  }, [serviceId, navigate]);

  const DynamicIcon = ({ name }: { name: string }) => {
    const IconComponent = (LucideIcons as any)[name] || LucideIcons.Layout;
    return <IconComponent size={32} />;
  };

  const getImageUrl = (path: string) => {
    const baseUrl = import.meta.env.VITE_API_URL.replace('/api', '');
    return `${baseUrl}${path}`;
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Loader2 className="animate-spin text-petrichor-navy" size={48} />
    </div>
  );

  if (!service) return null;

  return (
    <div className="pt-32 pb-24 selection:bg-petrichor-sky/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <Link to="/services" className="inline-flex items-center gap-2 text-petrichor-sky font-black uppercase tracking-widest text-xs mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          Back to Lab Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            {/* Category Icon */}
            <div className="w-20 h-20 bg-petrichor-light text-petrichor-navy rounded-3xl flex items-center justify-center mb-10 shadow-inner">
              <DynamicIcon name={service.icon_name} />
            </div>

            <h1 className="text-5xl md:text-6xl font-outfit font-bold text-petrichor-navy mb-8 leading-tight">
              {service.title}
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              {service.description}
            </p>
            
            {/* Features Card */}
            <div className="bg-petrichor-light/50 p-10 rounded-[2.5rem] border border-petrichor-navy/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-petrichor-sky/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-petrichor-sky/10 transition-colors"></div>
              
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-petrichor-navy mb-8 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-petrichor-sky"></span>
                Core Capabilities
              </h3>
              
              <ul className="grid grid-cols-1 gap-5">
                {service.features?.map((f: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-slate-700 font-medium">
                    <div className="mt-1 w-6 h-6 bg-petrichor-sky text-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-petrichor-sky/20">
                      <LucideIcons.Check size={14} strokeWidth={4} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <Link 
              to="/consultancy" 
              className="mt-12 inline-block bg-petrichor-navy text-white px-10 py-5 rounded-full font-black text-lg hover:bg-petrichor-sky transition-all hover:scale-105 shadow-[0_20px_40px_-10px_rgba(0,85,140,0.3)] active:scale-95"
            >
              Start Technical Scoping
            </Link>
          </div>

          {/* Visual Side */}
          <div className="relative animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative z-10 aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                <img 
                  src={getImageUrl(service.image)} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petrichor-navy/60 via-transparent to-transparent"></div>
                
                {/* Floating Info Tag */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-petrichor-navy font-black uppercase tracking-widest text-[10px] mb-1">Standard</p>
                            <p className="text-xl font-bold text-petrichor-navy">100% Custom Solution</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-petrichor-sky/10 flex items-center justify-center text-petrichor-sky">
                            <LucideIcons.Zap size={20} fill="currentColor" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Geometric Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 border-[24px] border-petrichor-light rounded-full -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-petrichor-sky/10 rounded-[2rem] -z-10 rotate-12 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Trust Section Mini */}
      <div className="max-w-7xl mx-auto px-6 mt-32">
        <div className="py-12 border-t border-slate-100 flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale">
            {/* Optional: Add client logos here */}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
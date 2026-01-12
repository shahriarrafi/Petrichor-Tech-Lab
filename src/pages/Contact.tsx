import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const target = e.target as any;
    
    try {
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
    } catch (error) {
      console.error("Transmission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white selection:bg-petrichor-sky/30">
      {/* Abstract Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-petrichor-sky/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-petrichor-navy/5 rounded-full blur-[100px]" />
      </div>

      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#00558C 1px, transparent 1px)', size: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Branding & Info */}
            <div className="space-y-12 animate-in fade-in slide-in-from-left duration-1000">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-petrichor-light rounded-full border border-petrichor-sky/10">
                  <div className="w-2 h-2 rounded-full bg-petrichor-sky animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-petrichor-sky">Secure Lab Portal</span>
                </div>
                <h1 className="text-6xl lg:text-8xl font-outfit font-bold text-petrichor-navy leading-[0.9] tracking-tighter">
                  Contact <br />
                  <span className="text-petrichor-sky">Protocol.</span>
                </h1>
                <p className="text-slate-500 text-lg max-w-md font-medium leading-relaxed pt-4">
                  Ready to deploy your next digital innovation? Initialize contact with our engineering team.
                </p>
              </div>
              
              <div className="grid gap-4 max-w-md">
                {[
                  { icon: <Mail size={24} />, label: "Data Transmission", value: "contact@petrichortechlab.com", sub: "Response time: < 24h" },
                  { icon: <Phone size={24} />, label: "Direct Uplink", value: "+880 167 003 6956", sub: "Mon - Fri, 9am - 6pm" },
                  { icon: <MapPin size={24} />, label: "Physical Node", value: "East Rampura, Dhaka-1219", sub: "Petrichor HQ" }
                ].map((item, idx) => (
                  <div key={idx} className="group p-6 rounded-[2rem] bg-white border border-slate-100 hover:border-petrichor-sky/30 hover:shadow-xl hover:shadow-petrichor-navy/5 transition-all duration-500 flex items-center gap-6">
                    <div className="w-14 h-14 bg-petrichor-light text-petrichor-sky rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-black uppercase tracking-widest text-[9px] text-slate-400 mb-1">{item.label}</h5>
                      <p className="text-md font-bold text-petrichor-navy">{item.value}</p>
                      <p className="text-[10px] text-slate-400 font-medium mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: High-Tech Form */}
            <div className="relative animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[3.5rem] border border-white shadow-[0_40px_80px_-15px_rgba(0,0,50,0.08)] relative">
                
                {isSubmitted ? (
                  <div className="py-24 text-center space-y-6 animate-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-petrichor-sky text-white rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl shadow-petrichor-sky/40">
                      <CheckCircle2 size={48} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold text-petrichor-navy">Transmission Successful</h3>
                      <p className="text-slate-500 font-medium">Your request has been logged in our system.</p>
                    </div>
                    <button onClick={() => setIsSubmitted(false)} className="text-petrichor-sky font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all">
                      Send another message <ArrowUpRight size={18} />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-petrichor-navy/60 ml-2">Full Name</label>
                        <input type="text" required placeholder="Subject Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-petrichor-sky/5 focus:border-petrichor-sky transition-all outline-none font-medium text-petrichor-navy" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-petrichor-navy/60 ml-2">Email Address</label>
                        <input type="email" required placeholder="name@domain.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-petrichor-sky/5 focus:border-petrichor-sky transition-all outline-none font-medium text-petrichor-navy" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-petrichor-navy/60 ml-2">Phone Uplink</label>
                      <input type="tel" required placeholder="+880" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-petrichor-sky/5 focus:border-petrichor-sky transition-all outline-none font-medium text-petrichor-navy" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-petrichor-navy/60 ml-2">Technical Description</label>
                      <textarea required rows={4} placeholder="Briefly describe your project scope..." className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-petrichor-sky/5 focus:border-petrichor-sky transition-all outline-none font-medium text-petrichor-navy resize-none" />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="group w-full py-6 bg-petrichor-navy text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-petrichor-sky shadow-2xl shadow-petrichor-navy/20 transition-all active:scale-[0.98] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Execute Transmission
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
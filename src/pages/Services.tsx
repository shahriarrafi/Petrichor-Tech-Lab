
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom duration-700">
            <h1 className="text-5xl font-outfit font-bold text-slate-900 mb-6">Our Capabilities</h1>
            <p className="text-lg text-slate-600">
              We offer a comprehensive suite of digital services designed to take your enterprise into the future. From deep AI research to enterprise software systems.
            </p>
          </div>

          <div className="space-y-32">
            {SERVICES_DATA.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
                <div className="flex-1 w-full">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-500/20">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl font-outfit font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features?.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M20 6 9 17l-5-5"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/consultancy" className="inline-flex items-center gap-2 text-blue-600 font-bold text-lg group">
                    Get Started with this Service
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={`https://picsum.photos/seed/${service.id}/800/600`} 
                      alt={service.title} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

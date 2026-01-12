import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/petrichor_tech_lab.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-600 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img 
                src={Logo} 
                alt="Petrichor Tech Lab" 
                className="w-32 lg:w-44 object-contain" 
              />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
              Building intelligent digital solutions for the future. We help businesses scale with software, AI, and cutting-edge research.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-petrichor-sky hover:border-petrichor-sky transition-all duration-300 group shadow-sm">
                <svg className="group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-petrichor-sky hover:border-petrichor-sky transition-all duration-300 group shadow-sm">
                <svg className="group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-petrichor-sky hover:border-petrichor-sky transition-all duration-300 group shadow-sm">
                <svg className="group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-petrichor-navy uppercase text-xs tracking-[0.2em]">Company</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><Link to="/" className="hover:text-petrichor-sky transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-petrichor-sky transition-colors">The Lab</Link></li>
              <li><Link to="/contact" className="hover:text-petrichor-sky transition-colors">Contact</Link></li>
              <li><Link to="/consultancy" className="hover:text-petrichor-sky transition-colors">Free Consultancy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-petrichor-navy uppercase text-xs tracking-[0.2em]">Services</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><Link to="/services/web-app" className="hover:text-petrichor-sky transition-colors">Web & App Dev</Link></li>
              <li><Link to="/services/software-dev" className="hover:text-petrichor-sky transition-colors">Software Systems</Link></li>
              <li><Link to="/services/ai-ml" className="hover:text-petrichor-sky transition-colors">AI & Data Science</Link></li>
              <li><Link to="/services/research" className="hover:text-petrichor-sky transition-colors">R&D Lab</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-petrichor-navy uppercase text-xs tracking-[0.2em]">Connect</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li className="flex gap-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-petrichor-sky"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+880 167 003 6956</span>
              </li>
              <li className="flex gap-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-petrichor-sky"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>contact@petrichortechlab.com</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-petrichor-sky mt-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="leading-relaxed">DIT Road, East Rampura, Dhaka-1219</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 text-center text-slate-400 text-[11px] uppercase tracking-widest font-bold">
          <p>&copy; {new Date().getFullYear()} Petrichor Tech Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
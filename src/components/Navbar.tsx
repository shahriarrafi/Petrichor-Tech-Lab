
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES_DATA } from '../../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass shadow-sm' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/></svg>
          </div>
          <span className="font-outfit font-bold text-xl tracking-tight text-slate-900">
            Petrichor<span className="text-blue-600">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>Home</Link>
          <Link to="/about" className={`text-sm font-medium transition-colors ${location.pathname === '/about' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>About</Link>
          
          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <button className={`text-sm font-medium transition-colors flex items-center gap-1 ${location.pathname.startsWith('/services') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>
              Services
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden flex flex-col animate-in fade-in slide-in-from-top-2 duration-200">
                  {SERVICES_DATA.map((service) => (
                    <Link 
                      key={service.id} 
                      to={service.path}
                      className="px-4 py-3 hover:bg-slate-50 rounded-xl transition-colors flex items-start gap-3 group"
                    >
                      <div className="mt-0.5 text-blue-600 opacity-70 group-hover:opacity-100 transition-opacity">
                        {service.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">{service.title}</div>
                        <div className="text-xs text-slate-500 line-clamp-1">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/contact" className={`text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>Contact</Link>
          
          <Link to="/consultancy" className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95">
            Free Consultancy
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{isMobileMenuOpen ? <path d="M18 6 6 18M6 6l12 12"/> : <path d="M4 6h16M4 12h16M4 18h16"/>}</svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-white z-40 md:hidden overflow-y-auto animate-in fade-in slide-in-from-right duration-300">
          <div className="p-6 flex flex-col gap-6">
            <Link to="/" className="text-xl font-semibold text-slate-900 py-2 border-b border-slate-100">Home</Link>
            <Link to="/about" className="text-xl font-semibold text-slate-900 py-2 border-b border-slate-100">About Us</Link>
            <div className="flex flex-col gap-4">
               <span className="text-xl font-semibold text-slate-900 py-2">Services</span>
               <div className="grid grid-cols-1 gap-4 pl-4">
                 {SERVICES_DATA.map(s => (
                   <Link key={s.id} to={s.path} className="text-slate-600 text-lg">{s.title}</Link>
                 ))}
               </div>
            </div>
            <Link to="/contact" className="text-xl font-semibold text-slate-900 py-2 border-b border-slate-100">Contact</Link>
            <Link to="/consultancy" className="bg-blue-600 text-white text-center py-4 rounded-2xl font-bold text-lg">Get Free Consultancy</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { Loader2 } from 'lucide-react';
import Logo from '../../assets/petrichor_tech_lab.png';

interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon_name: string;
}

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const location = useLocation();

  // Fetch Services for Dropdown
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/services`);
        const result = await res.json();
        setServices(result.data || []);
      } catch (err) {
        console.error("Menu fetch failed", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchServices();
  }, []);

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

  // Helper to render dynamic icons
  const DynamicIcon = ({ name }: { name: string }) => {
    const IconComponent = (LucideIcons as any)[name] || LucideIcons.Layout;
    return <IconComponent size={18} />;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/95 shadow-lg' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src={Logo} alt="Petrichor Tech Lab" className="w-28 lg:w-36 object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-petrichor-sky' : (isScrolled ? ' hover:text-petrichor-sky' : 'text-slate-600 hover:text-petrichor-sky')}`}>Home</Link>
          <Link to="/about" className={`text-sm font-medium transition-colors ${location.pathname === '/about' ? 'text-petrichor-sky' : (isScrolled ? ' hover:text-petrichor-sky' : 'text-slate-600 hover:text-petrichor-sky')}`}>About</Link>
          
          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <Link to="/services" className={`text-sm font-medium transition-colors flex items-center gap-1 ${location.pathname.startsWith('/services') ? 'text-petrichor-sky' : (isScrolled ? ' hover:text-petrichor-sky' : 'text-slate-600 hover:text-petrichor-sky')}`}>
              Services
              <LucideIcons.ChevronDown size={14} />
            </Link>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden flex flex-col animate-in fade-in slide-in-from-top-2 duration-200">
                  {isLoading ? (
                    <div className="p-4 text-center text-slate-400"><Loader2 className="animate-spin mx-auto" size={20}/></div>
                  ) : services.length > 0 ? (
                    services.map((service) => (
                      <Link 
                        key={service.id} 
                        to={`/services/${service.slug}`}
                        className="px-4 py-3 hover:bg-slate-50 rounded-xl transition-colors flex items-start gap-3 group"
                      >
                        <div className="mt-0.5 text-petrichor-sky opacity-70 group-hover:opacity-100 transition-opacity bg-petrichor-light p-1.5 rounded-lg">
                          <DynamicIcon name={service.icon_name} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-petrichor-sky transition-colors">{service.title}</div>
                          <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{service.description}</div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="p-4 text-sm text-slate-500 text-center">No services available</div>
                  )}
                  <div className="border-t border-slate-50 mt-1 pt-1">
                    <Link to="/services" className="block px-4 py-2 text-xs font-bold text-center text-petrichor-sky hover:bg-petrichor-light rounded-lg transition-colors">
                        View All Services
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/contact" className={`text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'text-petrichor-sky' : (isScrolled ? ' hover:text-petrichor-sky' : 'text-slate-600 hover:text-petrichor-sky')}`}>Contact</Link>
          
          <Link to="/consultancy" className="bg-petrichor-sky text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-petrichor-navy hover:shadow-lg hover:shadow-petrichor-sky/30 transition-all active:scale-95">
            Free Consultancy
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <LucideIcons.X size={24} /> : <LucideIcons.Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-white z-40 md:hidden overflow-y-auto animate-in fade-in slide-in-from-right duration-300 border-t border-slate-100">
          <div className="p-6 flex flex-col gap-6">
            <Link to="/" className="text-xl font-semibold text-slate-900 py-2 border-b border-slate-100">Home</Link>
            <Link to="/about" className="text-xl font-semibold text-slate-900 py-2 border-b border-slate-100">About Us</Link>
            
            <div className="flex flex-col gap-4">
               <Link to="/services" className="text-xl font-semibold text-slate-900 py-2 flex items-center justify-between">
                 Services
                 <LucideIcons.ArrowRight size={16} className="text-slate-400" />
               </Link>
               <div className="grid grid-cols-1 gap-3 pl-4 border-l-2 border-slate-100 ml-2">
                 {isLoading ? (
                   <span className="text-slate-400 text-sm">Loading services...</span>
                 ) : services.map(s => (
                   <Link key={s.id} to={`/services/${s.slug}`} className="text-slate-600 text-base py-1 flex items-center gap-2 active:text-petrichor-sky">
                     <DynamicIcon name={s.icon_name} />
                     {s.title}
                   </Link>
                 ))}
               </div>
            </div>

            <Link to="/contact" className="text-xl font-semibold text-slate-900 py-2 border-b border-slate-100">Contact</Link>
            <Link to="/consultancy" className="bg-petrichor-sky text-white text-center py-4 rounded-2xl font-bold text-lg mt-4 shadow-xl shadow-petrichor-light">
                Get Free Consultancy
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
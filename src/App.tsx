
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Consultancy from './pages/Consultancy';
import { Dashboard } from './pages/admin/Dashboard';
import ServiceDetail from './pages/ServiceDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/consultancy" element={<Consultancy />} />
            </Route>

            {/* 🔐 Admin Dashboard (NO NAV / FOOTER) */}
            <Route element={<AdminLayout />}>
              <Route path="/admin" element={<Dashboard />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
    
  );
};

export default App;

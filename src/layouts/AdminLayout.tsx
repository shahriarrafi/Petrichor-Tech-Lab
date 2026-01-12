
import React, { useState, useEffect } from 'react';
import { Layout } from '../components/admin/Layout';
import { LoginForm } from '../components/admin/LoginForm';
import { Dashboard } from '../pages/admin/Dashboard';
import {ConsultationManager} from '../pages/admin/ConsultationManager';
import { ServiceManager } from '../pages/admin/ServiceManager';

type View = 'dashboard' | 'services' | 'consultations' | 'contactus';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return !!localStorage.getItem('adminToken');
  });

  const [currentView, setCurrentView] = useState<View>('dashboard');

  const handleLogin = (success: boolean, token?: string) => {
    if (success && token) {
      localStorage.setItem('adminToken', token);
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
  };


  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-accent flex items-center justify-center p-4">
        <LoginForm onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <Layout activeView={currentView} setView={setCurrentView} onLogout={handleLogout}>
      {currentView === 'dashboard' && <Dashboard />}
      {currentView === 'consultations' && <ConsultationManager />}
      {currentView === 'services' && <ServiceManager />}
    </Layout>
  );
};

export default App;

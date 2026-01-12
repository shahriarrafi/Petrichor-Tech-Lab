import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Layers, 
  Activity, 
  ChevronRight, 
  Database, 
  Globe, 
  ArrowUpRight,
  Terminal
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const [stats, setStats] = useState({
    totalInquiries: 0,
    newToday: 0,
    servicesCount: 0,
  });

  // Example recent inquiries placeholder - would be populated by fetch
  const recentInquiries = []; 

  return (
    <div className="space-y-8 selection:bg-petrichor-sky/30">
      
      {/* HEADER TELEMETRY */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Transmissions" 
          value="128" 
          icon={Users} 
          trend="+12% from last month"
          color="navy" 
        />
        <StatCard 
          title="Service Protocols" 
          value="8" 
          icon={Layers} 
          trend="All systems active"
          color="sky" 
        />
        <StatCard 
          title="Conversion Rate" 
          value="24.8%" 
          icon={Activity} 
          trend="+2.1% spike"
          color="sky" 
        />
        <StatCard 
          title="Active Sessions" 
          value="14" 
          icon={Globe} 
          trend="Real-time traffic"
          color="navy" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* RECENT INQUIRIES REGISTRY */}
        <div className="lg:col-span-2 bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex justify-between items-center">
            <div>
              <h3 className="text-petrichor-navy font-black uppercase tracking-widest text-xs mb-1">Recent Inquiries</h3>
              <p className="text-slate-400 text-[10px] uppercase font-medium">Latest Lab Transmissions</p>
            </div>
            <Link to="/admin/consultations" className="text-petrichor-sky font-bold text-xs flex items-center gap-2 hover:gap-3 transition-all">
              View All <ChevronRight size={14} />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-petrichor-light/50 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                <tr>
                  <th className="px-8 py-4">Partner</th>
                  <th className="px-8 py-4">Focus Area</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {/* Placeholder Row */}
                <tr className="hover:bg-petrichor-light/30 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-petrichor-navy text-white flex items-center justify-center text-[10px] font-black">JS</div>
                      <span className="text-sm font-bold text-petrichor-navy">Julian Schmidt</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-xs font-semibold text-slate-500">AI Architecture</td>
                  <td className="px-8 py-5">
                    <span className="px-3 py-1 bg-petrichor-sky/10 text-petrichor-sky rounded-full text-[10px] font-black uppercase">New</span>
                  </td>
                  <td className="px-8 py-5 text-xs text-slate-400 font-mono">2024-03-24 14:20</td>
                </tr>
              </tbody>
            </table>
            {recentInquiries.length === 0 && (
                <div className="p-20 text-center">
                    <p className="text-slate-300 italic text-sm font-medium">Monitoring incoming data streams...</p>
                </div>
            )}
          </div>
        </div>

        {/* SYSTEM CONTROL PANEL */}
        <div className="space-y-8">
          {/* Documentation / Lab Manual */}
          <div className="bg-petrichor-navy rounded-[2.5rem] p-8 text-white relative overflow-hidden group shadow-xl shadow-petrichor-navy/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-petrichor-sky/20 rounded-bl-[5rem] -mr-8 -mt-8 group-hover:bg-petrichor-sky/30 transition-all"></div>
            <Terminal className="text-petrichor-sky mb-6" size={32} />
            <h3 className="font-outfit font-bold text-xl mb-3">Lab Documentation</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              Access engineering protocols and admin management guidelines.
            </p>
            <button className="w-full bg-white text-petrichor-navy py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-petrichor-sky hover:text-white transition-all">
              Open Manual
            </button>
          </div>

          {/* System Health */}
          <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-petrichor-sky rounded-full"></div>
                <h3 className="text-petrichor-navy font-black uppercase tracking-widest text-xs">Environment Health</h3>
            </div>
            <div className="space-y-6">
                <HealthItem label="Core API" icon={Globe} />
                <HealthItem label="Database" icon={Database} />
                <HealthItem label="Cloud Infrastructure" icon={Activity} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- COMPONENTS ---------------- */

const StatCard = ({ title, value, icon: Icon, trend, color }: any) => {
  return (
    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group hover:border-petrichor-sky/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
          color === 'navy' ? 'bg-petrichor-navy text-white' : 'bg-petrichor-light text-petrichor-sky'
        }`}>
          <Icon size={20} />
        </div>
        <div className="text-petrichor-sky">
            <ArrowUpRight size={18} />
        </div>
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{title}</p>
        <p className="text-4xl font-outfit font-bold text-petrichor-navy mb-2">{value}</p>
        <p className="text-[10px] font-bold text-slate-400 italic">{trend}</p>
      </div>
    </div>
  );
};

const HealthItem = ({ label, icon: Icon }: any) => (
  <div className="flex items-center justify-between group cursor-default">
    <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-slate-50 text-slate-400 rounded-lg flex items-center justify-center group-hover:text-petrichor-sky transition-colors">
            <Icon size={14} />
        </div>
        <span className="text-sm font-bold text-slate-600">{label}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-[10px] font-black text-petrichor-sky">STABLE</span>
      <span className="flex relative h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-petrichor-sky opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-petrichor-sky"></span>
      </span>
    </div>
  </div>
);
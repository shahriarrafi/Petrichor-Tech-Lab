import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Trash2, 
  Mail, 
  MailOpen, 
  Calendar, 
  Phone, 
  MessageSquare,
  Circle,
  Inbox,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { ConsultancyFormData } from '../../../types';

export const ConsultationManager: React.FC = () => {
  const [consultations, setConsultations] = useState<ConsultancyFormData[]>([]);
  const [selected, setSelected] = useState<ConsultancyFormData | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchConsultations();
  }, []);

  const fetchConsultations = async () => {
    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/consultations`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setConsultations(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Confirm permanent removal of this transmission?")) return;
    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/consultations/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setConsultations(prev => prev.filter(c => c.id !== id));
        setSelected(null);
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const toggleReadStatus = async (id: number) => {
    try {
      const token = localStorage.getItem('admin_token');
      const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/consultations/${id}/toggle-read`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        const { is_read } = await response.json();
        setConsultations(prev => prev.map(c => c.id === id ? { ...c, is_read } : c));
        if (selected?.id === id) setSelected({ ...selected, is_read });
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const filteredConsultations = consultations.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="flex items-center justify-center h-screen bg-petrichor-light">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-petrichor-sky border-t-petrichor-navy rounded-full animate-spin"></div>
        <p className="text-petrichor-navy font-black uppercase tracking-[0.2em] text-xs">Accessing Lab Data...</p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-140px)] p-6 max-w-[1600px] mx-auto selection:bg-petrichor-sky/30">
      
      {/* Inquiry Sidebar */}
      <div className="w-full lg:w-[420px] flex flex-col bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-50 bg-white">
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-petrichor-navy font-black uppercase tracking-widest text-xs">Incoming Transmissions</h3>
             <span className="bg-petrichor-light text-petrichor-sky text-[10px] font-bold px-2 py-1 rounded-md">
                {consultations.filter(c => !c.is_read).length} New
             </span>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search partner or email..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-petrichor-light/50 rounded-2xl border border-transparent focus:bg-white focus:border-petrichor-sky focus:ring-4 focus:ring-petrichor-sky/5 outline-none text-sm transition-all placeholder:text-slate-300" 
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {filteredConsultations.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 p-8 text-center">
              <Inbox className="w-12 h-12 mb-3 opacity-10" />
              <p className="text-xs font-medium">No records found</p>
            </div>
          ) : (
            filteredConsultations.map(c => (
              <div 
                key={c.id} 
                onClick={() => setSelected(c)}
                className={`group p-5 rounded-2xl border transition-all cursor-pointer relative ${selected?.id === c.id ? 'bg-petrichor-navy text-white border-petrichor-navy shadow-lg shadow-petrichor-navy/20' : 'bg-white border-transparent hover:bg-petrichor-light/50 text-slate-600'}`}
              >
                {!c.is_read && <Circle className={`absolute right-5 top-1/2 -translate-y-1/2 w-2 h-2 fill-petrichor-sky text-petrichor-sky ${selected?.id === c.id ? 'fill-white text-white' : ''}`} />}
                
                <div className="flex justify-between items-start mb-1 pr-6">
                  <h4 className={`text-sm font-bold truncate ${selected?.id === c.id ? 'text-white' : 'text-petrichor-navy'}`}>{c.name}</h4>
                  <span className={`text-[10px] font-medium whitespace-nowrap opacity-60`}>
                    {new Date(c.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${selected?.id === c.id ? 'text-petrichor-sky' : 'text-petrichor-sky'}`}>
                   {c.phone ? 'Verified Lead' : 'Web Inquiry'}
                </p>
                <p className="text-xs line-clamp-1 opacity-70 italic">"{c.message}"</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Detail Viewer */}
      <div className="flex-1 bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col">
        {selected ? (
          <>
            {/* Header Toolbar */}
            <div className="px-8 py-6 border-b border-slate-50 flex justify-between items-center bg-white sticky top-0 z-10">
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${selected.is_read ? 'bg-slate-100 text-slate-400' : 'bg-petrichor-sky/10 text-petrichor-sky'}`}>
                  {selected.is_read ? <Clock className="w-3 h-3" /> : <ShieldCheck className="w-3 h-3" />}
                  {selected.is_read ? 'Reviewed' : 'Awaiting Review'}
                </div>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => toggleReadStatus(selected.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${selected.is_read ? 'bg-petrichor-light text-petrichor-navy hover:bg-slate-200' : 'bg-petrichor-sky text-white hover:bg-petrichor-navy shadow-lg shadow-petrichor-sky/20'}`}
                >
                  {selected.is_read ? <Mail className="w-4 h-4" /> : <MailOpen className="w-4 h-4" />}
                  {selected.is_read ? 'Mark Unread' : 'Mark as Read'}
                </button>
                <button 
                  onClick={() => handleDelete(selected.id)}
                  className="p-2.5 rounded-xl border border-slate-100 text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-12 flex-1 overflow-y-auto">
              <div className="max-w-3xl mx-auto space-y-12">
                
                {/* Profile Section */}
                <div className="flex items-center gap-8">
                  <div className="w-20 h-20 bg-petrichor-light rounded-[2rem] flex items-center justify-center text-petrichor-navy text-3xl font-black shadow-inner">
                    {selected.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-3xl font-outfit font-bold text-petrichor-navy mb-3">{selected.name}</h2>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center gap-2 text-slate-500 font-medium">
                         <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center"><Mail className="w-4 h-4 text-petrichor-sky" /></div>
                         {selected.email}
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 font-medium">
                         <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center"><Phone className="w-4 h-4 text-petrichor-sky" /></div>
                         {selected.phone}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-slate-50 w-full"></div>

                {/* Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] block">Submission Protocol</span>
                    <p className="text-petrichor-navy font-bold flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-petrichor-sky" />
                      Encrypted Lab Inquiry
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] block">Date Timestamp</span>
                    <p className="text-petrichor-navy font-bold flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-petrichor-sky" />
                      {new Date(selected.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Message Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-1 bg-petrichor-sky rounded-full"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-petrichor-navy">Inquiry Message</span>
                  </div>
                  <div className="p-10 rounded-[2.5rem] bg-petrichor-light/50 border border-petrichor-navy/5 relative group">
                    <MessageSquare className="absolute top-6 right-6 w-12 h-12 text-petrichor-navy/5 group-hover:text-petrichor-sky/10 transition-colors" />
                    <p className="text-slate-700 leading-relaxed text-xl whitespace-pre-line relative z-10 font-medium">
                      "{selected.message}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-petrichor-light/10">
            <div className="w-24 h-24 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 flex items-center justify-center text-slate-200 mb-8">
              <Inbox className="w-10 h-10 opacity-20" />
            </div>
            <h3 className="text-2xl font-outfit font-bold text-petrichor-navy">System Standby</h3>
            <p className="text-slate-500 text-sm max-w-xs mt-4 leading-relaxed">
              Select a transmission from the lab registry to view full technical specifications and partner details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
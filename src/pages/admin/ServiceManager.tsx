import React, { useState, useEffect } from 'react';
import { 
  Trash2, 
  Pencil, 
  Plus, 
  X, 
  Upload, 
  Save, 
  Loader2, 
  Layout, 
  Image as ImageIcon,
  CheckCircle2,
  Settings,
  ShieldCheck
} from "lucide-react";

interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  features: string[];
  icon_name: string;
}

export const ServiceManager: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  
  const [form, setForm] = useState({
    title: '',
    description: '',
    features: '', 
    icon_name: 'Layout',
    image: null as File | null
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const fetchServices = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/services`);
      const result = await res.json();
      setServices(result.data || []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchServices(); }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm({ ...form, image: file });
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleEdit = (service: Service) => {
    setEditingId(service.id);
    setForm({
      title: service.title,
      description: service.description,
      features: service.features.join(', '),
      icon_name: service.icon_name,
      image: null
    });
    const baseUrl = import.meta.env.VITE_API_URL.replace('/api', '');
    setPreviewUrl(`${baseUrl}${service.image}`);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingId(null);
    setPreviewUrl(null);
    setForm({ title: '', description: '', features: '', icon_name: 'Layout', image: null });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    const fd = new FormData();
    fd.append('title', form.title);
    fd.append('description', form.description);
    fd.append('icon_name', form.icon_name);
    
    const featuresArray = form.features.split(',').map(f => f.trim()).filter(Boolean);
    fd.append('features', JSON.stringify(featuresArray));
    
    if (form.image) { fd.append('image', form.image); }
    if (editingId) { fd.append('_method', 'PUT'); }

    const url = editingId 
      ? `${import.meta.env.VITE_API_URL}/services/${editingId}` 
      : `${import.meta.env.VITE_API_URL}/services`;

    try {
      const token = localStorage.getItem('admin_token');
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
        body: fd
      });

      if (res.ok) {
        fetchServices();
        closeModal();
      }
    } catch (err) {
      alert("Network connection failed.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Confirm deletion of this service protocol?")) return;
    try {
      const token = localStorage.getItem('admin_token');
      const res = await fetch(`${import.meta.env.VITE_API_URL}/services/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) fetchServices();
    } catch (err) { console.error(err); }
  };

  return (
    <div className="max-w-[1400px] mx-auto p-6 selection:bg-petrichor-sky/30">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h2 className="text-petrichor-sky font-black uppercase tracking-[0.3em] text-[10px] mb-2">Internal Registry</h2>
          <h1 className="text-4xl font-outfit font-bold text-petrichor-navy">Service Protocols</h1>
          <p className="text-slate-400 text-sm mt-1">Manage and deploy professional technology offerings.</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-petrichor-navy hover:bg-petrichor-sky text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 transition-all shadow-xl shadow-petrichor-navy/10 active:scale-95"
        >
          <Plus size={18} /> Initialize New Protocol
        </button>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-32 gap-4">
          <Loader2 className="animate-spin text-petrichor-sky" size={48} />
          <p className="text-petrichor-navy font-black text-[10px] tracking-widest uppercase">Fetching Lab Data</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden group hover:shadow-2xl hover:shadow-petrichor-navy/5 transition-all duration-500">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={`${import.meta.env.VITE_API_URL.replace('/api', '')}${service.image}`} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-petrichor-navy/10 group-hover:bg-transparent transition-all" />
                <div className="absolute top-6 right-6 flex gap-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button onClick={() => handleEdit(service)} className="p-3 bg-white text-petrichor-navy rounded-xl shadow-xl hover:bg-petrichor-sky hover:text-white transition-colors"><Pencil size={18}/></button>
                  <button onClick={() => handleDelete(service.id)} className="p-3 bg-white text-red-500 rounded-xl shadow-xl hover:bg-red-500 hover:text-white transition-colors"><Trash2 size={18}/></button>
                </div>
                <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl shadow-sm">
                   <p className="text-[10px] font-black uppercase tracking-widest text-petrichor-navy">{service.icon_name}</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-petrichor-navy mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed mb-6 font-medium">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((f, i) => (
                    <span key={i} className="text-[9px] font-black uppercase tracking-[0.1em] bg-petrichor-light text-petrichor-sky px-3 py-1.5 rounded-lg">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modern Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-petrichor-navy/80 backdrop-blur-md">
          <div className="bg-white rounded-[3rem] w-full max-w-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="p-10 border-b border-slate-50 flex justify-between items-center bg-white">
              <div>
                <h2 className="text-3xl font-bold text-petrichor-navy">{editingId ? 'Modify Protocol' : 'Initialize Protocol'}</h2>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Service Configuration Lab</p>
              </div>
              <button onClick={closeModal} className="p-3 hover:bg-petrichor-light rounded-2xl text-slate-400 transition-colors"><X size={28} /></button>
            </div>

            <form onSubmit={handleSubmit} className="p-10 space-y-8 overflow-y-auto max-h-[75vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-petrichor-navy ml-1">Protocol Title</label>
                  <input required className="w-full px-6 py-4 bg-petrichor-light/50 border-none rounded-2xl focus:bg-white focus:ring-4 focus:ring-petrichor-sky/10 outline-none transition-all" 
                    value={form.title} onChange={e => setForm({...form, title: e.target.value})} placeholder="e.g. Cloud Infrastructure" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-petrichor-navy ml-1">Icon Reference</label>
                  <input required className="w-full px-6 py-4 bg-petrichor-light/50 border-none rounded-2xl focus:bg-white focus:ring-4 focus:ring-petrichor-sky/10 outline-none transition-all" 
                    value={form.icon_name} onChange={e => setForm({...form, icon_name: e.target.value})} placeholder="Code, Database, Activity..." />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-petrichor-navy ml-1">Scope Description</label>
                <textarea required rows={3} className="w-full px-6 py-4 bg-petrichor-light/50 border-none rounded-2xl focus:bg-white focus:ring-4 focus:ring-petrichor-sky/10 outline-none transition-all resize-none" 
                  value={form.description} onChange={e => setForm({...form, description: e.target.value})} placeholder="Define the technical boundaries of this service..." />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-petrichor-navy ml-1">Key Specs (Comma Separated)</label>
                <input required className="w-full px-6 py-4 bg-petrichor-light/50 border-none rounded-2xl focus:bg-white focus:ring-4 focus:ring-petrichor-sky/10 outline-none transition-all" 
                  value={form.features} onChange={e => setForm({...form, features: e.target.value})} placeholder="Spec A, Spec B, Spec C" />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-petrichor-navy ml-1">Visual Identity</label>
                <div className="relative group border-4 border-dashed border-petrichor-light rounded-[2.5rem] p-10 text-center hover:border-petrichor-sky hover:bg-petrichor-light/20 transition-all cursor-pointer">
                  <input type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                  {previewUrl ? (
                    <div className="relative inline-block">
                        <img src={previewUrl} className="h-40 rounded-[2rem] object-cover shadow-2xl" alt="Preview" />
                        <div className="absolute inset-0 bg-petrichor-navy/20 rounded-[2rem] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Upload className="text-white" size={32} />
                        </div>
                    </div>
                  ) : (
                    <div className="py-4">
                      <div className="w-16 h-16 bg-petrichor-light text-petrichor-sky rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Upload size={28} />
                      </div>
                      <p className="text-sm text-petrichor-navy font-bold">Upload Visual Metadata</p>
                      <p className="text-xs text-slate-400 mt-1 uppercase tracking-tighter">Drag and drop assets here</p>
                    </div>
                  )}
                </div>
              </div>

              <button 
                disabled={isSaving} 
                className="w-full py-6 bg-petrichor-navy text-white rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 shadow-2xl shadow-petrichor-navy/20 hover:bg-petrichor-sky transition-all disabled:opacity-50 active:scale-95"
              >
                {isSaving ? <Loader2 className="animate-spin" size={20} /> : <ShieldCheck size={20} />}
                {isSaving ? 'Synchronizing Lab...' : editingId ? 'Update Protocol' : 'Deploy Protocol'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
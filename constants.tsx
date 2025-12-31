
import React from 'react';

export const COLORS = {
  primary: '#1E40AF', // Deep Tech Blue
  secondary: '#3B82F6', // Blue-500
  accent: '#60A5FA', // Blue-400
  dark: '#0F172A', // Slate-900
  light: '#F8FAFC', // Slate-50
};

export const SERVICES_DATA = [
  {
    id: 'web-app',
    title: 'Web & App Development',
    description: 'Modern websites, SaaS platforms, and performance-driven mobile applications built with the latest technologies.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
    ),
    features: ['Custom Web Applications', 'React/Next.js Platforms', 'iOS & Android Apps', 'PWA Development'],
    path: '/services/web-app'
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    description: 'Bespoke enterprise systems, robust dashboards, and intelligent automation tools tailored to your workflow.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
    ),
    features: ['Enterprise ERP/CRM', 'Custom Dashboards', 'Workflow Automation', 'Cloud Infrastructure'],
    path: '/services/software-dev'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Branding',
    description: 'Elevate your brand presence with data-driven SEO, strategic advertising, and unique visual identities.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></svg>
    ),
    features: ['SEO Strategy', 'Brand Identity Design', 'Social Growth', 'PPC Management'],
    path: '/services/marketing'
  },
  {
    id: 'ai-ml',
    title: 'AI, Data & Machine Learning',
    description: 'Unlocking business potential through predictive models, advanced data analytics, and intelligent automation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2Z"/><path d="M12 12 2.1 12c.5-5.2 4.7-9.4 9.9-9.9V12Z"/><path d="m12 12 6.6-7.5"/><path d="m12 12 9.1 4.1"/></svg>
    ),
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Data Engineering'],
    path: '/services/ai-ml'
  },
  {
    id: 'tech-research',
    title: 'Tech Research Lab',
    description: 'Where future concepts become reality. We specialize in R&D, rapid prototyping, and emerging tech exploration.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 3h15"/><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"/><path d="M6 14h12"/></svg>
    ),
    features: ['R&D Strategy', 'Rapid Prototyping', 'Feasibility Studies', 'Innovation Workshops'],
    path: '/services/research'
  },
  {
    id: 'consultancy',
    title: 'Consultancy',
    description: 'Strategic tech guidance, system architecture design, and expert mentorship for startups and scaling enterprises.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    features: ['Startup Guidance', 'System Architecture', 'Tech Stack Selection', 'Security Audits'],
    path: '/services/consultancy'
  }
];

export const PILLARS = [
  {
    title: 'Innovation',
    description: 'We don’t just follow trends; we set them by exploring the cutting edge of what’s possible.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="M2 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="M12 22v-4"/><path d="m19.07 19.07-2.83-2.83"/><path d="M22 12h-4"/><path d="m19.07 4.93-2.83 2.83"/></svg>
  },
  {
    title: 'Reliability',
    description: 'Robust systems that scale. We build architectures that businesses can depend on 24/7.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
  },
  {
    title: 'Performance',
    description: 'Speed and efficiency are at the core of every solution we ship. No compromises.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
  },
  {
    title: 'Research-Driven',
    description: 'Our solutions are backed by rigorous scientific inquiry and data-driven insights.',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  }
];

export const PROCESS_STEPS = [
  { title: 'Discover', number: '01', description: 'Understanding your goals and market landscape.' },
  { title: 'Plan', number: '02', description: 'Architecting the solution roadmap and tech stack.' },
  { title: 'Design', number: '03', description: 'Crafting intuitive user experiences and interfaces.' },
  { title: 'Build', number: '04', description: 'Agile development with continuous integration.' },
  { title: 'Launch', number: '05', description: 'Deployment and quality assurance testing.' },
  { title: 'Scale', number: '06', description: 'Ongoing support and performance optimization.' }
];

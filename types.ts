
// Fix: Added React import to provide access to the React namespace for React.ReactNode.
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
  path: string;
}

export interface PillarItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  title: string;
  description: string;
  number: string;
}

export interface ConsultancyFormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  projectDescription: string;
}

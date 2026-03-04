import React, { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 hover:shadow-lg transition-shadow duration-300">
      <div className="w-12 h-12 bg-neutral-900 text-white rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-neutral-900">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
}

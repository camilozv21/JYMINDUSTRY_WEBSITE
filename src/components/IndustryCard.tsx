import React, { ReactNode } from 'react';

interface IndustryCardProps {
  icon: ReactNode;
  title: string;
}

export default function IndustryCard({ icon, title }: IndustryCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-neutral-100 hover:border-neutral-300 transition-colors text-center group">
      <div className="w-12 h-12 mb-3 text-neutral-400 group-hover:text-neutral-900 transition-colors">
        {icon}
      </div>
      <h3 className="font-semibold text-neutral-900">{title}</h3>
    </div>
  );
}

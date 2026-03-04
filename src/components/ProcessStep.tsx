import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon?: ReactNode; // Added icon prop as it was used in page.tsx
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, icon, isLast = false }) => {
  return (
    <div className="flex flex-col items-center text-center relative max-w-sm mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="relative mb-6 flex justify-center">
            {/* If icon is present, display it differently or alongside number, 
                but adhering to original design where icon was passed in page.tsx 
                In the original page.tsx, ProcessStep took an icon prop but displayed it below the number.
            */}
            <div className="w-16 h-16 rounded-full bg-neutral-900 text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10 relative">
            {number}
            </div>
            {!isLast && (
            <div className="hidden md:block absolute top-1/2 left-1/2 w-full h-0.5 bg-neutral-200 -z-0 transform -translate-y-1/2 ml-8" />
            )}
        </div>
        
        {icon && <div className="mb-4 text-neutral-900 flex justify-center">{icon}</div>}
        
        <h3 className="text-xl font-bold text-neutral-900 mb-3">{title}</h3>
        <p className="text-neutral-600 leading-relaxed">{description}</p>
      </motion.div>
    </div>
  );
};

export default ProcessStep;

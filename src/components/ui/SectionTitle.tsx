import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  const { theme } = useTheme();
  
  return (
    <div className="text-center mb-16">
      <h2 className={`text-3xl md:text-4xl font-bold inline-block font-mono relative ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        {children}
        <span className={`absolute -bottom-3 left-0 w-full h-1 ${
          theme === 'dark' ? 'bg-cyan-400' : 'bg-indigo-600'
        }`}></span>
        <span className={`absolute -bottom-3 left-0 w-1/3 h-1 ${
          theme === 'dark' ? 'bg-purple-500' : 'bg-purple-600'
        } animate-pulse`}></span>
      </h2>
    </div>
  );
};

export default SectionTitle;
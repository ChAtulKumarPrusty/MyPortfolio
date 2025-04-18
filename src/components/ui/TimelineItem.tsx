import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { BriefcaseIcon } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  isRight: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  location,
  period,
  description,
  skills,
  isRight
}) => {
  const { theme } = useTheme();
  
  return (
    <div className={`flex items-start mb-12 ${isRight ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      {/* Content container */}
      <div className={`w-full lg:w-1/2 ${isRight ? 'lg:pr-12' : 'lg:pl-12'}`}>
        <div className={`p-5 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 ${
          theme === 'dark' 
            ? 'bg-gray-800 shadow-cyan-900/20' 
            : 'bg-white shadow-indigo-200/50'
        }`}>
          <div className="flex justify-between items-start mb-3 flex-wrap">
            <div>
              <h3 className="text-xl font-bold font-mono">{title}</h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {company}, {location}
              </p>
            </div>
            <span className={`text-sm px-3 py-1 rounded-full font-mono mt-1 ${
              theme === 'dark' ? 'bg-gray-700 text-cyan-400' : 'bg-gray-100 text-indigo-600'
            }`}>
              {period}
            </span>
          </div>
          
          <ul className={`mb-4 ml-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            {description.map((item, index) => (
              <li key={index} className="mb-1 list-disc">{item}</li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className={`text-xs px-2 py-1 rounded-md ${
                  theme === 'dark' 
                    ? 'bg-gray-700 text-gray-300' 
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Timeline circle - Always visible on mobile, hidden on desktop for the content side */}
      <div className={`mr-4 lg:mr-0 flex-shrink-0 ${isRight ? 'lg:block' : 'lg:hidden'}`}>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 ${
          theme === 'dark' 
            ? 'bg-gray-800 border-gray-700 text-cyan-400' 
            : 'bg-white border-gray-200 text-indigo-600'
        }`}>
          <BriefcaseIcon className="w-5 h-5" />
        </div>
      </div>
      
      {/* Hidden desktop side - will be empty */}
      <div className={`hidden lg:block lg:w-1/2 ${isRight ? 'lg:hidden' : 'lg:flex lg:justify-end'}`}>
        <div className={`mr-4 flex-shrink-0 ${isRight ? 'hidden' : 'block'}`}>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 ${
            theme === 'dark' 
              ? 'bg-gray-800 border-gray-700 text-cyan-400' 
              : 'bg-white border-gray-200 text-indigo-600'
          }`}>
            <BriefcaseIcon className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
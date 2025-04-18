import React, { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useInView } from '../../hooks/useInView';

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, color }) => {
  const { theme } = useTheme();
  const [width, setWidth] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  useEffect(() => {
    if (inView) {
      setWidth(percentage);
    }
  }, [inView, percentage]);
  
  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm font-mono">{percentage}%</span>
      </div>
      <div className={`h-3 rounded-full overflow-hidden ${
        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
      }`}>
        <div 
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${width}%`,
            backgroundColor: color 
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
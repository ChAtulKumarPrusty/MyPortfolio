import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { ExternalLink, Github as GitHub, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 ${
        theme === 'dark' 
          ? 'bg-gray-800 shadow-cyan-900/20' 
          : 'bg-white shadow-indigo-200/50'
      }`}
    >
      <div className="relative h-48 overflow-hidden group">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center ${
          theme === 'dark' ? 'bg-gray-900/70' : 'bg-indigo-900/40'
        }`}>
          <div className="flex space-x-4">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  theme === 'dark' 
                    ? 'bg-cyan-500 text-gray-900 hover:bg-cyan-400' 
                    : 'bg-white text-indigo-600 hover:bg-gray-100'
                }`}
                aria-label="View live project"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${
                  theme === 'dark' 
                    ? 'bg-cyan-500 text-gray-900 hover:bg-cyan-400' 
                    : 'bg-white text-indigo-600 hover:bg-gray-100'
                }`}
                aria-label="View source code"
              >
                <GitHub className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-mono truncate">{project.title}</h3>
          <span className={`text-xs font-mono px-2 py-1 rounded-full ${
            theme === 'dark' ? 'bg-gray-700 text-cyan-400' : 'bg-gray-100 text-indigo-600'
          }`}>
            {project.year}
          </span>
        </div>
        
        <p className={`text-sm mb-4 ${
          expanded ? '' : 'line-clamp-2'
        } ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.description}
        </p>
        
        {project.description.length > 100 && (
          <button 
            onClick={() => setExpanded(!expanded)}
            className={`flex items-center text-xs mb-4 ${
              theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
            }`}
          >
            {expanded ? (
              <>
                <span>Show less</span>
                <ChevronUp className="w-4 h-4 ml-1" />
              </>
            ) : (
              <>
                <span>Read more</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </>
            )}
          </button>
        )}
        
        <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-700">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className={`text-xs px-2 py-1 rounded-md ${
                theme === 'dark' 
                  ? 'bg-gray-700 text-gray-300' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
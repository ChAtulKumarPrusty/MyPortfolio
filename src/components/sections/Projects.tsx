import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import { projectsData } from '../../data/projectsData';

type ProjectCategory = 'all' | 'data-analysis' | 'machine-learning' | 'visualization' | 'web-dev';

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-12">
          <CategoryButton 
            active={activeCategory === 'all'} 
            onClick={() => setActiveCategory('all')}
          >
            All Projects
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'data-analysis'} 
            onClick={() => setActiveCategory('data-analysis')}
          >
            Data Analysis
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'machine-learning'} 
            onClick={() => setActiveCategory('machine-learning')}
          >
            Machine Learning
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'visualization'} 
            onClick={() => setActiveCategory('visualization')}
          >
            Visualization
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'web-dev'} 
            onClick={() => setActiveCategory('web-dev')}
          >
            Web Development
          </CategoryButton>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className={`mb-6 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Want to see more of my projects?
          </p>
          <a 
            href="https://github.com/ChAtulKumarPrusty" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-block px-6 py-3 rounded-lg font-medium transition-colors ${
              theme === 'dark'
                ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700 border border-cyan-400'
                : 'bg-gray-100 text-indigo-600 hover:bg-gray-200 border border-indigo-600'
            }`}
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

interface CategoryButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ active, onClick, children }) => {
  const { theme } = useTheme();
  
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        active
          ? theme === 'dark'
            ? 'bg-cyan-500 text-gray-900'
            : 'bg-indigo-600 text-white'
          : theme === 'dark'
            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      {children}
    </button>
  );
};

export default Projects;

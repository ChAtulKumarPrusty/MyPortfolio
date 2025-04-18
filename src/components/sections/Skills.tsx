import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import SectionTitle from '../ui/SectionTitle';
import { skillsData } from '../../data/skillsData';
import SkillBar from '../ui/SkillBar';

type SkillCategory = 'all' | 'languages' | 'frameworks' | 'tools' | 'databases';

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Technical Skills</SectionTitle>
        
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-12">
          <CategoryButton 
            active={activeCategory === 'all'} 
            onClick={() => setActiveCategory('all')}
          >
            All
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'languages'} 
            onClick={() => setActiveCategory('languages')}
          >
            Languages
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'frameworks'} 
            onClick={() => setActiveCategory('frameworks')}
          >
            Frameworks
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'tools'} 
            onClick={() => setActiveCategory('tools')}
          >
            Tools
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'databases'} 
            onClick={() => setActiveCategory('databases')}
          >
            Databases
          </CategoryButton>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {filteredSkills.map((skill) => (
            <SkillBar 
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              color={skill.color}
            />
          ))}
        </div>
        
        <div className={`mt-16 p-6 rounded-lg ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          <h3 className="text-xl font-bold mb-4 font-mono">Advanced Data Science Competencies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <CompetencyCard title="Machine Learning Algorithms">
              Regression, Classification, Clustering, Dimensionality Reduction, Neural Networks
            </CompetencyCard>
            <CompetencyCard title="Data Engineering">
              ETL Pipelines, Data Cleaning, Feature Engineering, Data Warehousing
            </CompetencyCard>
            <CompetencyCard title="Statistical Analysis">
              Hypothesis Testing, A/B Testing, Regression Analysis, Bayesian Methods
            </CompetencyCard>
            <CompetencyCard title="Deep Learning">
              CNN, RNN, Transformers, Transfer Learning, GANs, Reinforcement Learning
            </CompetencyCard>
            <CompetencyCard title="Big Data Technologies">
              Hadoop, Spark, Kafka, Airflow, Distributed Computing
            </CompetencyCard>
            <CompetencyCard title="Data Visualization">
              Interactive Dashboards, Storytelling with Data, Information Design
            </CompetencyCard>
          </div>
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

interface CompetencyCardProps {
  title: string;
  children: React.ReactNode;
}

const CompetencyCard: React.FC<CompetencyCardProps> = ({ title, children }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`p-4 rounded-lg border ${
      theme === 'dark' 
        ? 'border-gray-700 bg-gray-800/50' 
        : 'border-gray-200 bg-white'
    }`}>
      <h4 className={`font-bold mb-2 ${
        theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
      }`}>{title}</h4>
      <p className="text-sm">{children}</p>
    </div>
  );
};

export default Skills;
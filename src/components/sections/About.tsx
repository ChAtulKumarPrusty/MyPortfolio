import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Code, Database, LineChart, BrainCog } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const About: React.FC = () => {
  const { theme } = useTheme();

  const imageUrl = "https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className={`rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 ${
              theme === 'dark' ? 'shadow-cyan-500/20' : 'shadow-indigo-500/20'
            }`}
          >
            <img 
              src={imageUrl} 
              alt="Developer profile" 
              className="w-full h-auto object-cover"
            />
            <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <div className="flex justify-around text-center">
                <div>
                  <p className={`font-bold text-lg ${theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'}`}>3+</p>
                  <p className="text-sm">Years Coding</p>
                </div>
                <div>
                  <p className={`font-bold text-lg ${theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'}`}>25+</p>
                  <p className="text-sm">Projects</p>
                </div>
                <div>
                  <p className={`font-bold text-lg ${theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'}`}>3+</p>
                  <p className="text-sm">ML Models</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 font-mono">
              A Data Scientist and ML Engineer with a passion for solving complex problems
            </h3>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Hello! I'm Ch Atul Kumar Prusty, a Computer Science student specializing in Data Science. 
              I love working with data and building intelligent systems that can extract meaningful insights.
            </p>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              My journey in data science began during my undergraduate studies, where I discovered
              the power of machine learning algorithms and statistical analysis. Since then, I've dedicated
              myself to mastering various techniques in data processing, visualization, and predictive modeling.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <Code className={`h-6 w-6 mb-2 ${theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'}`} />
                <h4 className="font-bold mb-1">Programming</h4>
                <p className="text-sm">Python, C, C++, Java, JavaScript, SQL, More...</p>
              </div>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <Database className={`h-6 w-6 mb-2 ${theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'}`} />
                <h4 className="font-bold mb-1">Data Management</h4>
                <p className="text-sm">SQL, NoSQL, Data Warehousing</p>
              </div>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <LineChart className={`h-6 w-6 mb-2 ${theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'}`} />
                <h4 className="font-bold mb-1">Visualization</h4>
                <p className="text-sm">Matplotlib, Seaborn, D3.js</p>
              </div>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <BrainCog className={`h-6 w-6 mb-2 ${theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'}`} />
                <h4 className="font-bold mb-1">Machine Learning</h4>
                <p className="text-sm">TensorFlow, PyTorch, scikit-learn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
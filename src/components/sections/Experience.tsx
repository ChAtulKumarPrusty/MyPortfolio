import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import SectionTitle from '../ui/SectionTitle';
import TimelineItem from '../ui/TimelineItem';

const Experience: React.FC = () => {
  const { theme } = useTheme();

  const experiences = [
    {
      id: 1,
      title: 'Data Science Intern',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      period: 'Jun 2023 - Aug 2023',
      description: [
        'Developed predictive models using Python and TensorFlow to forecast customer behavior',
        'Cleaned and analyzed over 1TB of raw customer data to identify key trends',
        'Created interactive dashboards using Plotly and Dash to present findings to stakeholders'
      ],
      skills: ['Python', 'TensorFlow', 'Pandas', 'Data Visualization']
    },
    {
      id: 2,
      title: 'Research Assistant',
      company: 'University Research Lab',
      location: 'Boston, MA',
      period: 'Jan 2023 - Present',
      description: [
        'Conducting research on novel deep learning architectures for time series forecasting',
        'Implementing machine learning models to analyze environmental sensor data',
        'Co-authored 2 research papers accepted to peer-reviewed conferences'
      ],
      skills: ['Deep Learning', 'PyTorch', 'Research Methods', 'Scientific Writing']
    },
    {
      id: 3,
      title: 'Software Engineering Intern',
      company: 'StartupX',
      location: 'Remote',
      period: 'May 2022 - Aug 2022',
      description: [
        'Developed RESTful APIs using Django and PostgreSQL',
        'Created data pipelines for real-time analytics processing',
        'Collaborated with cross-functional teams to implement new features'
      ],
      skills: ['Python', 'Django', 'SQL', 'Git', 'API Development']
    },
    {
      id: 4,
      title: 'Data Analysis Project',
      company: 'Academic Project',
      location: 'University',
      period: 'Sep 2021 - Dec 2021',
      description: [
        'Led a team of 3 students in analyzing NYC taxi trip dataset',
        'Applied statistical methods to identify patterns and anomalies',
        'Created visualization dashboard that won department showcase award'
      ],
      skills: ['R', 'Statistical Analysis', 'Data Visualization', 'Team Leadership']
    }
  ];

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Experience & Education</SectionTitle>
        
        <div className="mt-12">
          <div className="relative">
            {/* Timeline center line */}
            <div 
              className={`absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-1 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
              }`} 
              style={{ top: 0 }}
            ></div>
            
            {/* Timeline items */}
            <div className="relative z-10">
              {experiences.map((experience, index) => (
                <TimelineItem
                  key={experience.id}
                  title={experience.title}
                  company={experience.company}
                  location={experience.location}
                  period={experience.period}
                  description={experience.description}
                  skills={experience.skills}
                  isRight={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className={`text-2xl font-bold mb-8 text-center font-mono ${
            theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
          }`}>Education</h3>
          
          <div className={`p-6 rounded-lg ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h4 className="text-xl font-bold">Bachelor of Technology in Computer Science and Engineering</h4>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  Specialization in Data Science and Artificial Intelligence
                </p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className={`font-mono ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                }`}>2022 - 2026</p>
              </div>
            </div>
            <p className="text-lg mb-4">Centurion University</p>
            <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
              GPA: 9.24
            </p>
            <div className="mt-4">
              <h5 className="font-bold mb-2">Relevant Coursework:</h5>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                <li className="flex items-center">
                  <span className={`mr-2 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                  }`}>•</span>
                  Data Structures and Algorithms
                </li>
                <li className="flex items-center">
                  <span className={`mr-2 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                  }`}>•</span>
                  Machine Learning
                </li>
                <li className="flex items-center">
                  <span className={`mr-2 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                  }`}>•</span>
                  Deep Learning
                </li>
                <li className="flex items-center">
                  <span className={`mr-2 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                  }`}>•</span>
                  Database Systems
                </li>
                <li className="flex items-center">
                  <span className={`mr-2 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                  }`}>•</span>
                  Statistical Methods for Data Science
                </li>
                <li className="flex items-center">
                  <span className={`mr-2 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                  }`}>•</span>
                  Natural Language Processing
                </li>
                <li className="flex items-center">
                  <span className={`mr-2 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                  }`}>•</span>
                  Big Data Technologies
                </li>
                <li className="flex items-center">
                  <span className={`mr-2 ${
                    theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
                  }`}>•</span>
                  Computer Vision
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
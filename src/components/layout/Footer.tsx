import React from 'react';
import { Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 border-t ${
      theme === 'dark' 
        ? 'bg-gray-900 text-gray-300 border-gray-800' 
        : 'bg-gray-100 text-gray-700 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className={`text-xl font-mono font-bold ${
              theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
            }`}>
              &lt;DS.dev/&gt;
            </span>
            <p className="mt-2 text-sm">
              Building the future with data science and code.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/ChAtulKumarPrusty" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHub className={`h-5 w-5 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`} />
            </a>
            <a href="https://www.linkedin.com/in/chatulkumarprusty/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className={`h-5 w-5 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`} />
            </a>
            <a href="chatulprusty@gmail.com" aria-label="Email">
              <Mail className={`h-5 w-5 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {currentYear} Ch Atul Kumar Prusty. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm">
            <span className="font-mono">
              Made with <span className="text-red-500">♥</span> and a lot of <span className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}>coffee</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
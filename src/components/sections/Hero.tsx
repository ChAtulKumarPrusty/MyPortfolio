import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const typedText = useTypingEffect(
    "I'm a Data Science Developer", 
    100
  );
  
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden"
    >
      <div className="z-10 text-center max-w-4xl">
        <p className={`font-mono mb-2 ${
          theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
        }`}>
          Hello World! I am
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
          Ch Atul Kumar Prusty
        </h1>
        <div className="h-12 mb-6">
          <h2 className={`text-xl md:text-3xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <span className="font-mono">{typedText}</span>
            <span className={`animate-blink font-mono ${
              theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
            }`}>|</span>
          </h2>
        </div>
        <p className={`mb-8 max-w-2xl mx-auto ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Turning complex data into actionable insights. Passionate about machine learning, 
          data visualization, and building intelligent systems that solve real-world problems.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            primary
          >
            Get in Touch
          </Button>
          <Button 
            onClick={() => {
              // Replace with actual resume download link
              alert('Resume download would happen here');
            }}
            secondary
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </div>
      </div>

      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToNextSection}
      >
        <ArrowDown className={`w-6 h-6 ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`} />
      </div>
      
      <div className={`absolute bottom-0 left-0 w-full h-24 ${
        theme === 'dark' 
          ? 'bg-gradient-to-t from-gray-900 to-transparent' 
          : 'bg-gradient-to-t from-white to-transparent'
      } z-10`}></div>
    </section>
  );
};

export default Hero;
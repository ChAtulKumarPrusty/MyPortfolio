import React, { useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../../hooks/useTheme';
import { Particles } from '../ui/Particles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'
    }`}>
      <Navbar scrollToSection={scrollToSection} />
      <main className="flex-grow">
        <Particles 
          className="absolute inset-0 z-0" 
          quantity={50} 
          color={theme === 'dark' ? '#0ff' : '#4f46e5'}
        />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
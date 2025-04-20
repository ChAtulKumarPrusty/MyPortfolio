import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github as GitHub, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-opacity-90 backdrop-blur-md shadow-lg ' + 
            (theme === 'dark' ? 'bg-gray-900' : 'bg-white') 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span 
              className={`text-xl font-mono font-bold cursor-pointer ${
                theme === 'dark' ? 'text-cyan-400' : 'text-indigo-600'
              }`}
              onClick={() => handleClick('hero')}
            >
              &lt;DataScience.dev/&gt;
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink onClick={() => handleClick('about')}>About</NavLink>
              <NavLink onClick={() => handleClick('skills')}>Skills</NavLink>
              <NavLink onClick={() => handleClick('projects')}>Projects</NavLink>
              <NavLink onClick={() => handleClick('experience')}>Experience</NavLink>
              <NavLink onClick={() => handleClick('contact')}>Contact</NavLink>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full hover:bg-opacity-10 ${
                  theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-300" />
                ) : (
                  <Moon className="w-5 h-5 text-indigo-600" />
                )}
              </button>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 mr-2 rounded-full hover:bg-opacity-10 ${
                theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${
                theme === 'dark' 
                  ? 'text-white hover:bg-gray-700' 
                  : 'text-gray-800 hover:bg-gray-200'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        } ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink onClick={() => handleClick('about')}>About</MobileNavLink>
          <MobileNavLink onClick={() => handleClick('skills')}>Skills</MobileNavLink>
          <MobileNavLink onClick={() => handleClick('projects')}>Projects</MobileNavLink>
          <MobileNavLink onClick={() => handleClick('experience')}>Experience</MobileNavLink>
          <MobileNavLink onClick={() => handleClick('contact')}>Contact</MobileNavLink>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex justify-center space-x-6 px-5">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHub className={`h-5 w-5 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className={`h-5 w-5 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className={`h-5 w-5 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  onClick: () => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ onClick, children }) => {
  const { theme } = useTheme();
  return (
    <button
      onClick={onClick}
      className={`font-mono px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        theme === 'dark'
          ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
          : 'text-gray-700 hover:bg-gray-200 hover:text-black'
      }`}
    >
      {children}
    </button>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ onClick, children }) => {
  const { theme } = useTheme();
  return (
    <button
      onClick={onClick}
      className={`block px-3 py-2 rounded-md text-base font-medium font-mono w-full text-left ${
        theme === 'dark'
          ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
          : 'text-gray-700 hover:bg-gray-200 hover:text-black'
      }`}
    >
      {children}
    </button>
  );
};

export default Navbar;

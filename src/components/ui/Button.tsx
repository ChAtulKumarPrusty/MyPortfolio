import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  type = 'button',
  primary = false,
  secondary = false,
  disabled = false,
  className = ''
}) => {
  const { theme } = useTheme();
  
  const getButtonStyles = () => {
    if (disabled) {
      return theme === 'dark'
        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
        : 'bg-gray-300 text-gray-500 cursor-not-allowed';
    }
    
    if (primary) {
      return theme === 'dark'
        ? 'bg-cyan-500 text-gray-900 hover:bg-cyan-600 shadow-lg shadow-cyan-500/20'
        : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20';
    }
    
    if (secondary) {
      return theme === 'dark'
        ? 'bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-900 hover:bg-opacity-20'
        : 'bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-50';
    }
    
    return theme === 'dark'
      ? 'bg-gray-800 text-white hover:bg-gray-700'
      : 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center ${getButtonStyles()} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
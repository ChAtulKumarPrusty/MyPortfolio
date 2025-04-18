import { useState, useEffect } from 'react';

export function useTypingEffect(text: string, speed: number = 100) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (currentIndex <= text.length) {
      timer = setTimeout(() => {
        setDisplayedText(text.substring(0, currentIndex));
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);
    }
    
    return () => clearTimeout(timer);
  }, [currentIndex, text, speed]);
  
  return displayedText;
}

export default useTypingEffect;
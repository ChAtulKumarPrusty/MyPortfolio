import { useState, useEffect, useRef } from 'react';

interface InViewOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInView({ threshold = 0, rootMargin = '0px' }: InViewOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);
  
  return { ref, inView };
}

export default useInView;
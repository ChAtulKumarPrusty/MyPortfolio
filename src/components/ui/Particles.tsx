import React, { useCallback, useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

interface ParticlesProps {
  quantity?: number;
  color?: string;
  className?: string;
}

export const Particles: React.FC<ParticlesProps> = ({ 
  quantity = 50, 
  color = '#0ff',
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < quantity; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color
      });
    }
    return particles;
  }, [quantity, color]);

  const drawParticles = useCallback((
    ctx: CanvasRenderingContext2D, 
    particles: Particle[], 
    width: number, 
    height: number
  ) => {
    ctx.clearRect(0, 0, width, height);
    
    for (const particle of particles) {
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      for (const otherParticle of particles) {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `${particle.color}${Math.floor((1 - distance / 100) * 25).toString(16)}`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
        }
      }
    }
  }, []);

  const updateParticles = useCallback((
    particles: Particle[], 
    width: number, 
    height: number
  ) => {
    for (const particle of particles) {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      if (particle.x < 0 || particle.x > width) {
        particle.speedX = -particle.speedX;
      }
      
      if (particle.y < 0 || particle.y > height) {
        particle.speedY = -particle.speedY;
      }
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const width = canvas.width;
    const height = canvas.height;
    
    updateParticles(particlesRef.current, width, height);
    drawParticles(ctx, particlesRef.current, width, height);
    
    animationRef.current = requestAnimationFrame(animate);
  }, [drawParticles, updateParticles]);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = initParticles(canvas.width, canvas.height);
    }
  }, [initParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    particlesRef.current = initParticles(canvas.width, canvas.height);
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, handleResize, initParticles]);

  return (
    <canvas 
      ref={canvasRef} 
      className={className}
      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
    />
  );
};

export default Particles;
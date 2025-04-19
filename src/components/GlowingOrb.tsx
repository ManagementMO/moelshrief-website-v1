
import { useEffect, useRef } from "react";

const GlowingOrb = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Animation variables
    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 80;
    const maxSize = 5;
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
      
      constructor() {
        this.x = canvas.width / 2 + (Math.random() - 0.5) * 200;
        this.y = canvas.height / 2 + (Math.random() - 0.5) * 200;
        this.size = Math.random() * maxSize;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        
        // Purple or blue with random hue variation
        const isBlue = Math.random() > 0.5;
        const hue = isBlue ? '195' : '266';
        const saturation = 80 + Math.random() * 20;
        const lightness = 60 + Math.random() * 20;
        this.color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        this.alpha = 0.5 + Math.random() * 0.5;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Boundary check with position reset
        if (this.x > canvas.width + 50 || this.x < -50 || 
            this.y > canvas.height + 50 || this.y < -50) {
          this.x = canvas.width / 2 + (Math.random() - 0.5) * 200;
          this.y = canvas.height / 2 + (Math.random() - 0.5) * 200;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
        
        // Add glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = this.alpha * 0.5;
        ctx.fill();
      }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas with a fade effect
      ctx.fillStyle = 'rgba(10, 10, 15, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw central orb
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 40;
      
      // Create gradient for the orb
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, radius * 1.5
      );
      gradient.addColorStop(0, 'rgba(155, 135, 245, 1)');
      gradient.addColorStop(0.7, 'rgba(155, 135, 245, 0.3)');
      gradient.addColorStop(1, 'transparent');
      
      ctx.globalAlpha = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Draw outer glow
      const outerGradient = ctx.createRadialGradient(
        centerX, centerY, radius,
        centerX, centerY, radius * 4
      );
      outerGradient.addColorStop(0, 'rgba(155, 135, 245, 0.2)');
      outerGradient.addColorStop(1, 'transparent');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 4, 0, Math.PI * 2);
      ctx.fillStyle = outerGradient;
      ctx.fill();
      
      // Draw pulsing effect
      const time = Date.now();
      const pulseSize = radius * (1 + 0.1 * Math.sin(time * 0.001));
      
      const pulseGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, pulseSize
      );
      pulseGradient.addColorStop(0, 'rgba(51, 195, 240, 0.8)');
      pulseGradient.addColorStop(0.6, 'rgba(51, 195, 240, 0.2)');
      pulseGradient.addColorStop(1, 'transparent');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2);
      ctx.fillStyle = pulseGradient;
      ctx.globalAlpha = 0.3 + 0.1 * Math.sin(time * 0.002);
      ctx.fill();
      
      // Draw connecting lines to nearby particles
      ctx.strokeStyle = 'rgba(155, 135, 245, 0.2)';
      ctx.lineWidth = 0.5;
      
      particles.forEach(particle => {
        const dx = particle.x - centerX;
        const dy = particle.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < radius * 5) {
          ctx.globalAlpha = 0.2 * (1 - distance / (radius * 5));
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(particle.x, particle.y);
          ctx.stroke();
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full absolute top-0 left-0 z-0"
    />
  );
};

export default GlowingOrb;

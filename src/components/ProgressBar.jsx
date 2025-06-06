import { useState, useEffect, useRef } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const requestRef = useRef(null);
  
  const updateScrollProgress = () => {
    // Calculate how far down the page the user has scrolled
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Calculate scroll percentage
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    setScrollProgress(scrollPercentage);
    
    // Continue animation loop
    requestRef.current = requestAnimationFrame(updateScrollProgress);
  };
  
  useEffect(() => {
    // Start animation loop with requestAnimationFrame for smoother updates
    requestRef.current = requestAnimationFrame(updateScrollProgress);
    
    // Cleanup animation frame on unmount
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: '4px',
        backgroundColor: 'var(--color-primary)',
        backgroundImage: 'linear-gradient(to right, var(--color-primary), var(--color-primary-dark))',
        zIndex: 9999,
        boxShadow: '0 1px 5px rgba(var(--color-primary-rgb), 0.5)'
      }}
    />
  );
};

export default ProgressBar; 
import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.min(scrollPercentage / 10, 1);
  const scale = scrollPercentage / 100;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        backgroundColor: '#d29e46',
        transformOrigin: 'center',
        transform: `scaleX(${scale})`,
        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
        opacity: opacity,
        zIndex: 1000,
      }}
    />
  );
};

export default ScrollIndicator;
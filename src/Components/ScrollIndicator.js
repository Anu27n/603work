import React, { useState, useEffect } from "react";

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.min(scrollPercentage / 10, 1);
  const scale = scrollPercentage / 100;

  return (
    <div
      className="scroll-indicator"
      style={{
        transform: `scaleX(${scale})`,
        opacity: opacity,
      }}
    />
  );
};

export default ScrollIndicator;

import React, { useState, useEffect } from 'react';
import Preloader from './preloader'; 

const PreloaderContainer = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 2000);
  }, []);

  useEffect(() => {
    if (!loading) {
      const preloadElement = document.querySelector('.preload');
      if (preloadElement) {
        preloadElement.classList.add('loaded'); // Hide 
      }
    }
  }, [loading]);

  return (
    <>
      {loading && <Preloader />}  {/* Show preloader */}
      {!loading && children}  {/* Show Home */}
    </>
  );
};

export default PreloaderContainer;

import React, { useState, useEffect } from 'react';

const WelcomeStrip = ({ company, fadeOut}) => {
  const [showH2, setShowH2] = useState(false);
  const [showH3, setShowH3] = useState(false);

  useEffect(() => {
    // Show <h2> immediately
    setShowH2(true);

    // Show <h3> after 3 seconds
    const timer = setTimeout(() => {
      setShowH3(true);
    }, 3000);

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`welcome-strip ${fadeOut ? 'fade-out' : ''}`}>
      <h2 className={showH2 ? 'fade-in' : ''}>Hello {company} !!!</h2>
      <h3 className={showH3 ? 'fade-in' : ''}>Welcome to my Portfolio</h3>
    </div>
  );
};

export default WelcomeStrip;

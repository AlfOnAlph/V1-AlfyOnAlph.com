import React, { useState, useEffect } from 'react';

const Tv: React.FC = () => {
  const videoSources = [
    '/Tv.mp4'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videoSources.length) % videoSources.length);
  };

  useEffect(() => {
    const interval = setInterval(nextVideo, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div style={{ 
      marginTop:"3%",
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: 'rgba(255, 255, 255, 0.2)', 
      borderRadius: '15px', 
      boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.2), 0 0 10px 2px rgba(255, 223, 106, 0.2)',
    }}>
      <div style={{
        borderRadius: '15px', 
        overflow: 'hidden', 
        width: '100%', 
        maxWidth: '800px',
      }}>
        <video
          src={videoSources[currentIndex]}
          controls
          width="100%"
          loop
          style={{ borderRadius: '15px', objectFit: 'cover' }} 
        />
      </div>
    </div>
  );
};

export default Tv;

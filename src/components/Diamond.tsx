import React from 'react';

const Diamond: React.FC = () => {
  const imageSrc = '/ALF.png'; 

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', margin: 0, padding: 0 }}>
      <img src={imageSrc} alt="Displayed Image" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
};

export default Diamond;

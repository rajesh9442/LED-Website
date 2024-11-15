import React from 'react';
import { useNavigate } from 'react-router-dom';
import DragonFly from '../../images/Signs/DisplaySign/DragonFly.png';
import Lion from '../../images/Signs/DisplaySign/Lion.png';
import Dolphin from '../../images/Signs/DisplaySign/Dolphin.png';

// Data structure with unique paths for each display sign
const displaySignData = {
  'DragonFly': {
    path: 'dragonfly-sign', // Unique identifier for the route
    src: DragonFly,
    description: 'DragonFly LED Display Sign - High Visibility'
  },
  'Lion': {
    path: 'lion-sign', // Unique identifier for the route
    src: Lion,
    description: 'Lion LED Display Sign - High Visibility'
  },
  'Dolphin': {
    path: 'dolphin-sign', // Unique identifier for the route
    src: Dolphin,
    description: 'Dolphin LED Display Sign - High Visibility'
  },
};

const DisplaySign = () => {
  const navigate = useNavigate();

  const handleImageClick = (key) => {
    navigate(`/signs/display-sign/details/${displaySignData[key].path}`); // Navigate to the unique route
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Display Signs</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
        {Object.keys(displaySignData).map((key) => (
          <div
            key={key}
            style={{
              margin: '15px',
              cursor: 'pointer',
              border: '2px solid transparent',
              padding: '5px',
              display: 'inline-block',
              transform: 'scale(1)',
              transition: 'transform 0.2s, border-color 0.2s',
              textAlign: 'center',
            }}
            onClick={() => handleImageClick(key)}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'black';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img
              src={displaySignData[key].src}
              alt={key}
              style={{ width: '250px', height: '250px', objectFit: 'cover' }}
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
              {displaySignData[key].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplaySign;

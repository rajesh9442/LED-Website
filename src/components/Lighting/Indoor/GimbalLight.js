// src/components/Lighting/Indoor/GimbalLight.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LEDGimbalLight1 from '../../../images/Indoor/GimbalLight/1.jpg';
import LEDGimbalLight2 from '../../../images/Indoor/GimbalLight/2.jpg';
import LEDGimbalLight3 from '../../../images/Indoor/GimbalLight/3.jpg';
import LEDGimbalLight4 from '../../../images/Indoor/GimbalLight/4.jpg';
import LEDGimbalLight5 from '../../../images/Indoor/GimbalLight/5.jpg';
import LEDGimbalLight6 from '../../../images/Indoor/GimbalLight/6.jpg';
import LEDGimbalLight7 from '../../../images/Indoor/GimbalLight/7.jpg';

const imageData = {
  '5CCT 6” 12W Panel Light': {
    path: 'gimbal-light-1', // Identifier for routing
    src: LEDGimbalLight1,
    description: '5CCT 6” 12W Panel Light'
  },
  '5CCT 4” 9W Panel Light': {
    path: 'gimbal-light-2', // Identifier for routing
    src: LEDGimbalLight2,
    description: '5CCT 4” 9W Panel Light'
  },
  '5CCT 3” 8W Gimbal Light': {
    path: 'gimbal-light-3', // Identifier for routing
    src: LEDGimbalLight3,
    description: '5CCT 3” 8W Gimbal Light'
  },
  '5CCT 4” 12W Gimbal Light': {
    path: 'gimbal-light-4', // Identifier for routing
    src: LEDGimbalLight4,
    description: '5CCT 4” 12W Gimbal Light'
  },
  '5CCT 4” 9W Slim Gimbal Light': {
    path: 'gimbal-light-5', // Identifier for routing
    src: LEDGimbalLight5,
    description: '5CCT 4” 9W Slim Gimbal Light'
  },
  '5CCT 4” 9W Multi-Directional Light': {
    path: 'gimbal-light-6', // Identifier for routing
    src: LEDGimbalLight6,
    description: '5CCT 4” 9W Multi-Directional Light'
  },
  'RGB 6Inch12W Panel Light': {
    path: 'gimbal-light-7', // Identifier for routing
    src: LEDGimbalLight7,
    description: 'RGB 6Inch12W Panel Light'
  }
};

const GimbalLight = () => {
  const navigate = useNavigate();

  const handleImageClick = (key) => {
    navigate(`/lighting/gimbal-light/details/${imageData[key].path}`);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Gimbal Light Options</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
        {Object.keys(imageData).map((key) => (
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
              e.currentTarget.style.borderColor = '#000'; // Changed to black
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img
              src={imageData[key].src}
              alt={key}
              style={{ width: '250px', height: 'auto', maxWidth: '100%', objectFit: 'cover' }}
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
              {imageData[key].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GimbalLight;

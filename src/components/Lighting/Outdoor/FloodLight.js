import React from 'react';
import { useNavigate } from 'react-router-dom';
import LEDMiniFloodLight15to50W from '../../../images/Outdoor/FloodLight/LEDMiniFloodLight15to50W.jpg'; 
import LEDFloodLight150to300W from '../../../images/Outdoor/FloodLight/LEDFloodLight150to300W.jpg';
import LEDFloodLight450W from '../../../images/Outdoor/FloodLight/41.jpg';

const floodLightData = {
  'LED Mini Flood Light 15-50W': {
    path: 'led-mini-flood-light-15-50w',
    src: LEDMiniFloodLight15to50W,
    description: 'LED Mini Flood Light 15-50W',
  },
  'LED Flood Light 150W/200W/300W': {
    path: 'led-flood-light-150-300w',
    src: LEDFloodLight150to300W,
    description: 'LED Flood Light 150W/200W/300W',
  },
  'LED Flood Light 450W': {
    path: 'led-flood-light-450w',
    src: LEDFloodLight450W,
    description: 'LED Flood Light 450W',
  },
};

const FloodLight = () => {
  const navigate = useNavigate();

  const handleImageClick = (key) => {
    navigate(`/lighting/flood-light/details/${floodLightData[key].path}`);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Flood Lights</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
          justifyContent: 'center',
          marginTop: '10px',
        }}
      >
        {Object.keys(floodLightData).map((key) => (
          <div
            key={key}
            style={{
              cursor: 'pointer',
              border: '2px solid transparent',
              padding: '10px',
              transition: 'transform 0.2s, border-color 0.2s',
              textAlign: 'center',
            }}
            onClick={() => handleImageClick(key)}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'black';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img
              src={floodLightData[key].src}
              alt={key}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
              {floodLightData[key].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloodLight;

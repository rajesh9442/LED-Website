import React from 'react';
import { useNavigate } from 'react-router-dom';
import CanopyLight1 from '../../../images/Outdoor/CanopyLight/1.jpg';
import CanopyLight2 from '../../../images/Outdoor/CanopyLight/2.jpg';
import CanopyLight3 from '../../../images/Outdoor/CanopyLight/3.jpg';
import CanopyLight4 from '../../../images/Outdoor/CanopyLight/4.jpg';
import CanopyLight5 from '../../../images/Outdoor/CanopyLight/5.jpg';

const canopyLights = {
  'LED Canopy Light 150W': {
    id: 'led-canopy-light-150w',
    src: CanopyLight1,
    description: 'LED Canopy Light 150W',
  },
  'LED Canopy Light 180W': {
    id: 'led-canopy-light-180w',
    src: CanopyLight2,
    description: 'LED Canopy Light 180W',
  },
  'LED Parking Garage Canopy Light 100W': {
    id: 'led-parking-garage-canopy-light-100w',
    src: CanopyLight3,
    description: 'LED Parking Garage Canopy Light 100W',
  },
  'LED Parking Garage Canopy Light 75W': {
    id: 'led-parking-garage-canopy-light-75w',
    src: CanopyLight4,
    description: 'LED Parking Garage Canopy Light 75W',
  },
  'LED Parking Garage Canopy Light 50W': {
    id: 'led-parking-garage-canopy-light-50w',
    src: CanopyLight5,
    description: 'LED Parking Garage Canopy Light 50W',
  },
};

const CanopyLight = () => {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/lighting/canopy-light/details/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Canopy Light</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Responsive grid for mobile
          gap: '15px',
          marginTop: '10px',
          justifyItems: 'center',
        }}
      >
        {Object.keys(canopyLights).map((key) => (
          <div
            key={key}
            style={{
              cursor: 'pointer',
              border: '2px solid transparent',
              padding: '5px',
              transform: 'scale(1)',
              transition: 'transform 0.2s, border-color 0.2s',
              textAlign: 'center',
              maxWidth: '250px', // Ensure max width on narrow screens
            }}
            onClick={() => handleImageClick(canopyLights[key].id)}
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
              src={canopyLights[key].src}
              alt={key}
              style={{
                width: '100%',
                height: 'auto', // Maintain aspect ratio
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
              {canopyLights[key].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CanopyLight;

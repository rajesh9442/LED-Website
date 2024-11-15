import React from 'react';
import { useNavigate } from 'react-router-dom';
import LEDShoeBoxAreaLight150to450W from '../../../images/Outdoor/ShoeBox/LEDShoeBoxAreaLight150to450W.jpg';

const shoeBoxData = {
  'LED Shoe Box Area Light 150-450W': {
    path: 'led-shoe-box-area-light', // Unique identifier
    src: LEDShoeBoxAreaLight150to450W,
    description: 'LED Shoe Box Area Light 150-450W'
  },
};

const ShoeBox = () => {
  const navigate = useNavigate();

  const handleImageClick = (key) => {
    navigate(`/lighting/shoe-box/details/${shoeBoxData[key].path}`);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Shoe Box Lights</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
        {Object.keys(shoeBoxData).map((key) => (
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
              src={shoeBoxData[key].src}
              alt={key}
              style={{ width: '250px', height: '250px', objectFit: 'cover' }}
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
              {shoeBoxData[key].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoeBox;

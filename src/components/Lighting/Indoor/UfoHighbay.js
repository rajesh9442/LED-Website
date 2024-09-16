// src/components/Lighting/Indoor/UfoHighbay.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import UFOHighbayLight150W from '../../../images/Indoor/UfoHighbay/UFOHighbayLight150W.jpg'; 
import UFOHighbayLight240W from '../../../images/Indoor/UfoHighbay/UFOHighbayLight240W.jpg';

const ufoHighbayData = {
  'UFO Highbay Light 150W': {
    path: 'ufo-highbay-150w', // Identifier for routing
    src: UFOHighbayLight150W,
    description: 'UFO Highbay Light 150W'
  },
  'UFO Highbay Light 240W': {
    path: 'ufo-highbay-240w', // Identifier for routing
    src: UFOHighbayLight240W,
    description: 'UFO Highbay Light 240W'
  },
};

const UfoHighbay = () => {
  const navigate = useNavigate();

  const handleImageClick = (key) => {
    navigate(`/lighting/ufo-highbay/details/${ufoHighbayData[key].path}`);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>UFO Highbay Light</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {Object.keys(ufoHighbayData).map((key) => (
          <div
            key={key}
            style={{
              cursor: 'pointer',
              border: '2px solid transparent',
              padding: '5px',
              display: 'inline-block',
              transform: 'scale(1)',
              transition: 'transform 0.2s, border-color 0.2s',
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
              src={ufoHighbayData[key].src}
              alt={key}
              style={{ width: '250px', height: '250px', objectFit: 'cover' }}
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
              {ufoHighbayData[key].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UfoHighbay;

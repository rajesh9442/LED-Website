import React from 'react';
import { useNavigate } from 'react-router-dom';
import Troffers1 from '../../../images/Indoor/Troffers/LEDAdjustableCCTCenterBasketTroffer2x2ft2x4ft20to60W.jpg';

const troffersData = {
  'LED Adjustable CCT Center Basket Troffer 2x2ft 2x4ft 20-60W': {
    path: 'led-adjustable-cct-center-basket-troffer', // Unique identifier
    src: Troffers1,
    description: 'LED Adjustable CCT Center Basket Troffer 2x2ft 2x4ft 20-60W'
  },
};

const Troffers = () => {
  const navigate = useNavigate();

  const handleImageClick = (key) => {
    navigate(`/lighting/troffers/details/${troffersData[key].path}`);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Troffers</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
        {Object.keys(troffersData).map((key) => (
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
              src={troffersData[key].src}
              alt={key}
              style={{ width: '250px', height: '250px', objectFit: 'cover' }}
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
              {troffersData[key].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Troffers;

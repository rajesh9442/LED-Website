import React from 'react';
import { useNavigate } from 'react-router-dom';
import signImage1 from '../../../images/Outdoor/ExitSigns/1.jpg'; // Adjust the path based on your folder structure
import signImage2 from '../../../images/Outdoor/ExitSigns/2.jpg';
import signImage3 from '../../../images/Outdoor/ExitSigns/3.jpg';

const imageData = {
  'LED Exit & Emergency Combo Sign 5W': {
    src: signImage1,
    title: 'LED Exit & Emergency Combo Sign 5W',
    path: 'sign1', // Must match the key in ExitSignsDetails.js
  },
  'LED Indoor Slim Exit Combo': {
    src: signImage2,
    title: 'LED Indoor Slim Exit Combo',
    path: 'sign2',
  },
  'LED Indoor Emergency Light - 2.4W': {
    src: signImage3,
    title: 'LED Indoor Emergency Light - 2.4W',
    path: 'sign3',
  },
};

const ExitSigns = () => {
  const navigate = useNavigate();

  const handleImageClick = (key) => {
    navigate(`/lighting/exit-signs/details/${imageData[key].path}`);  // Navigate to the correct path
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Exit Signs</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px', flexWrap: 'wrap' }}>
        {Object.keys(imageData).map((key) => (
          <div
            key={key}
            style={{
              margin: '0 15px',
              cursor: 'pointer',
              border: '2px solid transparent',
              padding: '5px',
              display: 'inline-block',
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
              src={imageData[key].src}
              alt={imageData[key].title}
              style={{ width: '250px', height: '250px', objectFit: 'cover', display: 'block' }}
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
              {imageData[key].title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExitSigns;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import LEDCornLight18W from '../../../images/Indoor/CornLight/LEDCornLight18W.jpg'; // Adjust the path based on your folder structure
import LEDCornLight54W from '../../../images/Indoor/CornLight/LEDCornLight54W.jpg';
import LEDCornLight120W from '../../../images/Indoor/CornLight/LEDCornLight120W.jpg';

const imageData = {
  '18W': {
    src: LEDCornLight18W,
    title: '18W Corn Light',
    path: '18w' // Ensure this path matches the key used in CornLightDetails
  },
  '54W': {
    src: LEDCornLight54W,
    title: '54W Corn Light',
    path: '54w'
  },
  '120W': {
    src: LEDCornLight120W,
    title: '120W Corn Light',
    path: '120w'
  }
};

const CornLight = () => {
  const navigate = useNavigate();

  const handleImageClick = (key) => {
    navigate(`/lighting/corn-light/details/${imageData[key].path}`);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Corn Light</h1>
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

export default CornLight;

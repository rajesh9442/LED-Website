import React from 'react';
import { useNavigate } from 'react-router-dom';
import signImage1 from '../../images/Signs/1.jpg'; // Adjust the path based on your folder structure
import signImage2 from '../../images/Signs/2.jpg';
import signImage3 from '../../images/Signs/3.jpg';

const imageData = {
  'LED Exit & Emergency Combo Sign 5W': {
    src: signImage1,
    title: 'LED Exit & Emergency Combo Sign 5W',
    path: 'sign1', // Match this path with the key in SignsDetails
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

const Signs = () => {
  const navigate = useNavigate();

  const handleImageClick = (key) => {
    navigate(`/signs/details/${imageData[key].path}`);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Signs</h1>
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

export default Signs;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import DownLightImage1 from '../../../images/Indoor/DownLightSeries/1.jpg'; // Correct path

const downlightData = {
  'downlight-1': {
    title: 'LED 4-6″ Retrofit Downlight 10W-15W 5CCT',
    src: DownLightImage1,
    path: 'downlight-1' // Ensure this path matches the key used in DownLightDetails
  },
  // Add more downlight data as needed
};

const DownLightSeries = () => {
  const navigate = useNavigate();

  const handleImageClick = (key) => {
    navigate(`/lighting/downlight-series/details/${downlightData[key].path}`);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Downlight Series</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
        {Object.keys(downlightData).map((key) => (
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
              src={downlightData[key].src}
              alt={downlightData[key].title}
              style={{ width: '250px', height: '250px', objectFit: 'cover' }}
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
              {downlightData[key].title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownLightSeries;

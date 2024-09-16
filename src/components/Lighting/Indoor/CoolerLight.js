import React from 'react';
import { useNavigate } from 'react-router-dom';
import coolerLightImage from '../../../images/Indoor/CoolerLight/CoolerLight.jpg'; // Adjust the path based on your folder structure

const coolerLightData = {
  'cooler-light-1': {
    title: 'Cooler Light 5ft – 32W',
    src: coolerLightImage,
    path: 'cooler-light-1' // Ensure this path matches the key used in CoolerLightDetails
  }
  // Add more cooler light data as needed
};

const CoolerLight = () => {
  const navigate = useNavigate();

  const handleImageClick = (key) => {
    navigate(`/lighting/cooler-light/details/${coolerLightData[key].path}`);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Cooler Light</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
        {Object.keys(coolerLightData).map((key) => (
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
              src={coolerLightData[key].src}
              alt={coolerLightData[key].title}
              style={{ width: '250px', height: '250px', objectFit: 'cover' }}
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
              {coolerLightData[key].title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoolerLight;

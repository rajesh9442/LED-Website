import React from 'react';
import { useNavigate } from 'react-router-dom';
import T8TubeLight1 from '../../../images/Indoor/T8TubeLight/1.jpg';
import T8TubeLight2 from '../../../images/Indoor/T8TubeLight/LEDT8TubeLiightSinglePin8ft50W.jpg';

const T8TubeLight = () => {
  const navigate = useNavigate();

  const handleImageClick = (lightKey) => {
    navigate(`/t8-tube-light/${lightKey}`);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>T8 Tube Light</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px', // Added gap for consistent spacing
          marginTop: '10px',
        }}
      >
        {[ 
          { src: T8TubeLight1, alt: 'T8 Tube Light 1', description: 'LED T8 Tube Light Single Pin 8ft 50W', key: 'light1' },
          { src: T8TubeLight2, alt: 'T8 Tube Light 2', description: 'LED T8 Tube Light 2ft – 4ft 10 – 22W', key: 'light2' }
        ].map((light) => (
          <div
            key={light.key}
            style={{
              cursor: 'pointer',
              padding: '5px',
              border: '2px solid transparent',
              transform: 'scale(1)',
              transition: 'transform 0.3s, border-color 0.3s',
              width: '250px', // Set width to ensure consistency
              textAlign: 'center',
            }}
            onClick={() => handleImageClick(light.key)}
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
              src={light.src}
              alt={light.alt}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add subtle shadow
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>{light.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default T8TubeLight;

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import T8TubeLight1 from '../../../images/Indoor/T8TubeLight/LEDT8TubeLight2ft-4ft10-22W.jpg';
import T8TubeLight2 from '../../../images/Indoor/T8TubeLight/LEDT8TubeLiightSinglePin8ft50W.jpg';

const T8TubeLight = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleImageClick = (lightKey) => {
    navigate(`/t8-tube-light/${lightKey}`); // Navigate to detailed view
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>T8 Tube Light</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <div
          style={{
            margin: '0 15px',
            cursor: 'pointer',
            padding: '5px',
            border: '2px solid transparent',
            transform: 'scale(1)',
            transition: 'transform 0.3s, border-color 0.3s',
          }}
          onClick={() => handleImageClick('light1')}
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
            src={T8TubeLight1}
            alt="T8 Tube Light 1"
            style={{ width: '250px', height: '250px', objectFit: 'cover', display: 'block' }}
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>LED T8 Tube Light Single Pin 8ft 50W</p>
        </div>

        <div
          style={{
            margin: '0 15px',
            cursor: 'pointer',
            padding: '5px',
            border: '2px solid transparent',
            transform: 'scale(1)',
            transition: 'transform 0.3s, border-color 0.3s',
          }}
          onClick={() => handleImageClick('light2')}
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
            src={T8TubeLight2}
            alt="T8 Tube Light 2"
            style={{ width: '250px', height: '250px', objectFit: 'cover', display: 'block' }}
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>LED T8 Tube Light 2ft – 4ft 10 – 22W</p>
        </div>
      </div>
    </div>
  );
};

export default T8TubeLight;

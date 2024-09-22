import React from 'react';
import { Link } from 'react-router-dom';
import LEDIntegratedTubeLight from '../../../images/Indoor/IntegratedTubeLight/LEDIntegratedTubeLight2-8ft,10-72W.jpg';

const IntegratedTubeLight = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Integrated Tube Light</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <div
          style={{
            margin: '0 15px',
            cursor: 'pointer',
            border: '2px solid transparent', // Initial border is transparent
            padding: '5px',
            display: 'inline-block',
            transform: 'scale(1)', // Initial scale
            transition: 'transform 0.3s, border-color 0.3s', // Smooth transition for scale and border color
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'black'; // Change border to black on hover
            e.currentTarget.style.transform = 'scale(1.1)'; // Scale up on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'transparent'; // Reset border color on mouse leave
            e.currentTarget.style.transform = 'scale(1)'; // Reset scale on mouse leave
          }}
        >
          <Link to={`/integrated-tube-light`}>
            <img 
              src={LEDIntegratedTubeLight} 
              alt="LED Integrated Tube Light" 
              style={{ width: '250px', height: '250px', objectFit: 'cover', display: 'block' }} 
            />
          </Link>
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            LED Integrated Tube Light 2-8ft, 10-72W
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntegratedTubeLight;

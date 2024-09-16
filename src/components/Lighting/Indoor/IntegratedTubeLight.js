import React from 'react';
import { Link } from 'react-router-dom';
import LEDIntegratedTubeLight from '../../../images/Indoor/IntegratedTubeLight/LEDIntegratedTubeLight2-8ft,10-72W.jpg';

const IntegratedTubeLight = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Integrated Tube Light</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <div style={{ margin: '0 15px', cursor: 'pointer' }}>
          <Link to={`/integrated-tube-light`}>
            <img 
              src={LEDIntegratedTubeLight} 
              alt="LED Integrated Tube Light" 
              style={{ width: '250px', height: '250px', objectFit: 'cover', border: 'none' }} 
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

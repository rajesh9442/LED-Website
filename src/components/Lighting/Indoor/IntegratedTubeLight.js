import React from 'react';
import LEDIntegratedTubeLight from '../../../images/Indoor/IntegratedTubeLight/LEDIntegratedTubeLight2-8ft,10-72W.jpg';

const IntegratedTubeLight = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Integrated Tube Light</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <div style={{ margin: '0 15px' }}>
          <img 
            src={LEDIntegratedTubeLight} 
            alt="LEDIntegratedTubeLight" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            LEDIntegratedTubeLight
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntegratedTubeLight;

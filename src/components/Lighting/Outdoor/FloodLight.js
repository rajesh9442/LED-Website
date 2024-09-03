import React from 'react';
import LEDMiniFloodLight15to50W from '../../../images/Outdoor/FloodLight/LEDMiniFloodLight15to50W.jpg'; // Adjust the path based on your folder structure
import LEDFloodLight150to300W from '../../../images/Outdoor/FloodLight/LEDFloodLight150to300W.jpg';

const FloodLight = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Flood Light</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <div style={{ margin: '0 15px' }}>
          <img 
            src={LEDMiniFloodLight15to50W} 
            alt="LEDMiniFloodLight 15to50W" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            LED Mini Flood Light 15-50W
          </p>
        </div>
        <div style={{ margin: '0 15px' }}>
          <img 
            src={LEDFloodLight150to300W} 
            alt="LEDFloodLight150to300W" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            LED Flood Light 150t-300W
          </p>
        </div>
      </div>
    </div>
  );
}

export default FloodLight;

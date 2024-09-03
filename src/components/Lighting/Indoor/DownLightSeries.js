import React from 'react';
import LEDDownlight1 from '../../../images/Indoor/DownLightSeries/1.jpg'; // Adjust the path based on your folder structure

const DownLightSeries = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Downlight Series</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <div style={{ margin: '0 15px' }}>
          <img 
            src={LEDDownlight1} 
            alt="Downlight 1" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Downlight 1
          </p>
        </div>
      </div>
    </div>
  );
}

export default DownLightSeries;

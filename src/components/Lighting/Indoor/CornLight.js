import React from 'react';
import LEDCornLight18W from '../../../images/Indoor/CornLight/LEDCornLight18W.jpg'; // Adjust the path based on your folder structure
import LEDCornLight54W from '../../../images/Indoor/CornLight/LEDCornLight54W.jpg';
import LEDCornLight120W from '../../../images/Indoor/CornLight/LEDCornLight120W.jpg';

const CornLight = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Corn Light</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <div style={{ margin: '0 15px' }}>
          <img 
            src={LEDCornLight18W} 
            alt="18W Corn Light" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            18W Corn Light
          </p>
        </div>
        <div style={{ margin: '0 15px' }}>
          <img 
            src={LEDCornLight54W} 
            alt="54W Corn Light" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            54W Corn Light
          </p>
        </div>
        <div style={{ margin: '0 15px' }}>
          <img 
            src={LEDCornLight120W} 
            alt="120W Corn Light" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            120W Corn Light
          </p>
        </div>
      </div>
    </div>
  );
}

export default CornLight;

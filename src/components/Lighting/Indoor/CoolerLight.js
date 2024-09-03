import React from 'react';
import coolerLightImage from '../../../images/Indoor/CoolerLight/CoolerLight.jpg'; // Adjust the path based on your folder structure

const CoolerLight = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Cooler Light</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '10px' }}>
        <img 
          src={coolerLightImage} 
          alt="Cooler Light" 
          style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
        />
        <p style={{ marginTop: '10px', fontSize: '16px', color:'black'}}>Cooler Light</p> {/* Image name */}
      </div>
    </div>
  );
}

export default CoolerLight;

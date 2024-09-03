import React from 'react';
import LEDShoeBoxAreaLight150to450W from '../../../images/Outdoor/ShoeBox/LEDShoeBoxAreaLight150to450W.jpg'; // Adjust the path based on your folder structure

const ShoeBox = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Shoe Box</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '10px' }}>
        <img 
          src={LEDShoeBoxAreaLight150to450W} 
          alt="LEDShoeBoxAreaLight150to450W" 
          style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
        />
        <p style={{ marginTop: '10px', fontSize: '16px', color:'black'}}>LED ShoeBox Area Light 150-450W</p> {/* Image name */}
      </div>
    </div>
  );
}

export default ShoeBox;

import React from 'react';
import UFOHighbayLight150W from '../../../images/Indoor/UfoHighbay/UFOHighbayLight150W.jpg'; // Adjust the path based on your folder structure
import UFOHighbayLight240W from '../../../images/Indoor/UfoHighbay/UFOHighbayLight240W.jpg';

const UfoHighbay = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>UFO Highbay Light</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <div style={{ margin: '0 15px' }}>
          <img 
            src={UFOHighbayLight150W} 
            alt="UFOHighbayLight150W" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            UFO Highbay Light 150W
          </p>
        </div>
        <div style={{ margin: '0 15px' }}>
          <img 
            src={UFOHighbayLight240W} 
            alt="UFOHighbayLight240W" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            UFO Highbay Light 240W
          </p>
        </div>
      </div>
    </div>
  );
}

export default UfoHighbay;

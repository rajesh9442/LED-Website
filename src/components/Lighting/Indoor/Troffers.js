import React from 'react';
import Troffers1 from '../../../images/Indoor/Troffers/LEDAdjustableCCTCenterBasketTroffer2x2ft2x4ft20to60W.jpg'; // Adjust the path based on your folder structure

const Troffers = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Troffers</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <div style={{ margin: '0 15px' }}>
          <img 
            src={Troffers1} 
            alt="Troffers 1" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Troffers 1
          </p>
        </div>
      </div>
    </div>
  );
}

export default Troffers;

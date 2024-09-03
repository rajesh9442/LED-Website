import React from 'react';
import LEDGimbalLight1 from '../../../images/Indoor/GimbalLight/1.jpg'; // Adjust the path based on your folder structure
import LEDGimbalLight2 from '../../../images/Indoor/GimbalLight/2.jpg';
import LEDGimbalLight3 from '../../../images/Indoor/GimbalLight/3.jpg';
import LEDGimbalLight4 from '../../../images/Indoor/GimbalLight/4.jpg';
import LEDGimbalLight5 from '../../../images/Indoor/GimbalLight/5.jpg';
import LEDGimbalLight6 from '../../../images/Indoor/GimbalLight/6.jpg';

const GimbalLight = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Gimbal Light</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '10px' }}>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={LEDGimbalLight1} 
            alt="Gimbal Light 1" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Gimbal Light 1
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={LEDGimbalLight2} 
            alt="Gimbal Light 2" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Gimbal Light 2
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={LEDGimbalLight3} 
            alt="Gimbal Light 3" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Gimbal Light 3
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={LEDGimbalLight4} 
            alt="Gimbal Light 4" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Gimbal Light 4
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={LEDGimbalLight5} 
            alt="Gimbal Light 5" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Gimbal Light 5
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={LEDGimbalLight6} 
            alt="Gimbal Light 6" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Gimbal Light 6
          </p>
        </div>
      </div>
    </div>
  );
}

export default GimbalLight;

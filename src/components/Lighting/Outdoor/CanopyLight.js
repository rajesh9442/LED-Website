import React from 'react';
import CanopyLight1 from '../../../images/Outdoor/CanopyLight/1.jpg'; // Adjust the path based on your folder structure
import CanopyLight2 from '../../../images/Outdoor/CanopyLight/2.jpg';
import CanopyLight3 from '../../../images/Outdoor/CanopyLight/3.jpg';
import CanopyLight4 from '../../../images/Outdoor/CanopyLight/4.jpg';
import CanopyLight5 from '../../../images/Outdoor/CanopyLight/5.jpg';

const CanopyLight = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Canopy Light</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '10px' }}>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={CanopyLight1} 
            alt="Canopy Light 1" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Canopy Light 1
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={CanopyLight2} 
            alt="Canopy Light 2" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Canopy Light 2
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={CanopyLight3} 
            alt="Canopy Light 3" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Canopy Light 3
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={CanopyLight4} 
            alt="Canopy Light 4" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Canopy Light 4
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={CanopyLight5} 
            alt="Canopy Light 5" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Canopy Light 5
          </p>
        </div>
      </div>
    </div>
  );
}

export default CanopyLight;

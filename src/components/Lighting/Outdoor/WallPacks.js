import React from 'react';
import WallPack1 from '../../../images/Outdoor/WallPacks/1.jpg'; // Adjust the path based on your folder structure
import WallPack2 from '../../../images/Outdoor/WallPacks/2.jpg';
import WallPack3 from '../../../images/Outdoor/WallPacks/3.jpg';
import WallPack4 from '../../../images/Outdoor/WallPacks/4.jpg';
import WallPack5 from '../../../images/Outdoor/WallPacks/5.jpg';
import WallPack6 from '../../../images/Outdoor/WallPacks/6.jpg';

const WallPacks = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Wall Packs</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '10px' }}>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={WallPack1} 
            alt="WallPack 1" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            WallPack 1
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={WallPack2} 
            alt="WallPack2" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Wall Pack 2
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={WallPack3} 
            alt="WallPack3" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Wall Pack 3
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={WallPack4} 
            alt="WallPack4" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Wall Pack 4
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={WallPack5} 
            alt="WallPack5" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Wall Pack 5
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={WallPack6} 
            alt="WallPack6" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Wall Pack 6
          </p>
        </div>
      </div>
    </div>
  );
}

export default WallPacks;

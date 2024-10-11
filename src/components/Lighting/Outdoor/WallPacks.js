import React from 'react';
import { useNavigate } from 'react-router-dom';
import WallPack1 from '../../../images/Outdoor/WallPacks/1.jpg'; 
import WallPack2 from '../../../images/Outdoor/WallPacks/2.jpg';
import WallPack3 from '../../../images/Outdoor/WallPacks/3.jpg';
import WallPack4 from '../../../images/Outdoor/WallPacks/4.jpg';
import WallPack5 from '../../../images/Outdoor/WallPacks/5.jpg';
import WallPack6 from '../../../images/Outdoor/WallPacks/6.jpg';

const specifications = {
  // 'LED Mini Wall Pack W/Photocell 30W': {
  //   path: 'led-mini-wall-pack-w-photocell-30w',
  //   src: WallPack1,
  //   description: 'LED Mini Wall Pack W/Photocell 30W',
  // },
  // 'LED Mini Wall Pack W/Photocell 13W': {
  //   path: 'led-mini-wall-pack-w-photocell-13w',
  //   src: WallPack2,
  //   description: 'LED Mini Wall Pack W/Photocell 13W',
  // },
  'Led Mini Wall Pack 13W/20W/30W': {
    path: 'led-mini-wall-pack-20w',
    src: WallPack3,
    description: 'Led Mini Wall Pack 20W',
  },
  'LED Rotatable Wall Pack, 80W/120W': {
    path: 'led-rotatable-wall-pack-40-120w',
    src: WallPack4,
    description: 'LED Rotatable Wall Pack 80W/120W',
  },
  'LED Outdoor Wall Pack W/Inbuilt Battery Backup 55W': {
    path: 'led-outdoor-wall-pack-w-inbuilt-battery-backup-55w',
    src: WallPack5,
    description: 'LED Outdoor Wall Pack W/Inbuilt Battery Backup 55W',
  },
  'LED Outdoor Wall Pack W/Photo Cell Sensor 40 -120W': {
    path: 'led-outdoor-wall-pack-w-photo-cell-sensor-40-120w',
    src: WallPack6,
    description: 'LED Outdoor Wall Pack W/Photo Cell Sensor 40 -120W',
  }
};

const WallPacks = () => {
  const navigate = useNavigate();

  const handleImageClick = (key) => {
    navigate(`/lighting/wall-packs/details/${specifications[key].path}`);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Wall Packs</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '10px' }}>
        {Object.keys(specifications).map((key) => (
          <div 
            key={key} 
            style={{ textAlign: 'center', cursor: 'pointer' }}
            onClick={() => handleImageClick(key)}
          >
            <div 
              style={{ 
                display: 'inline-block', 
                border: '2px solid transparent', 
                padding: '5px',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'black';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img 
                src={specifications[key].src} 
                alt={key} 
                style={{ width: '250px', height: '250px', objectFit: 'cover', display: 'block' }} 
              />
              <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
                {key}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WallPacks;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import WallPack3 from '../../../images/Outdoor/WallPacks/3.jpg';
import WallPack4 from '../../../images/Outdoor/WallPacks/4.jpg';
import WallPack5 from '../../../images/Outdoor/WallPacks/5.jpg';
import WallPack6 from '../../../images/Outdoor/WallPacks/6.jpg';

const specifications = {
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
  },
};

const WallPacks = () => {
  const navigate = useNavigate();

  const handleImageClick = (key) => {
    navigate(`/lighting/wall-packs/details/${specifications[key].path}`);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Wall Pack Options</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
        {Object.keys(specifications).map((key) => (
          <div
            key={key}
            style={{
              margin: '15px',
              cursor: 'pointer',
              border: '2px solid transparent',
              padding: '5px',
              display: 'inline-block',
              transform: 'scale(1)',
              transition: 'transform 0.2s, border-color 0.2s',
              textAlign: 'center',
            }}
            onClick={() => handleImageClick(key)}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#000'; // Border on hover
              e.currentTarget.style.transform = 'scale(1.1)'; // Scale on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent'; // Reset border
              e.currentTarget.style.transform = 'scale(1)'; // Reset scale
            }}
          >
            <img
              src={specifications[key].src}
              alt={key}
              style={{
                width: '250px',
                height: 'auto',
                maxWidth: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>{specifications[key].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WallPacks;

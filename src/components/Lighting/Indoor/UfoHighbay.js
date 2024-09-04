import React, { useState } from 'react';
import UFOHighbayLight150W from '../../../images/Indoor/UfoHighbay/UFOHighbayLight150W.jpg'; 
import UFOHighbayLight240W from '../../../images/Indoor/UfoHighbay/UFOHighbayLight240W.jpg';

const ufoHighbayData = {
  'UFO Highbay Light 150W': {
    src: UFOHighbayLight150W,
    specs: {
      SIZE: '12.6″ W x 7.4″ D',
      LUMENS: '21,750lm',
      CCT: '3500K – 5700K',
      VOLTAGE: '120-277 Vac',
      DIMMABLE: '1-10V',
      'BEAM ANGLE': '90°',
      CRI: '>80',
      'IP RATE': 'IP65',
      MATERIALS: 'Aluminum, PC',
      OPTIONAL: 'Motion Sensor, Surge Protector',
      LIFESPAN: '50,000 hours',
      DESCRIPTION: 'LED High Bays are built from strong materials that are safe for use in extreme temperatures. They can be equipped with motion sensors. LED High Bays are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. These lights are widely used in the lighting of warehouses, gas stations, exhibition halls, and gymnasiums.',
    },
  },
  'UFO Highbay Light 240W': {
    src: UFOHighbayLight240W,
    specs: {
      SIZE: '15″ W x 8″ D',
      LUMENS: '34,800lm',
      CCT: '3500K – 5700K',
      VOLTAGE: '120-277 Vac',
      DIMMABLE: '1-10V',
      'BEAM ANGLE': '90°',
      CRI: '>80',
      'IP RATE': 'IP65',
      MATERIALS: 'Aluminum, PC',
      OPTIONAL: 'Motion Sensor, Surge Protector',
      LIFESPAN: '50,000 hours',
      DESCRIPTION: 'LED High Bays are built from strong materials that are safe for use in extreme temperatures. They can be equipped with motion sensors. LED High Bays are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. These lights are widely used in the lighting of warehouses, gas stations, exhibition halls, and gymnasiums.',
    },
  },
};

const UfoHighbay = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (key) => {
    setSelectedImage(selectedImage === key ? null : key);
  };

  const renderSpecifications = () => {
    if (!selectedImage) return null;

    const { specs } = ufoHighbayData[selectedImage];
    return (
      <div style={{ marginTop: '20px', textAlign: 'left', width: '50%', margin: 'auto' }}>
        <h2>Specifications</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {Object.entries(specs).map(([key, value]) => (
              <tr key={key}>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{key}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>UFO Highbay Light</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        {Object.keys(ufoHighbayData).map((key) => (
          <div
            key={key}
            style={{
              margin: '0 15px',
              cursor: 'pointer',
              border: selectedImage === key ? '2px solid black' : '2px solid transparent',
              padding: '5px',
              display: 'inline-block',
              transform: selectedImage === key ? 'scale(1.1)' : 'scale(1)',
            }}
            onClick={() => handleImageClick(key)}
          >
            <img
              src={ufoHighbayData[key].src}
              alt={key}
              style={{ width: '250px', height: '250px', objectFit: 'cover', display: 'block' }}
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
              {key}
            </p>
          </div>
        ))}
      </div>
      {renderSpecifications()}
    </div>
  );
};

export default UfoHighbay;

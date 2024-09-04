import React, { useState } from 'react';
import LEDMiniFloodLight15to50W from '../../../images/Outdoor/FloodLight/LEDMiniFloodLight15to50W.jpg'; 
import LEDFloodLight150to300W from '../../../images/Outdoor/FloodLight/LEDFloodLight150to300W.jpg';

const floodLightData = {
  'LED Mini Flood Light 15-50W': {
    src: LEDMiniFloodLight15to50W,
    specs: {
      SIZE: '15-30W: 7.1″ L x 5.1″ W x 1.7″ D | 50W: 8.5″ L x 6.1″ W x 2″ D | 70-90W: 10.4″ L x 7.5″ W x 2.1″ D',
      LUMENS: '15W: 2,100lm | 30W: 4,200lm | 50W: 7,000lm',
      'ADJUSTABLE CCT': '3000K + 4000K + 5000K',
      VOLTAGE: 'AC100-277V (50/60Hz)',
      DIMMABLE: '1-10V (70W and 90W Only)',
      'BEAM ANGLE': '150°',
      MOUNT: 'Small Yoke, Large Yoke, Knuckle, Extruded Arm, Slip Fitter, 2-in-1 Extruded Slip Fitter',
      CRI: '>80',
      PF: '>0.9',
      'IP RATE': 'IP65',
      MATERIALS: 'Aluminum, PC',
      'HOUSING COLOR': 'Black, Brown, White',
      LIFESPAN: '50,000 hours',
      DESCRIPTION: 'These Adjustable CCT Flood Lights allow you to switch between 3 color temperatures and have a variety of mounting options. They are ideal for highlighting architectural features and landscape lighting.',
    },
  },
  'LED Flood Light 150-300W': {
    src: LEDFloodLight150to300W,
    specs: {
      SIZE: '150W: 11.3″ L x 19.7″ W x 3″ D | 240W: 14″ L x 25.1″ W x 3″ D | 300W: 14″ L x 25.1″ W x 3″ D',
      LUMENS: '150W: 21,135lm | 240W: 33,816lm | 300W: 42,270lm',
      CCT: '5700K',
      VOLTAGE: 'AC100-277V (Surge Protected)',
      'BEAM ANGLE': '150*85°(Type Ⅲ)',
      CRI: '>70',
      PF: '>0.9',
      'IP RATE': 'IP65',
      MATERIALS: 'Aluminum',
      FINISH: 'Black, Brown',
      LIFESPAN: '50,000 hours',
      MOUNTS: 'Slip Fitter, Small Yoke, Large Yoke, Extruded Arm, 2-in-1 Slip Extruded Slip Fitter',
      OPTIONAL: 'Photocell, AC200-480V',
      DESCRIPTION: 'LED Flood Lights are commonly used to replace HPS flood lights and metal halides. These area lights are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. LED Flood Lights are perfect for stadiums, parks, billboards, and places of worship. These come with a surge protector and slot for a photocell sensor.',
    },
  },
};

const FloodLight = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (key) => {
    setSelectedImage(selectedImage === key ? null : key);
  };

  const renderSpecifications = () => {
    if (!selectedImage) return null;

    const { specs } = floodLightData[selectedImage];
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
      <h1>Flood Light</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        {Object.keys(floodLightData).map((key) => (
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
              src={floodLightData[key].src}
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

export default FloodLight;

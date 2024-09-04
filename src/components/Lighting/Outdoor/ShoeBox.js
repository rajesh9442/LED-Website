import React, { useState } from 'react';
import LEDShoeBoxAreaLight150to450W from '../../../images/Outdoor/ShoeBox/LEDShoeBoxAreaLight150to450W.jpg'; // Adjust the path based on your folder structure

const ShoeBox = () => {
  const [showSpecs, setShowSpecs] = useState(false);

  const handleImageClick = () => {
    setShowSpecs(!showSpecs);
  };

  const specs = {
    SIZE: '150W: 11.3″ L x 19.7″ W x 3″ D | 240-300W: 14″ L x 25.1″ W x 3″ D | 450W: TBD',
    LUMENS: '150W: 21,135lm | 240W: 33,816lm | 300W: 42,270lm | 450W: 63,405lm',
    CCT: '5000K, 5700K',
    VOLTAGE: 'AC100-277V (Surge Protected)',
    DIMMING: '1-10V',
    'BEAM ANGLE': '150*85°(Type Ⅲ)',
    CRI: '>70',
    PF: '>0.9',
    'IP RATE': 'IP65',
    MATERIALS: 'Aluminum',
    FINISH: 'Black, Brown, White',
    LIFESPAN: '50,000 hours',
    MOUNTS: 'Slip Fitter, Small Yoke, Large Yoke, Extruded Arm, 2-in-1 Slip Extruded Slip Fitter',
    OPTIONAL: 'Photocell, AC200-480V',
    DESCRIPTION: 'LED Shoebox Lights are commonly used to replace HPS flood lights and metal halides. These area lights are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. LED Shoebox Lights are perfect for stadiums, parks, billboards, and places of worship. These come with a surge protector and slot for a photocell sensor.',
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Shoe Box</h1>
      <div
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '10px' }}
        onClick={handleImageClick}
      >
        <img
          src={LEDShoeBoxAreaLight150to450W}
          alt="LEDShoeBoxAreaLight150to450W"
          style={{
            width: '250px',
            height: '250px',
            objectFit: 'cover',
            cursor: 'pointer',
            border: showSpecs ? '2px solid black' : 'none',
          }}
        />
        <p style={{ marginTop: '10px', fontSize: '16px', color: 'black' }}>
          LED ShoeBox Area Light 150-450W
        </p>
      </div>

      {showSpecs && (
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
      )}
    </div>
  );
}

export default ShoeBox;

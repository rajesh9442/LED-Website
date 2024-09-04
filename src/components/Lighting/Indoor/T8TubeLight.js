import React, { useState } from 'react';
import T8TubeLight1 from '../../../images/Indoor/T8TubeLight/LEDT8TubeLight2ft-4ft10-22W.jpg';
import T8TubeLight2 from '../../../images/Indoor/T8TubeLight/LEDT8TubeLiightSinglePin8ft50W.jpg';

const T8TubeLight = () => {
  const [selectedLight, setSelectedLight] = useState(null);

  const specsData = {
    light1: {
      SIZE: '8ft: 1.4″ * Ø * 8 ‘L',
      WATT: '50W',
      LUMENS: '5500',
      CCT: '4000K, 5000K, 6000K',
      COVER: 'Clear, Stripe, Frosted',
      VOLTAGE: 'AC90 – 277V',
      CRI: '80',
      IP_RATE: 'IP20',
      LIFESPAN: '50,000 HRS',
      DESCRIPTION: 'LED T8 Tube Lights are commonly used to replace fluorescent light bulbs, and can provide an energy savings of up to 60%. LED T8 Tubes are perfect for offices, schools, and parking garages.'
    },
    light2: {
      SIZE: '2ft: 1.4″ Ø x 2′ L\n3ft: 1.4″ Ø x 3′ L\n4ft: 1.4″ Ø x 4′ L',
      '10W': '1,200lm (2ft)',
      '14W': '1,680lm (3ft)',
      '22W': '2,420lm (4ft)',
      CCT: '3000K, 4000K, 5000K, 6500K',
      VOLTAGE: 'AC90-277V',
      BEAM_ANGLE: '120°',
      INSTALLATION_TYPE: 'TYPE B (BALLAST BYPASS)',
      CRI: '80',
      PF: '0.9',
      IP_RATE: 'IP20',
      LIFESPAN: '50,000 hours',
      DESCRIPTION: 'LED T8 Tube Lights are commonly used to replace fluorescent light bulbs, and can provide an energy savings of up to 60%. LED T8 Tubes are perfect for offices, schools, and parking garages.'
    }
  };

  const handleImageClick = (lightKey) => {
    setSelectedLight(lightKey);
  };

  const renderSpecifications = () => {
    if (!selectedLight) return null;

    const specs = specsData[selectedLight];
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
      <h1>T8 Tube Light</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <div
          style={{
            margin: '0 15px',
            cursor: 'pointer',
            border: selectedLight === 'light1' ? '2px solid black' : '2px solid transparent',
            padding: '5px',
            display: 'inline-block'
          }}
          onClick={() => handleImageClick('light1')}
        >
          <img
            src={T8TubeLight1}
            alt="T8 Tube Light 1"
            style={{ width: '250px', height: '250px', objectFit: 'cover', display: 'block' }}
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>LED T8 Tube Light Single Pin 8ft 50W</p>
        </div>
        <div
          style={{
            margin: '0 15px',
            cursor: 'pointer',
            border: selectedLight === 'light2' ? '2px solid black' : '2px solid transparent',
            padding: '5px',
            display: 'inline-block'
          }}
          onClick={() => handleImageClick('light2')}
        >
          <img
            src={T8TubeLight2}
            alt="T8 Tube Light 2"
            style={{ width: '250px', height: '250px', objectFit: 'cover', display: 'block' }}
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>LED T8 Tube Light 2ft – 4ft 10 – 22W</p>
        </div>
      </div>
      {renderSpecifications()}
    </div>
  );
};

export default T8TubeLight;

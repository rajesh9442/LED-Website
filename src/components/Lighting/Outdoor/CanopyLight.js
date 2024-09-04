import React, { useState } from 'react';
import CanopyLight1 from '../../../images/Outdoor/CanopyLight/1.jpg';
import CanopyLight2 from '../../../images/Outdoor/CanopyLight/2.jpg';
import CanopyLight3 from '../../../images/Outdoor/CanopyLight/3.jpg';
import CanopyLight4 from '../../../images/Outdoor/CanopyLight/4.jpg';
import CanopyLight5 from '../../../images/Outdoor/CanopyLight/5.jpg';

const specifications = {
  'LED Canopy Light 150W': {
    src: CanopyLight1,
    specs: {
      SIZE: '15” L x 15″ W x 3.4” D',
      WATTS: '150W',
      LUMEN: '19383lm',
      CCT: '5700K',
      VOLTAGE: 'AC100-277V (50-60Hz)',
      IP_RATE: 'IP65',
      BEAM_ANGLE: '120°',
      CRI: '>80',
      PF: '≥0.9',
      HOUSING_COLOR: 'White',
      MATERIALS: 'Aluminum',
      LIFESPAN: '50,000 hours',
      DESCRIPTION: 'LED Canopy Lights are designed to easily mount directly on a flat ceiling. These lights are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. LED Canopy Lights are perfect for gas stations, awnings, entryways, and car ports.'
    }
  },
  'LED Canopy Light 180W': {
    src: CanopyLight2,
    specs: {
      SIZE: '20.5” L x 20.5” W x 9.6” D',
      WATTS: '180W',
      LUMEN: '25428lm',
      CCT: '5700K',
      VOLTAGE: 'AC100-240V (50-60Hz)',
      BEAM_ANGLE: '120°',
      CRI: '80',
      PF: '≥0.9',
      IP_RATE: 'IP65',
      LIFESPAN: '50,000 hours',
      DESCRIPTION: 'LED Canopy Lights are designed to easily retrofit old canopy light fixtures, needing only a four-inch hole and four screws. These lights are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. LED Canopy Lights are perfect for gas stations, awnings, entryways, and car ports.'
    }
  },
  'LED Parking Garage Canopy Light 100W': {
    src: CanopyLight3,
    specs: {
      SIZE: '9.56” L x 9.56” W x 3.68” D',
      WATTS: '100W',
      LUMEN: '13000lm',
      CCT: '5700K',
      VOLTAGE: 'AC100-277V (50-60Hz)',
      IP_RATE: 'IP65',
      BEAM_ANGLE: '120°',
      CRI: '>80',
      PF: '≥0.9',
      HOUSING_COLOR: 'White',
      MATERIALS: 'Aluminum',
      LIFESPAN: '50,000 hours',
      DESCRIPTION: 'LED Canopy Lights are designed to easily mount directly on a flat ceiling. These lights are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. LED Canopy Lights are perfect for gas stations, awnings, entryways, and car ports.'
    }
  },
  'LED Parking Garage Canopy Light 75W': {
    src: CanopyLight4,
    specs: {
      SIZE: '10.03” L x 10.03” W x 4.92” D',
      WATTS: '75W',
      LUMEN: '10,277lm',
      CCT: '5700K',
      VOLTAGE: 'AC100-277V (50-60Hz)',
      IP_RATE: 'IP65',
      BEAM_ANGLE: '120°',
      CRI: '>80',
      PF: '≥0.9',
      HOUSING_COLOR: 'White',
      MATERIALS: 'Aluminum',
      LIFESPAN: '50,000 hours',
      DESCRIPTION: 'LED Canopy Lights are designed to easily mount directly on a flat ceiling. These lights are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. LED Canopy Lights are perfect for gas stations, awnings, entryways, and car ports.'
    }
  },
  'LED Parking Garage Canopy Light 50W': {
    src: CanopyLight5,
    specs: {
      SIZE: 'N/A',
      WATTS: '50W',
      LUMEN: '7000lm',
      CCT: '5700K',
      VOLTAGE: 'AC100-277V (50-60Hz)',
      IP_RATE: 'IP65',
      BEAM_ANGLE: '120°',
      CRI: '>80',
      PF: '≥0.9',
      HOUSING_COLOR: 'White',
      MATERIALS: 'Aluminum',
      LIFESPAN: '50,000 hours',
      DESCRIPTION: 'LED Canopy Lights are designed to easily mount directly on a flat ceiling. These lights are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. LED Canopy Lights are perfect for gas stations, awnings, entryways, and car ports.'
    }
  }
};

const CanopyLight = () => {
  const [selectedLight, setSelectedLight] = useState(null);

  const handleImageClick = (key) => {
    setSelectedLight(key);
  };

  const renderSpecifications = () => {
    const specs = specifications[selectedLight]?.specs;
    if (!specs) return null;

    return (
      <div style={{ marginTop: '20px', textAlign: 'left', width: '50%', margin: 'auto' }}>
        <h2>Specifications</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <tbody>
            {Object.entries(specs).map(([key, value]) => (
              <tr key={key}>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{key}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }} dangerouslySetInnerHTML={{ __html: value }} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Canopy Light</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '10px' }}>
        {Object.keys(specifications).map((key) => (
          <div key={key} style={{ textAlign: 'center' }}>
            <div 
              style={{ 
                display: 'inline-block',
                cursor: 'pointer',
                border: selectedLight === key ? '2px solid black' : '2px solid transparent',
                padding: '5px'
              }}
              onClick={() => handleImageClick(key)}
            >
              <img 
                src={specifications[key].src} 
                alt={key} 
                style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
              />
              <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
                {key}
              </p>
            </div>
          </div>
        ))}
      </div>
      {renderSpecifications()}
    </div>
  );
}

export default CanopyLight;

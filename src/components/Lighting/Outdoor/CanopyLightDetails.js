import React from 'react';
import { useParams } from 'react-router-dom';
import CanopyLight1 from '../../../images/Outdoor/CanopyLight/1.jpg';
import CanopyLight2 from '../../../images/Outdoor/CanopyLight/2.jpg';
import CanopyLight3 from '../../../images/Outdoor/CanopyLight/3.jpg';
import CanopyLight4 from '../../../images/Outdoor/CanopyLight/4.jpg';
import CanopyLight5 from '../../../images/Outdoor/CanopyLight/5.jpg';

const canopyLightData = {
  'led-canopy-light-150w': {
    title: 'LED Canopy Light 150W',
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
  'led-canopy-light-180w': {
    title: 'LED Canopy Light 180W',
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
  'led-parking-garage-canopy-light-100w': {
    title: 'LED Parking Garage Canopy Light 100W',
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
  'led-parking-garage-canopy-light-75w': {
    title: 'LED Parking Garage Canopy Light 75W',
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
  'led-parking-garage-canopy-light-50w': {
    title: 'LED Parking Garage Canopy Light 50W',
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
  },
};

const CanopyLightDetails = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const canopyLight = canopyLightData[id]; // Get the data for the selected canopy light

  if (!canopyLight) {
    return <div>Invalid Canopy Light selection.</div>;
  }

  const renderSpecifications = () => {
    const { specs } = canopyLight;
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
      <h1>{canopyLight.title}</h1>
      <img
        src={canopyLight.src}
        alt={canopyLight.title}
        style={{ width: '300px', height: '300px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
      />
      {renderSpecifications()}
    </div>
  );
};

export default CanopyLightDetails;

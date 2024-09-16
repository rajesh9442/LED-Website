import React from 'react';
import { useParams } from 'react-router-dom';
import LEDCornLight18W from '../../../images/Indoor/CornLight/LEDCornLight18W.jpg'; // Adjust the path based on your folder structure
import LEDCornLight54W from '../../../images/Indoor/CornLight/LEDCornLight54W.jpg';
import LEDCornLight120W from '../../../images/Indoor/CornLight/LEDCornLight120W.jpg';

const imageData = {
  '18w': {
    src: LEDCornLight18W,
    title: '18W Corn Light',
    specs: {
        SIZE: '5.7″ L x 2.6″ W',
        LUMENS: '2,610lm',
        CCT: '3000K, 5700K',
        VOLTAGE: 'AC100-277V',
        DIMMABLE: 'No',
        BEAM_ANGLE: '360°',
        BASE: 'E26, E39',
        CRI: '>80',
        IP_RATE: 'IP64',
        MATERIALS: 'Aluminum, PC',
        HOUSING_COLOR: 'White, Silver',
        LIFESPAN: '50,000 hours',
        DESCRIPTION: 'LED Corn Light widely used in supermarket, warehouse, garage, home, office, hotel, hospital, school, etc. Direct replacement for Metal Halide, easy installation. Fits many different fixtures to replace traditional lamps. These lamps are not waterproof and should only be used outside if they have a water-tight casing.',
      }
  },
  '54w': {
    src: LEDCornLight54W,
    title: '54W Corn Light',
    specs: {
        SIZE: '9.5″ L x 2.6″ W',
        LUMENS: '8,100lm',
        CCT: '3000K, 5700K',
        VOLTAGE: 'AC100-277V',
        DIMMABLE: 'No',
        BEAM_ANGLE: '360°',
        BASE: 'E26, E39',
        CRI: '>80',
        IP_RATE: 'IP64',
        MATERIALS: 'Aluminum, PC',
        HOUSING_COLOR: 'White, Silver',
        LIFESPAN: '50,000 hours',
        DESCRIPTION: 'LED Corn Light widely used in supermarket, warehouse, garage, home, office, hotel, hospital, school, etc. Direct replacement for Metal Halide, easy installation. Fits many different fixtures to replace traditional lamps. These lamps are not waterproof and should only be used outside if they have a water-tight casing.',
      }
  },
  '120w': {
    src: LEDCornLight120W,
    title: '120W Corn Light',
    specs: {
        SIZE: '13.4″ L x 4.4″ W',
        LUMENS: '17,400lm',
        CCT: '3000K, 5700K',
        VOLTAGE: 'AC100-277V',
        DIMMABLE: 'No',
        BEAM_ANGLE: '360°',
        BASE: 'E26, E27, E39, E40',
        CRI: '>80',
        IP_RATE: 'IP64',
        MATERIALS: 'Aluminum, PC',
        HOUSING_COLOR: 'White, Silver',
        LIFESPAN: '50,000 hours',
        DESCRIPTION: 'LED Corn Light widely used in supermarket, warehouse, garage, home, office, hotel, hospital, school, etc. Direct replacement for Metal Halide, easy installation. Fits many different fixtures to replace traditional lamps. These lamps are not waterproof and should only be used outside if they have a water-tight casing.',
      }
  }
};

const CornLightDetails = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const cornLight = imageData[id]; // Get the data for the selected corn light

  if (!cornLight) {
    return <div>Invalid Corn Light selection.</div>;
  }

  const renderSpecifications = () => {
    const { specs } = cornLight;
    return (
      <div style={{ marginTop: '20px', textAlign: 'left', width: '50%', margin: 'auto' }}>
        <h2>Specifications</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {Object.entries(specs).map(([key, value]) => (
              <tr key={key}>
                <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>{key}</td>
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
      <h1>{cornLight.title}</h1>
      <img
        src={cornLight.src}
        alt={cornLight.title}
        style={{ width: '300px', height: '300px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
      />
      {renderSpecifications()}
    </div>
  );
};

export default CornLightDetails;
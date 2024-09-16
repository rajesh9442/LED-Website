import React from 'react';
import { useParams } from 'react-router-dom';
import coolerLightImage from '../../../images/Indoor/CoolerLight/CoolerLight.jpg'; // Adjust the path based on your folder structure

const coolerLightData = {
  'cooler-light-1': {
    title: 'Cooler Light 5ft – 32W',
    src: coolerLightImage,
    specs: {
      SIZE: '5ft- 0.5” Ø x 58.7” L<br />6ft- 0.5” Ø x 70.6” L',
      'Input voltage': 'AC100-250V',
      'Operating frequency': '50/60Hz',
      'Power factor': '> 0.90',
      'Ambient temperature range': '-20°C ~+40°C',
      'Color Temp': '57K',
      'THD': '<20%',
      'IP Rating': 'IP20',
      'CRI': '>80Ra',
      'Beam Angle': '170°',
      'Cover': 'Clear',
      DESCRIPTION: 'LED Cooler Lights are an excellent solution for lighting refrigerated units. These lights are safe for indoor use in coolers and freezers. LED Cooler Lights are perfect for grocery stores, gas stations, and convenience stores.'
    }
  }
  // Add more cooler light data as needed
};

const CoolerLightDetails = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const coolerLight = coolerLightData[id]; // Get the data for the selected cooler light

  if (!coolerLight) {
    return <div>Invalid Cooler Light selection.</div>;
  }

  const renderSpecifications = () => {
    const { specs } = coolerLight;
    return (
      <div style={{ marginTop: '20px', textAlign: 'left', width: '50%', margin: 'auto' }}>
        <h2>Specifications</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <tbody>
            {Object.entries(specs).map(([key, value]) => (
              <tr key={key}>
                <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>{key}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }} dangerouslySetInnerHTML={{ __html: value }}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{coolerLight.title}</h1>
      <img
        src={coolerLight.src}
        alt={coolerLight.title}
        style={{ width: '300px', height: '300px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
      />
      {renderSpecifications()}
    </div>
  );
};

export default CoolerLightDetails;

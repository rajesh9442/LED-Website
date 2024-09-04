import React, { useState } from 'react';
import coolerLightImage from '../../../images/Indoor/CoolerLight/CoolerLight.jpg'; // Adjust the path based on your folder structure

const specifications = {
  'Cooler Light': {
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
};

const CoolerLight = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleImageClick = () => {
    setIsSelected(!isSelected);
  };

  const renderSpecifications = () => {
    const specs = specifications['Cooler Light'].specs;
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
      <h1>Cooler Light</h1>
      <div 
        style={{ 
          display: 'inline-block', // Ensure div only takes up as much space as the content
          cursor: 'pointer',
          border: isSelected ? '2px solid black' : '2px solid transparent', // Change border color on click
          padding: '5px' // Add padding to ensure border fits tightly around image
        }}
        onClick={handleImageClick}
      >
        <img 
          src={specifications['Cooler Light'].src} 
          alt="Cooler Light" 
          style={{ width: '250px', height: '250px', objectFit: 'cover', display: 'block' }} // Ensure image does not extend beyond its container
        />
        <p style={{ marginTop: '10px', fontSize: '16px', color: 'black' }}>
          LED Cooler Light 5ft – 32W, 6ft – 40W
        </p>
      </div>
      {isSelected && renderSpecifications()} {/* Show specifications if selected */}
    </div>
  );
}

export default CoolerLight;

import React, { useState } from 'react';
import LEDCornLight18W from '../../../images/Indoor/CornLight/LEDCornLight18W.jpg'; // Adjust the path based on your folder structure
import LEDCornLight54W from '../../../images/Indoor/CornLight/LEDCornLight54W.jpg';
import LEDCornLight120W from '../../../images/Indoor/CornLight/LEDCornLight120W.jpg';

const imageData = {
  '18W': {
    src: LEDCornLight18W,
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
  '54W': {
    src: LEDCornLight54W,
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
  '120W': {
    src: LEDCornLight120W,
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

const CornLight = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (key) => {
    setSelectedImage(selectedImage === key ? null : key); // Toggle selection
  };

  const renderSpecifications = () => {
    if (!selectedImage) return null;

    const { specs } = imageData[selectedImage];
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
      <h1>Corn Light</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        {Object.keys(imageData).map((key) => (
          <div
            key={key}
            style={{
              margin: '0 15px',
              cursor: 'pointer',
              border: selectedImage === key ? '2px solid black' : '2px solid transparent', // Border color change on click
              padding: '5px', // Padding to fit the border around the image
              display: 'inline-block', // Ensure div only takes up as much space as needed
              transform: selectedImage === key ? 'scale(1.1)' : 'scale(1)' // Scale effect on selection
            }}
            onClick={() => handleImageClick(key)}
          >
            <img 
              src={imageData[key].src} 
              alt={`${key} Corn Light`} 
              style={{ width: '250px', height: '250px', objectFit: 'cover', display: 'block' }} // Ensure image does not extend beyond its container
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
              {key} Corn Light
            </p>
          </div>
        ))}
      </div>
      {renderSpecifications()}
    </div>
  );
};

export default CornLight;

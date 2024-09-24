import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LEDCornLight18W from '../../../images/Indoor/CornLight/LEDCornLight18W.jpg'; // Adjust the path based on your folder structure
import LEDCornLight54W from '../../../images/Indoor/CornLight/LEDCornLight54W.jpg';
import LEDCornLight120W from '../../../images/Indoor/CornLight/LEDCornLight120W.jpg';
import additionalImage from '../../../images/Indoor/CornLight/11.jpg'; // Additional image

const imageData = {
  '18w': {
    title: '18W Corn Light',
    images: [LEDCornLight18W, additionalImage], // Multiple images
    specs: {
      SIZE: '5.7″ L x 2.6″ W',
    },
  },
  '54w': {
    title: '54W Corn Light',
    images: [LEDCornLight54W, additionalImage], // Multiple images
    specs: {
      SIZE: '9.5″ L x 2.6″ W',
    },
  },
  '120w': {
    title: '120W Corn Light',
    images: [LEDCornLight120W, additionalImage], // Multiple images
    specs: {
      SIZE: '13.4″ L x 4.4″ W',
    },
  },
};

const CornLightDetails = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const cornLight = imageData[id]; // Get the data for the selected corn light

  // Set initial image state
  const [selectedImage, setSelectedImage] = useState(cornLight.images[0]);

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

      {/* Main Image Display */}
      <div style={{ marginBottom: '20px' }}>
        <img
          src={selectedImage}
          alt={cornLight.title}
          style={{ width: '300px', height: '300px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
        />
      </div>

      {/* Thumbnail Images */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {cornLight.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(image)}
            style={{
              width: '60px',
              height: '60px',
              objectFit: 'cover',
              cursor: 'pointer',
              border: selectedImage === image ? '2px solid black' : '1px solid #ccc',
              padding: '5px',
            }}
          />
        ))}
      </div>

      {/* Specifications */}
      {renderSpecifications()}
    </div>
  );
};

export default CornLightDetails;

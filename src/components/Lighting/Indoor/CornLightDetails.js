import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LEDCornLight18W from '../../../images/Indoor/CornLight/LEDCornLight18W.jpg';
import LEDCornLight54W from '../../../images/Indoor/CornLight/LEDCornLight54W.jpg';
import LEDCornLight120W from '../../../images/Indoor/CornLight/LEDCornLight120W.jpg';
import additionalImage from '../../../images/Indoor/CornLight/11.jpg';
import additionalImage2 from '../../../images/Indoor/CornLight/12.jpg';

const imageData = {
  '18w': {
    title: '18W Corn Light',
    images: [LEDCornLight18W, additionalImage2, additionalImage], // Multiple images
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
    title: '54W Corn Light',
    images: [LEDCornLight54W, additionalImage2, additionalImage], // Multiple images
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
    title: '120W Corn Light',
    images: [LEDCornLight120W, additionalImage2, additionalImage], // Multiple images
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
  },
};

const CornLightDetails = () => {
  const { id } = useParams();
  const cornLight = imageData[id];

  const [selectedImage, setSelectedImage] = useState(cornLight.images[0]);
  const [zoomStyles, setZoomStyles] = useState({});

  if (!cornLight) {
    return <div>Invalid Corn Light selection.</div>;
  }

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100; // Mouse X position in percentage
    const y = ((e.clientY - rect.top) / rect.height) * 100; // Mouse Y position in percentage
    setZoomStyles({
      backgroundImage: `url(${selectedImage})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: '200%', // Increase image size for zoom
      backgroundRepeat: 'no-repeat',
    });
  };

  const handleMouseLeave = () => {
    setZoomStyles({}); // Reset zoom effect
  };

  const renderSpecifications = () => {
    const { specs } = cornLight;
    return (
      <div style={{ marginTop: '20px', width: '80%', maxWidth: '700px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center' }}>Specifications</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <tbody>
            {Object.entries(specs).map(([key, value]) => (
              <tr key={key}>
                <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', width: '30%' }}>{key}</td>
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

      {/* Main Image Display with Zoom Effect */}
      <div
        style={{
          marginBottom: '20px',
          width: '300px',
          height: '300px',
          margin: '0 auto',
          overflow: 'hidden',
          position: 'relative',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={selectedImage}
          alt={cornLight.title}
          style={{
            width: '300px',
            height: '300px',
            objectFit: 'contain',
            display: zoomStyles.backgroundImage ? 'none' : 'block', // Hide the image when zoom effect is active
          }}
        />
        {/* Zoom effect div */}
        {zoomStyles.backgroundImage && (
          <div
            style={{
              width: '100%',
              height: '100%',
              ...zoomStyles,
            }}
          />
        )}
      </div>

      {/* Thumbnail Images */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
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

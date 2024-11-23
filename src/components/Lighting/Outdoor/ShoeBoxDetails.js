import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LEDShoeBoxAreaLight150to450W from '../../../images/Outdoor/ShoeBox/LEDShoeBoxAreaLight150to450W.jpg';
import AdditionalImage1 from '../../../images/Outdoor/ShoeBox/11.jpg';
import AdditionalImage12 from '../../../images/Outdoor/ShoeBox/12.jpg';

const shoeBoxData = {
  'led-shoe-box-area-light': {
    title: 'LED Shoe Box Area Light 150-450W',
    images: [LEDShoeBoxAreaLight150to450W, AdditionalImage12, AdditionalImage1],
    specs: {
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
      DESCRIPTION:
        'LED Shoebox Lights are commonly used to replace HPS flood lights and metal halides. These area lights are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. LED Shoebox Lights are perfect for stadiums, parks, billboards, and places of worship. These come with a surge protector and slot for a photocell sensor.',
    },
  },
};

const ShoeBoxDetails = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const shoeBox = shoeBoxData[id]; // Get the data for the selected shoeBox
  const [selectedImage, setSelectedImage] = useState(shoeBox ? shoeBox.images[0] : null); // Default to the first image
  const [zoomStyles, setZoomStyles] = useState({});

  if (!shoeBox) {
    return <div>Invalid ShoeBox selection.</div>;
  }

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100; // Mouse X position as percentage
    const y = ((e.clientY - rect.top) / rect.height) * 100; // Mouse Y position as percentage
    setZoomStyles({
      backgroundImage: `url(${selectedImage})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: '200%', // Zoom level
      backgroundRepeat: 'no-repeat',
    });
  };

  const handleMouseLeave = () => {
    setZoomStyles({}); // Reset zoom effect
  };

  const renderSpecifications = () => {
    const { specs } = shoeBox;
    return (
      <div style={{ marginTop: '20px', textAlign: 'left', width: '80%', maxWidth: '700px', margin: '0 auto' }}>
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
      <h1>{shoeBox.title}</h1>

      {/* Main Image Display with Hover Zoom Effect */}
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
          alt={shoeBox.title}
          style={{
            width: '300px',
            height: '300px',
            objectFit: 'contain', // Ensure the full image is visible
            display: zoomStyles.backgroundImage ? 'none' : 'block', // Hide image when zoom effect is active
          }}
        />
        {/* Zoom Effect Overlay */}
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
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {shoeBox.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(image)}
            style={{
              width: '60px', // Thumbnail size
              height: '60px', // Thumbnail size
              objectFit: 'contain', // Ensure full thumbnail visibility
              cursor: 'pointer',
              border: selectedImage === image ? '2px solid black' : '1px solid #ccc',
              padding: '5px',
            }}
          />
        ))}
      </div>

      {renderSpecifications()}
    </div>
  );
};

export default ShoeBoxDetails;

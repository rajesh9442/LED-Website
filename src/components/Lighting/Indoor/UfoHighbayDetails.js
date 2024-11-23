import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import UFOHighbayLight150W from '../../../images/Indoor/UfoHighbay/UFOHighbayLight150W.jpg';
import UFOHighbayLight240W from '../../../images/Indoor/UfoHighbay/UFOHighbayLight240W.jpg';
import AdditionalHighbay1 from '../../../images/Indoor/UfoHighbay/11.jpg';
import AdditionalHighbay12 from '../../../images/Indoor/UfoHighbay/12.jpg';

const ufoHighbayData = {
  'ufo-highbay-150w': {
    title: 'UFO Highbay Light 150W',
    images: [UFOHighbayLight150W, AdditionalHighbay12, AdditionalHighbay1],
    specs: {
      SIZE: '12.6″ W x 7.4″ D',
      LUMENS: '21,750lm',
      CCT: '3500K – 5700K',
      VOLTAGE: '120-277 Vac',
      DIMMABLE: '1-10V',
      'BEAM ANGLE': '90°',
      CRI: '>80',
      'IP RATE': 'IP65',
      MATERIALS: 'Aluminum, PC',
      OPTIONAL: 'Motion Sensor, Surge Protector',
      LIFESPAN: '50,000 hours',
      DESCRIPTION:
        'LED High Bays are built from strong materials that are safe for use in extreme temperatures. They can be equipped with motion sensors. LED High Bays are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. These lights are widely used in the lighting of warehouses, gas stations, exhibition halls, and gymnasiums.',
    },
  },
  'ufo-highbay-240w': {
    title: 'UFO Highbay Light 240W',
    images: [UFOHighbayLight240W, AdditionalHighbay12, AdditionalHighbay1],
    specs: {
      SIZE: '15″ W x 8″ D',
      LUMENS: '34,800lm',
      CCT: '3500K – 5700K',
      VOLTAGE: '120-277 Vac',
      DIMMABLE: '1-10V',
      'BEAM ANGLE': '90°',
      CRI: '>80',
      'IP RATE': 'IP65',
      MATERIALS: 'Aluminum, PC',
      OPTIONAL: 'Motion Sensor, Surge Protector',
      LIFESPAN: '50,000 hours',
      DESCRIPTION:
        'LED High Bays are built from strong materials that are safe for use in extreme temperatures. They can be equipped with motion sensors. LED High Bays are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. These lights are widely used in the lighting of warehouses, gas stations, exhibition halls, and gymnasiums.',
    },
  },
};

const UfoHighbayDetails = () => {
  const { id } = useParams();
  const highbay = ufoHighbayData[id];
  const [selectedImage, setSelectedImage] = useState(highbay ? highbay.images[0] : null);
  const [zoomStyles, setZoomStyles] = useState({});

  if (!highbay) {
    return <div>Invalid Highbay selection.</div>;
  }

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100; // Calculate mouse X position as percentage
    const y = ((e.clientY - rect.top) / rect.height) * 100; // Calculate mouse Y position as percentage
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
    const { specs } = highbay;
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
      <h1>{highbay.title}</h1>

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
          alt={highbay.title}
          style={{
            width: '300px',
            height: '300px',
            objectFit: 'cover',
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
        {highbay.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(image)}
            style={{
              width: '60px',
              height: '60px',
              objectFit: 'contain',
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

export default UfoHighbayDetails;

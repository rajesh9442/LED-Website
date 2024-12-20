import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LEDMiniFloodLight15to50W from '../../../images/Outdoor/FloodLight/LEDMiniFloodLight15to50W.jpg';
import LEDFloodLight150to300W from '../../../images/Outdoor/FloodLight/LEDFloodLight150to300W.jpg';
import AdditionalImage1 from '../../../images/Outdoor/FloodLight/11.jpg';
import AdditionalImage13 from '../../../images/Outdoor/FloodLight/13.jpg';
import AdditionalImage14 from '../../../images/Outdoor/FloodLight/14.jpg';
import AdditionalImage21 from '../../../images/Outdoor/FloodLight/21.jpg';
import AdditionalImage22 from '../../../images/Outdoor/FloodLight/22.jpg';
import AdditionalImage23 from '../../../images/Outdoor/FloodLight/23.jpg';
import AdditionalImage41 from '../../../images/Outdoor/FloodLight/41.jpg';
import AdditionalImage42 from '../../../images/Outdoor/FloodLight/42.jpg';
import AdditionalImage43 from '../../../images/Outdoor/FloodLight/43.jpg';
import AdditionalImage44 from '../../../images/Outdoor/FloodLight/44.jpg';
import AdditionalImage45 from '../../../images/Outdoor/FloodLight/45.jpg';
import AdditionalImage46 from '../../../images/Outdoor/FloodLight/46.jpg';

const floodLightData = {
  'led-mini-flood-light-15-50w': {
    title: 'LED Mini Flood Light 15-50W',
    images: [LEDMiniFloodLight15to50W,AdditionalImage13, AdditionalImage14,AdditionalImage1], // Multiple images
    specs: {
        SIZE: '15-30W: 7.1″ L x 5.1″ W x 1.7″ D | 50W: 8.5″ L x 6.1″ W x 2″ D | 70-90W: 10.4″ L x 7.5″ W x 2.1″ D',
        LUMENS: '15W: 2,100lm | 30W: 4,200lm | 50W: 7,000lm',
        'ADJUSTABLE CCT': '3000K + 4000K + 5000K',
        VOLTAGE: 'AC100-277V (50/60Hz)',
        DIMMABLE: '1-10V (70W and 90W Only)',
        'BEAM ANGLE': '150°',
        MOUNT: 'Small Yoke, Large Yoke, Knuckle, Extruded Arm, Slip Fitter, 2-in-1 Extruded Slip Fitter',
        CRI: '>80',
        PF: '>0.9',
        'IP RATE': 'IP65',
        MATERIALS: 'Aluminum, PC',
        'HOUSING COLOR': 'Black, Brown, White',
        LIFESPAN: '50,000 hours',
        DESCRIPTION: 'These Adjustable CCT Flood Lights allow you to switch between 3 color temperatures and have a variety of mounting options. They are ideal for highlighting architectural features and landscape lighting.',
    },
  },
  'led-flood-light-150-300w': {
    title: 'LED Flood Light 150W/200W/300W',
    images: [LEDFloodLight150to300W, AdditionalImage21, AdditionalImage22,AdditionalImage23], // Multiple images
    specs: {
        SIZE: '150W: 11.3″ L x 19.7″ W x 3″ D | 240W: 14″ L x 25.1″ W x 3″ D | 300W: 14″ L x 25.1″ W x 3″ D',
        LUMENS: '150W: 21,135lm | 240W: 33,816lm | 300W: 42,270lm',
        CCT: '5700K',
        VOLTAGE: 'AC100-277V (Surge Protected)',
        'BEAM ANGLE': '150*85°(Type Ⅲ)',
        CRI: '>70',
        PF: '>0.9',
        'IP RATE': 'IP65',
        MATERIALS: 'Aluminum',
        FINISH: 'Black, Brown',
        LIFESPAN: '50,000 hours',
        MOUNTS: 'Slip Fitter, Small Yoke, Large Yoke, Extruded Arm, 2-in-1 Slip Extruded Slip Fitter',
        OPTIONAL: 'Photocell, AC200-480V',
        DESCRIPTION: 'LED Flood Lights are commonly used to replace HPS flood lights and metal halides. These area lights are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. LED Flood Lights are perfect for stadiums, parks, billboards, and places of worship. These come with a surge protector and slot for a photocell sensor.',
    },
  },
  'led-flood-light-450w': {
    title: 'LED Flood Light 450W',
    images: [AdditionalImage41, AdditionalImage42, AdditionalImage43,AdditionalImage44,AdditionalImage45,AdditionalImage46], // Multiple images
    specs: {
        SIZE: '450W: 35.1″ L x 13.1″ W x 3″ D',
        LUMENS: '450W: 42,270lm',
        CCT: '5700K',
        VOLTAGE: 'AC100-277V (Surge Protected)',
        'BEAM ANGLE': '150*85°(Type Ⅲ)',
        CRI: '>70',
        PF: '>0.9',
        'IP RATE': 'IP65',
        MATERIALS: 'Aluminum',
        FINISH: 'Black, Brown',
        LIFESPAN: '50,000 hours',
        MOUNTS: 'Slip Fitter, Small Yoke, Large Yoke, Extruded Arm, 2-in-1 Slip Extruded Slip Fitter',
        OPTIONAL: 'Photocell, AC100-227V',
        DESCRIPTION: 'LED Flood Lights are commonly used to replace HPS flood lights and metal halides. These area lights are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. LED Flood Lights are perfect for stadiums, parks, billboards, and places of worship. These come with a surge protector and slot for a photocell sensor.',
    },
  },
};

const FloodLightDetails = () => {
  const { id } = useParams();
  const floodLight = floodLightData[id];
  const [selectedImage, setSelectedImage] = useState(floodLight ? floodLight.images[0] : null);
  const [zoomStyles, setZoomStyles] = useState({});

  if (!floodLight) {
    return <div>Invalid Flood Light selection.</div>;
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
    const { specs } = floodLight;
    if (!specs) return null; // Return null if no specifications are provided
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
      <h1>{floodLight.title}</h1>

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
          alt={floodLight.title}
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
        {floodLight.images.map((image, index) => (
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

export default FloodLightDetails;

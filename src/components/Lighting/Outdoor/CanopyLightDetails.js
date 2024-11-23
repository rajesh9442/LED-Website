import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CanopyLight1 from '../../../images/Outdoor/CanopyLight/1.jpg';
import CanopyLight2 from '../../../images/Outdoor/CanopyLight/2.jpg';
import CanopyLight3 from '../../../images/Outdoor/CanopyLight/3.jpg';
import CanopyLight4 from '../../../images/Outdoor/CanopyLight/4.jpg';
import CanopyLight5 from '../../../images/Outdoor/CanopyLight/5.jpg';
import AdditionalImage1 from '../../../images/Outdoor/CanopyLight/11.jpg';
import AdditionalImage12 from '../../../images/Outdoor/CanopyLight/12.jpg';
import AdditionalImage111 from '../../../images/Outdoor/CanopyLight/111.jpg';
import AdditionalImage21 from '../../../images/Outdoor/CanopyLight/21.jpg';
import AdditionalImage22 from '../../../images/Outdoor/CanopyLight/22.jpg';
import AdditionalImage23 from '../../../images/Outdoor/CanopyLight/23.jpg';
import AdditionalImage112 from '../../../images/Outdoor/CanopyLight/112.jpg';
import AdditionalImage113 from '../../../images/Outdoor/CanopyLight/113.jpg';
import AdditionalImage31 from '../../../images/Outdoor/CanopyLight/31.jpg';
import AdditionalImage32 from '../../../images/Outdoor/CanopyLight/32.jpg';
import AdditionalImage41 from '../../../images/Outdoor/CanopyLight/41.jpg';
import AdditionalImage42 from '../../../images/Outdoor/CanopyLight/42.jpg';
import AdditionalImage43 from '../../../images/Outdoor/CanopyLight/43.jpg';
import AdditionalImage44 from '../../../images/Outdoor/CanopyLight/44.jpg';
import AdditionalImage45 from '../../../images/Outdoor/CanopyLight/45.jpg';

const canopyLightData = {
  'led-canopy-light-150w': {
    title: 'LED Canopy Light 150W',
    images: [CanopyLight1,AdditionalImage112,AdditionalImage113,AdditionalImage111, AdditionalImage1], // Multiple images
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
    images: [CanopyLight2,AdditionalImage21,AdditionalImage22,AdditionalImage23, AdditionalImage1], // Multiple images
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
    images: [CanopyLight3,AdditionalImage31,AdditionalImage32,AdditionalImage12,AdditionalImage1], // Single image
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
    images: [CanopyLight4,AdditionalImage31,AdditionalImage32,AdditionalImage12,AdditionalImage1], // Single image
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
    images: [CanopyLight5,AdditionalImage41,AdditionalImage42,AdditionalImage43,AdditionalImage44,AdditionalImage45], // Single image
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
  const { id } = useParams();
  const canopyLight = canopyLightData[id];
  const [selectedImage, setSelectedImage] = useState(canopyLight ? canopyLight.images[0] : null);
  const [zoomStyles, setZoomStyles] = useState({});

  if (!canopyLight) {
    return <div>Invalid Canopy Light selection.</div>;
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
    const { specs } = canopyLight;
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
      <h1>{canopyLight.title}</h1>

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
          alt={canopyLight.title}
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
        {canopyLight.images.map((image, index) => (
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

export default CanopyLightDetails;

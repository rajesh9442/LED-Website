import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CanopyLight1 from '../../../images/Outdoor/CanopyLight/1.jpg';
import CanopyLight2 from '../../../images/Outdoor/CanopyLight/2.jpg';
import CanopyLight3 from '../../../images/Outdoor/CanopyLight/3.jpg';
import CanopyLight4 from '../../../images/Outdoor/CanopyLight/4.jpg';
import CanopyLight5 from '../../../images/Outdoor/CanopyLight/5.jpg';
import AdditionalImage1 from '../../../images/Outdoor/CanopyLight/11.jpg';
import AdditionalImage12 from '../../../images/Outdoor/CanopyLight/12.jpg';

const canopyLightData = {
  'led-canopy-light-150w': {
    title: 'LED Canopy Light 150W',
    images: [CanopyLight1,AdditionalImage12, AdditionalImage1], // Multiple images
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
    images: [CanopyLight2,AdditionalImage12, AdditionalImage1], // Multiple images
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
    images: [CanopyLight3,AdditionalImage12,AdditionalImage1], // Single image
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
    images: [CanopyLight4,AdditionalImage12,AdditionalImage1], // Single image
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
    images: [CanopyLight5,AdditionalImage12,AdditionalImage1], // Single image
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
  const { id } = useParams(); // Get the id from the URL parameter
  const canopyLight = canopyLightData[id]; // Get the data for the selected canopy light
  const [selectedImage, setSelectedImage] = useState(canopyLight ? canopyLight.images[0] : null); // Default to the first image

  if (!canopyLight) {
    return <div>Invalid Canopy Light selection.</div>;
  }

  const renderSpecifications = () => {
    const { specs } = canopyLight;
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
      <h1>{canopyLight.title}</h1>

      {/* Main Image Display */}
      <div style={{ marginBottom: '20px' }}>
        <img
          src={selectedImage}
          alt={canopyLight.title}
          style={{ width: '300px', height: '300px', objectFit: 'fill', display: 'block', margin: '0 auto' }}
        />
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
              width: '60px', // Thumbnail size
              height: '60px', // Thumbnail size
              objectFit: 'cover',
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

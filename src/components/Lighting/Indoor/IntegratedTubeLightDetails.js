import React, { useState } from 'react';
import LEDIntegratedTubeLight from '../../../images/Indoor/IntegratedTubeLight/LEDIntegratedTubeLight2-8ft,10-72W.jpg';
import LEDIntegratedTubeLightAlternate from '../../../images/Indoor/IntegratedTubeLight/11.jpg';
import LEDIntegratedTubeLightAlternate1 from '../../../images/Indoor/IntegratedTubeLight/12.jpg';

const imageData = [
  LEDIntegratedTubeLight,
  LEDIntegratedTubeLightAlternate1,
  LEDIntegratedTubeLightAlternate,
];

const specifications = {
  SIZE: '2ft: 1.4″ Ø x 2′ L<br />3ft: 1.4″ Ø x 3′ L<br />4ft: 1.4″ Ø x 4′ L<br />8ft: 1.4″ Ø x 8′ L',
  '10W': '1,200lm (2ft)',
  '14W': '1,680lm (3ft)',
  '22W': '2,640lm (4ft)',
  '60W': '7,200lm (8ft)',
  '72W': '8,640lm (8ft)',
  Cover: 'Clear, Stripe, Frosted, V-Shape',
  CCT: '4000K, 5000K, 6500K',
  VOLTAGE: 'AC90-277V',
  BEAM_ANGLE: '120°',
  CRI: '80',
  PF: '0.9',
  IP_RATE: 'IP20',
  LIFESPAN: '50,000 hours',
  DESCRIPTION: 'LED Integrated Tube Lights are commonly used to replace fluorescent light bulbs, and can provide an energy savings of up to 60%. LED Integrated Tubes are perfect for offices, schools, and parking garages.',
};

const IntegratedTubeLightDetails = () => {
  const [selectedImage, setSelectedImage] = useState(imageData[0]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Integrated Tube Light 2-8ft, 10-72W</h1>

      {/* Main Image Display */}
      <div style={{ marginBottom: '20px' }}>
        <img 
          src={selectedImage} 
          alt="LED Integrated Tube Light" 
          style={{ width: '300px', height: '300px', objectFit: 'cover', display: 'block', margin: '0 auto' }} 
        />
      </div>

      {/* Thumbnail Images */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {imageData.map((image, index) => (
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
      <div style={{ marginTop: '20px', width: '80%', maxWidth: '700px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center' }}>Specifications</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <tbody>
            {Object.entries(specifications).map(([key, value]) => (
              <tr key={key}>
                <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', width: '30%' }}>{key}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }} dangerouslySetInnerHTML={{ __html: value }}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IntegratedTubeLightDetails;

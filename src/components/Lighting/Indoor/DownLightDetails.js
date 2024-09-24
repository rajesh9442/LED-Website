import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DownLightImage1 from '../../../images/Indoor/DownLightSeries/1.jpg'; // Correct path
import DownLightImage2 from '../../../images/Indoor/DownLightSeries/11.jpg'; // Additional image for switching

const downlightData = {
  'downlight-1': {
    title: 'LED 4-6″ Retrofit Downlight 10W-15W 5CCT',
    images: [DownLightImage1, DownLightImage2], // Multiple images
    specs: {
      SIZE: '10W: 4.9” L x 2.6” D<br />15W: 7.3” L x 3” D',
      WATT: '10W - 15W',
      LUMENS: '700lm - 1000lm',
      ADJUSTABLE_CCT: '2700K + 3000K + 4000K + 5000K + 5700K',
      VOLTAGE: 'AC 100-277V',
      CRI: '>90',
      PF: '>0.9',
      IP_RATE: 'IP43',
      MATERIALS: 'Iron, PC',
      HOUSING_COLOR: 'White, Frosted',
      LIFESPAN: '50,000 hours',
      DESCRIPTION: 'LED Downlights are safe to use in damp locations that rarely have direct water contact, such as bathrooms and awnings. These Lights can be easily converted and installed from below the ceiling without removing old fixtures. LED Downlights are perfect for homes, hotels, and offices. This light has a switch on the back to change between four color temperatures.',
    },
  },
  // Add more downlight data as needed
};

const DownLightDetails = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const downlight = downlightData[id]; // Get the data for the selected downlight

  // Set initial image state
  const [selectedImage, setSelectedImage] = useState(downlight.images[0]);

  if (!downlight) {
    return <div>Invalid Downlight selection.</div>;
  }

  const renderSpecifications = () => {
    const { specs } = downlight;
    return (
      <div style={{ marginTop: '20px', textAlign: 'left', width: '50%', margin: 'auto' }}>
        <h2>Specifications</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {Object.entries(specs).map(([key, value]) => (
              <tr key={key}>
                <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>{key}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }} dangerouslySetInnerHTML={{ __html: value }}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{downlight.title}</h1>

      {/* Main Image Display */}
      <div style={{ marginBottom: '20px' }}>
        <img
          src={selectedImage}
          alt={downlight.title}
          style={{ width: '300px', height: '300px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
        />
      </div>

      {/* Thumbnail Images */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {downlight.images.map((image, index) => (
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

export default DownLightDetails;

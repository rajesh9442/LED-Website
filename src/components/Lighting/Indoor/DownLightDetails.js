import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DownLightImage1 from '../../../images/Indoor/DownLightSeries/1.jpg';
import DownLightImage2 from '../../../images/Indoor/DownLightSeries/11.jpg';
import DownLightImage12 from '../../../images/Indoor/DownLightSeries/12.jpg';

const downlightData = {
  'downlight-1': {
    title: 'LED 4-6″ Retrofit Downlight 10W-15W 5CCT',
    images: [DownLightImage1, DownLightImage12, DownLightImage2],
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
      DESCRIPTION: 'LED Downlights are safe to use in damp locations...',
    },
  },
  // Additional downlight data could go here
};

const DownLightDetails = () => {
  const { id } = useParams();
  const downlight = downlightData[id];

  const [selectedImage, setSelectedImage] = useState(downlight.images[0]);

  if (!downlight) {
    return <div>Invalid Downlight selection.</div>;
  }

  const renderSpecifications = () => {
    const { specs } = downlight;
    return (
      <div style={{ marginTop: '20px', width: '80%', maxWidth: '700px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center' }}>Specifications</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <tbody>
            {Object.entries(specs).map(([key, value]) => (
              <tr key={key}>
                <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', width: '30%' }}>{key}</td>
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
          style={{ width: '300px', height: '300px', objectFit: 'fill', display: 'block', margin: '0 auto' }}
        />
      </div>

      {/* Thumbnail Images */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
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

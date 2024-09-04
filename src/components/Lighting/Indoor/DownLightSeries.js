import React, { useState } from 'react';
import LEDDownlight1 from '../../../images/Indoor/DownLightSeries/1.jpg'; // Adjust the path based on your folder structure

const imageData = {
  'LED 4-6″ Retrofit Downlight 10W-15W 5CCT': {
    src: LEDDownlight1,
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
    }
  },
  // Add more downlight data as needed
};

const DownLightSeries = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (key) => {
    setSelectedImage(selectedImage === key ? null : key); // Toggle selection
  };

  const renderSpecifications = () => {
    if (!selectedImage) return null;

    const { specs } = imageData[selectedImage];
    return (
      <div style={{ marginTop: '20px', textAlign: 'left', width: '50%', margin: 'auto' }}>
        <h2>Specifications</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {Object.entries(specs).map(([key, value]) => (
              <tr key={key}>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{key.replace(/_/g, ' ')}</td>
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
      <h1>Downlight Series</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        {Object.keys(imageData).map((key) => (
          <div
            key={key}
            style={{
              margin: '0 15px',
              cursor: 'pointer',
              border: selectedImage === key ? '2px solid black' : '2px solid transparent', // Border color change on click
              padding: '5px', // Padding to fit the border around the image
              display: 'inline-block', // Ensure div only takes up as much space as needed
              transform: selectedImage === key ? 'scale(1.1)' : 'scale(1)' // Scale effect on selection
            }}
            onClick={() => handleImageClick(key)}
          >
            <img 
              src={imageData[key].src} 
              alt={key} 
              style={{ width: '250px', height: '250px', objectFit: 'cover', display: 'block' }} // Ensure image does not extend beyond its container
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
              {key}
            </p>
          </div>
        ))}
      </div>
      {renderSpecifications()}
    </div>
  );
}

export default DownLightSeries;

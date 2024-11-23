import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import coolerLightImage from '../../../images/Indoor/CoolerLight/CoolerLight.jpg'; // Main image
import additionalImage from '../../../images/Indoor/CoolerLight/11.jpg'; // Additional image
import additionalImage1 from '../../../images/Indoor/CoolerLight/1.jpg'; 
import additionalImage12 from '../../../images/Indoor/CoolerLight/12.jpg'; 

const coolerLightData = {
  'cooler-light-1': {
    title: 'Cooler Light 5ft – 32W',
    images: [coolerLightImage, additionalImage1, additionalImage12, additionalImage],
    specs: {
      SIZE: '5ft- 0.5” Ø x 58.7” L<br />6ft- 0.5” Ø x 70.6” L',
      'Input voltage': 'AC100-250V',
      'Operating frequency': '50/60Hz',
      'Power factor': '> 0.90',
      'Ambient temperature range': '-20°C ~+40°C',
      'Color Temp': '57K',
      'THD': '<20%',
      'IP Rating': 'IP20',
      'CRI': '>80Ra',
      'Beam Angle': '170°',
      'Cover': 'Clear',
      DESCRIPTION: 'LED Cooler Lights are an excellent solution for lighting refrigerated units. These lights are safe for indoor use in coolers and freezers. LED Cooler Lights are perfect for grocery stores, gas stations, and convenience stores.'
    }
  }
};

const CoolerLightDetails = () => {
  const { id } = useParams();
  const coolerLight = coolerLightData[id];

  const [selectedImage, setSelectedImage] = useState(coolerLight.images[0]);
  const [zoomStyles, setZoomStyles] = useState({});

  if (!coolerLight) {
    return <div>Invalid Cooler Light selection.</div>;
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
    const { specs } = coolerLight;
    return (
      <div style={{ marginTop: '20px', margin: '0 auto', width: '80%', maxWidth: '700px' }}>
        <h2 style={{ textAlign: 'center' }}>Specifications</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px', textAlign: 'left' }}>
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
      <h1>{coolerLight.title}</h1>

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
          alt={coolerLight.title}
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
        {coolerLight.images.map((image, index) => (
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

export default CoolerLightDetails;

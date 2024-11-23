import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Troffers1 from '../../../images/Indoor/Troffers/LEDAdjustableCCTCenterBasketTroffer2x2ft2x4ft20to60W.jpg';
import AdditionalTroffer1 from '../../../images/Indoor/Troffers/11.jpg';
import AdditionalTroffer12 from '../../../images/Indoor/Troffers/12.jpg';

const troffersData = {
  'led-adjustable-cct-center-basket-troffer': {
    title: 'LED Adjustable CCT Center Basket Troffer 2x2ft 2x4ft 20-60W',
    images: [Troffers1, AdditionalTroffer12, AdditionalTroffer1],
    specs: {
      SIZE: 'BL22: 2′ L x 2’W x 1.2″D, BL24: 4′ L x 2′ W x 1.2″ D',
      '20W +30W + 40W': '2,200lm, 3,300lm, 4,400lm',
      '40W + 50W + 60W': '4,400lm, 5,500lm, 6,600lm',
      'ADJUSTABLE CCT': '3000K + 4000K + 5000K',
      VOLTAGE: 'AC120-277V',
      DIMMABLE: '3-in-1 (0-10V, PWM, Rx)',
      'BEAM ANGLE': '120°',
      CRI: '>80',
      PF: '>0.95',
      'IP RATE': 'IP40',
      MATERIALS: 'Aluminum, PC',
      'HOUSING COLOR': 'White',
      LIFESPAN: '50,000 hours',
      DESCRIPTION: 'LED Indirect Troffers are an excellent replacement for fluorescent lighting. These Troffers are intended only for indoor use. LED Indirect Troffers are ideal for locations that would benefit from soft lighting, such as waiting rooms, places of worship, classrooms, and offices. This fixture allows you to set the wattage and color temperature.',
    },
  },
};

const TroffersDetails = () => {
  const { id } = useParams();
  const troffer = troffersData[id];
  const [selectedImage, setSelectedImage] = useState(troffer ? troffer.images[0] : null);
  const [zoomStyles, setZoomStyles] = useState({});

  if (!troffer) {
    return <div>Invalid Troffer selection.</div>;
  }

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100; // Calculate mouse X position as percentage
    const y = ((e.clientY - rect.top) / rect.height) * 100; // Calculate mouse Y position as percentage
    setZoomStyles({
      backgroundImage: `url(${selectedImage})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: '200%', // Increase image size for zoom effect
      backgroundRepeat: 'no-repeat',
    });
  };

  const handleMouseLeave = () => {
    setZoomStyles({}); // Reset zoom effect when the mouse leaves
  };

  const renderSpecifications = () => {
    const { specs } = troffer;
    return (
      <div style={{ marginTop: '20px', textAlign: 'left', width: '80%', maxWidth: '700px', margin: '0 auto' }}>
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
      <h1>{troffer.title}</h1>

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
          alt={troffer.title}
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
        {troffer.images.map((image, index) => (
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

export default TroffersDetails;

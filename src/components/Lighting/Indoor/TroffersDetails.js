import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Troffers1 from '../../../images/Indoor/Troffers/LEDAdjustableCCTCenterBasketTroffer2x2ft2x4ft20to60W.jpg';
import AdditionalTroffer1 from '../../../images/Indoor/Troffers/11.jpg';// Another additional image

const troffersData = {
  'led-adjustable-cct-center-basket-troffer': {
    title: 'LED Adjustable CCT Center Basket Troffer 2x2ft 2x4ft 20-60W',
    images: [Troffers1, AdditionalTroffer1], // Multiple images
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
      DESCRIPTION:
        'LED Indirect Troffers are an excellent replacement for fluorescent lighting. These Troffers are intended only for indoor use. LED Indirect Troffers are ideal for locations that would benefit from soft lighting, such as waiting rooms, places of worship, classrooms, and offices. This fixture allows you to set the wattage and color temperature.',
    },
  },
};

const TroffersDetails = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const troffer = troffersData[id]; // Get the data for the selected troffer
  const [selectedImage, setSelectedImage] = useState(troffer ? troffer.images[0] : null); // Default to the first image

  if (!troffer) {
    return <div>Invalid Troffer selection.</div>;
  }

  const renderSpecifications = () => {
    const { specs } = troffer;
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
      <h1>{troffer.title}</h1>

      {/* Main Image Display */}
      <div style={{ marginBottom: '20px' }}>
        <img
          src={selectedImage}
          alt={troffer.title}
          style={{ width: '300px', height: '300px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
        />
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

export default TroffersDetails;

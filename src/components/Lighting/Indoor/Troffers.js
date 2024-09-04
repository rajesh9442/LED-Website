import React, { useState } from 'react';
import Troffers1 from '../../../images/Indoor/Troffers/LEDAdjustableCCTCenterBasketTroffer2x2ft2x4ft20to60W.jpg'; // Adjust the path based on your folder structure

const troffersData = {
  'Troffers 1': {
    src: Troffers1,
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

const Troffers = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (key) => {
    setSelectedImage(selectedImage === key ? null : key); // Toggle selection
  };

  const renderSpecifications = () => {
    if (!selectedImage) return null;

    const { specs } = troffersData[selectedImage];
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
      <h1>Troffers</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        {Object.keys(troffersData).map((key) => (
          <div
            key={key}
            style={{
              margin: '0 15px',
              cursor: 'pointer',
              border: selectedImage === key ? '2px solid black' : '2px solid transparent', // Border color change on click
              padding: '5px', // Padding to fit the border around the image
              display: 'inline-block', // Ensure div only takes up as much space as needed
              transform: selectedImage === key ? 'scale(1.1)' : 'scale(1)', // Scale effect on selection
            }}
            onClick={() => handleImageClick(key)}
          >
            <img
              src={troffersData[key].src}
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
};

export default Troffers;

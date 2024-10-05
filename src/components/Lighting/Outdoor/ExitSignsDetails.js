import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import signImage1 from '../../../images/Outdoor/ExitSigns/1.jpg';
import signImage2 from '../../../images/Outdoor/ExitSigns/2.jpg';
import signImage3 from '../../../images/Outdoor/ExitSigns/3.jpg';
import additionalImage1 from '../../../images/Outdoor/ExitSigns/11.jpg';
import additionalImage2 from '../../../images/Outdoor/ExitSigns/12.jpg';

const imageData = {
  'sign1': {
    title: 'LED Exit & Emergency Combo Sign 5W',
    images: [signImage1, additionalImage1],
    specs: {
      SIZE: '11.7” L x 12” W x 3.8” H',
      WATTS: '5W',
      LUMEN: '300lm',
      VOLTAGE: 'AC120-277V (60Hz)',
      DIMMABLE: 'No',
      IP_RATE: 'IP20',
      MATERIALS: 'Thermoplastic ABS',
      HOUSING_COLOR: 'White',
      LIFESPAN: '50,000 hours',
      BACKUP_TIME: '≥90 minutes',
      MOUNTING: 'Wall, Ceiling',
      SIDES: 'Single Sided',
      DESCRIPTION: 'This Exit and Emergency Combo Sign is designed to show an exit during a crisis.',
    },
  },
  'sign2': {
    title: 'LED Indoor Slim Exit Combo',
    images: [signImage2,additionalImage1],
    specs: {
      SIZE: '16.9” L x 7.5” H x 1.8” D',
      WATTS: '5W',
      LUMEN: '500lm',
      CCT: '6000K',
      VOLTAGE: 'AC120-277V',
      DIMMABLE: 'No',
      CRI: '80',
      IP_RATE: 'IP65',
      MATERIALS: 'Thermoplastic ABS',
      HOUSING_COLOR: 'White',
      LIFESPAN: '50,000 hours',
      MOUNTING: 'Wall',
      DESCRIPTION: 'This LED Emergency Light is safe for outdoor use.',
    },
  },
  'sign3': {
    title: 'LED Indoor Emergency Light - 2.4W',
    images: [signImage3, additionalImage2],
    specs: {
      SIZE: '13.7” L x 4.3” W x 3.5” D',
      WATTS: '2.4W',
      LUMEN: '240lm',
      CCT: '6500K',
      VOLTAGE: 'AC120-277V (60Hz)',
      DIMMABLE: 'No',
      IP_RATE: 'IP20',
      MATERIALS: 'Thermoplastic ABS',
      HOUSING_COLOR: 'White',
      LIFESPAN: '25,000 hours',
      BACKUP_TIME: '≥90 minutes',
      MOUNTING: 'Wall, Ceiling',
      DESCRIPTION: 'LED Emergency Lights are intended only for indoor use.',
    },
  },
};

const ExitSignsDetails = () => {
  const { id } = useParams();
  
  const sign = imageData[id]; // Get the data for the selected sign
  const [selectedImage, setSelectedImage] = useState(sign ? sign.images[0] : null);

  console.log('ID from URL:', id);  // Debugging log
  console.log('Sign object:', sign);  // Debugging log

  if (!sign) {
    return <div>Invalid sign selection.</div>;
  }

  const renderSpecifications = () => {
    const { specs } = sign;
    return (
      <div style={{ marginTop: '20px', textAlign: 'left', width: '50%', margin: 'auto' }}>
        <h2>Specifications</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {Object.entries(specs).map(([key, value]) => (
              <tr key={key}>
                <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold' }}>{key}</td>
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
      <h1>{sign.title}</h1>

      {/* Main Image Display */}
      <div style={{ marginBottom: '20px' }}>
        <img
          src={selectedImage}
          alt={sign.title}
          style={{ width: '300px', height: '300px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
        />
      </div>

      {/* Thumbnail Images */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        {sign.images.map((image, index) => (
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

      {renderSpecifications()}
    </div>
  );
};

export default ExitSignsDetails;
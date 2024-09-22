import React from 'react';
import { useParams } from 'react-router-dom';
import signImage1 from '../../images/Signs/1.jpg'; // Adjust the path based on your folder structure
import signImage2 from '../../images/Signs/2.jpg';
import signImage3 from '../../images/Signs/3.jpg';

const imageData = {
  'sign1': {
    src: signImage1,
    title: 'LED Exit & Emergency Combo Sign 5W',
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
      DESCRIPTION: 'This Exit and Emergency Combo Sign is designed to show an exit during a crisis. It has two adjustable flood light arms to add more illumination during a power outage. Once power has stopped this sign will remain on for a minimum of 90 minutes.',
    },
  },
  'sign2': {
    src: signImage2,
    title: 'LED Indoor Slim Exit Combo',
    specs: {
      SIZE: '16.9” L x 7.5” H x 1.8” D',
      WATTS: '5W',
      LUMEN: '500lm',
      CCT: '6000K',
      VOLTAGE: 'AC120-277V',
      DIMMABLE: 'No',
      CRI: '80',
      PF: '1',
      IP_RATE: 'IP65',
      MATERIALS: 'Thermoplastic ABS',
      HOUSING_COLOR: 'White',
      LIFESPAN: '50,000 hours',
      MOUNTING: 'Wall',
      DESCRIPTION: 'This LED Emergency Light is safe for outdoor use. It has a plastic cover that protects it from rain and snow. These lights are widely used in offices, hotels, and other businesses.',
    },
  },
  'sign3': {
    src: signImage3,
    title: 'LED Indoor Emergency Light - 2.4W',
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
      DESCRIPTION: 'LED Emergency Lights are intended only for indoor use. These lights are widely used in offices, hotels, and other businesses.',
    },
  },
  // Add more signs as needed
};

const SignsDetails = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const sign = imageData[id]; // Get the data for the selected sign

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
      <img
        src={sign.src}
        alt={sign.title}
        style={{ width: '300px', height: '300px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
      />
      {renderSpecifications()}
    </div>
  );
};

export default SignsDetails;

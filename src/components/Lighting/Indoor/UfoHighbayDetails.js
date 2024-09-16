// src/components/Lighting/Indoor/UfoHighbayDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import UFOHighbayLight150W from '../../../images/Indoor/UfoHighbay/UFOHighbayLight150W.jpg';
import UFOHighbayLight240W from '../../../images/Indoor/UfoHighbay/UFOHighbayLight240W.jpg';

const ufoHighbayData = {
  'ufo-highbay-150w': {
    title: 'UFO Highbay Light 150W',
    src: UFOHighbayLight150W,
    specs: {
      SIZE: '12.6″ W x 7.4″ D',
      LUMENS: '21,750lm',
      CCT: '3500K – 5700K',
      VOLTAGE: '120-277 Vac',
      DIMMABLE: '1-10V',
      'BEAM ANGLE': '90°',
      CRI: '>80',
      'IP RATE': 'IP65',
      MATERIALS: 'Aluminum, PC',
      OPTIONAL: 'Motion Sensor, Surge Protector',
      LIFESPAN: '50,000 hours',
      DESCRIPTION: 'LED High Bays are built from strong materials that are safe for use in extreme temperatures. They can be equipped with motion sensors. LED High Bays are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. These lights are widely used in the lighting of warehouses, gas stations, exhibition halls, and gymnasiums.',
    },
  },
  'ufo-highbay-240w': {
    title: 'UFO Highbay Light 240W',
    src: UFOHighbayLight240W,
    specs: {
      SIZE: '15″ W x 8″ D',
      LUMENS: '34,800lm',
      CCT: '3500K – 5700K',
      VOLTAGE: '120-277 Vac',
      DIMMABLE: '1-10V',
      'BEAM ANGLE': '90°',
      CRI: '>80',
      'IP RATE': 'IP65',
      MATERIALS: 'Aluminum, PC',
      OPTIONAL: 'Motion Sensor, Surge Protector',
      LIFESPAN: '50,000 hours',
      DESCRIPTION: 'LED High Bays are built from strong materials that are safe for use in extreme temperatures. They can be equipped with motion sensors. LED High Bays are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. These lights are widely used in the lighting of warehouses, gas stations, exhibition halls, and gymnasiums.',
    },
  },
};

const UfoHighbayDetails = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const highbay = ufoHighbayData[id]; // Get the data for the selected highbay

  if (!highbay) {
    return <div>Invalid Highbay selection.</div>;
  }

  const renderSpecifications = () => {
    const { specs } = highbay;
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
      <h1>{highbay.title}</h1> {/* Title of the page */}
      <img
        src={highbay.src}
        alt={highbay.title}
        style={{ width: '300px', height: '300px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
      />
      {renderSpecifications()}
    </div>
  );
};

export default UfoHighbayDetails;

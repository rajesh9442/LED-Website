import React, { useState } from 'react';
import LEDIntegratedTubeLight from '../../../images/Indoor/IntegratedTubeLight/LEDIntegratedTubeLight2-8ft,10-72W.jpg';

const specifications = {
  SIZE: '2ft: 1.4″ Ø x 2′ L<br />3ft: 1.4″ Ø x 3′ L<br />4ft: 1.4″ Ø x 4′ L<br />8ft: 1.4″ Ø x 8′ L',
  '10W': '1,200lm (2ft)',
  '14W': '1,680lm (3ft)',
  '22W': '2,640lm (4ft)',
  '60W': '7,200lm (8ft)',
  '72W': '8,640lm (8ft)',
  Cover: 'Clear, Stripe, Frosted, V-Shape',
  CCT: '4000K, 5000K, 6500K',
  VOLTAGE: 'AC90-277V',
  BEAM_ANGLE: '120°',
  CRI: '80',
  PF: '0.9',
  IP_RATE: 'IP20',
  LIFESPAN: '50,000 hours',
  DESCRIPTION: 'LED Integrated Tube Lights are commonly used to replace fluorescent light bulbs, and can provide an energy savings of up to 60%. LED Integrated Tubes are perfect for offices, schools, and parking garages.',
};

const IntegratedTubeLight = () => {
  const [showSpecs, setShowSpecs] = useState(false);

  const handleImageClick = () => {
    setShowSpecs(!showSpecs); // Toggle specifications visibility
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Integrated Tube Light</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <div style={{ margin: '0 15px', cursor: 'pointer' }} onClick={handleImageClick}>
          <img 
            src={LEDIntegratedTubeLight} 
            alt="LED Integrated Tube Light" 
            style={{ width: '250px', height: '250px', objectFit: 'cover', border: showSpecs ? '2px solid black' : 'none' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            LED Integrated Tube Light 2-8ft, 10-72W
          </p>
        </div>
      </div>
      {showSpecs && (
        <div style={{ marginTop: '20px', textAlign: 'left', width: '50%', margin: 'auto' }}>
          <h2>Specifications</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {Object.entries(specifications).map(([key, value]) => (
                <tr key={key}>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{key}</td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }} dangerouslySetInnerHTML={{ __html: value }}></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default IntegratedTubeLight;

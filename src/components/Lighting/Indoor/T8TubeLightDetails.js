// src/components/Lighting/Indoor/T8TubeLightDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import T8TubeLight1 from '../../../images/Indoor/T8TubeLight/LEDT8TubeLight2ft-4ft10-22W.jpg';
import T8TubeLight2 from '../../../images/Indoor/T8TubeLight/LEDT8TubeLiightSinglePin8ft50W.jpg';

const t8TubeLightData = {
  light1: {
    title: 'LED T8 Tube Light Single Pin 8ft 50W',
    src: T8TubeLight1,
    specs: {
      SIZE: '8ft: 1.4″ * Ø * 8 ‘L',
      WATT: '50W',
      LUMENS: '5500',
      CCT: '4000K, 5000K, 6000K',
      COVER: 'Clear, Stripe, Frosted',
      VOLTAGE: 'AC90 – 277V',
      CRI: '80',
      IP_RATE: 'IP20',
      LIFESPAN: '50,000 HRS',
      DESCRIPTION: 'LED T8 Tube Lights are commonly used to replace fluorescent light bulbs, and can provide an energy savings of up to 60%. LED T8 Tubes are perfect for offices, schools, and parking garages.'
    },
  },
  light2: {
    title: 'LED T8 Tube Light 2ft – 4ft 10 – 22W',
    src: T8TubeLight2,
    specs: {
      SIZE: '2ft: 1.4″ Ø x 2′ L\n3ft: 1.4″ Ø x 3′ L\n4ft: 1.4″ Ø x 4′ L',
      '10W': '1,200lm (2ft)',
      '14W': '1,680lm (3ft)',
      '22W': '2,420lm (4ft)',
      CCT: '3000K, 4000K, 5000K, 6500K',
      VOLTAGE: 'AC90-277V',
      BEAM_ANGLE: '120°',
      INSTALLATION_TYPE: 'TYPE B (BALLAST BYPASS)',
      CRI: '80',
      PF: '0.9',
      IP_RATE: 'IP20',
      LIFESPAN: '50,000 hours',
      DESCRIPTION: 'LED T8 Tube Lights are commonly used to replace fluorescent light bulbs, and can provide an energy savings of up to 60%. LED T8 Tubes are perfect for offices, schools, and parking garages.'
    },
  },
};

const T8TubeLightDetails = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const light = t8TubeLightData[id]; // Get the data for the selected light

  if (!light) {
    return <div>Invalid T8 Tube Light selection.</div>;
  }

  const renderSpecifications = () => {
    const { specs } = light;
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
      <h1>{light.title}</h1> {/* Title of the page */}
      <img
        src={light.src}
        alt={light.title}
        style={{ width: '300px', height: '300px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
      />
      {renderSpecifications()}
    </div>
  );
};

export default T8TubeLightDetails;

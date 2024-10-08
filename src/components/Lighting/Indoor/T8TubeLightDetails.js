import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import T8TubeLight1 from '../../../images/Indoor/T8TubeLight/1.jpg';
import T8TubeLight2 from '../../../images/Indoor/T8TubeLight/LEDT8TubeLiightSinglePin8ft50W.jpg';
import AdditionalT8TubeLight1 from '../../../images/Indoor/T8TubeLight/11.jpg'; // Example additional image
import AdditionalT8TubeLight2 from '../../../images/Indoor/T8TubeLight/2.jpg';
import AdditionalT8TubeLight3 from '../../../images/Indoor/T8TubeLight/3.jpg';

const t8TubeLightData = {
  light1: {
    title: 'LED T8 Tube Light Single Pin 8ft 50W',
    images: [T8TubeLight1, AdditionalT8TubeLight2,AdditionalT8TubeLight3,AdditionalT8TubeLight1], // Multiple images
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
      DESCRIPTION: 'LED T8 Tube Lights are commonly used to replace fluorescent light bulbs, and can provide an energy savings of up to 60%. LED T8 Tubes are perfect for offices, schools, and parking garages.',
    },
  },
  light2: {
    title: 'LED T8 Tube Light 2ft – 4ft 10 – 22W',
    images: [T8TubeLight2, AdditionalT8TubeLight1], // Multiple images
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
      DESCRIPTION: 'LED T8 Tube Lights are commonly used to replace fluorescent light bulbs, and can provide an energy savings of up to 60%. LED T8 Tubes are perfect for offices, schools, and parking garages.',
    },
  },
};

const T8TubeLightDetails = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const light = t8TubeLightData[id]; // Get the data for the selected light
  const [selectedImage, setSelectedImage] = useState(light ? light.images[0] : null); // Default to the first image

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

      {/* Main Image Display */}
      <div style={{ marginBottom: '20px' }}>
        <img
          src={selectedImage}
          alt={light.title}
          style={{ width: '300px', height: '300px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
        />
      </div>

      {/* Thumbnail Images */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {light.images.map((image, index) => (
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

export default T8TubeLightDetails;

// src/components/Lighting/Indoor/GimbalLightDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import LEDGimbalLight1 from '../../../images/Indoor/GimbalLight/1.jpg';
import LEDGimbalLight2 from '../../../images/Indoor/GimbalLight/2.jpg';
import LEDGimbalLight3 from '../../../images/Indoor/GimbalLight/3.jpg';
import LEDGimbalLight4 from '../../../images/Indoor/GimbalLight/4.jpg';
import LEDGimbalLight5 from '../../../images/Indoor/GimbalLight/5.jpg';
import LEDGimbalLight6 from '../../../images/Indoor/GimbalLight/6.jpg';
import LEDGimbalLight7 from '../../../images/Indoor/GimbalLight/7.jpg';

const imageData = {
  'gimbal-light-1': {
    src: LEDGimbalLight1,
    description: '5CCT 6” 12W Panel Light',
    specs: {
      'Cut-Out Size': '6 inch',
      'Wattage': '12 watts',
      'Input Voltage': 'AC120V, 60Hz',
      'Beam Angle': '120°',
      'Light Source': 'SMD LED',
      'Color Temperature': '27K-30K-35K-40K-50K',
      'CRI': '80Ra',
      'Lumens Output': '950±5%lm',
      'Lumen Efficiency': '80~90lm/w',
      'Halogen Equiv.': '95 watts',
      'Dimmable': 'Yes, 100%-5%',
      'Dimming Tech.': 'Triac Dimming',
      'Certification': 'ETL, cETL, Energy Star',
      'Power Factor': '>0.95',
      'Projected Life': '50,000hrs at 70% Light Output',
      'Warranty': '3 years',
      'Approved Location': 'Insulated Ceiling & Damp Locations',
      'IC Rated': 'Yes',
      'Air Tight': 'Yes',
    }
  },
  'gimbal-light-2': {
    src: LEDGimbalLight2,
    description: '5CCT 4” 9W Panel Light',
    specs: {
      'Cut-Out Size': '4 inch',
      'Wattage': '12 watts',
      'Input Voltage': 'AC120V, 60Hz',
      'Beam Angle': '120°',
      'Light Source': 'SMD LED',
      'Color Temperature': '27K-30K-35K-40K-50K',
      'CRI': '80Ra',
      'Lumens Output': '700±5%',
      'Lumen Efficiency': '80lm/w',
      'Halogen Equiv.': '65 watts',
      'Dimmable': '10%-100% (110V only)',
      'Dimming Tech.': 'Triac Dimming',
      'Certification': 'cETLus, Energy Star',
      'Power Factor': '>0.9',
      'Projected Life': '50,000hrs at 70% Light Output',
      'Warranty': '3 years',
      'Approved Location': 'Damp Locations',
      'IC Rated': 'Yes',
      'Air Tight': 'Yes',
    }
  },
  'gimbal-light-3': {
    src: LEDGimbalLight3,
    description: '5CCT 3” 8W Gimbal Light',
    specs: {
      'Cut-Out Size': '3 inch',
      'Wattage': '8 watts',
      'Input Voltage': 'AC120V, 60Hz',
      'Beam Angle': '38°',
      'Light Source': 'COB LED (LM80 Rated)',
      'Color Temperature': '27K-30K-35K-40K-50K',
      'CRI': '80Ra',
      'Lumens Output': '700lm±5%',
      'Lumen Efficiency': '85~90lm/w',
      'Halogen Equiv.': '65 watts',
      'Dimmable': '10%-100% (110V only)',
      'Dimming Tech.': 'Triac Dimming',
      'Certification': 'cETLus',
      'Power Factor': '>0.9',
      'Projected Life': '50,000hrs at 70% Light Output',
      'Warranty': '3 years',
      'Approved Location': 'Damp Locations',
      'IC Rated': 'Yes',
      'Air Tight': 'Yes',
    }
  },
  'gimbal-light-4': {
    src: LEDGimbalLight4,
    description: '5CCT 4” 12W Gimbal Light',
    specs: {
      'Cut-Out Size': '4 inch',
      'Wattage': '12 watts',
      'Input Voltage': 'AC110V/120V, 60Hz',
      'Beam Angle': '38°',
      'Light Source': 'COB LED (LM80 Rated)',
      'Color Temperature': '27K-30K-35K-40K-50K',
      'CRI': '83Ra',
      'Lumens Output': '1000lm~',
      'Lumen Efficiency': '85~90lm/w',
      'Halogen Equiv.': '100 watts',
      'Dimmable': '10%-100% (110V only)',
      'Dimming Tech.': 'Triac Dimming',
      'Certification': 'ETL, cETL',
      'Power Factor': '>0.95',
      'Projected Life': '50,000hrs at 70% Light Output',
      'Warranty': '3 years',
      'Approved Location': 'Damp Locations',
      'IC Rated': 'Yes',
      'Air Tight': 'Yes',
    }
  },
  'gimbal-light-5': {
    src: LEDGimbalLight5,
    description: '5CCT 4” 9W Slim Gimbal Light',
    specs: {
      'Cut-Out Size': '4 inch',
      'Wattage': '9 watts',
      'Input Voltage': 'AC120V, 60Hz',
      'Beam Angle': '45°',
      'Light Source': 'SMD2835',
      'Color Temperature': '27K 30K 40K 50K 60K',
      'CRI': '80Ra',
      'Lumens Output': '670~805lm',
      'Lumen Efficiency': '88lm/W',
      'Halogen Equiv.': '75 watts',
      'Dimmable': 'Yes, 100%-5%',
      'Dimming Tech.': 'Triac Dimming',
      'Certification': 'cETLus',
      'Power Factor': '>0.9',
      'Projected Life': '50,000hrs at 70% Light Output',
      'Warranty': '3 years',
      'Approved Location': 'Insulated Ceiling & Damp Locations',
      'IC Rated': 'Yes',
      'Air Tight': 'Yes',
    }
  },
  'gimbal-light-6': {
    src: LEDGimbalLight6,
    description: '5CCT 4” 9W Multi-Directional Light',
    specs: {
      'Cut-Out Size': '4 inch',
      'Wattage': '9 watts',
      'Input Voltage': 'AC120V, 60Hz',
      'Beam Angle': '45°',
      'Light Source': 'COB',
      'Color Temperature': '3CCT /5CCT 27K/30K/35K/40K/50K',
      'CRI': '80Ra',
      'Lumens Output': '750~800lm',
      'Lumen Efficiency': '95lm/W',
      'Halogen Equiv.': '65 watts',
      'Dimmable': 'Yes, 100%-5%',
      'Dimming Tech.': 'Triac Dimming',
      'Certification': 'cETLus',
      'Power Factor': '>0.9',
      'Projected Life': '25,000hrs at 70% Light Output',
      'Warranty': '3 years',
      'Approved Location': 'Insulated Ceiling & Damp Locations',
      'IC Rated': 'Yes',
      'Air Tight': 'Yes',
    }
  },
  'gimbal-light-7': {
    src: LEDGimbalLight7,
    description: 'RGB 6Inch12W Panel Light',
    specs: {
      'Cut-Out Size': '6 inch',
      'Wattage': '12 watts',
      'Input Voltage': 'AC120V, 60Hz',
      'Beam Angle': '120°',
      'Light Source': 'SMD LED',
      'Color Temperature': 'RGB W2700K-6000K',
      'CRI': '80Ra',
      'Lumens Output': '900±5%',
      'Lumen Efficiency': '75lm/w',
      'Halogen Equiv.': '95 watts',
      'Dimmable': '100%-5% (110V only)',
      'Dimming Tech.': 'WIFI BLE',
      'Certification': 'cETLus, Energy Star',
      'Power Factor': '>0.9',
      'Projected Life': '50,000hrs at 70% Light Output',
      'Warranty': '3 years',
      'Approved Location': 'Damp Locations',
      'IC Rated': 'Yes',
      'Air Tight': 'Yes',
    }
  }
};

const GimbalLightDetails = () => {
  const { id } = useParams();
  const lightData = imageData[id];

  if (!lightData) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Light Not Found</h1>
        <p style={{ fontSize: '18px', color: '#666' }}>Sorry, we couldn't find the light you're looking for.</p>
      </div>
    );
  }

  const { src, description, specs } = lightData;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{description}</h1>
      <img
        src={src}
        alt={description}
        style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
      />
      <div style={{ marginTop: '20px', textAlign: 'left', maxWidth: '800px', margin: '20px auto' }}>
        <h2>Specifications</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {Object.entries(specs).map(([key, value]) => (
              <tr key={key}>
                <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold' }}>{key}</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GimbalLightDetails;
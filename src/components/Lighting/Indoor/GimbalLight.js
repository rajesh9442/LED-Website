import React, { useState } from 'react';
import LEDGimbalLight1 from '../../../images/Indoor/GimbalLight/1.jpg';
import LEDGimbalLight2 from '../../../images/Indoor/GimbalLight/2.jpg';
import LEDGimbalLight3 from '../../../images/Indoor/GimbalLight/3.jpg';
import LEDGimbalLight4 from '../../../images/Indoor/GimbalLight/4.jpg';
import LEDGimbalLight5 from '../../../images/Indoor/GimbalLight/5.jpg';
import LEDGimbalLight6 from '../../../images/Indoor/GimbalLight/6.jpg';
import LEDGimbalLight7 from '../../../images/Indoor/GimbalLight/7.jpg';

const imageData = {
  '5CCT 6” 12W Panel Light': {
    src: LEDGimbalLight1,
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
  '5CCT 4” 9W Panel Light': {
    src: LEDGimbalLight2,
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
  '5CCT 3” 8W Gimbal Light': {
    src: LEDGimbalLight3,
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
  '5CCT 4” 12W Gimbal Light': {
    src: LEDGimbalLight4,
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
  '5CCT 4” 9W Slim Gimbal Light': {
    src: LEDGimbalLight5,
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
  '5CCT 4” 9W Multi-Directional Light': {
    src: LEDGimbalLight6,
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
  'RGB 6Inch12W Panel Light': {
    src: LEDGimbalLight7,
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

const GimbalLight = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (key) => {
    setSelectedImage(selectedImage === key ? null : key); // Toggle selection
  };

  const renderSpecifications = () => {
    if (!selectedImage) return null;

    const { specs } = imageData[selectedImage];
    return (
      <div style={{ marginTop: '20px', textAlign: 'left', width: '50%', margin: 'auto' }}>
        <h2>Specifications</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {Object.entries(specs).map(([key, value]) => (
              <tr key={key}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{key}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Gimbal Light Options</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {Object.keys(imageData).map((key) => (
          <div
            key={key}
            style={{
              margin: '10px',
              cursor: 'pointer',
              border: selectedImage === key ? '2px solid black' : '2px solid transparent',
              padding: '5px'
            }}
            onClick={() => handleImageClick(key)}
          >
            <img
              src={imageData[key].src}
              alt={key}
              style={{ width: '200px', height: 'auto' }}
            />
            <p>{key}</p>
          </div>
        ))}
      </div>
      {renderSpecifications()}
    </div>
  );
};

export default GimbalLight;

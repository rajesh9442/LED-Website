import React from 'react';
import { useParams } from 'react-router-dom';
import cctvImage1 from '../../images/CCTV/1.png'; // Adjust the path based on your folder structure
import cctvImage2 from '../../images/CCTV/2.png';

const imageData = {
  'cctv1': {
    src: cctvImage1,
    title: 'EC-B4F28M-V3',
    features: [
      'High quality image with 4MP, 1/2.9″CMOS sensor',
      '4MP (2560*1440)@20fps; 3MP (2304*1296)@30/25fps; 2MP (1920*1080)@30/25fps; 720P (1280*720)@30/25fps',
      'Ultra 265, H.265, H.264, MJPEG',
      'Smart IR, up to 30m (98ft) IR distance',
      'Support 128 G Micro SD card',
      'Support PoE power supply',
      '3-Axis',
    ],
  },
  'cctv2': {
    src: cctvImage2,
    title: 'EC-T8F28M',
    features: [
      'High quality image with 8MP, 1/2.7″CMOS sensor',
      '8MP (3840*2160)@15fps; 5MP (2880*1620)@25/20fps; 4MP (2560*1440)@25/20fps; 3MP (2304*1296)@30/25fps; 2MP (1920*1080)@30/25fps',
      'H.265, H.264, MJPEG',
      'Built-in Mic',
      'Smart IR, up to 30m (98ft) IR distance',
      'Supports 256 G Micro SD card',
      'IP67 protection',
      'Support PoE power supply',
      '3-Axis',
    ],
  },
};

const CCTVDetails = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const cctv = imageData[id]; // Get the data for the selected CCTV

  if (!cctv) {
    return <div>Invalid CCTV selection.</div>;
  }

  const renderFeatures = () => {
    const { features } = cctv;
    return (
      <div style={{ marginTop: '20px', textAlign: 'left', width: '50%', margin: 'auto' }}>
        <h2>Features</h2>
        <ul>
          {features.map((feature, index) => (
            <li key={index} style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{cctv.title}</h1>
      <img
        src={cctv.src}
        alt={cctv.title}
        style={{ width: '300px', height: '300px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
      />
      {renderFeatures()}
    </div>
  );
};

export default CCTVDetails;

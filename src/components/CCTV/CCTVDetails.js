import React from 'react';
import { useParams } from 'react-router-dom';
import cctvImage1 from '../../images/CCTV/1.png';
import cctvImage2 from '../../images/CCTV/2.png';
import cctvImage3 from '../../images/CCTV/3.png';
import cctvImage4 from '../../images/CCTV/4.png';

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
  'cctv3': {
    src: cctvImage3,
    title: 'LTK3411MF',
    features: [
      '4.3-inch touch screen2 MP wide-angle dual-lens',
      'Face anti-spoofing',
      'Face recognition distance: 1ft(0.3 m) to 5ft(1.5 m)',
      'Deep learning algorithm',
      '1500 face capacity, 1,500 card capacity, capacity (should be supported by device model) and 150,000 event capacity',
      'Face recognition duration ＜ 0.2 s/User; face recognition accuracy rate ≥ 99%',
      'Capture linkage and captured pictures storage',
      'Transmits card and user data from or to the client software via TCP/IP protocol and saves the data on the client software',
      'Imports pictures from the USB flash drive to the device or export pictures, events, from the device to the USB flash drive',
      'Stand-alone operation',
    ],
  },
  'cctv4': {
    src: cctvImage4,
    title: 'IPC6424SR-X25-VF-B',
    features: [
      'High quality image with 4MP,1/2.8’’ CMOS sensor',
      '2688*1520@30fps in the main stream',
      'Ultra 265, H.265, H.264, MJPEG',
      '25X Optical Zoom',
      'Smart intrusion prevention, support false alarm filtering, include Cross Line, Intrusion, Enter Area, Leave Area detection',
      'Face capture, automatic selection of best snapshots, support face detection masked area',
      'People Counting, support people flow counting and crowd density monitoring, suitable for different statistical scenarios',
      'Lighthunter technology ensures ultra-high image quality in low illumination environment',
      'Smart IR, up to 100m (328ft) IR distance',
      'DC 12V±25% or PoE+ (IEEE 802.3at)',
    ],
  },
};

const CCTVDetails = () => {
  const { id } = useParams();
  const cctv = imageData[id];

  if (!cctv) {
    return <div>Invalid CCTV selection.</div>;
  }

  const renderFeatures = () => {
    const { features } = cctv;
    return (
      <div style={{ 
        marginTop: '20px', 
        width: '50%', 
        margin: 'auto',
        textAlign: 'left',
        '@media (max-width: 768px)': {
          width: '90%',
          textAlign: 'left',
        } 
      }}>
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
    <div style={{
      padding: '20px',
      textAlign: 'center',
      '@media (max-width: 768px)': {
        textAlign: 'left',
        padding: '10px'
      }
    }}>
      <h1>{cctv.title}</h1>
      <img
        src={cctv.src}
        alt={cctv.title}
        style={{
          width: '300px',
          height: '300px',
          objectFit: 'cover',
          display: 'block',
          margin: '20px auto',
          '@media (max-width: 768px)': {
            margin: '20px 0'
          }
        }}
      />
      {renderFeatures()}
    </div>
  );
};

export default CCTVDetails;

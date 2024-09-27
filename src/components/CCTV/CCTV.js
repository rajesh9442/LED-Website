import React from 'react';
import { useNavigate } from 'react-router-dom';
import cctvImage1 from '../../images/CCTV/1.png'; // Adjust the path based on your folder structure
import cctvImage2 from '../../images/CCTV/2.png';
import cctvImage3 from '../../images/CCTV/3.png';
import cctvImage4 from '../../images/CCTV/4.png';
import cctvBannerImage from '../../images/CCTV/cctvbanner.png';
// import cctvBannerImage2 from '../../images/CCTV/2.webp';

const imageData = {
  'EC-B4F28M-V3': {
    src: cctvImage1,
    title: 'EC-B4F28M-V3',
    path: 'cctv1', // Match this path with the key in CCTVDetails
  },
  'EC-T8F28M': {
    src: cctvImage2,
    title: 'EC-T8F28M',
    path: 'cctv2',
  },
  'LTK3411MF':{
    src: cctvImage3,
    title: 'LTK3411MF',
    path: 'cctv3',
  },
  'IPC6424SR-X25-VF-B':{
    src: cctvImage4,
    title: 'IPC6424SR-X25-VF-B',
    path: 'cctv4',
  },
};

const CCTV = () => {
  const navigate = useNavigate();

  const handleImageClick = (key) => {
    navigate(`/cctv/details/${imageData[key].path}`);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/* Top Image */}
      <img 
        src={cctvBannerImage} 
        alt="CCTV Banner" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />

      {/* <img 
        src={cctvBannerImage2} 
        alt="CCTV Banner" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      /> */}
      
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          marginTop: '10px', 
          flexWrap: 'wrap' 
        }}>
        {Object.keys(imageData).map((key) => (
          <div
            key={key}
            style={{
              margin: '0 15px',
              cursor: 'pointer',
              border: '2px solid transparent',
              padding: '5px',
              display: 'inline-block',
              transition: 'transform 0.2s, border-color 0.2s',
              textAlign: 'center',
            }}
            onClick={() => handleImageClick(key)}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'black';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img
              src={imageData[key].src}
              alt={imageData[key].title}
              style={{ width: '250px', height: '250px', objectFit: 'cover', display: 'block' }}
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
              {imageData[key].title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CCTV;

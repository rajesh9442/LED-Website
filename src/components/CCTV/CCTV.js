import React from 'react';
import { useNavigate } from 'react-router-dom';
import cctvImage1 from '../../images/CCTV/1.png';
import cctvImage2 from '../../images/CCTV/2.png';
import cctvImage3 from '../../images/CCTV/3.png';
import cctvImage4 from '../../images/CCTV/4.png';
import cctvBannerImage from '../../images/CCTV/cctvbanner.png';

const imageData = {
  'EC-B4F28M-V3': { src: cctvImage1, title: 'EC-B4F28M-V3', path: 'cctv1' },
  'EC-T8F28M': { src: cctvImage2, title: 'EC-T8F28M', path: 'cctv2' },
  'LTK3411MF': { src: cctvImage3, title: 'LTK3411MF', path: 'cctv3' },
  'IPC6424SR-X25-VF-B': { src: cctvImage4, title: 'IPC6424SR-X25-VF-B', path: 'cctv4' },
};

const CCTV = () => {
  const navigate = useNavigate();

  const handleImageClick = (key) => {
    navigate(`/cctv/details/${imageData[key].path}`);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {/* Top Banner Image */}
      <img 
        src={cctvBannerImage} 
        alt="CCTV Banner" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />

      {/* Image Grid */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          marginTop: '10px', 
          flexWrap: 'wrap',
          gap: '15px', // Use gap for spacing in responsive layout
        }}
      >
        {Object.keys(imageData).map((key) => (
          <div
            key={key}
            style={{
              width: '250px', // Adjust initial width
              maxWidth: '100%',
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
              style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }}
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
              {imageData[key].title}
            </p>
          </div>
        ))}
      </div>

      {/* Responsive styling */}
      <style>
        {`
          @media (max-width: 768px) {
            .cctv-image-container {
              width: 90%; /* Make images take up more width on smaller screens */
              margin-bottom: 20px; /* Add space between images */
            }
            .cctv-banner-image {
              margin-bottom: 10px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CCTV;

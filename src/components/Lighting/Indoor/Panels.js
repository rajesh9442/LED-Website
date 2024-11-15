import React from 'react';
import { useNavigate } from 'react-router-dom';
import Panel1 from '../../../images/Indoor/Panels/1.jpg';
import Panel2 from '../../../images/Indoor/Panels/2.jpg';
import Panel3 from '../../../images/Indoor/Panels/3.jpeg';
import Panel4 from '../../../images/Indoor/Panels/4.jpeg';
import Panel5 from '../../../images/Indoor/Panels/5.jpg';
import Panel6 from '../../../images/Indoor/Panels/6.jpg';
import Panel7 from '../../../images/Indoor/Panels/7.jpg';

const panelData = {
  'panel1': {
    name: '2×4 FT LED Light Flat Panel, 30/40/50/72W, Color Temperature Selectable 3K | 3.5K | 4K | 5K | 6.5K, Dimmable Recessed Drop Ceiling Lights',
    src: Panel1,
  },
  'panel2': {
    name: '2x2FT LED Flat Panel Light, 40W 5000K Recessed Back-Lit Drop Ceiling Light',
    src: Panel2,
  },
  'panel6': {
    name: 'LED Adjustable CCT T-Bar Light 2x4ft 40/50/60W',
    src: Panel6,
  },
};

const Panels = () => {
  const navigate = useNavigate();

  const handlePanelClick = (key) => {
    navigate(`/panels/${encodeURIComponent(key)}`);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Panels</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '15px',
          marginTop: '10px',
        }}
      >
        {Object.keys(panelData).map((key) => (
          <div
            key={key}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: '5px',
              border: '2px solid transparent',
              transform: 'scale(1)',
              transition: 'transform 0.3s, border-color 0.3s',
            }}
            onClick={() => handlePanelClick(key)}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'black';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img
              src={panelData[key].src}
              alt={panelData[key].name}
              style={{ width: '90%', maxWidth: '200px', height: 'auto', objectFit: 'cover', display: 'block' }}
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555', textAlign: 'center' }}>{panelData[key].name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Panels;

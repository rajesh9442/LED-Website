import React from 'react';
import { useNavigate } from 'react-router-dom';
import Panel1 from '../../../images/Indoor/Panels/1.jpeg';
import Panel2 from '../../../images/Indoor/Panels/2.jpeg';
import Panel3 from '../../../images/Indoor/Panels/3.jpeg';
import Panel4 from '../../../images/Indoor/Panels/4.jpeg';
import Panel5 from '../../../images/Indoor/Panels/5.jpg';
import Panel6 from '../../../images/Indoor/Panels/6.jpg';
import Panel7 from '../../../images/Indoor/Panels/7.jpg';

const panelData = {
  'panel1': {
    name: '2×4 FT LED Light Flat Panel, 40/50/60W, Color Temperature Selectable 3K | 4K | 5K, Dimmable Recessed Drop Ceiling Lights',
    src: Panel1,
  },
  'panel2': {
    name: '2x2FT LED Flat Panel Troffer Light, 40W 5000K Recessed Back-Lit Drop Ceiling Light',
    src: Panel2,
  },
  'panel3': {
    name: '2×4 FT LED Flat Panel, 40/50/60W, Dimmable Recessed Drop Ceiling Lights',
    src: Panel3,
  },
  'panel4': {
    name: '2×2 FT LED Light Flat Panel, 20/30/40W, Color Temperature Selectable 3K | 4K | 5K',
    src: Panel4,
  },
  'panel5': {
    name: 'LED Adjustable CCT Backlit Panel Light Adjustable 2x2ft 2x4ft 20-60W',
    src: Panel5,
  },
  'panel6': {
    name: 'LED Adjustable CCT T-Bar Light 2x2ft 20/30/40W 2x4ft 40/50/60W',
    src: Panel6,
  },
  'panel7': {
    name: 'LED Backlit Panel Light 2x2ft 40W 2x4ft 72W',
    src: Panel7,
  },
};

const Panels = () => {
  const navigate = useNavigate();

  const handlePanelClick = (key) => {
    navigate(`/panels/${encodeURIComponent(key)}`);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Panels</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '10px' }}>
        {Object.keys(panelData).map((key) => (
          <div
            key={key}
            style={{
              textAlign: 'center',
              cursor: 'pointer',
              padding: '5px',
              border: '2px solid transparent',
              transform: 'scale(1)',
              transition: 'transform 0.3s, border-color 0.3s',
            }}
            onClick={() => handlePanelClick(key)}
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
              src={panelData[key].src}
              alt={panelData[key].name}
              style={{ width: '250px', height: '250px', objectFit: 'cover', display: 'block' }}
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>{panelData[key].name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Panels;

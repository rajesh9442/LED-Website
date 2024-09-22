import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Panel1 from '../../../images/Indoor/Panels/1.jpeg';
import Panel2 from '../../../images/Indoor/Panels/2.jpeg';
import Panel3 from '../../../images/Indoor/Panels/3.jpeg';
import Panel4 from '../../../images/Indoor/Panels/4.jpeg';
import Panel5 from '../../../images/Indoor/Panels/5.jpg';
import Panel6 from '../../../images/Indoor/Panels/6.jpg';
import Panel7 from '../../../images/Indoor/Panels/7.jpg';

const panelData = {
  '2×4 FT LED Light Flat Panel, 40/50/60W, Color Temperature Selectable 3K | 4K | 5K, Dimmable Recessed Drop Ceiling Lights, 5000/6250/7500 Lumens, Lay in Fixture for Office, 120-277V, UL DLC(6 Pack)s': {
    src: Panel1,
  },
  '2x2FT LED Flat Panel Troffer Light, 40W 5000K Recessed Back-Lit Drop Ceiling Light, 5200lm Lay in Fixture for Office, 0-10V Dimmable, 3-Lamp F17T8 Fixture Replacement, ETL Listed 100-277V – DLC 6 Pack': {
    src: Panel2,
  },
  '2×4 FT LED Light Flat Panel, 40/50/60W, Color Temperature Selectable 3K | 4K | 5K, Dimmable Recessed Drop Ceiling Lights, 5000/6250/7500 Lumens, Lay in Fixture for Office, 120-277V, UL DLC(6 Pack)': {
    src: Panel3,
  },
  '2×2 FT LED Light Flat Panel, 20/30/40W, Color Temperature Selectable 3K | 4K | 5K, Dimmable Recessed Drop Ceiling Lights, 2500/3750/5000 Lumens, Lay in Fixture for Office, 120-277V, UL DLC(6 Pack)': {
    src: Panel4,
  },
  'LED Adjustable CCT Backlit Panel Light Adjustable 2x2ft 2x4ft 20-60W': {
    src: Panel5,
  },
  'LED Adjustable CCT T-Bar Light 2x2ft 20/30/40W 2x4ft 40/50/60W': {
    src: Panel6,
  },
  'LED Backlit Panel Light 2x2ft 40W 2x4ft 72W': {
    src: Panel7,
  },
};

const Panels = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handlePanelClick = (key) => {
    navigate(`/panels/${encodeURIComponent(key)}`); // Navigate to detailed view
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
              alt={key}
              style={{ width: '250px', height: '250px', objectFit: 'cover', display: 'block' }}
            />
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>{key}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Panels;

import React from 'react';
import Panel1 from '../../../images/Indoor/Panels/1.jpeg'; // Adjust the path based on your folder structure
import Panel2 from '../../../images/Indoor/Panels/2.jpeg';
import Panel3 from '../../../images/Indoor/Panels/3.jpeg';
import Panel4 from '../../../images/Indoor/Panels/4.jpeg';
import Panel5 from '../../../images/Indoor/Panels/5.jpg';
import Panel6 from '../../../images/Indoor/Panels/6.jpg';
import Panel7 from '../../../images/Indoor/Panels/7.jpg';

const Panels = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Panels</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '10px' }}>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={Panel1} 
            alt="Panel 1" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Panel 1
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={Panel2} 
            alt="Panel 2" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Panel 2
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={Panel3} 
            alt="Panel 3" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Panel 3
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={Panel4} 
            alt="Panel 4" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Panel 4
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={Panel5} 
            alt="Panel 5" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Panel 5
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={Panel6} 
            alt="Panel 6" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Panel 6
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img 
            src={Panel7} 
            alt="Panel 7" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            Panel 7
          </p>
        </div>
      </div>
    </div>
  );
}

export default Panels;

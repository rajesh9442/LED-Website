import React from 'react';
import T8TubeLight1 from '../../../images/Indoor/T8TubeLight/LEDT8TubeLight2ft-4ft10-22W.jpg'; // Adjust the path based on your folder structure
import T8TubeLight2 from '../../../images/Indoor/T8TubeLight/LEDT8TubeLiightSinglePin8ft50W.jpg';

const T8TubeLight = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>T8 Tube Light</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <div style={{ margin: '0 15px' }}>
          <img 
            src={T8TubeLight1} 
            alt="T8 Tube Light" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            T8 Tube Light 1
          </p>
        </div>
        <div style={{ margin: '0 15px' }}>
          <img 
            src={T8TubeLight2} 
            alt="54W Corn Light" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
            T8 Tube Light 2
          </p>
        </div>
      </div>
    </div>
  );
}

export default T8TubeLight;

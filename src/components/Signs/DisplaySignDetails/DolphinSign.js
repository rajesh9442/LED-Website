import React from 'react';
import DolphinImage2 from '../../../images/Signs/DisplaySign/Dolphin/2.png';
import DolphinImage3 from '../../../images/Signs/DisplaySign/Dolphin/3.png';
import DolphinImage4 from '../../../images/Signs/DisplaySign/Dolphin/4.png';
import DolphinImage5 from '../../../images/Signs/DisplaySign/Dolphin/5.png';

const DolphinSign = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      
      {/* Display Image */}
      <img 
        src={DolphinImage2} 
        alt="Dolphin LED Display Sign" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />
      <img 
        src={DolphinImage3} 
        alt="Dolphin LED Display Sign" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />
      <img 
        src={DolphinImage4} 
        alt="Dolphin LED Display Sign" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />
      <img 
        src={DolphinImage5} 
        alt="Dolphin LED Display Sign" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />
    </div>
  );
};

export default DolphinSign;

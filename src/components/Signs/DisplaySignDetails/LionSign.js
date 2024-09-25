import React from 'react';
import LionImage2 from '../../../images/Signs/DisplaySign/Lion/2.png';
import LionImage3 from '../../../images/Signs/DisplaySign/Lion/3.png';
import LionImage4 from '../../../images/Signs/DisplaySign/Lion/4.png';
import LionImage5 from '../../../images/Signs/DisplaySign/Lion/5.png';

const LionSign = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      
      {/* Display Image */}
      <img 
        src={LionImage2} 
        alt="Lion LED Display Sign" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />
      <img 
        src={LionImage3} 
        alt="Lion LED Display Sign" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />
      <img 
        src={LionImage4} 
        alt="Lion LED Display Sign" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />
      <img 
        src={LionImage5} 
        alt="Lion LED Display Sign" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />
    </div>
  );
};

export default LionSign;

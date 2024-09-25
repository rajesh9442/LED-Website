import React from 'react';
import DragonFlyImage2 from '../../../images/Signs/DisplaySign/DragonFly/2.png';
import DragonFlyImage3 from '../../../images/Signs/DisplaySign/DragonFly/3.png';
import DragonFlyImage4 from '../../../images/Signs/DisplaySign/DragonFly/4.png';
import DragonFlyImage5 from '../../../images/Signs/DisplaySign/DragonFly/5.png';

const DragonFlySign = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      
      {/* Display Image */}
      <img 
        src={DragonFlyImage2} 
        alt="DragonFly LED Display Sign" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />
      <img 
        src={DragonFlyImage3} 
        alt="DragonFly LED Display Sign" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />
      <img 
        src={DragonFlyImage4} 
        alt="DragonFly LED Display Sign" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />
      <img 
        src={DragonFlyImage5} 
        alt="DragonFly LED Display Sign" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />
    </div>
  );
};

export default DragonFlySign;

import React, { useState } from 'react';
import './CoolerLight.css';
import coolerLightImage from '../../../images/cooler-light.jpg'; // Update path if necessary

const CoolerLight = () => {
  const [showSpecs, setShowSpecs] = useState(false);

  const handleImageClick = () => {
    setShowSpecs(!showSpecs);
  };

  return (
    <div className="cooler-light-container">
      <img
        src={coolerLightImage}
        alt="Cooler Light"
        className="cooler-light-image"
        onClick={handleImageClick}
      />
      {showSpecs && (
        <div className="specifications">
          <h2>Cooler Light Specifications</h2>
          <p>Power: 15W</p>
          <p>Luminous Flux: 1200lm</p>
          <p>Color Temperature: 4000K</p>
          <p>Dimensions: 200mm x 150mm</p>
          <p>Material: Aluminum</p>
        </div>
      )}
    </div>
  );
};

export default CoolerLight;

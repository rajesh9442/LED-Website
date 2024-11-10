import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import WallPack1 from '../../../images/Outdoor/WallPacks/1.jpg'; 
import WallPack2 from '../../../images/Outdoor/WallPacks/2.jpg';
import WallPack3 from '../../../images/Outdoor/WallPacks/3.jpg';
import WallPack4 from '../../../images/Outdoor/WallPacks/4.jpg';
import WallPack5 from '../../../images/Outdoor/WallPacks/5.jpg';
import WallPack6 from '../../../images/Outdoor/WallPacks/6.jpg';
import AdditionalImage1 from '../../../images/Outdoor/WallPacks/11.jpg';
import AdditionalImage2 from '../../../images/Outdoor/WallPacks/12.jpg';
import AdditionalImage3 from '../../../images/Outdoor/WallPacks/13.jpg';
import AdditionalImage4 from '../../../images/Outdoor/WallPacks/14.jpg';
import AdditionalImage111 from '../../../images/Outdoor/WallPacks/111.jpg';
import AdditionalImage112 from '../../../images/Outdoor/WallPacks/112.jpg';
import AdditionalImage113 from '../../../images/Outdoor/WallPacks/113.jpg';
import AdditionalImage21 from '../../../images/Outdoor/WallPacks/21.jpg';
import AdditionalImage22 from '../../../images/Outdoor/WallPacks/22.jpg';
import AdditionalImage23 from '../../../images/Outdoor/WallPacks/23.jpg';
import AdditionalImage24 from '../../../images/Outdoor/WallPacks/24.jpg';
import AdditionalImage25 from '../../../images/Outdoor/WallPacks/25.jpg';
import AdditionalImage31 from '../../../images/Outdoor/WallPacks/31.jpg';
import AdditionalImage32 from '../../../images/Outdoor/WallPacks/32.jpg';
import AdditionalImage33 from '../../../images/Outdoor/WallPacks/33.jpg';

// Data for Wall Packs
const specifications = {
  // 'led-mini-wall-pack-w-photocell-30w': {
  //   title: 'LED Mini Wall Pack W/Photocell 30W',
  //   images: [WallPack1,AdditionalImage4, AdditionalImage1], // Add more images if available
  //   specs: {
  //     SIZE: '8.58”L x 5.78”W x 2.91” D',
  //     WATTS: '30W',
  //     LUMEN: '3900lm',
  //     CCT: '5700K',
  //     VOLTAGE: 'AC100-277V',
  //     DIMMABLE: 'No',
  //     BEAM_ANGLE: '110°',
  //     CRI: '>80',
  //     PF: '>0.9',
  //     IP_RATE: 'IP65',
  //     MATERIALS: 'Aluminum',
  //     HOUSING_COLOR: 'Black / Brown',
  //     LIFESPAN: '50,000 hours',
  //     DESCRIPTION: 'LED Mini Wall Packs are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. These Wall Packs are perfect for houses, boundary walls, hotels, schools, hospitals, and grocery stores.'
  //   }
  // },
  // 'led-mini-wall-pack-w-photocell-13w': {
  //   title: 'LED Mini Wall Pack W/Photocell 13W',
  //   images: [WallPack2,AdditionalImage4, AdditionalImage1], // Add more images if available
  //   specs: {
  //     SIZE: '8.15”L x 5.35”W x 2.5” D',
  //     WATTS: '13W',
  //     LUMEN: '1690lm',
  //     CCT: '5700K',
  //     VOLTAGE: 'AC100-277V',
  //     DIMMABLE: 'No',
  //     BEAM_ANGLE: '110°',
  //     CRI: '>80',
  //     PF: '>0.9',
  //     IP_RATE: 'IP65',
  //     MATERIALS: 'Aluminum',
  //     HOUSING_COLOR: 'Black / Brown',
  //     LIFESPAN: '50,000 hours',
  //     DESCRIPTION: 'LED Mini Wall Packs are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. These Wall Packs are perfect for houses, boundary walls, hotels, schools, hospitals, and grocery stores.'
  //   }
  // },
  'led-mini-wall-pack-20w': {
    title: 'LED Mini Wall Pack 13W/20W/30W',
    images: [WallPack3,AdditionalImage111,AdditionalImage112,AdditionalImage113], // Add more images if available
    specs: {
      SIZE: '8.58”L x 5.78”W x 2.91” D',
      WATTS: '20W',
      LUMEN: '2600lm',
      CCT: '5700K',
      VOLTAGE: 'AC100-277V',
      DIMMABLE: 'No',
      BEAM_ANGLE: '110°',
      CRI: '>80',
      PF: '>0.9',
      IP_RATE: 'IP65',
      MATERIALS: 'Aluminum',
      HOUSING_COLOR: 'Black / Brown',
      LIFESPAN: '50,000 hours',
      DESCRIPTION: 'LED Mini Wall Packs are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. These Wall Packs are perfect for houses, boundary walls, hotels, schools, hospitals, and grocery stores.'
    }
  },
  'led-rotatable-wall-pack-40-120w': {
    title: 'LED Rotatable Wall Pack 80W/120W',
    images: [WallPack4,AdditionalImage21,AdditionalImage22,AdditionalImage23,AdditionalImage24,AdditionalImage25], // Add more images if available
    specs: {
      SIZE: '40W: 5,200-5,600lm, 80W: 10,400-11,200lm, 120W: 15,400-16,800lm',
      CCT: '5700K',
      VOLTAGE: 'AC100-277V',
      DIMMABLE: '0-10V',
      BEAM_ANGLE: '60°',
      ROTATABLE_ANGLE: '60-270°',
      CRI: '>70',
      PF: '>0.9',
      IP_RATE: 'IP65',
      MATERIALS: 'Aluminum',
      HOUSING_COLOR: 'Black',
      LIFESPAN: '50,000 hours',
      DESCRIPTION: 'This Rotatable wall pack adopts the latest technology, replacing traditional bulbs with energy efficient LEDs. These are widely used in the lighting of homes, hotels, offices, hallways, garages, streets, landscapes, and other commercial spaces. These fixtures are suitable for a variety of applications and will provide significant energy savings.'
    }
  },
  'led-outdoor-wall-pack-w-inbuilt-battery-backup-55w': {
    title: 'LED Outdoor Wall Pack W/Inbuilt Battery Backup 55W',
    images: [WallPack5,AdditionalImage31,AdditionalImage32,AdditionalImage33,AdditionalImage1], // Add more images if available
    specs: {
      SIZE: '14.2” L x 9.3” W x 9.9” D',
      WATTS: '55W',
      BATTERY_BACKUP_TIME: '>=90 MINUTES',
      LUMEN: '7150lm',
      CCT: '5700K',
      VOLTAGE: 'AC100-277V',
      DIMMABLE: 'Yes',
      BEAM_ANGLE: '110°',
      CRI: '>80',
      PF: '>0.9',
      IP_RATE: 'IP65',
      PHOTOCELL: 'Yes',
      SURGE_PROTECTOR: 'Optional',
      MATERIALS: 'Aluminum, PC',
      HOUSING_COLOR: 'Brown',
      LIFESPAN: '50,000 hours',
      DESCRIPTION: 'This wall pack adopts the latest technology, replacing traditional bulbs with energy efficient LEDs. These are widely used in the lighting of homes, hotels, offices, hallways, garages, streets, landscapes, and other commercial spaces. These fixtures are suitable for a variety of applications and will provide significant energy savings. This light includes an emergency backup.'
    }
  },
  'led-outdoor-wall-pack-w-photo-cell-sensor-40-120w': {
    title: 'LED Outdoor Wall Pack W/Photo Cell Sensor 40 -120W',
    images: [WallPack6,AdditionalImage31,AdditionalImage32,AdditionalImage33,AdditionalImage1], // Add more images if available
    specs: {
      SIZE: '14.2” L x 9.3” W x 9.9” D',
      WATTS: '40W, 55W, 60W, 80W, 100W, 120W',
      LUMEN: '120-130lm/W',
      CCT: '5700K',
      VOLTAGE: 'AC100-277V',
      DIMMABLE: 'Yes',
      BEAM_ANGLE: '110°',
      CRI: '>80',
      PF: '>0.9',
      IP_RATE: 'IP65',
      PHOTOCELL: '55W, 120W only',
      SURGE_PROTECTOR: 'Optional',
      MATERIALS: 'Aluminum, PC',
      HOUSING_COLOR: 'Brown',
      LIFESPAN: '50,000 hours',
      DESCRIPTION: 'LED Wall Packs are safe for outdoor use and protected from rain, snow, and weak jets of water, such as sprinklers. These Wall Packs are perfect for hotels, schools, hospitals, and grocery stores. A photocell light sensor comes standard with this model.'
    }
  },
};

const WallPackDetails = () => {
  const { id } = useParams();
  const selectedPack = specifications[id];
  const [selectedImage, setSelectedImage] = useState(selectedPack?.images[0]);

  if (!selectedPack) {
    return <div>Invalid Wall Pack selected.</div>;
  }

  const renderSpecifications = () => {
    const { specs } = selectedPack;
    return (
      <div style={{ marginTop: '20px', width: '80%', maxWidth: '700px', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center' }}>Specifications</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <tbody>
            {Object.entries(specs).map(([key, value]) => (
              <tr key={key}>
                <td style={{ padding: '8px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'left', width: '30%' }}>{key}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'left' }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderImageThumbnails = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
        {selectedPack.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => setSelectedImage(image)}
            style={{
              width: '60px',
              height: '60px',
              objectFit: 'cover',
              cursor: 'pointer',
              border: selectedImage === image ? '2px solid black' : '1px solid #ddd',
              padding: '5px',
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{selectedPack.title}</h1>
      <div style={{ marginBottom: '20px' }}>
        <img
          src={selectedImage}
          alt={selectedPack.title}
          style={{ width: '300px', height: '300px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
        />
      </div>
      {renderImageThumbnails()}
      {renderSpecifications()}
    </div>
  );
};

export default WallPackDetails;

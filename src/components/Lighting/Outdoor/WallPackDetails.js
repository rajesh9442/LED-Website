import React from 'react';
import { useParams } from 'react-router-dom';
import WallPack1 from '../../../images/Outdoor/WallPacks/1.jpg'; 
import WallPack2 from '../../../images/Outdoor/WallPacks/2.jpg';
import WallPack3 from '../../../images/Outdoor/WallPacks/3.jpg';
import WallPack4 from '../../../images/Outdoor/WallPacks/4.jpg';
import WallPack5 from '../../../images/Outdoor/WallPacks/5.jpg';
import WallPack6 from '../../../images/Outdoor/WallPacks/6.jpg';

const specifications = {
  'led-mini-wall-pack-w-photocell-30w': {
    title: 'LED Mini Wall Pack W/Photocell 30W',
    src: WallPack1,
    specs: {
        SIZE: '8.58”L x 5.78”W x 2.91” D',
        WATTS: '30W',
        LUMEN: '3900lm',
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
  'led-mini-wall-pack-w-photocell-13w': {
    title: 'LED Mini Wall Pack W/Photocell 13W',
    src: WallPack2,
    specs: {
        SIZE: '8.15”L x 5.35”W x 2.5” D',
        WATTS: '13W',
        LUMEN: '1690lm',
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
  'led-mini-wall-pack-20w': {
    title: 'LED Mini Wall Pack 20W',
    src: WallPack3,
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
    title: 'LED Rotatable Wall Pack, 40-120W',
    src: WallPack4,
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
    src: WallPack5,
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
    src: WallPack6,
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
  }
};

const WallPackDetails = () => {
  const { id } = useParams(); // Get the id from the URL
  const selectedPack = specifications[id]; // Find the matching Wall Pack

  if (!selectedPack) {
    return <div>Invalid Wall Pack selected.</div>;
  }

  const renderSpecifications = () => {
    const { specs } = selectedPack;
    return (
      <div style={{ marginTop: '20px', textAlign: 'left', width: '50%', margin: 'auto' }}>
        <h2>Specifications</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <tbody>
            {Object.entries(specs).map(([key, value]) => (
              <tr key={key}>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{key}</td>
                <td style={{ padding: '8px', border: '1px solid #ddd' }}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{selectedPack.title}</h1>
      <img
        src={selectedPack.src}
        alt={selectedPack.title}
        style={{ width: '300px', height: '300px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
      />
      {renderSpecifications()}
    </div>
  );
};

export default WallPackDetails;

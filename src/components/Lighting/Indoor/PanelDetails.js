// src/components/Lighting/Indoor/PanelDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
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
    specs: {
      TITLE: 'Specification',
      FEATURES: [
        'This 2×4 LED Backlit Flat Panel is the perfect replacement for fluorescent troffers used in drop ceilings.',
        'Designed to fit in conventional suspended grid ceilings for new construction or retrofit projects, LED flat panels will save you time and money.',
        'Perfect for areas where you need bright, even light such as schools, universities, offices, churches, game rooms, and restaurants.',
        'This 2×4 LED Backlit Flat Panel is easy to install, just wire the fixture and lift it into place in the drop t-grid ceiling.',
        'The LED panel weighs less and has a more compact design compared to fluorescent troffers which will save you time installing the fixture.',
        'The integrated LEDs mean you no longer have to change bulbs as the LEDs will last the life of the fixture.',
        'LEDs last 2-3 times longer than old fluorescent tubes and contain no harmful chemicals.',
        'Plus LED flat panels do not have a hinged door meaning no more dead bugs or debris in the lens.',
        'This LED panel light is wattage selectable meaning you can select between 40W, 50W, and 60W.',
        'At 125 lumens per watt, each wattage provides approximately the following amount of light: 40W = 5000 lumens, 50W = 6250 lumens, 60W = 7500 lumens.',
        'In addition to being wattage selectable, this LED panel light is also color tunable allowing you to select between 3000K, 4000K, and 5000K.',
        'With all of the different configurations available in this one light, it is extremely versatile for many different applications or customer preferences.',
        'There are surface (flush) mount kits available (sold separately) which will allow you to install this fixture flush to the ceiling rather than recessed in a drop t-grid ceiling.',
      ],
    },
  },
  '2x2FT LED Flat Panel Troffer Light, 40W 5000K Recessed Back-Lit Drop Ceiling Light, 5200lm Lay in Fixture for Office, 0-10V Dimmable, 3-Lamp F17T8 Fixture Replacement, ETL Listed 100-277V – DLC 6 Pack': {
    src: Panel2,
    specs: {
      TITLE: 'Features',
      FEATURES: [
        'This 2×2 LED Backlit Flat Panel is the perfect replacement for fluorescent troffers used in drop ceilings.',
        'Designed to fit in conventional suspended grid ceilings for new construction or retrofit projects, LED flat panels will save you time and money.',
        'Perfect for areas where you need bright, even light such as schools, universities, offices, churches, game rooms, and restaurants.',
        'This 2×2 LED Backlit Flat Panel is easy to install, just wire the fixture and lift it into place in the drop t-grid ceiling.',
        'The LED panel weighs less and has a more compact design compared to fluorescent troffers which will save you time installing the fixture.',
        'The integrated LEDs mean you no longer have to change bulbs as the LEDs will last the life of the fixture.',
        'LEDs last 2-3 times longer than old fluorescent tubes and contain no harmful chemicals.',
        'Plus LED flat panels do not have a hinged door meaning no more dead bugs or debris in the lens.',
        'This LED panel light is wattage selectable meaning you can select between 20W, 30W, and 40W.',
        'At 125 lumens per watt, each wattage provides approximately the following amount of light: 20W = 2500 Lumens, 30W = 3750 Lumens, 40W = 5000 Lumens.',
        'In addition to being wattage selectable, this LED panel light is also color tunable allowing you to select between 3000K, 4000K, and 5000K.',
        'With all of the different configurations available in this one light, it is extremely versatile for many different applications or customer preferences.',
        'There are surface (flush) mount kits available (sold separately) which will allow you to install this fixture flush to the ceiling rather than recessed in a drop t-grid ceiling.',
      ],
    },
  },
  '2×4 FT LED Light Flat Panel, 40/50/60W, Color Temperature Selectable 3K | 4K | 5K, Dimmable Recessed Drop Ceiling Lights, 5000/6250/7500 Lumens, Lay in Fixture for Office, 120-277V, UL DLC(6 Pack)': {
    src: Panel3,
    specs: {
      TITLE: 'Features',
      FEATURES: [
        'This 2×4 LED Backlit Flat Panel is the perfect replacement for fluorescent troffers used in drop ceilings.',
        'Designed to fit in conventional suspended grid ceilings for new construction or retrofit projects, LED flat panels will save you time and money.',
        'Perfect for areas where you need bright, even light such as schools, universities, offices, churches, game rooms, and restaurants.',
        'This 2×4 LED Backlit Flat Panel is easy to install, just wire the fixture and lift it into place in the drop t-grid ceiling.',
        'The LED panel weighs less and has a more compact design compared to fluorescent troffers which will save you time installing the fixture.',
        'The integrated LEDs mean you no longer have to change bulbs as the LEDs will last the life of the fixture.',
        'LEDs last 2-3 times longer than old fluorescent tubes and contain no harmful chemicals.',
        'Plus LED flat panels do not have a hinged door meaning no more dead bugs or debris in the lens.',
        'This LED panel light is wattage selectable meaning you can select between 40W, 50W, and 60W.',
        'At 125 lumens per watt, each wattage provides approximately the following amount of light: 40W = 5000 lumens, 50W = 6250 lumens, 60W = 7500 lumens.',
        'In addition to being wattage selectable, this LED panel light is also color tunable allowing you to select between 3000K, 4000K, and 5000K.',
        'With all of the different configurations available in this one light, it is extremely versatile for many different applications or customer preferences.',
        'There are surface (flush) mount kits available (sold separately) which will allow you to install this fixture flush to the ceiling rather than recessed in a drop t-grid ceiling.',
      ],
    },
  },
  '2×2 FT LED Light Flat Panel, 20/30/40W, Color Temperature Selectable 3K | 4K | 5K, Dimmable Recessed Drop Ceiling Lights, 2500/3750/5000 Lumens, Lay in Fixture for Office, 120-277V, UL DLC(6 Pack)': {
    src: Panel4,
    specs: {
      TITLE: 'Features',
      FEATURES: [
        'This 2×2 LED Backlit Flat Panel is the perfect replacement for fluorescent troffers used in drop ceilings.',
        'Designed to fit in a conventional suspended grid ceiling for new construction or retrofit projects, LED flat panels will save you time and money.',
        'Perfect for areas where you need bright, even light such as schools, universities, offices, churches, game rooms, and restaurants.',
        'This 2×2 LED Backlit Flat Panel is easy to install, just wire the fixture and lift it into place in the drop t-grid ceiling.',
        'The LED panel weighs less and has a more compact design compared to fluorescent troffers which will save you time installing the fixture.',
        'The integrated LEDs mean you no longer have to change bulbs as the LEDs will last the life of the fixture.',
        'LEDs last 2-3 times longer than old fluorescent tubes and contain no harmful chemicals.',
        'Plus LED flat panels do not have a hinged door meaning no more dead bugs or debris in the lens.',
        'This LED panel light is wattage selectable meaning you can select between 20W, 30W, and 40W.',
        'At 125 lumens per watt, each wattage provides approximately the following amount of light: 20W = 2500 Lumens, 30W = 3750 Lumens, 40W = 5000 Lumens.',
        'In addition to being wattage selectable, this LED panel light is also color tunable allowing you to select between 3000K, 4000K, and 5000K.',
        'With all of the different configurations available in this one light, it is extremely versatile for many different applications or customer preferences.',
        'There are surface (flush) mount kits available (sold separately) which will allow you to install this fixture flush to the ceiling rather than recessed in a drop t-grid ceiling.',
      ],
    },
  },
  'LED Adjustable CCT Backlit Panel Light Adjustable 2x2ft 2x4ft 20-60W': {
    src: Panel5,
    specs: {
      TITLE: 'Specification',
      SPECIFICATIONS: {
        SIZE: 'BL22: 2′ L x 2′ W x 1.2″ D, BL24: 4′ L x 2′ W x 1.2″ D',
        '20W +30W + 40W': '2,200lm, 3,300lm, 4,400lm',
        '40W + 50W + 60W': '4,400lm, 5,500lm, 6,600lm',
        'ADJUSTABLE CCT': '3000K + 4000K + 5000K',
        VOLTAGE: 'AC120-277V',
        DIMMABLE: '3-in-1 (0-10V, PWM, Rx)',
        'BEAM ANGLE': '120°',
        CRI: '>80',
        PF: '>0.95',
        'IP RATE': 'IP40',
        MATERIALS: 'Aluminum, PC',
        'HOUSING COLOR': 'White',
        LIFESPAN: '50,000 hours',
        DESCRIPTION:
          'LED Panel Lights are specially designed to install quickly and easily into T-bar ceiling grids or pendants. They are an excellent replacement for fluorescent lights and can provide an energy savings of up to 60%. LED Panel Lights are intended only for indoor use. These lights are perfect for offices, schools, places of worship, and hospitals.',
      },
    },
  },
  'LED Adjustable CCT T-Bar Light 2x2ft 20/30/40W 2x4ft 40/50/60W': {
    src: Panel6,
    specs: {
      TITLE: 'Specification',
      SPECIFICATIONS: {
        SIZE: 'FL22: 24" L x 24" W x 0.6″ D, FL24: 48" L x 24" W x 0.6″ D',
        '20W +30W + 40W': '2,200lm, 3,300lm, 4,400lm',
        '40W + 50W + 60W': '4,400lm, 5,500lm, 6,600lm',
        'ADJUSTABLE CCT': '3000K + 4000K + 5000K',
        VOLTAGE: 'AC120-277V',
        DIMMABLE: '0-10V',
        CRI: '>80',
        PF: '>0.9',
        'IP RATE': 'IP40',
        MATERIALS: 'Aluminum, PC',
        'HOUSING COLOR': 'White, Frosted',
        LIFESPAN: '50,000 hours',
        DESCRIPTION:
          'LED Panel Lights are specially designed to install quickly and easily into T-bar ceiling grids or pendants. They are an excellent replacement for fluorescent lights and can provide an energy savings of up to 60%. LED Panel Lights are intended only for indoor use. These lights are perfect for offices, schools, places of worship, and hospitals.',
      },
    },
  },
  'LED Backlit Panel Light 2x2ft 40W 2x4ft 72W': {
    src: Panel7,
    specs: {
      TITLE: 'Specification',
      SPECIFICATIONS: {
        SIZE: 'BL22: 2′ L x 2′ W x 1.2″ D, BL24: 4′ L x 2′ W x 1.2″ D',
        '40W': '4,400lm',
        '72W/td': '7,200lm',
        'CCT':  '5000K',
        VOLTAGE: 'AC120-277V',
        DIMMABLE: '3-in-1 (0-10V, PWM, Rx)',
        'BEAM ANGLE': '120°',
        CRI: '>80',
        PF: '>0.95',
        'IP RATE': 'IP40',
        MATERIALS: 'Aluminum, PC',
        'HOUSING COLOR': 'White',
        LIFESPAN: '50,000 hours',
        DESCRIPTION:
          'LED Panel Lights are specially designed to install quickly and easily into T-bar ceiling grids or pendants. They are an excellent replacement for fluorescent lights and can provide an energy savings of up to 60%. LED Panel Lights are intended only for indoor use. These lights are perfect for offices, schools, places of worship, and hospitals.',
      },
    },
  },
};

const PanelDetails = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  const panel = panelData[decodeURIComponent(id)]; // Get the data for the selected panel

  if (!panel) {
    return <div>Invalid panel selection.</div>;
  }

  const renderSpecifications = () => {
    const { specs } = panel;
    return (
      <div style={{ marginTop: '20px', textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
        <h2>{specs.TITLE}</h2>
        {specs.FEATURES ? (
          <ul>
            {specs.FEATURES.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <tbody>
              {Object.entries(specs.SPECIFICATIONS).map(([key, value]) => (
                <tr key={key}>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>{key}:</strong></td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{decodeURIComponent(id)}</h1> {/* Title of the page */}
      <img
        src={panel.src}
        alt={id}
        style={{ width: '300px', height: '300px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
      />
      {renderSpecifications()}
    </div>
  );
};

export default PanelDetails;

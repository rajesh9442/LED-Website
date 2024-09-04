import React, { useState } from 'react';
import Panel1 from '../../../images/Indoor/Panels/1.jpeg';
import Panel2 from '../../../images/Indoor/Panels/2.jpeg';
import Panel3 from '../../../images/Indoor/Panels/3.jpeg';
import Panel4 from '../../../images/Indoor/Panels/4.jpeg';
import Panel5 from '../../../images/Indoor/Panels/5.jpg';
import Panel6 from '../../../images/Indoor/Panels/6.jpg';
import Panel7 from '../../../images/Indoor/Panels/7.jpg';

const panelData = {
  'Panel 1': {
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
  'Panel 2': {
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
  'Panel 3': {
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
  'Panel 4': {
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
  'Panel 5': {
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
  'Panel 6': {
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
  'Panel 7': {
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

const Panels = () => {
  const [selectedPanel, setSelectedPanel] = useState(null);

  const handlePanelClick = (key) => {
    setSelectedPanel(selectedPanel === key ? null : key); // Toggle selection
  };

  const renderSpecifications = () => {
    if (!selectedPanel) return null;

    const { specs } = panelData[selectedPanel];
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
      <h1>Panels</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '10px' }}>
        {Object.keys(panelData).map((key) => (
          <div
            key={key}
            style={{
              textAlign: 'center',
              cursor: 'pointer',
              border: selectedPanel === key ? '2px solid black' : '2px solid transparent', // Border color change on click
              padding: '5px',
            }}
            onClick={() => handlePanelClick(key)}
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
      {renderSpecifications()}
    </div>
  );
};

export default Panels;

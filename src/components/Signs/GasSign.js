import React from 'react';
import gasPriceSignImage from '../../images/Signs/GasSign/1.png';
import gasPriceSignImage2 from '../../images/Signs/GasSign/2.png'; 
import gasPriceSignImage3 from '../../images/Signs/GasSign/3.png'; 
import gasPriceSignImage4 from '../../images/Signs/GasSign/4.png'; 
import gasPriceSignImage5 from '../../images/Signs/GasSign/2.jpg';
import gasPriceSignImage6 from '../../images/Signs/GasSign/7.png';

const GasSign = () => {
  const tableData = [
    {
      height: '12\'\'',
      modelNumber: 'GLG-12inch8.888-Red/Amber/Green',
      numberFormat: '8.888',
      maxSizeCharacter: '304.8mm',
      housingDimension: 'H400mm W944mm D60mm',
      voltage: 'R/Y:42W B/G/W:44W',
      netWeight: '12kg',
      color: 'Red',
      linesForLEDs: '3 lines'
    },
    {
      height: '12\'\'',
      modelNumber: 'GLG-12inch8.889-Red/Amber/Green',
      numberFormat: '8.889',
      maxSizeCharacter: '304.8mm',
      housingDimension: 'H400mm W836mm D60mm',
      voltage: 'R/Y:35.5W B/G/W:37.5W',
      netWeight: '9kg',
      color: 'Red',
      linesForLEDs: '3 lines'
    },
    // Additional rows here...
  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* Main Image */}
      <img 
        src={gasPriceSignImage} 
        alt="Gas Price Sign" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />

      <h2>Parameters</h2>

      {/* Responsive Table */}
      <div style={{ overflowX: 'auto', margin: '20px 0' }}>
        <table 
          style={{ 
            width: '100%', 
            borderCollapse: 'collapse', 
            maxWidth: '1200px', 
            margin: 'auto' 
          }}
          border="1"
        >
          <thead>
            <tr>
              <th>Height</th>
              <th>Model Number</th>
              <th>Number Format</th>
              <th>Max Size Character</th>
              <th>Housing Dimension (H×W×D)</th>
              <th>Voltage</th>
              <th>Net Weight</th>
              <th>Color</th>
              <th>Lines for LEDs</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.height}</td>
                <td>{row.modelNumber}</td>
                <td>{row.numberFormat}</td>
                <td>{row.maxSizeCharacter}</td>
                <td>{row.housingDimension}</td>
                <td>{row.voltage}</td>
                <td>{row.netWeight}</td>
                <td>{row.color}</td>
                <td>{row.linesForLEDs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Additional Images */}
      <img 
        src={gasPriceSignImage2} 
        alt="Gas Price Sign" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />
      <img 
        src={gasPriceSignImage3} 
        alt="Gas Price Sign" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />
      <img 
        src={gasPriceSignImage4} 
        alt="Gas Price Sign" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />

      {/* Additional Images in a Row */}
      <div 
        style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '20px', 
          marginTop: '20px' 
        }}
      >
        <img 
          src={gasPriceSignImage5} 
          alt="Gas Price Sign 2" 
          style={{ width: '45%', maxWidth: '250px', height: 'auto' }} 
        />
        <img 
          src={gasPriceSignImage6} 
          alt="Gas Price Sign 3" 
          style={{ width: '45%', maxWidth: '250px', height: 'auto' }} 
        />
      </div>
    </div>
  );
};

export default GasSign;

import React from 'react';
import gasPriceSignImage from '../../images/Signs/GasSign/1.png'; // Adjust the path to your image
import gasPriceSignImage2 from '../../images/Signs/GasSign/2.png'; 
import gasPriceSignImage3 from '../../images/Signs/GasSign/3.png'; 
import gasPriceSignImage4 from '../../images/Signs/GasSign/4.png'; 
import gasPriceSignImage5 from '../../images/Signs/GasSign/2.jpg';
import gasPriceSignImage6 from '../../images/Signs/GasSign/7.png';

const GasSign = () => {
  // Data for the table
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
    {
      height: '12\'\'',
      modelNumber: 'GLG-12inch8.88 9/10-Red/Amber/Green',
      numberFormat: '8.88 9/10',
      maxSizeCharacter: '304.8mm',
      housingDimension: 'H400mm W836mm D60mm',
      voltage: 'R/Y:35W B/G/W:37W',
      netWeight: '9.5kg',
      color: 'Red',
      linesForLEDs: '3 lines'
    },
    {
      height: '16\'\'',
      modelNumber: 'GLG-16inch8.888-Red/Amber/Green',
      numberFormat: '8.888',
      maxSizeCharacter: '406.4mm',
      housingDimension: 'H507mm W1224mm D60mm',
      voltage: 'R/Y:64W B/G/W:52W',
      netWeight: '18kg',
      color: 'Red',
      linesForLEDs: '4 lines'
    },
    {
      height: '16\'\'',
      modelNumber: 'GLG-16inch8.889-Red/Amber/Green',
      numberFormat: '8.889',
      maxSizeCharacter: '406.4mm',
      housingDimension: 'H507mm W1077mm D60mm',
      voltage: 'R/Y:53W B/G/W:44.5W',
      netWeight: '16kg',
      color: 'Red',
      linesForLEDs: '4 lines'
    },
    {
      height: '24\'\'',
      modelNumber: 'GLG-24inch8.888-Red/Amber/Green',
      numberFormat: '8.888',
      maxSizeCharacter: '609.6mm',
      housingDimension: 'H710mm W1771mm D60mm',
      voltage: 'R/Y:112W B/G/W:80W',
      netWeight: '26kg',
      color: 'Red',
      linesForLEDs: '5 lines'
    },
    {
      height: '24\'\'',
      modelNumber: 'GLG-24inch8.889-Red/Amber/Green',
      numberFormat: '8.889',
      maxSizeCharacter: '609.6mm',
      housingDimension: 'H710mm W1564mm D60mm',
      voltage: 'R/Y:94.5W B/G/W:71W',
      netWeight: '24.6kg',
      color: 'Red',
      linesForLEDs: '5 lines'
    }
  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* Image at the top */}
      <img 
        src={gasPriceSignImage} 
        alt="Gas Price Sign" 
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
      />

      <h2>Parameters</h2>
      {/* Table for displaying specifications */}
      <table 
        style={{ 
          width: '100%', 
          borderCollapse: 'collapse', 
          margin: '20px auto', 
          maxWidth: '1200px' 
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
       <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        <img 
          src={gasPriceSignImage5} 
          alt="Gas Price Sign 2" 
          style={{ width: '30%', height: 'auto' }} 
        />
        <img 
          src={gasPriceSignImage6} 
          alt="Gas Price Sign 3" 
          style={{ width: '30%', height: 'auto' }} 
        />
      </div>
    </div>
  );
};

export default GasSign;

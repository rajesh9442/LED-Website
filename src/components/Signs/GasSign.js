import React from 'react';
import gasPriceSignImage from '../../images/Signs/GasSign/1.png'; // Adjust the path to your image
import gasPriceSignImage2 from '../../images/Signs/GasSign/2.png'; 
import gasPriceSignImage3 from '../../images/Signs/GasSign/3.png'; 
import gasPriceSignImage4 from '../../images/Signs/GasSign/4.png'; 

const GasSign = () => {
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
          <tr>
            <td>12''</td>
            <td>GLG-12inch8.888-Red/Amber/Green</td>
            <td>8.888</td>
            <td>304.8mm</td>
            <td>H400mm W944mm D60mm</td>
            <td>R/Y:42W B/G/W:44W</td>
            <td>12kg</td>
            <td>Red</td>
            <td>3 lines</td>
          </tr>
          <tr>
            <td>12''</td>
            <td>GLG-12inch8.889-Red/Amber/Green</td>
            <td>8.889</td>
            <td>304.8mm</td>
            <td>H400mm W836mm D60mm</td>
            <td>R/Y:35.5W B/G/W:37.5W</td>
            <td>9kg</td>
            <td>Red</td>
            <td>3 lines</td>
          </tr>
          <tr>
            <td>12''</td>
            <td>GLG-12inch8.88 9/10-Red/Amber/Green</td>
            <td>8.88 9/10</td>
            <td>304.8mm</td>
            <td>H400mm W836mm D60mm</td>
            <td>R/Y:35W B/G/W:37W</td>
            <td>9.5kg</td>
            <td>Red</td>
            <td>3 lines</td>
          </tr>
          <tr>
            <td>16''</td>
            <td>GLG-16inch8.888-Red/Amber/Green</td>
            <td>8.888</td>
            <td>406.4mm</td>
            <td>H507mm W1224mm D60mm</td>
            <td>R/Y:64W B/G/W:52W</td>
            <td>18kg</td>
            <td>Red</td>
            <td>4 lines</td>
          </tr>
          <tr>
            <td>16''</td>
            <td>GLG-16inch8.889-Red/Amber/Green</td>
            <td>8.889</td>
            <td>406.4mm</td>
            <td>H507mm W1077mm D60mm</td>
            <td>R/Y:53W B/G/W:44.5W</td>
            <td>16kg</td>
            <td>Red</td>
            <td>4 lines</td>
          </tr>
          <tr>
            <td>24''</td>
            <td>GLG-24inch8.888-Red/Amber/Green</td>
            <td>8.888</td>
            <td>609.6mm</td>
            <td>H710mm W1771mm D60mm</td>
            <td>R/Y:112W B/G/W:80W</td>
            <td>26kg</td>
            <td>Red</td>
            <td>5 lines</td>
          </tr>
          <tr>
            <td>24''</td>
            <td>GLG-24inch8.889-Red/Amber/Green</td>
            <td>8.889</td>
            <td>609.6mm</td>
            <td>H710mm W1564mm D60mm</td>
            <td>R/Y:94.5W B/G/W:71W</td>
            <td>24.6kg</td>
            <td>Red</td>
            <td>5 lines</td>
          </tr>
        </tbody>
      </table>
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
    </div>
  );
};

export default GasSign;

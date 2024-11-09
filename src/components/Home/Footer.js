import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import the icons
import './Footer.css'; // Import your CSS styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section about">
          <h4>About Us</h4>
          <p>
            LEDs are totally efficient. Meaning that they use much less energy to run 
            compared to incandescent or halogen bulbs. Of course, less energy consumption 
            means lower electricity bills. Saving the average homeowner 80% off their 
            electrical bill when they switch to LED.
          </p>
        </div>

        {/* Products Section */}
        <div className="footer-section products">
          <h4>Products</h4>
          <ul>
            <li>Indoor LED</li>
            <li>Outdoor LED</li>
            <li>CCTV</li>
            <li>Sign Boards</li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section contact">
          <h4>Contact Info</h4>
          <ul>
            <li>+1-414-539-4006</li>
            <li>+1-414-627-0979</li>
            <li>brightworldled@gmail.com</li>
            <li>730 W. Historical Mitchell St., Milwaukee</li>
            <li>WI 53204, USA</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom with Copyright and Social Icons */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <a href="https://www.facebook.com/share/1GqvcJr4Dd/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/bright_world_led?igsh=bDk4bHAzbTFuZ201" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

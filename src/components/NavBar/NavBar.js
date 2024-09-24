import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../images/logo.png'; // Adjust the path based on your folder structure

const NavBar = () => {
  const [lightingDropdownVisible, setLightingDropdownVisible] = useState(false);
  const [signsDropdownVisible, setSignsDropdownVisible] = useState(false);

  // Toggle lighting dropdown
  const handleLightingMouseEnter = () => {
    setLightingDropdownVisible(true);
  };

  const handleLightingMouseLeave = () => {
    setLightingDropdownVisible(false);
  };

  // Toggle signs dropdown
  const handleSignsMouseEnter = () => {
    setSignsDropdownVisible(true);
  };

  const handleSignsMouseLeave = () => {
    setSignsDropdownVisible(false);
  };

  const handleLightingClick = (e) => {
    e.preventDefault(); // Prevent navigation
    setLightingDropdownVisible(!lightingDropdownVisible); // Toggle dropdown visibility
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </NavLink>
      <ul className="navbar-links">
        <li
          className="dropdown-container"
          onMouseEnter={handleLightingMouseEnter}
          onMouseLeave={handleLightingMouseLeave}
        >
          <a href="/lighting" onClick={handleLightingClick} className="nav-link">
            LIGHTING
          </a>
          {lightingDropdownVisible && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h3>INDOOR</h3>
                <ul>
                  <li><NavLink to="/lighting/cooler-light">COOLER LIGHT</NavLink></li>
                  <li><NavLink to="/lighting/corn-light">CORN LIGHT</NavLink></li>
                  <li><NavLink to="/lighting/downlight-series">DOWNLIGHT SERIES</NavLink></li>
                  <li><NavLink to="/lighting/gimbal-light">GIMBAL LIGHT</NavLink></li>
                  <li><NavLink to="/lighting/integrated-tube-light">INTEGRATED TUBE LIGHT</NavLink></li>
                  <li><NavLink to="/lighting/panels">PANELS</NavLink></li>
                  <li><NavLink to="/lighting/t8-tube-light">T8 TUBE LIGHT</NavLink></li>
                  <li><NavLink to="/lighting/troffers">TROFFERS</NavLink></li>
                  <li><NavLink to="/lighting/ufo-highbay">UFO HIGHBAY</NavLink></li>
                </ul>
              </div>
              <div className="dropdown-section">
                <h3>OUTDOOR</h3>
                <ul>
                  <li><NavLink to="/lighting/canopy-light">CANOPY LIGHT</NavLink></li>
                  <li><NavLink to="/lighting/flood-light">FLOOD LIGHT</NavLink></li>
                  <li><NavLink to="/lighting/shoe-box">SHOE BOX</NavLink></li>
                  <li><NavLink to="/lighting/exit-signs">EXIT SIGNS</NavLink></li>
                  <li><NavLink to="/lighting/wall-packs">WALL PACKS</NavLink></li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li
          className="dropdown-container"
          onMouseEnter={handleSignsMouseEnter}
          onMouseLeave={handleSignsMouseLeave}
        >
          <NavLink to="/signs" className="nav-link">
            SIGNS
          </NavLink>
          {signsDropdownVisible && (
            <div className="dropdown">
              <div className="dropdown-section"> {/* Added for consistency */}
                <ul>
                  <li><NavLink to="/signs/gas-price-sign">GAS PRICE SIGN</NavLink></li>
                  <li><NavLink to="/signs/display-sign">DISPLAY SIGN</NavLink></li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li>
          <NavLink to="/cctv" className="nav-link">
            CCTV
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactus" className="nav-link">
            CONTACT US
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

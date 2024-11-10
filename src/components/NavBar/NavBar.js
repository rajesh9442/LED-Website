import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../images/logo.png'; // Adjust the path based on your folder structure

const NavBar = () => {
  const [lightingDropdownVisible, setLightingDropdownVisible] = useState(false);
  const [signsDropdownVisible, setSignsDropdownVisible] = useState(false);

  // Toggle lighting dropdown on click
  const handleLightingClick = () => {
    setLightingDropdownVisible((prev) => !prev);
    setSignsDropdownVisible(false); // Ensure only one dropdown is open at a time
  };

  // Toggle signs dropdown on click
  const handleSignsClick = () => {
    setSignsDropdownVisible((prev) => !prev);
    setLightingDropdownVisible(false); // Ensure only one dropdown is open at a time
  };

  // Hide dropdown when a dropdown link is clicked
  const handleDropdownItemClick = () => {
    setLightingDropdownVisible(false);
    setSignsDropdownVisible(false);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </NavLink>
      <ul className="navbar-links">
        <li className="dropdown-container">
          <a href="#" className="nav-link" onClick={handleLightingClick}>
            LIGHTING
          </a>
          {lightingDropdownVisible && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h3>INDOOR</h3>
                <ul>
                  <li><NavLink to="/lighting/cooler-light" onClick={handleDropdownItemClick}>COOLER LIGHT</NavLink></li>
                  <li><NavLink to="/lighting/corn-light" onClick={handleDropdownItemClick}>CORN LIGHT</NavLink></li>
                  <li><NavLink to="/lighting/downlight-series" onClick={handleDropdownItemClick}>DOWNLIGHT SERIES</NavLink></li>
                  <li><NavLink to="/lighting/gimbal-light" onClick={handleDropdownItemClick}>GIMBAL LIGHT</NavLink></li>
                  <li><NavLink to="/lighting/integrated-tube-light" onClick={handleDropdownItemClick}>INTEGRATED TUBE LIGHT</NavLink></li>
                  <li><NavLink to="/lighting/panels" onClick={handleDropdownItemClick}>PANELS</NavLink></li>
                  <li><NavLink to="/lighting/t8-tube-light" onClick={handleDropdownItemClick}>T8 TUBE LIGHT</NavLink></li>
                  <li><NavLink to="/lighting/troffers" onClick={handleDropdownItemClick}>TROFFERS</NavLink></li>
                  <li><NavLink to="/lighting/ufo-highbay" onClick={handleDropdownItemClick}>UFO HIGHBAY</NavLink></li>
                </ul>
              </div>
              <div className="dropdown-section">
                <h3>OUTDOOR</h3>
                <ul>
                  <li><NavLink to="/lighting/canopy-light" onClick={handleDropdownItemClick}>CANOPY LIGHT</NavLink></li>
                  <li><NavLink to="/lighting/flood-light" onClick={handleDropdownItemClick}>FLOOD LIGHT</NavLink></li>
                  <li><NavLink to="/lighting/shoe-box" onClick={handleDropdownItemClick}>SHOE BOX</NavLink></li>
                  <li><NavLink to="/lighting/exit-signs" onClick={handleDropdownItemClick}>EXIT SIGNS</NavLink></li>
                  <li><NavLink to="/lighting/wall-packs" onClick={handleDropdownItemClick}>WALL PACKS</NavLink></li>
                </ul>
              </div>
            </div>
          )}
        </li>

        {/* Signs dropdown */}
        <li className="dropdown-container">
          <a href="#" className="nav-link" onClick={handleSignsClick}>
            SIGNS
          </a>
          {signsDropdownVisible && (
            <div className="dropdown">
              <div className="dropdown-section">
                <ul>
                  <li><NavLink to="/signs/gas-price-sign" onClick={handleDropdownItemClick}>GAS PRICE SIGN</NavLink></li>
                  <li><NavLink to="/signs/display-sign" onClick={handleDropdownItemClick}>DISPLAY SIGN</NavLink></li>
                </ul>
              </div>
            </div>
          )}
        </li>

        <li>
          <NavLink to="/cctv" className="nav-link" onClick={handleDropdownItemClick}>
            CCTV
          </NavLink>
        </li>
        <li>
          <NavLink to="/contactus" className="nav-link" onClick={handleDropdownItemClick}>
            CONTACT US
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

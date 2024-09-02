import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../images/logo.png'; // Adjust the path to your logo image

const NavBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleLightingClick = (e) => {
    e.preventDefault(); // Prevent navigation
    setDropdownVisible(!dropdownVisible); // Toggle dropdown visibility
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </NavLink>
      <ul className="navbar-links">
        <li
          className="dropdown-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/lighting" onClick={handleLightingClick} className="nav-link">
            LIGHTING
          </a>
          {dropdownVisible && (
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
                  <li><NavLink to="/lighting/landscape-accent-lights">LANDSCAPE ACCENT LIGHTS</NavLink></li>
                  <li><NavLink to="/lighting/wall-packs">WALL PACKS</NavLink></li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li>
          <NavLink
            to="/signs"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            SIGNS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cctv"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            CCTV
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactus"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            CONTACT US
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

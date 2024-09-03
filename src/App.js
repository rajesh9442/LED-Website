import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ContactUs from './components/ContactUs/ContactUs';
import NavBar from './components/NavBar/NavBar';
import CoolerLight from './components/Lighting/Indoor/CoolerLight';
import CornLight from './components/Lighting/Indoor/CornLight';
import DownLightSeries from './components/Lighting/Indoor/DownLightSeries';
import GimbalLight from './components/Lighting/Indoor/GimbalLight';
import IntegratedTubeLight from './components/Lighting/Indoor/IntegratedTubeLight';
import Panels from './components/Lighting/Indoor/Panels';
import T8TubeLight from './components/Lighting/Indoor/T8TubeLight';
import Troffers from './components/Lighting/Indoor/Troffers';
import UfoHighbay from './components/Lighting/Indoor/UfoHighbay';
import CanopyLight from './components/Lighting/Outdoor/CanopyLight';
import FloodLight from './components/Lighting/Outdoor/FloodLight';
import LandscapeAccentLight from './components/Lighting/Outdoor/LandscapeAccentLight';
import ShoeBox from './components/Lighting/Outdoor/ShoeBox';
import WallPacks from './components/Lighting/Outdoor/WallPacks';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          {/* Indoor Lights */}
          <Route path="/lighting/cooler-light" element={<CoolerLight />} />
          <Route path="/lighting/corn-light" element={<CornLight />} />
          <Route path="/lighting/downlight-series" element={<DownLightSeries />} />
          <Route path="/lighting/gimbal-light" element={<GimbalLight />} />
          <Route path="/lighting/integrated-tube-light" element={<IntegratedTubeLight />} />
          <Route path="/lighting/panels" element={<Panels />} />
          <Route path="/lighting/t8-tube-light" element={<T8TubeLight />} />
          <Route path="/lighting/troffers" element={<Troffers />} />
          <Route path="/lighting/ufo-highbay" element={<UfoHighbay />} />
          {/* Outdoor Lights */}
          <Route path="/lighting/canopy-light" element={<CanopyLight />} />
          <Route path="/lighting/flood-light" element={<FloodLight />} />
          <Route path="/lighting/landscape-accent-lights" element={<LandscapeAccentLight />} />
          <Route path="/lighting/shoe-box" element={<ShoeBox />} />
          <Route path="/lighting/wall-packs" element={<WallPacks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

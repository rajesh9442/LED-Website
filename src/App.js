import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ContactUs from './components/ContactUs/ContactUs';
import NavBar from './components/NavBar/NavBar';
import CoolerLight from './components/Lighting/Indoor/CoolerLight';
import CoolerLightDetails from './components/Lighting/Indoor/CoolerLightDetails';
import CornLight from './components/Lighting/Indoor/CornLight';
import CornLightDetails from './components/Lighting/Indoor/CornLightDetails';
import DownLightSeries from './components/Lighting/Indoor/DownLightSeries';
import DownLightDetails from './components/Lighting/Indoor/DownLightDetails';
import GimbalLight from './components/Lighting/Indoor/GimbalLight';
import GimbalLightDetails from './components/Lighting/Indoor/GimbalLightDetails';
import IntegratedTubeLight from './components/Lighting/Indoor/IntegratedTubeLight';
import IntegratedTubeLightDetails from './components/Lighting/Indoor/IntegratedTubeLightDetails';
import Panels from './components/Lighting/Indoor/Panels';
import PanelDetails from './components/Lighting/Indoor/PanelDetails';
import T8TubeLight from './components/Lighting/Indoor/T8TubeLight';
import T8TubeLightDetails from './components/Lighting/Indoor/T8TubeLightDetails';
import Troffers from './components/Lighting/Indoor/Troffers';
import TroffersDetails from './components/Lighting/Indoor/TroffersDetails';
import UfoHighbay from './components/Lighting/Indoor/UfoHighbay';
import UfoHighbayDetails from './components/Lighting/Indoor/UfoHighbayDetails';
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
          <Route path="/lighting/cooler-light/details/:id" element={<CoolerLightDetails />} />
          <Route path="/lighting/corn-light" element={<CornLight />} />
          <Route path="/lighting/corn-light/details/:id" element={<CornLightDetails />} />
          <Route path="/lighting/downlight-series" element={<DownLightSeries />} />
          <Route path="/lighting/downlight-series/details/:id" element={<DownLightDetails />} />
          <Route path="/lighting/gimbal-light" element={<GimbalLight />} />
          <Route path="/lighting/gimbal-light/details/:id" element={<GimbalLightDetails />} />
          <Route path="/lighting/integrated-tube-light" element={<IntegratedTubeLight />} />
          <Route path="/integrated-tube-light" element={<IntegratedTubeLightDetails />} />
          <Route path="/lighting/panels" element={<Panels />} />
          <Route path="/panels/:id" element={<PanelDetails />} />
          <Route path="/lighting/t8-tube-light" element={<T8TubeLight />} />
          <Route path="/t8-tube-light/:id" element={<T8TubeLightDetails />} />
          <Route path="/lighting/troffers" element={<Troffers />} />
          <Route path="/lighting/troffers/details/:id" element={<TroffersDetails />} />
          <Route path="/lighting/ufo-highbay" element={<UfoHighbay />} />
          <Route path="/lighting/ufo-highbay/details/:id" element={<UfoHighbayDetails />} />
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

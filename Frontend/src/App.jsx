import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Distict from "./pages/Distict";
import HiddenPlace from "./pages/HiddenPlace";
import HotelBooking from "./pages/HotelBooking";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Home2 from "./pages/Home2";

import GoogleMapViewer from './components/GoogleMapViewer'
import SignIn from "./components/SignIn";
import { useEffect } from "react";
import ReserveRoom from "./pages/ReserveRoom";

function App() {
  return (
    <Router>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/district/:distname" element={<Distict />} />
        <Route path="/hiddenplace" element={<HiddenPlace />} />
        <Route path="/hotelbooking" element={<HotelBooking/>} />
        <Route path="/hotelbooking/reserve-room" element={<ReserveRoom/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}


export default App;
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Landing from "./pages/home";
import './App.css';
import AboutUs from "./pages/aboutus";
import AccInfo from "./pages/accinfo";
import Market from "./pages/market";
import TopBar from "./components/topbar/TopBar";

export default function App() {
  return (
      <Router>
        <TopBar/>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/accounting-informations" element={<AccInfo/>} />
          <Route path="/marketplace" element={<Market/>} />
       </Routes>
      </Router>
  );
}

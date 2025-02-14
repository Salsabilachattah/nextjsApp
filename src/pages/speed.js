import React from 'react';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import SpeedComponent from '../components/SpeedComponent.js';
import './styles.css';
export default function Bandwidth() {
    const data = [10, 20];
  return (
    <div className="bandwidth">
      <Navbar />
      <div className="outer-speed-container">
      <h3> your internet speed : </h3>
      <div className="speed-container">
        <SpeedComponent data={data} type="download" />
        <SpeedComponent data={data} type="upload" />
      </div>
      </div>
      <Footer />
    </div>
  );
}
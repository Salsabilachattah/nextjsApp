import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import SpeedComponent from '../components/SpeedComponent.js';

import './styles.css';

const handleSpeedData = async (setSpeedData) => {
  try {
    const response = await fetch('/api/speedTest');
    const data = await response.json();
    setSpeedData([data.uploadSpeed, data.downloadSpeed]);
  } catch (e) {
    console.error('Error fetching speed data:', e.message);
  }
};


export default function Bandwidth() {
    const data = [10, 20];
    const [speedData, setSpeedData] = useState([0, 0]); // [uploadSpeed, downloadSpeed]
    useEffect(() => {
      handleSpeedData(setSpeedData);
    }, []);
    console.log(speedData);
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
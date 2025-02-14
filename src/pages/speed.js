import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import SpeedComponent from '../components/SpeedComponent.js';

import './styles.css';

const handleSpeedData = async (setSpeedData) => {
  try {
    const response = await fetch('/api/speedTest');
    const data = await response.json();
    const speed = data.speed;
    setSpeedData(speed); 
  } catch (e) {
    console.error('Error fetching speed data:', e.message);
  }
};

export default function Bandwidth() {
    const [speedData, setSpeedData] = useState(0); // [uploadSpeed, downloadSpeed]

    useEffect(() => {
      handleSpeedData(setSpeedData);
    }, []); // Empty dependency array ensures this runs only once
   console.log(speedData);
    return (
    <div className="bandwidth">
      <Navbar />
      <div className="outer-speed-container">
      <h3> your download speed : </h3>
      <div className="speed-container">
        <SpeedComponent data={speedData} type="download" />
        {/* <SpeedComponent data={data} type="upload" /> this was supposed to be another functionality */}
      </div>
      </div>
      <Footer />
    </div>
  );
}
import React from 'react';
import IpPannel from '../components/IpPannel.js'; 
import Footer from '../components/Footer.js';
import Navbar from '../components/Navbar.js';
import './styles.css';
export default function MyIP() {
  const data = ['123.123.123.123', 'ISP Name', 'Country/City', 'Latitude/Longitude', 'Timezone'];

  return (
    <div className="home-page-container">
      <Navbar />
      <IpPannel data={data} />
      <Footer />
    </div>
  );
}
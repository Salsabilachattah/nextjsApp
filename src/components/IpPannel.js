import React from 'react';
import './IpPannel.css';

export default function IpPannel({ data }) {
  return (
    <div className="ip-panel">
      <h2>Your IP Address:</h2>
      <p>{data[0]}</p>
      <ul>
        <li><strong>ISP:</strong> <span>{data[1]}</span></li>
        <li><strong>Location:</strong> <span>{data[2]}</span></li>
        <li><strong>Coordinates:</strong> <span>{data[3]}</span></li>
        <li><strong>Timezone:</strong> <span>{data[4]}</span></li>
      </ul>
    </div>
  );
}

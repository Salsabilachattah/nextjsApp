import React from 'react';
import './SpeedComponent.css';

export default function SpeedComponent({ data , type}) { /*upload or download */

  return (
    <div className="speed-panel" >
        <div className="circle">
          <h1 >{type === "upload" ? <p>{data[0]}</p> : <p>{data[1]}</p>}</h1> 
            <h4>Mbps</h4>
        </div>
      <h2>{type}</h2>
    </div>
  )
}
import React from 'react';
import './SpeedComponent.css';

export default function SpeedComponent({ data , type}) { /*upload or download */

  return (
    <div className="speed-panel" >
        <div className="circle">
          {!data ? <div className="loader"></div>
           : <h1 >{type === "upload" ? <p></p> : <p>{data.toString().substring(0, 5)}</p>}</h1> }
          {data ? <h4>Mbps</h4> : <></>}
        </div>
      {/* <h2>{}</h2> */}
    </div>
  )
}
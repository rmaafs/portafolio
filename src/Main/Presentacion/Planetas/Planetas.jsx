import React from 'react';
import "./Planetas.css";

const Planetas = () => {
    return ( 
        <div id="orbits">
            <div className="hearth">
            <div className="luna"></div>
            </div>
            <div className="mars"></div>
            <div className="jupiter">
              <div className="luna1"></div>
              <div className="luna2"></div>
              <div className="luna3"></div>
              <div className="luna4"></div>
            </div>
          </div>
     );
}
 
export default Planetas;
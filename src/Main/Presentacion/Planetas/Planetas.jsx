import Tooltip from "@material-ui/core/Tooltip";
import React from "react";
import "./Planetas.css";

const Planetas = () => {
  return (
    <div id="orbits">
      <Tooltip title={"Tierra"} arrow>
        <div className="hearth">
          <div className="luna"></div>
        </div>
      </Tooltip>

      <Tooltip title={"Marte"} arrow>
        <div className="mars"></div>
      </Tooltip>

      <Tooltip title={"Júpiter"} arrow>
        <div className="jupiter">
          <div className="luna1"></div>
          <div className="luna2"></div>
          <div className="luna3"></div>
          <div className="luna4"></div>
        </div>
      </Tooltip>
    </div>
  );
};

export default Planetas;

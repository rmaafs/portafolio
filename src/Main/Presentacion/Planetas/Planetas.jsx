import React, { useContext } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { useLanguage } from "../../../hooks/LanguageContext/useLanguageContext";
import "./Planetas.css";

const Planetas = () => {
  const { lang } = useContext(useLanguage);

  return (
    <div id="orbits">
      <Tooltip title={lang.principal.planets.earth} arrow>
        <div className="hearth">
          <div className="luna"></div>
        </div>
      </Tooltip>

      <Tooltip title={lang.principal.planets.mars} arrow>
        <div className="mars"></div>
      </Tooltip>

      <Tooltip title={lang.principal.planets.jupiter} arrow>
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

import React, { useContext } from "react";
import Tooltip from "../../Tooltip/Tooltip";
import { useLanguage } from "../../../hooks/LanguageContext/useLanguageContext";
import "./Planetas.css";

const Planetas = () => {
  const { lang } = useContext(useLanguage);

  return (
    <div id="orbits">
      <Tooltip content={lang.principal.planets.earth}>
        <div className="hearth">
          <div className="luna"></div>
        </div>
      </Tooltip>

      <Tooltip content={lang.principal.planets.mars}>
        <div className="mars"></div>
      </Tooltip>

      <Tooltip content={lang.principal.planets.jupiter}>
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

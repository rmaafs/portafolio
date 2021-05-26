import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./CI_CD.css";
import Deploy from "./Deploy/Deploy";
import Repositorio from "./Repositorio/Repositorio";
import Tests from "./Tests/Tests";

const CI_CD = () => {
  return (
    <ScrollAnimation animateIn="animate__fadeIn" offset={250}>
      <div className="col-xs-12 col-md-6 no-padding ci-cd">
        <h1 className="numbered-heading">
          <span>CI & CD</span>
        </h1>
      </div>

      <div
        className="col-12"
        style={{
          paddingTop: 20,
        }}
      >
        <span style={{ width: "100%" }}>
          Me apasiona la cultura DevOps: hacer el trabajo difícil de forma
          automatizada.
        </span>

        <div className="col-12 row" style={{ paddingTop: "40px" }}>
          <Repositorio />

          <Tests />

          <Deploy />
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default CI_CD;

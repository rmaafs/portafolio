import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./CI_CD.css";
import Repositorio from "./Repositorio/Repositorio";

const CI_CD = () => {
  return (
    <ScrollAnimation animateIn="animate__fadeIn" offset={0}>
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
        <span>
          Me gusta la cultura DevOps, por lo que en este proyecto procuro
          aplicarla.
        </span>

        <Repositorio />
      </div>
    </ScrollAnimation>
  );
};

export default CI_CD;

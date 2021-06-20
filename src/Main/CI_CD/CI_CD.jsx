import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./CI_CD.css";
import Deploy from "./Deploy/Deploy";
import Repositorio from "./Repositorio/Repositorio";
import Tests from "./Tests/Tests";
import HelpIcon from "../HelpIcon";

const CI_CD = () => {
  return (
    <ScrollAnimation animateIn="animate__fadeIn" offset={250}>
      <div className="col-xs-12 col-md-6 no-padding ci-cd">
        <h1 className="numbered-heading">
          <span>CI & CD</span>
          <HelpIcon>
            <b>CI o Continuous Integration</b>, resumidamente se refiere a que
            el código que hizo un programador, pase por una lista de pruebas
            automáticas antes de poder llevar sus cambios al código que utilizan
            los clientes (producción) en el producto.
            <br />
            <br />
            <b>CD o Continuous Delivery</b>, resumidamente se refiere a llevar
            los nuevos cambios automáticamente a producción (comúnmente al
            servidor) para que los clientes puedan consumirlo.
            <br />
            <br />A <b>CI & CD</b> se le llama cultura <b>DevOps</b>.
            <br />
            - El programador escribe código.
            <br />
            - Se prueba su código para que no afecte el producto.
            <br />
            - Se integran sus cambios a producción.
            <br />
          </HelpIcon>
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

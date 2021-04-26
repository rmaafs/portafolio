import * as React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Presentacion from "./Presentacion/Presentacion";
import Repositorios from "./Repositorios/Repositorios";

const Main = () => {
  return (
    <div className="container-xs no-padding">
      <Presentacion />
      <AboutMe />
      <Repositorios />
    </div>
  );
};

export default Main;

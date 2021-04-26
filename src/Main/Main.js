import * as React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Presentacion from "./Presentacion/Presentacion";

const Main = () => {
  return (
    <div className="container-xs no-padding">
      <Presentacion />
      <AboutMe />
    </div>
  );
};

export default Main;

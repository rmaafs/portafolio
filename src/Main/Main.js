import React, { useState, useEffect } from "react";
import AboutMe from "./AboutMe/AboutMe";
import Presentacion from "./Presentacion/Presentacion";
import Repositorios from "./Repositorios/Repositorios";
import { PointSpreadLoading } from "react-loadingg";

const Main = () => {
  const [loaded, setLoaded] = useState(false); //¿La página ha sido cargada?

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  });

  if (loaded) {
    return (
      <div className="container-xs no-padding">
        <Presentacion />
        <AboutMe />
        <Repositorios />
      </div>
    );
  } else {
    return <PointSpreadLoading />;
  }
};

export default Main;

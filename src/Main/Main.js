import React, { useState, useEffect } from "react";
import AboutMe from "./AboutMe/AboutMe";
import Presentacion from "./Presentacion/Presentacion";
import Repositorios from "./Repositorios/Repositorios";
import {
  PointSpreadLoading,
  CommonLoading,
  WindMillLoading,
  MeteorRainLoading,
  SemipolarLoading,
  SolarSystemLoading,
  BatteryLoading,
  CoffeeLoading,
  EatLoading,
} from "react-loadingg";
import FadeIn from "react-fade-in";
import Colors from "../Colors";

const Main = () => {
  const [loaded, setLoaded] = useState(false); //¿La página ha sido cargada?

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  });

  //Lista de loaders que obtendremos para la animación que está cargando la página
  const listLoaders = [
    <PointSpreadLoading color={Colors.colors.primary} />,
    <CommonLoading color={Colors.colors.primary} />,
    <WindMillLoading color={Colors.colors.primary} />,
    <MeteorRainLoading color={Colors.colors.primary} />,
    <SemipolarLoading color={Colors.colors.primary} />,
    <SolarSystemLoading color={Colors.colors.primary} />,
    <BatteryLoading color={Colors.colors.primary} />,
    <CoffeeLoading color={Colors.colors.primary} />,
    <EatLoading color={Colors.colors.primary} />,
  ];

  function getRandLoader() {
    //Obtenemos número random en un rango de 2 números
    function getRand(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    //Retornamos algún loader aleatorio de la lista
    return listLoaders[getRand(0, listLoaders.length - 1)];
  }

  return (
    <React.Fragment>
      {loaded ? null : getRandLoader()}
      <FadeIn transitionDuration={1000} visible={loaded}>
        <div
          className="container-xs no-padding"
          style={{ display: loaded ? "block" : "none" }}
        >
          <Presentacion />
          <AboutMe />
          <Repositorios />
        </div>
      </FadeIn>
    </React.Fragment>
  );
};

export default Main;

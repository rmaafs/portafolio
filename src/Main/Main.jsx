import React, { useState } from "react";
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
import CI_CD from "./CI_CD/CI_CD";
import Footer from "./Footer/Footer";
import PreImageLoader from "./PreImageLoader/PreImageLoader";

const Main = () => {
  const [loaded, setLoaded] = useState(false); //¿La página ha sido cargada?

  /**
   * Función que se ejecuta cuando termina de cachear las imágenes.
   */
  const handleFinishPreLoader = () => {
    setLoaded(true);
  };

  //Lista de loaders que obtendremos para la animación que está cargando la página
  const listLoaders = [
    <PointSpreadLoading color={Colors.colors.primary} key={0} />,
    <CommonLoading color={Colors.colors.primary} key={1} />,
    <WindMillLoading color={Colors.colors.primary} key={2} />,
    <MeteorRainLoading color={Colors.colors.primary} key={3} />,
    <SemipolarLoading color={Colors.colors.primary} key={4} />,
    <SolarSystemLoading color={Colors.colors.primary} key={5} />,
    <BatteryLoading color={Colors.colors.primary} key={6} />,
    <CoffeeLoading color={Colors.colors.primary} key={7} />,
    <EatLoading color={Colors.colors.primary} key={8} />,
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
      <PreImageLoader onFinish={handleFinishPreLoader} />
      {loaded ? null : getRandLoader()}
      <FadeIn transitionDuration={1000} visible={loaded}>
        <div
          className="container-xs no-padding"
          style={{ display: loaded ? "block" : "none" }}
        >
          <Presentacion />
          <div
            style={{
              width: "100%",
              textAlign: "-webkit-center",
            }}
          >
            <div className="app-container">
              <AboutMe />
              <Repositorios />
              <CI_CD />
            </div>
          </div>

          <Footer />
        </div>
      </FadeIn>
    </React.Fragment>
  );
};

export default Main;

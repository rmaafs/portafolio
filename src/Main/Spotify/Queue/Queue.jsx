import React, { Fragment, useState } from "react";
import Buscador from "./Buscador/Buscador";
import "./Queue.css";

const Queue = () => {
  const [buscando, setBuscando] = useState(false);
  const [elegido, setElegido] = useState(false);
  const [msgError, setMsgError] = useState("");

  const handleOnChoose = () => {
    setMsgError("");
    setBuscando(false);
    setElegido(true);
    setTimeout(function () {
      setElegido(false);
    }, 5000);
  };

  const handleError = (err) => {
    setBuscando(false);
    setElegido(true);
    setMsgError(err);
    setTimeout(function () {
      setElegido(false);
    }, 5000);
  };

  const Recomendar = () => {
    return (
      <div className="recomendar" onClick={() => setBuscando(true)}>
        <i className={"fa fa-plus fa-fw mr-2 v-align-middle"}></i>
        Recomendar canción
      </div>
    );
  };

  const Agradecer = () => {
    return (
      <div className={"agradecer" + (msgError ? " con-error" : "")}>
        <i
          className={
            "fa fa-" +
            (msgError ? "times" : "check") +
            " fa-fw mr-2 v-align-middle"
          }
        ></i>
        {msgError === "" ? (
          <Fragment>
            Tu canción será la próxima en escucharse. ¡Gracias!
          </Fragment>
        ) : (
          <Fragment>{msgError}</Fragment>
        )}
      </div>
    );
  };

  return (
    <div className="queue-container row">
      <div className="queue">
        {buscando ? (
          <Buscador
            onClose={() => setBuscando(false)}
            onChoose={handleOnChoose}
            onError={handleError}
          />
        ) : elegido ? (
          <Agradecer />
        ) : (
          <Recomendar />
        )}
      </div>
    </div>
  );
};

export default Queue;

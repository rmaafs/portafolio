import React, { useState } from "react";
import Buscador from "./Buscador/Buscador";
import "./Queue.css";

const Queue = () => {
  const [buscando, setBuscando] = useState(false);
  const [elegido, setElegido] = useState(false);

  const handleOnChoose = () => {
    setBuscando(false);
    setElegido(true);
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
      <div className="agradecer">
        <i className={"fa fa-check fa-fw mr-2 v-align-middle"}></i>
        Tu canción se escuchará cuando se acabe esta.
        <br />
        ¡Gracias!
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

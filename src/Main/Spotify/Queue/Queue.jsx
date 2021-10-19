import React, { useState } from "react";
import Buscador from "./Buscador/Buscador";
import "./Queue.css";

const Queue = () => {
  const [buscando, setBuscando] = useState(false);

  return (
    <div className="queue-container">
      <div className="queue">
        {buscando ? (
          <Buscador onClose={() => setBuscando(false)} />
        ) : (
          <div className="recomendar" onClick={() => setBuscando(true)}>
            <i className={"fa fa-plus fa-fw mr-2 v-align-middle"}></i>
            Recomendar canción
          </div>
        )}
      </div>
    </div>
  );
};

export default Queue;

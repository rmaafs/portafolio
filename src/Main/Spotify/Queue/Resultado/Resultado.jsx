import React from "react";
import "./Resultado.css";

const Resultado = ({ track }) => {
  return (
    <div className="resultado row">
      <i className={"fa fa-plus fa-fw icon-add"}></i>

      <div className="buscador-img-container">
        <img src={track.image.url} />
      </div>
      <div className="buscador-track text-left">
        <h2>{refactorLenght(track.name)}</h2>
        <h3>{track.artista}</h3>
      </div>
    </div>
  );
};

/**
 * Texto que miniza un texto largo y añade ... al final
 * @param {string} txt Texto a minimizar
 * @returns Retorna texto minimizado
 */
function refactorLenght(txt) {
  let length = 30;
  if (txt.length > length) {
    return txt.substring(0, length) + "...";
  }
  return txt;
}

export default Resultado;

import React, { useState } from "react";
import Resultado from "../Resultado/Resultado";
import "./Buscador.css";

const Buscador = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = React.useState(""); //Timer para esperar cuando escriba algo
  const [track, setTrack] = React.useState(undefined);

  /**
   * Esta funcionalidad lo que hará es, cuando deje de escribir,
   * esperar X tiempo para hacer la petición para buscar por filtros.
   */
  React.useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (text.length > 0) {
        search(true);
      }
    }, 1000);
    return () => clearTimeout(timeOutId);
  }, [text]);

  const handleOnChange = (e) => {
    const currentText = e.target.value;
    setText(currentText);
    if (currentText.length <= 0) {
      setLoading(false);
      setTrack(undefined);
    } else {
      setLoading(true);
    }
  };

  const search = () => {
    console.warn("Buscando..." + text);
    fetch("https://api.rmaafs.com/spotify/search?q=" + text)
      .then((data) => data.json())
      .then((json) => {
        if (!json.error) {
          setTrack(json);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className="buscador-container">
      <div className="buscador">
        <input
          type="text"
          placeholder="Canción o artista..."
          onChange={handleOnChange}
        />
        <i
          className={"fa fa-close fa-fw icon-close"}
          onClick={() => onClose()}
        ></i>

        {loading || track ? (
          <Resultado track={track} loading={loading} />
        ) : null}
      </div>
    </div>
  );
};

export default Buscador;

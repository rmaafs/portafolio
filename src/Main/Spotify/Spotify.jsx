import React, { useEffect, useState } from "react";
import HelpIcon from "../HelpIcon";
import Card from "./Card/Card";
import "./Spotify.css";

const Spotify = () => {
  const URL = "https://api.rmaafs.com/spotify/current-track";

  const [track, setTrack] = useState({});

  const fetchData = async () => {
    return new Promise((resolve, reject) => {
      fetch(URL)
        .then((data) => data.json())
        .then((json) => {
          setTrack(json);
          resolve(json);
        })
        .catch((err) => {
          console.warn(err);
          reject(err);
        });
    });
  };

  const handleFinishSong = async () => {
    return fetchData();
  };

  const NoEscuchando = () => {
    return (
      <div className="sp-title">
        Por ahora no estoy escuchando nada.
        <br />
        Vuelve pronto y mira la magia 😊
      </div>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="sp-container">
      <div className="sp-title row">
        ¿Qué estoy escuchando en este momento?{" "}
        <HelpIcon style={{ bottom: null, paddingLeft: "5px" }}>
          Te muestro la canción que estoy escuchando justo en este momento en
          Spotify.
          <br />
          Este componente lo hice yo mismo desde 0 😄
          <br />
          <br />
          Uso la API de Spotify y se conecta con mi
          <br />
          propia API REST.
          <br />
          <br />
          🔅 Una API REST, en pocas palabras es tener un acceso controlado a las
          bases de datos o recursos de algún proyecto.
        </HelpIcon>
      </div>

      {track && track.progress ? (
        <Card track={track} onFinishSong={handleFinishSong} />
      ) : (
        <NoEscuchando />
      )}
    </div>
  );
};

export default Spotify;

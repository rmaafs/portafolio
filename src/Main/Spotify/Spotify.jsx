import React, { Fragment, useEffect, useState, useContext } from "react";
import { useLanguage } from "../../hooks/LanguageContext/useLanguageContext";
import HelpIcon from "../HelpIcon";
import Card from "./Card/Card";
import Queue from "./Queue/Queue";
import "./Spotify.css";

const Spotify = () => {
  const URL = "https://api.rmaafs.com/spotify/current-track";

  const { lang } = useContext(useLanguage);
  const [track, setTrack] = useState({});
  const language = lang.principal.spotify;

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
        <br />
        <a
          href="https://github.com/rmaafs/portafolio/pull/22#issuecomment-946394957"
          target="_blank"
          rel="noreferrer"
        >
          Click para ver una imagen de demostración
        </a>
      </div>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="sp-container">
      <div className="sp-title row">
        {language.what_im_listening}{" "}
        <HelpIcon style={{ bottom: null, paddingLeft: "5px" }}>
          {language.description}
        </HelpIcon>
      </div>

      {track && track.progress ? (
        <Fragment>
          <Card track={track} onFinishSong={handleFinishSong} />
          <Queue />
        </Fragment>
      ) : (
        <NoEscuchando />
      )}
    </div>
  );
};

export default Spotify;

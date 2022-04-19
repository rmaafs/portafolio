import React, { Fragment, useContext, useState } from "react";
import Buscador from "./Buscador/Buscador";
import { useLanguage } from "../../../hooks/LanguageContext/useLanguageContext";
import "./Queue.css";

const Queue = () => {
  const { lang } = useContext(useLanguage);

  const [buscando, setBuscando] = useState(false);
  const [elegido, setElegido] = useState(false);
  const [msgError, setMsgError] = useState("");

  const language = lang.principal.spotify;

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
        {language.recommend_song}
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
          <Fragment>{language.song_successfull}</Fragment>
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

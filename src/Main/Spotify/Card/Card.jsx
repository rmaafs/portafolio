import React, { Fragment, useEffect, useState } from "react";
import SpinBars from "../SpinBars/SpinBars";
import "./Card.css";

const Card = ({ track, onFinishSong }) => {
  const [progressBar, setProgressBar] = useState(0);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(track.duration);
  let spProgress = track.progress - 1000;

  /**
   * Función que formatea un timestamp a string
   * @param {timestamp} time Timestamp
   * @returns String del tiempo formateado
   */
  const formatTime = (time) => {
    time = time / 1000;
    var sec_num = parseInt(time, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor(sec_num / 60) % 60;
    var seconds = sec_num % 60;

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
  };

  /**
   * Función que resetea los timers cuando se cambia de canción
   */
  const setNewTrack = () => {
    setProgressBar(0);
    setProgress(track.progress);
    setDuration(track.duration);

    spProgress = track.progress - 1000;
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

  /**
   * Función que se ejecutará cada cierto tiempo para actualizar el progress bar
   */
  const tickTimer = () => {
    if (!track || !track.image) return;

    //console.warn("Tick", spProgress);
    if (spProgress < 0) spProgress = 0;
    spProgress += 1000;

    //Si la canción ya ha acabado...
    if (spProgress > duration) {
      spProgress = duration;
      track = {};
      setTimeout(function () {
        onFinishSong().then((newTrack) => {
          track = newTrack;
          setNewTrack();
        });
      }, 3000);
      return;
    }

    const newProgress = (spProgress * 100) / duration;
    setProgressBar(newProgress);

    setProgress(spProgress);
  };

  useEffect(() => {
    setInterval(function () {
      tickTimer();
    }, 1000);
  }, []);

  const RenderInfo = () => {
    return (
      <Fragment>
        <div className="sp-spin-container">
          <SpinBars />
        </div>

        <div className="sp-img-container">
          <img src={track.image.url} />
        </div>
        <div className="sp-track text-left">
          <h2>{refactorLenght(track.name)}</h2>
          <h3>{track.artista}</h3>
        </div>

        <div className="sp-progress-container col-md-12 row">
          <div className="col-2 sp-progress-time">{formatTime(progress)}</div>
          <div className="col-8">
            <div className="sp-progress text-left">
              <div
                className="sp-progress-bar"
                style={{
                  width: progressBar + "%",
                }}
              ></div>
            </div>
          </div>
          <div className="col-2 sp-progress-time">{formatTime(duration)}</div>
        </div>
      </Fragment>
    );
  };

  return (
    <div className="sp-card row">{track && track.image && <RenderInfo />}</div>
  );
};

export default Card;

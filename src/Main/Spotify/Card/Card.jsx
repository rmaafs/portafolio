import React, { Fragment } from "react";
import SpinBars from "../SpinBars/SpinBars";
import "./Card.css";

const Card = ({ track }) => {
  const RenderInfo = () => {
    return (
      <Fragment>
        <SpinBars />

        <div className="sp-img-container">
          <img src={track.image.url} />
        </div>
        <div className="sp-track text-left">
          <h2>{track.name}</h2>
          <h3>{track.artista}</h3>
        </div>
      </Fragment>
    );
  };

  return (
    <div className="sp-card row">{track && track.image && <RenderInfo />}</div>
  );
};

export default Card;

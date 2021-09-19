import React from "react";
import "./Card.css";

const Card = ({ track }) => {
  return (
    <div className="sp-card row">
      <div className="sp-img-container">
        <img src={track.image.url} />
      </div>
      <div className="sp-track text-left">
        <h2>{track.name}</h2>
        <h3>{track.artista}</h3>
      </div>
    </div>
  );
};

export default Card;

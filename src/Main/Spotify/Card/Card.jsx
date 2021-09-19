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

        <div className="sp-progress-container col-md-12 row">
          <div className="col-md-2 sp-progress-time">0:00</div>
          <div className="col-md-8">
            <div className="sp-progress text-left">
              <div
                className="sp-progress-bar"
                style={{
                  width: "40%",
                }}
              ></div>
            </div>
          </div>
          <div className="col-md-2 sp-progress-time">4:03</div>
        </div>
      </Fragment>
    );
  };

  return (
    <div className="sp-card row">{track && track.image && <RenderInfo />}</div>
  );
};

export default Card;

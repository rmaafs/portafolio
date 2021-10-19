import React from "react";
import Resultado from "../Resultado/Resultado";
import "./Buscador.css";

const Buscador = () => {
  const track = {
    duration: 195666,
    url: "https://open.spotify.com/track/1bx7OUl2UmAnA5oZkm9If7",
    id: "1bx7OUl2UmAnA5oZkm9If7",
    name: "Jerk It Out",
    artista: "Caesars",
    image: {
      height: 640,
      url: "https://i.scdn.co/image/ab67616d0000b273b2bf866a8c5bd281353ea1f1",
      width: 640,
    },
  };

  return (
    <div className="buscador">
      <input type="text" placeholder="Canción o artista..." />

      <Resultado track={track} />
    </div>
  );
};

export default Buscador;

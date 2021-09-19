import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import "./Spotify.css";

const Spotify = () => {
  //const URL = "https://api.rmaafs.com/spotify/current-track";

  const [track, setTrack] = useState({});

  const fetchData = () => {
    setTrack({
      progress: 210352,
      is_playing: true,
      duration: 243960,
      url: "https://open.spotify.com/track/36lqt57OHqk48BVFzPDEKt",
      id: "36lqt57OHqk48BVFzPDEKt",
      name: "Midnight City",
      artista: "M83",
      image: {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b27307e66d3237a8d19f51a7ac08",
        width: 640,
      },
    });
    /*fetch(URL)
      .then((data) => data.json())
      .then((json) => {
        console.warn(json);
      })
      .catch((err) => {
        console.warn(err);
      });*/
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="sp-container">
      <Card track={track} />
    </div>
  );
};

export default Spotify;

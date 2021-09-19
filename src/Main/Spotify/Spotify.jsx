import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="sp-container">
      {track && track.progress && (
        <Card track={track} onFinishSong={handleFinishSong} />
      )}
    </div>
  );
};

export default Spotify;

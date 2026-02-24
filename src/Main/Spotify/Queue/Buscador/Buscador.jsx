import React, { useContext, useState } from "react";
import Resultado from "../Resultado/Resultado";
import { useLanguage } from "../../../../hooks/LanguageContext/useLanguageContext";
import "./Buscador.css";

const Buscador = ({ onClose, onChoose, onError }) => {
  const { lang } = useContext(useLanguage);

  const [loading, setLoading] = useState(false);
  const [text, setText] = React.useState(""); //Timer para esperar cuando escriba algo
  const [track, setTrack] = React.useState(undefined);

  const language = lang.principal.spotify;

  /**
   * Esta funcionalidad lo que hará es, cuando deje de escribir,
   * esperar X tiempo para hacer la petición para buscar por filtros.
   */
  React.useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (text.length > 0) {
        search(true);
      }
    }, 1000);
    return () => clearTimeout(timeOutId);
  }, [text]);

  const handleOnChange = (e) => {
    const currentText = e.target.value;
    setText(currentText);
    if (currentText.length <= 0) {
      setLoading(false);
      setTrack(undefined);
    } else {
      setLoading(true);
    }
  };

  const search = () => {
    fetch("https://api-worker.rmaafs.com/spotify/search?q=" + text)
      .then((data) => data.json())
      .then((json) => {
        if (!json.error) {
          setTrack(json);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const handleChoose = async () => {
    setLoading(true);
    await fetch("https://api-worker.rmaafs.com/spotify/queue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ track: track.id }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.error) {
          onChoose();
        } else {
          onError(data.error);
        }
      })
      .catch((err) => {
        onError(err);
      });
  };

  return (
    <div className="buscador-container row">
      <div className="buscador">
        <input
          type="text"
          placeholder={language.label_artist}
          onChange={handleOnChange}
        />
        <i
          className={"fa fa-close fa-fw icon-close"}
          onClick={() => onClose()}
        ></i>

        {loading || track ? (
          <Resultado track={track} loading={loading} onChoose={handleChoose} />
        ) : null}
      </div>
    </div>
  );
};

export default Buscador;

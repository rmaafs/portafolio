import React, { useContext } from "react";
import { useLanguage } from "../../hooks/LanguageContext/useLanguageContext";
import ContactComponent from "../LeftSidebar/ContactComponent/ContactComponent";
import Spotify from "../Spotify/Spotify";
import Gorrito from "./Gorrito/Gorrito";
import Planetas from "./Planetas/Planetas";
import "./Presentacion.css";
import imgUs from "../../assets/lang/EN_us.png";
import imgEs from "../../assets/lang/ES_mx.png";
import HeartRate from "./HeartRate/HeartRate";

const Presentacion = () => {
  const { lang, updateLang } = useContext(useLanguage);
  const isNavidad = new Date().getMonth() + 1 === 12;

  const handleDownloadCV = () => {
    window.open("/cv.pdf", "_blank");
  };

  const Bandera = ({ image, title, lang }) => {
    return (
      <div className="col-6 bandera" onClick={() => updateLang(lang)}>
        <img src={image} />
        <legend>{title}</legend>
      </div>
    );
  };

  return (
    <div className="col-12 presentacion">
      <div className="row">
        <div className="row col-12 banderas">
          <Bandera image={imgUs} title="English" lang="EN_us" />
          <Bandera image={imgEs} title="Español" lang="ES_mx" />
        </div>
        <div className="col-12">
          <Planetas />

          <img
            alt="Rodrigo Maafs Atilano"
            src="https://avatars.githubusercontent.com/u/47652130?s=300&amp;u=e14efd0723cc525183525917bb108188e2cc1bde&amp;v=4"
            className="circle mb-3"
            style={{ maxWidth: 150, border: "2px solid #d100ff" }}
          />

          {isNavidad && <Gorrito />}

          <HeartRate />
        </div>

        <div className="col-12 mt-2 mb-5">
          <span>{lang.principal.hello}</span>
          <br />
          <span>{lang.principal.occupation}</span>

          <div className="col-12 mt-1">
            <div className="row contact-list">
              <ContactComponent
                type="github"
                link="https://github.com/rmaafs"
                title="GitHub"
              />
              <ContactComponent
                type="linkedin"
                link="https://www.linkedin.com/in/rmaafs/"
                title="Linkedin"
              />
              <ContactComponent
                type="twitter"
                link="https://twitter.com/royendero"
                title="Twitter"
              />
              <ContactComponent
                type="instagram"
                link="https://instagram.com/relmaps"
                title="Instagram"
              />
              <ContactComponent
                type="facebook"
                link="https://www.facebook.com/ElMaps/"
                title="Facebook"
              />
              <ContactComponent
                type="email"
                link="mailto:contact@rmaafs.com"
                title="Email"
              />
            </div>

            <button className="btn-download-cv mb-4" onClick={handleDownloadCV}>
              {lang.principal.download_cv}
            </button>
          </div>

          <Spotify />
        </div>
      </div>
    </div>
  );
};

export default Presentacion;

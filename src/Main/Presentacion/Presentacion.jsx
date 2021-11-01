import React from "react";
import ContactComponent from "../LeftSidebar/ContactComponent/ContactComponent";
import Spotify from "../Spotify/Spotify";
import Gorrito from "./Gorrito/Gorrito";
import Planetas from "./Planetas/Planetas";
import "./Presentacion.css";

const Presentacion = () => {
  return (
    <div className="col-12 presentacion">
      <div className="row">
        <div className="col-12">
          <Planetas />

          <img
            alt="Rodrigo Maafs Atilano"
            src="https://avatars.githubusercontent.com/u/47652130?s=300&amp;u=e14efd0723cc525183525917bb108188e2cc1bde&amp;v=4"
            className="circle mb-3"
            style={{ maxWidth: 150, border: "2px solid #d100ff" }}
          />

          <Gorrito />
        </div>

        <div className="col-12 mt-4 mb-5">
          <span>👋 Hola, soy Rodrigo Maafs Atilano</span>
          <br />
          <span>Estudiante de Ingeniería en Sistemas Computacionales</span>

          <div className="col-12 mt-4">
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
                link="mailto:rodrigoelmaps@gmail.com"
                title="Gmail"
              />
            </div>
          </div>

          <Spotify />
        </div>
      </div>
    </div>
  );
};

export default Presentacion;

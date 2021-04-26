import React from "react";
import ContactComponent from "../LeftSidebar/ContactComponent/ContactComponent";
import Colors from "../../Colors";
import "./Presentacion.css";

const Presentacion = () => {
  return (
    <div className="col-12 presentacion">
      <div className="row">
        <div className="col-12">
          <img
            alt="Rodrigo Maafs Atilano"
            src="https://avatars.githubusercontent.com/u/47652130?s=460&amp;u=e14efd0723cc525183525917bb108188e2cc1bde&amp;v=4"
            className="circle mb-3"
            style={{ maxWidth: 150 }}
          />
        </div>

        <div className="col-12">
          <span>Hola, soy Rodrigo Maafs Atilano</span>
          <br />
          <span>Estudiante de Ingeniería en Sistemas Computacionales</span>

          <div className="col-12 mt-4">
            <div className="row contact-list">
              <ContactComponent
                type="github"
                link="https://github.com/rmaafs"
                username="rmaafs"
              />
              <ContactComponent
                type="linkedin"
                link="https://github.com/rmaafs"
                username="/in/rmaafs"
              />
              <ContactComponent
                type="twitter"
                link="https://twitter.com/royendero"
                username="@royendero"
              />
              <ContactComponent
                type="instagram"
                link="https://instagram.com/relmaps"
                username="@relmaps"
              />
              <ContactComponent
                type="facebook"
                link="https://www.facebook.com/ElMaps/"
                username="@ElMaps"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentacion;

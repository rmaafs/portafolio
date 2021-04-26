import React from "react";
import "./AboutMe.css";
import yo_paisaje from "../../assets/yo_paisaje.png";

const AboutMe = () => {
  return (
    <div className="col-12 aboutme">
      <div className="row">
        <div className="col-md-6 col-12">
          <h1 className="numbered-heading">
            <span>About Me</span>
          </h1>

          <div
            className="col-12"
            style={{
              paddingTop: 20,
            }}
          >
            <span>
              ¡Hola! Soy Rodrigo, me gusta la tecnología, me encanta crear e
              inovar cosas. Mis intereses son las nuevas tecnologías y
              comunicarlas entre ellas para solucionar problemas. Me gusta
              empezar desde el FrontEnd, hasta la cultura DevOps implementada en
              mi propio servidor y encargarme de la seguridad. Me gusta aprender
              cosas nuevas.
            </span>
            <br />
            <br />
            <span>
              Actualmente estudio el penúltimo semestre en la Benemérita
              Universidad Autónoma de Aguascalientes, y trabajando en una
              empresa de desarrollo de Sistemas Web y aplicaciones móviles, Apps
              Camelot.
            </span>
            <br />
            <br />
            <span>
              Actualmente estoy trabajando personal y profesionalmente en estas
              tecnologías:
              <ul>
                <li>C++</li>
                <li>Java</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>React Native</li>
                <li>Angular</li>
                <li>Python</li>
              </ul>
            </span>
          </div>
        </div>

        <div className="col-md-6 col-12 img-container">
          <img src={yo_paisaje} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import "./AboutMe.css";
import yo_paisaje from "../../assets/yo_paisaje.png";
import Colors from "../../Colors";

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
              ¡Hola! Soy Rodrigo. Me gusta la tecnología en general. Desde el
              FrontEnd, hasta la cultura DevOps y encargarme de la seguridad.
              ¡Me gusta la inovación!
            </span>
            <br />
            <br />
            <span>
              Estudio el penúltimo semestre en la{" "}
              <a
                href="https://uaa.mx/"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: Colors.colors.primary_span,
                }}
              >
                Benemérita Universidad Autónoma de Aguascalientes
              </a>
              , y trabajo en una empresa de desarrollo de Sistemas Web y
              aplicaciones móviles en{" "}
              <a
                href="https://appscamelot.com/"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: Colors.colors.primary_span,
                }}
              >
                Apps Camelot
              </a>
              .
            </span>
            <br />
            <br />
            <span>
              Actualmente trabajo personal y profesionalmente con:
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
                <li>PHP</li>
                <li>Express</li>
                <li>Kotlin</li>
              </ul>
            </span>
          </div>
        </div>

        <div className="col-md-6 col-12 img-container">
          <img src={yo_paisaje} alt="Yo en mi universidad" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

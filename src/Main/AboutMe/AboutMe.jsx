import React from "react";
import "./AboutMe.css";
import yo_paisaje from "../../assets/yo_paisaje.png";
import Colors from "../../Colors";
import ListItem from "./ListItemComponent/ListItem";

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
            <span>Me gusta la tecnología en general. Desde el FrontEnd, hasta la
              cultura DevOps y encargarme de la seguridad. ¡Me gusta la
              inovación!
            </span>
            <br />
            <br />
            <span> Estudio el último semestre en la{" "}
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
                <ListItem
                  text="C++"
                  icon="c"
                  href="https://es.wikipedia.org/wiki/C%2B%2B"
                />
                <ListItem
                  text="Java"
                  icon="java"
                  href="https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)"
                />
                <ListItem
                  text="HTML"
                  icon="html5"
                  href="https://es.wikipedia.org/wiki/HTML"
                />
                <ListItem
                  text="CSS"
                  icon="css"
                  href="https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada"
                />
                <ListItem
                  text="Javascript"
                  icon="js"
                  href="https://es.wikipedia.org/wiki/JavaScript"
                />
                <ListItem
                  text="React"
                  icon="react"
                  href="https://es.wikipedia.org/wiki/React"
                />
                <ListItem
                  text="React Native"
                  icon="react"
                  href="https://en.wikipedia.org/wiki/React_Native"
                />
                <ListItem
                  text="Angular"
                  icon="angular"
                  href="https://es.wikipedia.org/wiki/Angular_(framework)"
                />
                <ListItem
                  text="Python"
                  icon="py"
                  href="https://es.wikipedia.org/wiki/Python"
                />
                <ListItem
                  text="PHP"
                  icon="php"
                  href="https://es.wikipedia.org/wiki/PHP"
                />
                <ListItem
                  text="Express"
                  icon="nodejs"
                  href="https://en.wikipedia.org/wiki/Express.js"
                />
                <ListItem
                  text="Kotlin"
                  icon="kotlin"
                  href="https://es.wikipedia.org/wiki/Kotlin_(lenguaje_de_programaci%C3%B3n)"
                />
              </ul>
            </span>
          </div>
        </div>

        <div className="col-md-6 col-12 img-container">
          <picture>
            <img src={yo_paisaje} alt="Yo en mi universidad" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

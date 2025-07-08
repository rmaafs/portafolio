import React, { useContext } from "react";
import { useLanguage } from "../../hooks/LanguageContext/useLanguageContext";
import "./AboutMe.css";
import Colors from "../../Colors";
import ListItem from "./ListItemComponent/ListItem";

import yo_paisaje from "../../assets/yo/yo_paisaje.png";
import yo_casinos from "../../assets/yo/yo_casinos.png";
import yo_escritorio from "../../assets/yo/yo_escritorio.png";
import yo_guitarra from "../../assets/yo/yo_guitarra.png";
import yo_nieve from "../../assets/yo/yo_nieve.png";
import yo_playa from "../../assets/yo/yo_playa.png";
import yo_titulo from "../../assets/yo/yo_titulo.png";
import yo_vaquero from "../../assets/yo/yo_vaquero.png";
import yo_vegas_letrero from "../../assets/yo/yo_vegas_letrero.png";
import yo_vegas from "../../assets/yo/yo_vegas.png";
import yo_heli from "../../assets/yo/yo_heli.png";
import yo_heli2 from "../../assets/yo/yo_heli2.png";
import { useState } from "react";
import { useEffect } from "react";

const AboutMe = () => {
  const { lang } = useContext(useLanguage);
  const language = lang.aboutme;
  const IMAGES = [
    yo_vegas_letrero,
    yo_escritorio,
    yo_casinos,
    yo_nieve,
    yo_paisaje,
    yo_titulo,
    yo_heli,
    yo_heli2,
    yo_vegas,
    yo_guitarra,
    yo_playa,
    yo_vaquero,
  ];

  const [currentIndexImage, setIndexImage] = useState(0);
  useEffect(() => {
    const preLoadNextImage = () => {
      // Obtener el siguiente índice de imagen
      const nextIndex = (currentIndexImage + 1) % IMAGES.length;

      // Precargar la siguiente imagen
      const nextImage = new Image();
      nextImage.src = IMAGES[nextIndex];

      // Actualizar el índice después de que la imagen se haya precargado
      nextImage.onload = () => {
        // Añadir la clase para iniciar la animación de fadeout
        document
          .getElementById("img_wrapper")
          .classList.add("img-animation-fadeout");
        document
          .getElementById("img_wrapper")
          .classList.remove("img-animation-fadein");

        setTimeout(function () {
          document.getElementById("image_me").src = nextImage.src;
          // Animar fadein
          document
            .getElementById("img_wrapper")
            .classList.add("img-animation-fadein");
          document
            .getElementById("img_wrapper")
            .classList.remove("img-animation-fadeout");

          setIndexImage(nextIndex);
        }, 1000);
      };
    };

    // Esperar 10 segundos antes de precargar la siguiente imagen
    const timeoutId = setTimeout(preLoadNextImage, 5000);

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timeoutId);
  }, [currentIndexImage]);

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
            <span>{language.description}</span>
            <br />
            <br />
            <span>
              {language.experience[0]}
              <a
                href="https://uaa.mx/"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: Colors.colors.primary_span,
                }}
              >
                {language.experience[1]}
              </a>
              {language.experience[2]}
              <a
                href="https://www.playstudios.com/"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: Colors.colors.primary_span,
                }}
              >
                {language.experience[3]}
              </a>
              .
            </span>
            <br />
            <br />
            <span>
              {language.techs}
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
                  text="PHP"
                  icon="php"
                  href="https://es.wikipedia.org/wiki/PHP"
                />
                <ListItem
                  text="Python"
                  icon="py"
                  href="https://es.wikipedia.org/wiki/Python"
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
          <div className="img-wrapper" id="img_wrapper">
            <img id="image_me" src={IMAGES[0]} alt={"Rodrigo Maafs Atilano"} />
            <div className="img-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

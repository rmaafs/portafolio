import React, { useEffect } from "react";

import imgEuropa from "../../assets/europa.png";
import imgPaisaje from "../../assets/yo_paisaje.png";
import gorrito from "../../assets/gorro.png";

const PreImageLoader = ({ onFinish }) => {
  const isNavidad = new Date().getMonth() + 1 === 12;

  const imagesPreload = [
    imgEuropa,
    "https://avatars.githubusercontent.com/u/47652130?s=300&u=e14efd0723cc525183525917bb108188e2cc1bde&v=4",
    imgPaisaje,
  ];
  let imagesLoaded = 0;

  //Si es Navidad, precargamos el gorrito
  if (isNavidad) {
    imagesPreload.push(gorrito);
  }

  useEffect(() => {
    setTimeout(() => {
      preLoadImages();
    }, 500);
  }, []);

  const readyImg = () => {
    if (++imagesLoaded === imagesPreload.length) {
      onFinish();
    }
  };

  function preLoadImages() {
    imagesPreload.forEach((image) => {
      const newImage = new Image();
      newImage.src = image;
      window[image] = newImage;

      waitForImageToLoad(newImage).then(() => readyImg());
    });
  }

  function waitForImageToLoad(imageElement) {
    return new Promise((resolve) => {
      imageElement.onload = resolve;
    });
  }

  return <div></div>;
};

export default PreImageLoader;

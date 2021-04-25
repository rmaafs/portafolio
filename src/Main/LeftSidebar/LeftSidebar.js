import React from "react";
import ContactComponent from "./ContactComponent/ContactComponent";

const LeftSidebar = () => {
  return (
    <React.Fragment>
      <div className="flex-self-stretch border-md-right border-gray-light bg-white col-md-5 col-lg-4 col-xl-3 px-4 px-md-6 px-lg-7 py-6">
        <img
          alt="Rodrigo Maafs Atilano"
          src="https://avatars.githubusercontent.com/u/47652130?s=460&amp;u=e14efd0723cc525183525917bb108188e2cc1bde&amp;v=4"
          className="circle mb-3"
          style={{ maxWidth: 150 }}
        />
        <h1 className="mb-2 lh-condensed">
          Rodrigo
          <br />
          Maafs Atilano
        </h1>
        <p className="mb-1 f4 text-gray">Computer Systems Engineer</p>
        <span
          title="Benemérita Universidad Autónoma de Aguascalientes"
          className="d-inline-block f5 rounded-2 text-white bg-green py-1 px-2 mb-3"
        >
          Student
        </span>
        <div className="f4 mb-6">
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
          <ContactComponent
            type="email"
            link="mailto:rodrigoelmaps@gmail.com"
            username="rodrigoelmaps@gmail.com"
          />
          <ContactComponent
            type="email"
            link="mailto:rodrigo@appscamelot.com"
            username="rodrigo@appscamelot.com"
          />
          <ContactComponent type="map" username="Jalisco, México" />
          <ContactComponent type="map" username="localhost" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LeftSidebar;

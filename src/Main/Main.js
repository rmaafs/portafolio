import * as React from "react";
import LeftSidebar from "./LeftSidebar/LeftSidebar";

const Main = () => {
  return (
    <React.Fragment>
      <div class="d-md-flex border-md-bottom">
        <LeftSidebar />

        <div className="col-md-7 col-lg-8 col-xl-9 px-4 py-6 px-lg-7 border-top border-md-top-0 bg-gray-light">
          <div className="mx-auto" style={{ maxWidth: 900 }}>
            <h2>Sitio en desarrollo</h2>
            <p class="f4 mb-4 text-gray">
              Estoy creando esta página en mis tiempos libres :)
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;

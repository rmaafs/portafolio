/*
 * Loaders portados desde "react-loadingg" (MIT). Ver Loaders.css para el
 * detalle de la extracción. Se conserva la API original: cada loader recibe una
 * prop `color` y se posiciona centrado sobre toda la pantalla.
 */
import React from "react";
import "./Loaders.css";

const DEFAULT_COLOR = "#fff";

/*
 * La librería original aplicaba este posicionamiento como style inline, no como
 * clase. Es importante conservarlo así: varias clases de loader declaran
 * `position: relative` o `margin`, y en la cascada original el inline ganaba.
 * Moverlo al CSS invertiría esa precedencia y descolocaría los loaders.
 */
const ROOT_STYLE = {
  margin: "auto",
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

/**
 * Envoltorio común a todos los loaders. Reproduce el contenedor absoluto de la
 * librería original y expone el color como variable CSS para que las reglas
 * hijas lo hereden.
 */
const LoaderRoot = ({ className, color, children }) => (
  <div
    className={className}
    style={{ ...ROOT_STYLE, "--loader-color": color || DEFAULT_COLOR }}
  >
    {children}
  </div>
);

export const PointSpreadLoading = ({ color }) => (
  <LoaderRoot className="ldg-point-spread" color={color}>
    <div className="ldg-point-spread__dot" />
    <div className="ldg-point-spread__dot" />
    <div className="ldg-point-spread__dot" />
    <div className="ldg-point-spread__dot" />
  </LoaderRoot>
);

export const CommonLoading = ({ color }) => (
  <LoaderRoot className="ldg-common" color={color}>
    <div className="ldg-common__arm">
      <span className="ldg-common__dot" />
    </div>
    <div className="ldg-common__arm">
      <span className="ldg-common__dot" />
    </div>
    <div className="ldg-common__arm">
      <span className="ldg-common__dot" />
    </div>
    <div className="ldg-common__arm">
      <span className="ldg-common__dot" />
    </div>
  </LoaderRoot>
);

export const WindMillLoading = ({ color }) => (
  <LoaderRoot className="ldg-windmill" color={color}>
    <div className="ldg-windmill__hub" />
    <div className="ldg-windmill__blades">
      <div className="ldg-windmill__blade" />
      <div className="ldg-windmill__blade" />
      <div className="ldg-windmill__blade" />
    </div>
  </LoaderRoot>
);

export const MeteorRainLoading = ({ color }) => (
  <LoaderRoot className="ldg-meteor" color={color}>
    {Array.from({ length: 9 }, (_, i) => (
      <div className="ldg-meteor__drop" key={i} />
    ))}
  </LoaderRoot>
);

export const SemipolarLoading = ({ color }) => (
  <LoaderRoot className="ldg-semipolar" color={color}>
    {Array.from({ length: 5 }, (_, i) => (
      <div className="ldg-semipolar__ring" key={i} />
    ))}
  </LoaderRoot>
);

export const SolarSystemLoading = ({ color }) => (
  <LoaderRoot className="ldg-solar" color={color}>
    <div className="ldg-solar__sun" />
    <div className="ldg-solar__earth-orbit">
      <div className="ldg-solar__earth" />
    </div>
    <div className="ldg-solar__venus-orbit">
      <div className="ldg-solar__venus" />
    </div>
  </LoaderRoot>
);

export const BatteryLoading = ({ color }) => (
  <LoaderRoot className="ldg-battery" color={color} />
);

export const CoffeeLoading = ({ color }) => (
  <LoaderRoot className="ldg-coffee" color={color} />
);

export const EatLoading = ({ color }) => (
  <LoaderRoot className="ldg-eat" color={color}>
    <div className="ldg-eat__mouth" />
  </LoaderRoot>
);

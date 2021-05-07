import React, { useEffect, useState } from "react";
import Colors from "../../../Colors";
import "./Deploy.css";

const Deploy = () => {
  const [deploys, setDeploy] = useState([]);

  let showXDeploys = 10; //Número de deploys a mostrar en la lista

  useEffect(() => {
    const fetchDeployments = () => {
      fetch("https://api.github.com/repos/rmaafs/portafolio/deployments")
        .then((response) => response.json())
        .then((jsonData) => {
          if (jsonData.length > 0) {
            setDeploy(jsonData);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchDeployments();
  }, []);

  return (
    <div className="col-12 col-md-4 mt-8">
      <span className="span-row">Y el deploy en mi servidor...</span>

      <div className="col-12 ci-cd-deploy mt-2">
        {deploys.length > 0 ? (
          <a
            href="https://github.com/rmaafs/portafolio/deployments/activity_log?environment=github-pages"
            target="_blank"
            rel="noreferrer"
          >
            {deploys[0].environment}
          </a>
        ) : (
          "-"
        )}

        <div>
          <ul>
            {deploys.length > 0 ? (
              deploys.map((deploy, i) => {
                if (i >= showXDeploys) return true;
                return [getDeploy(deploy, i)];
              })
            ) : (
              <span style={{ paddingLeft: 16 }}>
                No se encontraron deploys.
              </span>
            )}
          </ul>

          <a
            className="more-commits"
            href="https://github.com/rmaafs/portafolio/deployments/activity_log?environment=github-pages"
            target="_blank"
            rel="noreferrer"
          >
            y otros {deploys.length - showXDeploys} deploys más...
          </a>
        </div>
      </div>
    </div>
  );
};

const getDeploy = (deploy, i) => {
  return (
    <li key={i} className="text-commit">
      Deploy
      <span
        style={{
          color: Colors.colors.primary_span,
        }}
      >
        {" "}
        #{deploy.id + " "}
      </span>
      {timeSince(deploy.created_at)}
    </li>
  );
};

//Obtenemos el time lapse que transcurrió
function timeSince(time) {
  switch (typeof time) {
    case "number":
      break;
    case "string":
      time = +new Date(time);
      break;
    case "object":
      if (time.constructor === Date) time = time.getTime();
      break;
    default:
      time = +new Date();
  }
  var time_formats = [
    [60, "segundos", 1], // 60
    [120, "un minuto", "un minuto"], // 60*2
    [3600, "minutos", 60], // 60*60, 60
    [7200, "una hora", "una hora"], // 60*60*2
    [86400, "horas", 3600], // 60*60*24, 60*60
    [172800, "Ayer", "Mañana"], // 60*60*24*2
    [604800, "días", 86400], // 60*60*24*7, 60*60*24
    [1209600, "una semana", "Next week"], // 60*60*24*7*4*2
    [2419200, "semanas", 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, "un mes", "Next month"], // 60*60*24*7*4*2
    [29030400, "meses", 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, "un año", "Next year"], // 60*60*24*7*4*12*2
    [2903040000, "años", 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    [5806080000, "un siglo", "Next century"], // 60*60*24*7*4*12*100*2
    [58060800000, "siglos", 2903040000], // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
  ];
  var seconds = (+new Date() - time) / 1000,
    token = "hace",
    list_choice = 1;

  if (seconds === 0) {
    return "Hace un instante";
  }
  if (seconds < 0) {
    seconds = Math.abs(seconds);
    //token = "from now";
    list_choice = 2;
  }
  var i = 0,
    format;
  while ((format = time_formats[i++]))
    if (seconds < format[0]) {
      if (typeof format[2] === "string") return format[list_choice];
      else
        return token + " " + Math.floor(seconds / format[2]) + " " + format[1];
    }
  return time;
}

export default Deploy;

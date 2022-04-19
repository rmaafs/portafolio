import React, { useContext, useEffect, useState } from "react";
import { useLanguage } from "../../../hooks/LanguageContext/useLanguageContext";
import ScrollAnimation from "react-animate-on-scroll";
import Colors from "../../../Colors";
import "./Deploy.css";

const Deploy = () => {
  const { lang, langName } = useContext(useLanguage);
  const [deploys, setDeploy] = useState([]);

  const language = lang.cicd;
  const SHOW_X_DEPLOYS = 10; //Número de deploys a mostrar en la lista

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

  const getDeploy = (deploy, i) => {
    return (
      <ScrollAnimation key={i} animateIn="animate__fadeIn" offset={0}>
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
          {timeSince(deploy.created_at, langName === "EN_us")}
        </li>
      </ScrollAnimation>
    );
  };

  return (
    <div className="col-12 col-md-4 mt-8">
      <ScrollAnimation animateIn="animate__fadeIn" offset={0}>
        <span className="span-row">{language.deploy}</span>

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
                  if (i >= SHOW_X_DEPLOYS) return true;
                  return [getDeploy(deploy, i)];
                })
              ) : (
                <span style={{ paddingLeft: 16 }}>
                  {language.deploy_not_found}
                </span>
              )}
            </ul>

            <ScrollAnimation animateIn="animate__fadeIn" offset={0}>
              <a
                className="more-commits"
                href="https://github.com/rmaafs/portafolio/deployments/activity_log?environment=github-pages"
                target="_blank"
                rel="noreferrer"
              >
                {language.more_deploys}
              </a>
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

//Obtenemos el time lapse que transcurrió
function timeSince(time, isEnglish = true) {
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
    [60, "seconds", 1], // 60
    [120, "1 minute", "1 minute"], // 60*2
    [3600, "minutes", 60], // 60*60, 60
    [7200, "1 hour", "1 hour"], // 60*60*2
    [86400, "hours", 3600], // 60*60*24, 60*60
    [172800, "Yesterday", "Tomorrow"], // 60*60*24*2
    [604800, "days", 86400], // 60*60*24*7, 60*60*24
    [1209600, "1 weel", "Next week"], // 60*60*24*7*4*2
    [2419200, "weeks", 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, "1 month", "Next month"], // 60*60*24*7*4*2
    [29030400, "months", 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, "1 year", "Next year"], // 60*60*24*7*4*12*2
    [2903040000, "years", 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    [5806080000, "1 century", "Next century"], // 60*60*24*7*4*12*100*2
    [58060800000, "centuries", 2903040000], // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
  ];

  if (!isEnglish) {
    time_formats = [
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
  }

  var seconds = (+new Date() - time) / 1000,
    token = isEnglish ? "ago" : "hace",
    list_choice = 1;

  if (seconds === 0) {
    return isEnglish ? "Few moments ago" : "Hace un instante";
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
      let msg = "";
      if (typeof format[2] === "string") {
        msg = format[list_choice];
      } else {
        msg = Math.floor(seconds / format[2]) + " " + format[1];
      }

      if (isEnglish) {
        return msg + " " + token;
      } else {
        return token + " " + msg;
      }
    }
  return time;
}

export default Deploy;

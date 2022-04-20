import React, { Fragment, useContext, useEffect, useState } from "react";
import { useLanguage } from "../../../hooks/LanguageContext/useLanguageContext";
import HelpIcon from "../../HelpIcon";
import "./HeartRate.css";

const HeartRate = () => {
  const { lang, langName } = useContext(useLanguage);
  const [rate, setRate] = useState(undefined);
  const [time, setTime] = useState(undefined);
  const [velocity, setVelocity] = useState("1.0");

  const language = lang.principal.heart;

  useEffect(() => {
    getLastHeartRate();
  }, []);

  const getLastHeartRate = () => {
    fetch("https://api.rmaafs.com/fitness/heart")
      .then((data) => data.json())
      .then((json) => {
        if (json.value) {
          const time = Number(json.time.substring(0, 13));
          setRate(json.value);
          setTime(time);

          if (json.value >= 150) {
            setVelocity("0.4");
          } else if (json.value >= 120) {
            setVelocity("0.5");
          } else if (json.value >= 100) {
            setVelocity("0.6");
          } else if (json.value >= 80) {
            setVelocity("0.8");
          } else if (json.value >= 60) {
            setVelocity("1.0");
          } else {
            setVelocity("1.3");
          }
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className="col-12" style={{ position: "relative" }}>
      <div className="heart-container">
        <div
          className="heart-rate"
          style={{
            minHeight: "20px",
          }}
        >
          {rate && (
            <Fragment>
              <HelpIcon
                style={{
                  bottom: null,
                  paddingLeft: "5px",
                  top: "-6px",
                  right: "-26px",
                  position: "absolute",
                }}
              >
                {language.map((line, i) => (
                  <Fragment key={i}>
                    {line.includes("{LAST_UPDATE}")
                      ? line.replaceAll(
                          "{LAST_UPDATE}",
                          timeSince(time, langName === "EN_us")
                        )
                      : line}
                    <br />
                  </Fragment>
                ))}
              </HelpIcon>
              <div
                className="heart"
                style={{ animation: "animateHeart " + velocity + "s infinite" }}
              >
                <div className="rate-count">{rate}</div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

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

export default HeartRate;

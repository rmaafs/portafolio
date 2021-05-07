import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Colors from "../../../Colors";
import "./Repositorio.css";

const Repositorio = () => {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    const fetchRepos = () => {
      fetch("https://api.github.com/repos/rmaafs/portafolio/commits")
        .then((response) => response.json())
        .then((jsonData) => {
          setCommits(jsonData);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchRepos();
  }, []);

  return (
    <div className="col-12 col-md-4 mt-8">
      <ScrollAnimation animateIn="animate__fadeIn" offset={0}>
        <span className="span-row">Desde el código...</span>

        <div className="col-12 ci-cd-repo mt-2">
          <svg
            className="octicon octicon-repo mr-2 color-text-secondary flex-shrink-0"
            height="20"
            viewBox="0 0 16 16"
            version="1.1"
            width="20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              fill={Colors.colors.primary}
              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
            ></path>
          </svg>
          <a href="https://github.com/rmaafs/" target="_blank" rel="noreferrer">
            rmaafs
          </a>
          <span> / </span>
          <a
            href="https://github.com/rmaafs/portafolio"
            target="_blank"
            rel="noreferrer"
          >
            portafolio
          </a>

          <ul>
            {commits.length > 0 ? (
              commits.map((commit, i) => {
                if (i >= 5) return true;
                return [getCommit(commit, i)];
              })
            ) : (
              <span style={{ paddingLeft: 16 }}>
                No se encontraron commits.
              </span>
            )}
          </ul>

          <ScrollAnimation animateIn="animate__fadeIn" offset={0}>
            <a
              className="more-commits"
              href="https://github.com/rmaafs/portafolio/commits/master"
              target="_blank"
              rel="noreferrer"
            >
              y otros {commits.length - 5} commits más...
            </a>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    </div>
  );
};

const getCommit = (commit, i) => {
  let autor = commit.author ? commit.commit.author.name : "Rodrigo Maafs";
  let imgProfile = commit.author
    ? commit.author.avatar_url
    : "https://avatars.githubusercontent.com/u/47652130?v=4";

  return (
    <ScrollAnimation animateIn="animate__fadeIn" offset={0}>
      <li key={i} className="text-commit">
        <a href={commit.html_url} target="_blank" rel="noreferrer">
          {refactorLenght(commit.commit.message)}
        </a>

        <div className="commit-info">
          <img
            alt={autor}
            src={imgProfile}
            className="circle"
            style={{ maxWidth: 20 }}
          />

          <span className="commit-author">{commit.commit.author.name}</span>
          <span className="commit-date">
            {"· " + timeSince(commit.commit.author.date)}
          </span>
        </div>
      </li>
    </ScrollAnimation>
  );
};

function refactorLenght(txt) {
  let length = 35;
  if (txt.length > length) {
    return txt.substring(0, length) + "...";
  }
  return txt;
}

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

export default Repositorio;

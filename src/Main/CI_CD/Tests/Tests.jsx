import React, { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Tests.css";

const Tests = () => {
  const [run, setRun] = useState({});
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJob = (url) => {
      fetch(url)
        .then((response) => response.json())
        .then((jsonData) => {
          setJobs(jsonData.jobs[0].steps);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const fetchActions = () => {
      fetch("https://api.github.com/repos/rmaafs/portafolio/actions/runs")
        .then((response) => response.json())
        .then((jsonData) => {
          if (jsonData.workflow_runs.length > 0) {
            const testBuildDeploy = jsonData.workflow_runs.find((it) =>
              it.name.includes("Build and Deploy")
            );
            if (testBuildDeploy) {
              setRun(testBuildDeploy);
              fetchJob(testBuildDeploy.jobs_url);
            }
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchActions();
  }, []);

  return (
    <div className="col-12 col-md-4 mt-8">
      <ScrollAnimation animateIn="animate__fadeIn" offset={0}>
        <span className="span-row">Los tests (CI) en cada push...</span>

        <div className="col-12 ci-cd-tests mt-2">
          {run.conclusion === "success" ? (
            <svg
              width="16"
              height="16"
              className="octicon octicon-check-circle-fill"
              viewBox="0 0 16 16"
              version="1.1"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                fill="#2ea043"
                d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.78-9.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z"
              ></path>
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              className="octicon octicon-x-circle-fill"
              viewBox="0 0 16 16"
              version="1.1"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                fill="#f85149"
                d="M2.343 13.657A8 8 0 1113.657 2.343 8 8 0 012.343 13.657zM6.03 4.97a.75.75 0 00-1.06 1.06L6.94 8 4.97 9.97a.75.75 0 101.06 1.06L8 9.06l1.97 1.97a.75.75 0 101.06-1.06L9.06 8l1.97-1.97a.75.75 0 10-1.06-1.06L8 6.94 6.03 4.97z"
              ></path>
            </svg>
          )}

          <a href={run.html_url} target="_blank" rel="noreferrer">
            {run.head_commit ? refactorLenght(run.head_commit.message) : "-"}
          </a>

          <ul>
            {jobs.length > 0 ? (
              jobs.map((job, i) => {
                return [getJob(job, i)];
              })
            ) : (
              <span style={{ paddingLeft: 16 }}>No se encontraron jobs.</span>
            )}
          </ul>
        </div>
      </ScrollAnimation>
    </div>
  );
};

const getJob = (job, i) => {
  return (
    <ScrollAnimation key={i} animateIn="animate__fadeIn" offset={0}>
      <li key={i}>
        {job.conclusion === "success" ? (
          <svg
            aria-label="1 / 1 checks OK"
            className="octicon octicon-check"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            role="img"
          >
            <path
              fillRule="evenodd"
              fill="#2ea043"
              d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
            ></path>
          </svg>
        ) : (
          <svg
            aria-label="0 / 1 checks OK"
            className="octicon octicon-x"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            role="img"
          >
            <path
              fillRule="evenodd"
              fill="#f85149"
              d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
            ></path>
          </svg>
        )}
        {job.name + " · "}
        <span className="job-time">
          {timeSince(job.started_at, job.completed_at)}
        </span>
      </li>
    </ScrollAnimation>
  );
};

function refactorLenght(txt) {
  let length = 28;
  if (txt.length > length) {
    return txt.substring(0, length) + "...";
  }
  return txt;
}

//Obtenemos el time lapse que duró el job
function timeSince(start, end) {
  start = new Date(start);
  end = new Date(end);
  var time_formats = [
    [60, "s", 1], // 60
    [120, "1m", "1m"], // 60*2
    [3600, "m", 60], // 60*60, 60
    [7200, "1h", "1h"], // 60*60*2
    [86400, "h", 3600], // 60*60*24, 60*60
  ];
  var seconds = (+end - start) / 1000,
    list_choice = 1;

  if (seconds === 0) {
    return "0s";
  }
  if (seconds < 0) {
    seconds = Math.abs(seconds);
    list_choice = 2;
  }
  var i = 0,
    format;
  while ((format = time_formats[i++]))
    if (seconds < format[0]) {
      if (typeof format[2] === "string") return format[list_choice];
      else return Math.floor(seconds / format[2]) + format[1];
    }
  return start;
}

export default Tests;

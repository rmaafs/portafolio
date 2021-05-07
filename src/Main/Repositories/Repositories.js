import React, { useEffect, useState, useRef } from "react";
import RepoComponent from "./RepoComponent/RepoComponent";

export function useFirstRender() {
  const firstRender = useRef(true);
  useEffect(() => {
    firstRender.current = false;
  }, []);
  return firstRender.current;
}

const Repositories = () => {
  const firstRender = useFirstRender();
  const [repos, setRepos] = useState([]);

  let showThisRepos = [
    348843782, //alert-port-scanner
    319228785, //abecedarioSenas
    352274008, //mpx-framework
    339649900, //mapsflix
    181842540, //Magalaxy
    222047220, //Tienda
  ];

  useEffect(() => {
    if (firstRender) {
      fetchRepos();
    }
  }, [firstRender]);

  const fetchRepos = () => {
    fetch("https://api.github.com/users/rmaafs/repos")
      .then((response) => response.json())
      .then((jsonData) => {
        //Filtramos para que únicamente estén los que queremos mostrar
        setRepos(jsonData.filter((repo) => showThisRepos.includes(repo.id)));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="col-md-12">
      {repos.length > 0 ? (
        <span className="text-muted" style={{ color: "#AEB7C0" }}>
          Algunos de mis repositorios en{" "}
          <a href="https://github.com/rmaafs" rel="noreferrer" target="_blank">
            GitHub
          </a>
          <br />
        </span>
      ) : (
        ""
      )}

      <div className="col-md-12">
        <div className="row">
          {repos.length > 0 ? (
            repos.map((repo, i) => {
              return [<RepoComponent key={i} repo={repo} />];
            })
          ) : (
            <span style={{ paddingLeft: 16 }}>
              No se encontraron repositorios.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Repositories;

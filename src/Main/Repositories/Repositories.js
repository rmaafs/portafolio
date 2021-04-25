import React, { useEffect, useState } from "react";
import RepoComponent from "./RepoComponent/RepoComponent";

const Repositories = () => {
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
    return () => {
      fetch("https://api.github.com/users/rmaafs/repos")
        .then((response) => response.json())
        .then((jsonData) => {
          //jsonData is parsed json object received from urlssss
          console.log(jsonData);

          //Filtramos para que únicamente estén los que queremos mostrar
          setRepos(jsonData.filter((repo) => showThisRepos.includes(repo.id)));
        })
        .catch((error) => {
          console.error(error);
        });
    };
  }, []);

  return (
    <div className="col-md-12">
      <span className="text-muted" style={{ color: "#AEB7C0" }}>
        Algunos de mis repositorios en{" "}
        <a href="https://github.com/rmaafs" rel="noreferrer" target="_blank">
          GitHub
        </a>
        <br />
      </span>

      <div className="col-md-12">
        <div className="row">
          {repos.length > 0
            ? repos.map((repo, i) => {
                return [<RepoComponent key={i} repo={repo} />];
              })
            : "No se encontraron repositorios."}
        </div>
      </div>
    </div>
  );
};

export default Repositories;

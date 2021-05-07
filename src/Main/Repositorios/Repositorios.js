import React, { useEffect, useState, useRef } from "react";
import Colors from "../../Colors";
import RepoComponent from "../Repositories/RepoComponent/RepoComponent";
import ScrollAnimation from "react-animate-on-scroll";
import "./Repositorios.css";

export function useFirstRender() {
  const firstRender = useRef(true);
  useEffect(() => {
    firstRender.current = false;
  }, []);
  return firstRender.current;
}

const Repositorios = () => {
  const firstRender = useFirstRender();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (firstRender) {
      let showThisRepos = [
        348843782, //alert-port-scanner
        319228785, //abecedarioSenas
        352274008, //mpx-framework
        339649900, //mapsflix
        181842540, //Magalaxy
        222047220, //Tienda
      ];

      const fetchRepos = () => {
        fetch("https://api.github.com/users/rmaafs/repos")
          .then((response) => response.json())
          .then((jsonData) => {
            //Filtramos para que únicamente estén los que queremos mostrar
            setRepos(
              jsonData.filter((repo) => showThisRepos.includes(repo.id))
            );
          })
          .catch((error) => {
            console.error(error);
          });
      };

      fetchRepos();
    }
  }, [firstRender]);

  return (
    <ScrollAnimation animateIn="animate__fadeIn" offset={350}>
      <div className="col-xs-12 col-md-6 no-padding repositorios">
        <h1 className="numbered-heading">
          <span>Repositorios</span>
        </h1>
      </div>

      <div
        className="col-12"
        style={{
          paddingTop: 20,
        }}
      >
        {repos.length > 0 ? (
          <span>
            Algunos de mis repositorios en{" "}
            <a
              href="https://github.com/rmaafs"
              rel="noreferrer"
              target="_blank"
              style={{
                color: Colors.colors.primary_span,
              }}
            >
              GitHub
            </a>
            <br />
          </span>
        ) : (
          ""
        )}

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
    </ScrollAnimation>
  );
};

export default Repositorios;

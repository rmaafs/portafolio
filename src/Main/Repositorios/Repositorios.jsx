import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  Fragment,
} from "react";
import { useLanguage } from "../../hooks/LanguageContext/useLanguageContext";
import Colors from "../../Colors";
import RepoComponent from "./RepoComponent/RepoComponent";
import ScrollAnimation from "react-animate-on-scroll";
import "./Repositorios.css";
import HelpIcon from "../HelpIcon";

export function useFirstRender() {
  const firstRender = useRef(true);
  useEffect(() => {
    firstRender.current = false;
  }, []);
  return firstRender.current;
}

const Repositorios = () => {
  const { lang } = useContext(useLanguage);
  const language = lang.repositories;

  const firstRender = useFirstRender();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (firstRender) {
      let showThisRepos = [
        348843782, //alert-port-scanner
        319228785, //abecedarioSenas
        408293276, //plantita
        339649900, //mapsflix
        469524832, //crypt-me-front
        408052818, //rmaafs-api
      ];

      const fetchRepos = (page = 1) => {
        fetch("https://api.github.com/users/rmaafs/repos?page=" + page)
          .then((response) => response.json())
          .then((jsonData) => {
            //Filtramos para que únicamente estén los que queremos mostrar
            setRepos((prevRepos) => [
              ...prevRepos,
              ...jsonData.filter((repo) => showThisRepos.includes(repo.id)),
            ]);
          })
          .catch((error) => {
            console.error(error);
          });
      };

      fetchRepos(1);
      fetchRepos(2);
    }
  }, [firstRender]);

  return (
    <ScrollAnimation animateIn="animate__fadeIn" offset={350}>
      <div className="col-xs-12 col-md-6 no-padding repositorios">
        <h1 className="numbered-heading">
          <span>{language.title}</span>
          <HelpIcon>
            {language.tooltip.map((line, i) => (
              <Fragment key={i}>
                {line}
                <br />
              </Fragment>
            ))}
          </HelpIcon>
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
            {language.description}
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
            <span style={{ paddingLeft: 16 }}>{language.repos_dont_found}</span>
          )}
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Repositorios;

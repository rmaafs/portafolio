import React, { Fragment } from "react";
import Colors from "../../../Colors";

const RepoComponent = (props) => {
  return (
    <Fragment>
      <div
        className="col-xs-12 col-md-6 col-lg-4 repo-box"
        style={{ padding: 15 }}
      >
        <div
          className="col-12"
          style={{
            maxWidth: 436,
            backgroundColor: "#0C1F38",
            border: "1px solid",
            borderColor: Colors.colors.primary_border,
            borderRadius: 10,
            padding: 15,
          }}
        >
          <div className="col-md-12">
            <svg
              className="octicon octicon-repo mr-2 color-text-secondary flex-shrink-0"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                fill={Colors.colors.primary}
                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
              ></path>
            </svg>
            <a
              href={props.repo.html_url}
              rel="noreferrer"
              target="_blank"
              style={{ fontWeight: "bold", color: Colors.colors.primary_span }}
            >
              {props.repo.name}
            </a>
          </div>

          <div className="col-md-12">
            <p
              style={{
                fontSize: 12,
                paddingTop: 10,
                height: 62,
                color: "#CCD6F6",
              }}
            >
              {props.repo.description}
            </p>
          </div>

          <div className="col-md-12">
            <div className="row text-muted">
              <div className="col-4">
                <span style={{ fontSize: 12 }}>{props.repo.language}</span>
              </div>
              <div className="col-4 text-center">
                <svg
                  className="octicon octicon-star mr-1"
                  viewBox="0 0 14 16"
                  version="1.1"
                  width="14"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    fill="#787E87"
                    d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                  ></path>
                </svg>
                <span style={{ fontSize: 12 }}>
                  {props.repo.stargazers_count}
                </span>
              </div>
              <div className="col-4 text-right">
                <svg
                  className="octicon octicon-git-branch mr-1"
                  viewBox="0 0 10 16"
                  version="1.1"
                  width="10"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    fill="#787E87"
                    d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                  ></path>
                </svg>
                <span style={{ fontSize: 12 }}>{props.repo.forks_count}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RepoComponent;

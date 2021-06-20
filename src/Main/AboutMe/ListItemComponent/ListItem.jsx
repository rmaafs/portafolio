import React, { useState } from "react";
import "./ListItem.css";

const ListItem = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={
        hover
          ? "hover-list-icon hover-list-icon-" + props.icon
          : "list-tech-icon"
      }
    >
      <a href={props.href} target="_blank">
        {props.text}
      </a>
    </li>
  );
};

export default ListItem;

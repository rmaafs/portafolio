import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Tooltip = ({ children, ...props }) => (
  <Tippy arrow {...props}>
    {children}
  </Tippy>
);

export default Tooltip;

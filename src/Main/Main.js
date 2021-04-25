import * as React from "react";
import LeftSidebar from "./LeftSidebar/LeftSidebar";

const Main = () => {
  return (
    <React.Fragment>
      <div class="d-md-flex border-md-bottom">
        <LeftSidebar />
      </div>
    </React.Fragment>
  );
};

export default Main;

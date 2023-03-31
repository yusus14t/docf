import React from "react";
import "../../assets.web/css/style.css";
import "../../assets.web/css/theme-colors/color5.css";
// import "../../assets.web/css/jquery-ui.min.css"
import WebHeader from "./WebHeader";

const WebLayout = ({ children }) => {
  return (
    <div>
      <WebHeader />
      {children}
    </div>
  );
};

export default WebLayout;

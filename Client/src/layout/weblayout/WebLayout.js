import React from "react";
import "../../assets.web/css/style.css";
import "../../assets.web/css/custom.css";




import WebHeader from "./WebHeader";
import WebFooter from "./WebFooter";


const WebLayout = ({ children }) => {
  return (
    <div>
      <WebHeader />
      {children}
      <WebFooter />
    </div>
  );
};

export default WebLayout;

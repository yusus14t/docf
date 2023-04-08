import React from "react";
import { Outlet } from "react-router-dom";

import "../../assets.web/css/style.css";
import "../../assets.web/css/custom.css";

import WebHeader from "./WebHeader";
import WebFooter from "./WebFooter";

const WebLayout = () => {
  return (
    <div>
      <WebHeader />
        <Outlet />
      <WebFooter />
    </div>
  );
};

export default WebLayout;

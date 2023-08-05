import React from "react";
import { Outlet } from "react-router-dom";

import "../../assets.app/css/style.css";
import "../../assets.app/css/custom.css";

import WebHeader from "./WebHeader";
import WebFooter from "./WebFooter";

const WebLayout = () => {
  return (
    <>
      <WebHeader />
      <Outlet />
      <div style={{position:'relative',bottom:"0"}} className="">
        <WebFooter />
      </div>
    </>
  );
};

export default WebLayout;

import React from "react";
import { Outlet } from "react-router-dom";
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

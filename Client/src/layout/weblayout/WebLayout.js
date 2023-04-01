import React from "react";
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

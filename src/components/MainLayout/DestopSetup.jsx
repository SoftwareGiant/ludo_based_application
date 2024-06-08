import React from "react";
import { Outlet } from "react-router-dom";
import DestopAppDetails from "./DestopAppDetails";

const DestopSetup = ({ children }) => {
  return (
    <div className="sm:flex">
      <Outlet />
      <DestopAppDetails />
    </div>
  );
};

export default DestopSetup;

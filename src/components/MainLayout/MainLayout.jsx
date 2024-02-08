import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import TopbarMobile from "./TopbarMobile";

const MainLayout = () => {
  return (
    <div>
      {/* <div className="hidden sm:hidden">
        <TopbarMobile />
      </div> */}
      <div className="flex ">
        <Sidebar />
       
          <Outlet /> 
          {/* Renders matched route content here */}
       
      </div>
    </div>
  );
};

export default MainLayout;

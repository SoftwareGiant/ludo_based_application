import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import TopbarMobile from "./TopbarMobile";

const MainLayout = () => {
  return (
    <div>
      <div>
        <TopbarMobile />
      </div>
      <div className="flex ">
        <Sidebar />
        <main className="main-content">
          {/* <Outlet />  */}
          {/* Renders matched route content here */}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import SuperAdminTopbar from "./SuperAdminTopbar";
import SuperAdminSidebar from "./SuperAdminSidebar";

const SuperAdminLayout = ({children}) => {
  return (
    <div className="bg-[#E6E6E6] box-border h-screen w-full">
      <SuperAdminTopbar/>
      <div className="flex gap-2 h-[91.6%] overflow-hidden">
        <SuperAdminSidebar />
        <Outlet/>
      </div>
    </div>
  );
};

export default SuperAdminLayout;

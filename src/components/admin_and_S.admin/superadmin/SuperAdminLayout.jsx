import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import SuperAdminTopbar from "./SuperAdminTopbar";
import SuperAdminSidebar from "./SuperAdminSidebar";
import { selectToken } from "../../app_start/authSlice";
import { useSelector } from "react-redux";

const SuperAdminLayout = ({children}) => {
  const token = useSelector(selectToken);

  if (!token) {
    return <Navigate to="/adminlogin" replace />;
  }
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

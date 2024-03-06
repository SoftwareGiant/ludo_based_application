import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../app_start/authSlice";

const AdminLayout = ({ children }) => {
  const token = useSelector(selectToken);
  if (!token) {
    return <Navigate to="/adminlogin" replace />;
  }
  return (
    <div className="bg-[#E6E6E6] box-border h-screen w-full">
      <AdminTopbar />
      <div className="flex gap-2 h-[91.6%] overflow-hidden">
        <AdminSidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;

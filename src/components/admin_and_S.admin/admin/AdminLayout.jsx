import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import { Outlet } from "react-router-dom";

const AdminLayout = ({children}) => {
  return (
    <div className="bg-[#E6E6E6] box-border h-screen w-full">
      <AdminTopbar/>
      <div className="flex gap-2 h-full overflow-hidden">
        <AdminSidebar />
        <Outlet/>
      </div>
    </div>
  );
};

export default AdminLayout;

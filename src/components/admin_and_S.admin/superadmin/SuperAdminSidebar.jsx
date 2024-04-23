import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const SuperAdminSidebar = () => {
  const [showFullSidebar, setShowFullSidebar] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setShowFullSidebar(!showFullSidebar);
  };

  return (
    <div
      className={`bg-[#FFFFFF] min-h-screen h-full  rounded-tr-3xl text-[#0F002B] text-[16px] font-bold font-[Nunito-Sans] overflow-hidden transition-all duration-300 ${
        showFullSidebar ? "w-[225px]  " : "w-[86px]  "
      } `}
    >
      <div className="flex flex-col pt-4 h-full">
        <div
          onClick={toggleSidebar}
          className="flex justify-start gap-4 h-[51px] items-center px-3  rounded-3xl m-1"
        >
          <Icon icon="ic:baseline-menu" width="24" />
          {showFullSidebar && <span>Menu</span>}
        </div>
        <Link to="/superadmin">
          <div
            className={`flex justify-start gap-4 items-center px-3 rounded-3xl m-1 cursor-pointer bg-[#EEEEEE] hover:bg-[#EEEEEE] h-[51px]`}
          >
            <Icon icon="material-symbols:dashboard-outline" width="24" />
            {showFullSidebar && <span>Dashboard</span>}
          </div>
        </Link>
        <Link to="/superadmin/notification">
          <div
            className={`flex justify-start gap-4 items-center px-3 rounded-3xl m-1 cursor-pointer ${
              location.pathname === "/superadmin/notification"
                ? "bg-[#EEEEEE]"
                : ""
            } hover:bg-[#EEEEEE] h-[51px]`}
          >
            <Icon icon="iconamoon:notification" width="24" />
            {showFullSidebar && <span>Notification</span>}
          </div>
        </Link>
        <Link to="/superadmin/admins">
          <div
            className={`flex justify-start gap-4 items-center px-3 rounded-3xl m-1 cursor-pointer ${
              location.pathname === "/superadmin/admins" ? "bg-[#EEEEEE]" : ""
            } hover:bg-[#EEEEEE] h-[51px]`}
          >
            <Icon icon="mingcute:user-4-line" width="24" />
            {showFullSidebar && <span>Admins</span>}
          </div>
        </Link>

        <Link to="/superadmin/tournaments">
          <div
            className={`flex justify-start gap-4 items-center px-3 rounded-3xl m-1 cursor-pointer ${
              location.pathname === "/superadmin/tournaments"
                ? "bg-[#EEEEEE]"
                : ""
            } hover:bg-[#EEEEEE] h-[51px]`}
          >
            <Icon icon="arcticons:battleforwesnoth" width="24" />
            {showFullSidebar && <span>Tournamnets</span>}
          </div>
        </Link>

        <Link to="/superadmin/customer">
          <div
            className={`flex justify-start gap-4 items-center px-3 rounded-3xl m-1 cursor-pointer ${
              location.pathname === "/superadmin/customer" ? "bg-[#EEEEEE]" : ""
            } hover:bg-[#EEEEEE] h-[51px]`}
          >
            <Icon icon="icon-park:customer" width="24" />
            {showFullSidebar && <span>Customers</span>}
          </div>
        </Link>

        <Link to="/superadmin/deposite">
          <div
            className={`flex justify-start gap-4 items-center px-3 rounded-3xl m-1 cursor-pointer ${
              location.pathname === "/superadmin/deposite" ? "bg-[#EEEEEE]" : ""
            } hover:bg-[#EEEEEE] h-[51px]`}
          >
            <Icon icon="vaadin:money-deposit" width="24" />
            {showFullSidebar && <span>Deposite</span>}
          </div>
        </Link>

        <Link to="/superadmin/withdrawal">
          <div
            className={`flex justify-start gap-4 items-center px-3 rounded-3xl m-1 cursor-pointer ${
              location.pathname === "/superadmin/withdrawal"
                ? "bg-[#EEEEEE]"
                : ""
            } hover:bg-[#EEEEEE] h-[51px]`}
          >
            <Icon icon="vaadin:money-withdraw" width="24" />
            {showFullSidebar && <span>Withdraw</span>}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SuperAdminSidebar;

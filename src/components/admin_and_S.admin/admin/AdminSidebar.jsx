import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
import kyc from "../../../assets/admin_Sadmin/admin/kycicon.svg";
import game from "../../../assets/admin_Sadmin/admin/game.svg";
import deposite from "../../../assets/admin_Sadmin/admin/deposite.svg";
import referal from "../../../assets/admin_Sadmin/admin/referral.svg";
import history from "../../../assets/admin_Sadmin/admin/history.svg";
import withdraw from "../../../assets/admin_Sadmin/admin/withdraw.svg";
import { Link, useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const AdminSidebar = () => {
  const [showFullSidebar, setShowFullSidebar] = useState(false);
  const location = useLocation();

  console.log(location.pathname);

  const toggleSidebar = () => {
    setShowFullSidebar(!showFullSidebar);
  };

  return (
    <div
      className={`bg-[#FFFFFF] min-h-screen h-100vw  rounded-tr-3xl text-[#0F002B] text-[16px] font-bold font-[Nunito-Sans] overflow-hidden transition-all duration-300 ${
        showFullSidebar ? "w-[225px]  " : "w-[86px]  "
      } `}
    >
      <div className="flex flex-col pt-4">
        <div
          onClick={toggleSidebar}
          className="flex justify-start gap-4 h-[51px] items-center px-3  rounded-3xl m-1"
        >
          <Icon icon="ic:baseline-menu" width="24" />
          {showFullSidebar && <span>Menu</span>}
        </div>
        <Link to="/newonboard">
          <div
            className={`flex justify-start gap-4 items-center px-3 rounded-3xl m-1 cursor-pointer bg-[#EEEEEE] hover:bg-[#EEEEEE] h-[51px]`}
          >
            <Icon icon="typcn:user-add-outline" width="24" />
            {showFullSidebar && <span>New Onboard</span>}
          </div>
        </Link>
        <Link to="/kycverification">
          <div
            className={`flex justify-start gap-4 items-center px-3 rounded-3xl m-1 cursor-pointer ${location.pathname==="/kycverification" ? "bg-[#EEEEEE]" :""} hover:bg-[#EEEEEE] h-[51px]`}
          >
            <img src={kyc} className="w-[24px] h-[24px]" />
            {showFullSidebar && <span>KYC Verification</span>}
          </div>
        </Link>
        <Link to="/admingamehistory">
          <div
            className={`flex justify-start gap-4 items-center px-3 rounded-3xl m-1 cursor-pointer ${location.pathname==="/admingamehistory" ? "bg-[#EEEEEE]" :""} hover:bg-[#EEEEEE] h-[51px]`}
          >
            <img src={game} className="w-[24px] h-[24px]" />
            {showFullSidebar && <span>Game History</span>}
          </div>
        </Link>

        <Link to="/admindeposite">
          <div
            className={`flex justify-start gap-4 items-center px-3 rounded-3xl m-1 cursor-pointer ${location.pathname==="/admindeposite" ? "bg-[#EEEEEE]" :""} hover:bg-[#EEEEEE] h-[51px]`}
          >
            <Icon icon="vaadin:money-deposit" width="24" />
            {showFullSidebar && <span>Deposite</span>}
          </div>
        </Link>

        <Link to="/adminwithdraw">
          <div
            className={`flex justify-start gap-4 items-center px-3 rounded-3xl m-1 cursor-pointer ${location.pathname==="/adminwithdraw" ? "bg-[#EEEEEE]" :""} hover:bg-[#EEEEEE] h-[51px]`}
          >
            <Icon icon="vaadin:money-withdraw" width="24" />
            {showFullSidebar && <span>Withdraw</span>}
          </div>
        </Link>

        <Link to="/adminreferral">
          <div
            className={`flex justify-start gap-4 items-center px-3 rounded-3xl m-1 cursor-pointer ${location.pathname==="/adminreferral" ? "bg-[#EEEEEE]" :""} hover:bg-[#EEEEEE] h-[51px]`}
          >
            <img src={referal} className="w-[24px] h-[24px]" />
            {showFullSidebar && <span>Referral Track</span>}
          </div>
        </Link>

        <Link to="/adminuserhistory">
          <div
            className={`flex justify-start gap-4 items-center px-3 rounded-3xl m-1 cursor-pointer ${location.pathname==="/adminuserhistory" ? "bg-[#EEEEEE]" :""} hover:bg-[#EEEEEE] h-[51px]`}
          >
            <img src={history} className="w-[24px] h-[24px]" />
            {showFullSidebar && <span>User History</span>}
          </div>
        </Link>

        <Link to="/adminsuport">
          <div
            className={`flex justify-start gap-4 items-center px-3 rounded-3xl m-1 cursor-pointer ${location.pathname==="/adminsuport" ? "bg-[#EEEEEE]" :""} hover:bg-[#EEEEEE] h-[51px]`}
          > 
            <Icon icon="fluent:person-support-28-regular" width="24" />
            {showFullSidebar && <span>Support</span>}
          </div>
        </Link>

        <Link to="/admincustomer">
          <div
            className={`flex justify-start gap-4 items-center px-3 rounded-3xl m-1 cursor-pointer ${location.pathname==="/admincustomer" ? "bg-[#EEEEEE]" :""} hover:bg-[#EEEEEE] h-[51px]`}
          >
            <Icon icon="streamline:customer-support-1" width="24" />
            {showFullSidebar && <span>Customer</span>}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;

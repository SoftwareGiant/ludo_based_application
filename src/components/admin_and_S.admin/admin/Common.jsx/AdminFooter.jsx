import React from "react";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";

const AdminFooter = ({ logohide }) => {
  console.log(logohide)
  return (
    <div className="bg-[#0F002B] p-20 px-32   flex flex-row justify-between w-full text-[#FFFFFF]">
      <div
        className={`flex-col h-full justify-center items-center ${
          logohide ? "hidden" : "flex"
        }`}
      >
        <span className="font-[Nunito-Sans] font-extrabold text-[36px]">
          LUDO KING
        </span>
        <span className=" font-oooh font-normal text-[24px]">punch line</span>
      </div>
      <div className="flex flex-col gap-3 font-[Nunito-Sans] text-[16px]">
        <div className="font-bold">Navigate</div>
        <div className="ml-3 flex flex-col gap-2 font-normal ">
          <Link to="/newonboard">New Onboard</Link>
          <Link to="/kycverification">KYC Verification</Link>{" "}
          <Link to="/newonboard">Battle Creation</Link>
          <Link to="/admingamehistory">Game History</Link>
          <Link to="/admindeposite">Deposit</Link>
          <Link to="/adminwithdraw">Withdraw</Link>
          <Link to="/adminreferral">Referral Track</Link>
          <Link to="/adminuserhistory">User History</Link>
          <Link to="/adminsuport"> Support</Link>
        </div>
      </div>

      <div className="flex flex-col gap-3 font-[Nunito-Sans] text-[16px]">
        <div className="font-bold">Useful Links</div>
        <div className="ml-3 flex flex-col gap-2 font-normal ">
          <Link to="">Tree Map</Link>
          <Link to="">Terms</Link>
          <Link to="">Cookies</Link>
          <Link to="">Resources</Link>
        </div>
      </div>
      <div className="flex flex-col gap-3 font-[Nunito-Sans] text-[16px]">
        <div className="font-bold">Contact</div>
        <div className="ml-3 flex flex-col gap-2 font-normal ">
          <Link to="" className="flex gap-2 justify-start items-center ">
            <Icon
              icon="ri:twitter-x-line"
              style={{ color: "white" }}
              width="24"
            />
            <span>Twitter</span>
          </Link>
          <Link to="" className="flex gap-2 justify-start items-center">
            <Icon
              icon="ic:outline-whatsapp"
              style={{ color: "white" }}
              width="24"
            />
            <span>Whatsapp</span>
          </Link>
          <Link to="" className="flex gap-2 justify-start items-center">
            <Icon
              icon="ic:round-facebook"
              style={{ color: "white" }}
              width="24"
            />
            <span>Facebook</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminFooter;

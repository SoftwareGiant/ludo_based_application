import React from "react";
import { Icon } from "@iconify-icon/react";

const AdminFooter = () => {
  return (
    <div className="bg-[#0F002B] p-20 flex flex-col md:flex-row justify-between w-full text-[#FFFFFF]">
      <div className="flex flex-col h-full justify-center items-center">
        <span className="font-[Nunito-Sans] font-extrabold text-[36px]">
          LUDO KING
        </span>
        <span className=" font-oooh font-normal text-[24px]">
          punch line
        </span>
      </div>
      <div className="flex flex-col gap-3 font-[Nunito-Sans] text-[16px]">
        <div className="font-bold">Navigate</div>
        <div className="ml-3 flex flex-col gap-2 font-normal ">
          <span>New Onboard</span>
          <span>KYC Verification</span>
          <span>Battle Creation</span>
          <span>Game History</span>
          <span>Deposit</span>
          <span>Withdraw</span>
          <span>Referral Track</span>
          <span>User History</span>
          <span>Support</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 font-[Nunito-Sans] text-[16px]">
        <div className="font-bold">Useful Links</div>
        <div className="ml-3 flex flex-col gap-2 font-normal ">
          <span>Tree Map</span>
          <span>Terms</span>
          <span>Cookies</span>
          <span>Resources</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 font-[Nunito-Sans] text-[16px]">
        <div className="font-bold">Contact</div>
        <div className="ml-3 flex flex-col gap-2 font-normal ">
          <div className="flex gap-2 justify-start items-center ">
            <Icon
              icon="ri:twitter-x-line"
              style={{ color: "white" }}
              width="24"
            />
            <span>Twitter</span>
          </div>
          <div className="flex gap-2 justify-start items-center">
            <Icon
              icon="ic:outline-whatsapp"
              style={{ color: "white" }}
              width="24"
            />
            <span>Whatsapp</span>
          </div>
          <div className="flex gap-2 justify-start items-center">
            <Icon
              icon="ic:round-facebook"
              style={{ color: "white" }}
              width="24"
            />
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFooter;

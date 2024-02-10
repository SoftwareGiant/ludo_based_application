import React from "react";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import { SidebarMob } from "./SidebarMob";
import { useNavigate } from "react-router-dom";
const TopbarMobile = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed bg-[#fead3a] top-0 w-full shadow-lg z-50">
    <div
      id="NotificationspaceRoot"
      className="bg-[#fead3a]  h-8 overflow-hidden"
    />
    <div className="bg-[#fead3a]  flex justify-between  w-full   h-[51px]  px-4">
      <div className="flex flex-row gap-3 items-start mt-3">
        <SidebarMob />
        <div className="flex flex-col text-[#0f002b] ">
          <div className="  text-base font-['Nunito_Sans'] font-extrabold ">
            LUDO KING
          </div>

          <div className="text-center text-base font-['Oooh_Baby'] font-normal  -mt-2">
            punch line
          </div>
        </div>
      </div>
      <img
      onClick={()=>navigate("/profile")}
        src={FrameProfile}
        alt="Frame1"
        className="w-[30px] h-[30px] mt-[9.5px] rounded-[100px] border border-solid border-white "
      />
    </div>
    </div>
  );
};

export default TopbarMobile;

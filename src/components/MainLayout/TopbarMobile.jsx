import React from "react";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import { SidebarMob } from "./SidebarMob";
import { useNavigate } from "react-router-dom";
import LudoMainLogo from "./LudoMainLogo";
import { ProfileButton } from "./ProfileButton";
const TopbarMobile = ({ isStart, handlestart }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed bg-[#fead3a] max-w-[480px] top-0 w-full shadow-lg z-50">
      <div
        id="NotificationspaceRoot"
        className="bg-[#fead3a]  h-8 overflow-hidden"
      />
      <div className="bg-[#fead3a]  flex justify-between items-center w-full   h-[51px]  px-4">
        <div className="flex flex-row gap-3 items-start mt-3">
          <SidebarMob />
          <LudoMainLogo/>
        </div>
        {isStart ? (
          <div
            className="bg-[#1E1E1E] px-4 flex justify-center items-center h-8 rounded-2xl text-white font-bold"
            onClick={handlestart}
          >
            Start
          </div>
        ) : (
          <ProfileButton/>
        )}
      </div>
    </div>
  );
};

export default TopbarMobile;

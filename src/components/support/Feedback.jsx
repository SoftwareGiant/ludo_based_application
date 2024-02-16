import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../app.css";

import AddGame from "../../assets/new_game/addgame.svg";
import Profile from "../../assets/new_game/profile.svg";
import WinCash from "../../assets/new_game/wincash.svg";
import Wallet from "../../assets/new_game/wallet.svg";
import GameHistory from "../../assets/new_game/history.svg";
import ReferEarn from "../../assets/new_game/refer&earn.svg";
import Notification from "../../assets/new_game/notification.svg";
import Support from "../../assets/new_game/support.svg";
import LiveBattle from "../../assets/new_game/livebattle.svg";
import HamBurger from "../../assets/profile/hamburger.svg";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import Back from "../../assets/profile/ep_back.svg";
import Favorite from "../../assets/new_game/fav.svg";
import BellIcon from "../../assets/new_game/notification.svg";
import Filter from "../../assets/new_game/filter.svg";
import Bank from "../../assets/wallet/bank.svg";
import Time from "../../assets/wallet/time.svg";
import AddCash from "../../assets/wallet/addCash.svg";
import Info from "../../assets/wallet/info.svg";
import Sidebar from "../MainLayout/Sidebar";
import { SidebarMob } from "../MainLayout/SidebarMob";

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  return (
<div className="max-w-[480px] w-full min-h-screen h-full">
      <div
        id="NotificationspaceRoot"
        className="bg-[#fead3a]  h-8 overflow-hidden"
      />
      <div className="bg-[#fead3a] flex flex-row justify-between max-w-[480px] w-full h-12 items-start pt-2 px-5 ">
        <div className="flex flex-row gap-3 w-2/5 items-start">
          <SidebarMob />
          <div className="relative flex flex-row justify-center w-24 items-start">
            <div className="text-center text-base font-['Nunito_Sans'] font-bold text-[#0f002b] absolute top-0 left-0 h-5 w-24">
              LUDO KING
            </div>
            <div className="text-center text-base font-['Oooh_Baby'] text-[#0f002b] relative mt-4">
              punch line
            </div>
          </div>
        </div>
        <img
          src={FrameProfile}
          alt="Frame1"
          className="mt-1 w-8 h-8 border rounded-[100px]"
        />
      </div>
      <div className="flex bg-[#fead3a] justify-between items-center px-4 py-2 w-full">
          <div className="flex gap-5 items-center">
            <img
              onClick={() => navigate("/")}
              src="https://file.rendit.io/n/Bh3TjQUvsgxuYLevIVW7.svg"
              alt="HardwareKeyboardBackspace icon"
              id="Epback"
              className="w-6"
            />
            <div
            onClick={()=>navigate("/")}
              id="LiveBattle13"
              className="cursor-pointer text-center text-xl font-['Inter'] text-[#0f002b]"
            >
              <span className="font-bold"> Feed </span> back
            </div>
          </div>
          <img
            onClick={() => navigate("/help")}
            src="https://file.rendit.io/n/ib8IMr1PTiCuwTfVAXZs.svg"
            alt="ActionInfoOutline icon"
            id="Icoutlineinfo"
            className="w-6"
          />
        </div>

      <div className="bg-[#0f002b] w-full min-h-screen overflow-hidden relative">
        <div className="bg-[#fead3a] h-[98%] w-[200%] rounded-[50%]   -top-20 absolute -left-[50%]" />
 
        <div className=" p-4 bg-[#FFFFFF] bg-opacity-20 shadow-md  flex flex-col w-4/5 m-auto rounded-lg mt-4 font-['Nunito-Sans'] relative">
          <textarea  placeholder="Please elaborate..." className="h-72 bg-transparent outline-none text-[Inter] font-medium text-[white] opacity-[60%]"/> 
        </div>
      </div>
    </div>
  );
};

export default Feedback;

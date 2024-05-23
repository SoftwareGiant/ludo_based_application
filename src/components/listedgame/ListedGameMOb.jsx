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
import React, { useState } from "react";
import "../../app.css";
import LudoMainLogo from "../MainLayout/LudoMainLogo";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { ProfileButton } from "../MainLayout/ProfileButton";

// import AddGame from "../../assets/new_game/addgame.svg";
// import Profile from "../../assets/new_game/profile.svg";
// import WinCash from "../../assets/new_game/wincash.svg";
// import Wallet from "../../assets/new_game/wallet.svg";
// import GameHistory from "../../assets/new_game/history.svg";
// import ReferEarn from "../../assets/new_game/refer&earn.svg";
// import Notification from "../../assets/new_game/notification.svg";
// import Support from "../../assets/new_game/support.svg";
// import LiveBattle from "../../assets/new_game/livebattle.svg";
// import Filter from "../../assets/new_game/filter.svg";
// import HamBurger from "../../assets/profile/hamburger.svg";
// import FrameProfile from "../../assets/profile/Frame_profile.png";
// import Back from "../../assets/profile/ep_back.svg";
// import Favorite from "../../assets/new_game/fav.svg";
// import BellIcon from "../../assets/new_game/notification.svg";

// import { Link, useNavigate } from "react-router-dom";
// import Sidebar from "../MainLayout/Sidebar";
// import { SidebarMob } from "../MainLayout/SidebarMob";

const ListedGameMOb = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-[480px] w-full min-h-screen h-full">
        <div
          id="NotificationspaceRoot"
          className="bg-[#fead3a]  h-8 overflow-hidden"
        />
        <div className="bg-[#fead3a] flex flex-row justify-between max-w-[480px] w-full h-12 items-start pt-2 px-5 ">
          <div className="flex flex-row gap-3 w-2/5 items-start">
            <SidebarMob />
         <LudoMainLogo/>
          </div>
          <ProfileButton/>
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
              id="LiveBattle13"
              className="text-center text-xl font-['Inter'] text-[#0f002b]"
            >
              <span className="font-bold"> listed </span> battle
            </div>
          </div>
          <Icon className="cursor-pointer" onClick={() => navigate("/help")} icon="material-symbols:info-outline" width={24}/>
        </div>
        <div className="bg-[#0f002b] w-full min-h-screen overflow-hidden relative">
          <div className="bg-[#fead3a] h-[98%] w-[200%] rounded-[50%]   -top-20 absolute -left-[50%]" />
          <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-4/5 m-auto rounded-lg  font-['Nunito-Sans'] relative mt-4">
            <div className="text-white bg-[#0f002b] flex flex-col gap-2 w-full rounded-tl-lg rounded-tr-lg">
              <div className="flex justify-between w-full items-center p-3">
                <span className=" shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] text-2xl font-bold">
                  AstroAvenger
                </span>
                <img
                  src="https://file.rendit.io/n/EKGwsROG9FFUCDscXujn.svg"
                  alt="Notofire"
                  id="Notofire"
                  className="mt-2 w-8"
                />
              </div>

              <div className="font-semibold text-[#60e560] shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex w-full items-center px-6 -mt-2  pb-4">
                232 Playing<span className="text-white"> </span>
                <span className="font-bold text-white">·</span>
                <span className="text-white"> </span>
                <span className="text-[#ff7676]">1 waiting</span>
              </div>
            </div>
            <div className="flex  w-full p-4 justify-between">
              <div className="flex text-xl font-['Inter'] font-bold text-[#0f002b] ">
                ₹ 501
              </div>
              <div
                onClick={() => navigate("/deposite")}
                className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex items-center p-2 rounded-lg flex-1 px-4 max-w-[80px] justify-center"
              >
                <div className="text-sm font-['Inter'] text-white">battle</div>
              </div>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-4/5 m-auto rounded-lg  font-['Nunito-Sans'] relative mt-4">
            <div className="text-white bg-[#0f002b] flex flex-col gap-2 w-full rounded-tl-lg rounded-tr-lg">
              <div className="flex justify-between w-full items-center p-3">
                <span className=" shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] text-2xl font-bold">
                  AstroAvenger
                </span>
                <img
                  src="https://file.rendit.io/n/EKGwsROG9FFUCDscXujn.svg"
                  alt="Notofire"
                  id="Notofire"
                  className="mt-2 w-8"
                />
              </div>

              <div className="font-semibold text-[#60e560] shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex w-full items-center px-6 -mt-2  pb-4">
                232 Playing<span className="text-white"> </span>
                <span className="font-bold text-white">·</span>
                <span className="text-white"> </span>
                <span className="text-[#ff7676]">1 waiting</span>
              </div>
            </div>
            <div className="flex  w-full p-4 justify-between">
              <div className="flex text-xl font-['Inter'] font-bold text-[#0f002b] ">
                ₹ 501
              </div>
              <div
                onClick={() => navigate("/deposite")}
                className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex items-center p-2 rounded-lg flex-1 px-4 max-w-[80px] justify-center"
              >
                <div className="text-sm font-['Inter'] text-white">battle</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListedGameMOb;

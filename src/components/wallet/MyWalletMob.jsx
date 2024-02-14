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

const MyWalletMob = () => {
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

      <div className="bg-[#0f002b] w-full min-h-screen overflow-hidden relative">
        <div className="bg-[#fead3a] h-[98%] w-[200%] rounded-[50%]   -top-20 absolute -left-[50%]" />
        <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-4/5 m-auto rounded-lg  font-['Nunito-Sans'] relative mt-4">
          <div className="text-white bg-[#0f002b] flex flex-col gap-2 w-full rounded-tl-lg rounded-tr-lg">
            <div className="flex justify-between w-full items-center p-3">
              <span className=" shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)]">
                Deposit Cash
              </span>
              <img src={Time} alt="lgihistory" id="lgihistory" />
            </div>
            <div className="text-xs font-semibold   shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex  justify-center items-center  w-full px-6 py-5 pb-8 ">
              Can be used to play Tournaments & Battles. Cannot be withdrawn to
              Paytm or Bank.
            </div>
          </div>
          <div className="flex  w-full p-4">
            <div className="flex text-xl font-['Inter'] font-bold text-[#0f002b] flex-1">
              ₹ 501
            </div>
            <div
              onClick={() => navigate("/deposite")}
              className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex items-center p-2 rounded-lg flex-1 max-w-[100px]"
            >
              <img
                src={AddCash}
                alt="Materialsymbolsadd"
                id="Materialsymbolsadd"
                className="w-4"
              />
              <div className="text-sm font-['Inter'] text-white">add cash</div>
            </div>
          </div>
        </div>
        <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-4/5 m-auto rounded-lg mt-4 font-['Nunito-Sans'] relative">
          <div className="text-white bg-[#0f002b] flex flex-col gap-2 w-full rounded-tl-lg rounded-tr-lg">
            <div className="flex justify-between w-full items-center p-3">
              <span className=" shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)]">
                Winning Cash
              </span>
              <img src={Time} alt="lgihistory" id="lgihistory" />
            </div>
            <div className="text-xs font-semibold   shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex  justify-center items-center  w-full px-6 py-5 pb-8  ">
              Can be used to play Tournaments & Battles. Withdrawn to Paytm or
              Bank.
            </div>
          </div>
          <div className="flex  w-full p-4">
            <div className="flex text-xl font-['Inter'] font-bold text-[#0f002b] flex-1">
              ₹ 1001
            </div>
            <div
              onClick={() => navigate("/withdraw")}
              className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-wrap items-center p-2 gap-2 rounded-lg flex-1 max-w-[110px]"
            >
              <img
                src={Bank}
                alt="Materialsymbolsadd"
                id="Materialsymbolsadd"
                className="w-4"
              />
              <div className="text-sm font-['Inter'] text-white">Withdraw</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWalletMob;

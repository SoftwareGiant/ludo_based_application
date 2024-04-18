import React, { useState } from "react";
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
import Filter from "../../assets/new_game/filter.svg";
import Favorite from "../../assets/new_game/fav.svg";
import HamBurger from "../../assets/profile/hamburger.svg";
import Mail from "../../assets/notification/mail.svg";
import Swipe from "../../assets/notification/rightswipe.svg";
import DropIcon from "../../assets/notification/dropicon.svg";
import Back from "../../assets/profile/ep_back.svg";
import BellIcon from "../../assets/new_game/notification.svg";
import { Link } from "react-router-dom";
import Sidebar from "../MainLayout/Sidebar";
import ButtonLoader from "./ButtonLoader";
const MyButton = ({ text, isLoading, handleCLick, theme }) => {
    return (
      <button
        onClick={handleCLick}
        className={`text-center items-center text-xl mx-auto font-['Inter'] h-[56px] w-full px-[16px] text-[20px] font-bold  gap-[10px]   shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)]  flex flex-row justify-center pt-4 rounded-lg  ${theme==="black"? "bg-[#0f002b] text-white md:text-[#0f002b]":"bg-white text-[#0f002b]"}  p-4`}
      >
       
        {isLoading ? <ButtonLoader isLight={true}/> : text}
      </button>
    );
  };

  export default MyButton;

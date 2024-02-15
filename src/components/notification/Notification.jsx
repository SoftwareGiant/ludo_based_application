import React, { useState } from "react";
import "../../app.css";

import AddGame from "../../assets/new_game/addgame.svg";
import Profile from "../../assets/new_game/profile.svg";
import WinCash from "../../assets/new_game/wincash.svg";
import Wallet from "../../assets/new_game/wallet.svg";
import GameHistory from "../../assets/new_game/history.svg";
import ReferEarn from "../../assets/new_game/refer&earn.svg";
import BellIcon from "../../assets/new_game/notification.svg";
import Support from "../../assets/new_game/support.svg";
import HamBurger from "../../assets/profile/hamburger.svg";
import Back from "../../assets/profile/ep_back.svg";
import Favorite from "../../assets/new_game/fav.svg";
import Mail from "../../assets/notification/mail.svg";
import Swipe from "../../assets/notification/rightswipe.svg";
import DropIcon from "../../assets/notification/dropicon.svg";
import { useNavigate } from "react-router-dom";
import { SidebarMob } from "../MainLayout/SidebarMob";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@material-tailwind/react";
const Notification = () => {
 
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(true);
  const toggleClose = () => setOpen(false);
  return (
    <>
      <div className="max-w-[480px] w-full min-h-screen h-full bg-[#fead3a]">
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
        <div className="w-full max-w-[480px] flex justify-end">
          <div className=" flex justify-end p-2 gap-1 px-4  rounded-lg">
            <img src={Mail} alt="Fluentmailreadregular" className="w-4" />
            <div className="text-xs font-['Inter'] font-semibold text-[#0f002b]">
              mark all as read
            </div>
          </div>
        </div>

        <div
          id="Line"
          className="border-solid w-full h-px border-t border-black/30"
        />

        <div className="bg-[#0f002b] w-full min-h-screen overflow-hidden relative">
          <div className="bg-[#fead3a] h-[98%] w-[200%] rounded-[50%]   -top-20 absolute -left-[50%]" />
          <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-4/5 m-auto rounded-lg  font-['Nunito-Sans'] relative mt-4">
            <div className="text-white bg-[#0f002b] flex flex-col gap-2 w-full rounded-tl-lg rounded-tr-lg">
              <div className="flex justify-between w-full items-center p-3">
                <span className=" shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)]">
                  5 min ago
                </span>
              </div>
              <div className="text-xs shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex  px-4 items-center  w-full  py-5 pb-8 ">
                <span className="font-semibold">
                  {" "}
                  Refer your friends and get 1.5% commission on their winning
                  amount. Promotion valid for the next 72hours.
                </span>
              </div>
            </div>
            <div className="flex  w-full p-4 justify-between items-center">
              <div className="flex text-xl font-['Inter'] font-bold text-[#0f002b] ">
                1.5% Off
              </div>

              <Button className="bg-white text-black shadow-none hover:shadow-none p-1">
                <IoIosArrowForward className="w-6 h-6" />
              </Button>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-4/5 m-auto rounded-lg  font-['Nunito-Sans'] relative mt-4">
            <div className="text-white bg-[#0f002b] flex flex-col gap-2 w-full rounded-tl-lg rounded-tr-lg">
              <div className="flex justify-between w-full items-center p-3 pb-1">
                <span className=" shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)]">
                  5 min ago
                </span>

                {open ? (
                  <span className="p-2 cursor-pointer">
                    <IoIosArrowUp onClick={toggleClose} />
                  </span>
                ) : (
                  <span className="p-2 cursor-pointer">
                    <IoIosArrowDown onClick={toggleOpen} />
                  </span>
                )}
              </div>
              <div className="text-xs shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex  px-4 items-center  w-full  pb-4 ">
                {open ? (
                  <span className="font-semibold transition-all ease-in-out">
                    {" "}
                    Play your next game and get 1% commission back. Only valid
                    for first 500 players HURRY UP!{" "}
                  </span>
                ) : (
                  <span className="font-semibold transition-all ease-in-out">
                    {" "}
                    HURRY UP!{" "}
                  </span>
                )}
              </div>
            </div>
            <div className="flex  w-full p-4 justify-between">
              <div className="flex text-xl font-['Inter'] font-bold text-[#0f002b] ">
                1% Off
              </div>
              <Button className="bg-white text-black shadow-none hover:shadow-none p-1">
                <IoIosArrowForward className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <button className="bg-black text-white px-8 py-2 w-3/5  max-w-[480px] relative rounded-lg flex justify-center m-auto mt-20">Clear All</button>
        </div>
      </div>

    </>
  );
};

export default Notification;

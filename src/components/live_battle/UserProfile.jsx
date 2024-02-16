import React, { useEffect, useState } from "react";
import "../../app.css";
import ProfileEditbtn from "../../assets/profile/editbutton.svg";
import HamBurger from "../../assets/profile/hamburger.svg";
import Edit from "../../assets/profile/edit.svg";
import ProfileEdit from "../../assets/profile/profile_edit.svg";
import LogOutMob from "../../assets/profile/respon_logout.svg";
import Verify from "../../assets/profile/verify.svg";
import ToggleOff from "../../assets/profile/toggleOff.svg";
import ToggleOn from "../../assets/profile/ToggleOn.svg";
import Back from "../../assets/profile/ep_back.svg";
import Favorite from "../../assets/new_game/fav.svg";
import BellIcon from "../../assets/new_game/notification.svg";
import kyc from "../../assets/new_game/KYC.svg";
import AddGame from "../../assets/new_game/addgame.svg";
import Profile from "../../assets/new_game/profile.svg";
import Menus from "../../assets/new_game/menus.svg";
import WinCash from "../../assets/new_game/wincash.svg";
import feedback from "../../assets/new_game/feedback.svg";
import fav2 from "../../assets/new_game/fav2.svg";
import verifyblack from "../../assets/new_game/verifyblack.svg";
import sad from "../../assets/new_game/sad.svg";
import trophy from "../../assets/new_game/tropy.svg";
import GameHistory from "../../assets/new_game/history.svg";
import ReferEarn from "../../assets/new_game/refer&earn.svg";
import Support from "../../assets/new_game/support.svg";
import { SidebarMob } from "../MainLayout/SidebarMob";
import verify from "../../assets/new_game/verify.svg";
import { Switch } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import TopbarMobile from "../MainLayout/TopbarMobile";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineReport } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const UserProfile = () => {
  const navigate = useNavigate();
  const handlestart = () => {
    navigate("/matchstart");
  };
  return (
    <div className="max-w-[480px] w-full min-h-screen h-full">
      <div
        id="NotificationspaceRoot"
        className="bg-[#fead3a]  h-8 overflow-hidden"
      />

      <TopbarMobile isStart={true} handlestart={handlestart} />

      <div className="flex text-white bg-[#0f002b] mt-10 pt-5 justify-between items-center px-4 py-2 w-full">
        <div
          onClick={() => navigate("/chat")}
          className="flex gap-5 items-center text-white "
        >
          <FaArrowLeft className="w-6 h-6" />
        </div>
        <img
          src={Menus}
          alt="ActionInfoOutline icon"
          id="Icoutlineinfo"
          className="w-6"
        />
      </div>
      <div className=" w-full max-w-[480px] bg-[#fead3a] min-h-screen overflow-hidden relative">
        <div className=" bg-[#0f002b] h-96 w-[650px] rounded-[50%]   -top-20 absolute -left-24" />

        <div className="relative text-white flex flex-col justify-center items-center gap-4">
          <img
            className="rounded-full w-36"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="user"
          />
          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-2">
              {" "}
              <b className="text-3xl">Player </b>
              <img src={verify} className="w-8" alt="verify" />
            </div>
            <p>@player07</p>
          </div>
        </div>

        <div className="relative mt-32 flex justify-center gap-8 ">
          <div className="flex flex-col justify-center items-center gap-4">
            <img width={30} src={fav2} />
            <span className="font-[Inter] font-semibold">Add Fav</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img width={38} src={feedback} />
            <span className="font-[Inter] font-semibold">Message</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <MdOutlineReport className="w-7 h-7" />
            <span className="font-[Inter] font-semibold">Report</span>
          </div>
        </div>

        <div onClick={()=>navigate("/userprofile2")} className="bg-white font-[Nunito-Sans] font-bold mx-8 rounded-t-2xl h-52 fixed bottom-0 left-0 right-0 p-4 flex flex-col justify-center items-center s gap-4">
          <div className="flex  items-center gap-2">
            <img
              className="rounded-full w-16"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user"
            />

            <div className="flex  flex-col justify-center items-center">
              <div className="flex gap-1">
                {" "}
                <b className="text-lg">Ludo Player </b>
                <img
                  src={verifyblack}
                  className="w-4 text-black"
                  alt="verify"
                />
              </div>
              <span className="text-sm">@ludouser</span>
            </div>
            <div className="px-4 py-3  bg-black rounded-xl">
              <img src={trophy} className="w-6" />
            </div>
            <div>
              <MdOutlineKeyboardArrowRight className="h-8 w-8" />
            </div>
          </div>
          <div className="flex  items-center gap-2">
            <img
              className="rounded-full w-16"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user"
            />

            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-1">
                {" "}
                <b className="text-lg">Ludo Player </b>
                <img
                  src={verifyblack}
                  className="w-4 text-black"
                  alt="verify"
                />
              </div>
              <span className="text-sm">@ludouser</span>
            </div>
            <div className="px-4 py-3 bg-black rounded-xl">
              <img src={sad} className="w-6" />
            </div>
            <div>
              <MdOutlineKeyboardArrowRight className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

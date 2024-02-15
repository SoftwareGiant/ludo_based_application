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
import WinCash from "../../assets/new_game/wincash.svg";
import Wallet from "../../assets/new_game/wallet.svg";
import GameHistory from "../../assets/new_game/history.svg";
import ReferEarn from "../../assets/new_game/refer&earn.svg";
import Support from "../../assets/new_game/support.svg";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { Switch } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const NewProfileMob = () => {
  const [isOpen, setIsOpen] = useState(false);
const navigate =useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="max-w-[480px] w-full min-h-screen h-full">
      <div
        id="NotificationspaceRoot"
        className="bg-[#fead3a]  h-8 overflow-hidden"
      />
      <div className="bg-[#fead3a]  flex justify-between items-center w-full   h-[51px]  px-4">
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
        <div 
        onClick={()=>navigate("/login")}
        className={`flex  h-9 my-1 px-3 justify-center items-center border-solid border border-[rgba(15,_0,_43,_0.3)] bg-[rgba(15,_0,_43,_0.3)] rounded-2xl ${scrollPosition >10 ? "hidden" : "flex"}`}>
          <img src={LogOutMob} alt="Frame1" className=" w-[20px] h-[20px]" />
        </div>
      </div>

      <div className="bg-[#0f002b] w-full min-h-screen overflow-hidden relative">
        <div className="bg-[#fead3a] h-80 w-[650px] rounded-[50%]   -top-20 absolute -left-24" />
        <div
          onClick={() => setScrollPosition(0)}
          className={`flex ${
            scrollPosition > 10 ? "relative px-3 pt-2" : "hidden"
          }`}
        >
          <img src={Back} />
        </div>
        <div
          className={`w-full relative mt-6  flex ${
            scrollPosition > 10 ? "flex-row items-center " : "flex-col"
          }`}
        >
          <div
            className={`${
              scrollPosition > 10 ? "flex gap-4" : "w-full"
            } m-auto relative `}
          >
            <div
              className={`${
                scrollPosition > 10 ? "" : "w-full"
              } flex justify-center items-center`}
            >
              <img
                className={`${
                  scrollPosition > 10 ? "w-16 " : "w-48"
                } relative  rounded-full`}
                src="https://images.unsplash.com/photo-1529524987368-af489318987c?q=80&w=582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <img
                className={`absolute  ${
                  scrollPosition > 10 ? "hidden " : "top-0 right-[30%]"
                }`}
                alt="editbtn"
                src={ProfileEditbtn}
              />
            </div>

            <div
              className={`flex  flex-col m-auto items-center font-bold ${
                scrollPosition > 10 ? "pt-0" : "pt-10 text-white"
              }`}
            >
              <div className="flex  w-full gap-2 items-center justify-center">
                <span
                  className={`text-center text-3xl ${
                    scrollPosition > 10 ? "text-xl" : ""
                  }`}
                >
                  Ludo Player
                </span>
                <img
                  className={`${scrollPosition > 10 ? "hidden " : ""} mt-2 w-6`}
                  src={Verify}
                  alt="Iconparkoutlinesuccess"
                />
              </div>
              <div
                className={`text-center text-3xl ${
                  scrollPosition > 10 ? "text-base" : " text-xl"
                }`}
              >
                @ludoplayer
              </div>
            </div>
          </div>

          <div className={`${scrollPosition > 10 ? "pr-10" : "hidden"}`}>
            <img src={kyc} />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 w-full font-['Nunito_Sans'] items-start relative text-white font-bold">

          <div className="bg-[#0f002b] text-white flex flex-col justify-center gap-10 w-full items-start pt-5 pb-6 px-8">
            <div className="flex  justify-between w-full items-center">
              <div className="text-xl font-bold text-white">Basic Details</div>
              <img
                src={Edit}
                alt="Materialsymbolseditoutline1"
                className="ml-20 w-5"
              />
            </div>
            <div className="flex flex-col justify-between gap-6 w-5/6 items-start ">
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div className="text-sm  mt-px">Phone no. :</div>
                <span>123456789</span>
              </div>
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div className="text-sm mt-px">User Id :</div>
                <span>123456789</span>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 w-5/6 items-start">
              <div className="text-xl font-bold text-white">
                Notification Preference
              </div>
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div className="text-sm text-white mt-px">Email :</div>
                <Switch color="amber" className="bg-brown-800" />
              </div>
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div id="Push" className="text-sm text-white mt-px">
                  Push :
                </div>
                <Switch color="amber" className="bg-brown-800" />
              </div>
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div id="Push" className="text-sm text-white mt-px">
                  Phone No. :
                </div>
                <Switch color="amber" className="bg-brown-800" />
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 w-5/6 items-start">
              <div className="text-xl font-bold text-white">App Preference</div>
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div className="text-sm text-white mt-px">Theme :</div>
                <Switch color="amber" className="bg-brown-800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProfileMob;

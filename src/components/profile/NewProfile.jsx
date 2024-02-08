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
import FrameProfile from "../../assets/profile/Frame_profile.png";
import Edit from "../../assets/profile/edit.svg";
import LogOut from "../../assets/profile/logout.svg";

import HamBurger from "../../assets/profile/hamburger.svg";
import ProfileEdit from "../../assets/profile/profile_edit.svg";
import LogOutMob from "../../assets/profile/respon_logout.svg";
import Verify from "../../assets/profile/verify.svg";
import ToggleOff from "../../assets/profile/toggleOff.svg";
import ToggleOn from "../../assets/profile/ToggleOn.svg";
import Back from "../../assets/profile/ep_back.svg";
import Favorite from "../../assets/new_game/fav.svg";
import BellIcon from "../../assets/new_game/notification.svg";

import { Link } from "react-router-dom";
import Sidebar from "../MainLayout/Sidebar";

const NewProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? (
        <div>
          <div className="w-[390px] h-[32px] bg-[var(--main-coloryellow-orange)] lg:h-0 lg:w-0" />
          {/* Hamburger section */}
          <div className="bg-[#fead3a] flex flex-row justify-between w-[390px] h-12 items-start pt-2 px-5 lg:hidden">
            <div className="flex flex-row gap-3 w-2/5 items-start">
              <img
                src={HamBurger}
                alt="Materialsymbolsmenu"
                id="Materialsymbolsmenu"
                className="mt-1 w-6"
                onClick={toggleNavbar}
              />
              <div className="relative flex flex-row justify-center w-24 items-start">
                <div className="text-center text-base font-['Nunito_Sans'] font-bold text-[#0f002b] absolute top-0 left-0 h-5 w-24">
                  LUDO KING
                </div>
                <div className="text-center text-base font-['Oooh_Baby'] text-[#0f002b] relative mt-4">
                  punch line
                </div>
              </div>
            </div>
            <div className="inline-flex py-[7px] px-3 justify-center items-center gap-2 border-solid border border-[rgba(15,_0,_43,_0.3)] bg-[rgba(15,_0,_43,_0.3)] rounded-[18px]">
              <img
                src={LogOutMob}
                alt="Frame1"
                className=" w-[20px] h-[20px] "
              />
            </div>
          </div>
          {/* Hamburger section ends */}
          <div className="overflow-hidden bg-[#0f002b] flex flex-col pb-2 gap-5 w-[390px] h-[100vh] items-start lg:hidden">
            <div
              id="Ellipse"
              className="bg-[#fead3a] flex flex-row justify-center pt-16 w-[256.41%] h-[1000px] items-start mt-[-705px] mx-[-305px] rounded-[50%]"
            >
              <div className="bg-profile bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-end mt-[666px] w-1/5 h-48 items-start px-2 border">
                <div className="bg-white flex flex-row justify-center mt-0 pt-4 w-12 h-12 items-start rounded-[25.000001907348633px]">
                  <img
                    src={ProfileEdit}
                    alt="Materialsymbolseditoutline"
                    className="w-5"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full font-['Nunito_Sans'] items-start">
              <div className="flex flex-col ml-24 w-1/2 items-start">
                <div className="flex flex-row gap-1 w-full items-start">
                  <div className="text-center text-3xl font-bold text-white">
                    Ludo Player
                  </div>
                  <img
                    src={Verify}
                    alt="Iconparkoutlinesuccess"
                    className="mt-2 w-6"
                  />
                </div>
                <div className="text-center text-xl text-white ml-10">
                  @ludoplayer
                </div>
              </div>
              <div className="bg-[#0f002b] flex flex-col justify-center gap-10 w-full items-start pt-5 pb-6 px-8">
                <div className="flex flex-row gap-24 w-full items-start">
                  <div className="flex flex-col justify-between w-2/5 h-24 items-start">
                    <div className="text-xl font-bold text-white">
                      Basic Details
                    </div>
                    <div id="PhoneNo" className="text-sm text-white ml-4">
                      Phone no.
                      {"     "}:
                    </div>
                    <div id="UserID" className="text-sm text-white ml-4">
                      User ID
                      {"         "}:
                    </div>
                  </div>
                  <div className="flex flex-col mt-1 gap-5 w-1/3 items-start">
                    <img
                      src={Edit}
                      alt="Materialsymbolseditoutline1"
                      className="ml-20 w-5"
                    />
                    <div className="flex flex-col gap-4 w-24 h-16 font-['Nunito_Sans'] items-start">
                      <div className="text-sm text-white">5348757512</div>
                      <div className="text-sm text-white ml-6">0042356</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-6 w-5/6 items-start">
                  <div className="flex flex-row gap-10 w-full items-start">
                    <div className="flex flex-col mb-px gap-6 w-3/4 h-16 items-start">
                      <div className="text-xl font-bold text-white">
                        Notification Preference
                      </div>
                      <div id="Email" className="text-sm text-white ml-4">
                        Email
                        {"             "}:
                      </div>
                    </div>
                    <img
                      src={ToggleOff}
                      alt="ToggleSwitch"
                      id="ToggleSwitch"
                      className="mt-12 w-8"
                    />
                  </div>
                  <div className="flex flex-row justify-between ml-4 w-full items-start">
                    <div id="Push" className="text-sm text-white mt-px">
                      Push
                      {"              "}:
                    </div>
                    <img
                      src={ToggleOn}
                      alt="ToggleSwitch1"
                      id="ToggleSwitch1"
                      className="w-8"
                    />
                  </div>
                  <div className="flex flex-row justify-between ml-4 w-full font-['Nunito_Sans'] items-start">
                    <div id="PhoneNo1" className="text-sm text-white mt-px">
                      Phone No.
                      {"     "}:
                    </div>
                    <img
                      src={ToggleOff}
                      alt="ToggleSwitch2"
                      id="ToggleSwitch2"
                      className="w-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-[390px] h-[32px] bg-[var(--main-coloryellow-orange)] lg:w-0 lg:h-0" />
          <div
            id="MenuRoot"
            className="bg-[#fead3a] flex flex-col gap-6 w-[390px] h-[100vh] font-['Nunito_Sans'] items-start pt-3 pb-12 px-5 lg:hidden"
          >
            <div className="flex flex-col gap-3 w-5/6 items-start">
              <div className="flex flex-col gap-1 w-full items-start">
                <img
                  src={Back}
                  alt="HardwareKeyboardBackspace icon"
                  id="Epback"
                  className="w-6"
                  onClick={toggleNavbar}
                />
                <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_6px_6px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row ml-12 gap-3 w-4/5 h-12 font-['Nunito_Sans'] items-start pt-2 px-4 border rounded-lg">
                  <img
                    src={AddGame}
                    alt="Materialsymbolsadd"
                    id="Materialsymbolsadd"
                    className="w-8"
                  />
                  <div className="text-base font-bold text-[#0f002b]">
                    New game
                  </div>
                </div>
              </div>
              <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_6px_6px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row ml-12 gap-3 w-4/5 h-12 items-start pt-2 px-4 border rounded-lg">
                <img
                  src={Profile}
                  alt="SocialPersonOutline icon"
                  className="w-8"
                />
                <div className="text-base font-bold text-[#0f002b]">
                  Profile
                </div>
              </div>
              <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_6px_6px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row ml-12 gap-3 w-4/5 h-12 items-start pt-2 px-4 border rounded-lg">
                <img
                  src={WinCash}
                  alt="Twemojimoneymouthface"
                  className="w-8"
                />
                <div className="text-base font-bold text-[#0f002b]">
                  Win Cash
                </div>
              </div>
              <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_6px_6px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row ml-12 gap-3 w-4/5 h-12 font-['Nunito_Sans'] items-start pt-2 px-4 border rounded-lg">
                <img
                  src={Wallet}
                  alt="Phwalletlight"
                  id="Phwalletlight"
                  className="w-8"
                />
                <div className="text-base font-bold text-[#0f002b]">
                  My Wallet
                </div>
              </div>
              <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_6px_6px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row ml-12 gap-3 w-4/5 h-12 font-['Nunito_Sans'] items-start pt-2 px-4 border rounded-lg">
                <img
                  src={GameHistory}
                  alt="ActionYoutubeSearchedFor icon"
                  id="Mdihistory"
                  className="w-8"
                />
                <div className="text-base font-bold text-[#0f002b]">
                  Game History
                </div>
              </div>
              <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_6px_6px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row ml-12 gap-3 w-4/5 h-12 font-['Nunito_Sans'] items-start pt-2 px-4 border rounded-lg">
                <img
                  src={Profile}
                  alt="SocialPersonOutline icon"
                  className="w-8"
                />
                <div className="text-base font-bold text-[#0f002b]">
                  Transaction History
                </div>
              </div>
              <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_6px_6px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row ml-12 gap-3 w-4/5 h-12 font-['Nunito_Sans'] items-start pt-2 px-4 border rounded-lg">
                <img
                  src={ReferEarn}
                  alt="Gameiconsreceivemoney"
                  className="w-8"
                />
                <div className="text-base font-bold text-[#0f002b]">
                  Refer and Earn
                </div>
              </div>
              <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_6px_6px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row ml-12 gap-3 w-4/5 h-12 font-['Nunito_Sans'] items-start pt-2 px-4 border rounded-lg">
                <img
                  src={BellIcon}
                  alt="SocialNotificationsNone icon"
                  className="w-8"
                />
                <div className="text-base font-bold text-[#0f002b]">
                  Notification
                </div>
              </div>
              <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_6px_6px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row ml-12 gap-3 w-4/5 h-12 font-['Nunito_Sans'] items-start pt-2 px-4 border rounded-lg">
                <img
                  src={Support}
                  alt="NotificationSupportAgent icon"
                  className="w-8"
                />
                <div className="text-base font-bold text-[#0f002b]">
                  Support
                </div>
              </div>
              <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_6px_6px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row ml-12 gap-3 w-4/5 h-12 font-['Nunito_Sans'] items-start pt-2 px-4 border rounded-lg">
                <img
                  src={Favorite}
                  alt="Phstarlight"
                  id="Phstarlight"
                  className="w-8"
                />
                <div className="text-base font-bold text-[#0f002b]">
                  Favourite
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 gap-2 w-[390px] font-['Oooh_Baby'] items-start">
              <div className="text-center text-2xl font-['Nunito_Sans'] font-bold text-[#0f002b] absolute top-[685px] left-[5.75rem] h-[41px] w-[166px]">
                LUDO KING
              </div>
              <div className="text-center text-xl text-[#0f002b] relative mt-8 left-[5.75rem]">
                punch line
              </div>

              <div className="flex flex-row justify-between font-['Inter'] items-start w-[319px] h-[23px] ">
                <div className="text-center text-xs font-medium">
                  Terms of Service
                </div>
                <div className="text-center text-xs font-bold">·</div>
                <div className="text-center text-xs font-medium">
                  Privacy Policy
                </div>
                <div className="text-center text-xs font-bold">·</div>
                <div className="text-center text-xs font-medium">
                  Content Policies
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        id="ProfileRoot"
        className="lg:bg-[#0f002b] lg:flex  md:w-full md:h-[100vh]  lg:items-center hidden"
      >
        {/* menue bar section */}
        {/* <div className="bg-white flex flex-col pb-16 gap-6 w-1/5 h-[100vh] items-start">
          <div className="flex flex-col w-full items-start">
            <div className="relative flex flex-row justify-center w-full items-start">
              <div className="w-full h-48 bg-background bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-0 left-0 flex flex-row items-start">
                <div className="bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0)_0%,#ffffff_100%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat mt-40 w-full h-10" />
              </div>
              <div className="text-center text-3xl font-['Nunito_Sans'] font-bold text-[#0e002b] relative mt-48">
                LUDO KING
              </div>
            </div>
            <div className="text-center text-xl font-['Oooh_Baby'] mx-auto">
              punch line
            </div>
          </div>
          <div className="flex flex-col justify-center mx-auto gap-2 w-4/5 items-center">
            <Link
              to="/"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg"
            >
              <img
                src={AddGame}
                alt="ContentAdd icon"
                id="Materialsymbolsadd"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold text-[#0f002b]">
                New game
              </div>
            </Link>
            <Link
              to="/profile"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#ffcc4d] flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg"
            >
              <img
                src={Profile}
                alt="SocialPersonOutline icon"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Profile
              </div>
            </Link>
            <Link
              to="/wincash"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg"
            >
              <img src={WinCash} alt="Twemojimoneymouthface" className="w-5" />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Win Cash
              </div>
            </Link>
            <Link
              to="/mywallet"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg"
            >
              <img
                src={Wallet}
                alt="Phwalletlight"
                id="Phwalletlight"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                My Wallet
              </div>
            </Link>
            <Link
              to="/gamehistory"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg"
            >
              <img
                src={GameHistory}
                alt="ActionHistory icon"
                id="lgihistory"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Game History
              </div>
            </Link>
            <Link
              to="/transactionhistory"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg"
            >
              <img
                src={Profile}
                alt="SocialPersonOutline icon"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Transaction History
              </div>
            </Link>
            <Link
              to="/referr&earn"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg"
            >
              <img
                src={ReferEarn}
                alt="Gameiconsreceivemoney"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Refer and Earn
              </div>
            </Link>
            <Link
              to="/notification"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg"
            >
              <img
                src={Notification}
                alt="Iconamoonnotificationlight"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Notification
              </div>
            </Link>
            <Link
              to="/support"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-start pt-2 px-3 border rounded-lg"
            >
              <img
                src={Support}
                alt="Materialsymbolssupportagent"
                className="w-5"
              />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Support
              </div>
            </Link>
          </div>
        </div> */}
        <Sidebar isClick2={true}/>
        {/* menue bar section ends */}
        {/* Profile section */}
        <div className="flex  w-full">
        <div className=" bg-[#0F002B] w-1/2 flex flex-col pb-4 gap-6  h-full min-h-screen  left-[200px] items-start ">
          <div className="flex flex-col gap-8 w-full items-start">
            {/* Profile Logo */}
            <div className="flex flex-col ml-16 gap-6 w-3/5 items-start">
              <img src={FrameProfile} alt="Frame50" />
              <div className="flex flex-col ml-5 w-4/5 items-start">
                <div className="text-center text-3xl font-['Nunito_Sans'] text-white">
                  Ludo Player
                </div>
                <div className="text-center text-xl font-['Nunito_Sans'] text-white ml-6">
                  @ludoplayer
                </div>
              </div>
            </div>
            {/* Profile Logo */}
            <div className="shadow-[inset_0px_0px_4px_0px_#000000] bg-[#534f5b] flex flex-col pb-3 gap-3 w-full items-start rounded-lg">
              <div className="border-solid border-[#0f002b] flex flex-row justify-between w-full h-12 items-start pt-3 px-5 border-t-0 border-b border-x-0 rounded-tl-lg rounded-tr-lg">
                <div className="text-sm font-['Nunito_Sans'] text-white mt-px">
                  Basic Details
                </div>
                <img
                  src={Edit}
                  alt="Materialsymbolseditoutline"
                  className="mt-px w-5"
                />
              </div>
              <div className="flex flex-col justify-evenly ml-4 gap-2 w-3/4 items-center">
                <div className="flex flex-row gap-6 w-full items-start">
                  <div className="text-sm font-['Nunito_Sans'] text-white">
                    Email :
                  </div>
                  <div
                    id="Ludoplayermailcom"
                    className="text-sm font-['Nunito_Sans'] text-white pl-7"
                  >
                    ludoplayer@mail.com
                  </div>
                </div>
                <div className="flex flex-row gap-6 w-full items-start">
                  <div className="text-sm font-['Nunito_Sans'] text-white">
                    Phone no. :
                  </div>
                  <div className="text-sm font-['Nunito_Sans'] text-white">
                    5348757512
                  </div>
                </div>
                <div className="flex flex-row gap-6 w-full items-start">
                  <div className="text-sm font-['Nunito_Sans'] text-white">
                    User ID :
                  </div>
                  <div
                    id="Element13"
                    className="text-sm font-['Nunito_Sans'] text-white pl-4"
                  >
                    0042356
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-center ml-32 pt-1 gap-2 w-24 h-8 items-start border rounded-lg">
            <img src={LogOut} alt="Materialsymbolslogout" className="w-5" />
            <div className="text-xs font-['Nunito_Sans'] font-bold mt-1">
              Log Out
            </div>
          </div>
        </div>
        {/* Profile section ends */}
        {/* battle section */}
        <div className="bg-[#fead3a] w-1/2 lg:flex flex-col lg:w-[400px] lg:h-full lg:min-h-screen  pb-8 gap-8 rounded-[20px] hidden m-auto">
          <div className="flex flex-col gap-10 w-full items-start">
            <div className="flex flex-col gap-8 w-full items-start">
              <div
                id="LiveBattle1"
                className="text-black text-center font-['Inter'] text-xl  ml-4"
              >
                live <span className="font-extrabold">battle 🔥</span>
              </div>
              <div className="flex flex-col justify-between gap-8 w-full items-start">
                <div className="grid grid-cols-2 gap-3 mx-auto">
                  <div className="flex w-[176px] h-[89px] p-[2.438px] flex-col justify-center items-center flex-shrink-0 rounded-lg shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#FCA837] ">
                    <div className="flex w-[100%] h-[28.0411px] items-center self-stretch pt-[7.925px] pr-[25.76px] pb-[8.11px] pl-[9.144px] rounded-t-[6.096px] rounded-b-none text-black">
                      <p className="text-white font-[Inter] text-[9.753px] font-normal">
                        open challenge
                      </p>
                      <span className="text-black font-[Inter] text-[9.753px] font-extrabold">
                        ravan3p
                      </span>
                    </div>
                    <div className="flex w-[172px] h-14 gap-9 items-center self-stretch flex-1 flex-shrink-0 basi-0 rounded-t rounded-b-[6.096px] bg-[#C58134] p-2">
                      <div className="flex flex-col w-auto h-[18px] items-start justify-center gap-[2.438px] ">
                        <div className="flex py-[3.048px] px-[3.658px] items-start gap-[9.144px] font-[Inter] text-[9.753px]">
                          <p className="text-white font-normal ">Entry fee</p>
                          <p className="text-[#0f002b] font-extrabold ">₹40</p>
                        </div>
                        <div className="flex py-[3.048px] px-[3.658px] items-start self-stretch gap-[28.041px] flex-1 flex-shrink-0 basis-0 text-[9.753px] ">
                          <p className="text-white font-normal ">Prize</p>
                          <p className="text-[#0f002b] font-extrabold ">₹80</p>
                        </div>
                      </div>
                      <div className="flex w-6 h-6 p-[6.705px] justify-center items-center rounded-[19.507px] bg-[#0F002B] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] ">
                        <img src={LiveBattle} className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[176px] h-[89px] p-[2.438px] flex-col justify-center items-center flex-shrink-0 rounded-lg shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#FCA837] ">
                    <div className="flex w-[100%] h-[28.0411px] items-center self-stretch pt-[7.925px] pr-[25.76px] pb-[8.11px] pl-[9.144px] rounded-t-[6.096px] rounded-b-none text-black">
                      <p className="text-white font-[Inter] text-[9.753px] font-normal">
                        open challenge
                      </p>
                      <span className="text-black font-[Inter] text-[9.753px] font-extrabold">
                        ravan3p
                      </span>
                    </div>
                    <div className="flex w-[172px] h-14 gap-9 items-center self-stretch flex-1 flex-shrink-0 basi-0 rounded-t rounded-b-[6.096px] bg-[#C58134] p-2  ">
                      <div className="flex flex-col w-auto h-[18px] items-start justify-center gap-[2.438px] ">
                        <div className="flex py-[3.048px] px-[3.658px] items-start gap-[9.144px] font-[Inter] text-[9.753px]">
                          <p className="text-white font-normal ">Entry fee</p>
                          <p className="text-[#0f002b] font-extrabold ">₹40</p>
                        </div>
                        <div className="flex py-[3.048px] px-[3.658px] items-start self-stretch gap-[28.041px] flex-1 flex-shrink-0 basis-0 text-[9.753px] ">
                          <p className="text-white font-normal ">Prize</p>
                          <p className="text-[#0f002b] font-extrabold ">₹80</p>
                        </div>
                      </div>
                      <div className="flex w-6 h-6 p-[6.705px] justify-center items-center rounded-[19.507px] bg-[#0F002B] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] ">
                        <img src={LiveBattle} className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[176px] h-[89px] p-[2.438px] flex-col justify-center items-center flex-shrink-0 rounded-lg shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#FCA837] ">
                    <div className="flex w-[100%] h-[28.0411px] items-center self-stretch pt-[7.925px] pr-[25.76px] pb-[8.11px] pl-[9.144px] rounded-t-[6.096px] rounded-b-none text-black">
                      <p className="text-white font-[Inter] text-[9.753px] font-normal">
                        open challenge
                      </p>
                      <span className="text-black font-[Inter] text-[9.753px] font-extrabold">
                        ravan3p
                      </span>
                    </div>
                    <div className="flex w-[172px] h-14 gap-9 items-center self-stretch flex-1 flex-shrink-0 basi-0 rounded-t rounded-b-[6.096px] bg-[#C58134] p-2  ">
                      <div className="flex flex-col w-auto h-[18px] items-start justify-center gap-[2.438px] ">
                        <div className="flex py-[3.048px] px-[3.658px] items-start gap-[9.144px] font-[Inter] text-[9.753px]">
                          <p className="text-white font-normal ">Entry fee</p>
                          <p className="text-[#0f002b] font-extrabold ">₹40</p>
                        </div>
                        <div className="flex py-[3.048px] px-[3.658px] items-start self-stretch gap-[28.041px] flex-1 flex-shrink-0 basis-0 text-[9.753px] ">
                          <p className="text-white font-normal ">Prize</p>
                          <p className="text-[#0f002b] font-extrabold ">₹80</p>
                        </div>
                      </div>
                      <div className="flex w-6 h-6 p-[6.705px] justify-center items-center rounded-[19.507px] bg-[#0F002B] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] ">
                        <img src={LiveBattle} className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[176px] h-[89px] p-[2.438px] flex-col justify-center items-center flex-shrink-0 rounded-lg shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#FCA837] ">
                    <div className="flex w-[100%] h-[28.0411px] items-center self-stretch pt-[7.925px] pr-[25.76px] pb-[8.11px] pl-[9.144px] rounded-t-[6.096px] rounded-b-none text-black">
                      <p className="text-white font-[Inter] text-[9.753px] font-normal">
                        open challenge
                      </p>
                      <span className="text-black font-[Inter] text-[9.753px] font-extrabold">
                        ravan3p
                      </span>
                    </div>
                    <div className="flex w-[172px] h-14 gap-9 items-center self-stretch flex-1 flex-shrink-0 basi-0 rounded-t rounded-b-[6.096px] bg-[#C58134] p-2  ">
                      <div className="flex flex-col w-auto h-[18px] items-start justify-center gap-[2.438px] ">
                        <div className="flex py-[3.048px] px-[3.658px] items-start gap-[9.144px] font-[Inter] text-[9.753px]">
                          <p className="text-white font-normal ">Entry fee</p>
                          <p className="text-[#0f002b] font-extrabold ">₹40</p>
                        </div>
                        <div className="flex py-[3.048px] px-[3.658px] items-start self-stretch gap-[28.041px] flex-1 flex-shrink-0 basis-0 text-[9.753px] ">
                          <p className="text-white font-normal ">Prize</p>
                          <p className="text-[#0f002b] font-extrabold ">₹80</p>
                        </div>
                      </div>
                      <div className="flex w-6 h-6 p-[6.705px] justify-center items-center rounded-[19.507px] bg-[#0F002B] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] ">
                        <img src={LiveBattle} className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="Line"
                  className="border-solid w-full h-px border-t border-b-0 border-black/30 border-x-0"
                />
                <div
                  id="SortBattle1"
                  className=" flex items-center font-['Inter'] ml-4 text-black"
                >
                  <p className="text-xl text-center font-normal">sort</p>
                  <span className="font-extrabold pl-1 text-xl">battle</span>
                </div>
              </div>
            </div>
            {/* sort battle */}
            <div className="mx-auto shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-between items-center p-[10px] w-[264px] h-14 rounded-xl">
              <div className="flex flex-row gap-1 py-0 px-2 w-[77px] h-[19px] items-center">
                <div className="text-center font-['Inter'] text-[#0f002b] w-[9px] h-5">
                  ₹
                </div>
                <input
                  type="number"
                  placeholder="From"
                  className="text-center font-['Inter'] text-[16px] font-normal text-black/56.99999999999999 w-12 h-[19px] "
                />
              </div>

              <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-white flex flex-shrink-0 w-8 h-8 items-center justify-center p-[6px] rounded-2xl">
                <img
                  src={Filter}
                  alt="Iconoirfilter"
                  id="Iconoirfilter"
                  className="w-5"
                />
              </div>
              <div className="flex gap-1 py-0 px-2 w-[77px] items-center">
                <div className="text-center font-['Inter'] text-[#0f002b]">
                  ₹
                </div>
                <input
                  type="number"
                  placeholder="To"
                  id="To"
                  className="text-center font-['Inter'] text-[16px] font-normal text-black/56.99999999999999 w-12 h-[19px]"
                />
              </div>
            </div>
            {/* sort battle ends */}
          </div>
          <div className="flex flex-col ml-4 gap-10 w-5/6 h-32 items-start">
            <div
              id="StartYourOwnBattle1"
              className="text-center text-xl font-['Inter']"
            >
              start your own <span className="font-bold">battle</span>
            </div>
            <div className="flex h-14 w-auto p-[10px] items-center justify-center gap-[10px] mx-auto shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white rounded-[10px]">
              <div className="flex items-center gap-1 w-[220px] h-auto">
                <div className="text-center font-['Inter'] text-[#0f002b] text-base font-normal">
                  ₹
                </div>
                <input
                  type="number"
                  placeholder="Your battle amount"
                  className="text-center font-['Inter'] text-black/56.99999999999999 text-base font-normal"
                />
              </div>
              <div className="flex w-10 h-10 p-[6px] justify-center items-center shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-[#ffb653] rounded-[20px]">
                <img
                  src={LiveBattle}
                  alt="Arcticonsbattleforwesnoth4"
                  className="w-7 h-7 flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
        {/* battle section ends */}
        </div>
      </div>
    </>
  );
};

export default NewProfile;

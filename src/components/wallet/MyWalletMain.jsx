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

const MyWalletMain = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  return (
    <>
    
        <div>
          
          <div className="w-[390px] h-[32px] bg-[var(--main-coloryellow-orange)] lg:w-0 lg:h-0" />
          {/* Hamburger section */}
          <div className="bg-[#fead3a] flex flex-row justify-between w-[390px] h-12 items-start pt-2 px-5  lg:hidden">
            <div className="flex flex-row gap-3 w-2/5 items-start">
           <SidebarMob/>
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
          {/* Hamburger section */}
          <div
            id="AppContentRoot"
            className="overflow-hidden bg-[#0f002b] flex flex-row w-[390px] items-start lg:hidden"
          >
            <div
              id="Ellipse"
              className="bg-[#fead3a] flex flex-col justify-end gap-10 w-[256.41%] h-[1000px] items-start mt-[-323px] mb-20 mx-[-305px] pl-[339px] py-[209px] rounded-[50%]"
            >
              <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col pb-4 gap-4 w-1/2 items-start rounded-lg">
                <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col gap-2 w-full h-32 items-start py-3 rounded-tl-lg rounded-tr-lg">
                  <div className="flex flex-row justify-between w-full items-start">
                    <div className="font-['Nunito_Sans'] text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-2 w-2/5 h-8 items-start rounded-lg">
                      Deposit Cash
                    </div>
                    <img
                      src={Time}
                      alt="lgihistory"
                      id="lgihistory"
                      className="mr-5 w-5 h-5 mt-2"
                    />
                  </div>
                  <div className="text-xs font-['Nunito_Sans'] font-semibold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center ml-[1.75rem] pt-2 w-5/6 items-start rounded-lg">
                    Can be used to play Tournaments & Battles. Cannot be
                    withdrawn to Paytm or Bank.
                  </div>
                </div>
                <div className="flex flex-row ml-4 gap-24 w-5/6 items-start">
                  <div className="bg-white flex flex-row justify-center pt-1 gap-1 w-20 items-start">
                    <div className="text-xl font-['Inter'] text-[#0f002b] mb-1">
                      ₹
                    </div>
                    <div className="text-xl font-['Inter'] font-bold text-[#0f002b]">
                      501
                    </div>
                  </div>
                  <div
                    onClick={() => navigate("/deposite")}
                    className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-px pt-2 gap-1 w-2/5 h-8 items-start rounded-lg"
                  >
                    <img
                      src={AddCash}
                      alt="Materialsymbolsadd"
                      id="Materialsymbolsadd"
                      className="w-4"
                    />
                    <div className="text-sm font-['Inter'] text-white">
                      add cash
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col pb-4 gap-4 w-1/2 items-start rounded-lg">
                <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col gap-2 w-full h-32 items-start py-3 rounded-tl-lg rounded-tr-lg">
                  <div className="flex flex-row justify-between w-full items-start">
                    <div className="font-['Nunito_Sans'] text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-2 w-2/5 h-8 items-start rounded-lg">
                      Winning Cash
                    </div>
                    <img
                      src={Time}
                      alt="lgihistory1"
                      id="lgihistory1"
                      className="mr-5 w-5 h-5 mt-2"
                    />
                  </div>
                  <div className="text-xs font-['Nunito_Sans'] font-semibold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center ml-[1.75rem] pt-2 w-5/6 items-start rounded-lg">
                    Can be used to play Tournaments & Battles. Withdrawn to
                    Paytm or Bank.
                  </div>
                </div>
                <div className="flex flex-row ml-4 gap-20 w-5/6 items-start">
                  <div className="bg-white flex flex-row justify-center pt-1 gap-1 w-24 items-start">
                    <div className="text-xl font-['Inter'] text-[#0f002b] mb-1">
                      ₹
                    </div>
                    <div className="text-xl font-['Inter'] font-bold text-[#0f002b]">
                      1001
                    </div>
                  </div>
                  <div
                    onClick={() => navigate("/withdraw")}
                    className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-px pt-2 gap-1 w-2/5 h-8 items-start rounded-lg"
                  >
                    <img
                      src={Bank}
                      alt="Cilbank"
                      id="Cilbank"
                      className="w-4"
                    />
                    <div className="text-sm font-['Inter'] text-white">
                      withdraw
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   
      <div
        id="Mywallet"
        className="lg:bg-[#0f002b] lg:flex  md:w-full md:h-[100vh]  lg:items-center hidden"
      >
        <Sidebar isClick4={true}/>
        {/* left-side bar starts */}
        {/* <div className="bg-white flex flex-col pb-16 gap-6 lg:w-[200px] lg:h-[720px]  items-start">
          {/* logo and main text */}
          {/* <div className="flex flex-col w-full items-start">
            <div className="relative flex flex-row justify-center w-full items-start">
              <div className="w-full h-48 bg-background bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-0 left-0 flex flex-row items-center">
                <div className="bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0)_0%,#ffffff_100%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat mt-40 w-full h-10" />
              </div>
              <div className="text-center text-3xl font-['Nunito_Sans'] font-bold text-[#0e002b] relative mt-48">
                LUDO KING
              </div>
            </div>
            <div className="text-center text-xl font-['Oooh_Baby'] mx-auto">
              punch line
            </div>
          </div> */}
          {/* logo and main text */}
          {/* menue section starts */}
          {/* <div className="lg:flex lg:flex-col lg:justify-center lg:mx-auto lg:gap-2 w-0 h-0 lg:w-[160px] lg:h-4/5 items-center ">
            <Link
              to="/"
              className="border-solid items-center border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]  flex flex-row gap-2 lg:w-full lg:h-[34px] pt-1 px-3 border rounded-lg"
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
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg"
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
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg"
            >
              <img src={WinCash} alt="Twemojimoneymouthface" className="w-5" />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Win Cash
              </div>
            </Link>
            <Link
              to="/mywallet"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#ffcc4d] flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg"
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
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg"
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
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex- gap-2 w-full h-8 items-end py-[7px] px-3 border rounded-lg"
            >
              <img
                src={Profile}
                alt="SocialPersonOutline icon"
                className="w-5"
              />
              <div className="text-[11px] font-['Nunito_Sans'] font-bold">
                Transaction History
              </div>
            </Link>
            <Link
              to="/referr&earn"
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg"
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
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg"
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
              className="border-solid border-[rgba(15,_0,_43,_0.3)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row gap-2 w-full h-8 items-center pt-1 px-3 border rounded-lg"
            >
              <img src={Support} alt="Supportagent" className="w-5" />
              <div className="text-xs font-['Nunito_Sans'] font-bold">
                Support
              </div>
            </Link>
          </div> */}
        {/* </div> */}
        {/* menu section ends */}
        {/* Profile section */}
        <div className="flex  w-full">
        <div className="bg-[#fead3a] w-1/2 flex flex-col pb-4 gap-6  h-full min-h-screen  left-[200px] items-start ">
          <div className="flex flex-col gap-2 w-full items-start">
            <div className="bg-[#fead3a] flex flex-row justify-between w-full h-16 items-start pt-4 px-6">
              <div
                id="MyWallet1"
                className="text-center text-xl font-['Inter'] text-[#0f002b] mt-px"
              >
                My <span className="font-bold">Wallet</span>
              </div>
              <img
                src={Info}
                alt="ActionInfoOutline icon"
                id="Icoutlineinfo"
                className="w-6"
              />
            </div>
            <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col ml-20 pb-4 gap-4 w-2/3 items-start rounded-lg">
              <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col gap-2 w-full h-32 items-start py-3 rounded-tl-lg rounded-tr-lg">
                <div className="flex flex-row justify-between w-full items-start">
                  <div className="font-['Nunito_Sans'] text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-2 w-2/5 h-8 items-start rounded-lg">
                    Deposit Cash
                  </div>
                  <img
                    src={Time}
                    alt="lgihistory"
                    id="lgihistory"
                    className="mr-5 w-5 h-5 mt-2"
                  />
                </div>
                <div className="text-xs font-['Nunito_Sans'] font-semibold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center ml-[1.75rem] pt-2 w-5/6 items-start rounded-lg">
                  Can be used to play Tournaments & Battles. Cannot be withdrawn
                  to Paytm or Bank.
                </div>
              </div>
              <div className="flex flex-row ml-4 gap-24 w-5/6 items-start">
                <div className="bg-white flex flex-row justify-center pt-1 gap-1 w-20 items-start">
                  <div className="text-xl font-['Inter'] text-[#0f002b] mb-1">
                    ₹
                  </div>
                  <div className="text-xl font-['Inter'] font-bold text-[#0f002b]">
                    501
                  </div>
                </div>
                <div
                  onClick={() => navigate("/deposite")}
                  className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center py-[6.77px] px-[3px] gap-[4.235px] w-[108px] h-8 items-start rounded-lg"
                >
                  <img
                    src={AddCash}
                    alt="Materialsymbolsadd"
                    id="Materialsymbolsadd"
                    className="w-4"
                  />
                  <div className="text-sm font-['Inter'] text-white">
                    add cash
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col ml-20 pb-4 gap-4 w-2/3 items-start rounded-lg">
            <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col gap-2 w-full h-32 items-start py-3 rounded-tl-lg rounded-tr-lg">
              <div className="flex flex-row justify-between w-full items-start">
                <div className="font-['Nunito_Sans'] text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-2 w-2/5 h-8 items-start rounded-lg">
                  Winning Cash
                </div>
                <img
                  src={Time}
                  alt="lgihistory1"
                  id="lgihistory1"
                  className="mr-5 w-5 h-5 mt-2"
                />
              </div>
              <div className="text-xs font-['Nunito_Sans'] font-semibold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center ml-[1.75rem] pt-2 w-5/6 items-start rounded-lg">
                Can be used to play Tournaments & Battles. Withdrawn to Paytm or
                Bank.
              </div>
            </div>
            <div className="flex flex-row ml-4 gap-20 w-5/6 items-start">
              <div className="bg-white flex flex-row justify-center pt-1 gap-1 w-24 items-start">
                <div className="text-xl font-['Inter'] text-[#0f002b] mb-1">
                  ₹
                </div>
                <div className="text-xl font-['Inter'] font-bold text-[#0f002b]">
                  1001
                </div>
              </div>
              <div
                onClick={() => navigate("/withdraw")}
                className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center py-[6.77px] px-[3px] gap-[4.235px] w-[108px] h-8 items-start rounded-lg"
              >
                <img src={Bank} alt="Cilbank" id="Cilbank" className="w-4" />
                <div className="text-sm font-['Inter'] text-white">
                  withdraw
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Profile section ends */}
        {/* battle section */}
        <div className="bg-[#0F002B] w-1/2 lg:flex flex-col lg:w-[400px] lg:h-full lg:min-h-screen  pb-8 gap-8 rounded-[20px] hidden m-auto">
          <div className="flex flex-col gap-4 w-full items-start">
            <div className="border-solid flex flex-col gap-6 w-full h-[332px] items-start pl-4 py-4 border-b border-black/30">
              <div
                id="LiveBattle1"
                className="text-center text-xl font-['Inter'] text-white"
              >
                live <span className="font-bold">battle 🔥</span>
              </div>
              <div className="lg:mx-[-15px]">
                {/* 1st part */}
                <div className="flex flex-row mx-[10px] p-2 gap-3 w-[380px] h-[118.89px] items-start">
                  <div className="flex flex-col w-[176px] items-center justify-center p-[2.428px] border border-solid border-[rgba(15,_0,_43,_0.2)] shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white rounded-[6.096px]">
                    <div className="flex flex-col w-full h-[42px] py-2 px-[9px] justify-center items-start gap-[2.42px] self-stretch ">
                      <div className="text-[9px] w-[137px] h-3 italic font-normal font-['Inter'] text-[#0f002b]">
                        open challenge from{" "}
                        <span className="font-extrabold">ravan3p</span>
                      </div>
                      <div
                        id="MinutesAgo1"
                        className="text-[9px] font-['Inter'] font-normal text-[#0f002b]"
                      >
                        . 2 minutes ago
                      </div>
                    </div>
                    <div className="bg-[#fca837] shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] rounded-br-[6.096px] rounded-bl-[6.096px] relative flex flex-row pt-[9.103px] pr-[19.421px] pb-[9.71px] pl-[9.71px] gap-[38.13px] w-[171px] h-14 items-center">
                      <div className="flex flex-row gap-[9px] w-[79px] h-[19px] absolute top-2 py-[3.034px] px-[3.641px] items-start">
                        <div className="text-[9.7px] font-['Inter'] text-white font-normal ">
                          Entry fee
                        </div>
                        <div className="text-[9.7px] font-['Inter'] text-white font-extrabold">
                          ₹40
                        </div>
                      </div>
                      <div className="flex flex-row gap-[9px] w-[79px] py-[3.034px] px-[3.641px] mt-[1.5rem] items-start">
                        <div className="text-[9.7px] font-['Inter'] text-white font-normal">
                          Prize
                        </div>
                        <div className="text-[9.7px] font-['Inter'] text-white font-extrabold">
                          ₹80
                        </div>
                      </div>
                      <div className=" flex w-[25.5px] h-[25.5px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]">
                        <img
                          src={LiveBattle}
                          alt="Arcticonsbattleforwesnoth"
                          className="w-4"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[176px] items-center justify-center p-[2.428px] border border-solid border-[rgba(15,_0,_43,_0.2)] shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white rounded-[6.096px]">
                    <div className="flex flex-col w-full h-[42px] py-2 px-[9px] justify-center items-start gap-[2.42px] self-stretch ">
                      <div className="text-[9px] w-[137px] h-3 italic font-normal font-['Inter'] text-[#0f002b]">
                        open challenge from{" "}
                        <span className="font-extrabold">ravan3p</span>
                      </div>
                      <div
                        id="MinutesAgo1"
                        className="text-[9px] font-['Inter'] font-normal text-[#0f002b]"
                      >
                        . 2 minutes ago
                      </div>
                    </div>
                    <div className="bg-[#fca837] shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] rounded-br-[6.096px] rounded-bl-[6.096px] relative flex flex-row pt-[9.103px] pr-[19.421px] pb-[9.71px] pl-[9.71px] gap-[38.13px] w-[171px] h-14 items-center">
                      <div className="flex flex-row gap-[9px] w-[79px] h-[19px] absolute top-2 py-[3.034px] px-[3.641px] items-start">
                        <div className="text-[9.7px] font-['Inter'] text-white font-normal ">
                          Entry fee
                        </div>
                        <div className="text-[9.7px] font-['Inter'] text-white font-extrabold">
                          ₹40
                        </div>
                      </div>
                      <div className="flex flex-row gap-[9px] w-[79px] py-[3.034px] px-[3.641px] mt-[1.5rem] items-start">
                        <div className="text-[9.7px] font-['Inter'] text-white font-normal">
                          Prize
                        </div>
                        <div className="text-[9.7px] font-['Inter'] text-white font-extrabold">
                          ₹80
                        </div>
                      </div>
                      <div className=" flex w-[25.5px] h-[25.5px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]">
                        <img
                          src={LiveBattle}
                          alt="Arcticonsbattleforwesnoth"
                          className="w-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2nd part */}
                <div className="flex flex-row mx-[10px] p-2 gap-3 w-[380px] h-[118.89px] items-start">
                  <div className="flex flex-col w-[176px] items-center justify-center p-[2.428px] border border-solid border-[rgba(15,_0,_43,_0.2)] shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white rounded-[6.096px]">
                    <div className="flex flex-col w-full h-[42px] py-2 px-[9px] justify-center items-start gap-[2.42px] self-stretch ">
                      <div className="text-[9px] w-[137px] h-3 italic font-normal font-['Inter'] text-[#0f002b]">
                        open challenge from{" "}
                        <span className="font-extrabold">ravan3p</span>
                      </div>
                      <div
                        id="MinutesAgo1"
                        className="text-[9px] font-['Inter'] font-normal text-[#0f002b]"
                      >
                        . 2 minutes ago
                      </div>
                    </div>
                    <div className="bg-[#fca837] shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] rounded-br-[6.096px] rounded-bl-[6.096px] relative flex flex-row pt-[9.103px] pr-[19.421px] pb-[9.71px] pl-[9.71px] gap-[38.13px] w-[171px] h-14 items-center">
                      <div className="flex flex-row gap-[9px] w-[79px] h-[19px] absolute top-2 py-[3.034px] px-[3.641px] items-start">
                        <div className="text-[9.7px] font-['Inter'] text-white font-normal ">
                          Entry fee
                        </div>
                        <div className="text-[9.7px] font-['Inter'] text-white font-extrabold">
                          ₹40
                        </div>
                      </div>
                      <div className="flex flex-row gap-[9px] w-[79px] py-[3.034px] px-[3.641px] mt-[1.5rem] items-start">
                        <div className="text-[9.7px] font-['Inter'] text-white font-normal">
                          Prize
                        </div>
                        <div className="text-[9.7px] font-['Inter'] text-white font-extrabold">
                          ₹80
                        </div>
                      </div>
                      <div className=" flex w-[25.5px] h-[25.5px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]">
                        <img
                          src={LiveBattle}
                          alt="Arcticonsbattleforwesnoth"
                          className="w-4"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[176px] items-center justify-center p-[2.428px] border border-solid border-[rgba(15,_0,_43,_0.2)] shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white rounded-[6.096px]">
                    <div className="flex flex-col w-full h-[42px] py-2 px-[9px] justify-center items-start gap-[2.42px] self-stretch ">
                      <div className="text-[9px] w-[137px] h-3 italic font-normal font-['Inter'] text-[#0f002b]">
                        open challenge from{" "}
                        <span className="font-extrabold">ravan3p</span>
                      </div>
                      <div
                        id="MinutesAgo1"
                        className="text-[9px] font-['Inter'] font-normal text-[#0f002b]"
                      >
                        . 2 minutes ago
                      </div>
                    </div>
                    <div className="bg-[#fca837] shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] rounded-br-[6.096px] rounded-bl-[6.096px] relative flex flex-row pt-[9.103px] pr-[19.421px] pb-[9.71px] pl-[9.71px] gap-[38.13px] w-[171px] h-14 items-center">
                      <div className="flex flex-row gap-[9px] w-[79px] h-[19px] absolute top-2 py-[3.034px] px-[3.641px] items-start">
                        <div className="text-[9.7px] font-['Inter'] text-white font-normal ">
                          Entry fee
                        </div>
                        <div className="text-[9.7px] font-['Inter'] text-white font-extrabold">
                          ₹40
                        </div>
                      </div>
                      <div className="flex flex-row gap-[9px] w-[79px] py-[3.034px] px-[3.641px] mt-[1.5rem] items-start">
                        <div className="text-[9.7px] font-['Inter'] text-white font-normal">
                          Prize
                        </div>
                        <div className="text-[9.7px] font-['Inter'] text-white font-extrabold">
                          ₹80
                        </div>
                      </div>
                      <div className=" flex w-[25.5px] h-[25.5px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]">
                        <img
                          src={LiveBattle}
                          alt="Arcticonsbattleforwesnoth"
                          className="w-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* sort battle */}
            <div className="border-solid flex flex-col gap-8 w-full h-40 items-start pl-4 py-4 border-b border-black/30">
              <div
                id="SortBattle1"
                className="text-center text-xl font-['Inter'] text-white"
              >
                sort <span className="font-bold">battle</span>
              </div>
              <div className="flex flex-row w-[264px] h-14 p-[10px] items-center justify-center gap-[10px] shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white mx-auto rounded-lg">
                <div className="flex flex-row py-0 px-2 gap-1 w-[77px] h-[19px] items-center text-base font-normal">
                  <div className="text-center font-['Inter'] text-[#0f002b]">
                    ₹
                  </div>
                  <input
                    type="number"
                    placeholder="From"
                    className="text-center font-['Inter'] text-black/56.99999999999999 w-12 h-[19px"
                  />
                </div>
                <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-white flex w-8 h-8 items-center justify-center p-[6px] rounded-2xl flex-shrink-0">
                  <img
                    src={Filter}
                    alt="Iconoirfilter"
                    id="Iconoirfilter"
                    className="w-5"
                  />
                </div>
                <div className="flex flex-row py-0 px-2 gap-1 w-[77px] h-[19px] items-center text-base font-normal">
                  <div className="text-center font-['Inter'] text-[#0f002b]">
                    ₹
                  </div>
                  <input
                    type="number"
                    placeholder="To"
                    className="text-center font-['Inter'] text-black/56.99999999999999 w-12 h-[19px"
                  />
                </div>
              </div>
            </div>
            {/* Sort battle Ends */}
          </div>
          <div
            id="StartYourOwnBattle1"
            className="text-left text-xl font-['Inter'] font-normal text-white ml-4"
          >
            start your own <span className="font-bold">battle</span>
          </div>
          <div className="flex w-[290px] h-14 p-[10px] justify-center items-center gap-[10px] shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white  mx-auto rounded-[10px]">
            <div className="flex flex-row gap-1 w-[220px] py-0 px-2 items-center">
              <div className="text-center font-['Inter'] text-[#0f002b]">₹</div>
              <div>
                <input
                  type="number"
                  placeholder="Your battle amount"
                  className="text-start font-['Inter'] text-black/56.99999999999999"
                />
              </div>
            </div>
            <div className="flex w-10 h-10 p-[6px] justify-center items-center shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-[#ffb653] rounded-[20px]">
              <img
                src={LiveBattle}
                alt="Arcticonsbattleforwesnoth4"
                className="mb-1 w-6"
              />
            </div>
          </div>
        </div>

        </div>
     

        {/* battle section ends */}
      </div>
    </>
  );
};

export default MyWalletMain;

import React, { useState } from "react";
import "../../app.css";

import AddGame from "../../assets/new_game/addgame.svg";
import Profile from "../../assets/new_game/profile.svg";
import WinCash from "../../assets/new_game/wincash.svg";
import Wallet from "../../assets/new_game/wallet.svg";
import GameHistory from "../../assets/new_game/history.svg";
import ReferEarn from "../../assets/new_game/refer&earn.svg";
import Support from "../../assets/new_game/support.svg";
import LiveBattle from "../../assets/new_game/livebattle.svg";
import Copy from "../../assets/new_game/copy.svg";
import Share from "../../assets/new_game/share.svg";
import Fb from "../../assets/new_game/fb.svg";
import Wp from "../../assets/new_game/wp.svg";
import Twtr from "../../assets/new_game/twtr.svg";
import Filter from "../../assets/new_game/filter.svg";
import Info from "../../assets/referr/info.svg";
import HamBurger from "../../assets/profile/hamburger.svg";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import Back from "../../assets/profile/ep_back.svg";
import Favorite from "../../assets/new_game/fav.svg";
import BellIcon from "../../assets/new_game/notification.svg";
import { Link } from "react-router-dom";
import Sidebar from "../MainLayout/Sidebar";
import { SidebarMob } from "../MainLayout/SidebarMob";
const TransactionHistoryPc = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <div className="w-full h-[32px] bg-[var(--main-coloryellow-orange)] lg:w-0 lg:h-0" />

        <div className="bg-[#fead3a] flex flex-row justify-between max-w-[480px] w-full h-12 items-start pt-2 px-5 lg:hidden">
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

        <div
          id="AppContent"
          className="overflow-hidden bg-[#0f002b] flex flex-col gap-10 w-full max-w-[390px] font-['Inter'] items-start lg:hidden"
        ></div>
      </div>
      <div
        id="TransactionHistory"
        className="lg:bg-[#0f002b] lg:flex h-full md:w-full min-h-screen  lg:items-center"
      >
        <Sidebar isClick6={true} />

        <div className="flex  w-full  overflow-hidden">
          <div className="bg-[#fead3a] w-full  sm:w-1/2 flex flex-col pb-4 gap-6  h-full min-h-screen  left-[200px] items-start pt-10 sm:pt-0 ">
            <div className="flex flex-col gap-2 w-full items-start">
              <div className="bg-[#fead3a]  hidden  sm:flex flex-row justify-between w-full h-16 items-start pt-4 px-5">
                <div
                  id="GameHistory1"
                  className="text-center text-xl font-['Inter'] text-[#0f002b] mt-px"
                >
                  Transaction <span className="font-bold">History</span>
                </div>
                <img
                  src={Info}
                  alt="ActionInfoOutline icon"
                  id="Icoutlineinfo"
                  className="w-6"
                />
              </div>
              <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col ml-20 w-2/3 items-start rounded-lg">
                <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col justify-end pt-3 gap-6 w-full items-start rounded-tl-lg rounded-tr-lg">
                  <div className="flex flex-col ml-3 gap-5 w-5/6 items-start">
                    <div className="text-xs font-['Nunito_Sans'] font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-1 w-20 h-6 items-start rounded-lg">
                      5 min ago
                    </div>
                    <div className="text-xs font-['Nunito_Sans'] font-semibold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row w-full items-start pt-2 px-3 rounded-lg">
                      You won this match,
                      <br />
                      you vs <span className="font-bold">kansh23i</span>
                    </div>
                  </div>
                  <div
                    id="Line"
                    className="border-solid border-t-4 border-white w-full h-1"
                  />
                </div>
                <div className="border-solid border-t-4 border-[#008000] flex flex-row justify-between w-full h-16 items-start pt-3 px-4">
                  <div className="bg-white flex flex-row justify-center pt-1 gap-1 w-20 items-start">
                    <div className="text-xl font-['Inter'] text-[#0f002b] mb-1">
                      ₹
                    </div>
                    <div className="text-xl font-['Inter'] font-bold text-[#0f002b]">
                      501
                    </div>
                  </div>
                  <div className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row text-sm font-['Inter'] font-bold text-white justify-center mt-px pt-2 gap-1 w-20 h-8 items-start rounded-lg">
                    Withdrawal Successful
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col ml-20 w-2/3 items-start rounded-lg">
              <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col justify-end pt-3 gap-6 w-full items-start rounded-tl-lg rounded-tr-lg">
                <div className="flex flex-col ml-3 gap-5 w-5/6 items-start">
                  <div className="text-xs font-['Nunito_Sans'] font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-1 w-20 h-6 items-start rounded-lg">
                    5 min ago
                  </div>
                  <div className="text-xs font-['Nunito_Sans'] font-semibold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row w-full items-start pt-2 px-3 rounded-lg">
                    You won this match,
                    <br />
                    you vs <span className="font-bold">kansh23i</span>
                  </div>
                </div>
                <div
                  id="Line2"
                  className="border-solid border-t-4 border-white w-full h-1"
                />
              </div>
              <div className="border-solid border-t-4 border-[#008000] flex flex-row justify-between w-full h-16 items-start pt-3 px-4">
                <div className="bg-white flex flex-row justify-center pt-1 gap-1 w-20 items-start">
                  <div className="text-xl font-['Inter'] text-[#0f002b] mb-1">
                    ₹
                  </div>
                  <div className="text-xl font-['Inter'] font-bold text-[#0f002b]">
                    501
                  </div>
                </div>
                <div className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-px pt-2 gap-1 w-20 h-8 items-start rounded-lg">
                  <img
                    src="https://file.rendit.io/n/WkNNk1ch2tLPMVGkpOHL.svg"
                    alt="Nototrophy1"
                    id="Nototrophy1"
                    className="w-4"
                  />
                  <div className="text-sm font-['Inter'] font-bold text-white">
                    Won
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
                <div className="text-center font-['Inter'] text-[#0f002b]">
                  ₹
                </div>
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

export default TransactionHistoryPc;

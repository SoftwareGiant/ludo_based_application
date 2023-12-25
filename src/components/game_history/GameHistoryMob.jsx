import React, { useState } from "react";
import "../../app.css";

import HamBurger from "../../assets/profile/hamburger.svg";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import Back from "../../assets/profile/ep_back.svg";
import Favorite from "../../assets/new_game/fav.svg";
import BellIcon from "../../assets/new_game/notification.svg";

import AddGame from "../../assets/new_game/addgame.svg";
import Profile from "../../assets/new_game/profile.svg";
import WinCash from "../../assets/new_game/wincash.svg";
import Wallet from "../../assets/new_game/wallet.svg";
import GameHistory from "../../assets/new_game/history.svg";
import ReferEarn from "../../assets/new_game/refer&earn.svg";
import Support from "../../assets/new_game/support.svg";
const GameHistoryMob = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? (
        <div>
          <div className="w-[390px] h-[32px] bg-[var(--main-coloryellow-orange)]" />
          {/* Hamburger section */}
          <div className="bg-[#fead3a] flex flex-row justify-between w-[390px] lg:w-full h-12 items-start pt-2 px-5">
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
            <img
              src={FrameProfile}
              alt="Frame1"
              className="mt-1 w-8 h-8 border rounded-[100px]"
            />
          </div>
          {/* Hamburger section */}
          <div
            id="AppContentRoot"
            className="overflow-hidden bg-[#0f002b] flex flex-col gap-10 w-full items-start"
          >
            <div className="relative flex flex-row justify-center w-[256.41%] items-start mt-[-323px] mx-[-305px]">
              <div
                id="Ellipse"
                className="w-full h-[1000px] bg-[#fead3a] absolute top-0 left-0 flex flex-col justify-end gap-10 items-start pl-[339px] py-[209px] rounded-[50%]"
              >
                <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-1/2 items-start rounded-lg">
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
                    <div className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-px pt-2 gap-1 w-20 h-8 items-start rounded-lg">
                      <img
                        src="https://file.rendit.io/n/HWDVGP9RSpJ7MGBFa7M1.svg"
                        alt="Nototrophy"
                        id="Nototrophy"
                        className="w-4"
                      />
                      <div className="text-sm font-['Inter'] font-bold text-white">
                        Won
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-1/2 items-start rounded-lg">
                  <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col justify-end pt-3 gap-6 w-full items-start rounded-tl-lg rounded-tr-lg">
                    <div className="flex flex-col ml-3 gap-5 w-5/6 items-start">
                      <div className="text-xs font-['Nunito_Sans'] font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-1 w-20 h-6 items-start rounded-lg">
                        23 min ago
                      </div>
                      <div className="text-xs font-['Nunito_Sans'] font-semibold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row w-full items-start pt-2 px-3 rounded-lg">
                        You lost this match,
                        <br />
                        you vs <span className="font-bold">kansh23i</span>
                      </div>
                    </div>
                    <div
                      id="Line1"
                      className="border-solid border-t-4 border-white w-full h-1"
                    />
                  </div>
                  <div className="border-solid border-t-4 border-[#ff0000] flex flex-row justify-between w-full h-16 items-start pt-3 px-4">
                    <div className="bg-white flex flex-row justify-center pt-1 gap-1 w-20 items-start">
                      <div className="text-xl font-['Inter'] text-[#0f002b] mb-1">
                        ₹
                      </div>
                      <div className="text-xl font-['Inter'] font-bold text-[#0f002b]">
                        23
                      </div>
                    </div>
                    <div className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-px pt-2 gap-1 w-20 h-8 items-start rounded-lg">
                      <img
                        src="https://file.rendit.io/n/9JMTzGSuRnRNUrL70tbc.svg"
                        alt="Twemojisadbutrelievedface"
                        className="w-4"
                      />
                      <div className="text-sm font-['Inter'] font-bold text-white">
                        Lost
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white relative flex flex-col mt-[831px] w-1/3 items-start rounded-lg">
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
                      src="https://file.rendit.io/n/3z6vsbxM81UuaEApCUDG.svg"
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
            <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-row w-5/6 h-48 items-start mb-[-178px] ml-8 rounded-lg">
              <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-row w-full h-32 items-start pt-3 px-3 rounded-tl-lg rounded-tr-lg">
                <div className="text-xs font-['Nunito_Sans'] font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-1 w-20 h-6 items-start rounded-lg">
                  5 min ago
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-[390px] h-[32px] bg-[var(--main-coloryellow-orange)]" />
          <div
            id="MenuRoot"
            className="bg-[#fead3a] flex flex-col gap-6 w-[390px] font-['Nunito_Sans'] items-start pt-3 pb-12 px-5"
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
    </>
  );
};

export default GameHistoryMob;

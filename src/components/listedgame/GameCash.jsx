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

const GameCash = () => {
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
          <div className="bg-[#fead3a] flex flex-row justify-between w-[390px] h-12 items-start pt-2 px-5">
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
            id="AppContent"
            className="overflow-hidden bg-[#0f002b] flex flex-col gap-10 w-[390px] font-['Inter'] items-start"
          >
            <div
              id="Ellipse"
              className="bg-[#fead3a] flex flex-col justify-end gap-10 w-[256.41%] h-[1000px] items-start mt-[-323px] mx-[-305px] pl-[305px] py-1 rounded-[50%]"
            >
              <div className="flex flex-col gap-2 w-3/5 items-start">
                <div className="bg-[#fead3a] flex flex-row justify-between w-full h-16 items-start pt-4 px-5">
                  <div className="flex flex-row gap-5 w-1/2 items-start">
                    <img
                      src="https://file.rendit.io/n/Nk4vtiFAGK9N0aahT5uJ.svg"
                      alt="HardwareKeyboardBackspace icon"
                      id="Epback"
                      className="w-6"
                    />
                    <div
                      id="ListedBattle2"
                      className="text-center text-xl font-bold text-[#0f002b] mt-1 font-['Inter']"
                    >
                      listed<span> </span>
                      <span>battle</span>
                    </div>
                  </div>
                  <img
                    src="https://file.rendit.io/n/luCnUulSb2NJYRboAfmY.svg"
                    alt="ActionInfoOutline icon"
                    id="Icoutlineinfo"
                    className="mt-px w-6"
                  />
                </div>
                <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col ml-8 pb-4 gap-4 w-5/6 font-['Nunito_Sans'] items-start rounded-lg">
                  <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col justify-center gap-px w-full items-start p-3 rounded-tl-lg rounded-tr-lg">
                    <div className="flex flex-row gap-16 w-full items-start">
                      <div className="text-2xl font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-2 w-2/3 items-start rounded-lg">
                        AstroAvenger
                      </div>
                      <img
                        src="https://file.rendit.io/n/Pst1HqpIVMY3iiwbrimY.svg"
                        alt="Notofire"
                        id="Notofire"
                        className="mt-2 w-8"
                      />
                    </div>
                    <div className="font-semibold text-[#60e560] shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row w-full h-8 items-start pt-2 px-3 rounded-lg">
                      232 Playing<span className="text-white"> </span>
                      <span className="font-bold text-white">·</span>
                      <span className="text-white"> </span>
                      <span className="text-[#ff7676]">1 waiting</span>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between ml-4 w-5/6 font-['Inter'] items-start">
                    <div className="bg-white flex flex-row justify-center pt-1 gap-1 w-24 items-start">
                      <div className="text-xl text-[#0f002b] mb-1">₹</div>
                      <div className="text-xl font-bold text-[#0f002b]">
                        205
                      </div>
                    </div>
                    <div className="text-sm font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-px pt-2 w-16 h-8 items-start rounded-lg">
                      Battle
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col ml-8 pb-4 gap-4 w-1/2 font-['Nunito_Sans'] items-start rounded-lg">
                <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col justify-center gap-px w-full items-start p-3 rounded-tl-lg rounded-tr-lg">
                  <div className="flex flex-row gap-16 w-full items-start">
                    <div className="text-2xl font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-2 w-2/3 items-start rounded-lg">
                      AstroAvenger
                    </div>
                    <img
                      src="https://file.rendit.io/n/ADxDACoeMuCHRbc1f3TQ.svg"
                      alt="Notofire1"
                      id="Notofire1"
                      className="mt-2 w-8"
                    />
                  </div>
                  <div className="font-semibold text-[#60e560] shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row w-full h-8 items-start pt-2 px-3 rounded-lg">
                    10054 Playing<span className="text-white"> </span>
                    <span className="font-bold text-white">·</span>
                    <span className="text-white"> </span>
                    <span className="text-[#ff7676]">11 waiting</span>
                  </div>
                </div>
                <div className="flex flex-row justify-between ml-4 w-5/6 font-['Inter'] items-start">
                  <div className="bg-white flex flex-row justify-center pt-1 gap-1 w-20 items-start">
                    <div className="text-xl text-[#0f002b] mb-1">₹</div>
                    <div className="text-xl font-bold text-[#0f002b]">100</div>
                  </div>
                  <div className="text-sm font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-px pt-2 w-16 h-8 items-start rounded-lg">
                    Battle
                  </div>
                </div>
              </div>
              <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col ml-8 pb-4 gap-4 w-1/2 font-['Nunito_Sans'] items-start rounded-lg">
                <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col justify-center gap-px w-full items-start p-3 rounded-tl-lg rounded-tr-lg">
                  <div className="flex flex-row gap-16 w-full items-start">
                    <div className="text-2xl font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-2 w-2/3 items-start rounded-lg">
                      AstroAvenger
                    </div>
                    <img
                      src="https://file.rendit.io/n/NyFo6OIK1Y1y7AV7It1a.svg"
                      alt="Notofire2"
                      id="Notofire2"
                      className="mt-2 w-8"
                    />
                  </div>
                  <div className="font-semibold text-[#60e560] shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row w-full h-8 items-start pt-2 px-3 rounded-lg">
                    532 Playing<span className="text-white"> </span>
                    <span className="font-bold text-white">·</span>
                    <span className="text-white"> </span>
                    <span className="text-[#ff7676]">0 waiting</span>
                  </div>
                </div>
                <div className="flex flex-row justify-between ml-4 w-5/6 font-['Inter'] items-start">
                  <div className="bg-white flex flex-row justify-center pt-1 gap-1 w-24 items-start">
                    <div className="text-xl text-[#0f002b] mb-1">₹</div>
                    <div className="text-xl font-bold text-[#0f002b]">600</div>
                  </div>
                  <div className="text-sm font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-px pt-2 w-16 h-8 items-start rounded-lg">
                    Battle
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-row w-5/6 h-[174px] items-start mb-[-126px] ml-8 rounded-lg">
              <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-row gap-16 w-full h-[110px] font-['Nunito_Sans'] items-start pt-3 px-3 rounded-tl-lg rounded-tr-lg">
                <div className="text-2xl font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-2 w-3/5 items-start rounded-lg">
                  AstroAvenger
                </div>
                <img
                  src="https://file.rendit.io/n/qa22MOb5UBSoxxdNHZuq.svg"
                  alt="Notofire3"
                  id="Notofire3"
                  className="mt-2 w-8"
                />
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

export default GameCash;

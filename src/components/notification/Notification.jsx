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

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? (
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
      ) : (
        <div>
          <div className="w-[390px] h-[32px] bg-[var(--main-coloryellow-orange)]" />
          {/* ham burger */}
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
              src={Profile}
              alt="Frame1"
              className="mt-1 w-8 h-8 border rounded-[100px]"
            />
          </div>
          {/* ham Burger */}
          <div
            id="AppContentRoot"
            className="overflow-hidden bg-[#0f002b] flex flex-row w-[390px] items-start"
          >
            <div
              id="Ellipse"
              className="bg-[#fead3a] flex flex-col justify-between w-[256.41%] h-[1000px] items-start mt-[-323px] mb-20 mx-[-305px] pt-[323px] pb-4 pl-[305px] rounded-[50%]"
            >
              <div className="flex flex-col gap-10 w-3/5 items-start">
                <div className="flex flex-col gap-4 w-full items-start">
                  <div className="bg-[#fead3a] flex flex-col pt-px w-full items-start">
                    <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center ml-[241px] pt-2 gap-1 w-[144px] h-8 items-start rounded-lg">
                      <img
                        src={Mail}
                        alt="Fluentmailreadregular"
                        className="w-4"
                      />
                      <div className="text-xs font-['Inter'] font-semibold text-[#0f002b]">
                        mark all as read
                      </div>
                    </div>
                    <div
                      id="Line"
                      className="border-solid w-full h-px border-t border-black/30"
                    />
                  </div>
                  <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col ml-8 pb-3 gap-3 w-5/6 items-start rounded-lg md:ml-20 md:w-2/3">
                    <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col gap-3 w-full h-32 items-start pl-3 py-3 rounded-tl-lg rounded-tr-lg">
                      <div className="text-xs font-['Nunito_Sans'] font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-1 w-24 h-6 items-start rounded-lg">
                        49 hours ago
                      </div>
                      <div className="text-xs font-['Nunito_Sans'] font-semibold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-2 w-full items-start rounded-lg">
                        Refer your friends and get 1.5% commission on their
                        winning amount. Promotion valid for the next 72hours.
                      </div>
                    </div>
                    <div className="flex flex-row justify-between ml-4 w-5/6 items-start">
                      <div className="text-xl font-['Inter'] font-bold text-[#0f002b] bg-white flex flex-row justify-center mt-1 pt-1 w-2/5 items-start">
                        1.5% Off
                      </div>
                      <img
                        src={Swipe}
                        alt="Iconamoonarrowuplight"
                        className="w-10"
                      />
                    </div>
                  </div>
                </div>
                <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col ml-8 pb-4 gap-4 w-5/6 items-start rounded-lg">
                  <div className="border-solid border-b border-white/30 bg-[#0f002b] relative flex flex-row justify-end w-full items-start pt-3 px-6 rounded-tl-lg rounded-tr-lg">
                    <div className="text-xs font-['Nunito_Sans'] font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] w-20 h-6 absolute top-3 left-3 flex flex-row justify-center pt-1 items-start rounded-lg">
                      5min ago
                    </div>
                    <div className="text-xs font-['Nunito_Sans'] font-semibold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] w-5/6 h-8 absolute top-8 left-3 flex flex-row items-start pt-2 px-3 rounded-lg">
                      HURRY UP!
                    </div>
                    <img
                      src={DropIcon}
                      alt="Iconamoonarrowuplight1"
                      className="relative mb-8 w-6"
                    />
                  </div>
                  <div className="text-xl font-['Inter'] font-bold text-[#0f002b] bg-white flex flex-row justify-center ml-4 pt-1 w-24 items-start">
                    1% Off
                  </div>
                </div>
              </div>
              <div
                id="ClearAll1"
                className="font-['Inter'] font-bold text-white bg-[#0f002b] flex flex-row justify-center ml-24 pt-4 w-1/3 h-12 items-start rounded-lg"
              >
                Clear All
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;

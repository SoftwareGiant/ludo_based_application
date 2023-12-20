import React, { useState } from "react";
import "../../app.css";

import HamBurger from "../../assets/profile/hamburger.svg";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import Attachment from "../../assets/support/Attachment.svg";
import Emoji from "../../assets/support/Emoji.svg";
import Menu from "../../assets/support/menu.svg";
import Seen from "../../assets/support/Seen.svg";
import Send from "../../assets/support/Send.svg";
import Customer from "../../assets/support/support.png";

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
const SupportMob = () => {
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
          {/* Hamburger section ends */}
          <div className="border-solid bg-[#fead3a] flex flex-row justify-between w-[390px] h-16 items-start pt-3 px-5 border-b border-black/30">
            <div className="inline-flex gap-[6px] w-[201px] h-[40px] items-center py-1 px-[9px] ">
              <img
                src={Customer}
                alt="Frame1"
                className="w-8 h-8 border border-solid border-white rounded-[100px]"
              />
              <div className="text-center font-['Inter'] font-medium text-base text-[#0f002b] leading-normal">
                Customer Service
              </div>
            </div>
            <img
              src={Menu}
              alt="Charmmenukebab"
              id="Charmmenukebab"
              className="mt-2 w-5 h-5"
            />
          </div>
          {/* Chat Section */}
          <div id="NewRootRoot" className="flex flex-row w-[390px] items-start">
            <div
              id="AppContent"
              className="overflow-hidden bg-[#0f002b] flex flex-row w-full items-start"
            >
              <div
                id="Ellipse"
                className="bg-[#fead3a] flex flex-col justify-end gap-4 w-[256.41%] items-start mt-[-323px] mb-6 mx-[-305px] pt-[112px] pb-8 px-[326px] rounded-[50%]"
              >
                <div className="text-xs font-['Inter'] text-white shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row ml-5 w-2/3 h-[235px] items-start pt-2 px-6 rounded-[20px]">
                  09:23
                </div>
                <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col justify-center ml-24 pl-6 gap-1 w-2/3 h-16 items-start rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px]">
                  <div className="font-['Inter'] font-medium text-[#0f002b]">
                    My issue is not listed.
                  </div>
                  <div className="flex flex-row ml-32 w-12 items-start">
                    <div className="text-xs font-['Inter'] text-[#0f002b] mt-0">
                      09:23
                    </div>
                    <img
                      src={Seen}
                      alt="ActionVerifiedUser icon"
                      id="Component1"
                      className="w-4"
                    />
                  </div>
                </div>
                <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-col justify-center ml-5 gap-2 w-2/3 items-start px-6 py-2 rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]">
                  <div className="font-['Inter'] font-medium text-white w-full">
                    No Problem! You can always chat with me I'm here to assist
                    you!
                  </div>
                  <div className="text-xs font-['Inter'] text-white">09:23</div>
                </div>
                <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col justify-center ml-24 pl-6 gap-1 w-2/3 h-20 items-start rounded-tl-[20px] rounded-br-[20px] rounded-bl-[20px]">
                  <div className="font-['Inter'] font-medium text-[#0f002b] w-5/6">
                    Last transaction details.
                  </div>
                  <div className="flex flex-row ml-32 w-12 items-start">
                    <div className="text-xs font-['Inter'] text-[#0f002b] mt-0">
                      09:23
                    </div>
                    <img
                      src={Seen}
                      alt="ActionVerifiedUser icon"
                      id="Component2"
                      className="w-4"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full items-start">
                  <div className="flex flex-col ml-5 gap-2 w-2/3 items-start">
                    <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-col justify-center gap-2 w-full items-start px-6 py-2 rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]">
                      <div className="font-['Inter'] font-medium text-white w-full">
                        Your last transaction dated 22.10.2023 time 21:14
                        details are here.
                      </div>
                      <div className="text-xs font-['Inter'] text-white">
                        09:23
                      </div>
                    </div>
                    <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-col justify-center gap-2 w-full items-start px-6 py-2 rounded-[20px]">
                      <div className="font-['Inter'] font-medium text-white w-full">
                        Withdrew ₹500 from your Ludo King account to your bank
                        account ending with{" "}
                        <span className="font-bold">7658</span>
                      </div>
                      <div className="text-xs font-['Inter'] text-white">
                        09:23
                      </div>
                    </div>
                  </div>
                  {/* Message Type Box */}
                  <div
                    id="TypeAMessage1"
                    className="bg-white flex flex-row justify-center py-[17px] px-[18px] gap-[16px] w-[349px] h-14 items-center rounded-[10px]"
                  >
                    <img
                      src={Emoji}
                      alt="Emoji"
                      id="Emoji"
                      className="w-[22px] h-[22px]"
                    />
                    <input
                      type="text"
                      placeholder="Type a message"
                      className="opacity-40 font-['Inter'] font-medium text-[#0f002b] text-base w-[203px]"
                    />

                    <img
                      src={Attachment}
                      alt="Attachment"
                      id="Attachment"
                      className="w-5 h-5"
                    />
                    <img src={Send} alt="Send" id="Send" className="w-5 h-5" />
                  </div>
                  {/* Message Type Box Ends*/}
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

export default SupportMob;

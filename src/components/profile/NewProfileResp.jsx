import React, { useState } from "react";
import "../../app.css";

import LogOutMob from "../../assets/profile/respon_logout.svg";
import HamBurger from "../../assets/profile/hamburger.svg";
import Profile_Edit from "../../assets/profile/profile_edit.svg";
import Verify from "../../assets/profile/verify.svg";
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
const NewProfileResp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? (
        <div>
          <div id="NotificationspaceRoot" className="bg-[#fead3a] w-full h-8" />
          <div id="NewRootRoot" className="flex flex-row w-full items-start">
            <div className="bg-[#fead3a] flex flex-row justify-between w-full items-start pt-px px-5">
              <div className="flex flex-row gap-3 w-2/5 items-start mt-1 mb-px">
                <div className="relative flex flex-row mt-1 w-6 items-start">
                  <img
                    src={HamBurger}
                    alt="Materialsymbolsmenu"
                    id="Materialsymbolsmenu"
                    className="w-6 h-6 absolute top-0 left-0"
                    onClick={toggleNavbar}
                  />
                </div>
                <div className="relative flex flex-row justify-center w-24 items-start">
                  <div className="text-center text-base font-['Nunito_Sans'] font-bold text-[#0f002b] absolute top-0 left-0 h-5 w-24">
                    LUDO KING
                  </div>
                  <div className="text-center text-base font-['Oooh_Baby'] text-[#0f002b] relative mt-4">
                    punch line
                  </div>
                </div>
              </div>
              <div className="border-solid border-[rgba(15,_0,_43,_0.3)] bg-[rgba(15,_0,_43,_0.3)] inline-flex justify-center py-[7px] px-3 w-11 h-9 items-center border rounded-[18px] gap-[18px]">
                <img
                  src={LogOutMob}
                  alt="Materialsymbolslogout"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-[#0f002b] flex flex-col pb-2 gap-5 w-full items-start">
            <div
              id="Ellipse"
              className="bg-[#fead3a] flex flex-row justify-center pt-16 w-[256.41%] h-[1000px] items-start mt-[-705px] mx-[-305px] rounded-[50%]"
            >
              <div className="bg-profile bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-end mt-[666px] w-1/5 h-48 items-start px-2 border-none">
                <div className="bg-white flex flex-row justify-center mt-0 pt-4 w-12 h-12 items-start rounded-[25.000001907348633px]">
                  <img
                    src={Profile_Edit}
                    alt="Materialsymbolseditoutline"
                    className="w-5"
                  />
                </div>
              </div>
            </div>
            <div className="">
              {/* user name */}
              <div className="inline-flex flex-col justify-center items-center w-[196.714px] h-[68px] ">
                <div className="flex gap-1 w-full h-[41px] items-center">
                  <div className="text-center text-3xl font-['Nunito_Sans'] font-bold w-[167px] h-auto text-white">
                    Ludo Player
                  </div>
                  <img
                    src={Verify}
                    alt="Iconparkoutlinesuccess"
                    className="h-6 w-6"
                  />
                </div>
                <div className="text-center text-xl font-['Nunito_Sans'] text-white w-[115px] h-[27px] font-normal  ">
                  @ludoplayer
                </div>
              </div>
              {/* user name */}
              <div className="bg-[#0f002b] flex flex-col justify-center gap-10 w-full items-start pt-5 pb-6 px-8">
                <div className="flex flex-row gap-24 w-full items-start">
                  <div className="flex flex-col justify-between w-2/5 h-24 items-start">
                    <div className="text-xl font-['Nunito_Sans'] font-bold text-white">
                      Basic Details
                    </div>
                    <div
                      id="PhoneNo"
                      className="text-sm font-['Nunito_Sans'] text-white ml-4"
                    >
                      Phone no.
                      {"     "}:
                    </div>
                    <div
                      id="UserID"
                      className="text-sm font-['Nunito_Sans'] text-white ml-4"
                    >
                      User ID
                      {"         "}:
                    </div>
                  </div>
                  <div className="flex flex-col mt-1 gap-5 w-1/3 items-start">
                    <img
                      src="https://file.rendit.io/n/pTRWx4BiDsi0PrZv23Dh.svg"
                      alt="Materialsymbolseditoutline1"
                      className="ml-20 w-5"
                    />
                    <div className="flex flex-col gap-4 w-24 h-16 items-start">
                      <div className="text-sm font-['Nunito_Sans'] text-white">
                        5348757512
                      </div>
                      <div className="text-sm font-['Nunito_Sans'] text-white ml-6">
                        0042356
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-6 w-5/6 items-start">
                  <div className="flex flex-row gap-10 w-full items-start">
                    <div className="flex flex-col mb-px gap-6 w-3/4 h-16 items-start">
                      <div className="text-xl font-['Nunito_Sans'] font-bold text-white">
                        Notification Preference
                      </div>
                      <div
                        id="Email"
                        className="text-sm font-['Nunito_Sans'] text-white ml-4"
                      >
                        Email
                        {"             "}:
                      </div>
                    </div>
                    <img
                      src="https://file.rendit.io/n/YJUG93YpttskCMoyMyM5.svg"
                      alt="ToggleSwitch"
                      id="ToggleSwitch"
                      className="mt-12 w-8"
                    />
                  </div>
                  <div className="flex flex-row justify-between ml-4 w-full items-start">
                    <div
                      id="Push"
                      className="text-sm font-['Nunito_Sans'] text-white mt-px"
                    >
                      Push
                      {"              "}:
                    </div>
                    <img
                      src="https://file.rendit.io/n/ZRtraeFqdv7dPQtm5lhC.svg"
                      alt="ToggleSwitch1"
                      id="ToggleSwitch1"
                      className="w-8"
                    />
                  </div>
                  <div className="flex flex-row justify-between ml-4 w-full items-start">
                    <div
                      id="PhoneNo1"
                      className="text-sm font-['Nunito_Sans'] text-white mt-px"
                    >
                      Phone No.
                      {"     "}:
                    </div>
                    <img
                      src="https://file.rendit.io/n/YJUG93YpttskCMoyMyM5.svg"
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

export default NewProfileResp;

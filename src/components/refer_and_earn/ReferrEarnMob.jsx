import React, { useState } from "react";
import "../../app.css";

import HamBurger from "../../assets/profile/hamburger.svg";
import Back from "../../assets/profile/ep_back.svg";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import AddGame from "../../assets/new_game/addgame.svg";
import WinCash from "../../assets/new_game/wincash.svg";
import Wallet from "../../assets/new_game/wallet.svg";
import GameHistory from "../../assets/new_game/history.svg";
import ReferEarn from "../../assets/new_game/refer&earn.svg";
import Support from "../../assets/new_game/support.svg";
import BellIcon from "../../assets/new_game/notification.svg";
import Favorite from "../../assets/new_game/fav.svg";

import Copy from "../../assets/new_game/copy.svg";
import Share from "../../assets/new_game/share.svg";
import Fb from "../../assets/new_game/fb.svg";
import Wp from "../../assets/new_game/wp.svg";
import Twtr from "../../assets/new_game/twtr.svg";

import Profile from "../../assets/new_game/profile.svg";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { useNavigate } from "react-router-dom";
const ReferrEarnMob = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [referno, setReferno] = useState(753478);
  const navigate = useNavigate();
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Text copied to clipboard:", text);
    } catch (error) {
      alert("Error copying to clipboard:", error);
    }
  };
  return (
    <>
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
          <img
            onClick={() => navigate("/profile")}
            src={FrameProfile}
            alt="Frame1"
            className="w-[30px] h-[30px] mt-[9.5px] rounded-[100px] border border-solid border-white "
          />
        </div>

        <div className="bg-[#0f002b] w-full min-h-screen overflow-hidden relative">
          <div className="bg-[#fead3a] h-80 w-[650px] rounded-[50%]   -top-20 absolute -left-24" />

          <div className="relative pt-6 w-full flex flex-col gap-4 justify-center items-center m-auto">
            <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white inline-flex  gap-[10px]  h-10 items-center   justify-center px-4 rounded-[10px] ">
              <div
                onClick={() => copyToClipboard(referno)}
                className="bg-white flex  w-8 h-8 items-center justify-center p-[6px] cursor-pointer"
              >
                <img
                  src={Copy}
                  alt="Solarcopylinear"
                  id="Solarcopylinear"
                  className="w-5"
                />
              </div>
              <div className="font-['Inter'] font-bold text-[#0f002b] flex-1 text-base">
                753478
              </div>
            </div>
            <div className="text-justify font-['Inter'] font-bold text-[#0f002b] w-3/5">
              This is your referral link. Refer your friends and earn 1%
              commission on their winning amount.
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="fixed bottom-8  inline-flex items-center justify-center min-h-[52.8px]   px-[21.12px] gap-[10px]  shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-white rounded-[13.2px] flex-wrap ">
              <div className="flex w-[42.24px] h-[42.24px] justify-center items-center p-[3.4px] ">
                <img
                  src={Wp}
                  alt="Logoswhatsappicon"
                  id="Logoswhatsappicon"
                  className="w-[35px]"
                />
              </div>
              <div className="flex w-[42.24px] h-[42.24px] justify-center items-center py-[5px] px-[4.6px] ">
                <img
                  src={Fb}
                  alt="Logosfacebook"
                  id="Logosfacebook"
                  className=" w-8"
                />
              </div>
              <div className="flex w-[42.24px] h-[42.24px] justify-center items-center py-2 px-[7.6px]">
                <img
                  src={Twtr}
                  alt="Ritwitterxfill"
                  id="Ritwitterxfill"
                  className="w-8"
                />
              </div>
              <div
                onClick={() => copyToClipboard(referno)}
                className="flex w-[42.24px] h-[42.24px] justify-center items-center p-[7.92px] cursor-pointer"
              >
                <img
                  src={Copy}
                  alt="ActionLabelOutline icon"
                  id="Solarcopylinear1"
                  className="w-8"
                />
              </div>
              <div className="flex w-[42.24px] h-[42.24px] justify-center items-center py-[4.72px] px-[5.55px] ">
                <img src={Share} alt="Mdishare" id="Mdishare" className="w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <div className="w-[390px] h-[32px] bg-[var(--main-coloryellow-orange)] md:h-0 md:w-0" />

        <div className="bg-[#fead3a] flex flex-row justify-between w-[390px] h-12 items-start pt-2 px-5 lg:hidden md:hidden">
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

        <div className="overflow-hidden bg-[#0f002b] flex flex-col justify-between pb-24 w-[390px] h-[762px] items-start lg:hidden md:hidden">
          <div
            id="Ellipse"
            className="bg-[#fead3a] flex flex-col justify-end gap-12 w-[256.41%] h-[1000px] items-start mt-[-705px] mx-[-305px] pl-[364px] py-12 rounded-[50%]"
          >
            <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white inline-flex ml-16 gap-[10px] w-auto h-10 items-center justify-center py-0 px-4 rounded-[10px]">
              <div className="bg-white flex  w-8 h-8 items-center justify-center p-[6px]">
                <img
                  src={Copy}
                  alt="Solarcopylinear"
                  id="Solarcopylinear"
                  className="w-5"
                />
              </div>
              <div className="font-['Inter'] font-bold text-[#0f002b] flex-1 text-base">
                753478
              </div>
            </div>
            <div className="text-justify font-['Inter'] font-bold text-[#0f002b] w-2/5">
              This is your referral link. Refer your friends and earn 1%
              commission on their winning amount.
            </div>
          </div>
          <div className="inline-flex items-center justify-center h-[52.8px] w-[292.72px] mx-12 md:mx-24 px-[21.12px] gap-[10px] flex-shrink-0 shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-white rounded-[13.2px]">
            <div className="flex w-[42.24px] h-[42.24px] justify-center items-center p-[3.4px] ">
              <img
                src={Wp}
                alt="Logoswhatsappicon"
                id="Logoswhatsappicon"
                className="w-[35px]"
              />
            </div>
            <div className="flex w-[42.24px] h-[42.24px] justify-center items-center py-[5px] px-[4.6px] ">
              <img
                src={Fb}
                alt="Logosfacebook"
                id="Logosfacebook"
                className=" w-8"
              />
            </div>
            <div className="flex w-[42.24px] h-[42.24px] justify-center items-center py-2 px-[7.6px]">
              <img
                src={Twtr}
                alt="Ritwitterxfill"
                id="Ritwitterxfill"
                className="w-8"
              />
            </div>
            <div className="flex w-[42.24px] h-[42.24px] justify-center items-center p-[7.92px]">
              <img
                src={Copy}
                alt="ActionLabelOutline icon"
                id="Solarcopylinear1"
                className="w-8"
              />
            </div>
            <div className="flex w-[42.24px] h-[42.24px] justify-center items-center py-[4.72px] px-[5.55px] ">
              <img src={Share} alt="Mdishare" id="Mdishare" className="w-8" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ReferrEarnMob;

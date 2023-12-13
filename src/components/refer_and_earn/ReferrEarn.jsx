import React from "react";
import "../../app.css";

import HamBurger from "../../assets/profile/hamburger.svg";
import Profile from "../../assets/profile/Frame_profile.png";
import AddGame from "../../assets/new_game/addgame.svg";
import WinCash from "../../assets/new_game/wincash.svg";
import Wallet from "../../assets/new_game/wallet.svg";
import GameHistory from "../../assets/new_game/history.svg";
import ReferEarn from "../../assets/new_game/refer&earn.svg";
import Notification from "../../assets/new_game/notification.svg";
import Support from "../../assets/new_game/support.svg";
import LiveBattle from "../../assets/new_game/livebattle.svg";
import Copy from "../../assets/new_game/copy.svg";
import Share from "../../assets/new_game/share.svg";
import Fb from "../../assets/new_game/fb.svg";
import Wp from "../../assets/new_game/wp.svg";
import Twtr from "../../assets/new_game/twtr.svg";
import Search from "../../assets/new_game/search.svg";
import Filter from "../../assets/new_game/filter.svg";
import LowToHigh from "../../assets/new_game/lowtohigh.svg";
import HighToLow from "../../assets/new_game/hightolow.svg";
const ReferrEarn = () => {
  return (
    <div>
      <div className="w-[390px] h-[32px] bg-[var(--main-coloryellow-orange)] md:h-0 md:w-0" />
      {/* Hamburger section */}
      <div className="bg-[#fead3a] flex flex-row justify-between w-[390px] h-12 items-start pt-2 px-5">
        <div className="flex flex-row gap-3 w-2/5 items-start">
          <img
            src={HamBurger}
            alt="Materialsymbolsmenu"
            id="Materialsymbolsmenu"
            className="mt-1 w-6"
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
      {/* Hamburger section */}
      <div className="overflow-hidden bg-[#0f002b] flex flex-col justify-between pb-24 w-[390px] h-[762px] items-start">
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
        {/* Social media */}
      </div>
    </div>
  );
};

export default ReferrEarn;

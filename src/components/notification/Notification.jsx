import React from "react";
import "../../app.css";

import HamBurger from "../../assets/profile/hamburger.svg";
import Profile from "../../assets/profile/Frame_profile.png";
const Notification = () => {
  return (
    <div>
      <div className="w-[390px] h-[32px] bg-[var(--main-coloryellow-orange)]" />
      {/* Hamburger section */}
      <div className="bg-[#fead3a] flex flex-row justify-between w-full h-12 items-start pt-2 px-5">
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
      <div
        id="AppContentRoot"
        className="overflow-hidden bg-[#0f002b] flex flex-row w-full items-start"
      >
        <div
          id="Ellipse"
          className="bg-[#fead3a] flex flex-col justify-between w-[256.41%] h-[1000px] items-start mt-[-323px] mb-20 mx-[-305px] pt-[323px] pb-4 pl-[305px] rounded-[50%]"
        >
          <div className="flex flex-col gap-10 w-3/5 items-start">
            <div className="flex flex-col gap-4 w-full items-start">
              <div className="bg-[#fead3a] flex flex-col pt-px w-full items-start">
                <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center ml-[241px] pt-2 gap-1 w-2/5 h-8 items-start rounded-lg">
                  <img
                    src="https://file.rendit.io/n/88sZqcnbbiEtxAEvmLx6.svg"
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
              <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col ml-8 pb-3 gap-3 w-5/6 items-start rounded-lg">
                <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col gap-3 w-full h-32 items-start pl-3 py-3 rounded-tl-lg rounded-tr-lg">
                  <div className="text-xs font-['Nunito_Sans'] font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-1 w-24 h-6 items-start rounded-lg">
                    49 hours ago
                  </div>
                  <div className="text-xs font-['Nunito_Sans'] font-semibold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-2 w-full items-start rounded-lg">
                    Refer your friends and get 1.5% commission on their winning
                    amount. Promotion valid for the next 72hours.
                  </div>
                </div>
                <div className="flex flex-row justify-between ml-4 w-5/6 items-start">
                  <div className="text-xl font-['Inter'] font-bold text-[#0f002b] bg-white flex flex-row justify-center mt-1 pt-1 w-2/5 items-start">
                    1.5% Off
                  </div>
                  <img
                    src="https://file.rendit.io/n/zgLEFz8KHWdyecZK5Mvx.svg"
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
                  src="https://file.rendit.io/n/oxs28yzDpNWJaS0ENf2S.svg"
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
  );
};

export default Notification;

import React from "react";
import "../../app.css";

import HamBurger from "../../assets/profile/hamburger.svg";
import Profile from "../../assets/profile/Frame_profile.png";
const Support = () => {
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
      <div className="border-solid bg-[#fead3a] flex flex-row justify-between w-full h-16 items-start pt-3 px-5 border-b border-black/30">
        <div className="flex flex-row mt-px gap-2 w-1/2 items-start">
          <img
            src="https://file.rendit.io/n/qoooOZzhrTYs9KJQ32wb.png"
            alt="Frame1"
            className="w-8 border"
          />
          <div className="text-center font-['Inter'] font-medium text-[#0f002b] mt-2">
            Customer Service
          </div>
        </div>
        <img
          src="https://file.rendit.io/n/2cotPIATYVtGNFPVfUIT.svg"
          alt="Charmmenukebab"
          id="Charmmenukebab"
          className="mt-2 w-5"
        />
      </div>

      <div id="NewRootRoot" className="flex flex-row w-full items-start">
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
                  src="https://file.rendit.io/n/wXZuMDcYZm2hG9HgXSXD.svg"
                  alt="ActionVerifiedUser icon"
                  id="Component1"
                  className="w-4"
                />
              </div>
            </div>
            <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-col justify-center ml-5 gap-2 w-2/3 items-start px-6 py-2 rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]">
              <div className="font-['Inter'] font-medium text-white w-full">
                No Problem! You can always chat with me I'm here to assist you!
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
                  src="https://file.rendit.io/n/wXZuMDcYZm2hG9HgXSXD.svg"
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
                    Your last transaction dated 22.10.2023 time 21:14 details
                    are here.
                  </div>
                  <div className="text-xs font-['Inter'] text-white">09:23</div>
                </div>
                <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-col justify-center gap-2 w-full items-start px-6 py-2 rounded-[20px]">
                  <div className="font-['Inter'] font-medium text-white w-full">
                    Withdrew ₹500 from your Ludo King account to your bank
                    account ending with <span className="font-bold">7658</span>
                  </div>
                  <div className="text-xs font-['Inter'] text-white">09:23</div>
                </div>
              </div>
              <div
                id="TypeAMessage1"
                className="bg-white flex flex-row justify-center pt-4 gap-24 w-full h-12 items-start rounded-lg"
              >
                <div className="flex flex-row gap-4 w-1/2 items-start">
                  <img
                    src="https://file.rendit.io/n/BmGhOtzNPbE8GudXdRjs.svg"
                    alt="Emoji"
                    id="Emoji"
                    className="w-5"
                  />
                  <div className="opacity-40 font-['Inter'] font-medium text-[#0f002b] mt-px">
                    Type a message
                  </div>
                </div>
                <div className="flex flex-row mt-px gap-4 w-12 items-start">
                  <img
                    src="https://file.rendit.io/n/qLqNAopscF9psJvmbOHY.svg"
                    alt="Attachment"
                    id="Attachment"
                    className="w-5"
                  />
                  <img
                    src="https://file.rendit.io/n/35fBMBzFHFVemyw7NdOS.svg"
                    alt="Send"
                    id="Send"
                    className="w-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

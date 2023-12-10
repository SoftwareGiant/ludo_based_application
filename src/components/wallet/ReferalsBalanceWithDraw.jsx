import React from "react";
import "../../app.css";

import HamBurger from "../../assets/profile/hamburger.svg";
import Profile from "../../assets/profile/Frame_profile.png";
const ReferalsBalanceWithDraw = () => {
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
        className="overflow-hidden bg-[#0f002b] flex flex-col pb-12 gap-4 w-full items-start"
      >
        <div
          id="Ellipse"
          className="bg-[#fead3a] flex flex-col gap-8 w-[256.41%] h-[1000px] items-start mt-[-323px] mx-[-305px] pt-[341px] pb-[459px] pl-[325px] rounded-[50%]"
        >
          <div className="flex flex-row justify-between w-1/2 items-start">
            <div className="flex flex-row gap-5 w-3/5 items-start">
              <img
                src="https://file.rendit.io/n/WzbT5ee9Vc34Gi4C6aun.svg"
                alt="HardwareKeyboardBackspace icon"
                id="Epback"
                className="w-6"
              />
              <div className="text-center text-xl font-['Inter'] text-[#0f002b] mt-px">
                Redeem Your Referral Balance
              </div>
            </div>
            <img
              src="https://file.rendit.io/n/Yk01qZMJ0e8TSCsZCWVx.svg"
              alt="ActionInfoOutline icon"
              id="Icoutlineinfo"
              className="w-6"
            />
          </div>
          <div className="flex flex-col ml-2 gap-6 w-1/2 items-start">
            <div className="flex flex-row justify-between w-full items-start">
              <div className="text-center text-xl font-['Inter'] text-[#0f002b]">
                Referral Balance
              </div>
              <div className="flex flex-row gap-2 w-12 items-start">
                <div className="text-center text-xl font-['Inter'] text-[#0f002b]">
                  ₹
                </div>
                <div className="text-center text-xl font-['Inter'] text-[#0f002b]">
                  23
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-1 gap-2 w-full items-start">
              <div
                id="EnterPhoneNumber"
                className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-center pt-4 gap-16 w-full h-12 items-start rounded-lg"
              >
                <div className="flex flex-row gap-4 w-1/2 items-start">
                  <div className="text-center text-xl font-['Inter'] text-[#0f002b]">
                    ₹
                  </div>
                  <div className="text-xl font-['Inter'] font-medium text-[rgba(15,_0,_43,_0.3)]">
                    Enter Amount
                  </div>
                </div>
                <div className="text-center text-xs font-['Nunito_Sans'] font-bold text-[rgba(15,_0,_43,_0.3)] mt-1">
                  Withdraw
                </div>
              </div>
              <div className="flex flex-row justify-between ml-48 w-2/5 items-start">
                <div className="text-center font-['Nunito_Sans'] font-bold text-[rgba(15,_0,_43,_0.83)]">
                  Withdraw
                </div>
                <div className="text-center font-['Inter'] font-bold text-[rgba(15,_0,_43,_0.83)] mt-px">
                  ₹
                </div>
                <div className="text-center font-['Inter'] font-bold text-[rgba(15,_0,_43,_0.83)] mt-px">
                  23
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between ml-16 w-2/3 items-start">
          <div className="text-center font-['Nunito_Sans'] text-white">
            *Minimum Withdrawal Amount
          </div>
          <div className="text-center font-['Inter'] text-white mt-px">₹</div>
          <div className="text-center font-['Inter'] text-white mt-px">100</div>
        </div>
      </div>
    </div>
  );
};

export default ReferalsBalanceWithDraw;

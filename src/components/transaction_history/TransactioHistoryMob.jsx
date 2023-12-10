import React from "react";
import "../../app.css";

import HamBurger from "../../assets/profile/hamburger.svg";
import Profile from "../../assets/profile/Frame_profile.png";
const TransactioHistoryMob = () => {
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
          className="bg-[#fead3a] flex flex-col justify-end gap-10 w-[256.41%] h-[1000px] items-start mt-[-323px] mb-20 mx-[-305px] pl-[339px] py-[209px] rounded-[50%]"
        >
          <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-1/2 items-start rounded-lg">
            <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col justify-end pt-3 gap-6 w-full items-start rounded-tl-lg rounded-tr-lg">
              <div className="flex flex-col ml-3 gap-5 w-5/6 items-start">
                <div className="text-xs font-['Nunito_Sans'] font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-1 w-20 h-6 items-start rounded-lg">
                  5 min ago
                </div>
                <div className="text-xs font-['Nunito_Sans'] font-semibold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row w-full items-start pt-2 px-3 rounded-lg">
                  Your money will appear in your bank account
                  <br />
                  ending with <span className="font-bold">7635</span>
                </div>
              </div>
              <div
                id="Line"
                className="border-solid border-t-4 border-white w-full h-1"
              />
            </div>
            <div className="border-solid border-t-4 border-[#008000] flex flex-row justify-center pt-3 gap-2 w-full h-16 items-start">
              <div className="bg-white flex flex-row justify-center pt-1 gap-1 w-1/3 items-start">
                <div className="text-xl font-['Inter'] text-[#0f002b] mb-1">
                  ₹
                </div>
                <div className="text-xl font-['Inter'] font-bold text-[#0f002b]">
                  1000
                </div>
              </div>
              <div className="text-sm font-['Inter'] font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-px pt-2 w-3/5 h-8 items-start rounded-lg">
                Withdrawal Successful
              </div>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-1/2 items-start rounded-lg">
            <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col justify-end pt-3 gap-5 w-full items-start rounded-tl-lg rounded-tr-lg">
              <div className="flex flex-col ml-3 gap-3 w-5/6 items-start">
                <div className="text-xs font-['Nunito_Sans'] font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-1 w-20 h-6 items-start rounded-lg">
                  2 days ago
                </div>
                <div className="text-xs font-['Nunito_Sans'] font-semibold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-2 w-full items-start rounded-lg">
                  Your money was added to your Ludo King account. An email was
                  sent to your registered email.
                </div>
              </div>
              <div
                id="Line1"
                className="border-solid border-t-4 border-white w-full h-1"
              />
            </div>
            <div className="border-solid border-t-4 border-[#008000] flex flex-row justify-center pt-3 gap-10 w-full h-16 items-start">
              <div className="bg-white flex flex-row justify-center pt-1 gap-1 w-24 items-start">
                <div className="text-xl font-['Inter'] text-[#0f002b] mb-1">
                  ₹
                </div>
                <div className="text-xl font-['Inter'] font-bold text-[#0f002b]">
                  500
                </div>
              </div>
              <div className="text-sm font-['Inter'] font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-px pt-2 w-1/2 h-8 items-start rounded-lg">
                Deposit Successful
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactioHistoryMob;

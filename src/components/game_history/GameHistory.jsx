import React from "react";
import "../../app.css";

import HamBurger from "../../assets/profile/hamburger.svg";
import Profile from "../../assets/profile/Frame_profile.png";
const GameHistory = () => {
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
        className="overflow-hidden bg-[#0f002b] flex flex-col gap-10 w-full items-start"
      >
        <div className="relative flex flex-row justify-center w-[256.41%] items-start mt-[-323px] mx-[-305px]">
          <div
            id="Ellipse"
            className="w-full h-[1000px] bg-[#fead3a] absolute top-0 left-0 flex flex-col justify-end gap-10 items-start pl-[339px] py-[209px] rounded-[50%]"
          >
            <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-1/2 items-start rounded-lg">
              <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col justify-end pt-3 gap-6 w-full items-start rounded-tl-lg rounded-tr-lg">
                <div className="flex flex-col ml-3 gap-5 w-5/6 items-start">
                  <div className="text-xs font-['Nunito_Sans'] font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-1 w-20 h-6 items-start rounded-lg">
                    5 min ago
                  </div>
                  <div className="text-xs font-['Nunito_Sans'] font-semibold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row w-full items-start pt-2 px-3 rounded-lg">
                    You won this match,
                    <br />
                    you vs <span className="font-bold">kansh23i</span>
                  </div>
                </div>
                <div
                  id="Line"
                  className="border-solid border-t-4 border-white w-full h-1"
                />
              </div>
              <div className="border-solid border-t-4 border-[#008000] flex flex-row justify-between w-full h-16 items-start pt-3 px-4">
                <div className="bg-white flex flex-row justify-center pt-1 gap-1 w-20 items-start">
                  <div className="text-xl font-['Inter'] text-[#0f002b] mb-1">
                    ₹
                  </div>
                  <div className="text-xl font-['Inter'] font-bold text-[#0f002b]">
                    501
                  </div>
                </div>
                <div className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-px pt-2 gap-1 w-20 h-8 items-start rounded-lg">
                  <img
                    src="https://file.rendit.io/n/HWDVGP9RSpJ7MGBFa7M1.svg"
                    alt="Nototrophy"
                    id="Nototrophy"
                    className="w-4"
                  />
                  <div className="text-sm font-['Inter'] font-bold text-white">
                    Won
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-1/2 items-start rounded-lg">
              <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col justify-end pt-3 gap-6 w-full items-start rounded-tl-lg rounded-tr-lg">
                <div className="flex flex-col ml-3 gap-5 w-5/6 items-start">
                  <div className="text-xs font-['Nunito_Sans'] font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-1 w-20 h-6 items-start rounded-lg">
                    23 min ago
                  </div>
                  <div className="text-xs font-['Nunito_Sans'] font-semibold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row w-full items-start pt-2 px-3 rounded-lg">
                    You lost this match,
                    <br />
                    you vs <span className="font-bold">kansh23i</span>
                  </div>
                </div>
                <div
                  id="Line1"
                  className="border-solid border-t-4 border-white w-full h-1"
                />
              </div>
              <div className="border-solid border-t-4 border-[#ff0000] flex flex-row justify-between w-full h-16 items-start pt-3 px-4">
                <div className="bg-white flex flex-row justify-center pt-1 gap-1 w-20 items-start">
                  <div className="text-xl font-['Inter'] text-[#0f002b] mb-1">
                    ₹
                  </div>
                  <div className="text-xl font-['Inter'] font-bold text-[#0f002b]">
                    23
                  </div>
                </div>
                <div className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-px pt-2 gap-1 w-20 h-8 items-start rounded-lg">
                  <img
                    src="https://file.rendit.io/n/9JMTzGSuRnRNUrL70tbc.svg"
                    alt="Twemojisadbutrelievedface"
                    className="w-4"
                  />
                  <div className="text-sm font-['Inter'] font-bold text-white">
                    Lost
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white relative flex flex-col mt-[831px] w-1/3 items-start rounded-lg">
            <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col justify-end pt-3 gap-6 w-full items-start rounded-tl-lg rounded-tr-lg">
              <div className="flex flex-col ml-3 gap-5 w-5/6 items-start">
                <div className="text-xs font-['Nunito_Sans'] font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-1 w-20 h-6 items-start rounded-lg">
                  5 min ago
                </div>
                <div className="text-xs font-['Nunito_Sans'] font-semibold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row w-full items-start pt-2 px-3 rounded-lg">
                  You won this match,
                  <br />
                  you vs <span className="font-bold">kansh23i</span>
                </div>
              </div>
              <div
                id="Line2"
                className="border-solid border-t-4 border-white w-full h-1"
              />
            </div>
            <div className="border-solid border-t-4 border-[#008000] flex flex-row justify-between w-full h-16 items-start pt-3 px-4">
              <div className="bg-white flex flex-row justify-center pt-1 gap-1 w-20 items-start">
                <div className="text-xl font-['Inter'] text-[#0f002b] mb-1">
                  ₹
                </div>
                <div className="text-xl font-['Inter'] font-bold text-[#0f002b]">
                  501
                </div>
              </div>
              <div className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-px pt-2 gap-1 w-20 h-8 items-start rounded-lg">
                <img
                  src="https://file.rendit.io/n/3z6vsbxM81UuaEApCUDG.svg"
                  alt="Nototrophy1"
                  id="Nototrophy1"
                  className="w-4"
                />
                <div className="text-sm font-['Inter'] font-bold text-white">
                  Won
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-row w-5/6 h-48 items-start mb-[-178px] ml-8 rounded-lg">
          <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-row w-full h-32 items-start pt-3 px-3 rounded-tl-lg rounded-tr-lg">
            <div className="text-xs font-['Nunito_Sans'] font-bold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-1 w-20 h-6 items-start rounded-lg">
              5 min ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHistory;

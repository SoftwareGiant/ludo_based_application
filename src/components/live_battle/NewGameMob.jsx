import React from "react";
import "../../App.css";
import Copy from "../../assets/new_game/copy.svg";
import Share from "../../assets/new_game/share.svg";
import Fb from "../../assets/new_game/fb.svg";
import Wp from "../../assets/new_game/wp.svg";
import Twtr from "../../assets/new_game/twtr.svg";
import LiveBattle from "../../assets/new_game/livebattle.svg";
import DropIcon from "../../assets/new_game/dropdown.svg";
import ElpAct from "../../assets/new_game/EllipseActive.svg";
import Elp from "../../assets/new_game/Ellipse.svg";
import Prfl from "../../assets/new_game/ludo-indian.png";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import HamBurger from "../../assets/profile/hamburger.svg";
import { SidebarMob } from "../MainLayout/SidebarMob";
import NewGameSLider from "./NewGameSLider";

const NewGameMob = () => {
  return (
    <div className="max-w-[480px] w-full min-h-screen h-full">
      <div
        id="NotificationspaceRoot"
        className="bg-[#fead3a]  h-8 overflow-hidden"
      />
      <div className="bg-[#fead3a]  flex justify-between  w-full   h-[51px]  px-4">
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
          src={FrameProfile}
          alt="Frame1"
          className="w-[30px] h-[30px] mt-[9.5px] rounded-[100px] border border-solid border-white "
        />
      </div>
      
      <div className="bg-[#0f002b] w-full min-h-screen overflow-hidden relative">
        <div className="bg-[#fead3a] h-80 w-[650px] rounded-[50%]   -top-20 absolute -left-24" />
        <div className="py-4">
          <NewGameSLider />
        </div>
        <div className="m-6 relative">
          <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white relative w-full  max-w-screen  flex flex-col gap-6 items-start rounded-lg p-2 pb-8">
            <div className="text-center text-xl font-['Inter'] text-[#0f002b] ml-6  top-5">
              live <span className="font-bold">battle</span>
            </div>
            <div className="p-2 flex flex-col  gap-4 m-auto w-full">
              <div className="inline-flex flex-col justify-between w-full min-h-[168px] items-center border rounded-[10px] shadow-[0px_0px_40px_6px_rgba(0,_0,_0,_0.25)] bg-white border-solid border-[rgba(15,_0,_43,_0.2)]">
                <div className="font-['Inter'] text-[#0f002b] w-full py-2 px-4 flex flex-col justify-start">
                  <div className="italic">
                    open challenge from
                    <span className="font-extrabold pl-1">ravan3p</span>
                  </div>
                  <div className="italic font-semibold ">· 2 minutes ago</div>
                </div>
                <div className="bg-[#fca837] shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] rounded-br-md rounded-bl-md  flex  gap-16  items-center justify-between w-full m-3 p-6 mb-0">
                  <div className="flex flex-col w-1/2 text-4 font-['Inter'] text-white font-extrabold">
                    <div className="flex justify-between ">
                      <span>Entry fee</span>
                      <span> ₹40</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Prize</span>
                      <span> ₹80</span>
                    </div>
                  </div>

                  <div className=" flex w-[25.5px] h-[25.5px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]">
                    <img
                      src={LiveBattle}
                      alt="Arcticonsbattleforwesnoth"
                      className="w-4"
                    />
                  </div>
                </div>
              </div>

              <div className="inline-flex flex-col justify-between w-full min-h-[168px] items-center border rounded-[10px] shadow-[0px_0px_40px_6px_rgba(0,_0,_0,_0.25)] bg-white border-solid border-[rgba(15,_0,_43,_0.2)]">
                <div className="font-['Inter'] text-[#0f002b] w-full py-2 px-4 flex flex-col justify-start">
                  <div className="italic">
                    open challenge from
                    <span className="font-extrabold pl-1">ravan3p</span>
                  </div>
                  <div className="italic font-semibold ">· 2 minutes ago</div>
                </div>
                <div className="bg-[#fca837] shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] rounded-br-md rounded-bl-md  flex  gap-16  items-center justify-between w-full m-3 p-6 mb-0">
                  <div className="flex flex-col w-1/2 text-4 font-['Inter'] text-white font-extrabold">
                    <div className="flex justify-between ">
                      <span>Entry fee</span>
                      <span> ₹40</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Prize</span>
                      <span> ₹80</span>
                    </div>
                  </div>

                  <div className=" flex w-[25.5px] h-[25.5px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]">
                    <img
                      src={LiveBattle}
                      alt="Arcticonsbattleforwesnoth"
                      className="w-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_1px_rgba(0,_0,_0,_0.25)] bg-white  flex flex-row justify-center -mt-6 relative ml-[42%] pt-2 w-12 h-12 items-start rounded-[24px]">
            <img
              src="https://file.rendit.io/n/PZF2SOJvNd8p90uk3rGr.svg"
              alt="HardwareKeyboardArrowDown icon"
              id="Phcaretdown"
              className="w-6 mt-1"
            />
          </div>
        </div>




        <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#fead3a] relative flex flex-col justify-center ml-6 gap-10 w-5/6 items-start p-5 rounded-lg mb-6">
          <div className="flex flex-col justify-between gap-6 w-full items-start">
            <div
              id="StartYourOwnBattle1"
              className="text-center text-xl font-['Inter'] text-[#0f002b] ml-1"
            >
              start your own <span className="font-bold">battle</span>
            </div>
            <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-end ml-px gap-16 w-full items-start pt-2 px-2 rounded-lg">
              <div className="flex flex-row mt-3 gap-1 w-3/5 items-start">
                <div className="text-center font-['Inter'] text-[#0f002b]">
                  ₹
                </div>
                <div className="text-center font-['Inter'] text-black/56.99999999999999">
                  Your battle amount
                </div>
              </div>
              <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-[#fead3a] flex flex-row mb-2 w-10 items-start pt-1 px-1 rounded-[20px]">
                <img
                  src="https://file.rendit.io/n/oR12vSMymgw9l2fo50rk.svg"
                  alt="Arcticonsbattleforwesnoth2"
                  className="mb-1 w-6"
                />
              </div>
            </div>
            <div className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-center pt-1 gap-6 w-full items-start rounded-lg">
              <div className="flex flex-row mt-1 gap-5 w-20 items-start">
                <img
                  src="https://file.rendit.io/n/5PdA4wmMt9GMBxV6CW6P.svg"
                  alt="Logoswhatsappicon"
                  id="Logoswhatsappicon"
                  className="w-8"
                />
                <img
                  src="https://file.rendit.io/n/55XD5jWezeMUMD482SOu.svg"
                  alt="Logosfacebook"
                  id="Logosfacebook"
                  className="mt-px w-8"
                />
              </div>
              <div className="flex flex-row mb-1 gap-4 w-1/2 items-start">
                <img
                  src="https://file.rendit.io/n/xkOX2mj2hPIoROecNSu8.svg"
                  alt="Ritwitterxfill"
                  id="Ritwitterxfill"
                  className="mt-2 w-6"
                />
                <div className="flex flex-row gap-2 w-24 items-start">
                  <div className="bg-white flex flex-row w-10 h-10 items-start pt-2 px-2">
                    <img
                      src="https://file.rendit.io/n/8hRbplCBTS8XBc5b8CmV.svg"
                      alt="ActionLabelOutline icon"
                      id="Solarcopylinear"
                      className="w-6"
                    />
                  </div>
                  <div className="bg-white flex flex-row w-10 items-start pt-1 px-1">
                    <img
                      src="https://file.rendit.io/n/SF3ew7gbHLPpUywDhwmw.svg"
                      alt="Mdishare"
                      id="Mdishare"
                      className="mb-1 w-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://file.rendit.io/n/KPwS2RCsAs5e6sLj4eAj.svg"
            alt="Line"
            id="Line"
            className="ml-24 w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default NewGameMob;

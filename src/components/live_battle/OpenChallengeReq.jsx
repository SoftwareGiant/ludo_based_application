import React from "react";
import { SidebarMob } from "../MainLayout/SidebarMob";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import LiveBattles from "../../assets/new_game/livebattle.svg";
import { useNavigate } from "react-router-dom";

const OpenChallengeReq = () => {
  const navigate =useNavigate()
  return (
<div className="min-h-screen h-full bg-white ">
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



      <div id="NewRootRoot" className="flex flex-row w-full items-start">
        <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col justify-between pb-20 w-full h-[762px] items-start">
          <div className="flex flex-col gap-4 w-full items-start">
            <div className="bg-white flex flex-row justify-between w-full h-16 items-start pt-4 px-5">
              <div className="flex flex-row gap-5 w-2/5 items-start">
                <img
                  onClick={()=>navigate("/livebattle2")}
                  src="https://file.rendit.io/n/stxeGrguy8pBFLiVl8PK.svg"
                  alt="HardwareKeyboardBackspace icon"
                  id="Epback"
                  className="w-6"
                />
                <div
                  id="LiveBattle1"
                  className="text-center text-xl font-['Inter'] text-[#0f002b] mt-px"
                >
                  live <span className="font-bold">battle</span>
                </div>
              </div>
              <div className="flex flex-row gap-5 w-20 items-start">
                <img
                   onClick={()=>navigate("/livebattle2")}
                  src="https://file.rendit.io/n/msQ1lGtXT3Hr1PIYGXxX.svg"
                  alt="Radixiconscross"
                  id="Radixiconscross"
                  className="w-6"
                />
                <img
                  src="https://file.rendit.io/n/0W8t0wapI2QW1SoYU8Qq.svg"
                  alt="ActionInfoOutline icon"
                  id="Icoutlineinfo"
                  className="w-6"
                />
              </div>
            </div>
            <div className="flex flex-row ml-8 gap-6 w-2/3 items-start">
              <div className="relative flex flex-row mt-1 w-2 items-start pt-px px-1">
                <img
                  src="https://file.rendit.io/n/rGH49IYx8v8dqpNQiw4c.svg"
                  alt="Ellipse"
                  id="Ellipse"
                  className="w-2 h-2 absolute top-0 left-0"
                />
                <img
                  src="https://file.rendit.io/n/rGH49IYx8v8dqpNQiw4c.svg"
                  alt="Ellipse1"
                  id="Ellipse1"
                  className="w-2 h-2 absolute top-20 left-0"
                />
                <img
                  src="https://file.rendit.io/n/rGH49IYx8v8dqpNQiw4c.svg"
                  alt="Ellipse2"
                  id="Ellipse2"
                  className="w-2 h-2 absolute top-40 left-0"
                />
                <img
                  src="https://file.rendit.io/n/XnqoddRAaiSSz9BQet3q.svg"
                  alt="LiveBattle2"
                  id="LiveBattle2"
                  className="relative mb-1 w-0"
                />
              </div>
              <div className="flex flex-col gap-8 w-5/6 items-start">
                <div className="flex flex-row ml-1 gap-4 w-1/2 items-start">
                  <div className="flex flex-col gap-3 w-16 items-start">
                    <div className="font-['Inter'] text-[#0f002b]">
                      Entry fee
                    </div>
                    <div className="font-['Inter'] text-[#0f002b]">Prize</div>
                  </div>
                  <div className="flex flex-col gap-3 w-8 items-start">
                    <div className="font-['Inter'] font-bold text-[#0f002b]">
                      ₹40
                    </div>
                    <div className="font-['Inter'] font-bold text-[#0f002b]">
                      ₹80
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 w-full items-start">
                  <div className="flex flex-col gap-1 w-full items-start">
                    <div className="font-['Inter'] text-[#0f002b]">
                      open challenge<span> </span>
                      <div>from </div>
                      <span className="font-bold">ravan3p</span>
                    </div>
                    <div
                      id="MinutesAgo1"
                      className="font-['Inter'] font-bold text-[#0f002b]"
                    >
                      · <span>2 minutes ago</span>
                    </div>
                  </div>
                  <div
                  onClick={()=>navigate("/profile")}
                    id="ViewProfile1"
                    className="font-['Inter'] text-[#0f002b]"
                  >
                    view <span className="font-bold">profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="ContinueAndLoading"
            className="text-center text-xl font-['Inter'] font-medium text-[#0f002b] shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row ml-8 w-5/6 h-12 items-start pt-4 px-6 rounded-lg"
          >
            Request
          </div>
        </div>
      </div>

    </div>
  );
};

export default OpenChallengeReq;

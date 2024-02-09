import React from "react";
import { SidebarMob } from "../MainLayout/SidebarMob";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import LiveBattles from "../../assets/new_game/livebattle.svg";
import { useNavigate } from "react-router-dom";
import TopbarMobile from "../MainLayout/TopbarMobile";
const LiveBattle2 = () => {
 const navigate =useNavigate()
  return (
  
<div className="min-h-screen h-full bg-white ">
     
      <TopbarMobile/>

      <div className="bg-white w-full mt-20">
      <div
          
          className="flex justify-between items-center px-4 py-2 w-full">
            <div className="flex gap-5 items-center">
              <img
              onClick={()=>navigate("/livebattle")}
                src="https://file.rendit.io/n/Bh3TjQUvsgxuYLevIVW7.svg"
                alt="HardwareKeyboardBackspace icon"
                id="Epback"
                className="w-6"
              />
              <div
                id="LiveBattle13"
                className="text-center text-xl font-['Inter'] text-[#0f002b]"
              >
                live <span className="font-bold">battle</span>
              </div>
            </div>
          
             <div className="flex gap-5">
              <img
              onClick={()=>navigate("/filter")}
                src="https://file.rendit.io/n/TRSmeMNnarMTIYOYVVL2.svg"
                alt="Ionfilter"
                id="Ionfilter"
                className="w-6"
              />
              <img
                src="https://file.rendit.io/n/8nZrkAaqy2tyyAf9aw0X.svg"
                alt="ActionInfoOutline icon"
                id="Icoutlineinfo"
                className="w-6"
              />
            </div>
          </div>

          <div className="p-6 flex flex-col  gap-4 m-auto w-full">
              <div onClick={()=>navigate("/requestchallange")} className="inline-flex flex-col justify-between w-full min-h-[168px] items-center border rounded-[10px] shadow-[0px_0px_40px_6px_rgba(0,_0,_0,_0.25)] bg-white border-solid border-[rgba(15,_0,_43,_0.2)]">
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
                      src={LiveBattles}
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
                      src={LiveBattles}
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
                      src={LiveBattles}
                      alt="Arcticonsbattleforwesnoth"
                      className="w-4"
                    />
                  </div>
                </div>
              </div>
             
            </div>
      </div>
      </div>
  
  );
};

export default LiveBattle2;

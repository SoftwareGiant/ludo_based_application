import React, { useEffect, useState } from "react";
import { SidebarMob } from "../MainLayout/SidebarMob";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import LiveBattles from "../../assets/new_game/livebattle.svg";
import { useNavigate } from "react-router-dom";
import TopbarMobile from "../MainLayout/TopbarMobile";
const LiveBattle = () => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen h-full bg-[#0f002b]">

      <TopbarMobile/>
    


      <div className="bg-white w-full pt-20">
      <div
          className="flex justify-between items-center px-4 py-2 w-full">
            <div className="flex gap-5 items-center">
              <img
              onClick={()=>navigate("/")}
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
            <img
            
              src="https://file.rendit.io/n/ib8IMr1PTiCuwTfVAXZs.svg"
              alt="ActionInfoOutline icon"
              id="Icoutlineinfo"
              className="w-6"
            />
          </div>

          <div className="p-6 flex flex-col  gap-4 m-auto w-full">
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

              <div 
              onClick={()=>navigate("/livebattle2")}
              className="text-center text-xl font-['Inter'] text-[#0f002b] w-full">
            view all open <span className="font-bold">challenges</span>
          </div>
            </div>
      </div>


      <div className="bg-[#0f002b] w-full p-6 flex flex-col  m-auto">
      <div className="flex flex-wrap justify-between gap-6 w-full m-auto">
              <div className="shadow-[0px_0px_2px_1px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col justify-end gap-3  w-[170px] h-[170px] items-start pt-3 pb-1 px-1 rounded-lg">
                <div className="flex flex-col ml-3 w-2/3 items-start">
                  <div
                    id="LiveBattle1"
                    className="text-xs font-['Inter'] text-[#0f002b]"
                  >
                    live <span className="font-bold">battle</span>
                  </div>
                  <div
                    id="StartedMinAgo2"
                    className="text-xs font-['Inter'] font-bold text-[#0f002b]"
                  >
                    ·<span> started </span>
                    <span>5min ago</span>
                  </div>
                </div>
                <div className="shadow-[inset_0px_0px_12px_0px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-[#fead3a] relative flex flex-row justify-center pt-8 w-full items-start rounded-br-lg rounded-bl-lg">
                  <div className="text-xl font-['Inter'] font-bold text-[#0f002b] absolute top-1 left-3 h-6 w-20">
                    ravan3p
                  </div>
                  <div className="shadow-[0px_11px_11px_0px_rgba(0,_0,_0,_0.25)] w-2/3 h-[113px] bg-[#0f002b] absolute top-0 left-20 flex flex-row justify-center pt-8 items-start rounded-tl-[86.39999389648438px] rounded-bl-[86.39999389648438px]">
                    <img
                      src="https://file.rendit.io/n/dzvjOLVXy80wPZnly7SR.svg"
                      alt="Arcticonsbattleforwesnoth2"
                      className="w-12"
                    />
                  </div>
                  <div className="text-xl font-['Inter'] font-bold text-white absolute top-20 left-3 h-6 w-24">
                    kansh23i
                  </div>
                  <img
                    src="https://file.rendit.io/n/q7ht7E6QOUQA59yGnbt3.svg"
                    alt="Materialsymbolsplaycircle"
                    className="relative mb-8 w-12"
                  />
                </div>
              </div>
              <div className="shadow-[0px_0px_2px_1px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col justify-end gap-3  w-[170px] h-[170px] items-start pt-3 pb-1 px-1 rounded-lg">
                <div className="flex flex-col ml-3 w-2/3 items-start">
                  <div
                    id="LiveBattle3"
                    className="text-xs font-['Inter'] text-[#0f002b]"
                  >
                    live <span className="font-bold">battle</span>
                  </div>
                  <div
                    id="StartedMinAgo5"
                    className="text-xs font-['Inter'] font-bold text-[#0f002b]"
                  >
                    ·<span> started </span>
                    <span>5min ago</span>
                  </div>
                </div>
                <div className="shadow-[inset_0px_0px_12px_0px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-[#fead3a] relative flex flex-col justify-end gap-px w-full items-start pt-8 pb-1 px-3 rounded-br-lg rounded-bl-lg">
                  <div className="text-xl font-['Inter'] font-bold text-[#0f002b] absolute top-1 left-3 h-6 w-24">
                    baingan9
                  </div>
                  <div className="shadow-[0px_11px_11px_0px_rgba(0,_0,_0,_0.25)] w-2/3 h-[113px] bg-[#0f002b] absolute top-0 left-20 flex flex-row justify-center pt-8 items-start rounded-tl-[86.39999389648438px] rounded-bl-[86.39999389648438px]">
                    <img
                      src="https://file.rendit.io/n/dzvjOLVXy80wPZnly7SR.svg"
                      alt="Arcticonsbattleforwesnoth3"
                      className="w-12"
                    />
                  </div>
                  <img
                    src="https://file.rendit.io/n/J07RqKZzL9xJkJN9GmcL.svg"
                    alt="Materialsymbolsplaycircle1"
                    className="relative ml-10 w-12"
                  />
                  <div className="text-xl font-['Inter'] font-bold text-white relative">
                    aloo45
                  </div>
                </div>
              </div>
              <div className="shadow-[0px_0px_2px_1px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col justify-end gap-3   w-[170px] h-[170px] items-start pt-3 pb-1 px-1 rounded-lg">
                <div className="flex flex-col ml-3 w-2/3 items-start">
                  <div
                    id="LiveBattle3"
                    className="text-xs font-['Inter'] text-[#0f002b]"
                  >
                    live <span className="font-bold">battle</span>
                  </div>
                  <div
                    id="StartedMinAgo5"
                    className="text-xs font-['Inter'] font-bold text-[#0f002b]"
                  >
                    ·<span> started </span>
                    <span>5min ago</span>
                  </div>
                </div>
                <div className="shadow-[inset_0px_0px_12px_0px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-[#fead3a] relative flex flex-col justify-end gap-px w-full items-start pt-8 pb-1 px-3 rounded-br-lg rounded-bl-lg">
                  <div className="text-xl font-['Inter'] font-bold text-[#0f002b] absolute top-1 left-3 h-6 w-24">
                    baingan9
                  </div>
                  <div className="shadow-[0px_11px_11px_0px_rgba(0,_0,_0,_0.25)] w-2/3 h-[113px] bg-[#0f002b] absolute top-0 left-20 flex flex-row justify-center pt-8 items-start rounded-tl-[86.39999389648438px] rounded-bl-[86.39999389648438px]">
                    <img
                      src="https://file.rendit.io/n/dzvjOLVXy80wPZnly7SR.svg"
                      alt="Arcticonsbattleforwesnoth3"
                      className="w-12"
                    />
                  </div>
                  <img
                    src="https://file.rendit.io/n/J07RqKZzL9xJkJN9GmcL.svg"
                    alt="Materialsymbolsplaycircle1"
                    className="relative ml-10 w-12"
                  />
                  <div className="text-xl font-['Inter'] font-bold text-white relative">
                    aloo45
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-xl font-['Inter'] text-white mt-2 w-full">
            view all open <span className="font-bold">challenges</span>
          </div>   
      </div>
    </div>
  );
};

export default LiveBattle;

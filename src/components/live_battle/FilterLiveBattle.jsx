import React from "react";
import { useNavigate } from "react-router-dom";
import { SidebarMob } from "../MainLayout/SidebarMob";
import FrameProfile from "../../assets/profile/Frame_profile.png";

const FilterLiveBattle = () => {
  const navigate = useNavigate();
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
          onClick={() => navigate("/profile")}
        />
      </div>
      <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col justify-between w-full h-[762px] items-start pt-4 pb-24 pl-px">
        <div className="flex flex-col justify-between gap-6 w-full items-start">
          <div className="flex w-full px-4  justify-between items-center">
            <div className="flex gap-5 items-center justify-center">
              <img
                src="https://file.rendit.io/n/Bh3TjQUvsgxuYLevIVW7.svg"
                alt="HardwareKeyboardBackspace icon"
                id="Epback"
                className="w-6"
                onClick={() => navigate("/livebattle2")}
              />
              <div
                id="FilterLiveBattle1"
                className="text-center text-xl font-['Inter']  text-[#0f002b] mt-px"
              >
                <span className="font-bold"> filter</span> live battle
              </div>
            </div>
            <img
            onClick={()=>navigate("/help")}
              src="https://file.rendit.io/n/8nZrkAaqy2tyyAf9aw0X.svg"
              alt="ActionInfoOutline icon"
              id="Icoutlineinfo"
              className="w-6"
            />
          </div>
          <div className="bg-white flex gap-2 w-full  justify-center items-center pt-4 px-5">
            <img
              src="https://file.rendit.io/n/LULK4Sjpx7xsiUdM6Vgj.svg"
              alt="ActionSearch icon"
              id="Carbonsearch"
              className="w-6"
            />
            <input
              className="font-['Inter'] text-black/56.99999999999999 outline-none border-none w-full"
              placeholder="Search Battle"
            />
          </div>

          <div className="flex  gap-4 w-full px-2 justify-center">
            <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] flex items-center justify-center p-[6px]   gap-4  rounded-lg">
              <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-white flex items-center justify-center p-2 rounded-full ">
                <img
                  src="https://file.rendit.io/n/3ea5mupkgQfmEptUdSGu.svg"
                  alt="Mdisortascending"
                  id="Mdisortascending"
                  className="w-5"
                />
              </div>
              <div className="font-['Inter'] text-[#0f002b]">Low to High</div>
            </div>
            <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] flex p-[6px] justify-center items-center gap-4  rounded-lg">
              <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)]  flex items-center justify-center p-2 rounded-full ">
                <img
                  src="https://file.rendit.io/n/6TpCKlfGoHkptvhW2E12.svg"
                  alt="EditorFormatLineSpacing icon"
                  id="Carbonsortdescending"
                  className="w-5"
                />
              </div>
              <div className="font-['Inter'] text-[#0f002b] ">High to Low</div>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] flex  w-3/5 justify-cente items-center m-auto  p-[6px]  rounded-lg">
            <div className="text-[#0f002b] font-['Inter'] flex gap-2 pr-2 pl-4">
              <span className="font-bold">₹</span>{" "}
              <input
                className="font-['Inter'] text-black/56.99999999999999 outline-none border-none w-full"
                placeholder="From"
              />
            </div>

            <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-white flex items-center justify-center p-2 rounded-full ">
              <img
                src="https://file.rendit.io/n/3yVZHUQOGq1nnKN38zVr.svg"
                alt="Iconoirfilter"
                id="Iconoirfilter"
                className="w-5"
              />
            </div>
            <div className="text-[#0f002b] font-['Inter'] flex gap-2 pr-2  pl-4">
              <span className="font-bold">₹</span>
              <input
                className="font-['Inter'] text-black/56.99999999999999 outline-none border-none w-full"
                placeholder="To"
              />
            </div>
          </div>
        </div>
        <div className="fixed bottom-10 left-0 right-0  font-['Inter'] font-bold text-white bg-[#0f002b] flex  justify-center w-3/5 m-auto items-center p-2 rounded-lg ">
          Apply Filter
        </div>
      </div>
    </div>
  );
};

export default FilterLiveBattle;

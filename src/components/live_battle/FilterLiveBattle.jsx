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
      />
    </div>
      <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col justify-between w-full h-[762px] items-start pt-4 pb-24 pl-px">
        <div className="flex flex-col justify-between gap-6 w-full items-start">
          <div className="flex flex-col gap-4 w-full items-start">
            <div className="flex flex-row justify-between ml-5 w-5/6 items-start">
              <div className="flex flex-row gap-5 w-3/5 items-start">
                <img
                  src="https://file.rendit.io/n/Bh3TjQUvsgxuYLevIVW7.svg"
                  alt="HardwareKeyboardBackspace icon"
                  id="Epback"
                  className="w-6"             
                  onClick={()=>navigate("/livebattle2")}
                />
                <div
                  id="FilterLiveBattle1"
                  className="text-center text-xl font-['Inter'] font-bold text-[#0f002b] mt-px"
                >
                  filter <span>live battle</span>
                </div>
              </div>
              <img
                src="https://file.rendit.io/n/8nZrkAaqy2tyyAf9aw0X.svg"
                alt="ActionInfoOutline icon"
                id="Icoutlineinfo"
                className="w-6"
              />
            </div>
            <div className="bg-white flex flex-row gap-5 w-full h-16 items-start pt-4 px-5">
              <img
                src="https://file.rendit.io/n/LULK4Sjpx7xsiUdM6Vgj.svg"
                alt="ActionSearch icon"
                id="Carbonsearch"
                className="w-6"
              />
              <div className="font-['Inter'] text-black/56.99999999999999 mt-1">
                Search Battle
              </div>
            </div>
          </div>
          <div className="flex flex-row ml-6 gap-2 w-5/6 items-start">
            <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-center pt-3 gap-4 w-1/2 h-12 items-start rounded-lg">
              <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-white flex flex-row w-8 h-8 items-start pt-1 px-1 rounded-lg">
                <img
                  src="https://file.rendit.io/n/3ea5mupkgQfmEptUdSGu.svg"
                  alt="Mdisortascending"
                  id="Mdisortascending"
                  className="w-5"
                />
              </div>
              <div className="font-['Inter'] text-[#0f002b] mt-2">
                Low to High
              </div>
            </div>
            <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-center pt-3 gap-4 w-1/2 h-12 items-start rounded-lg">
              <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-white flex flex-row w-8 h-8 items-start pt-1 px-1 rounded-lg">
                <img
                  src="https://file.rendit.io/n/6TpCKlfGoHkptvhW2E12.svg"
                  alt="EditorFormatLineSpacing icon"
                  id="Carbonsortdescending"
                  className="w-5"
                />
              </div>
              <div className="font-['Inter'] text-[#0f002b] mt-2">
                High to Low
              </div>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row ml-16 gap-6 w-2/3 h-12 items-start pt-3 px-10 rounded-lg">
            <div className="flex flex-row mt-2 gap-1 w-12 items-start">
              <div className="text-center font-['Inter'] text-[#0f002b]">₹</div>
              <div className="text-center font-['Inter'] text-black/56.99999999999999">
                From
              </div>
            </div>
            <div className="flex flex-row gap-4 w-20 items-start">
              <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-white flex flex-row w-8 h-8 items-start pt-1 px-1 rounded-lg">
                <img
                  src="https://file.rendit.io/n/3yVZHUQOGq1nnKN38zVr.svg"
                  alt="Iconoirfilter"
                  id="Iconoirfilter"
                  className="w-5"
                />
              </div>
              <div className="flex flex-row mt-2 gap-1 w-8 items-start">
                <div className="text-center font-['Inter'] text-[#0f002b]">
                  ₹
                </div>
                <div
                  id="To"
                  className="font-['Inter'] text-black/56.99999999999999"
                >
                  {" "}
                  To
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-['Inter'] font-bold text-white bg-[#0f002b] flex flex-row justify-center ml-20 pt-2 w-3/5 h-10 items-start rounded-lg">
          Apply Filter
        </div>
      </div>
    </div>
  );
};

export default FilterLiveBattle;

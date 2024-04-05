import React from "react";

const InstanceStop = () => {
  return (
    <div>
      <div id="NotificationspaceRoot" className="bg-[#fead3a] w-full h-8" />
      <div className="bg-[#fead3a] flex flex-row justify-between w-full h-12 items-start pt-2 px-5">
        <div className="flex flex-row gap-3 w-2/5 items-start">
          <img
            src="https://file.rendit.io/n/c069tsTkMzmjgvYgx5P1.svg"
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
          src="https://file.rendit.io/n/c6s0VUvNnJMhUIhfdrvJ.png"
          alt="Frame1"
          className="mt-1 w-8 border"
        />
      </div>
      <div className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-col justify-between w-full h-[762px] items-start pt-4 pb-24">
        <div className="flex flex-col justify-between gap-32 w-full items-start">
          <div className="flex flex-col gap-6 w-full items-start">
            <div className="flex flex-row justify-between ml-16 w-3/4 items-start">
              <div className="text-xl font-['Inter'] font-bold text-white mt-px">
                Battle
              </div>
              <img
                src="https://file.rendit.io/n/K74i4AAE73NYwu6KQ5OC.svg"
                alt="Icoutlineinfo"
                id="Icoutlineinfo"
                className="w-6"
              />
            </div>
            <div className="flex flex-col w-full items-start">
              <div className="bg-[#0f002b] flex flex-row justify-center pt-3 w-full h-20 items-start">
                <div className="text-3xl font-['Nunito_Sans'] text-[#60e560] shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-2 w-4/5 items-start rounded-lg">
                  232 Playing<span className="text-white"> · </span>
                  <span className="text-[#ff7676]">1 waiting</span>
                </div>
              </div>
              <div className="bg-[#0f002b] flex flex-row justify-center mb-[-199px] pt-2 w-full items-start">
                <div className="bg-[#0f002b] flex flex-row justify-center mb-2 pt-1 gap-1 w-2/5 items-start">
                  <div className="text-5xl font-['Inter'] text-white mb-1">
                    ₹
                  </div>
                  <div className="text-5xl font-['Inter'] font-bold text-white">
                    205
                  </div>
                </div>
              </div>
              <div className="text-3xl font-['Inter'] font-bold text-white ml-20">
                AstroAvenger
              </div>
            </div>
          </div>
          <div className="bg-[#0f002b] flex flex-row gap-3 w-full h-20 items-start pt-6 pl-16 pr-12">
            <div className="relative flex flex-row justify-end w-12 items-start">
              <img
                src="https://file.rendit.io/n/YKCHEInGZB9yxp784vj5.png"
                alt="Frame5"
                className="w-8 h-8 absolute top-0 left-0 border"
              />
              <img
                src="https://file.rendit.io/n/qIAQYsbFh4a69Ftcf7NA.png"
                alt="Frame6"
                className="w-8 h-8 absolute top-0 left-2 border"
              />
              <img
                src="https://file.rendit.io/n/oIWritPDq6ze87t7mKEV.png"
                alt="Frame7"
                className="relative w-8 border"
              />
            </div>
            <div className="text-center text-xl font-['Inter'] text-white mt-1">
              are waiting for a match
            </div>
          </div>
        </div>
        <div className="text-center font-['Inter'] font-bold text-[#0f002b] bg-white flex flex-row justify-center ml-[114px] pt-4 w-2/5 h-12 items-start rounded-lg">
          Request a match
        </div>
      </div>
    </div>
  );
};

export default InstanceStop;

import React from "react";

const MatchStart = () => {
  return (
    <div>
      <div id="NotificationspaceRoot" className="bg-[#fead3a] w-full h-8 " />
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

      <div className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-col justify-between w-full h-[762px] items-start pt-5 pb-[362px]">
        <div className="text-xl font-['Inter'] font-bold text-white ml-16">
          Battle
        </div>
        <div className="relative flex flex-row justify-center w-full items-start">
          <div className="text-center text-4xl font-['Inter'] font-bold text-white w-full h-32 bg-[#0f002b] absolute top-24 left-0 flex flex-row justify-center pt-8 items-start">
            It’s a match!
          </div>
          <img
            src="https://file.rendit.io/n/KG3yonP2UFWKhxrFbRdp.png"
            alt="Frame3"
            className="relative mb-24 border-2"
          />
        </div>
      </div>
    </div>
  );
};

export default MatchStart;

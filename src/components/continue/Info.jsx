import React from "react";
import "../../App.css";

import BackgroundImg from "../../assets/background.jpg";
import CountryIcon from "../../assets/country.svg";
import DropIcon from "../../assets/dropicon.svg";

const Info = () => {
  return (
    <>
      <div id="NotificationspaceRoot" className="bg-[#fead3a] w-full h-8" />
      {/* <div className="max-h-[26.3rem]">
        <div className=" absolute top-8">
          <img
            src={BackgroundImg}
            alt="background/img"
            className="md:w-[720px] md:h-[720px] float-right"
          />
          <div className="bg-gradient-to-b from-transparent to-white h-44 flex  justify-center items-center flex-col mt-auto absolute top-64 w-full txt ">
            <h3 className="text-center text-blue-950 text-6xl font-nunito uppercase font-extrabold p-3">
              Ludo King
            </h3>
            <h5 className="font-oooh text-4xl font-bold text-center text-blue-950">
              Punch Line
            </h5>
          </div>
        </div>
      </div> */}
      <div className="bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0)_0%,#ffffff_100%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat relative flex flex-row justify-center w-full items-start">
        <img src={BackgroundImg} alt="background/img" className="w-8" />
        <div className="text-center text-6xl font-['Nunito_Sans'] font-bold text-[#0f002b] absolute top-16 left-6 h-20 w-[337px]">
          LUDO KING
        </div>
        <div className="text-center text-4xl font-['Oooh_Baby'] text-[#0f002b] relative mt-32">
          punch line
        </div>
      </div>
      <div className="overflow-hidden bg-white flex flex-col justify-end pt-3 gap-8 w-full items-start">
        <div className="relative flex flex-row justify-center ml-4 w-full items-start">
          <div
            id="Line"
            className="border-solid w-full h-px absolute top-6 left-0 border-t border-b-0 border-black/30 border-x-0"
          />
          <div className="text-center text-xl font-['Inter'] font-bold text-[#0f002b] bg-white relative flex flex-row justify-center pt-4 w-3/5 h-12 items-start rounded-lg">
            Log in or sign up
          </div>
        </div>
        <div className="flex flex-col mb-0 gap-6 w-full items-start">
          <div className="flex w-[325px] h-[56px] px-[16px] py-[10px] justify-center items-center gap-[10px] border-4  mx-auto mt-14 rounded-[10px]">
            <div>
              <img src={CountryIcon} />
            </div>
            <div>
              <img src={DropIcon} />
            </div>
            <div>
              <input type="number" placeholder="Enter Phone Number" />
            </div>
          </div>
          <div className="inline-flex h-[56px] w-[325px] px-[16px] py-[10px] gap-[10px] items-center justify-center rounded-[10px] mt-8 font-inter leading-normal text-center text-[20px] font-['Inter'] font-bold text-white shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]  flex-row  mb-px ml-8 pt-4">
            <button className="">Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;

import React from "react";
import "../../App.css";

import BackgroundImg from "../../assets/background.jpg";
import CountryIcon from "../../assets/country.svg";
import DropIcon from "../../assets/dropicon.svg";

const Info = () => {
  return (
    <div>
      <div className="max-h-[26.3rem]">
        <div className=" absolute top-8">
          <img src={BackgroundImg} alt="background/img" />
          <div className="bg-gradient-to-b from-transparent to-white h-44 flex  justify-center items-center flex-col mt-auto absolute top-64 w-full txt ">
            <h3 className="text-center text-blue-950 text-6xl font-nunito uppercase font-extrabold p-3">
              Ludo King
            </h3>
            <h5 className="font-oooh text-4xl font-bold text-center text-blue-950">
              Punch Line
            </h5>
          </div>
        </div>
      </div>
      <div className=" max-h-[26.5rem] relative top-[33rem]">
        <div className="inline-flex h-14 px-4 py-3 justify-center items-center gap-2 absolute top-[-1.92rem] left-[70px] -mt-32">
          <p className="text-center text-[13px] font-bold leading-normal font-inter -mx-[4.5rem]  text-blue-950 hr">
            Log in or sign up
          </p>
        </div>
        <div className="flex w-[325px] h-[56px] px-[16px] py-[10px] justify-center items-center gap-[10px] border-4  mx-auto mt-32">
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
        <div className="inline-flex h-[56px] w-[325px] px-[16px] py-[10px] gap-[10px] items-center justify-center rounded-[10px] bg-[#0f002b] mt-10">
          <button className="text-white text-center font-inter text-[20px] font-bold leading-normal ">
            Continue
          </button>
        </div>
        {/* <div className="inline-flex p-1 justify-center items-center gap-2 text-[12px] font-inter font-[500] leading-normal text-center mt-20">
          <li className="list-none">Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Content Policies</li>
        </div> */}
      </div>
    </div>
  );
};

export default Info;

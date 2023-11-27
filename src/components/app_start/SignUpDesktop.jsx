import React from "react";
import "../../App.css";

import BackgroundImg from "../../assets/background.jpg";
import CountryIcon from "../../assets/country.svg";
import DropIcon from "../../assets/dropicon.svg";

const SignUpDesktop = () => {
  return (
    <div>
      <div className="md:w-[720px] md:h-[720px] flex float-right">
        <img src={BackgroundImg} alt="background/img" />
      </div>
      <div className="md:bg-[#0F002B] md:w-[543px] md:h-[720px] flex flex-col">
        <div className="justify-center items-center mt-[88px] ">
          <h3 className="text-center text-white text-6xl font-nunito uppercase font-extrabold p-3">
            Ludo King
          </h3>
          <h5 className="font-oooh text-4xl font-bold text-center text-white">
            Punch Line
          </h5>
        </div>
        <div className="inline-flex md:h-[48px]md:w-[177px] md:px-[13.714px] md:py-[8.571px] justify-center items-center gap-2 md:gap-[8.571px] md:rounded-[8.571px] md:bg-[#FEAD3A] absolute top-[-1.92rem] left-[150px] mt-[270px]">
          <p className="text-center text-[13px] font-bold leading-normal font-inter -mx-[4.5rem]  text-blue-950 md:text-black hr">
            Log in or sign up
          </p>
        </div>
        <div className="flex w-[325px] h-[56px] px-[16px] py-[10px] justify-center items-center gap-[10px] border-4  mx-auto mt-32 md:bg-white rounded-[10px]">
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
        <div className="inline-flex h-[56px] w-[325px] px-[16px] md:py-[0px] gap-[10px] items-center justify-center rounded-[10px] bg-[#0f002b] md:bg-[#FFF] mt-10 ml-[109px]">
          <button className="text-black text-center font-inter text-[20px] font-bold leading-normal ">
            Continue
          </button>
        </div>
        <div className="inline-flex p-1 justify-center items-center gap-2 text-[12px] font-inter font-[500] leading-normal text-center mt-20 md:text-white">
          <li className="list-none">Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Content Policies</li>
        </div>
      </div>
    </div>
  );
};

export default SignUpDesktop;

import React from "react";
import "../../App.css";

import BackgroundImg from "../../assets/background.jpg";
import CountryIcon from "../../assets/country.svg";
import DropIcon from "../../assets/dropicon.svg";
import LudoIcon from "../../assets/ludo-indian-monument-touch.svg";

const SignUpDesktop = () => {
  return (
    <div>
      {/* background image section starts */}
      <div className="md:max-w-[40%] md:h-[720px] lg:h-[100vh] flex md:float-right">
        <img src={BackgroundImg} alt="background/img" className="" />
      </div>
      {/* background image section ends */}
      {/* login content sections starts */}
      <div className="md:bg-[#0F002B] md:min-w-[60%] lg:h-[100vh] md:h-[720px] flex flex-col md:float-left">
        {/* main and sub heading starts */}
        <div className="justify-center items-center md:mt-[88px] bg-gradient md:bg-none flex flex-col md:w-full  -mt-[6.95rem]">
          <h3 className="text-center md:text-white  text-5xl font-['Nunito_Sans'] uppercase font-extrabold p-3 w-[337px] text-[#0f002b]">
            Ludo King
          </h3>
          <h5 className="font-oooh text-4xl font-bold text-center md:text-white">
            Punch Line
          </h5>
        </div>
        {/* main and sub heading ends */}
        {/* content section start  */}
        <div className="flex flex-col gap-16 w-full items-start mt-[12px] md:mt-[76px]">
          {/* signup tags starts  */}
          <div className="relative flex flex-row justify-center w-full md:items-start">
            <div
              id="Line"
              className="border-solid border-black/30 md:border-white/30 w-full h-px absolute top-6 left-0 border-t border-b-0 border-x-0"
            />
            <div className="text-center text-lg font-['Inter'] font-medium text-[#0f002b] md:bg-[#fead3a] relative flex flex-row justify-center pt-3 w-1/2 h-12 items-start rounded-lg bg-white">
              Log in or sign up
            </div>
          </div>
          {/* signup tags ends  */}
          {/* number and continue-btn section  */}
          <div className="flex flex-col ml-1 gap-6 w-full items-start">
            <div
              id="EnterPhoneNumber1"
              className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] items-center mx-auto bg-white flex flex-row gap-4 justify-center pt-3 px-4 rounded-lg w-[325px] h-[56px] py-[10px]"
            >
              <div className="flex flex-row gap-2 w-16 items-start">
                <img
                  src={CountryIcon}
                  alt="Twemojiflagindia"
                  id="Twemojiflagindia"
                  className="w-8"
                />
                <img
                  src={DropIcon}
                  alt="Gridiconsdropdown"
                  id="Gridiconsdropdown"
                  className="mt-1 w-5"
                />
              </div>
              <div className="text-xl font-['Inter'] font-medium text-[rgba(15,_0,_43,_0.3)] mt-1">
                Enter Phone Number
              </div>
            </div>
            <div
              id="ContinueAndLoading"
              className="text-center items-center text-xl mx-auto font-['Inter'] h-[56px] w-[325px] px-[16px] text-[20px] font-bold md:py-[0px] gap-[10px]  md:text-[#0f002b] shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] md:bg-white flex flex-row justify-center pt-4 rounded-lg text-white bg-[#0f002b] p-4"
            >
              Continue
            </div>
          </div>
          {/* number and continue-btn section  */}
        </div>
        {/* content section end */}
        {/* terms and condition */}
        <div className="inline-flex p-1 h-6 mt-[8rem] md:mt-[6rem] justify-center gap-2 text-[12px] font-[Inter] font-[500] leading-normal text-center  flex-row  mx-auto items-center">
          <img
            src={LudoIcon}
            alt="Ludoindianmonumenttouch"
            className="mt-1 w-2"
          />
          <div className="text-center text-xs font-['Inter'] font-medium md:text-white">
            Terms of Service
          </div>
          <img
            src={LudoIcon}
            alt="Ludoindianmonumenttouch1"
            className="mt-1 w-2"
          />
          <div className="text-center text-xs font-['Inter'] font-medium md:text-white">
            Privacy Policy
          </div>
          <img
            src={LudoIcon}
            alt="Ludoindianmonumenttouch2"
            className="mt-1 w-2"
          />
          <div className="text-center text-xs font-['Inter'] font-medium md:text-white">
            Content Policies
          </div>
        </div>
        {/* terms and condition */}
      </div>
      {/* login content sections ends */}
    </div>
  );
};

export default SignUpDesktop;

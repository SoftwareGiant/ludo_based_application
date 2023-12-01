import React from "react";
import "../../App.css";

import BackgroundImg from "../../assets/background.jpg";
import CountryIcon from "../../assets/country.svg";
import DropIcon from "../../assets/dropicon.svg";

const Info = () => {
  return (
    <>
      <div
        id="NotificationspaceRoot"
        className="bg-[#fead3a] w-full h-8 md:h-0"
      />
      <div>
        {/* background image section starts */}
        <div className="md:max-w-[40%] md:h-[720px] lg:h-[100vh] h-[390px] flex-shrink-0 flex md:float-right">
          <img src={BackgroundImg} alt="background/img" className="w-[100%]" />
        </div>
        {/* background image section ends */}
        {/* login content sections starts */}
        <div className="md:bg-[#0F002B] md:min-w-[60%] lg:h-[100vh] md:h-[720px] flex flex-col md:float-left">
          {/* main and sub heading starts */}
          <div className="justify-center items-center md:mt-[88px] bg-gradient md:bg-none flex md:w-full  -mt-[15.5rem] || bg-cover bg-50%_50% bg-blend-normal bg-no-repeat relative  flex-col  w-full">
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
        </div>
        {/* login content sections ends */}
      </div>
    </>
  );
};

export default Info;

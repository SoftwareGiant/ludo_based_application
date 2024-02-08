import React, { useState } from "react";
import "../../App.css";
import BackgroundImg from "../../assets/background.jpg";
import CountryIcon from "../../assets/country.svg";
import DropIcon from "../../assets/dropicon.svg";
import LudoIcon from "../../assets/ludo-indian-monument-touch.svg";
import SignUpSucess from "./SignUpSucess";
import { useNavigate } from "react-router-dom";
import MyButton from "../MainLayout/MyButton";

const SignUpDesktop = () => {
  const [number, setNumber] = useState("");
  const [isOtp, setIsOtp] = useState(false);
  const [otpNumber, setOtpNumber] = useState("");
  const [isSuccess, seIsSuccess] = useState(false);
  const [isLoadButton, setIsLoadButton] = useState(false);
  const navigate = useNavigate();
  const handlePhoneSubmit = () => {
    console.log(number);
    if (number === "") {
      alert("please enter number");
      return;
    } else {
      setIsOtp(true);
    }
    console.log();
  };
  const handleFormSubmit = async () => {
    console.log(number, isOtp);
    let intervalId;
    if (otpNumber && number) {
      seIsSuccess(true);
      intervalId = setTimeout(() => {
        navigate("/apptour");
      }, 3000);
    }
    () => {
      clearInterval(intervalId);
    };
  };
  console.log(isSuccess);

  return (
    <div className="w-full h-full min-h-screen">
      {/* background image section starts */}
      <div
        className={`md:max-w-[40%] sm:h-[720px] lg:h-[100vh]  md:float-right ${
          isSuccess ? "hidden" : ""
        } `}
      >
        <img
          src={BackgroundImg}
          alt="background/img"
          className="w-full h-full object-cover "
        />
      </div>
      {/* background image section ends */}

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
          {isSuccess ? (
            <div className="flex flex-col gap-6 w-full font-['Inter'] items-center h-screen justify-center">
              <div
                id="Ellipse"
                className="bg-[url(https://file.rendit.io/n/AgmUwxcDhU56xN8BuC7y.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center ml-3 pt-6 w-[150px] h-[150px] items-start"
              >
                <img
                  src="https://file.rendit.io/n/pMEYBbJ6aVmtSmbzARlI.svg"
                  alt="Mditick"
                  id="Mditick"
                  className="w-24"
                />
              </div>
              <div
                className={`text-center text-5xl font-medium ${
                  isSuccess ? "text-black" : "text-white"
                }  sm:text-white`}
              >
                success
              </div>
            </div>
          ) : (
            <>
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
                {isOtp ? (
                  <>
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
                      <input
                        disabled
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className=" mt-1 p-2 font-bold text-lg rounded-md w-full focus:outline-none appearance-none"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div
                      id="EnterPhoneNumber1"
                      className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] items-center mx-auto bg-white flex flex-row gap-4 justify-center pt-3 px-4 rounded-lg w-[325px] h-[56px] py-[10px]"
                    >
                      <input
                        type="number"
                        value={otpNumber}
                        onChange={(e) => setOtpNumber(e.target.value)}
                        className=" mt-1 p-2 font-bold text-lg rounded-md w-full focus:outline-none appearance-none"
                        placeholder="Enter Phone Number"
                      />
                      <span className="font-bold">Resend</span>
                    </div>
                    {/* <button
                      onClick={handleFormSubmit}
                      id="ContinueAndLoading"
                      className="text-center items-center text-xl mx-auto font-['Inter'] h-[56px] w-[325px] px-[16px] text-[20px] font-bold md:py-[0px] gap-[10px]  md:text-[#0f002b] shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] md:bg-white flex flex-row justify-center pt-4 rounded-lg text-white bg-[#0f002b] p-4"
                    >
                      Continue
                    </button> */}
                    <MyButton
                      text="Continue"
                      isLoading={isLoadButton}
                      handleCLick={handleFormSubmit}
                      theme="black"
                    />
                  </>
                ) : (
                  <>
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
                      <input
                        type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className=" mt-1 p-2 font-bold text-lg rounded-md w-full focus:outline-none appearance-none"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    {/* <button
                      onClick={handlePhoneSubmit}
                      id="ContinueAndLoading"
                      className="text-center items-center text-xl mx-auto font-['Inter'] h-[56px] w-[325px] px-[16px] text-[20px] font-bold md:py-[0px] gap-[10px]  md:text-[#0f002b] shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] md:bg-white flex flex-row justify-center pt-4 rounded-lg text-white bg-[#0f002b] p-4"
                    >
                      Continue
                    </button> */}
                    <MyButton
                      text="Continue"
                      handleCLick={handlePhoneSubmit}
                      theme="black"
                    />
                  </>
                )}
              </div>
              {/* number and continue-btn section  */}
            </>
          )}
        </div>
        {/* content section end */}

        {/* terms and condition */}
        <div
          className={`sm:inline-flex p-1 h-6 mt-[8rem] md:mt-[6rem] justify-center gap-2 text-[12px] font-[Inter] font-[500] leading-normal text-center  flex-row  mx-auto items-center ${
            isSuccess ? "hidden" : ""
          }`}
        >
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
    </div>
  );
};

export default SignUpDesktop;

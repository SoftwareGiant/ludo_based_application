import React, { useState } from "react";
import "../../App.css";
import BackgroundImg from "../../assets/background.jpg";
import CountryIcon from "../../assets/country.svg";
import DropIcon from "../../assets/dropicon.svg";
import LudoIcon from "../../assets/ludo-indian-monument-touch.svg";
import SignUpSucess from "./SignUpSucess";
import { useNavigate } from "react-router-dom";
import MyButton from "../MainLayout/MyButton";
import ButtonLoader from "../MainLayout/ButtonLoader";

const LoginMob = () => {
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
    setIsLoadButton(true);
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
    <>
      <div
        id="NotificationspaceRoot"
        className="bg-[#fead3a]  h-8 overflow-hidden max-w-[480px] w-full "
      />
      {isSuccess ? (
        <div className="flex flex-col gap-6 w-full font-['Inter'] items-center h-screen justify-center max-w-[480px]">
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
          <div className="text-center text-5xl font-medium text-black">
            success
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-between w-full max-w-[480px]">
          <div className="max-w-[480px] w-full min-h-screen h-full">
            <div
              className="bg-[#fead3a] min-h-[420px] overflow-hidden bg-cover bg-center  "
              style={{ backgroundImage: `url(${BackgroundImg})` }}
            ></div>
            <div className="h-full flex flex-col justify-between">
              <div className="max-w-[480px] w-full h-full">
                <div className="justify-center items-center  bg-gradient  flex flex-col   -mt-[6.95rem]">
                  <h3 className="text-center text-5xl font-['Nunito_Sans'] uppercase font-extrabold p-3 flex flex-wrap justify-center text-[#0f002b]">
                    <span>Ludo</span> <span>King </span>
                  </h3>
                  <h5 className="font-oooh text-4xl font-bold text-center ">
                    Punch Line
                  </h5>
                </div>
                <>
                  {/* signup tags starts  */}
                  <div className="flex justify-center w-full ">
                    <div
                      id="Line"
                      className="border-solid border-black/30 w-full h-px absolute top-8 left-0 border-t border-b-0 border-x-0"
                    />
                    <div className="text-center text-lg font-['Inter'] font-medium text-[#0f002b] relative flex flex-row justify-center p-4  items-start rounded-lg bg-white">
                      Log in or sign up
                    </div>
                  </div>

                  <div className="flex flex-col m-8 pt-8 gap-6  items-start">
                    {isOtp ? (
                      <>
                        <div
                          id="EnterPhoneNumber1"
                          className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] items-center mx-auto bg-white flex flex-row gap-4 justify-center pt-3 px-4 rounded-lg w-full h-[56px] py-[10px]"
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
                          className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] items-center mx-auto bg-white flex flex-row gap-4 justify-center pt-3 px-4 rounded-lg w-full h-[56px] py-[10px]"
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
                          className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] items-center mx-auto bg-white flex flex-row gap-4 justify-center pt-3 px-4 rounded-lg w-full h-[56px] py-[10px]"
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
                            type="text"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            className="p-2 font-bold text-lg rounded-md w-full focus:outline-none appearance-none"
                            placeholder="Enter Phone Number"
                          />
                        </div>
                        <button
                          onClick={handlePhoneSubmit}
                          className="text-center items-center text-xl mx-auto font-['Inter'] h-[56px] w-full px-[16px] text-[20px] font-bold  gap-[10px]   shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)]  flex flex-row justify-center pt-4 rounded-lg bg-[#0f002b] text-white p-4"
                        >
                          Continue
                        </button>
                      </>
                    )}
                  </div>
                </>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full max-w-[480px] m-auto justify-center gap-2 pb-10">
            <div className="text-center text-xs font-['Inter'] font-medium">
              Terms of Service
            </div>
            <div className="h-1 w-1 rounded-full bg-black"></div>
            <div className="text-center text-xs font-['Inter'] font-medium">
              Privacy Policy
            </div>
            <div className="h-1 w-1 rounded-full bg-black"></div>
            <div className="text-center text-xs font-['Inter'] font-medium">
              Content Policies
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginMob;

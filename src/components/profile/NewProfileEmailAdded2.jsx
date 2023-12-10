import React from 'react'
import "../../app.css";

import HamBurger from "../../assets/profile/hamburger.svg";
import ToggleSwitchOff from "../../assets/profile/toggleOff.svg";
import ToggleSwitchOn from "../../assets/profile/toggleOn.svg";
import KycBlack from "../../assets/profile/verifyBlack.svg";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import Back from "../../assets/profile/ep_back.svg";
import Edit from "../../assets/profile/edit.svg";
import EditEmail from './EditEmail';

const NewProfileEmailAdded2 = () => {
  return (
    <div>
      <div className="w-[390px] h-[32px] bg-[var(--main-coloryellow-orange)]" />
      {/* Hamburger section */}
      <div className="relative w-[390px] h-[51px] bg-[var(--main-coloryellow-orange)]">
        <div className="absolute w-[90px] h-[35px] top-[7px] left-[60px]">
          <div className="absolute top-0 left-0 font-['Nunito_Sans'] font-extrabold text-[var(--main-colorrich-blue)] text-[16px] text-center tracking-[0] leading-[normal]">
            LUDO KING
          </div>
          <div className="absolute top-[16px] left-[17px] font-['Oooh_Baby'] font-normal text-main-colorrich-blue text-[15.7px] text-center tracking-[0] leading-[normal]">
            punch line
          </div>
        </div>
        <img
          className="absolute w-[28px] h-[28px] top-[12px] left-[20px]"
          alt="Material symbols"
          src={HamBurger}
        />
      </div>
      {/* Hamburger section */}
      {/* User section */}
      <div id="NewRootRoot" className="flex flex-row w-[390px] items-start">
        <div className="overflow-hidden bg-[#0f002b] relative flex flex-row pt-32 w-full items-start">
          <div
            id="Ellipse"
            className="w-[256.41%] h-[1000px] bg-[#fead3a] absolute top-[-705px] left-[-305px] flex flex-row gap-12 items-start pt-48 pl-[325px] pr-[341px] rounded-[50%]"
          >
            <div className="flex flex-col mt-[532px] gap-4 w-3/5 items-start">
              <img src={Back} alt="Epback" id="Epback" className="w-6" />
              <div className="flex flex-row ml-4 gap-5 w-full items-start">
                <img
                  src={FrameProfile}
                  alt="Frame1"
                  className="w-16 border-0"
                />
                <div className="flex flex-col mt-2 w-3/5 items-start">
                  <div className="text-center text-xl font-['Nunito_Sans'] font-bold text-[#0f002b]">
                    Ludo Player
                  </div>
                  <div className="text-center text-sm font-['Nunito_Sans'] text-[#0f002b]">
                    @ludoplayer
                  </div>
                </div>
              </div>
            </div>
            <div
              id="KYC1"
              className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#00c300] flex flex-row justify-end mt-[592px] gap-1 w-20 items-start rounded-lg"
            >
              <div className="text-sm font-['Nunito_Sans'] font-bold text-white mt-1">
                KYC
              </div>
              <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row w-6 items-start pt-1 px-1 rounded-lg">
                <img
                  src={KycBlack}
                  alt="Iconparkoutlinesuccess"
                  className="mb-1 w-5"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#0f002b] relative flex flex-col mb-40 gap-10 w-full items-start pt-5 pb-6 px-8">
            <div className="flex flex-col justify-between w-full h-24 items-start">
              <div className="flex flex-row justify-between w-full items-start">
                <div className="text-xl font-['Nunito_Sans'] font-bold text-white">
                  Basic Details
                </div>
                <img
                  src={Edit}
                  alt="Materialsymbolseditoutline"
                  className="mt-1 w-5"
                />
              </div>
              <div className="flex flex-row justify-between ml-4 w-5/6 items-start">
                <div className="text-sm font-['Nunito_Sans'] text-white">
                  Phone no.
                </div>
                <div className="text-sm font-['Nunito_Sans'] text-white">
                  5348757512
                </div>
              </div>
              <div className="flex flex-row justify-between ml-4 w-5/6 items-start">
                <div className="text-sm font-['Nunito_Sans'] text-white">
                  Email{"            "}:
                </div>
                <div className="text-sm font-['Nunito_Sans'] text-white">
                  player@ludoking.in
                </div>
              </div>
              <div className="flex flex-row justify-between ml-4 w-5/6 items-start">
                <div className="text-sm font-['Nunito_Sans'] text-white">
                  User ID
                </div>
                <div className="text-sm font-['Nunito_Sans'] text-white">
                  0042356
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between mb-1 gap-6 w-5/6 items-start">
              <div className="flex flex-col gap-5 w-full h-16 items-start">
                <div className="text-xl font-['Nunito_Sans'] font-bold text-white">
                  Notification Preference
                </div>
                <div className="flex flex-row justify-between ml-4 w-full items-start">
                  <div className="text-sm font-['Nunito_Sans'] text-white mt-px">
                    Email
                  </div>
                  <img
                    src={ToggleSwitchOff}
                    alt="ToggleSwitch"
                    id="ToggleSwitch"
                    className="w-8"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div className="text-sm font-['Nunito_Sans'] text-white mt-px">
                  Push
                </div>
                <img
                  src={ToggleSwitchOn}
                  alt="ToggleSwitch1"
                  id="ToggleSwitch1"
                  className="w-8"
                />
              </div>
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div className="text-sm font-['Nunito_Sans'] text-white mt-px">
                  Phone No.
                </div>
                <img
                  src={ToggleSwitchOff}
                  alt="ToggleSwitch2"
                  id="ToggleSwitch2"
                  className="w-8"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 w-5/6 h-16 items-start">
              <div className="text-xl font-['Nunito_Sans'] font-bold text-white">
                App Preference
              </div>
              <div className="flex flex-row justify-between ml-4 w-full items-start">
                <div className="text-sm font-['Nunito_Sans'] text-white mt-px">
                  Theme
                </div>
                <img
                  src={ToggleSwitchOn}
                  alt="ToggleSwitch3"
                  id="ToggleSwitch3"
                  className="w-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User section */}
    </div>
  )
}

export default NewProfileEmailAdded2;

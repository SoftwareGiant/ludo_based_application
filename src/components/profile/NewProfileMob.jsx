import React from "react";
import "../../app.css";

import FrameProfile from "../../assets/profile/Frame_profile.png";
import Edit from "../../assets/profile/edit.svg";
import LogOutMob from "../../assets/profile/respon_logout.svg";

const NewProfileMob = () => {
  return (
    <>
      <div
        id="NewProfileRoot"
        className="bg-[rgba(254,_173,_58,_0.2)] relative flex flex-row w-full items-start"
      >
        <div className="w-full h-[762px] overflow-hidden bg-[#0f002b] absolute top-20 left-0 flex flex-col pb-2 gap-5 items-start">
          <div
            id="Ellipse"
            className="bg-[#fead3a] flex flex-row justify-center pt-16 w-[256.41%] h-[1000px] items-start mt-[-705px] mx-[-305px] rounded-[50%]"
          >
            <div className="bg-[url(https://file.rendit.io/n/RJyqCEjGdMEpyhb1FKmU.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-end mt-[666px] w-1/5 h-48 items-start px-2 border">
              <div className="bg-white flex flex-row justify-center mt-0 pt-4 w-12 h-12 items-start rounded-[25.000001907348633px]">
                <img
                  src="https://file.rendit.io/n/jowR3tZpZlO3evJFwUIY.svg"
                  alt="Materialsymbolseditoutline"
                  className="w-5"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full items-start">
            <div className="flex flex-col ml-24 w-1/2 items-start">
              <div className="flex flex-row gap-1 w-full items-start">
                <div className="text-center text-3xl font-['Nunito_Sans'] font-bold text-white">
                  Ludo Player
                </div>
                <img
                  src="https://file.rendit.io/n/mmXncS1yZ4S0fX11u9AF.svg"
                  alt="Iconparkoutlinesuccess"
                  className="mt-2 w-6"
                />
              </div>
              <div className="text-center text-xl font-['Nunito_Sans'] text-white ml-10">
                @ludoplayer
              </div>
            </div>
            <div className="bg-[#0f002b] flex flex-col justify-center gap-10 w-full items-start pt-5 pb-6 px-8">
              <div className="flex flex-row gap-24 w-full items-start">
                <div className="flex flex-col justify-between w-2/5 h-24 items-start">
                  <div className="text-xl font-['Nunito_Sans'] font-bold text-white">
                    Basic Details
                  </div>
                  <div
                    id="PhoneNo"
                    className="text-sm font-['Nunito_Sans'] text-white ml-4"
                  >
                    Phone no.
                    {"     "}:
                  </div>
                  <div
                    id="UserID"
                    className="text-sm font-['Nunito_Sans'] text-white ml-4"
                  >
                    User ID
                    {"         "}:
                  </div>
                </div>
                <div className="flex flex-col mt-1 gap-5 w-1/3 items-start">
                  <img
                    src="https://file.rendit.io/n/pTRWx4BiDsi0PrZv23Dh.svg"
                    alt="Materialsymbolseditoutline1"
                    className="ml-20 w-5"
                  />
                  <div className="flex flex-col gap-4 w-24 h-16 items-start">
                    <div className="text-sm font-['Nunito_Sans'] text-white">
                      5348757512
                    </div>
                    <div className="text-sm font-['Nunito_Sans'] text-white ml-6">
                      0042356
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-6 w-5/6 items-start">
                <div className="flex flex-row gap-10 w-full items-start">
                  <div className="flex flex-col mb-px gap-6 w-3/4 h-16 items-start">
                    <div className="text-xl font-['Nunito_Sans'] font-bold text-white">
                      Notification Preference
                    </div>
                    <div
                      id="Email"
                      className="text-sm font-['Nunito_Sans'] text-white ml-4"
                    >
                      Email
                      {"             "}:
                    </div>
                  </div>
                  <img
                    src="https://file.rendit.io/n/YJUG93YpttskCMoyMyM5.svg"
                    alt="ToggleSwitch"
                    id="ToggleSwitch"
                    className="mt-12 w-8"
                  />
                </div>
                <div className="flex flex-row justify-between ml-4 w-full items-start">
                  <div
                    id="Push"
                    className="text-sm font-['Nunito_Sans'] text-white mt-px"
                  >
                    Push
                    {"              "}:
                  </div>
                  <img
                    src="https://file.rendit.io/n/ZRtraeFqdv7dPQtm5lhC.svg"
                    alt="ToggleSwitch1"
                    id="ToggleSwitch1"
                    className="w-8"
                  />
                </div>
                <div className="flex flex-row justify-between ml-4 w-full items-start">
                  <div
                    id="PhoneNo1"
                    className="text-sm font-['Nunito_Sans'] text-white mt-px"
                  >
                    Phone No.
                    {"     "}:
                  </div>
                  <img
                    src="https://file.rendit.io/n/YJUG93YpttskCMoyMyM5.svg"
                    alt="ToggleSwitch2"
                    id="ToggleSwitch2"
                    className="w-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://file.rendit.io/n/7rgde9iPj3oAP0lbaDqt.svg"
          alt="Epback"
          id="Epback"
          className="w-6 h-6 absolute top-12 left-5"
        />
        <div className="w-full h-12 bg-[#fead3a] absolute top-8 left-0 flex flex-row justify-between items-start pt-2 px-5">
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
          <div className="">
            <img
              src={LogOutMob}
              alt="Materialsymbolslogout"
              className="w-5 h-5"
            />
          </div>
        </div>
        <div
          id="Notificationspace"
          className="bg-[#fead3a] relative mb-[812px] w-full h-8"
        />
      </div>
    </>
  );
};

export default NewProfileMob;

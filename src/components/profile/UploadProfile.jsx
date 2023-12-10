import React from "react";
import "../../app.css";

import HamBurger from "../../assets/profile/hamburger.svg";
import Profile from "../../assets/profile/Frame_profile.png";
const UploadProfile = () => {
  return (
    <div>
      <div className="w-[390px] h-[32px] bg-[var(--main-coloryellow-orange)]" />
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
      <div className="overflow-hidden bg-[#0f002b] flex flex-row w-full items-start">
        <div
          id="Ellipse"
          className="bg-[#fead3a] flex flex-col justify-between w-[256.41%] h-[1000px] items-start mx-[-305px] my-[-119px] pl-[305px] py-32 rounded-[50%]"
        >
          <div className="flex flex-col ml-5 gap-24 w-2/5 items-start">
            <img
              src="https://file.rendit.io/n/WzbT5ee9Vc34Gi4C6aun.svg"
              alt="HardwareKeyboardBackspace icon"
              id="Epback"
              className="w-6"
            />
            <div className="flex flex-col ml-10 gap-6 w-5/6 items-start">
              <img src={Profile} alt="Frame8" className="ml-6 border-none" />
              <div className="text-xl font-['Nunito_Sans'] font-bold text-[#0f002b]">
                Upload or take a new picture.
              </div>
            </div>
          </div>
          <div className="bg-[#0f002b] flex flex-row justify-center pt-12 w-3/5 h-48 items-start rounded-tl-lg rounded-tr-lg">
            <div className="flex flex-col gap-2 w-3/5 items-start">
              <div className="flex flex-row justify-between w-full items-start">
                <div className="bg-white flex flex-row justify-center pt-5 w-16 h-16 items-start rounded-[40px]">
                  <img
                    src="https://file.rendit.io/n/O4ITQjHNAx80aEVPlTnm.svg"
                    alt="Tdesignapp"
                    id="Tdesignapp"
                    className="w-5"
                  />
                </div>
                <div className="bg-white flex flex-row justify-center pt-5 w-16 h-16 items-start rounded-[40px]">
                  <img
                    src="https://file.rendit.io/n/duXjra6FzFQP90RwI66T.svg"
                    alt="Solargallerybold"
                    id="Solargallerybold"
                    className="w-5"
                  />
                </div>
                <div className="bg-white flex flex-row justify-center pt-5 w-16 h-16 items-start rounded-[40px]">
                  <img
                    src="https://file.rendit.io/n/kfec5cOcD3BzO3kFKt6m.svg"
                    alt="Icroundcamera"
                    id="Icroundcamera"
                    className="w-5"
                  />
                </div>
              </div>
              <div className="flex flex-row ml-1 gap-20 w-full items-start">
                <div className="text-center text-xs font-['Inter'] font-semibold text-white">
                  File
                </div>
                <div className="flex flex-row gap-12 w-3/5 items-start">
                  <div className="text-center text-xs font-['Inter'] font-semibold text-white">
                    Gallery
                  </div>
                  <div className="text-center text-xs font-['Inter'] font-semibold text-white">
                    Camera
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProfile;

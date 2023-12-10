import React from "react";
import HamBurger from "../../assets/profile/hamburger.svg";

const NewProfilePic = () => {
  return (
    <div>
      <div className="w-[390px] h-[32px] bg-[var(--main-coloryellow-orange)]" />
      {/* Hamburger section */}
      <div className="bg-[#fead3a] flex flex-row justify-between w-[390px] h-12 items-start pt-2 pl-5 pr-6">
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
        <div className="text-center font-['Inter'] font-medium text-[#0f002b] mt-2">
          Done
        </div>
      </div>
      {/* HamBurger Ends */}
      <div className="overflow-hidden bg-[#0f002b] flex flex-row w-[390px] items-start">
        <div
          id="Ellipse"
          className="bg-[#fead3a] flex flex-col gap-16 w-[256.41%] h-[1000px] items-start mx-[-305px] my-[-119px] pl-[305px] py-32 rounded-[50%]"
        >
          <img
            src="https://file.rendit.io/n/oJu8U6sgg8p9kMiTgMvP.svg"
            alt="HardwareKeyboardBackspace icon"
            id="Epback"
            className="ml-5 w-6"
          />
          <img
            src="https://file.rendit.io/n/HpB2HUIZe0Kwf65QMPxv.png"
            alt="Frame1"
            className="mb-1"
          />
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

export default NewProfilePic;

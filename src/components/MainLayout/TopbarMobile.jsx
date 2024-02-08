import React from "react";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import HamBurger from "../../assets/profile/hamburger.svg";
const TopbarMobile = () => {
  return (
    <div className="bg-[#fead3a] flex flex-row justify-between w-full sm:hidden h-12 items-start pt-2 px-5  lg:hidden">
      <div className="flex flex-row gap-3 w-2/5 items-start">
        <img
          src={HamBurger}
          alt="Materialsymbolsmenu"
          id="Materialsymbolsmenu"
          className="mt-1 w-6"
          //   onClick={toggleNavbar}
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
      <img
        src={FrameProfile}
        alt="Frame1"
        className="mt-1 w-8 h-8 border rounded-[100px]"
      />
    </div>
  );
};

export default TopbarMobile;

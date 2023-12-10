import React from "react";
import "../../app.css";

import HamBurger from "../../assets/profile/hamburger.svg";
import Profile from "../../assets/profile/Frame_profile.png";
const ReferrEarn = () => {
  return (
    <div>
      <div className="w-[390px] h-[32px] bg-[var(--main-coloryellow-orange)]" />
      {/* Hamburger section */}
      <div className="bg-[#fead3a] flex flex-row justify-between w-full h-12 items-start pt-2 px-5">
        <div className="flex flex-row gap-3 w-2/5 items-start">
          <img
            src={HamBurger}
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
        <img
          src={Profile}
          alt="Frame1"
          className="mt-1 w-8 h-8 border rounded-[100px]"
        />
      </div>
      {/* Hamburger section */}
      <div className="overflow-hidden bg-[#0f002b] flex flex-col justify-between pb-24 w-full h-[762px] items-start">
        <div
          id="Ellipse"
          className="bg-[#fead3a] flex flex-col justify-end gap-12 w-[256.41%] h-[1000px] items-start mt-[-705px] mx-[-305px] pl-[364px] py-12 rounded-[50%]"
        >
          <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row ml-16 gap-2 w-1/4 items-start pt-1 px-4 rounded-lg">
            <div className="bg-white flex flex-row mb-1 w-8 h-8 items-start pt-1 px-1">
              <img
                src="https://file.rendit.io/n/bFWbhZ2zMjGgpixaVKOO.svg"
                alt="Solarcopylinear"
                id="Solarcopylinear"
                className="w-5"
              />
            </div>
            <div className="font-['Inter'] font-bold text-[#0f002b] mt-2">
              753478
            </div>
          </div>
          <div className="text-justify font-['Inter'] font-bold text-[#0f002b] w-2/5">
            This is your referral link. Refer your friends and earn 1%
            commission on their winning amount.
          </div>
        </div>
        <div className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-center ml-12 pt-1 gap-6 w-3/4 items-start rounded-lg">
          <div className="flex flex-row mt-1 gap-5 w-20 items-start">
            <img
              src="https://file.rendit.io/n/QI7QkQs8kQGwqWgrlTfm.svg"
              alt="Logoswhatsappicon"
              id="Logoswhatsappicon"
              className="w-8"
            />
            <img
              src="https://file.rendit.io/n/aIgtiBVXKH446AwHYquv.svg"
              alt="Logosfacebook"
              id="Logosfacebook"
              className="mt-px w-8"
            />
          </div>
          <div className="flex flex-row mb-1 gap-4 w-1/2 items-start">
            <img
              src="https://file.rendit.io/n/VEIrZIuhULuCOnNUVlRg.svg"
              alt="EditorMultilineChart icon"
              id="Ritwitterxfill"
              className="mt-2 w-6"
            />
            <div className="flex flex-row gap-2 w-24 items-start">
              <div className="bg-white flex flex-row w-10 h-10 items-start pt-2 px-2">
                <img
                  src="https://file.rendit.io/n/XpD7MHxVwmsdiJDCCzLT.svg"
                  alt="Solarcopylinear1"
                  id="Solarcopylinear1"
                  className="w-6"
                />
              </div>
              <div className="bg-white flex flex-row w-10 items-start pt-1 px-1">
                <img
                  src="https://file.rendit.io/n/velQnp6h8DFtneMQS3uG.svg"
                  alt="Mdishare"
                  id="Mdishare"
                  className="mb-1 w-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferrEarn;

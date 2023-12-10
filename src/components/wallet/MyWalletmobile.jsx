import React from "react";
import "../../app.css";

import HamBurger from "../../assets/profile/hamburger.svg";
import Profile from "../../assets/profile/Frame_profile.png";

const MyWalletmobile = () => {
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
      <div
        id="AppContentRoot"
        className="overflow-hidden bg-[#0f002b] flex flex-row w-full items-start"
      >
        <div
          id="Ellipse"
          className="bg-[#fead3a] flex flex-col justify-end gap-10 w-[256.41%] h-[1000px] items-start mt-[-323px] mb-20 mx-[-305px] pl-[339px] py-[209px] rounded-[50%]"
        >
          <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col pb-4 gap-4 w-1/2 items-start rounded-lg">
            <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col gap-2 w-full h-32 items-start py-3 rounded-tl-lg rounded-tr-lg">
              <div className="flex flex-row justify-between w-full items-start">
                <div className="font-['Nunito_Sans'] text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-2 w-2/5 h-8 items-start rounded-lg">
                  Deposit Cash
                </div>
                <img
                  src="https://file.rendit.io/n/RDuw8K5vzxhuuZxm4g37.svg"
                  alt="Mdihistory"
                  id="Mdihistory"
                  className="mt-1 w-5"
                />
              </div>
              <div className="text-xs font-['Nunito_Sans'] font-semibold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center ml-3 pt-2 w-5/6 items-start rounded-lg">
                Can be used to play Tournaments & Battles. Cannot be withdrawn
                to Paytm or Bank.
              </div>
            </div>
            <div className="flex flex-row ml-4 gap-24 w-5/6 items-start">
              <div className="bg-white flex flex-row justify-center pt-1 gap-1 w-20 items-start">
                <div className="text-xl font-['Inter'] text-[#0f002b] mb-1">
                  ₹
                </div>
                <div className="text-xl font-['Inter'] font-bold text-[#0f002b]">
                  501
                </div>
              </div>
              <div className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-px pt-2 gap-1 w-2/5 h-8 items-start rounded-lg">
                <img
                  src="https://file.rendit.io/n/aXqglJgeUL7b1B2p4F6W.svg"
                  alt="Materialsymbolsadd"
                  id="Materialsymbolsadd"
                  className="w-4"
                />
                <div className="text-sm font-['Inter'] text-white">
                  add cash
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col pb-4 gap-4 w-1/2 items-start rounded-lg">
            <div className="border-solid border-b border-white/30 bg-[#0f002b] flex flex-col gap-2 w-full h-32 items-start py-3 rounded-tl-lg rounded-tr-lg">
              <div className="flex flex-row justify-between w-full items-start">
                <div className="font-['Nunito_Sans'] text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center pt-2 w-2/5 h-8 items-start rounded-lg">
                  Winning Cash
                </div>
                <img
                  src="https://file.rendit.io/n/RDuw8K5vzxhuuZxm4g37.svg"
                  alt="Mdihistory1"
                  id="Mdihistory1"
                  className="mt-1 w-5"
                />
              </div>
              <div className="text-xs font-['Nunito_Sans'] font-semibold text-white shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex flex-row justify-center ml-3 pt-2 w-5/6 items-start rounded-lg">
                Can be used to play Tournaments & Battles. Withdrawn to Paytm or
                Bank.
              </div>
            </div>
            <div className="flex flex-row ml-4 gap-20 w-5/6 items-start">
              <div className="bg-white flex flex-row justify-center pt-1 gap-1 w-24 items-start">
                <div className="text-xl font-['Inter'] text-[#0f002b] mb-1">
                  ₹
                </div>
                <div className="text-xl font-['Inter'] font-bold text-[#0f002b]">
                  1001
                </div>
              </div>
              <div className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-px pt-2 gap-1 w-2/5 h-8 items-start rounded-lg">
                <img
                  src="https://file.rendit.io/n/cxK5VOzRVA6iHpwg4lAk.svg"
                  alt="Cilbank"
                  id="Cilbank"
                  className="w-4"
                />
                <div className="text-sm font-['Inter'] text-white">
                  withdraw
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWalletmobile;

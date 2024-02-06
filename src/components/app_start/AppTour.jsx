import React from "react";
import { CarouselDefault } from "./Carousel";

const AppTour = () => {
  return (
    // <div>
    <div
      id="AppStartAppTourRoot"
      className="overflow-hidden h-screen  flex flex-row gap-0 w-full font-['Oooh_Baby'] items-start"
    >
      <div className="bg-[#0f002b]  flex-col justify-between w-1/2 h-screen items-start pt-20 pb-12 pl-16 hidden  sm:flex">
        <div className="flex flex-col justify-between ml-px w-5/6 h-[397px] items-start">
          <div className="relative flex flex-row  justify-center ml-10 w-4/5 items-start">
            <div className="text-center text-6xl font-['Nunito_Sans'] font-bold text-white absolute top-0 left-0 h-20 ">
              LUDO KING
            </div>
            <div className="text-center text-4xl text-white relative mt-16">
              punch line
            </div>
          </div>
          <div className="flex flex-col gap-16 w-full h-40 font-['Inter'] items-start">
            <div className="text-center text-[45px] font-medium md:w-[420px] md:h-14 text-white">
              The Ultimate Guide
            </div>
            <div className="flex flex-row ml-40 gap-3 w-1/4 items-start">
              <div className="text-center text-3xl font-medium text-white">
                Skip
              </div>
              <div className="relative flex flex-row justify-end mt-1 w-10 items-start">
                <img
                  src="https://file.rendit.io/n/fc6cSKi06cNExcjH2JqS.svg"
                  alt="Ionchevronback"
                  id="Ionchevronback"
                  className="w-6 h-6 absolute top-0 left-0"
                />
                <img
                  src="https://file.rendit.io/n/fc6cSKi06cNExcjH2JqS.svg"
                  alt="Ionchevronback1"
                  id="Ionchevronback1"
                  className="relative w-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row ml-8 gap-2 w-3/4 font-['Inter'] items-start">
          <img
            src="https://file.rendit.io/n/uOpyiNrJaYi3FMuL8ynB.png"
            alt="Ludoindianmonumenttouch1"
            className="mt-1 w-2"
          />
          <div className="text-center text-xs font-medium text-white">
            Terms of Service
          </div>
          <img
            src="https://file.rendit.io/n/s60Jn1cEsxdKdqY45O56.png"
            alt="Ludoindianmonumenttouch2"
            className="mt-1 w-2"
          />
          <div className="text-center text-xs font-medium text-white">
            Privacy Policy
          </div>
          <img
            src="https://file.rendit.io/n/FdikFsXQPzaRObzde4Ab.png"
            alt="Ludoindianmonumenttouch3"
            className="mt-1 w-2"
          />
          <div className="text-center text-xs font-medium text-white">
            Content Policies
          </div>
          <img
            src="https://file.rendit.io/n/DnVCzkrziny22ws1tw28.png"
            alt="Ludoindianmonumenttouch4"
            className="mt-1 w-2"
          />
        </div>
      </div>

      <div className=" w-full sm:w-1/2 p-2 bg-[#fead3a] ">
        <CarouselDefault />
      </div>
    </div>
    // </div>
  );
};

export default AppTour;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../app.css";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import { SidebarMob } from "../MainLayout/SidebarMob";

const TransactioHistoryMob = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-[480px] w-full min-h-screen h-full">
        <div
          id="NotificationspaceRoot"
          className="bg-[#fead3a]  h-8 overflow-hidden"
        />
        <div className="bg-[#fead3a] flex flex-row justify-between max-w-[480px] w-full h-12 items-start pt-2 px-5 ">
          <div className="flex flex-row gap-3 w-2/5 items-start">
            <SidebarMob />
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

        <div className="bg-[#0f002b] w-full min-h-screen overflow-hidden relative">
          <div className="bg-[#fead3a] h-[98%] w-[200%] rounded-[50%]   -top-20 absolute -left-[50%]" />
          <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-4/5 m-auto rounded-lg  font-['Nunito-Sans'] relative mt-4">
            <div className="text-white bg-[#0f002b] flex flex-col gap-2 w-full rounded-tl-lg rounded-tr-lg">
              <div className="flex justify-between w-full items-center p-3">
                <span className=" shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)]">
                  5 min ago
                </span>
              </div>
              <div className="text-xs shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex  px-4 items-center  w-full  py-5 pb-8 ">
                <span className="font-semibold">
                  {" "}
                  You won this match, you vs{" "}
                </span>
                <span className="font-extrabold ml-1"> kansh23i</span>
              </div>
            </div>
            <div className="border-solid border-t-4  mt-1 w-full border-[#008000] "></div>
            <div className="flex  w-full p-4 justify-between">
              <div className="flex text-xl font-['Inter'] font-bold text-[#0f002b] ">
                ₹ 501
              </div>
              <div className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex gap-2 items-center p-2 rounded-lg flex-1 w-full max-w-[180px]">
                <div className="text-sm font-['Inter'] text-white">
                  Withdrawal Successful
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-4/5 m-auto rounded-lg  font-['Nunito-Sans'] relative mt-4">
            <div className="text-white bg-[#0f002b] flex flex-col gap-2 w-full rounded-tl-lg rounded-tr-lg">
              <div className="flex justify-between w-full items-center p-3">
                <span className=" shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)]">
                  5 min ago
                </span>
              </div>
              <div className="text-xs shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex  px-4 items-center  w-full  py-5 pb-8 ">
                <span className="font-semibold">
                  {" "}
                  You won this match, you vs{" "}
                </span>
                <span className="font-extrabold ml-1"> kansh23i</span>
              </div>
            </div>
            <div className="border-solid border-t-4  mt-1 w-full border-[#008000] "></div>
            <div className="flex  w-full p-4 justify-between">
              <div className="flex text-xl font-['Inter'] font-bold text-[#0f002b] ">
                ₹ 501
              </div>
              <div className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex gap-2 items-center p-2 rounded-lg flex-1 w-full max-w-[150px]">
                <div className="text-sm font-['Inter'] text-white">
                  Deposit Successful
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactioHistoryMob;

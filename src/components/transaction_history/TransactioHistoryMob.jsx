import React, { useEffect, useState } from "react";
import "../../app.css";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPaymentHistory } from "./userHistorySlice";

const TransactioHistoryMob = () => {
  const dispatch = useDispatch();
  const paymentHistory = useSelector(
    (state) => state?.userhistory?.paymentHistory
  );
  const loading = useSelector((state) => state?.userhistory?.loading);
  const error = useSelector((state) => state?.userhistory?.error);
  console.log(paymentHistory, loading, error);
  useEffect(() => {
    dispatch(fetchUserPaymentHistory());
  }, [dispatch]);

  const battleCreationTime = (time) => {
    const currentTime = Date.now();
    // Convert the timestamp to milliseconds (assuming timestamp is in ISO format)
    const timestamp = Date.parse(time);
    // Calculate the time difference in milliseconds
    const timeDifference = currentTime - timestamp;
    // Convert milliseconds to minutes
    const timeDifferenceInMinutes = Math.floor(timeDifference / (1000 * 60));
    // return timeDifferenceInMinutes;
    if (timeDifferenceInMinutes < 60) {
      return Math.floor(timeDifferenceInMinutes) + " Minutes ago";
    } else {
      const timeDifferenceInHours = timeDifferenceInMinutes / 60;
      return Math.floor(timeDifferenceInHours) + " Hours ago";
    }
  };
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

        <div className="bg-[#fead3a] w-full min-h-screen overflow-hidden relative">
          <div className="bg-[#fead3a] h-[98%] w-[200%] rounded-[50%]   -top-20 absolute -left-[50%]" />

          {paymentHistory &&
            paymentHistory?.map((payment) => (
              <div
                key={payment._id}
                className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-4/5 m-auto rounded-lg  font-['Nunito-Sans'] relative mt-4"
              >
                <div className="text-white bg-[#0f002b] flex flex-col gap-2 w-full rounded-tl-lg rounded-tr-lg">
                  <div className="flex justify-between w-full items-center p-3">
                    <span className=" shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)]">
                      {battleCreationTime(payment.timestamp)}
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
                    ₹ {payment.amount}
                  </div>
                  <div className=" text-sm font-['Inter'] text-white  flex gap-2 justify-end items-center  w-full max-w-[180px]">
                    <div className="text-sm font-['Inter'] p-2 rounded-lg  text-white bg-[#0f002b]  shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)]">
                      {` ${payment.paymentAction} ${payment.status}`}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-4/5 m-auto rounded-lg  font-['Nunito-Sans'] relative mt-4">
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default TransactioHistoryMob;

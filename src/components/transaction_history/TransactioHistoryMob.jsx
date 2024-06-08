import React, { useEffect, useState } from "react";
import "../../app.css";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPaymentHistory } from "./userHistorySlice";
import LudoMainLogo from "../MainLayout/LudoMainLogo";
import { useNavigate } from "react-router-dom";
import PageLoader from "../MainLayout/PageLoader";
import { convertTimestamp } from "../admin_and_S.admin/Functions/convertTimestamp";
import TotoalBal, { ProfileButton } from "../MainLayout/ProfileButton";
import { fetchUserDetail } from "../live_battle/userSlice";

const TransactioHistoryMob = () => {
  const dispatch = useDispatch();
  const paymentHistory = useSelector(
    (state) => state?.userhistory?.paymentHistory
  );
  const users = useSelector((state) => state.user.user);
  console.log(users);
  const loading = useSelector((state) => state?.userhistory?.loading);
  const error = useSelector((state) => state?.userhistory?.error);
  console.log(paymentHistory, loading, error);
  useEffect(() => {
    dispatch(fetchUserPaymentHistory());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchUserDetail());
  }, []);

  if (loading) return <PageLoader />;
  return (
    <>
      <div className="max-w-[480px] w-full min-h-screen h-full">
        <div
          id="NotificationspaceRoot"
          className="bg-[#fead3a]  h-8 overflow-hidden"
        />
        <div className="bg-[#fead3a] flex flex-row justify-between max-w-[480px] w-full h-12 items-start pt-2 px-5 ">
          <div className="flex flex-row gap-3  items-start">
          <SidebarMob users={users} />
            <LudoMainLogo />
          </div>
          <div className="flex gap-2 items-center">
            <TotoalBal users={users} />
            <ProfileButton />
          </div>
        </div>

        <div className="bg-[#fead3a] w-full min-h-screen overflow-hidden relative">
          {paymentHistory && paymentHistory.length ? (
            paymentHistory?.map((payment) => (
              <div
                key={payment._id}
                className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col  w-4/5 m-auto rounded-lg  font-['Nunito-Sans'] relative my-4"
              >
                <div className="text-white bg-[#0f002b] py-3 flex flex-col gap-2 w-full rounded-tl-lg rounded-tr-lg">
                  <div className="flex justify-between w-full items-center p-3">
                    <span className=" shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)]">
                      {convertTimestamp(payment.timestamp)}
                    </span>
                  </div>
                </div>
                <div
                  className={`border-solid border-t-4  mt-1 w-full ${
                    payment.status === "pending"
                      ? "border-yellow-800"
                      : "border-[#008000]"
                  }  `}
                ></div>
                <div className="flex  w-full p-4 justify-between">
                  <div className="flex text-xl font-['Inter'] font-bold text-[#0f002b] ">
                    ₹ {payment.amount}
                  </div>
                  <div className=" text-sm font-['Inter'] text-white  flex gap-2 justify-end items-center  w-full max-w-[180px]">
                    <div className="text-sm font-['Inter'] p-2 rounded-lg  text-white bg-[#0f002b]  shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)]">
                      {` ${
                        payment.paymentAction === "withdrawl"
                          ? "Withdrawal"
                          : "Deposite"
                      } ${payment.status}`}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white font-semibold text-3xl pt-4 flex justify-center items-center h-full">
              No Transaction History...
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default TransactioHistoryMob;

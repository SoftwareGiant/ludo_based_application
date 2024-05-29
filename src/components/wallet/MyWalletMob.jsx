import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../app.css";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import Time from "../../assets/wallet/time.svg";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "../live_battle/userSlice";
import { Icon } from "@iconify-icon/react";
import LudoMainLogo from "../MainLayout/LudoMainLogo";
import PageLoader from "../MainLayout/PageLoader";
import { Button, IconButton } from "@material-tailwind/react";
import { ProfileButton } from "../MainLayout/ProfileButton";
const MyWalletMob = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(fetchUserDetail());
  }, []);
  console.log(users);
  const navigate = useNavigate();
  if (users === null || users === undefined) {
    return <PageLoader />;
  }
  return (
    <div className="max-w-[480px] w-full min-h-screen h-full">
      <div
        id="NotificationspaceRoot"
        className="bg-[#fead3a]  h-8 overflow-hidden"
      />
      <div className="bg-[#fead3a] flex flex-row justify-between max-w-[480px] w-full h-12 items-start pt-2 px-5 ">
        <div className="flex flex-row gap-3 w-2/5 items-start">
          <SidebarMob />
          <LudoMainLogo />
        </div>
        <ProfileButton />
      </div>

      <div className="bg-[#0f002b] w-full min-h-screen overflow-hidden relative">
        <div className="bg-[#fead3a] h-[98%] w-[200%] rounded-[50%]   -top-20 absolute -left-[50%]" />
        <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-4/5 m-auto rounded-lg  font-['Nunito-Sans'] relative mt-4">
          <div className="text-white bg-[#0f002b] flex flex-col gap-2 w-full rounded-tl-lg rounded-tr-lg">
            <div className="flex justify-between w-full items-center p-3">
              <span className=" shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)]">
                Deposit Cash
              </span>
              <IconButton
                onClick={() => navigate("/transactionhistory")}
                className="p-0 m-0 bg-transparent"
              >
                <img
                  className="cursor-pointer"
                  src={Time}
                  alt="lgihistory"
                  id="lgihistory"
                />
              </IconButton>
            </div>
            <div className="text-xs font-semibold   shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex  justify-center items-center  w-full px-6 py-5 pb-8 ">
              Can be used to play Tournaments & Battles. Cannot be withdrawn to
              Paytm or Bank.
            </div>
          </div>
          <div className="flex  w-full p-4">
            <div className="flex text-xl font-['Inter'] font-bold text-[#0f002b] flex-1">
              ₹ {users?.walletDetails?.totalAmount}
            </div>
            <Button
              onClick={() => navigate("/deposite")}
              className="cursor-pointer shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex items-center p-2 rounded-lg flex-1 max-w-[120px]"
            >
              <Icon
                icon="material-symbols:add"
                className="text-white"
                width={22}
              />
              <div className="text-sm font-['Inter'] text-white">add cash</div>
            </Button>
          </div>
        </div>
        <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-4/5 m-auto rounded-lg mt-4 font-['Nunito-Sans'] relative">
          <div className="text-white bg-[#0f002b] flex flex-col gap-2 w-full rounded-tl-lg rounded-tr-lg">
            <div className="flex justify-between w-full items-center p-3">
              <span className=" shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)]">
                Winning Cash
              </span>
              <IconButton
                onClick={() => navigate("/transactionhistory")}
                className="p-0 m-0 bg-transparent"
              >
                <img src={Time} alt="lgihistory" id="lgihistory" />
              </IconButton>
            </div>
            <div className="text-xs font-semibold   shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex  justify-center items-center  w-full px-6 py-5 pb-8  ">
              Can be used to play Tournaments & Battles. Withdrawn to Paytm or
              Bank.
            </div>
          </div>
          <div className="flex  w-full p-4">
            <div className="flex text-xl font-['Inter'] font-bold text-[#0f002b] flex-1">
              ₹ {users?.walletDetails?.withDrawlAmount}
            </div>
            <Button
              onClick={() => navigate("/withdraw")}
              className="cursor-pointer shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-wrap items-center p-2 gap-2 rounded-lg flex-1 max-w-[130px]"
            >
              <Icon icon="cil:bank" className="text-white" width={20} />
              <div className="text-sm font-['Inter'] text-white">Withdraw</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWalletMob;

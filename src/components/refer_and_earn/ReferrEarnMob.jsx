import React, { useEffect, useState } from "react";
import "../../app.css";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LudoMainLogo from "../MainLayout/LudoMainLogo";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import TotoalBal, { ProfileButton } from "../MainLayout/ProfileButton";
import { fetchUserDetail } from "../live_battle/userSlice";
import { useDispatch, useSelector } from "react-redux";
const ReferrEarnMob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(fetchUserDetail());
  }, []);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(users?.referralDetails?.referralCode);
      toast.success("Text copied to clipboard: ");
    } catch (error) {
      toast.error("Error copying to clipboard");
    }
  };
  const copyRefferal = async () => {
    try {
      await navigator.clipboard.writeText(
        `http://139.84.169.91:5173/register/refferal=${users?.referralDetails?.referralCode}`
      );
      toast.success("Text copied to clipboard: ");
    } catch (error) {
      toast.error("Error copying to clipboard");
    }
  };
  return (
    <>
      <div className="max-w-[480px] bg-[#0f002b] w-full min-h-screen h-full">
        <div
          id="NotificationspaceRoot"
          className="bg-[#fead3a]  h-8 overflow-hidden"
        />
        <div className="bg-[#fead3a]  flex justify-between items-center w-full   h-[51px]  px-4">
          <div className="flex flex-row gap-3 items-start mt-3">
            <SidebarMob />
            <LudoMainLogo />
          </div>
          <div className="flex gap-2 items-center">
            <TotoalBal users={users} />
            <ProfileButton />
          </div>
        </div>

        <div className=" w-full h-[70vh] overflow-hidden relative">
          <div className="bg-[#fead3a] h-[60vh] w-[150%] rounded-[50%]   -top-32 absolute -left-[26%] " />

          <div className="relative pt-6 w-full flex flex-col gap-4 justify-center items-center m-auto">
            <div className="shadow-md bg-white inline-flex  gap-[10px]  h-10 items-center   justify-center px-4 rounded-[10px] ">
              <div
                onClick={() => copyToClipboard()}
                className="bg-white flex  w-8 h-8 items-center justify-center p-[6px] cursor-pointer"
              >
                <Icon icon="solar:copy-outline" width={32} />
              </div>
              <div className="font-['Inter'] font-bold text-[#0f002b] flex-1 text-base">
                {users?.referralDetails?.referralCode}
              </div>
            </div>
            <div className="text-justify font-['Inter'] font-bold text-[#0f002b] w-3/5">
              This is your referral link. Refer your friends and earn 1%
              commission on their winning amount.
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="fixed bottom-8  inline-flex items-center justify-center min-h-[52.8px]   px-[21.12px] gap-[10px]  shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-white rounded-[13.2px] flex-wrap ">
              <div className="flex w-[42.24px] h-[42.24px] justify-center items-center p-[3.4px] ">
                <Icon icon="logos:whatsapp-icon" width={36} />
              </div>
              <div className="flex w-[42.24px] h-[42.24px] justify-center items-center py-[5px] px-[4.6px] ">
                <Icon width={32} icon="logos:facebook" />
              </div>
              <div className="flex w-[42.24px] h-[42.24px] justify-center items-center py-2 px-[7.6px]">
                <Icon width={32} icon="ri:twitter-x-fill" />
              </div>
              <div
                onClick={() => copyRefferal()}
                className="flex w-[42.24px] h-[42.24px] justify-center items-center p-[7.92px] cursor-pointer"
              >
                <Icon icon="solar:copy-outline" width={32} />
              </div>
              <div className="flex w-[42.24px] h-[42.24px] justify-center items-center py-[4.72px] px-[5.55px] ">
                <Icon icon="mdi:share" width={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferrEarnMob;

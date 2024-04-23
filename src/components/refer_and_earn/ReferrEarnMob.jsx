import React, { useState } from "react";
import "../../app.css";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import Copy from "../../assets/new_game/copy.svg";
import Share from "../../assets/new_game/share.svg";
import Fb from "../../assets/new_game/fb.svg";
import Wp from "../../assets/new_game/wp.svg";
import Twtr from "../../assets/new_game/twtr.svg";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LudoMainLogo from "../MainLayout/LudoMainLogo";
const ReferrEarnMob = () => {
  const [referno, setReferno] = useState(753478);
  const navigate = useNavigate();

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Text copied to clipboard: ");
    } catch (error) {
      alert("Error copying to clipboard");
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
            <LudoMainLogo/>
          </div>
          <img
            onClick={() => navigate("/profile")}
            src={FrameProfile}
            alt="Frame1"
            className="w-[30px] h-[30px] mt-[9.5px] rounded-[100px] border border-solid border-white "
          />
        </div>

        <div className=" w-full h-[70vh] overflow-hidden relative">
          <div className="bg-[#fead3a] h-[60vh] w-[650px] rounded-[50%]   -top-20 absolute -left-24" />

          <div className="relative pt-6 w-full flex flex-col gap-4 justify-center items-center m-auto">
            <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] bg-white inline-flex  gap-[10px]  h-10 items-center   justify-center px-4 rounded-[10px] ">
              <div
                onClick={() => copyToClipboard(referno)}
                className="bg-white flex  w-8 h-8 items-center justify-center p-[6px] cursor-pointer"
              >
                <img
                  src={Copy}
                  alt="Solarcopylinear"
                  id="Solarcopylinear"
                  className="w-5"
                />
              </div>
              <div className="font-['Inter'] font-bold text-[#0f002b] flex-1 text-base">
                753478
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
                <img
                  src={Wp}
                  alt="Logoswhatsappicon"
                  id="Logoswhatsappicon"
                  className="w-[35px]"
                />
              </div>
              <div className="flex w-[42.24px] h-[42.24px] justify-center items-center py-[5px] px-[4.6px] ">
                <img
                  src={Fb}
                  alt="Logosfacebook"
                  id="Logosfacebook"
                  className=" w-8"
                />
              </div>
              <div className="flex w-[42.24px] h-[42.24px] justify-center items-center py-2 px-[7.6px]">
                <img
                  src={Twtr}
                  alt="Ritwitterxfill"
                  id="Ritwitterxfill"
                  className="w-8"
                />
              </div>
              <div
                onClick={() => copyToClipboard(referno)}
                className="flex w-[42.24px] h-[42.24px] justify-center items-center p-[7.92px] cursor-pointer"
              >
                <img
                  src={Copy}
                  alt="ActionLabelOutline icon"
                  id="Solarcopylinear1"
                  className="w-8"
                />
              </div>
              <div className="flex w-[42.24px] h-[42.24px] justify-center items-center py-[4.72px] px-[5.55px] ">
                <img src={Share} alt="Mdishare" id="Mdishare" className="w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferrEarnMob;

import React, { useEffect } from "react";
import "../../app.css";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { toast } from "react-toastify";
import LudoMainLogo from "../MainLayout/LudoMainLogo";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import TotoalBal, { ProfileButton } from "../MainLayout/ProfileButton";
import { fetchUserDetail } from "../live_battle/userSlice";
import { useDispatch, useSelector } from "react-redux";

const ReferrEarnMob = () => {
  const dispatch = useDispatch();
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
        `http://localhost:5173/register?refferal=${users?.referralDetails?.referralCode}`
      );
      toast.success("Text copied to clipboard: ");
    } catch (error) {
      toast.error("Error copying to clipboard");
    }
  };

  const handleShare = (platform) => {
    const shareUrl = `http://localhost:5173/register?refferal=${users?.referralDetails?.referralCode}`;
    let url = "";
    switch (platform) {
      case "facebook":
        // Replace with the appropriate Facebook share URL construction
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}`;
        break;
      case "xsocial":
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          shareUrl
        )}`;
        break;

      case "whatsapp":
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
          shareUrl
        )}`;
        break;
      default:
        break;
    }
    window.open(url, "_blank");
  };

  const handleExtraShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join me on this awesome platform!",
          text: "Sign up using my referral link and get great benefits!",
          url: `http://localhost:5173/register?refferal=${users?.referralDetails?.referralCode}`,
        });
        
      } catch (error) {
        toast.error("Error sharing content: " + error.message);
      }
    } else {
      toast.error("Web Share API is not supported in your browser.");
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
            <SidebarMob users={users} />
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
            <div className="shadow-md bg-white inline-flex  gap-[10px]  h-12 items-center   justify-center px-4 rounded-[10px] ">
              <div
                onClick={() => copyToClipboard()}
                className="flex w-[42.24px] h-[42.24px] justify-center items-center p-[7.92px] 
                   transition-transform duration-300 transform hover:scale-105 
                  cursor-pointer"
              >
                <Icon icon="solar:copy-outline" width={32} />
              </div>
              <div className="font-['Inter'] font-bold text-[#0f002b] flex-1 text-base">
                {users?.referralDetails?.referralCode || "Refer code"}
              </div>
            </div>
            <div className="text-justify font-['Inter'] font-bold text-[#0f002b] w-[70%]">
              This is your referral link. Refer your friends and earn 1%
              commission on their winning amount.
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="fixed bottom-8 inline-flex items-center justify-center min-h-[58px] px-[21.12px] gap-[10px] shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-white rounded-[13.2px] flex-wrap">
              <div
                onClick={() => handleShare("whatsapp")}
                className="flex w-[42.24px] h-[42.24px] justify-center items-center p-[3.4px] 
                   transition-transform duration-300 transform hover:scale-110 
                   hover:bg-green-100 rounded-full cursor-pointer"
              >
                <Icon icon="logos:whatsapp-icon" width={36} />
              </div>
              <div
                onClick={() => handleShare("facebook")}
                className="flex w-[42.24px] h-[42.24px] justify-center items-center py-[5px] px-[4.6px] 
                   transition-transform duration-300 transform hover:scale-110 
                   hover:bg-blue-100 rounded-full cursor-pointer"
              >
                <Icon width={32} icon="logos:facebook" />
              </div>
              <div
                onClick={() => handleShare("xsocial")}
                className="flex w-[42.24px] h-[42.24px] justify-center items-center py-2 px-[7.6px] 
                   transition-transform duration-300 transform hover:scale-110 
                   hover:bg-gray-300 rounded-full cursor-pointer"
              >
                <Icon width={32} icon="ri:twitter-x-fill" />
              </div>
              <div
                onClick={copyRefferal}
                className="flex w-[42.24px] h-[42.24px] justify-center items-center p-[7.92px] 
                   transition-transform duration-300 transform hover:scale-110 
                   hover:bg-gray-100 rounded-full cursor-pointer"
              >
                <Icon icon="solar:copy-outline" width={32} />
              </div>
              <div
                onClick={handleExtraShare}
                className="flex w-[42.24px] h-[42.24px] justify-center items-center py-[4.72px] px-[5.55px] 
                   transition-transform duration-300 transform hover:scale-110 
                   hover:bg-gray-100 rounded-full cursor-pointer"
              >
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

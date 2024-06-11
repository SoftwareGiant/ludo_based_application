import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { Button } from "@material-tailwind/react";
import LudoMainLogo from "../MainLayout/LudoMainLogo";
import { ProfileButton } from "../MainLayout/ProfileButton";
import HelpButton from "../MainLayout/HelpButton";
const Feedback = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[480px] bg-[#0f002b] w-full min-h-screen h-full">
      <div
        id="NotificationspaceRoot"
        className="bg-[#fead3a]  h-8 overflow-hidden"
      />
      <div className="bg-[#fead3a] flex flex-row justify-between max-w-[480px] w-full h-12 items-start pt-2 px-5 ">
        <div className="flex flex-row gap-3  items-start">
          <SidebarMob />
          <LudoMainLogo />
        </div>
        <ProfileButton />
      </div>
      <div className="flex bg-[#fead3a] justify-between items-center px-5 py-2 w-full">
        <div className="flex gap-5 items-center">
          <Icon
            icon="eva:arrow-back-fill"
            width="28"
            onClick={() => navigate("/")}
          />

          <div
            onClick={() => navigate("/")}
            id="LiveBattle13"
            className="cursor-pointer text-center text-xl font-['Inter'] text-[#0f002b]"
          >
            <span className="font-bold"> Feed </span> back
          </div>
        </div>

        <HelpButton dark={true} />
      </div>

      <div className=" w-full  overflow-hidden relative">
        <div className="bg-[#fead3a]  h-[98%] w-[200%] rounded-[50%]   -top-20 absolute -left-[50%]" />

        <div className=" p-4 bg-[#FFFFFF] bg-opacity-[80%] shadow-md  flex flex-col w-4/5 m-auto rounded-lg mt-4 font-['Nunito-Sans'] relative">
          <textarea
            placeholder="Please elaborate..."
            className="h-72 bg-transparent text-lg outline-none text-[Inter] font-semibold text-[#0f002b] placeholder-black opacity-[60%]"
          />
          <Button className="bg-[#0f002b] rounded-3xl">Send Feedback</Button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

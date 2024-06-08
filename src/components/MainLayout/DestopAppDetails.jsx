import React from "react";
// import desktopExtra from "../assets/new_game/desktopExtra.png";
import ludoimagedestop from "../../assets/new_game/ludoimagedestop.png";
import desktopExtra from "../../assets/new_game/desktopExtra.png";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const DestopAppDetails = () => {
  return (
    <div className="bg-black desktop-hide w-full h-screen  overflow-hidden relative">
      <img
        src={desktopExtra}
        className="object-cover w-full  h-full"
        alt="Desktop Extra"
      />
      <div className="bg-white text-xl rounded-2xl absolute top-10 left-[42%] transform -translate-x-[40%] p-4 backdrop-filter backdrop-blur-lg bg-opacity-60">
        Create your <b>own battle</b> and <b>challenge</b> your friends and
        <b
          className="bg-gradient-to-r mx-2 from-[#FEAD3A] to-[#0F002B] text-transparent bg-clip-text"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          win cash
        </b>
      </div>

      <div className="flex rounded-2xl items-center  bg-[#FFFFFF] bg-opacity-20 absolute bottom-10 left-6 text-white border gap-3 w-[280px] p-4 py-2 shadow-md border-white">
        <img src={ludoimagedestop} />

        <div>
          <span className="text-[#FEAD3A] font-semibold">ludoplayer234</span>
          won ₹433 in <u>auto classic</u>
        </div>
      </div>
      <div className="flex flex-col rounded-2xl absolute bottom-10 right-16 text-white  gap-3 w-[350px] p-4 py-3 shadow-md border-white">
        <span> For best experience, open ludoking.in on</span>
        <div className="flex gap-3 items-center">
          {" "}
          <Icon icon="devicon:chrome" />
          <p>chrome mobile</p>
        </div>
      </div>
    </div>
  );
};

export default DestopAppDetails;

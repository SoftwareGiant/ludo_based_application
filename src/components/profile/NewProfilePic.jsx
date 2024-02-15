import React, { useEffect, useState } from "react";
import "../../app.css";
import ProfileEditbtn from "../../assets/profile/editbutton.svg";
import HamBurger from "../../assets/profile/hamburger.svg";
import Edit from "../../assets/profile/edit.svg";
import ProfileEdit from "../../assets/profile/profile_edit.svg";
import LogOutMob from "../../assets/profile/respon_logout.svg";
import Verify from "../../assets/profile/verify.svg";
import ToggleOff from "../../assets/profile/toggleOff.svg";
import ToggleOn from "../../assets/profile/ToggleOn.svg";
import Back from "../../assets/profile/ep_back.svg";
import Favorite from "../../assets/new_game/fav.svg";
import BellIcon from "../../assets/new_game/notification.svg";
import kyc from "../../assets/new_game/KYC.svg";
import AddGame from "../../assets/new_game/addgame.svg";
import Profile from "../../assets/new_game/profile.svg";
import WinCash from "../../assets/new_game/wincash.svg";
import Wallet from "../../assets/new_game/wallet.svg";
import GameHistory from "../../assets/new_game/history.svg";
import ReferEarn from "../../assets/new_game/refer&earn.svg";
import Support from "../../assets/new_game/support.svg";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { Switch } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/new_game/image.svg";
import video from "../../assets/new_game/video.svg";
import {
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
const NewProfilePic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openBottom, setOpenBottom] = useState(true);
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const openDrawerBottom = () => {
    setOpenBottom(true);
  };
  const closeDrawerBottom = () => setOpenBottom(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="max-w-[480px] w-full min-h-screen h-full">
      <div
        id="NotificationspaceRoot"
        className="bg-[#fead3a]  h-8 overflow-hidden"
      />
      <div className="bg-[#fead3a]  flex justify-between items-center w-full   h-[51px]  px-4">
        <div className="flex flex-row gap-3 items-start mt-3">
          <SidebarMob />
          <div className="flex flex-col text-[#0f002b] ">
            <div className="  text-base font-['Nunito_Sans'] font-extrabold ">
              LUDO KING
            </div>

            <div className="text-center text-base font-['Oooh_Baby'] font-normal  -mt-2">
              punch line
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fead3a]  w-full min-h-screen overflow-hidden relative">
        <div className="flex bg-[#fead3a] justify-between items-center px-4 py-2 w-full">
          <div className="flex gap-5 items-center">
            <img
              onClick={() => navigate("/profile")}
              src="https://file.rendit.io/n/Bh3TjQUvsgxuYLevIVW7.svg"
              alt="HardwareKeyboardBackspace icon"
              id="Epback"
              className="w-6"
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img
            className="w-48
                 relative  rounded-full"
            src="https://images.unsplash.com/photo-1529524987368-af489318987c?q=80&w=582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>

      <Drawer
        placement="bottom"
        open={openBottom}
        onClose={closeDrawerBottom}
        className="p-4  bg-[#0f002b] rounded-t-3xl"
      >
        <div className="flex w-full justify-center items-end gap-4 pt-10">
          <label
            htmlFor="image-upload"
            className="flex justify-center items-center flex-col"
          >
            <div className="p-4 w-16 h-16 flex justify-center items-center bg-white rounded-full ">
              <img src={image} />
            </div>
            <span className="text-white">Upload Image</span>{" "}
          </label>
          <input
            accept="image/*"
            id="image-upload"
            type="file"
            className="hidden"
            // onChange={handleImageUpload}
          />
          <label
            htmlFor="video-upload"
            className="flex justify-center items-center flex-col"
          >
            <div className="p-4 w-16 h-16 flex justify-center items-center bg-white rounded-full ">
              <img src={video} />
            </div>
            <span className="text-white">Upload Video</span>{" "}
          </label>
          <input
            className="hidden"
            accept="video/*"
            id="video-upload"
            type="file"
            // onChange={handleVideoUpload}
          />
        </div>

        <Typography
          color="white"
          className="flex justify-center text-gray-400 pt-6"
        >
          Make sure that you upload the correct image or video. This will be
          used in future for reference in case of any issues.
        </Typography>
      </Drawer>
    </div>
  );
};

export default NewProfilePic;

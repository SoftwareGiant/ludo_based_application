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
  const [imageFile, setImageFile] = useState("https://images.unsplash.com/photo-1529524987368-af489318987c?q=80&w=582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

  const [openBottom, setOpenBottom] = useState(true);
  const navigate = useNavigate();
  
  const openDrawerBottom = () => {
    setOpenBottom(true);
  };
  const closeDrawerBottom = () => setOpenBottom(false);


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
    alert("image upload successfully")
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
        <div className="w-full flex flex-col items-center gap-4 justify-center">
          <img
            className="w-48
                 relative  rounded-full"

          
            src={imageFile} alt="Preview"
          />
           <span className="text-[#0F002B] font-bold font-[Nunito-Sans]">
            Upload or take a new picture.
            </span>
        </div>




        <div className="flex fixed bottom-0 py-10 rounded-t-3xl bg-black w-full justify-center items-center gap-10 pt-10 max-w-[480px]  ">
          
          <div >
          <label
            htmlFor="image-upload"
            className="flex justify-center items-center flex-col"
          >
            <div className="p-4 w-16 h-16 flex justify-center items-center bg-white rounded-full ">
              <img src={image} />
            </div>
            <span className="text-white">Gallery</span>{" "}
          </label>
          <input
            accept="image/*"
            id="image-upload"
            type="file"
            className="hidden"
            onChange={handleImageChange}
          />
          </div>
        <div>
        <label
            htmlFor="camera"
            className="flex justify-center items-center flex-col"
          >
            <div className="p-4 w-16 h-16 flex justify-center items-center bg-white rounded-full ">
              <img src={video} />
            </div>
            <span className="text-white">Camera</span>{" "}
          </label>
          <input
            accept="image/*"
            id="camera"
            type="file"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
       
        </div>
      </div>

    </div>
  );
};

export default NewProfilePic;

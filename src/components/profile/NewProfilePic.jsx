import React, { useEffect, useState } from "react";
import "../../App.css";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { useNavigate } from "react-router-dom";
import image from "../../assets/new_game/image.svg";
import video from "../../assets/new_game/video.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import LudoMainLogo from "../MainLayout/LudoMainLogo";
const NewProfilePic = () => {
  const [imageFile, setImageFile] = useState(
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );

  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.auth);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        try {
          setImageFile(reader.result);
          const response = await axios.post(
            "api/user/addPicture",
            { image: file }, // Passed image in request body
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `bearer ${accessToken}`,
              },
            }
          );
          console.log(response);
          if (response.status === 200) {
            toast.success(response.data.message);
          } else {
            toast.error("Failed to upload the image.");
          }
        } catch (error) {
          console.error("Error uploading the image:", error);
          toast.error("An error occurred while uploading the image.");
        }
      };
      reader.onerror = (error) => {
        console.error("FileReader error:", error);
        toast.error("Failed to read the file.");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-[480px] bg-[#fead3a] w-full min-h-screen h-full">
      <div
        id="NotificationspaceRoot"
        className="bg-[#fead3a]  h-8 overflow-hidden"
      />
      <div className="bg-[#fead3a]  flex justify-between items-center w-full   h-[51px]  px-4">
        <div className="flex flex-row gap-3 items-start mt-3">
          <SidebarMob />
          <LudoMainLogo />
        </div>
      </div>

      <div className="bg-[#fead3a]  w-full overflow-hidden relative">
        <div className="flex bg-[#fead3a] justify-between items-center px-4 py-2 w-full">
          <div className="flex gap-5 items-center">
            <img
              onClick={() => navigate("/profile")}
              src="https://file.rendit.io/n/Bh3TjQUvsgxuYLevIVW7.svg"
              alt="HardwareKeyboardBackspace icon"
              id="Epback"
              className="cursor-pointer w-6"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-4 justify-center">
          <div className="h-48 w-48 relative  rounded-full overflow-hidden">
            <img
              className="absolute h-full w-full object-cover"
              src={imageFile}
              alt="Preview"
            />
          </div>
          <span className="text-[#0F002B] text-lg font-bold font-[Nunito-Sans]">
            Upload or take a new picture.
          </span>
        </div>

        <div className="flex fixed bottom-0 py-10 rounded-t-3xl bg-black w-full justify-center items-center gap-10 pt-10 max-w-[480px]  ">
          <div>
            <label
              htmlFor="image-upload"
              className="flex cursor-pointer justify-center items-center flex-col"
            >
              <div className="p-4 w-16 h-16 flex justify-center items-center bg-white hover:bg-gray-200 rounded-full ">
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
              className="flex justify-center cursor-pointer items-center flex-col"
            >
              <div className="p-4 w-16 h-16 flex justify-center items-center bg-white hover:bg-gray-200  rounded-full ">
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

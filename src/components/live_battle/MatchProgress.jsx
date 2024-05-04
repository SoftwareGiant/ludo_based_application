import React, { useEffect, useState } from "react";
import image from "../../assets/new_game/image.svg";
import video from "../../assets/new_game/video.svg";
import { Icon } from "@iconify-icon/react";
import { useNavigate } from "react-router-dom";
import TopbarMobile from "../MainLayout/TopbarMobile";
import {
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const MatchProgress = () => {
  const navigate = useNavigate();
  const [isStarted, setIsStarted] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [openBottom, setOpenBottom] = useState(false);
  const [gameStatus, setGameStatus] = useState("");
  const [screenshot, setScreenshot] = useState("");
  const { accessToken } = useSelector((state) => state.auth);
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the first file selected by the user
    setScreenshot(file);
    if (file) {
      toast.success("image uploaded successfully");
      setOpenBottom(false);
    }
  };
  const openDrawerBottom = () => {
    setOpenBottom(true);
  };
  const handleResult = async (result) => {
    try {
      if (gameStatus === "won" || gameStatus === "loss") {
        return;
      }
      if (result === "loss") {
        const obj = { outcome: "lose" };
        const response = await axios.post("api/game/updateresult", obj, {
          headers: {
            Authorization: `bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        });
        const data = response.data;
        if (response.status === 200) {
          toast.success(data.message);
          setGameStatus(result);
        } else {
          toast.error(data?.message);
        }
      } else {
        if (!screenshot) {
          toast.error("please upload a image");
          return;
        }
        const obj = { outcome: "win", image: screenshot };
        console.log(obj);
        const response = await axios.post("api/game/updateresult", obj, {
          headers: {
            Authorization: `bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        });
        const data = response.data;
        if (response.status === 200) {
          toast.success(data.message);
          setGameStatus(result);
        } else {
          toast.error(data?.message);
        }
      }
    } catch (error) {
      if (error?.response?.data?.message)
        toast.error(error.response.data.message);
      else toast.error("An error occurred. Please try again.");
    }
  };
  const closeDrawerBottom = () => setOpenBottom(false);
  return (
    <div className="h-screen w-full max-w-[480px] bg-white">
      <TopbarMobile />
      <div className=" flex flex-col w-full pt-20">
        <div className="flex justify-between items-center px-4 py-2 w-full">
          <div className="flex gap-5 items-center">
            <img
              onClick={() => navigate("/")}
              src="https://file.rendit.io/n/Bh3TjQUvsgxuYLevIVW7.svg"
              alt="HardwareKeyboardBackspace icon"
              id="Epback"
              className="w-6 cursor-pointer"
            />
            <div
              id="LiveBattle13"
              className="text-center text-xl font-['Inter'] text-[#0f002b]"
            >
              live <span className="font-bold">battle</span>
            </div>
          </div>

          <Icon
            className="cursor-pointer"
            onClick={() => navigate("/help")}
            icon="material-symbols:info-outline"
            width={24}
          />
        </div>

        <div>
          <div className="flex flex-col  w-full gap-4 p-8">
            {isStarted ? (
              <button className="p-2 flex items-center justify-center gap-2 text-white bg-[#0F002B] rounded-md font-bold">
                <span> Match in Progress </span>

                <Icon icon="material-symbols:lock" width="21" />
              </button>
            ) : (
              <button
                onClick={() => setIsStarted(true)}
                className="p-2 border border-blue-gray-700 rounded-md font-bold"
              >
                Click if Match has Started
              </button>
            )}
            <ol>
              <li>1. Don’t click unless the match has started.</li>

              <li>2. Once clicked it is irreversible.</li>

              <li>
                3. In case any one of the player clicked it by incident then
                they can revert their decision within 10seconds. After that the
                match will be considered to be started.
              </li>
            </ol>
          </div>
          <hr className="bg-gray-900" />
        </div>
        {isStarted && (
          <div>
            <div className="flex flex-col  w-full gap-4 p-8 ">
              {isEnd ? (
                <button
                  onClick={openDrawerBottom}
                  className="p-2  text-white bg-[#0F002B] rounded-md font-bold"
                >
                  Upload Image or Video
                </button>
              ) : (
                <button
                  onClick={() => setIsEnd(true)}
                  className="p-2 border border-blue-gray-700 rounded-md font-bold"
                >
                  Click if Match has Ended
                </button>
              )}

              <ol>
                <li>1. Don’t click unless the match has ended.</li>
                <li>2. Strictly Irreversible.</li>
              </ol>
            </div>
            <hr className="bg-gray-900" />
          </div>
        )}
        {isEnd && (
          <div className="w-full p-6 flex gap-2 justify-center items-center">
            <IconButton
              onClick={() => setIsEnd(false)}
              className={`${
                gameStatus === "won" || gameStatus === "loss" ? "hidden" : ""
              } w-full `}
              variant="text"
            >
              <Icon icon="gridicons:cross" width="26" />
            </IconButton>
            <Button
              onClick={() => handleResult("loss")}
              // onClick={() => setGameStatus("won")}
              className={`${gameStatus === "won" ? "hidden" : ""} w-full`}
              color="red"
            >
              Lost
            </Button>
            <Button
              onClick={() => handleResult("won")}
              // onClick={() => setGameStatus("lost")}
              color="green"
              className={`${gameStatus === "loss" ? "hidden" : ""} w-full`}
            >
              won
            </Button>
          </div>
        )}
        <Drawer
          placement="bottom"
          open={openBottom}
          onClose={closeDrawerBottom}
          className="p-4 w-[480px] bg-[#0f002b] rounded-t-3xl"
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
              onChange={handleImageUpload}
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
              onChange={handleImageUpload}
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
    </div>
  );
};

export default MatchProgress;

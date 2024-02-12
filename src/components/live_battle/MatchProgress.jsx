import React, { useEffect, useState } from "react";
import { SidebarMob } from "../MainLayout/SidebarMob";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import LiveBattles from "../../assets/new_game/livebattle.svg";
import cross from "../../assets/new_game/cross.svg";
import lock from "../../assets/new_game/lock.svg";
import image from "../../assets/new_game/image.svg";
import video from "../../assets/new_game/video.svg";
import { useNavigate } from "react-router-dom";
import TopbarMobile from "../MainLayout/TopbarMobile";
import {
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
const MatchProgress = () => {
  const navigate = useNavigate();
  const [isStarted, setIsStarted] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [openBottom, setOpenBottom] = useState(false);
  const [gameStatus, setGameStatus] = useState("");
  const openDrawerBottom = () => {
    setOpenBottom(true);
  };
  const closeDrawerBottom = () => setOpenBottom(false);
  return (
    <div className="min-h-screen h-full  bg-white">
      <TopbarMobile />
      <div className=" flex flex-col w-full pt-20">
        <div className="flex justify-between items-center px-4 py-2 w-full">
          <div className="flex gap-5 items-center">
            <img
              onClick={() => navigate("/")}
              src="https://file.rendit.io/n/Bh3TjQUvsgxuYLevIVW7.svg"
              alt="HardwareKeyboardBackspace icon"
              id="Epback"
              className="w-6"
            />
            <div
              id="LiveBattle13"
              className="text-center text-xl font-['Inter'] text-[#0f002b]"
            >
              live <span className="font-bold">battle</span>
            </div>
          </div>
          <img
            src="https://file.rendit.io/n/ib8IMr1PTiCuwTfVAXZs.svg"
            alt="ActionInfoOutline icon"
            id="Icoutlineinfo"
            className="w-6"
          />
        </div>

        <div>
          <div className="flex flex-col  w-full gap-4 p-8">
            {isStarted ? (
              <button className="p-2 flex items-center justify-center gap-2 text-white bg-[#0F002B] rounded-md font-bold">
                <span> Match in Progress </span>
                <img src={lock} />
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
        {isStarted ? (
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
        ) : (
          ""
        )}
        {isEnd ? (
          <div className="w-full p-6 flex gap-2 justify-center items-center">
            <IconButton
              className={`${
                gameStatus === "won" || gameStatus === "lost" ? "hidden" : ""
              } w-full`}
              variant="text"
            >
              <img src={cross} />
            </IconButton>
            <Button
              onClick={() => setGameStatus("won")}
              className={`${gameStatus === "lost" ? "hidden" : ""} w-full`}
              color="red"
            >
              Lost
            </Button>
            <Button
              onClick={() => setGameStatus("lost")}
              color="green"
              className={`${gameStatus === "won" ? "hidden" : ""} w-full`}
            >
              won
            </Button>
          </div>
        ) : (
          ""
        )}
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
    </div>
  );
};

export default MatchProgress;

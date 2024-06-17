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
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchUserDetail } from "./userSlice";
import ButtonLoader from "../MainLayout/ButtonLoader";
const MatchProgress = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [openBottom, setOpenBottom] = useState(false);
  const [gameStatus, setGameStatus] = useState("");
  const [screenshot, setScreenshot] = useState("");
  const [filename, setFilename] = useState("");
  const [isLoadLoss, setIsLoadLoss] = useState(false);
  const [isLoadWon, setIsLoadWon] = useState(false);

  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.auth);
  const users = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(fetchUserDetail());
  }, []);
  const dispatch = useDispatch();

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the first file selected by the user
    console.log(file);
    setScreenshot(file);
    setFilename(file.name);
    if (file) {
      toast.success("image uploaded successfully");
      setOpenBottom(false);
    }
  };
  const openDrawerBottom = () => {
    setOpenBottom(true);
  };
  const resetAadharback = () => {
    setScreenshot("");
    setFilename("");
  };
  const handleResult = async (result) => {
    try {
      if (gameStatus === "won" || gameStatus === "loss") {
        return;
      }
      if (result === "loss") {
        setIsLoadLoss(true);
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
          setIsLoadLoss(false);
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
        setIsLoadWon(true);
        const response = await axios.post("api/game/updateresult", obj, {
          headers: {
            Authorization: `bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        });
        const data = response.data;
        if (response.status === 200) {
          setIsLoadWon(false);
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
      <TopbarMobile users={users} />
      <div className=" flex flex-col w-full pt-20">
        <div className="flex justify-between items-center px-4 py-2 w-full">
          <div className="flex gap-5 items-center">
            {isEnd ? (
              <img
                onClick={() => setIsEnd(false)}
                src="https://file.rendit.io/n/Bh3TjQUvsgxuYLevIVW7.svg"
                alt="HardwareKeyboardBackspace icon"
                id="Epback"
                className="w-6 cursor-pointer"
              />
            ) : (
              <img
                onClick={() => navigate("/")}
                src="https://file.rendit.io/n/Bh3TjQUvsgxuYLevIVW7.svg"
                alt="HardwareKeyboardBackspace icon"
                id="Epback"
                className="w-6 cursor-pointer"
              />
            )}

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

        {
          <div>
            {isEnd ? (
              <div className="flex flex-col  w-full gap-4 p-8 ">
                {screenshot ? (
                  <div className="p-1  text-white text-sm bg-[#0F002B] rounded-md font-bold">
                    <IconButton
                      className="p-1 m-1 h-6 w-8"
                      onClick={resetAadharback}
                    >
                      <Icon icon="charm:cross" width={32} />{" "}
                    </IconButton>

                    {filename.slice(0, 20)}
                  </div>
                ) : (
                  <button
                    onClick={openDrawerBottom}
                    className="p-2  text-white bg-[#0F002B] rounded-md font-bold"
                  >
                    Upload Image or Video
                  </button>
                )}
              </div>
            ) : (
              <div className="flex flex-col  w-full gap-4 p-8 ">
                <button
                  onClick={() => setIsEnd(true)}
                  className="p-2 border border-blue-gray-700 rounded-md font-bold"
                >
                  Click if Match has Ended
                </button>
              </div>
            )}

            <hr className="bg-gray-900" />
          </div>
        }
        {isEnd && (
          <div className=" p-6 px-8 flex gap-2 justify-center items-center">
            <IconButton
              onClick={() => setIsEnd(false)}
              variant="outlined"
              className={`${
                gameStatus === "won" || gameStatus === "loss" ? "hidden" : ""
              } w-full `}
            >
              <Icon icon="gridicons:cross" width="26" className="mt-1" />
            </IconButton>
            <Button
              onClick={() => handleResult("loss")}
              disabled={isLoadLoss}
              className={`${gameStatus === "won" ? "hidden" : ""} w-full h-10 flex justify-center items-center`}
              color="red"
            >
              {!isLoadLoss ? "Lost" : <ButtonLoader />}
            </Button>
            <Button
              onClick={() => handleResult("won")}
              disabled={isLoadWon}
              color="green"
              className={`${gameStatus === "loss" ? "hidden" : ""} w-full h-10 flex justify-center items-center`}
            >
              {!isLoadWon ? "won" : <ButtonLoader />}
            </Button>
          </div>
        )}
        <Drawer
          placement="bottom"
          open={openBottom}
          onClose={closeDrawerBottom}
          className="p-4 w-[480px] bg-[#0f002b] rounded-t-3xl"
        >
          <div className="bg-white w-[50%] h-[2px] -mt-2 mb-2 rounded-full m-auto" />
          <div className="flex w-full justify-center items-end gap-4 pt-10">
            <label
              htmlFor="image-upload"
              className="flex justify-center cursor-pointer items-center flex-col"
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
              className="flex justify-center cursor-pointer items-center flex-col"
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
            className="flex justify-center text-sm text-gray-400 pt-6 px-10"
          >
            *Make sure that you upload the correct image or video. This will be
            used in future for reference in case of any issues.
          </Typography>
        </Drawer>
      </div>
    </div>
  );
};

export default MatchProgress;

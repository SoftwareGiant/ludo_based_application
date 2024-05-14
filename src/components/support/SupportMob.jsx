import feedback from "../../assets/new_game/feedback.svg";
import report from "../../assets/new_game/report.svg";
import menu from "../../assets/profile/menusvg.svg";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify-icon/react";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { useNavigate } from "react-router-dom";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import {
  ListItem,
  ListItemPrefix,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import startchat from "../../assets/profile/startchat.svg";
import LudoMainLogo from "../MainLayout/LudoMainLogo";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserChat } from "./supportUserChatSlice";
import axios from "axios";
import { fetchUserDetail } from "../live_battle/userSlice";
import { getTime } from "../admin_and_S.admin/Functions/getTime";

const SupportMob = () => {
  const [inputText, setInputText] = useState("");
  const [image, setImage] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const messagesLIst = useSelector((state) => state.supportuser.messages);
  const { accessToken } = useSelector((state) => state.auth);
  const users = useSelector((state) => state?.user?.user);

  // console.log(messagesLIst);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  useEffect(() => {
    dispatch(fetchUserChat());
    dispatch(fetchUserDetail());
  }, [dispatch]);

  useEffect(() => {
    const el = document.getElementById("messages");
    el.scrollTop = el.scrollHeight;
  }, [messagesLIst]);

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
    setInputText((prevInputText) => prevInputText + emoji.native);
  };
  const handleSendMessage = async (e) => {
    e.preventDefault();
    setShowEmojiPicker(false);
    const times = new Date().toLocaleTimeString();
    console.log(times.slice(0, 4), typeof times);
    if (inputText.trim() === "" && !image) return;
    try {
      const response = await axios.post(
        "/api/support/addsupport",
        {
          message: inputText,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
      dispatch(fetchUserChat());
      setInputText("");
      setImage(null);
      return response.data;
    } catch (error) {
      // You can customize the error handling here
      throw error;
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleStart = () => {
    navigate("/matchstart");
  };

  // console.log(image);

  return (
    <div className="flex-1 pb-4 bg-[#0f002b] sm:bg-[#fead3a]  w-full max-w-[480px]  justify-between flex flex-col h-screen">
      <div className="bg-[#fead3a]  h-[80%] w-[200%]   rounded-[50%] sm:hidden   -top-20 fixed -left-[50%] " />
      <div className="bg-[#fead3a] max-w-[480px] absolute  shadow-lg border-b border-[#0f002b]  flex justify-between   items-center w-full  pt-4  px-4">
        <div className="flex flex-row gap-3 items-start mt-3">
          <SidebarMob />
          <LudoMainLogo />
        </div>
        <img
          onClick={() => navigate("/profile")}
          src={FrameProfile}
          className="w-[30px] h-[30px] rounded-[100px] border border-solid border-white "
        />
      </div>
      <div className="z-10  flex mt-[68px]  border-b border-[#0f002b] justify-between py-2 px-4  items-center bg-[#fead3a] max-w-[480px] w-full">
        <div className="flex justify-center gap-2 items-center">
          <img
            src={FrameProfile}
            className="w-[30px] h-[30px] rounded-[100px] border border-solid border-white "
          />
          <div className="flex flex-col text-black items-start justify-center">
            <span className="text-[20px] py-1 leading-tight">
              Customer Service
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          {/* <img src={startchat} className="w-[30px] h-[30px]  " /> */}
          <div>
            <Popover placement="left-start">
              <PopoverHandler>
                <div className="px-3">
                  <img src={menu} className="w-[5px] h-[30px] " />
                </div>
              </PopoverHandler>
              <PopoverContent className="bg-white  z-50">
                <ListItem
                  onClick={() => navigate("/feedback")}
                  className="hover:bg-black hover:text-white"
                >
                  <ListItemPrefix>
                    <img src={feedback} />
                  </ListItemPrefix>
                  Feedback
                </ListItem>
                <ListItem className="hover:bg-black hover:text-white">
                  <ListItemPrefix>
                    <img src={report} />
                  </ListItemPrefix>
                  Report
                </ListItem>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <div
        onClick={() => setShowEmojiPicker(false)}
        id="messages"
        className="flex z-10 h-full flex-col space-y-4 p-3 overflow-y-auto table-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
        {users &&
          messagesLIst?.map((textmsg) => (
            <div
              key={textmsg._id}
              className={`flex  ${
                textmsg?.sender === users?._id
                  ? "justify-end "
                  : "justify-start"
              } mb-2`}
            >
              <div
                className={`${
                  textmsg?.sender === users?._id
                    ? "bg-white text-black self-end pl-5 rounded-br-none"
                    : "bg-black text-white self-start pr-5 rounded-bl-none"
                } p-2 rounded-2xl max-w-md overflow-hidden font-semibold `}
                style={{
                  maxWidth: "80%",
                  whiteSpace: "normal",
                  overflowWrap: "break-word",
                }}
              >
                <span>{textmsg.message}</span>
                {/* {textmsg.image && (
                <img
                  src={message.image}
                  alt="Shared"
                  className="mt-1"
                  style={{ maxWidth: "100%" }}
                />
              )} */}
                <span
                  className={`text-xs block text-gray-500 mt-1 ${
                    textmsg.sender === users?._id ? "text-end" : "text-start"
                  }`}
                >
                  {getTime(textmsg?.createdAt)}
                </span>
              </div>
            </div>
          ))}
      </div>
      <div className="border-t-2  z-10 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <form
          onSubmit={handleSendMessage}
          className="relative items-center flex bg-gray-200 rounded-xl px-2"
        >
          {showEmojiPicker && (
            <div className="absolute bottom-16 left-2">
              <Picker autoFocus data={data} onEmojiSelect={handleEmojiSelect} />
            </div>
          )}
          {image !== null ? (
            <div className="absolute  bottom-16 right-2">
              <Icon
                onClick={() => setImage(null)}
                icon="basil:cancel-solid"
                width="40"
                className="absolute right-0"
              />
              <div className="bg-white">
                <img
                  src={image}
                  alt="image"
                  className="w-48 rounded-xl border-4  border-gray-500  shadow-2xl"
                />
              </div>
            </div>
          ) : (
            ""
          )}
          <div
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="cursor-pointer inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <Icon icon="mingcute:emoji-line" width="32" />
          </div>
          <input
            onClick={() => setShowEmojiPicker(false)}
            ref={inputRef}
            type="text"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="rounded-full w-full pr-20 py-3 pl-1 bg-gray-200 focus:outline-none"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <div className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
              <label
                htmlFor="upload-image"
                className="cursor-pointer flex items-center justify-center"
              >
                <Icon id="Attachment" icon="tdesign:attach" width="28" />
              </label>
              <input
                id="upload-image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              onClick={handleSendMessage}
            >
              <Icon
                id="Send"
                className={`${inputText ? "text-blue-gray-900" : ""}`}
                onClick={handleSendMessage}
                icon="carbon:send-filled"
                width="28"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupportMob;

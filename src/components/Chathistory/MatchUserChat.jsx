import React, { useState, useEffect, useRef } from "react";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
  ListItem,
  ListItemPrefix,
  Drawer,
} from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useJwt } from "react-jwt";
import { fetchSocket } from "../../socket";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import LudoMainLogo from "../MainLayout/LudoMainLogo";
import { fetchUserDetail } from "../live_battle/userSlice";
const MatchUserChat = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { socketData } = useSelector((state) => state.socketfor);
  const { accessToken, refreshToken } = useSelector((state) => state.auth);
  const { decodedToken } = useJwt(accessToken);
  const userId = decodedToken?.aud;
  const { chatId } = useParams();
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [image, setImage] = useState(null);
  const [messaged, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const users = useSelector((state) => state.user.user);
  const [isFav, setIsfav] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    const el = document.getElementById("messages");
    el.scrollTop = el.scrollHeight;
  }, [messageList]);

  useEffect(() => {
    inputRef.current.focus();
    fn();
    dispatch(fetchUserDetail());
  }, []);
  useEffect(() => {
    if (socketData) {
      socketData.on("newMessage", (newMessage) => {
        setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
      });

      return () => socketData.off();
    }
  }, [socketData]);

  useEffect(() => {
    if (decodedToken) {
      dispatch(fetchSocket(decodedToken));
    }
  }, [decodedToken]);

  const fn = async () => {
    const response = await axios.get(`/api/message/allmessages/${chatId}`, {
      headers: {
        Authorization: `bearer ${accessToken}`,
      },
    });
    console.log(response);
    if (response?.status == 200 && response?.data) {
      setMessageList([]);
      console.log(response?.data);
      if (response?.data.favourite.userId.length > 0) {
        setIsfav(true);
      }

      setMessageList((prevMessageList) => [
        ...prevMessageList,
        ...response?.data?.messageDetails,
      ]);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const times = new Date().toLocaleTimeString();

    setShowEmojiPicker(false);
    if (messaged.trim() === "" && !image) return;
    console.log(messaged);
    //console.log(image);
    const response = await axios.post(
      `/api/message/sendmessage/${chatId}`,
      //  { message,image,times },
      { message: messaged },
      {
        headers: {
          Authorization: `bearer ${accessToken}`,
        },
      }
    );
    console.log(response);
    if (response.status == 200) {
      setMessageList((prevMessageList) => [...prevMessageList, response?.data]);
    }
    setMessage("");
    setImage(null);
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

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
    setMessage((prevInputText) => prevInputText + emoji.native);
  };
  const handleFav = async () => {
    try {
      const response = await axios.get(`/api/message/favourite/${chatId}`, {
        headers: {
          Authorization: `bearer ${accessToken}`,
        },
      });
      toast.success(response.data.message);
    } catch (error) {
      // Handle the error
      console.error("Error fetching message:", error);
      toast.error("Failed to fetch message");
    }
  };
  console.log(messageList, users);
  return (
    <div className="flex-1 pb-4 bg-[#0f002b] sm:bg-[#fead3a]  w-full max-w-[480px]  justify-between flex flex-col h-screen">
      <div className="bg-[#fead3a]  h-[80%] w-[200%]   rounded-[50%] sm:hidden   -top-20 fixed -left-[50%] " />
      <div className="bg-[#fead3a] max-w-[480px] absolute  shadow-lg border-b border-[#0f002b]  flex justify-between   items-center w-full  pt-4  px-4">
        <div className="flex flex-row gap-3 items-start mt-3">
          <SidebarMob />
          <LudoMainLogo />
        </div>
        <div
          className="bg-[#1E1E1E] cursor-pointer px-4 flex justify-center items-center h-8 rounded-2xl text-white font-bold"
          onClick={() => navigate("/matchstart")}
        >
          Start
        </div>
      </div>
      <div className="z-10 flex mt-[68px]  border-b border-[#0f002b] justify-between py-2 px-4  items-center bg-[#fead3a] max-w-[480px] w-full">
        <div className="flex justify-center gap-2 items-center">
          <img
            onClick={() => navigate("/userprofile")}
            src={FrameProfile}
            className="w-[30px] h-[30px] rounded-[100px] border border-solid border-white "
          />
          <div className="flex flex-col text-black items-start justify-center">
            <span className="text-[20px] leading-tight">Player</span>
            <span className="text-[14px] leading-tight">online</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isFav && messageList[0]?.senderId === users?._id ? (
            <Icon
              className="cursor-pointer"
              icon="ph:star-fill"
              style={{ color: "black" }}
              width="32"
            />
          ) : (
            <Icon
              className="cursor-pointer"
              icon="ph:star-fill"
              style={{ color: "black" }}
              width="32"
            />
          )}
          {!isFav && (
            <Icon
              className="cursor-pointer"
              onClick={() => handleFav()}
              icon="fluent:star-add-28-regular"
              style={{ color: "black" }}
              width="32"
            />
          )}

          <Popover placement="left-start">
            <PopoverHandler>
              <div className="px-3 flex cursor-pointer ">
                <Icon
                  icon="charm:menu-kebab"
                  style={{ color: "black" }}
                  width="28"
                />
              </div>
            </PopoverHandler>
            <PopoverContent className="bg-white  z-50">
              {isFav && messageList[0]?.senderId === users?._id ? (
                <ListItem className="hover:bg-black hover:text-white">
                  <ListItemPrefix>
                    <Icon icon="ph:star-fill" width="24" />
                  </ListItemPrefix>{" "}
                  Fav chat
                </ListItem>
              ) : (
                <ListItem className="hover:bg-black hover:text-white">
                  <ListItemPrefix>
                    <Icon icon="ph:star-fill" width="24" />
                  </ListItemPrefix>{" "}
                  Fav chat
                </ListItem>
              )}
              {!isFav && (
                <ListItem
                  onClick={() => handleFav()}
                  className="hover:bg-black hover:text-white"
                >
                  <ListItemPrefix>
                    <Icon icon="mdi:favorite-add" width="24" />
                  </ListItemPrefix>{" "}
                  Add Fav
                </ListItem>
              )}
              <ListItem
                onClick={() => navigate("/feedback")}
                className="hover:bg-black hover:text-white"
              >
                <ListItemPrefix>
                  <Icon icon="material-symbols:feedback" width="22" />
                </ListItemPrefix>
                Feedback
              </ListItem>
              <ListItem className="hover:bg-black hover:text-white">
                <ListItemPrefix>
                  <Icon icon="material-symbols:report-outline" width="22" />
                </ListItemPrefix>
                Report
              </ListItem>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="w-full  overflow-hidden h-full ">
        <div className="flex flex-col h-full relative  ">
          <div
            onClick={() => setShowEmojiPicker(false)}
            id="messages"
            className="flex z-10 h-full flex-col space-y-4 p-3 overflow-y-auto table-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
          >
            {messageList.length > 0 &&
              messageList?.map(
                (message, index) =>
                  message?.message && (
                    <div
                      key={index}
                      className={`flex  ${
                        message.senderId == userId
                          ? "justify-end "
                          : "justify-start"
                      } mb-2`}
                    >
                      <div
                        className={`${
                          message.senderId == userId
                            ? "bg-white text-black self-end pl-5 rounded-br-none"
                            : "bg-black text-white self-start pr-5 rounded-bl-none "
                        } p-2 rounded-xl max-w-md overflow-hidden font-semibold `}
                        style={{
                          maxWidth: "80%",
                          whiteSpace: "normal",
                          overflowWrap: "break-word",
                        }}
                      >
                        <span>{message?.message}</span>
                        {message.image && (
                          <img
                            src={message.image}
                            alt="Shared"
                            className="mt-1"
                            style={{ maxWidth: "100%" }}
                          />
                        )}
                      </div>
                    </div>
                  )
              )}
          </div>
          <div className="border-t-2  z-10 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
            <form
              onSubmit={handleSendMessage}
              className="relative items-center flex bg-gray-200 rounded-xl px-2"
            >
              {showEmojiPicker && (
                <div className="absolute bottom-16 left-2">
                  <Picker
                    autoFocus
                    data={data}
                    onEmojiSelect={handleEmojiSelect}
                  />
                </div>
              )}
              <div
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <Icon icon="mingcute:emoji-line" width="32" />
              </div>
              <input
                onClick={() => setShowEmojiPicker(false)}
                ref={inputRef}
                type="text"
                placeholder="Type a message..."
                value={messaged}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-full w-full pr-20 py-3 pl-1 bg-gray-200 focus:outline-none"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <div>
                  <label
                    htmlFor="upload-image"
                    className="cursor-pointer flex items-center justify-center w-10"
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
                >
                  <Icon id="Send" icon="carbon:send-filled" width="28" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchUserChat;

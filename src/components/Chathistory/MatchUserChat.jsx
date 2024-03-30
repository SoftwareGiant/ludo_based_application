import React, { useState } from "react";
import TopbarMobile from "../MainLayout/TopbarMobile";
import startchat from "../../assets/profile/startchat.svg";
import menu from "../../assets/profile/menusvg.svg";
import feedback from "../../assets/new_game/feedback.svg";
import report from "../../assets/new_game/report.svg";
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

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateGameCode } from "../live_battle/gameSlice";

const MatchUserChat = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = [
    {
      text: "hi",
      time: "09:12",
      sender: "me",
    },
    {
      text: "hello",
      time: "09:13",
      sender: "gaurav",
    },
    {
      text: "how are you",
      time: "09:12",
      sender: "gaurav",
    },
    {
      text: "fine",
      time: "09:12",
      sender: "me",
    },
  ];
  const [openBottom, setOpenBottom] = useState(true);

  const [messages, setMessages] = useState(user);
  const [inputText, setInputText] = useState("");
  const [image, setImage] = useState(null);

  // const openDrawerBottom = () => {
  //   setOpenBottom(true);
  // };
  const closeDrawerBottom = (event) => {
    event.preventDefault();
    if (inputValue === "") {
      alert("Please enter code");
      return;
    }
    // dispatch(updateGameCode(inputValue, setOpenBottom));
    dispatch(updateGameCode(inputValue)).then((result) => {
      if (result) {
        setOpenBottom(false);
      }
      else{
        alert("please try again after some time")
      }
    });
    console.log("Form submitted with value:", inputValue);
  };

  const handleSendMessage = () => {
    const times = new Date().toLocaleTimeString();
    console.log(times.slice(0, 4), typeof times);
    if (inputText.trim() === "" && !image) return;
    setMessages([
      ...messages,
      {
        text: inputText,
        image,
        sender: "me",
        time: new Date().toLocaleTimeString().slice(0, 4),
      },
    ]);
    setInputText("");
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
  const handleStart = () => {
    navigate("/matchstart");
  };

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="min-h-screen w-full max-w-[480px] h-full  bg-[#0f002b] overflow-hidden relative">
      <div className="max-w-[480px] w-full overflow-hidden">
        <TopbarMobile isStart={true} handlestart={handleStart} />
      </div>

      <div className="w-full  overflow-hidden h-full ">
        <div className="bg-[#fead3a]  h-[700px] w-[200%]  rounded-[50%]   -top-20 absolute -left-60 " />

        <div className="fixed z-10 flex justify-between p-4  items-center mt-3 bg-[#fead3a] max-w-[480px] w-full pt-20 ">
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
          <div className="flex gap-2">
            <img src={startchat} className="w-[30px] h-[30px]  " />
            <div>
              <Popover placement="left-start">
                <PopoverHandler>
                  <div className="px-3">
                    <img src={menu} className="w-[5px] h-[30px] " />
                  </div>
                </PopoverHandler>
                <PopoverContent className="bg-white  z-50">
                  <ListItem className="hover:bg-black hover:text-white">
                    <ListItemPrefix>
                      <img src={startchat} />
                    </ListItemPrefix>{" "}
                    Add Fav
                  </ListItem>
                  <ListItem className="hover:bg-black hover:text-white">
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

        <div className="flex flex-col h-full relative  ">
          <div className="flex-1 p-4 overflow-y-auto pt-20 mt-20 pb-36">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex  ${
                  message.sender === "me" ? "justify-end " : "justify-start"
                } mb-2`}
              >
                <div
                  className={`${
                    message.sender === "me"
                      ? "bg-white text-black self-end pl-5"
                      : "bg-black text-white self-start pr-5 "
                  } p-2 rounded-lg max-w-md overflow-hidden font-semibold `}
                  style={{
                    maxWidth: "80%",
                    whiteSpace: "normal",
                    overflowWrap: "break-word",
                  }}
                >
                  <span>{message.text}</span>
                  {message.image && (
                    <img
                      src={message.image}
                      alt="Shared"
                      className="mt-1"
                      style={{ maxWidth: "100%" }}
                    />
                  )}
                  <span
                    className={`text-xs block text-gray-500 mt-1 ${
                      message.sender === "me" ? "text-end" : "text-start"
                    }`}
                  >
                    {message.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-2 h-[56px] mb-8 rounded-md border-t bg-white flex fixed mx-[5.3%] w-[88.93%] max-w-[400px] bottom-3">
            <img
              src="https://file.rendit.io/n/aXGTlHYYkimk9HRIA15k.svg"
              alt="Emoji"
              id="Emoji"
              className="w-8"
            />
            <input
              type="text"
              className="w-full  rounded-lg p-2 outline-none  font-semibold"
              placeholder="Type a message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <div className="flex gap-4 bg-white">
              <label
                htmlFor="upload-image"
                className="cursor-pointer flex items-center justify-center w-10"
              >
                <img
                  src="https://file.rendit.io/n/4O0XpGwpisRtWpwRjwPK.svg"
                  alt="Attachment"
                  id="Attachment"
                  className="w-5"
                />
              </label>
              <input
                id="upload-image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <img
                src="https://file.rendit.io/n/RZycssPvHc5Wv7cQAkwD.svg"
                alt="Send"
                id="Send"
                className="w-5"
                onClick={handleSendMessage}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <Drawer
        placement="bottom"
        open={openBottom}

        className="p-4  bg-[#0f002b] w-[480px] rounded-t-3xl"
      >
        <div>
          <div className="flex flex-col justify-center items-center gap-6 mt-10 w-full">
            <Typography
              color="white"
              className="text-2xl flex justify-center font-bold"
            >
              Enter Ludo King Code
            </Typography>
            <form
              className="flex flex-col gap-4 w-full items-center"
              onSubmit={closeDrawerBottom}
            >
              <input
                value={inputValue}
                onChange={handleChange}
                type="text"
                placeholder="LK8634798"
                className="p-4 rounded-md outline-none border-gray-400 border bg-[#0f002b] text-gray-400 font-bold w-[90%]"
              />
              <Button
                type="submit"
              
                className="text-[#0f002b] bg-white text-lg font-extrabold    rounded-md bold w-[90%]"
              >
                Start
              </Button>
            </form>
          </div>
        </div>
      </Drawer> */}
    </div>
  );
};

export default MatchUserChat;


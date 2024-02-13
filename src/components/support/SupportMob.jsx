import React, { useState } from "react";
import TopbarMobile from "../MainLayout/TopbarMobile";
import startchat from "../../assets/profile/startchat.svg";
import menu from "../../assets/profile/menusvg.svg";
import FrameProfile from "../../assets/profile/Frame_profile.png";
// import { Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Avatar,
  Button,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

const SupportMob = () => {
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
  const [messages, setMessages] = useState(user);
  const [inputText, setInputText] = useState("");
  const [image, setImage] = useState(null);

  const handleSendMessage = () => {
    if (inputText.trim() === "" && !image) return;
    setMessages([
      ...messages,
      {
        text: inputText,
        image,
        sender: "me",
        time: new Date().toLocaleTimeString(),
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

  return (
    <div className="min-h-screen w-full h-full  bg-[#0f002b] overflow-hidden relative">
      <div className="max-w-[480px] w-full overflow-hidden">
        <TopbarMobile />
      </div>

      <div className="w-full overflow-hidden  ">
        <div className="bg-[#fead3a] h-4/5 w-[200%]  rounded-[50%]   -top-20 absolute -left-60 " />

        <div className="fixed flex justify-between p-4  items-center mt-3 bg-[#fead3a] w-full pt-20 ">
          <div className="flex justify-center gap-2 items-center">
            <img
              src={FrameProfile}
              className="w-[30px] h-[30px] rounded-[100px] border border-solid border-white "
            />
            <div className="flex flex-col text-black items-start justify-center">
              <span className="text-[20px] leading-tight font-medium">Customer Service</span>
             
            </div>
          </div>
          <div className="flex gap-2">
           
            <div>
              <Popover placement="bottom-end">
                <PopoverHandler>
                  <img src={menu} className="w-[5px] h-[30px] " />
                </PopoverHandler>
                <PopoverContent className="w-72 h-20 bg-white z-50">
                  hi gaurav
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-screen relative pt-36 ">
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex  ${
                  message.sender === "me" ? "justify-end" : "justify-start"
                } mb-2`}
              >
                <div
                  className={`${
                    message.sender === "me"
                      ? "bg-white text-black self-end"
                      : "bg-black text-white self-start"
                  } p-2 rounded-lg max-w-md overflow-hidden `}
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
                  <span className="text-xs block text-gray-500 mt-1">
                    {message.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 m-4 mb-8 rounded-md border-t bg-white flex ">
            <img
              src="https://file.rendit.io/n/aXGTlHYYkimk9HRIA15k.svg"
              alt="Emoji"
              id="Emoji"
              className="w-8"
            />
            <input
              type="text"
              className="w-full  rounded-lg p-2 outline-none text-2xl font-semibold"
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
    </div>
  );
};

export default SupportMob;

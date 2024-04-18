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
import { updateGameCode } from "../live_battle/gameSlice";
import { useDispatch, useSelector } from "react-redux";

const ChatUserMob = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { socketData } = useSelector((state) => state.socketfor);
  const { accessToken, refreshToken } = useSelector((state) => state.auth);

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

  const closeDrawerBottom = (event) => {
    event.preventDefault();
    if (inputValue === "") {
      alert("Please enter code");
      return;
    }

    dispatch(updateGameCode(inputValue)).then((result) => {
      if (result) {
        setOpenBottom(false);
        socketData.emit("sendcode", { inputValue, accessToken });
      } else {
        alert("please try again after some time");
      }
    });
  };

  const handleSendMessage = () => {
    const times = new Date().toLocaleTimeString();
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
        <div className="bg-[#fead3a]  h-[70%] w-[200%]  rounded-[50%]   -top-20 absolute -left-[50%] " />

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

      <Drawer
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
      </Drawer>
    </div>
  );
};

export default ChatUserMob;

// import feedback from "../../assets/new_game/feedback.svg";
// import report from "../../assets/new_game/report.svg";
// import menu from "../../assets/profile/menusvg.svg";
// import FrameProfile from "../../assets/profile/Frame_profile.png";
// import React, { useEffect, useRef, useState } from "react";
// import { Icon } from "@iconify-icon/react";
// import { SidebarMob } from "../MainLayout/SidebarMob";
// import { useNavigate } from "react-router-dom";
// import data from "@emoji-mart/data";
// import Picker from "@emoji-mart/react";

// import {
//   Button,
//   Drawer,
//   ListItem,
//   ListItemPrefix,
//   Popover,
//   PopoverContent,
//   PopoverHandler,
//   Typography,
// } from "@material-tailwind/react";
// import startchat from "../../assets/profile/startchat.svg";
// import { useDispatch, useSelector } from "react-redux";
// import { updateGameCode } from "../live_battle/gameSlice";

// const user = [
//   {
//     text: "hi",
//     time: "09:12",
//     sender: "me",
//   },
//   {
//     text: "hello",
//     time: "09:13",
//     sender: "gaurav",
//   },
//   {
//     text: "how are you",
//     time: "09:12",
//     sender: "gaurav",
//   },
//   {
//     text: "fine",
//     time: "09:12",
//     sender: "me",
//   },
// ];
// const MyChat = () => {
//   const [showEmojis, setShowEmojis] = useState(false);
//   const [messages, setMessages] = useState(user);
//   const [inputText, setInputText] = useState("");
//   const [image, setImage] = useState(null);
//   const [selectedEmoji, setSelectedEmoji] = useState(null);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [openBottom, setOpenBottom] = useState(true);

//   const inputRef = useRef(null);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { socketData } = useSelector((state) => state.socketfor);
//   const { accessToken, refreshToken } = useSelector((state) => state.auth);
//   console.log(socketData);
//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);
//   useEffect(() => {
//     const el = document.getElementById("messages");
//     el.scrollTop = el.scrollHeight;
//   }, [messages]);

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const closeDrawerBottom = (event) => {
//     event.preventDefault();
//     if (inputValue === "") {
//       alert("Please enter code");
//       return;
//     }
//     dispatch(updateGameCode(inputValue)).then((result) => {
//       if (result) {
//         setOpenBottom(false);
//         socketData.emit("sendcode", { inputValue, accessToken });
//       } else {
//         alert("please try again after some time");
//       }
//     });
//   };

//   const handleEmojiSelect = (emoji) => {
//     setSelectedEmoji(emoji);
//     setInputText((prevInputText) => prevInputText + emoji.native);
//   };
//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     const times = new Date().toLocaleTimeString();
//     console.log(times.slice(0, 4), typeof times);
//     if (inputText.trim() === "" && !image) return;
//     setMessages([
//       ...messages,
//       {
//         text: inputText,
//         image,
//         sender: "me",
//         time: new Date().toLocaleTimeString().slice(0, 4),
//       },
//     ]);
//     setInputText("");
//     setImage(null);
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImage(reader.result);
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };
//   const handleStart = () => {
//     navigate("/matchstart");
//   };

//   return (
//     <div className="flex-1 pb-4 bg-[#0f002b] sm:bg-[#fead3a]  w-full max-w-[480px]  justify-between flex flex-col h-screen">
//       <div className="bg-[#fead3a]  h-[80%] w-[200%]   rounded-[50%] sm:hidden   -top-20 fixed -left-[50%] " />
//       <div className="bg-[#fead3a] max-w-[480px] absolute  shadow-lg border-b border-[#0f002b]  flex justify-between   items-center w-full  pt-4  px-4">
//         <div className="flex flex-row gap-3 items-start mt-3">
//           <SidebarMob />
//           <div className="flex flex-col text-[#0f002b] ">
//             <div className="  text-base font-['Nunito_Sans'] font-extrabold ">
//               LUDO KING
//             </div>

//             <div className="text-center text-base font-['Oooh_Baby'] font-normal  -mt-2">
//               punch line
//             </div>
//           </div>
//         </div>
//         <div
//           className="bg-[#1E1E1E] px-4 flex justify-center items-center h-8 rounded-2xl text-white font-bold"
//           onClick={handleStart}
//         >
//           Start
//         </div>
//       </div>
//       <div className="z-10 flex mt-[68px]  border-b border-[#0f002b] justify-between py-2 px-4  items-center bg-[#fead3a] max-w-[480px] w-full">
//         <div className="flex justify-center gap-2 items-center">
//           <img
//             onClick={() => navigate("/userprofile")}
//             src={FrameProfile}
//             className="w-[30px] h-[30px] rounded-[100px] border border-solid border-white "
//           />
//           <div className="flex flex-col text-black items-start justify-center">
//             <span className="text-[20px] leading-tight">Player</span>
//             <span className="text-[14px] leading-tight">online</span>
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <img src={startchat} className="w-[30px] h-[30px]  " />
//           <div>
//             <Popover placement="left-start">
//               <PopoverHandler>
//                 <div className="px-3">
//                   <img src={menu} className="w-[5px] h-[30px] " />
//                 </div>
//               </PopoverHandler>
//               <PopoverContent className="bg-white  z-50">
//                 <ListItem className="hover:bg-black hover:text-white">
//                   <ListItemPrefix>
//                     <img src={startchat} />
//                   </ListItemPrefix>{" "}
//                   Add Fav
//                 </ListItem>
//                 <ListItem className="hover:bg-black hover:text-white">
//                   <ListItemPrefix>
//                     <img src={feedback} />
//                   </ListItemPrefix>
//                   Feedback
//                 </ListItem>
//                 <ListItem className="hover:bg-black hover:text-white">
//                   <ListItemPrefix>
//                     <img src={report} />
//                   </ListItemPrefix>
//                   Report
//                 </ListItem>
//               </PopoverContent>
//             </Popover>
//           </div>
//         </div>
//       </div>
//       <div
//         onClick={() => setShowEmojiPicker(false)}
//         id="messages"
//         className="flex z-10 h-full flex-col space-y-4 p-3 overflow-y-auto table-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
//       >
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`flex  ${
//               message.sender === "me" ? "justify-end " : "justify-start"
//             } mb-2`}
//           >
//             <div
//               className={`${
//                 message.sender === "me"
//                   ? "bg-white text-black self-end pl-5 rounded-br-none"
//                   : "bg-black text-white self-start pr-5 rounded-bl-none"
//               } p-2 rounded-lg max-w-md overflow-hidden font-semibold `}
//               style={{
//                 maxWidth: "80%",
//                 whiteSpace: "normal",
//                 overflowWrap: "break-word",
//               }}
//             >
//               <span>{message.text}</span>
//               {message.image && (
//                 <img
//                   src={message.image}
//                   alt="Shared"
//                   className="mt-1"
//                   style={{ maxWidth: "100%" }}
//                 />
//               )}
//               <span
//                 className={`text-xs block text-gray-500 mt-1 ${
//                   message.sender === "me" ? "text-end" : "text-start"
//                 }`}
//               >
//                 {message.time}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="border-t-2  z-10 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
//         <form
//           onSubmit={handleSendMessage}
//           className="relative items-center flex bg-gray-200 rounded-xl px-2"
//         >
//           {showEmojiPicker && (
//             <div className="absolute bottom-16 left-2">
//               <Picker autoFocus data={data} onEmojiSelect={handleEmojiSelect} />
//             </div>
//           )}
//           <div
//             onClick={() => setShowEmojiPicker(!showEmojiPicker)}
//             className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
//           >
//             <Icon icon="mingcute:emoji-line" width="32" />
//           </div>
//           <input
//             onClick={() => setShowEmojiPicker(false)}
//             ref={inputRef}
//             type="text"
//             placeholder="Type a message..."
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//             className="rounded-full w-full pr-20 py-3 pl-1 bg-gray-200 focus:outline-none"
//           />
//           <div className="absolute inset-y-0 right-0 flex items-center">
//             <div>
//               <label
//                 htmlFor="upload-image"
//                 className="cursor-pointer flex items-center justify-center w-10"
//               >
//                 <Icon id="Attachment" icon="tdesign:attach" width="28" />
//               </label>
//               <input
//                 id="upload-image"
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="hidden"
//               />
//             </div>
//             <button
//               type="submit"
//               className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
//               onClick={handleSendMessage}
//             >
//               <Icon
//                 id="Send"
//                 onClick={handleSendMessage}
//                 icon="carbon:send-filled"
//                 width="28"
//               />
//             </button>
//           </div>
//         </form>
//       </div>

//       <Drawer
//         placement="bottom"
//         open={openBottom}
//         className="p-4  bg-[#0f002b] w-[480px] rounded-t-3xl"
//       >
//         <div>
//           <div className="flex flex-col justify-center items-center gap-6 mt-10 w-full">
//             <Typography
//               color="white"
//               className="text-2xl flex justify-center font-bold"
//             >
//               Enter Ludo King Code
//             </Typography>
//             <form
//               className="flex flex-col gap-4 w-full items-center"
//               onSubmit={closeDrawerBottom}
//             >
//               <input
//                 value={inputValue}
//                 onChange={handleChange}
//                 type="text"
//                 placeholder="LK8634798"
//                 className="p-4 rounded-md outline-none border-gray-400 border bg-[#0f002b] text-gray-400 font-bold w-[90%]"
//               />
//               <Button
//                 type="submit"
//                 className="text-[#0f002b] bg-white text-lg font-extrabold    rounded-md bold w-[90%]"
//               >
//                 Start
//               </Button>
//             </form>
//           </div>
//         </div>
//       </Drawer>
//     </div>
//   );
// };

// export default MyChat;

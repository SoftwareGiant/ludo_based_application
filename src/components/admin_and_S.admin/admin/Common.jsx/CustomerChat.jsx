import feedback from "../../../../assets/new_game/feedback.svg";
import report from "../../../../assets/new_game/report.svg";
import menu from "../../../../assets/profile/menusvg.svg";
import FrameProfile from "../../../../assets/profile/Frame_profile.png";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify-icon/react";
import { SidebarMob } from "../../../MainLayout/SidebarMob";
import { useNavigate, useParams } from "react-router-dom";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useDispatch, useSelector } from "react-redux";
import { getTime } from "../../Functions/getTime";
import axios from "axios";
import { fetchSupportMessages } from "../AdminSlice/supportMessagesSlice";
import { toast } from "react-toastify";

const CustomerChat = () => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [inputText, setInputText] = useState("");
  const [image, setImage] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const ticket = useSelector((state) => state.supportMessages.ticket);
  const status = useSelector((state) => state.supportMessages.status);
  const error = useSelector((state) => state.supportMessages.error);
  const [selectedValue, setSelectedValue] = useState(ticket?.status);
  const { accessToken } = useSelector((state) => state.auth);

  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (status === "idle" && userId != 1) {
      dispatch(fetchSupportMessages(userId));
    }
  }, [status, userId, dispatch]);

  useEffect(() => {
    if (ticket !== null && userId !== "1") inputRef.current.focus();
  }, []);
  useEffect(() => {
    if (ticket !== null && userId !== "1") {
      const el = document.getElementById("messages");
      el.scrollTop = el.scrollHeight;
    }
  }, [ticket?.messages]);
  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
    setInputText((prevInputText) => prevInputText + emoji.native);
  };
  const handleSendMessage = async (e) => {
    e.preventDefault();
    setShowEmojiPicker(false);
    const times = new Date().toLocaleTimeString();
    console.log(times.slice(0, 4), typeof times);
    if (inputText.trim() === "") return;
    const objmsg = {
      supportId: ticket._id,
      message: inputText.trim(),
    };
    try {
      const response = await axios.post("/api/support/replysupport", objmsg, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data);

      dispatch(fetchSupportMessages(userId));
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
  const handleChange = async (event) => {
    console.log(event);
    const newStatus = event.target.value;
    setSelectedValue(newStatus);

    try {
      const response = await axios.post(
        "/api/support/admin/changestatus",

        {
          status: newStatus,
          userId: ticket.createdBy,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      dispatch(fetchSupportMessages(userId));
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
      console.error("Error updating status:", error);
    }
  };

  if (userId === "1" || ticket === null) {
    return (
      <h1 className="font-semibold text-4xl h-full w-full flex justify-center items-center text-gray-800">
        Select a user to chat...
      </h1>
    );
  }

  return (
    <div className="flex-1 pb-4 bg-transparent  w-full   justify-between flex flex-col h-[92%]">
      <div className="z-10 flex border-b border-gray-400 shadow-sm justify-between py-2 px-4  items-center   w-full">
        <div className="flex justify-center gap-2 items-center">
          <img
            src={FrameProfile}
            className="w-[30px] h-[30px] rounded-[100px] border border-solid border-white "
          />
          <div className="flex font-bold flex-col text-black items-start justify-center">
            <span className="text-[20px] leading-tight">
              {ticket?.createdBy?.slice(-6)}
            </span>
          </div>
        </div>
        {ticket?.status && (
          <div className="flex gap-2">
            <select
              value={selectedValue || ticket?.status}
              onChange={handleChange}
              className="p-1 w-40 rounded-lg text-black bg-white "
            >
              <option value="open">Unresolved</option>
              <option value="close">Resolved</option>
            </select>
          </div>
        )}
      </div>
      <div
        onClick={() => setShowEmojiPicker(false)}
        id="messages"
        className="flex z-10 h-full flex-col space-y-4 p-3 overflow-y-auto table-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
      >
        {ticket?.messages.map((textmsg) => (
          <div
            key={textmsg._id}
            className={`flex  ${
              textmsg?.sender !== ticket?.createdBy
                ? "justify-end "
                : "justify-start"
            } mb-2`}
          >
            <div
              className={`${
                textmsg?.sender !== ticket?.createdBy
                  ? "bg-white text-black self-end pl-5 rounded-br-none"
                  : "bg-black text-white self-start pr-5 rounded-bl-none"
              } p-2 rounded-lg max-w-md overflow-hidden font-semibold `}
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
                  textmsg?.sender !== ticket?.createdBy
                    ? "text-end"
                    : "text-start"
                }`}
              >
                {getTime(textmsg?.createdAt)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-2  z-10 shadow-sm border-gray-400 px-4 pt-4 mb-2 sm:mb-0">
        <form
          onSubmit={handleSendMessage}
          className="relative items-center flex bg-gray-200 rounded-xl px-2"
        >
          {showEmojiPicker && (
            <div className="absolute bottom-16 left-2">
              <Picker autoFocus data={data} onEmojiSelect={handleEmojiSelect} />
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
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
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
              <Icon
                id="Send"
                className={`${inputText ? "text-blue-gray-900" : ""}`}
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

export default CustomerChat;

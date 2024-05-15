import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import feedback from "../../../../assets/new_game/feedback.svg";
import report from "../../../../assets/new_game/report.svg";

import { Icon } from "@iconify-icon/react";
import {
  Card,
  Typography,
  CardBody,
  MenuList,
  Menu,
  MenuHandler,
  MenuItem,
  Popover,
  PopoverHandler,
  PopoverContent,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import menu from "../../../../assets/profile/menusvg.svg";
import FrameProfile from "../../../../assets/profile/Frame_profile.png";
import { MdOutlineReport } from "react-icons/md";
import { RiFeedbackFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import Stats from "../Common.jsx/Stats";
import { useDispatch, useSelector } from "react-redux";
import Refreshloader from "../../superadmin/Common/Refreshloader";
import AdminFooter from "../Common.jsx/AdminFooter";
import CustomerChat from "../Common.jsx/CustomerChat";
import { fetchadminsupportlist } from "../AdminSlice/adminsupportlistSlice";
import { getTime } from "../../Functions/getTime";
import axios from "axios";
import { toast } from "react-toastify";

const TABLE_HEAD = ["UID", "Name", "Phone", "Status"];

function AdminCustomer() {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [isClicked, setIsClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isRefresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const adminsupportlist = useSelector((state) => state.adminsupportlist);
  console.log(adminsupportlist);
  const [chatdetails, setChatdetails] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const [inputText, setInputText] = useState("");
  const [image, setImage] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const { accessToken } = useSelector((state) => state.auth);
  console.log(chatdetails);

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
    setInputText((prevInputText) => prevInputText + emoji.native);
  };
  useEffect(() => {
    dispatch(fetchadminsupportlist());
  }, [dispatch]);

  useEffect(() => {
    if (chatdetails !== null) inputRef.current.focus();
  }, []);
  useEffect(() => {
    if (chatdetails !== null) {
      const el = document.getElementById("messages");
      el.scrollTop = el.scrollHeight;
    }
  }, [chatdetails?.messages]);

  const inputRef = useRef(null);
  const handleSendMessage = async (e) => {
    e.preventDefault();
    setShowEmojiPicker(false);
    const times = new Date().toLocaleTimeString();
    console.log(times.slice(0, 4), typeof times);
    if (inputText.trim() === "") return;
    const objmsg = {
      supportId: chatdetails._id,
      message: inputText.trim(),
    };
    try {
      const response = await axios.post("/api/support/replysupport", objmsg, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data);
      dispatch(fetchadminsupportlist());
      setInputText("");
      setImage(null);
      return response.data;
    } catch (error) {
      toast.error(error.message);
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


  const handleOpen = () => {
    setIsClicked(true);
  };
  const handleClose = () => {
    setIsClicked(false);
  };
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const fetchuser = () => {
    dispatch(fetchadminsupportlist());
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const sortTable = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // const sortedUsers = [...adminsupportlist.messages].sort((a, b) => {
  //   if (sortConfig.key && sortConfig.direction) {
  //     if (sortConfig.direction === "ascending") {
  //       return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
  //     } else {
  //       return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
  //     }
  //   }
  //   return 0;
  // });
  // const filteredUsers = sortedUsers.filter(
  //   (user) =>
  //     user._id.includes(searchQuery) || user.mobileNo.includes(searchQuery)
  // );
  const handleRefresh = async () => {
    setRefresh(true);
    await dispatch(fetchadminsupportlist())
      .then(() => {
        setRefresh(false);
      })
      .catch(() => {
        setRefresh(false);
      });
  };
  return (
    <div className="flex w-full gap-2 h-screen">
      <div className="font-[Inter] main-body-right w-3/5 bg-[#ffff] rounded-t-3xl overflow-y-scroll h-screen">
        <div className="bg-[#F4F4F4] rounded-tl-3xl py-1 px-4 flex flex-col gap-4">
          <div className="flex  mt-1  gap-2 text-[#008CF2] font-[Inter] font-medium text-[12px]">
            <span className="underline">Admin Control Panel </span>
            <span>&gt;&gt;</span>
            <span className="underline">Menu</span>
            <span>&gt;&gt;</span>
            <span className="underline">Customer</span>
          </div>
          <h3 className="text-[#0F002B] text-lg">
            <span className="underline">C</span>ustomer{" "}
          </h3>
        </div>
        <div className="flex px-3 py-2 items-center justify-between bg-[#EEEEEE]">
          <p className="text-[#000000] font-medium text-xs">
            Detail : Chat assistant
          </p>
          <Icon icon="charm:cross" width="12" />
        </div>
        <Card className="w-full py-1 pb-10 px-4">
          <CardBody className=" px-0">
            <div className="flex justify-between">
              <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                Customer Care
              </span>
              <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
                <div
                  onClick={handleOpen}
                  onBlur={handleClose}
                  className="bg-[#F4F4F4] justify-between flex items-center p-1 px-2 h-[32px]  border rounded-lg"
                >
                  <input
                    placeholder="Search"
                    className={`${
                      isClicked ? "delay-200" : "w-[54px]"
                    } transition-all duration-700 outline-none bg-[#F4F4F4] `}
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                  <Icon icon="material-symbols:search" width="24" />
                </div>

                <div className="w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                  <span>Refresh</span>{" "}
                  {isRefresh ? (
                    <Refreshloader />
                  ) : (
                    <Icon
                      onClick={handleRefresh}
                      icon="material-symbols:refresh"
                      width="24"
                    />
                  )}
                </div>
                <Menu>
                  <MenuHandler>
                    <div className="p-1 w-[88px] h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                      <span>Sort</span> <Icon icon="prime:sort" width="24" />
                    </div>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem className="font-[Inter] text-[16px] text-[#0F002B] font-medium flex justify-start gap-3 items-center">
                      <Icon icon="mdi:calendar-today-outline" width="24" />
                      Daily
                    </MenuItem>
                    <MenuItem className="font-[Inter] text-[16px] text-[#0F002B] font-medium flex justify-start gap-3 items-center">
                      <Icon icon="bi:calendar4-week" width="24" />
                      Weekly
                    </MenuItem>
                    <MenuItem className="font-[Inter] text-[16px] text-[#0F002B] font-medium flex justify-start gap-3 items-center">
                      <Icon icon="formkit:month" width="24" />
                      Monthly
                    </MenuItem>
                    <MenuItem className="font-[Inter] text-[16px] text-[#0F002B] font-medium flex justify-start gap-3 items-center">
                      <Icon icon="fluent-mdl2:calendar-year" width="24" />{" "}
                      Yearly
                    </MenuItem>
                    <MenuItem className="font-[Inter] text-[16px] text-[#0F002B] font-medium flex justify-start gap-3 items-center">
                      <Icon icon="fluent-mdl2:time-entry" width="24" /> All Time{" "}
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
            <table className="mt-4 w-full min-w-max table-auto text-left font-[Inter] font-medium text-[16px]">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head, index) => (
                    <th
                      key={head}
                      className="cursor-pointer   p-2 transition-colors  rounded-lg"
                      onClick={() => (index === 0 ? sortTable("_id") : "")}
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]"
                      >
                        {head}{" "}
                        {index == 0 && (
                          <ChevronUpDownIcon
                            strokeWidth={2}
                            className="h-4 w-4"
                          />
                        )}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="w-full">
                {adminsupportlist?.messages?.map((val) => {
                  return (
                    <tr
                      onClick={() => setChatdetails(val)}
                      key={val._id}
                      className="text-[#000000] "
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Typography className="cursor-pointer font-[Inter] font-medium text-[16px]">
                            {val.createdBy}
                          </Typography>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <Typography className="font-[Inter] font-medium text-[16px]">
                            user
                          </Typography>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="w-max">
                          <Typography className="font-[Inter] font-medium text-[16px]">
                            {val._id.slice(-6)}
                          </Typography>
                        </div>
                      </td>
                      <td className="p-4">
                        <div
                          className={`rounded-xl flex justify-center items-center w-[87px] h-[19px] ${
                            !val?.status
                              ? "bg-[#0F002B] text-[#FFFFFF] "
                              : "bg-[#FEAD3A] text-[#FFFFFF] "
                          }`}
                        >
                          <Typography className="font-[Inter] font-normal text-[10px]  ">
                            {val.status === "open" ? "pending" : "close"}
                          </Typography>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
        <AdminFooter logohide={true} />
      </div>
      <div className="w-2/5 relative overflow-scroll main-body-right max-h-screen">
        {/* <CustomerChat chatdetails={chatdetails} fetchuser={fetchuser} /> */}

        {chatdetails === null ? (
          <h1 className="font-semibold text-4xl h-full w-full flex justify-center items-center text-gray-800">
            Select a user to chat...
          </h1>
        ) : (
          <div className="flex-1 pb-4 bg-transparent  w-full   justify-between flex flex-col h-[92%]">
            <div className="z-10 flex border-b border-gray-400 shadow-sm justify-between py-2 px-4  items-center   w-full">
              <div className="flex justify-center gap-2 items-center">
                <img
                  onClick={() => navigate("/userprofile")}
                  src={FrameProfile}
                  className="w-[30px] h-[30px] rounded-[100px] border border-solid border-white "
                />
                <div className="flex flex-col text-black items-start justify-center">
                  <span className="text-[20px] leading-tight">
                    {chatdetails?.createdBy?.slice(-6)}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
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
              {chatdetails?.messages.map((textmsg) => (
                <div
                  key={textmsg._id}
                  className={`flex  ${
                    textmsg?.sender !== chatdetails?.createdBy
                      ? "justify-end "
                      : "justify-start"
                  } mb-2`}
                >
                  <div
                    className={`${
                      textmsg?.sender !== chatdetails?.createdBy
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
                        textmsg?.sender !== chatdetails?.createdBy
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
        )}
      </div>
    </div>
  );
}

export default AdminCustomer;

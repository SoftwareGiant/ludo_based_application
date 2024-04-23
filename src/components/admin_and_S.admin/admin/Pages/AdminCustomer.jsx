import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
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
import {
  fetchAllUsers,
  selectAllUsers,
  selectAllUsersStatus,
} from "../AdminSlice/alluserSlice";
import Refreshloader from "../../superadmin/Common/Refreshloader";
import AdminFooter from "../Common.jsx/AdminFooter";
import CustomerChat from "../Common.jsx/CustomerChat";

const TABLE_HEAD = ["UID", "Name", "Phone", "Status"];

const TABLE_ROWS = [
  {
    uid: "1",
    name: "John Doe",
    mobno: "7610981931",
    onboard: "22/12/2014",
  },
  {
    uid: "2",
    name: "Jane Smith",
    mobno: "7610981932",
    onboard: "23/12/2014",
  },
  {
    uid: "3",
    name: "Alice Johnson",
    mobno: "7610981933",
    onboard: "24/12/2014",
  },
  {
    uid: "4",
    name: "Bob Brown",
    mobno: "7610981934",
    onboard: "25/12/2014",
  },
  {
    uid: "5",
    name: "Eve Williams",
    mobno: "7610981935",
    onboard: "26/12/2014",
  },
  {
    uid: "6",
    name: "Charlie Davis",
    mobno: "7610981936",
    onboard: "27/12/2014",
  },
  {
    uid: "7",
    name: "Grace Wilson",
    mobno: "7610981937",
    onboard: "28/12/2014",
  },
  {
    uid: "8",
    name: "David Martinez",
    mobno: "7610981938",
    onboard: "29/12/2014",
  },
  {
    uid: "9",
    name: "Frank Taylor",
    mobno: "7610981939",
    onboard: "30/12/2014",
  },
  {
    uid: "10",
    name: "Sophie Lee",
    mobno: "7610981940",
    onboard: "31/12/2014",
  },
];
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
  {
    text: "hello",
    time: "09:13",
    sender: "gaurav",
  },
  {
    text: "hi",
    time: "09:12",
    sender: "me",
  },
];
export function AdminCustomer() {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [isClicked, setIsClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isRefresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  const [messages, setMessages] = useState(user);
  const [inputText, setInputText] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const status = useSelector(selectAllUsersStatus);
  console.log(users);
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleOpen = () => {
    setIsClicked(true);
  };
  const handleClose = () => {
    setIsClicked(false);
  };
  const handleClick = () => {
    setIsClicked(!isClicked);
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  if (status === "loading" && isRefresh === false) {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error loading users</div>;
  }

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

  const sortedUsers = [...users].sort((a, b) => {
    if (sortConfig.key && sortConfig.direction) {
      if (sortConfig.direction === "ascending") {
        return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
      } else {
        return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
      }
    }
    return 0;
  });
  const filteredUsers = sortedUsers.filter(
    (user) =>
      user._id.includes(searchQuery) || user.mobileNo.includes(searchQuery)
  );
  const handleRefresh = async () => {
    setRefresh(true);
    // dispatch(fetchAllUsers());
    await dispatch(fetchAllUsers())
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
                      onClick={() => index===0 ? sortTable("_id") : ""}
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
                {filteredUsers?.map(({ _id, mobileNo, createdAt }) => {
                  return (
                    <tr key={_id} className="text-[#000000] ">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Typography className="font-[Inter] font-medium text-[16px]">
                            {_id}
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
                            {mobileNo}
                          </Typography>
                        </div>
                      </td>
                      <td className="p-4">
                        <div
                          className={`rounded-xl flex justify-center items-center w-[87px] h-[19px] ${
                            !mobileNo
                              ? "bg-[#0F002B] text-[#FFFFFF] "
                              : "bg-[#FEAD3A] text-[#FFFFFF] "
                          }`}
                        >
                          <Typography className="font-[Inter] font-normal text-[10px]  ">
                            pending
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
        <AdminFooter logohide={true}/>
      </div>
      <div className="w-2/5 relative overflow-scroll main-body-right max-h-screen">
      

      <CustomerChat/>
      
        {/* <div className=" w-full   bg-none overflow-hidden relative">
          <div className="w-full overflow-hidden h-full ">
            <div className="z-10 flex justify-between p-4  items-center  bg-[#E6E6E6] w-full  ">
              <div className="flex justify-center gap-2 items-center">
                <img
                  src={FrameProfile}
                  className="w-[30px] h-[30px] rounded-[100px] border border-solid border-white "
                />
                <div className="flex flex-col text-black items-start justify-center ">
                  <span className="text-[20px] leading-tight">Service</span>
                  <span className="text-[14px] leading-tight">online</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="formkit:hidden" width="24" />
                <div>
                  <Popover placement="left-start">
                    <PopoverHandler>
                      <div className="px-3">
                        <img src={menu} className="w-[5px] h-[30px] " />
                      </div>
                    </PopoverHandler>
                    <PopoverContent className="bg-white  z-50 p-0 py-2">
                      <ListItem
                        onClick={() => navigate("/feedback")}
                        className="hover:bg-black  hover:text-white rounded-none"
                      >
                        <ListItemPrefix>
                          <RiFeedbackFill />
                        </ListItemPrefix>
                        Feedback
                      </ListItem>
                      <ListItem className="hover:bg-black hover:text-white rounded-none">
                        <ListItemPrefix>
                          <MdOutlineReport />
                        </ListItemPrefix>
                        Report
                      </ListItem>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full relative">
              <div className="flex-1 main-body-right p-4 h-full max-h-[400px] overflow-y-auto ">
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
              <div className="px-4 py-2 h-[56px] mt-2 mb-8 rounded-md border-t bg-white flex sticky w-[89.48%] bottom-1 left-0 right-0 m-auto">
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
        </div> */}


      </div>
    </div>
  );
}

export default AdminCustomer;

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
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

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
  const adminsupportlist = useSelector(
    (state) => state.adminsupportlist.messages
  );
  const [chatdetails, setChatdetails] = useState(null);
  const [ischat, setIsChat] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const [inputText, setInputText] = useState("");
  const [image, setImage] = useState(null);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const { accessToken } = useSelector((state) => state.auth);
  const { userId } = useParams();

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
    setInputText((prevInputText) => prevInputText + emoji.native);
  };
  useEffect(() => {
    if (userId) {
      setSelectedUserId(userId);
    }
  }, [userId]);
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

  const handleUserClick = (val) => {
    setSelectedUserId(val?.createdBy?._id);

    navigate(`/admincustomer/${val?.createdBy?._id}`);
    window.location.reload();
  };

  console.log(adminsupportlist);
  return (
    <div className="flex w-full gap-2 h-screen">
      <div className="font-[Inter] main-body-right w-3/5 bg-[#ffff] rounded-t-3xl overflow-y-scroll h-screen">
        <div className="bg-[#F4F4F4] rounded-tl-3xl py-1 px-4 flex flex-col gap-4">
          <div className="flex  mt-1  gap-2 text-[#008CF2] font-[Inter] font-medium text-[12px]">
            <Link to="/newonboard" className="underline">
              Admin Control Panel{" "}
            </Link>
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
                      <div
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
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="w-full">
                {adminsupportlist?.map((val) => {
                  return (
                    <tr
                      onClick={() => handleUserClick(val)}
                      key={val?._id}
                      className="text-[#000000]"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Typography className="cursor-pointer font-[Inter] font-medium text-[16px]">
                            {val?._id?.slice(-6)}
                          </Typography>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <Typography className="font-[Inter] font-medium text-[16px]">
                            {val?.userName ? val?.userName : "Ludo player"}
                          </Typography>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="w-max">
                          <Typography className="font-[Inter] font-medium text-[16px]">
                            {val?.createdBy?.mobileNo}
                          </Typography>
                        </div>
                      </td>
                      <td className="p-4">
                        <div
                          className={`rounded-xl flex justify-center items-center w-[87px] h-[19px] ${
                            val?.status === "open"
                              ? "bg-[#FEAD3A] text-[#FFFFFF] "
                              : "bg-[#0F002B] text-[#FFFFFF] "
                          }`}
                        >
                          <Typography className="font-[Inter] font-normal text-[10px]  ">
                            {val?.status === "open" ? "pending" : "close"}
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
        <Outlet />
      </div>
    </div>
  );
}

export default AdminCustomer;

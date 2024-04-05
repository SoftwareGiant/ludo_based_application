import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  Typography,
  CardBody,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const TABLE_ROWS = [
  {
    uid: "1",
    referid: "ABC12",
    referedate: "02-12-2024",
    status: "Joined",
  },
  {
    uid: "2",
    referid: "ABC13",
    referedate: "01-01-2024",
    status: "Joined",
  },
  {
    uid: "1",
    referid: "ABC12",
    referedate: "02-12-2024",
    status: "Joined",
  },
  {
    uid: "2",
    referid: "ABC13",
    referedate: "01-01-2024",
    status: "Joined",
  },
  {
    uid: "1",
    referid: "ABC12",
    referedate: "02-12-2024",
    status: "Joined",
  },
  {
    uid: "2",
    referid: "ABC13",
    referedate: "01-01-2024",
    status: "Joined",
  },
  {
    uid: "1",
    referid: "ABC12",
    referedate: "02-12-2024",
    status: "Joined",
  },
  {
    uid: "2",
    referid: "ABC13",
    referedate: "01-01-2024",
    status: "Joined",
  },
  {
    uid: "1",
    referid: "ABC12",
    referedate: "02-12-2024",
    status: "Joined",
  },
  {
    uid: "2",
    referid: "ABC13",
    referedate: "01-01-2024",
    status: "Joined",
  },
];
const RefferalCard = ({ status, uid, updatedAt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleReject = () => {
    toast.success("rejected kyc");

    closeModal();
  };
  //   const handleVerification = () => {
  //     dispatch(fetchAllKyc({ uid }));
  //     handleRefresh();
  //   };
  function formatDate(dateStr) {
    const date = new Date(dateStr);

    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata", // IST timezone
    };

    return date.toLocaleString("en-IN", options);
  }

  return (
    <div className="flex gap-3 mb-3">
      <div
        onClick={openModal}
        className="cursor-pointer w-[81px] rounded-lg flex items-center justify-center h-[19px] bg-[#0F002B] hover:bg-black shadow-xl font-[Inter] text-[10px] text-[#FFFFFF] "
      >
        Details
      </div>
      {isOpen && (
        <div className="rounded-md fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute  inset-0 bg-black opacity-50"></div>
          <div className="bg-white w-[826px] rounded-md shadow-lg z-50">
            <div className="flex px-2 items-center rounded-t-md bg-[#EEEEEE] w-full h-[80px] justify-between">
              <div className="flex items-center gap-2 font-bold font-sans text-[#000000]">
                <div className="p-1 gap-2 h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                  <Icon
                    icon="icon-park-outline:circular-connection"
                    width="24"
                  />
                  <span>Referral Details</span>{" "}
                </div>

                <div>UID {uid}</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={closeModal}
                  className="bg-[#F4F4F4] hover:bg-blue-gray-100 text-white font-bold p-2 rounded-full w-[48px] h-[38.4px]"
                >
                  <Icon icon="charm:cross" className="text-black" width="24" />
                </button>
              </div>
            </div>
            <div className="w-full h-[465px] flex px-4">
              <div className="flex  flex-1  p-4 text-[#0F002B]  font-[Nunito-Sans]">
                <div className="flex mt-4 h-[95px] justify-center items-center gap-2">
                  <img
                    alt="user"
                    className="w-[95px] h-[95px] rounded-full"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  />
                  <div className="flex flex-col ">
                    <span className="flex items-center font-bold text-[14.4px]">
                      Ludo Player{" "}
                      {status && (
                        <Icon icon="bitcoin-icons:verify-outline" width="26" />
                      )}
                    </span>
                    <span className="font-normal text-[9.6px] -mt-1">
                      @{uid}
                    </span>
                  </div>
                </div>
              </div>
              <div className="overflow-y-auto table-auto p-2  flex flex-col flex-1  min-w-[70%] text-center font-[Inter] font-medium text-[16px]">
                <div className=" w-full py-1 h-full pb-10 px-4">
                  <CardBody className=" px-0 w-full">
                    <div className="flex justify-between">
                      <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                        Referral History
                      </span>
                      <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
                        <div
                          // onClick={handleOpen}
                          // onBlur={handleClose}
                          className=" justify-between flex items-center p-1 px-2 h-[32px] border  rounded-lg"
                        >
                          <input
                            placeholder="Search"
                            className="outline-none w-32"
                            //   className={`${
                            //     isClicked ? "delay-200" : "w-[54px]"
                            //   } transition-all duration-700 outline-none bg-[#F4F4F4] `}
                            //   type="text"
                            //   value={searchQuery}
                            //   onChange={handleSearch}
                          />
                          <Icon icon="material-symbols:search" width="24" />
                        </div>

                        <Menu>
                          <MenuHandler>
                            <div className="p-1 w-[88px] h-[32px] cursor-pointer  flex items-center justify-between ">
                              <span>Sort</span>{" "}
                              <Icon icon="prime:sort" width="24" />
                            </div>
                          </MenuHandler>
                          <MenuList>
                            <MenuItem className="font-[Inter] text-[16px] text-[#0F002B] font-medium flex justify-start gap-3 items-center">
                              <Icon
                                icon="mdi:calendar-today-outline"
                                width="24"
                              />
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
                              <Icon
                                icon="fluent-mdl2:calendar-year"
                                width="24"
                              />{" "}
                              Yearly
                            </MenuItem>
                            <MenuItem className="font-[Inter] text-[16px] text-[#0F002B] font-medium flex justify-start gap-3 items-center">
                              <Icon icon="fluent-mdl2:time-entry" width="24" />{" "}
                              All Time{" "}
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </div>
                    </div>
                    <table className="mt-4 h-full w-full min-w-max table-auto text-left font-[Inter] font-medium text-[16px]">
                      <thead>
                        <tr>
                          <th className="cursor-pointer flex    p-2 transition-colors  rounded-lg">
                            <Typography className="flex leading-none  p-2 rounded-md  text-[#000000] font-[Inter] font-medium text-[16px]">
                              SL. No.
                            </Typography>
                          </th>
                          <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                            <Typography className="flex flex-col   leading-none  p-2 rounded-md text-[#000000] font-[Inter] font-medium text-[16px]">
                              <span>Referral</span>
                              <span>ID</span>
                            </Typography>
                          </th>
                          <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                            <Typography className="flex flex-col  leading-none  p-2 rounded-md  text-[#000000] font-[Inter] font-medium text-[16px]">
                              <span>Referral</span>
                              <span>Date</span>
                            </Typography>
                          </th>
                          <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                            <Typography className="flex flex-col  leading-none  p-2 rounded-md  text-[#000000] font-[Inter] font-medium text-[16px]">
                              <span>Referral</span>
                              <span>Status</span>
                            </Typography>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="h-full w-full">
                        {TABLE_ROWS?.map((val) => {
                          return (
                            <tr key={val.uid}>
                              <td className="p-4">
                                <div className="flex items-center gap-3">
                                  <Typography className="font-[Inter] font-medium text-[16px]">
                                    {val.uid}
                                  </Typography>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="flex flex-col">
                                  <Typography className="font-[Inter] font-medium text-[16px]">
                                    {val.referid}
                                  </Typography>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="w-max">
                                  <Typography className="font-[Inter] font-medium text-[16px]">
                                    {val.referedate}
                                  </Typography>
                                </div>
                              </td>
                              <td className="p-4">
                                <div
                                  className={`rounded-xl flex justify-center items-center w-[87px] h-[19px] ${
                                    val.status === "joined"
                                      ? "bg-[#00C300] text-[#FFFFFF] "
                                      : status === "failed"
                                      ? "bg-[#FF0000] text-[#FFFFFF] "
                                      : "bg-gray-400 text-[#FFFFFF]"
                                  }`}
                                >
                                  <Typography className="font-[Inter] font-normal text-[10px]  ">
                                    {val.status}
                                  </Typography>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </CardBody>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RefferalCard;

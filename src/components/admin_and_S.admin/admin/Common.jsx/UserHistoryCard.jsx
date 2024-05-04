import React, { useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {convertTimestamp} from "../../Functions/convertTimestamp.js"
import {
  Typography,
  CardBody,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { fetchUserAllHistory } from "../AdminSlice/userAllHistorySlice";
import { formatDate } from "../../Functions/formateDate";

const TABLE_ROWS = [
  {
    uid: "11",
    referid: "ABC12",
    referedate: "02-12-2024",
    status: "Joined",
  },
  {
    uid: "21",
    referid: "ABC13",
    referedate: "01-01-2024",
    status: "Joined",
  },
 
];
const UserHistoryCard = ({ status, mobileNo, uid, updatedAt, userdetail }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [table1, setTable1] = useState(false);
  const [table2, setTable2] = useState(false);
  const [table3, setTable3] = useState(false);
  const [table4, setTable4] = useState(false);
  const [table5, setTable5] = useState(false);
  const dispatch = useDispatch();

  const { loading, gameDetails, paymentDetails, error } = useSelector(
    (state) => state.userAllHistory
  );

  console.log(gameDetails, paymentDetails);

  const openModal = () => {
    dispatch(fetchUserAllHistory(uid));
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // const handleReject = () => {
  //   toast.success("rejected kyc");

  //   closeModal();
  // };
  //   const handleVerification = () => {
  //     dispatch(fetchAllKyc({ uid }));
  //     handleRefresh();
  //   };
  // function formatDate(dateStr) {
  //   const date = new Date(dateStr);

  //   const options = {
  //     day: "2-digit",
  //     month: "2-digit",
  //     year: "numeric",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     hour12: false,
  //     timeZone: "Asia/Kolkata", // IST timezone
  //   };

  //   return date.toLocaleString("en-IN", options);
  // }
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;
  return (
    <div className="flex gap-3 mb-3">
      <div
        onClick={openModal}
        className={`cursor-pointer rounded-xl flex justify-center items-center w-[87px] h-[19px] ${
          status === "Active"
            ? "bg-[#0F002B] text-[#FFFFFF] "
            : "bg-gray-200 text-[#000000] "
        }`}
      >
        <Typography className="font-[Inter] font-normal text-[10px]  ">
          {status}
        </Typography>
      </div>

      {isOpen && (
        <div className="rounded-md fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute  inset-0 bg-black opacity-50"></div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="bg-white w-[826px] rounded-md shadow-lg z-50">
              <div className="flex px-4 items-center rounded-t-md bg-[#EEEEEE] w-full h-[80px] justify-between">
                <div className="flex items-center gap-2 font-bold font-sans text-[#000000]">
                  <div className="p-1 gap-2 h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                    <Icon icon="mdi:user-outline" width="24" />
                    <span>User Details</span>{" "}
                  </div>
                  <div className="bg-black text-[white] rounded-md px-2 py-1 mx-3">
                    {status}
                  </div>
                  <div>UID {uid?.slice(-6)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={closeModal}
                    className="bg-[#F4F4F4] hover:bg-blue-gray-100 text-white font-bold p-2 rounded-full w-[48px] h-[38.4px]"
                  >
                    <Icon
                      icon="charm:cross"
                      className="text-black"
                      width="24"
                    />
                  </button>
                </div>
              </div>
              <div className="w-full h-[465px] flex px-4">
                <div className="flex  flex-1  p-4 text-[#0F002B]  font-[Nunito-Sans]">
                  <div className="flex mt-4 h-[95px] justify-center items-center gap-2">
                    <div className=" p-1 rounded-lg h-[75px] w-[75px]">
                      <img
                        alt="user"
                        className="object-cover h-full w-full rounded-full"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <span className="flex items-center font-bold text-[14.4px]">
                        Ludo Player{" "}
                        {status === "Active" && (
                          <Icon
                            icon="bitcoin-icons:verify-outline"
                            width="26"
                          />
                        )}
                      </span>
                      <span className="font-normal text-sm -mt-1">
                        @{uid.slice(-6)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="overflow-y-auto table-auto p-2  flex flex-col flex-1  min-w-[70%] text-center font-[Inter] font-medium text-[16px]">
                  <div className=" w-full py-1 h-full pb-10 px-4">
                    <CardBody className="px-0 w-full">
                      <div
                        onClick={() => setTable1(!table1)}
                        className="cursor-pointer  flex justify-between"
                      >
                        <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                          Information
                        </span>
                        <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
                          <div className="flex justify-center items-center">
                            {table1 ? (
                              <Icon
                                width="12"
                                icon="teenyicons:up-solid"
                                className="cursor-pointer"
                              />
                            ) : (
                              <Icon
                                width="12"
                                icon="teenyicons:down-solid"
                                className="cursor-pointer"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      {table1 && (
                        <table className="mt-4 h-full w-full min-w-max table-auto text-left font-[Inter] font-medium text-[16px]">
                          <thead>
                            <tr>
                              <th className="cursor-pointer flex    p-2 transition-colors  rounded-lg">
                                <Typography className="flex leading-none  p-2 rounded-md  text-[#000000] font-[Inter] font-medium text-[16px]">
                                  Name
                                </Typography>
                              </th>
                              <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                                <Typography className="flex  leading-none  p-2 rounded-md  font-[Inter] font-medium text-[16px]">
                                  {uid.slice(-6)}
                                </Typography>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="h-full w-full">
                            <tr>
                              <td className="cursor-pointer flex    p-2 transition-colors  rounded-lg">
                                <Typography className="flex leading-none  p-2 rounded-md  text-[#000000] font-[Inter] font-medium text-[16px]">
                                  Mobile Number
                                </Typography>
                              </td>
                              <td className="cursor-pointer   p-2 transition-colors  rounded-lg">
                                <Typography className="flex  leading-none  p-2 rounded-md  font-[Inter] font-medium text-[16px]">
                                  {mobileNo}
                                </Typography>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      )}
                    </CardBody>
                    <CardBody className=" px-0 w-full">
                      <div className="flex justify-between items-center">
                        <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                          Game History
                        </span>
                        <div className="flex gap-2 font-[Inter] items-center  font-medium text-[16px]">
                          {/* {table2 && (
                            <div className=" justify-between flex items-center p-1 px-2 h-[32px] border  rounded-lg">
                              <input
                                placeholder="Search"
                                className="outline-none w-32"
                              />
                              <Icon icon="material-symbols:search" width="24" />
                            </div>
                          )} */}
                          {/* {table2 && (
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
                                  <Icon
                                    icon="fluent-mdl2:time-entry"
                                    width="24"
                                  />{" "}
                                  All Time{" "}
                                </MenuItem>
                              </MenuList>
                            </Menu>
                          )} */}
                          <div className="flex justify-center items-center">
                            {table2 ? (
                              <Icon
                                icon="teenyicons:up-solid"
                                width="12"
                                className="cursor-pointer"
                                onClick={() => setTable2(false)}
                              />
                            ) : (
                              <Icon
                                width="12"
                                icon="teenyicons:down-solid"
                                className="cursor-pointer"
                                onClick={() => setTable2(true)}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      {table2 && (
                        <table className="mt-4 h-full w-full min-w-max table-auto text-left font-[Inter] font-medium text-[16px]">
                          <thead>
                            <tr>
                              <th className="cursor-pointer flex    p-2 transition-colors  rounded-lg">
                                <Typography className="flex leading-none  p-2 rounded-md  text-[#000000] font-[Inter] font-medium text-[16px]">
                                  GID
                                </Typography>
                              </th>
                              <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                                <Typography className="flex  leading-none  p-2 rounded-md text-[#000000] font-[Inter] font-medium text-[16px]">
                                  GameType
                                </Typography>
                              </th>
                              <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                                <Typography className="flex  leading-none  p-2 rounded-md  text-[#000000] font-[Inter] font-medium text-[16px]">
                                  Time
                                </Typography>
                              </th>
                              <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                                <Typography className="flex  leading-none  p-2 rounded-md  text-[#000000] font-[Inter] font-medium text-[16px]">
                                  Status
                                </Typography>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="h-full w-full">
                            {gameDetails.length >= 0 &&
                              gameDetails?.map((val) => {
                                return (
                                  <tr key={val._id}>
                                    <td className="p-4">
                                      <div className="flex items-center gap-3">
                                        <Typography className="font-[Inter] font-medium text-[16px]">
                                          {val._id.slice(-8)}
                                        </Typography>
                                      </div>
                                    </td>
                                    <td className="p-4">
                                      <div className="flex flex-col">
                                        <Typography className="font-[Inter] font-medium text-[16px]">
                                          Open Challenge
                                        </Typography>
                                      </div>
                                    </td>
                                    
                                    <td className="p-4">
                                      <div className="flex flex-col">
                                        <Typography className="font-[Inter] font-medium text-[16px]">
                                          {convertTimestamp(val?.matchingTimeStamp)}
                                        </Typography>
                                      </div>
                                    </td>
                                    <td className="p-4">
                                      <div className="flex flex-col">
                                        <Typography className="font-[Inter] font-medium text-[16px]">
                                          {val.status}
                                        </Typography>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                          </tbody>
                        </table>
                      )}
                    </CardBody>

                    <CardBody className=" px-0 w-full">
                      <div className="flex justify-between">
                        <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                          Withdraw History
                        </span>
                        <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
                          <div className="flex justify-center items-center">
                            {table4 ? (
                              <Icon
                                width="12"
                                icon="teenyicons:up-solid"
                                className="cursor-pointer"
                                onClick={() => setTable4(false)}
                              />
                            ) : (
                              <Icon
                                width="12"
                                icon="teenyicons:down-solid"
                                className="cursor-pointer"
                                onClick={() => setTable4(true)}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      {table4 && (
                        <table className="mt-4 h-full w-full min-w-max table-auto text-left font-[Inter] font-medium text-[16px]">
                          <thead>
                            <tr>
                              <th className="cursor-pointer flex    p-2 transition-colors  rounded-lg">
                                <Typography className="flex leading-none  p-2 rounded-md  text-[#000000] font-[Inter] font-medium text-[16px]">
                                  Id
                                </Typography>
                              </th>
                              <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                                <Typography className="flex  leading-none  p-2 rounded-md text-[#000000] font-[Inter] font-medium text-[16px]">
                                  amount
                                </Typography>
                              </th>
                              <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                                <Typography className="flex  leading-none  p-2 rounded-md  text-[#000000] font-[Inter] font-medium text-[16px]">
                                  Date
                                </Typography>
                              </th>
                              <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                                <Typography className="flex  leading-none  p-2 rounded-md  text-[#000000] font-[Inter] font-medium text-[16px]">
                                  Status
                                </Typography>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="h-full w-full">
                            {paymentDetails
                              .filter(
                                (payment) =>
                                  payment.paymentAction === "withdrawl"
                              )
                              ?.map((val) => {
                                return (
                                  <tr key={val._id}>
                                    <td className="p-4">
                                      <div className="flex items-center gap-3">
                                        <Typography className="font-[Inter] font-medium text-[16px]">
                                          {val._id.slice(-8)}
                                        </Typography>
                                      </div>
                                    </td>
                                    <td className="p-4">
                                      <div className="flex flex-col">
                                        <Typography className="font-[Inter] font-medium text-[16px]">
                                          {val.amount}
                                        </Typography>
                                      </div>
                                    </td>
                                    <td className="p-4">
                                      <div className="flex flex-col">
                                        <Typography className="font-[Inter] font-medium text-[16px]">
                                          {formatDate(val.timestamp)}
                                        </Typography>
                                      </div>
                                    </td>
                                    <td className="p-4">
                                      <div className="flex flex-col">
                                        <Typography className="font-[Inter] font-medium text-[16px]">
                                          {val.status}
                                        </Typography>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                          </tbody>
                        </table>
                      )}
                    </CardBody>

                    <CardBody className=" px-0 w-full">
                      <div className="flex justify-between">
                        <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                          Deposite History
                        </span>
                        <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
                          <div className="flex justify-center items-center">
                            {table5 ? (
                              <Icon
                                width="12"
                                icon="teenyicons:up-solid"
                                className="cursor-pointer"
                                onClick={() => setTable5(false)}
                              />
                            ) : (
                              <Icon
                                width="12"
                                icon="teenyicons:down-solid"
                                className="cursor-pointer"
                                onClick={() => setTable5(true)}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      {table5 && (
                        <table className="mt-4 h-full w-full min-w-max table-auto text-left font-[Inter] font-medium text-[16px]">
                          <thead>
                            <tr>
                              <th className="cursor-pointer flex    p-2 transition-colors  rounded-lg">
                                <Typography className="flex leading-none  p-2 rounded-md  text-[#000000] font-[Inter] font-medium text-[16px]">
                                  Id
                                </Typography>
                              </th>
                              <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                                <Typography className="flex  leading-none  p-2 rounded-md text-[#000000] font-[Inter] font-medium text-[16px]">
                                  amount
                                </Typography>
                              </th>
                              <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                                <Typography className="flex  leading-none  p-2 rounded-md  text-[#000000] font-[Inter] font-medium text-[16px]">
                                  Date
                                </Typography>
                              </th>
                              <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                                <Typography className="flex  leading-none  p-2 rounded-md  text-[#000000] font-[Inter] font-medium text-[16px]">
                                  Status
                                </Typography>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="h-full w-full">
                            {paymentDetails
                              .filter(
                                (payment) => payment.paymentAction === "deposit"
                              )
                              ?.map((val) => {
                                return (
                                  <tr key={val._id}>
                                    <td className="p-4">
                                      <div className="flex items-center gap-3">
                                        <Typography className="font-[Inter] font-medium text-[16px]">
                                          {val._id.slice(-8)}
                                        </Typography>
                                      </div>
                                    </td>
                                    <td className="p-4">
                                      <div className="flex flex-col">
                                        <Typography className="font-[Inter] font-medium text-[16px]">
                                          {val.amount}
                                        </Typography>
                                      </div>
                                    </td>
                                    <td className="p-4">
                                      <div className="flex flex-col">
                                        <Typography className="font-[Inter] font-medium text-[16px]">
                                          {formatDate(val.timestamp)}
                                        </Typography>
                                      </div>
                                    </td>

                                    <td className="p-4">
                                      <div className="flex flex-col">
                                        <Typography className="font-[Inter] font-medium text-[16px]">
                                          {val.status}
                                        </Typography>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                          </tbody>
                        </table>
                      )}
                    </CardBody>

                    <CardBody className=" px-0 w-full">
                      <div className="flex justify-between">
                        <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                          Support History
                        </span>
                        <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
                          <div className="flex justify-center items-center">
                            {table3 ? (
                              <Icon
                                width="12"
                                icon="teenyicons:up-solid"
                                className="cursor-pointer"
                                onClick={() => setTable3(false)}
                              />
                            ) : (
                              <Icon
                                width="12"
                                icon="teenyicons:down-solid"
                                className="cursor-pointer"
                                onClick={() => setTable3(true)}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      {table3 && (
                        <table className="mt-4 h-full w-full min-w-max table-auto text-left font-[Inter] font-medium text-[16px]">
                          <thead>
                            <tr>
                              <th className="cursor-pointer flex    p-2 transition-colors  rounded-lg">
                                <Typography className="flex leading-none  p-2 rounded-md  text-[#000000] font-[Inter] font-medium text-[16px]">
                                  Ticket
                                </Typography>
                              </th>
                              <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                                <Typography className="flex  leading-none  p-2 rounded-md text-[#000000] font-[Inter] font-medium text-[16px]">
                                  Time Stamp
                                </Typography>
                              </th>

                              <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                                <Typography className="flex  leading-none  p-2 rounded-md  text-[#000000] font-[Inter] font-medium text-[16px]">
                                  Status
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
                                        2 hr ago
                                      </Typography>
                                    </div>
                                  </td>

                                  <td className="p-4">
                                    <div className="flex flex-col">
                                      <Typography className="font-[Inter] font-medium text-[16px]">
                                        won
                                      </Typography>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      )}
                    </CardBody>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserHistoryCard;

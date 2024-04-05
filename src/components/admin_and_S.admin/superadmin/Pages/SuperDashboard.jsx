import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
import {
  Card,
  Typography,
  CardBody,
  MenuList,
  Menu,
  MenuHandler,
  MenuItem,
} from "@material-tailwind/react";
import graph from "../../../../assets/admin_Sadmin/admin/graph.png";
import AdminFooter from "../../admin/Common.jsx/AdminFooter";
import Refreshloader from "../Common/Refreshloader";

const TABLE_ROWS = [
  {
    walletname: "Wallet #1",
    balance: "₹2,00,000",
    totalwithdra: "₹2,000",
    pending: "₹2,000",
    inprocess: "₹3,000",
    date: "12-Dec-2023",
  },
  {
    walletname: "Wallet #2",
    balance: "₹1,50,000",
    totalwithdra: "₹1,500",
    pending: "₹1,000",
    inprocess: "₹2,500",
    date: "13-Dec-2023",
  },
  {
    walletname: "Wallet #3",
    balance: "₹1,75,000",
    totalwithdra: "₹1,750",
    pending: "₹1,250",
    inprocess: "₹2,000",
    date: "14-Dec-2023",
  },
  {
    walletname: "Wallet #4",
    balance: "₹2,20,000",
    totalwithdra: "₹2,200",
    pending: "₹1,800",
    inprocess: "₹3,500",
    date: "15-Dec-2023",
  },
  {
    walletname: "Wallet #5",
    balance: "₹1,90,000",
    totalwithdra: "₹1,900",
    pending: "₹1,500",
    inprocess: "₹2,500",
    date: "16-Dec-2023",
  },
  {
    walletname: "Wallet #6",
    balance: "₹2,50,000",
    totalwithdra: "₹2,500",
    pending: "₹2,000",
    inprocess: "₹3,500",
    date: "17-Dec-2023",
  },
];

export function SuperDashboard() {
  const [isClicked, setIsClicked] = useState(false);
  const [withdrawalLoad, setWithdrawalLoad] = useState(false);
  const [depositelLoad, setDepositeLoad] = useState(false);
  const [commisionLoad, setCommisionLoad] = useState(false);
  const [referLoad, setReferLoad] = useState(false);

  const [stats, setStats] = useState("Inflow / Outflow");
  const [time, setTime] = useState("Today");
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="font-[Inter] w-full main-body-right overflow-y-scroll pb-10 h-screen bg-[#ffff] rounded-tl-3xl">
      <div className="bg-[#F4F4F4] rounded-tl-3xl py-1 px-4 flex flex-col gap-4">
        <div className="flex  mt-1  gap-2 text-[#008CF2] font-[Inter] font-medium text-[12px]">
          <span className="underline">Super Admin Control Panel </span>
          <span>&gt;&gt;</span>
          <span className="underline">Menu</span>
          <span>&gt;&gt;</span>
          <span className="underline">Dashboard</span>
          <span>&gt;&gt;</span>
          <span className="underline">{stats}</span>
        </div>
        <h3 className="text-[#0F002B] text-lg">
          <span className="underline">D</span>ashboard{" "}
        </h3>
      </div>
      <div className="flex px-3 py-2 items-center justify-between bg-[#EEEEEE]">
        <p className="text-[#000000] font-medium text-xs">
          Detail : Super Admin Dashboard
        </p>
        <Icon icon="charm:cross" width="12" />
      </div>
      <Card className="pb-10 text-[#000000] table-auto  w-full px-4">
        <CardBody className=" p-0 mt-3 h-full w-full">
          <div className="flex justify-between ">
            <div className="flex gap-3">
              <Menu>
                <MenuHandler>
                  <div className="flex border-gray-200 border shadow-md rounded-3xl cursor-pointer items-center justify-between px-3  w-[183px] h-[32px]">
                    <span className="font-[Inter] text-[12px] ">
                      Stats : {stats}
                    </span>
                    <Icon icon="teenyicons:down-solid" width="10" />
                  </div>
                </MenuHandler>
                <MenuList className="p-2">
                  <MenuItem
                    onClick={() => setStats("Inflow / Outflow")}
                    className="font-[Inter] text-[12px] text-[#000000] font-medium flex justify-start items-center"
                  >
                    Stats : Inflow / Outflow
                  </MenuItem>
                  <MenuItem
                    onClick={() => setStats("Tournaments")}
                    className="font-[Inter] text-[12px] text-[#000000] font-medium flex justify-start  items-center"
                  >
                    Stats : Tournaments
                  </MenuItem>
                  <MenuItem
                    onClick={() => setStats("Users")}
                    className="font-[Inter] text-[12px] text-[#000000] font-medium flex justify-start items-center"
                  >
                    Stats : Users
                  </MenuItem>
                </MenuList>
              </Menu>

              {stats === "Inflow / Outflow" && (
                <Menu>
                  <MenuHandler>
                    <div className="flex border-gray-200 border shadow-md rounded-3xl cursor-pointer items-center justify-between px-3  w-[184px] h-[32px]">
                      <span className="font-[Inter] text-[12px] ">
                        Choose Wallet To View
                      </span>
                      <Icon icon="teenyicons:down-solid" width="10" />
                    </div>
                  </MenuHandler>
                  <MenuList className="p-1">
                    <MenuItem className="font-[Inter] text-[16px] text-[#0F002B] font-medium flex justify-start gap-3 items-center">
                      Admin #1 : Default
                    </MenuItem>
                    <MenuItem className="font-[Inter] text-[16px] text-[#0F002B] font-medium flex justify-start gap-3 items-center">
                      Admin #2 : Player
                    </MenuItem>
                    <MenuItem className="font-[Inter] text-[16px] text-[#0F002B] font-medium flex justify-start gap-3 items-center">
                      Admin #3 : Default
                    </MenuItem>
                    <MenuItem className="font-[Inter] text-[16px] text-[#0F002B] font-medium flex justify-start gap-3 items-center">
                      Admin #4 : Default
                    </MenuItem>
                    <MenuItem className="font-[Inter] text-[16px] text-[#0F002B] font-medium flex justify-start gap-3 items-center">
                      Admin #5 : Default
                    </MenuItem>
                  </MenuList>
                </Menu>
              )}
              {stats === "Inflow / Outflow" && (
                <div className="flex border-gray-200 border shadow-md rounded-3xl cursor-pointer items-center justify-between px-3  w-[159px] h-[32px]">
                  <span className="font-[Inter] text-[12px] ">
                    Create New Wallet
                  </span>
                  <Icon icon="icon-park:plus" width="20" />
                </div>
              )}
              {stats === "Tournaments" && (
                <div className="flex border-gray-200 border shadow-md rounded-3xl cursor-pointer items-center justify-between px-3  w-[192px] h-[32px]">
                  <span className="font-[Inter] text-[12px] ">
                    Create New Tournament
                  </span>
                  <Icon icon="icon-park:plus" width="20" />
                </div>
              )}
              {stats === "Users" && (
                <div className="flex border-gray-200 border shadow-md rounded-3xl cursor-pointer items-center justify-between px-3  w-[177px] h-[32px]">
                  <span className="font-[Inter] text-[12px] ">
                    Create New Category
                  </span>
                  <Icon icon="icon-park:plus" width="20" />
                </div>
              )}
            </div>
            <div className="flex gap-3">
              <div className="flex border-gray-200 border shadow-md rounded-3xl cursor-pointer items-center justify-between px-3  w-[124px] h-[32px]">
                <span className="font-[Inter] text-[12px] ">Pie Chart</span>
                <Icon icon="teenyicons:down-solid" width="10" />
              </div>
              <Menu>
                <MenuHandler>
                  <div className="flex border-gray-200 border shadow-md rounded-3xl cursor-pointer items-center justify-between px-3  w-[109px] h-[32px]">
                    <span className="font-[Inter] text-[12px] ">{time}</span>
                    <Icon icon="teenyicons:down-solid" width="10" />
                  </div>
                </MenuHandler>
                <MenuList className="p-2 ">
                  <MenuItem
                    onClick={() => setTime("Daily")}
                    className="font-[Inter] text-[12px] text-[#000000] font-medium flex justify-start items-center"
                  >
                    Daily
                  </MenuItem>
                  <MenuItem
                    onClick={() => setTime("Weekly")}
                    className="font-[Inter] text-[12px] text-[#000000] font-medium flex justify-start  items-center"
                  >
                    Weekly
                  </MenuItem>
                  <MenuItem
                    onClick={() => setTime("Monthly")}
                    className="font-[Inter] text-[12px] text-[#000000] font-medium flex justify-start items-center"
                  >
                    Monthly
                  </MenuItem>
                  <MenuItem
                    onClick={() => setTime("Yearly")}
                    className="font-[Inter] text-[12px] text-[#000000] font-medium flex justify-start items-center"
                  >
                    Yearly
                  </MenuItem>
                  <MenuItem
                    onClick={() => setTime("All Time")}
                    className="font-[Inter] text-[12px] text-[#000000] font-medium flex justify-start items-center"
                  >
                    All Time
                  </MenuItem>
                  <MenuItem className="font-[Inter] text-[12px] text-[#000000] font-medium flex justify-start items-center">
                    <Menu>
                      <MenuHandler>
                        <span className="font-[Inter] text-[12px] ">
                          {" "}
                          Custom
                        </span>
                      </MenuHandler>
                      <MenuList className="p-2 ">
                        <div className="font-[Inter] text-[12px] p-2 px-3 text-[#000000] font-medium flex justify-start items-center">
                          From
                        </div>
                        <input
                          type="text"
                          className="px-3 font-[Inter] text-[12px] outline-none text-[#000000] font-medium flex justify-start items-center"
                        />
                        <div className="font-[Inter] text-[12px] p-2 px-3 text-[#000000] font-medium flex justify-start items-center">
                          To
                        </div>

                        <input
                          type="text"
                          className="px-3 font-[Inter] text-[12px] outline-none text-[#000000] font-medium flex justify-start items-center"
                        />
                      </MenuList>
                    </Menu>
                    {/* <MenuItem
                    // onClick={() => setTime("Custom")}
                    className="font-[Inter] text-[12px] text-[#000000] font-medium flex justify-start items-center"
                  >
                    Custom */}
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
          <div className="my-[50px] flex justify-center">
            <img src={graph} className="h-[186px] w-[65%]" />
          </div>

          {stats === "Inflow / Outflow" && (
            <div className="w-full min-w-max">
              {/* Withdrawal walet */}
              <div>
                <div className="flex h-[52px] border border-gray-600 rounded-t-md  px-2 items-center justify-between bg-[#F4F4F4]">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#51A8B4] rounded-full w-5 h-5" />
                    <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                      Withdrawal Wallet
                    </span>
                  </div>

                  <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
                    <div
                      onClick={handleClick}
                      onBlur={handleClick}
                      className="bg-[#F4F4F4] shadow-sm justify-between flex items-center p-1 px-2 h-[32px]  border rounded-lg"
                    >
                      <input
                        placeholder="Search"
                        className={`${
                          isClicked ? "delay-200" : "w-[54px]"
                        } transition-all duration-700 outline-none bg-[#F4F4F4] `}
                        type="text"
                      />
                      <Icon icon="material-symbols:search" width="24" />
                    </div>
                    {withdrawalLoad ? (
                      <div className="shadow-sm w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                        <span>Refresh</span> <Refreshloader />
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          setWithdrawalLoad(true);
                          setTimeout(() => {
                            setWithdrawalLoad(false);
                          }, 3000);
                        }}
                        className="shadow-sm w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg"
                      >
                        <span>Refresh</span>{" "}
                        <Icon icon="material-symbols:refresh" width="24" />
                      </div>
                    )}
                    <Menu>
                      <MenuHandler>
                        <div className="shadow-sm p-1 w-[88px] h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                          <span>Sort</span>{" "}
                          <Icon icon="prime:sort" width="24" />
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
                          <Icon icon="fluent-mdl2:time-entry" width="24" /> All
                          Time{" "}
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </div>
                <table className="border mb-10 overflow-y-scroll border-l-gray-600  border-r-gray-600 h-full w-full min-w-max table-auto text-left font-[Inter] font-medium text-[16px]">
                  <thead>
                    <tr>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] px-3 h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Wallet Name</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Balance</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Total Withdrawal</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Pending Withdrawal</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>In Process Withdrawal</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Date</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="overflow-scroll h-full w-full">
                    {TABLE_ROWS.map(
                      (
                        {
                          walletname,
                          balance,
                          totalwithdra,
                          pending,
                          inprocess,
                          date,
                        },
                        index
                      ) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast ? "p-4" : "p-4";
                        return (
                          <tr key={walletname} className="text-[#000000]">
                            <td className={classes}>
                              <div className="flex items-center gap-3">
                                <Typography className=" font-[Inter] font-normal text-[16px]">
                                  {walletname}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <div className="flex flex-col">
                                <Typography className="font-[Inter] font-normal text-[16px]">
                                  {balance}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <div className="w-max">
                                <Typography className="font-[Inter] font-normal text-[16px]">
                                  {totalwithdra}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <Typography className="font-[Inter] font-normal text-[16px]">
                                {pending}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography className="font-[Inter] font-normal text-[16px]">
                                {inprocess}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography className="font-[Inter] font-normal text-[16px]">
                                {date}
                              </Typography>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                  <tfoot className="h-[51px] border  border-gray-600 rounded-b-md bg-[#F4F4F4]">
                    <tr className="text-[#000000] font-[Inter] font-normal text-[16px]">
                      <td className="px-4 ">Total</td>
                      <td className="px-4 ">₹2,50,000</td>
                      <td className="px-4 ">₹1,80,000</td>
                      <td className="px-4 ">₹2,10,000</td>
                      <td className="px-4 ">₹6,10,000</td>
                      <td className="px-4 ">12-Dec-2023</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* deposite wallet */}
              <div>
                <div className="flex h-[52px] border border-gray-600 rounded-t-md  px-2 items-center justify-between bg-[#F4F4F4]">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#A9E5C8] rounded-full w-5 h-5" />
                    <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                      deposite Wallet
                    </span>
                  </div>

                  <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
                    <div
                      onClick={handleClick}
                      onBlur={handleClick}
                      className="bg-[#F4F4F4] shadow-sm justify-between flex items-center p-1 px-2 h-[32px]  border rounded-lg"
                    >
                      <input
                        placeholder="Search"
                        className={`${
                          isClicked ? "delay-200" : "w-[54px]"
                        } transition-all duration-700 outline-none bg-[#F4F4F4] `}
                        type="text"
                      />
                      <Icon icon="material-symbols:search" width="24" />
                    </div>
                    {depositelLoad ? (
                      <div className="shadow-sm w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                        <span>Refresh</span> <Refreshloader />
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          setDepositeLoad(true);
                          setTimeout(() => {
                            setDepositeLoad(false);
                          }, 3000);
                        }}
                        className="shadow-sm w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg"
                      >
                        <span>Refresh</span>{" "}
                        <Icon icon="material-symbols:refresh" width="24" />
                      </div>
                    )}
                    <Menu>
                      <MenuHandler>
                        <div className="shadow-sm p-1 w-[88px] h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                          <span>Sort</span>{" "}
                          <Icon icon="prime:sort" width="24" />
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
                          <Icon icon="fluent-mdl2:time-entry" width="24" /> All
                          Time{" "}
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </div>
                <table className="border mb-10  overflow-y-scroll border-l-gray-600 border-r-gray-600 h-full w-full min-w-max table-auto text-left font-[Inter] font-medium text-[16px]">
                  <thead>
                    <tr>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] px-3 h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Wallet Na...</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Balance</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Total Wit...</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Pending...</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>In Proces...</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Date</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="overflow-scroll h-full w-full">
                    {TABLE_ROWS.map(
                      (
                        {
                          walletname,
                          balance,
                          totalwithdra,
                          pending,
                          inprocess,
                          date,
                        },
                        index
                      ) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast ? "p-4" : "p-4";
                        return (
                          <tr key={walletname} className="text-[#000000]">
                            <td className={classes}>
                              <div className="flex items-center gap-3">
                                <Typography className=" font-[Inter] font-normal text-[16px]">
                                  {walletname}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <div className="flex flex-col">
                                <Typography className="font-[Inter] font-normal text-[16px]">
                                  {balance}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <div className="w-max">
                                <Typography className="font-[Inter] font-normal text-[16px]">
                                  {totalwithdra}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <Typography className="font-[Inter] font-normal text-[16px]">
                                {pending}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography className="font-[Inter] font-normal text-[16px]">
                                {inprocess}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography className="font-[Inter] font-normal text-[16px]">
                                {date}
                              </Typography>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                  <tfoot className="h-[51px] border  border-gray-600 rounded-b-md bg-[#F4F4F4]">
                    <tr className="text-[#000000] font-[Inter] font-normal text-[16px]">
                      <td className="px-4 ">Total</td>
                      <td className="px-4 ">₹2,50,000</td>
                      <td className="px-4 ">₹1,80,000</td>
                      <td className="px-4 ">₹2,10,000</td>
                      <td className="px-4 ">₹6,10,000</td>
                      <td className="px-4 ">12-Dec-2023</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Commission wallet */}
              <div>
                <div className="flex h-[52px] border border-gray-600 rounded-t-md  px-2 items-center justify-between bg-[#F4F4F4]">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#FFB978] rounded-full w-5 h-5" />
                    <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                      Commission Wallet
                    </span>
                  </div>

                  <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
                    <div
                      onClick={handleClick}
                      onBlur={handleClick}
                      className="bg-[#F4F4F4] shadow-sm justify-between flex items-center p-1 px-2 h-[32px]  border rounded-lg"
                    >
                      <input
                        placeholder="Search"
                        className={`${
                          isClicked ? "delay-200" : "w-[54px]"
                        } transition-all duration-700 outline-none bg-[#F4F4F4] `}
                        type="text"
                      />
                      <Icon icon="material-symbols:search" width="24" />
                    </div>
                    {commisionLoad ? (
                      <div className="shadow-sm w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                        <span>Refresh</span> <Refreshloader />
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          setCommisionLoad(true);
                          setTimeout(() => {
                            setCommisionLoad(false);
                          }, 3000);
                        }}
                        className="shadow-sm w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg"
                      >
                        <span>Refresh</span>{" "}
                        <Icon icon="material-symbols:refresh" width="24" />
                      </div>
                    )}
                    <Menu>
                      <MenuHandler>
                        <div className="shadow-sm p-1 w-[88px] h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                          <span>Sort</span>{" "}
                          <Icon icon="prime:sort" width="24" />
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
                          <Icon icon="fluent-mdl2:time-entry" width="24" /> All
                          Time{" "}
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </div>
                <table className="border mb-10  overflow-y-scroll border-l-gray-600 border-r-gray-600 h-full w-full min-w-max table-auto text-left font-[Inter] font-medium text-[16px]">
                  <thead>
                    <tr>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] px-3 h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Wallet Na...</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Balance</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Total Wit...</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Pending...</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>In Proces...</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Date</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="overflow-scroll h-full w-full">
                    {TABLE_ROWS.map(
                      (
                        {
                          walletname,
                          balance,
                          totalwithdra,
                          pending,
                          inprocess,
                          date,
                        },
                        index
                      ) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast ? "p-4" : "p-4";
                        return (
                          <tr key={walletname} className="text-[#000000]">
                            <td className={classes}>
                              <div className="flex items-center gap-3">
                                <Typography className=" font-[Inter] font-normal text-[16px]">
                                  {walletname}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <div className="flex flex-col">
                                <Typography className="font-[Inter] font-normal text-[16px]">
                                  {balance}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <div className="w-max">
                                <Typography className="font-[Inter] font-normal text-[16px]">
                                  {totalwithdra}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <Typography className="font-[Inter] font-normal text-[16px]">
                                {pending}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography className="font-[Inter] font-normal text-[16px]">
                                {inprocess}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography className="font-[Inter] font-normal text-[16px]">
                                {date}
                              </Typography>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                  <tfoot className="h-[51px] border  border-gray-600 rounded-b-md bg-[#F4F4F4]">
                    <tr className="text-[#000000] font-[Inter] font-normal text-[16px]">
                      <td className="px-4 ">Total</td>
                      <td className="px-4 ">₹2,50,000</td>
                      <td className="px-4 ">₹1,80,000</td>
                      <td className="px-4 ">₹2,10,000</td>
                      <td className="px-4 ">₹6,10,000</td>
                      <td className="px-4 ">12-Dec-2023</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* Referral wallet */}
              <div>
                <div className="flex h-[52px] border border-gray-600 rounded-t-md  px-2 items-center justify-between bg-[#F4F4F4]">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#859AFF] rounded-full w-5 h-5" />
                    <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                      Referral Wallet
                    </span>
                  </div>

                  <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
                    <div
                      onClick={handleClick}
                      onBlur={handleClick}
                      className="bg-[#F4F4F4] shadow-sm justify-between flex items-center p-1 px-2 h-[32px]  border rounded-lg"
                    >
                      <input
                        placeholder="Search"
                        className={`${
                          isClicked ? "delay-200" : "w-[54px]"
                        } transition-all duration-700 outline-none bg-[#F4F4F4] `}
                        type="text"
                      />
                      <Icon icon="material-symbols:search" width="24" />
                    </div>
                    {referLoad ? (
                      <div className="shadow-sm w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                        <span>Refresh</span> <Refreshloader />
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          setReferLoad(true);
                          setTimeout(() => {
                            setReferLoad(false);
                          }, 3000);
                        }}
                        className="shadow-sm w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg"
                      >
                        <span>Refresh</span>{" "}
                        <Icon icon="material-symbols:refresh" width="24" />
                      </div>
                    )}
                    <Menu>
                      <MenuHandler>
                        <div className="shadow-sm p-1 w-[88px] h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                          <span>Sort</span>{" "}
                          <Icon icon="prime:sort" width="24" />
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
                          <Icon icon="fluent-mdl2:time-entry" width="24" /> All
                          Time{" "}
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </div>
                <table className="border mb-10  overflow-y-scroll border-l-gray-600 border-r-gray-600 w-full min-w-max table-auto text-left font-[Inter] font-medium text-[16px]">
                  <thead>
                    <tr>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] px-3 h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Wallet Na...</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Balance</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Total Wit...</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Pending...</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>In Proces...</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                      <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                        <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                          <span>Date</span>
                          <Icon icon="prime:sort" className="h-4 w-4" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="overflow-scroll h-full w-full">
                    {TABLE_ROWS.map(
                      (
                        {
                          walletname,
                          balance,
                          totalwithdra,
                          pending,
                          inprocess,
                          date,
                        },
                        index
                      ) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast ? "p-4" : "p-4";
                        return (
                          <tr key={walletname} className="text-[#000000]">
                            <td className={classes}>
                              <div className="flex items-center gap-3">
                                <Typography className=" font-[Inter] font-normal text-[16px]">
                                  {walletname}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <div className="flex flex-col">
                                <Typography className="font-[Inter] font-normal text-[16px]">
                                  {balance}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <div className="w-max">
                                <Typography className="font-[Inter] font-normal text-[16px]">
                                  {totalwithdra}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <Typography className="font-[Inter] font-normal text-[16px]">
                                {pending}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography className="font-[Inter] font-normal text-[16px]">
                                {inprocess}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography className="font-[Inter] font-normal text-[16px]">
                                {date}
                              </Typography>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                  <tfoot className="h-[51px]  border  border-gray-600 rounded-b-md bg-[#F4F4F4]">
                    <tr className="text-[#000000] font-[Inter] font-normal text-[16px]">
                      <td className="px-4 ">Total</td>
                      <td className="px-4 ">₹2,50,000</td>
                      <td className="px-4 ">₹1,80,000</td>
                      <td className="px-4 ">₹2,10,000</td>
                      <td className="px-4 ">₹6,10,000</td>
                      <td className="px-4 ">12-Dec-2023</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          )}
          {stats === "Tournaments" && (
            <div className="w-full min-w-max flex flex-col gap-4">
              {/*Classic Auto Tournaments */}
              <div className="w-full min-w-max text-[#000000]">
                <div className="flex h-[52px] w-full min-w-max border border-gray-600 rounded-t-md  px-2 items-center justify-between bg-[#F4F4F4]">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#A9E5C8] rounded-full w-5 h-5" />
                    <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                      Classic Auto Tournaments
                    </span>
                  </div>

                  <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
                    <div
                      onClick={handleClick}
                      onBlur={handleClick}
                      className="bg-[#F4F4F4] shadow-sm justify-between flex items-center p-1 px-2 h-[32px]  border rounded-lg"
                    >
                      <input
                        placeholder="Search"
                        className={`${
                          isClicked ? "delay-200" : "w-[54px]"
                        } transition-all duration-700 outline-none bg-[#F4F4F4] `}
                        type="text"
                      />
                      <Icon icon="material-symbols:search" width="24" />
                    </div>
                    <div className="shadow-sm w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                      <span>Refresh</span>{" "}
                      <Icon icon="material-symbols:refresh" width="24" />
                    </div>
                    <Menu>
                      <MenuHandler>
                        <div className="shadow-sm p-1 w-[88px] h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                          <span>Sort</span>{" "}
                          <Icon icon="prime:sort" width="24" />
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
                          <Icon icon="fluent-mdl2:time-entry" width="24" /> All
                          Time{" "}
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </div>
                <div className="border p-2 flex flex-col border-l-gray-600 border-r-gray-600 w-full min-w-max table-auto text-center font-[Inter] font-medium text-[16px]">
                  <div className="flex w-full mb-4 justify-between">
                    <div className="flex flex-col justify-center items-center gap-4 w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Name</span>
                      </div>
                      <span>Ludo classic Auto</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                      <div className="m- cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Bet Type</span>
                      </div>
                      <span>Self</span>
                    </div>
                    <div className="flex flex-col mx-2 justify-center items-center gap-4 w-full">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Live Playing</span>
                      </div>
                      <span>23,675</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 mx-2 w-full">
                      <div className="m-2 cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Games Played</span>
                      </div>
                      <span>2,10,434</span>
                    </div>
                    <div className="flex flex-col justify-center items-center  w-full mx-2 gap-4">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Date</span>
                      </div>
                      <span>12-Dec-2023</span>
                    </div>
                  </div>
                  <div className="flex w-full mb-4  justify-between">
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Completed</span>
                      </div>
                      <span>2,00,432</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Dispute</span>
                      </div>
                      <span>2,304</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Resolved</span>
                      </div>
                      <span>9,342</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Commission Earned</span>
                      </div>
                      <span>₹ 21, 32, 000</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Uploads</span>
                      </div>
                      <span>View Documents</span>
                    </div>
                  </div>
                  <div className="flex w-full mb-4  justify-between">
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Players</span>
                      </div>
                      <span>2</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Min Win</span>
                      </div>
                      <span>₹ 50</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 mx-2  w-full">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Max Win</span>
                      </div>
                      <span>₹ 80,000</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Commission</span>
                      </div>
                      <span>5%</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Status</span>
                      </div>
                      <span>Running</span>
                    </div>
                  </div>
                </div>
                <div className="h-[51px] flex justify-between items-center w-full  font-[Inter] font-normal text-[16px]  border  border-gray-600 rounded-b-md bg-[#F4F4F4]">
                  <div className="px-4 flex-1 flex justify-center text-[#000000] font-semibold">
                    Edit
                  </div>
                  <div className="px-4 flex-1  flex justify-center text-[#FF0000] font-semibold">
                    Delete
                  </div>
                </div>
              </div>

              {/*Classic Manual Tournaments */}
              <div className="w-full min-w-max text-[#000000]">
                <div className="flex h-[52px] w-full min-w-max border border-gray-600 rounded-t-md  px-2 items-center justify-between bg-[#F4F4F4]">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#51A8B4] rounded-full w-5 h-5" />
                    <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                      Classic Manual Tournaments
                    </span>
                  </div>

                  <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
                    <div
                      onClick={handleClick}
                      onBlur={handleClick}
                      className="bg-[#F4F4F4] shadow-sm justify-between flex items-center p-1 px-2 h-[32px]  border rounded-lg"
                    >
                      <input
                        placeholder="Search"
                        className={`${
                          isClicked ? "delay-200" : "w-[54px]"
                        } transition-all duration-700 outline-none bg-[#F4F4F4] `}
                        type="text"
                      />
                      <Icon icon="material-symbols:search" width="24" />
                    </div>
                    <div className="shadow-sm w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                      <span>Refresh</span>{" "}
                      <Icon icon="material-symbols:refresh" width="24" />
                    </div>
                    <Menu>
                      <MenuHandler>
                        <div className="shadow-sm p-1 w-[88px] h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                          <span>Sort</span>{" "}
                          <Icon icon="prime:sort" width="24" />
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
                          <Icon icon="fluent-mdl2:time-entry" width="24" /> All
                          Time{" "}
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </div>
                <div className="border p-2 flex flex-col border-l-gray-600 border-r-gray-600 w-full min-w-max table-auto text-center font-[Inter] font-medium text-[16px]">
                  <div className="flex w-full mb-4 justify-between">
                    <div className="flex flex-col justify-center items-center gap-4 w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Name</span>
                      </div>
                      <span>Ludo classic Manual</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                      <div className="m- cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Bet Type</span>
                      </div>
                      <span>Self</span>
                    </div>
                    <div className="flex flex-col mx-2 justify-center items-center gap-4 w-full">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Live Playing</span>
                      </div>
                      <span>23,675</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 mx-2 w-full">
                      <div className="m-2 cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Games Played</span>
                      </div>
                      <span>2,10,434</span>
                    </div>
                    <div className="flex flex-col justify-center items-center  w-full mx-2 gap-4">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Date</span>
                      </div>
                      <span>12-Dec-2023</span>
                    </div>
                  </div>
                  <div className="flex w-full mb-4  justify-between">
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Completed</span>
                      </div>
                      <span>2,00,432</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Dispute</span>
                      </div>
                      <span>2,304</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Resolved</span>
                      </div>
                      <span>9,342</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Commission Earned</span>
                      </div>
                      <span>₹ 21, 32, 000</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Uploads</span>
                      </div>
                      <span>View Documents</span>
                    </div>
                  </div>
                  <div className="flex w-full mb-4  justify-between">
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Players</span>
                      </div>
                      <span>2</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Min Win</span>
                      </div>
                      <span>₹ 50</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 mx-2  w-full">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Max Win</span>
                      </div>
                      <span>₹ 80,000</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Commission</span>
                      </div>
                      <span>5%</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Status</span>
                      </div>
                      <span>Running</span>
                    </div>
                  </div>
                </div>
                <div className="h-[51px] flex justify-between items-center w-full  font-[Inter] font-normal text-[16px]  border  border-gray-600 rounded-b-md bg-[#F4F4F4]">
                  <div className="px-4 flex-1 flex justify-center text-[#000000] font-semibold">
                    Edit
                  </div>
                  <div className="px-4 flex-1  flex justify-center text-[#FF0000] font-semibold">
                    Delete
                  </div>
                </div>
              </div>

              {/*Battle Tournaments */}
              <div className="w-full min-w-max text-[#000000]">
                <div className="flex h-[52px] w-full min-w-max border border-gray-600 rounded-t-md  px-2 items-center justify-between bg-[#F4F4F4]">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#859AFF] rounded-full w-5 h-5" />
                    <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                      Battle Tournaments
                    </span>
                  </div>

                  <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
                    <div
                      onClick={handleClick}
                      onBlur={handleClick}
                      className="bg-[#F4F4F4] shadow-sm justify-between flex items-center p-1 px-2 h-[32px]  border rounded-lg"
                    >
                      <input
                        placeholder="Search"
                        className={`${
                          isClicked ? "delay-200" : "w-[54px]"
                        } transition-all duration-700 outline-none bg-[#F4F4F4] `}
                        type="text"
                      />
                      <Icon icon="material-symbols:search" width="24" />
                    </div>
                    <div className="shadow-sm w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                      <span>Refresh</span>{" "}
                      <Icon icon="material-symbols:refresh" width="24" />
                    </div>
                    <Menu>
                      <MenuHandler>
                        <div className="shadow-sm p-1 w-[88px] h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                          <span>Sort</span>{" "}
                          <Icon icon="prime:sort" width="24" />
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
                          <Icon icon="fluent-mdl2:time-entry" width="24" /> All
                          Time{" "}
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </div>
                <div className="border p-2 flex flex-col border-l-gray-600 border-r-gray-600 w-full min-w-max table-auto text-center font-[Inter] font-medium text-[16px]">
                  <div className="flex w-full mb-4 justify-between">
                    <div className="flex flex-col justify-center items-center gap-4 w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Name</span>
                      </div>
                      <span>Ludo Battle</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                      <div className="m- cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Bet Type</span>
                      </div>
                      <span>Self</span>
                    </div>
                    <div className="flex flex-col mx-2 justify-center items-center gap-4 w-full">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Live Playing</span>
                      </div>
                      <span>23,675</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 mx-2 w-full">
                      <div className="m-2 cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Games Played</span>
                      </div>
                      <span>2,10,434</span>
                    </div>
                    <div className="flex flex-col justify-center items-center  w-full mx-2 gap-4">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Date</span>
                      </div>
                      <span>12-Dec-2023</span>
                    </div>
                  </div>
                  <div className="flex w-full mb-4  justify-between">
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Completed</span>
                      </div>
                      <span>2,00,432</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Dispute</span>
                      </div>
                      <span>2,304</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Resolved</span>
                      </div>
                      <span>9,342</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Commission Earned</span>
                      </div>
                      <span>₹ 21, 32, 000</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Uploads</span>
                      </div>
                      <span>View Documents</span>
                    </div>
                  </div>
                  <div className="flex w-full mb-4  justify-between">
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Players</span>
                      </div>
                      <span>2</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Min Win</span>
                      </div>
                      <span>₹ 50</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 mx-2  w-full">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Max Win</span>
                      </div>
                      <span>₹ 80,000</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Commission</span>
                      </div>
                      <span>5%</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Status</span>
                      </div>
                      <span>Running</span>
                    </div>
                  </div>
                </div>
                <div className="h-[51px] flex justify-between items-center w-full  font-[Inter] font-normal text-[16px]  border  border-gray-600 rounded-b-md bg-[#F4F4F4]">
                  <div className="px-4 flex-1 flex justify-center text-[#000000] font-semibold">
                    Edit
                  </div>
                  <div className="px-4 flex-1  flex justify-center text-[#FF0000] font-semibold">
                    Delete
                  </div>
                </div>
              </div>

              {/*Promotional Tournaments */}
              <div className="w-full min-w-max text-[#000000]">
                <div className="flex h-[52px] w-full min-w-max border border-gray-600 rounded-t-md  px-2 items-center justify-between bg-[#F4F4F4]">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#FFB978] rounded-full w-5 h-5" />
                    <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                      Promotional Tournaments
                    </span>
                  </div>

                  <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
                    <div
                      onClick={handleClick}
                      onBlur={handleClick}
                      className="bg-[#F4F4F4] shadow-sm justify-between flex items-center p-1 px-2 h-[32px]  border rounded-lg"
                    >
                      <input
                        placeholder="Search"
                        className={`${
                          isClicked ? "delay-200" : "w-[54px]"
                        } transition-all duration-700 outline-none bg-[#F4F4F4] `}
                        type="text"
                      />
                      <Icon icon="material-symbols:search" width="24" />
                    </div>
                    <div className="shadow-sm w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                      <span>Refresh</span>{" "}
                      <Icon icon="material-symbols:refresh" width="24" />
                    </div>
                    <Menu>
                      <MenuHandler>
                        <div className="shadow-sm p-1 w-[88px] h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                          <span>Sort</span>{" "}
                          <Icon icon="prime:sort" width="24" />
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
                          <Icon icon="fluent-mdl2:time-entry" width="24" /> All
                          Time{" "}
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </div>
                <div className="border p-2 flex flex-col border-l-gray-600 border-r-gray-600 w-full min-w-max table-auto text-center font-[Inter] font-medium text-[16px]">
                  <div className="flex w-full mb-4 justify-between">
                    <div className="flex flex-col justify-center items-center gap-4 w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Name</span>
                      </div>
                      <span>Ludo Promotional</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                      <div className="m- cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Bet Type</span>
                      </div>
                      <span>Predefined</span>
                    </div>
                    <div className="flex flex-col mx-2 justify-center items-center gap-4 w-full">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Live Playing</span>
                      </div>
                      <span>23,675</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 mx-2 w-full">
                      <div className="m-2 cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Games Played</span>
                      </div>
                      <span>2,10,434</span>
                    </div>
                    <div className="flex flex-col justify-center items-center  w-full mx-2 gap-4">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Date</span>
                      </div>
                      <span>12-Dec-2023</span>
                    </div>
                  </div>
                  <div className="flex w-full mb-4  justify-between">
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Completed</span>
                      </div>
                      <span>2,00,432</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Dispute</span>
                      </div>
                      <span>2,304</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Resolved</span>
                      </div>
                      <span>9,342</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Commission Earned</span>
                      </div>
                      <span>₹ 21, 32, 000</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Uploads</span>
                      </div>
                      <span>View Documents</span>
                    </div>
                  </div>
                  <div className="flex w-full mb-4  justify-between">
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Players</span>
                      </div>
                      <span>2</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Min Win</span>
                      </div>
                      <span>₹ 50</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 mx-2  w-full">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Max Win</span>
                      </div>
                      <span>₹ 80,000</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors   w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Commission</span>
                      </div>
                      <span>5%</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2  w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Status</span>
                      </div>
                      <span>Running</span>
                    </div>
                  </div>
                </div>
                <div className="h-[51px] flex justify-between items-center w-full  font-[Inter] font-normal text-[16px]  border  border-gray-600 rounded-b-md bg-[#F4F4F4]">
                  <div className="px-4 flex-1 flex justify-center text-[#000000] font-semibold">
                    Edit
                  </div>
                  <div className="px-4 flex-1  flex justify-center text-[#FF0000] font-semibold">
                    Delete
                  </div>
                </div>
              </div>
            </div>
          )}
          {stats === "Users" && (
            <div className="w-full min-w-max flex flex-col gap-4">
              {/*Active Users */}
              <div className="w-full min-w-max text-[#000000]">
                <div className="flex h-[52px] w-full min-w-max border border-gray-600 rounded-t-md  px-2 items-center justify-between bg-[#F4F4F4]">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#D9D9D9] rounded-full w-5 h-5" />
                    <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                      Active Users
                    </span>
                  </div>

                  <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
                    <div
                      onClick={handleClick}
                      onBlur={handleClick}
                      className="bg-[#F4F4F4] shadow-sm justify-between flex items-center p-1 px-2 h-[32px]  border rounded-lg"
                    >
                      <input
                        placeholder="Search"
                        className={`${
                          isClicked ? "delay-200" : "w-[54px]"
                        } transition-all duration-700 outline-none bg-[#F4F4F4] `}
                        type="text"
                      />
                      <Icon icon="material-symbols:search" width="24" />
                    </div>
                    <div className="shadow-sm w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                      <span>Refresh</span>{" "}
                      <Icon icon="material-symbols:refresh" width="24" />
                    </div>
                    <Menu>
                      <MenuHandler>
                        <div className="shadow-sm p-1 w-[88px] h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                          <span>Sort</span>{" "}
                          <Icon icon="prime:sort" width="24" />
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
                          <Icon icon="fluent-mdl2:time-entry" width="24" /> All
                          Time{" "}
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </div>
                <div className="border p-2 flex flex-col border-l-gray-600 border-r-gray-600 w-full min-w-max table-auto text-center font-[Inter] font-medium text-[16px]">
                  <div className="flex w-full mb-4 justify-between">
                    <div className="flex flex-col justify-center items-center gap-4 w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Total Active Players</span>
                      </div>
                      <span>23,675</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                      <div className="m- cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Live Playing</span>
                      </div>
                      <span>10,434</span>
                    </div>

                    <div className="flex flex-col justify-center items-center  w-full mx-2 gap-4">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Date</span>
                      </div>
                      <span>12-Dec-2023</span>
                    </div>
                  </div>
                </div>
                <div className="h-[51px] flex justify-between items-center w-full  font-[Inter] font-normal text-[16px]  border  border-gray-600 rounded-b-md bg-[#F4F4F4]">
                  <div className="px-4 flex-1 flex justify-center text-[#000000] font-semibold">
                    Edit
                  </div>
                  <div className="px-4 flex-1  flex justify-center text-[#FF0000] font-semibold">
                    Review
                  </div>
                </div>
              </div>

              {/*New Users */}
              <div className="w-full min-w-max text-[#000000]">
                <div className="flex h-[52px] w-full min-w-max border border-gray-600 rounded-t-md  px-2 items-center justify-between bg-[#F4F4F4]">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#818181] rounded-full w-5 h-5" />
                    <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                      New Users
                    </span>
                  </div>

                  <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
                    <div
                      onClick={handleClick}
                      onBlur={handleClick}
                      className="bg-[#F4F4F4] shadow-sm justify-between flex items-center p-1 px-2 h-[32px]  border rounded-lg"
                    >
                      <input
                        placeholder="Search"
                        className={`${
                          isClicked ? "delay-200" : "w-[54px]"
                        } transition-all duration-700 outline-none bg-[#F4F4F4] `}
                        type="text"
                      />
                      <Icon icon="material-symbols:search" width="24" />
                    </div>
                    <div className="shadow-sm w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                      <span>Refresh</span>{" "}
                      <Icon icon="material-symbols:refresh" width="24" />
                    </div>
                    <Menu>
                      <MenuHandler>
                        <div className="shadow-sm p-1 w-[88px] h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                          <span>Sort</span>{" "}
                          <Icon icon="prime:sort" width="24" />
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
                          <Icon icon="fluent-mdl2:time-entry" width="24" /> All
                          Time{" "}
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </div>
                <div className="border p-2 flex flex-col border-l-gray-600 border-r-gray-600 w-full min-w-max table-auto text-center font-[Inter] font-medium text-[16px]">
                  <div className="flex w-full mb-4 justify-between">
                    <div className="flex flex-col justify-center items-center gap-4 w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Total New Users</span>
                      </div>
                      <span>23,675</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                      <div className="m- cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Live Playing</span>
                      </div>
                      <span>10,434</span>
                    </div>

                    <div className="flex flex-col justify-center items-center  w-full mx-2 gap-4">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Date</span>
                      </div>
                      <span>12-Dec-2023</span>
                    </div>
                  </div>
                </div>
                <div className="h-[51px] flex justify-between items-center w-full  font-[Inter] font-normal text-[16px]  border  border-gray-600 rounded-b-md bg-[#F4F4F4]">
                  <div className="px-4 flex-1 flex justify-center text-[#000000] font-semibold">
                    Edit
                  </div>
                  <div className="px-4 flex-1  flex justify-center text-[#FF0000] font-semibold">
                    Review
                  </div>
                </div>
              </div>

              {/*InActive Users */}
              <div className="w-full min-w-max text-[#000000]">
                <div className="flex h-[52px] w-full min-w-max border border-gray-600 rounded-t-md  px-2 items-center justify-between bg-[#F4F4F4]">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#BDBDBD] rounded-full w-5 h-5" />
                    <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                      Inactive Users
                    </span>
                  </div>

                  <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
                    <div
                      onClick={handleClick}
                      onBlur={handleClick}
                      className="bg-[#F4F4F4] shadow-sm justify-between flex items-center p-1 px-2 h-[32px]  border rounded-lg"
                    >
                      <input
                        placeholder="Search"
                        className={`${
                          isClicked ? "delay-200" : "w-[54px]"
                        } transition-all duration-700 outline-none bg-[#F4F4F4] `}
                        type="text"
                      />
                      <Icon icon="material-symbols:search" width="24" />
                    </div>
                    <div className="shadow-sm w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                      <span>Refresh</span>{" "}
                      <Icon icon="material-symbols:refresh" width="24" />
                    </div>
                    <Menu>
                      <MenuHandler>
                        <div className="shadow-sm p-1 w-[88px] h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                          <span>Sort</span>{" "}
                          <Icon icon="prime:sort" width="24" />
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
                          <Icon icon="fluent-mdl2:time-entry" width="24" /> All
                          Time{" "}
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </div>
                <div className="border p-2 flex flex-col border-l-gray-600 border-r-gray-600 w-full min-w-max table-auto text-center font-[Inter] font-medium text-[16px]">
                  <div className="flex w-full mb-4 justify-between">
                    <div className="flex flex-col justify-center items-center gap-4 w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Total Inactive Users</span>
                      </div>
                      <span>23,675</span>
                    </div>

                    <div className="flex flex-col justify-center items-center  w-full mx-2 gap-4">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Date</span>
                      </div>
                      <span>12-Dec-2023</span>
                    </div>
                  </div>
                </div>
                <div className="h-[51px] flex justify-between items-center w-full  font-[Inter] font-normal text-[16px]  border  border-gray-600 rounded-b-md bg-[#F4F4F4]">
                  <div className="px-4 flex-1 flex justify-center text-[#000000] font-semibold">
                    Edit
                  </div>
                  <div className="px-4 flex-1  flex justify-center text-[#FF0000] font-semibold">
                    Review
                  </div>
                </div>
              </div>

              {/*blocked Users */}
              <div className="w-full min-w-max text-[#000000]">
                <div className="flex h-[52px] w-full min-w-max border border-gray-600 rounded-t-md  px-2 items-center justify-between bg-[#F4F4F4]">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#000000] rounded-full w-5 h-5" />
                    <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                      Blocked Users
                    </span>
                  </div>

                  <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
                    <div
                      onClick={handleClick}
                      onBlur={handleClick}
                      className="bg-[#F4F4F4] shadow-sm justify-between flex items-center p-1 px-2 h-[32px]  border rounded-lg"
                    >
                      <input
                        placeholder="Search"
                        className={`${
                          isClicked ? "delay-200" : "w-[54px]"
                        } transition-all duration-700 outline-none bg-[#F4F4F4] `}
                        type="text"
                      />
                      <Icon icon="material-symbols:search" width="24" />
                    </div>
                    <div className="shadow-sm w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                      <span>Refresh</span>{" "}
                      <Icon icon="material-symbols:refresh" width="24" />
                    </div>
                    <Menu>
                      <MenuHandler>
                        <div className="shadow-sm p-1 w-[88px] h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                          <span>Sort</span>{" "}
                          <Icon icon="prime:sort" width="24" />
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
                          <Icon icon="fluent-mdl2:time-entry" width="24" /> All
                          Time{" "}
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </div>
                <div className="border p-2 flex flex-col border-l-gray-600 border-r-gray-600 w-full min-w-max table-auto text-center font-[Inter] font-medium text-[16px]">
                  <div className="flex w-full mb-4 justify-between">
                    <div className="flex flex-col justify-center items-center gap-4 w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Total Blocked Users</span>
                      </div>
                      <span>23,675</span>
                    </div>

                    <div className="flex flex-col justify-center items-center  w-full mx-2 gap-4">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Date</span>
                      </div>
                      <span>12-Dec-2023</span>
                    </div>
                  </div>
                </div>
                <div className="h-[51px] flex justify-between items-center w-full  font-[Inter] font-normal text-[16px]  border  border-gray-600 rounded-b-md bg-[#F4F4F4]">
                  <div className="px-4 flex-1 flex justify-center text-[#000000] font-semibold">
                    Edit
                  </div>
                  <div className="px-4 flex-1  flex justify-center text-[#FF0000] font-semibold">
                    Review
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardBody>
      </Card>
      <AdminFooter />
    </div>
  );
}

export default SuperDashboard;

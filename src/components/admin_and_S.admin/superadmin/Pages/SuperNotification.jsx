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
];

export function SuperNotification() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="font-[Inter] w-full main-body-right overflow-y-scroll h-screen pb-10 bg-[#ffff] rounded-tl-3xl">
      <div className="bg-[#F4F4F4] rounded-tl-3xl py-1 px-4 flex flex-col gap-4">
        <div className="flex  mt-1  gap-2 text-[#008CF2] font-[Inter] font-medium text-[12px]">
          <span className="underline">Super Admin Control Panel </span>
          <span>&gt;&gt;</span>
          <span className="underline">Menu</span>
          <span>&gt;&gt;</span>
          <span className="underline">Dashboard</span>
          <span>&gt;&gt;</span>
          <span className="underline">Notification</span>
        </div>
        <h3 className="text-[#0F002B] text-lg">
          <span className="underline">N</span>otification{" "}
        </h3>
      </div>
      <div className="flex px-3 py-2 items-center justify-between bg-[#EEEEEE]">
        <p className="text-[#000000] font-medium text-xs">
          Detail : Super Admin Dashboard
        </p>
        <Icon icon="charm:cross" width="12" />
      </div>
      <Card className="text-[#000000] table-auto  w-full px-4">
        <CardBody className=" p-0 mt-3 h-full w-full">
          <div className="flex gap-3 justify-start">
            <div className="flex border-gray-200 border shadow-md rounded-3xl cursor-pointer items-center justify-between px-3 gap-2 h-[32px]">
              <span className="font-[Inter] text-[12px] ">
                Approve Pending Withdrawals
              </span>
              <Icon icon="icon-park-outline:message-sent" width="24" />
            </div>

            <div className="flex border-gray-200 border shadow-md rounded-3xl cursor-pointer items-center justify-between px-3  w-[159px] h-[32px]">
              <span className="font-[Inter] text-[12px] ">
                Deposite To Wallet
              </span>
              <Icon icon="icon-park:plus" width="20" />
            </div>
          </div>

          {/* Withdrawal walet */}
          <div className="mt-4">
            <div className="flex h-[52px] border border-gray-600 rounded-t-md  px-2 items-center justify-between bg-[#F4F4F4]">
              <div className="flex items-center gap-2">
                <div className="bg-[#A9E5C8] rounded-full w-5 h-5" />
                <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                  Pending Withdrawals
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
                <div className="shadow-sm w-[78px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                  <span>Edit</span>{" "}
                  <Icon icon="circum:edit"  width="24" />
                </div>
                <Menu>
                  <MenuHandler>
                    <div className="shadow-sm p-1 w-[88px] h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
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
            <table className="border mb-10  overflow-y-scroll border-l-gray-600  border-r-gray-600 h-full w-full min-w-max table-auto text-left font-[Inter] font-medium text-[16px]">
              <thead>
                <tr>
                  <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                    <div className="w-[139.57px] px-3 h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                      <span>Name</span>
                      <Icon icon="prime:sort" className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                    <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                      <span>Mobile N...</span>
                      <Icon icon="prime:sort" className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                    <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                      <span>ID</span>
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
                      <span>Withdraw...</span>
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
                <tr className="text-[#000000] font-bold font-[Inter] text-[16px]">
                  <td className="px-4 ">Total</td>
                  <td className="px-4 ">32</td>
                  <td className="px-4 ">-</td>
                  <td className="px-4 ">₹2,10,000</td>
                  <td className="px-4 ">₹6,10,000</td>
                  <td className="px-4 ">-</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* deposite wallet */}
          <div className="overflow-y-scroll table-auto">
            <div className="flex h-[52px] border border-gray-600 rounded-t-md  px-2 items-center justify-between bg-[#F4F4F4]">
              <div className="flex items-center gap-2">
                <div className="bg-[#A9E5C8] rounded-full w-5 h-5" />
                <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
                  Deposit History
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
                <div className="shadow-sm w-[78px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                  <span>Edit</span>{" "}
                  <Icon icon="circum:edit"  width="24" />
                </div>
         
                <Menu>
                  <MenuHandler>
                    <div className="shadow-sm p-1 w-[88px] h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
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
            <table className="border mb-10  overflow-y-scroll border-l-gray-600 border-r-gray-600 h-full w-full min-w-max table-auto text-left font-[Inter] font-medium text-[16px]">
              <thead>
                <tr>
                  <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                    <div className="w-[139.57px] px-3 h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                      <span>UTR</span>
                      <Icon icon="prime:sort" className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                    <div className="w-[170px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                      <span>Deposited Am...</span>
                      <Icon icon="prime:sort" className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                    <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                      <span>Status</span>
                      <Icon icon="prime:sort" className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                    <div className="w-[139.57px] h-[35px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]">
                      <span>To Wallet</span>
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
                            {date}
                          </Typography>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
              <tfoot className="h-[51px] border  border-gray-600 rounded-b-md bg-[#F4F4F4]">
                <tr className="text-[#000000] font-[Inter] font-bold text-[16px]">
                  <td className="px-4 ">Total</td>
                  <td className="px-4 ">₹2,50,000</td>
                  <td className="px-4 ">-</td>
                  <td className="px-4 ">-</td>
                  <td className="px-4 ">-</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </CardBody>
      </Card>
      <AdminFooter/>
    </div>
  );
}

export default SuperNotification;

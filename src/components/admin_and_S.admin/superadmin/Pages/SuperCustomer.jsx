import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
import Stats from "../../admin/Common.jsx/Stats";
import {
  Card,
  Typography,
  CardBody,
  MenuList,
  Menu,
  MenuHandler,
  MenuItem,
} from "@material-tailwind/react";
import AdminFooter from "../../admin/Common.jsx/AdminFooter";

const TABLE_HEAD = [
  "Name",
  "Earning",
  "Deposit",
  "Withdrawal",
  "Total Games",
  "Verified",
  "Date",
];

const TABLE_ROWS = [
  {
    name: "John Doe",
    minimum: "₹ 50",
    maximum: "₹ 80,000",
    commission: "2.5%",
    totalgame: "32",
    verified: "Yes",
    onboard: "22/12/2014",
  },
  {
    name: "Jane Smith",
    minimum: "₹ 50",
    maximum: "₹ 80,000",
    commission: "3.5%",
    totalgame: "32",
    verified: "Yes",
    onboard: "23/12/2014",
  },
  {
    name: "Alice Johnson",
    minimum: "₹ 50",
    maximum: "₹ 80,000",
    commission: "4.5%",
    totalgame: "32",
    verified: "Yes",
    onboard: "24/12/2014",
  },
  {
    name: "Bob Brown",
    minimum: "₹ 50",
    maximum: "₹ 80,000",
    commission: "2.5%",
    totalgame: "32",
    verified: "Yes",
    onboard: "25/12/2014",
  },
  
];

function SuperCustomer() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  const handleClose = () => {
    setIsClicked(false);
  };
  return (
    <div className="font-[Inter] w-full main-body-right overflow-y-scroll h-screen bg-[#ffff] rounded-tl-3xl pb-10">
      <div className="bg-[#F4F4F4] rounded-tl-3xl py-1 px-4 flex flex-col gap-4">
        <div className="flex  mt-1  gap-2 text-[#008CF2] font-[Inter] font-medium text-[12px]">
          <span className="underline">Admin Control Panel </span>
          <span>&gt;&gt;</span>
          <span className="underline">Menu</span>
          <span>&gt;&gt;</span>
          <span className="underline">Users</span>
        </div>
        <h3 className="text-[#0F002B] text-lg">
          <span className="underline">C</span>ustomer{" "}
        </h3>
      </div>
      <div className="flex px-3 py-2 items-center justify-between bg-[#EEEEEE]">
        <p className="text-[#000000] font-medium text-xs">
          Detail : Customer name and all...
        </p>
        <Icon icon="charm:cross" width="12" />
      </div>
      <Card className="table-auto overflow-scroll h-full w-full py-1 px-4">
        <CardBody className=" px-0 h-full w-full">
          <div className="flex justify-between">
            <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
              All Deposits
            </span>
            <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
              <div
                onClick={handleClick}
                onBlur={handleClose}
                className="bg-[#F4F4F4] justify-between flex items-center p-1 px-2 h-[32px]  border rounded-lg"
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
              <div className="w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                <span>Refresh</span>{" "}
                <Icon icon="material-symbols:refresh" width="24" />
              </div>
              <div className="shadow-sm w-[78px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                <span>Edit</span> <Icon icon="circum:edit" width="24" />
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
                    <Icon icon="fluent-mdl2:calendar-year" width="24" /> Yearly
                  </MenuItem>
                  <MenuItem className="font-[Inter] text-[16px] text-[#0F002B] font-medium flex justify-start gap-3 items-center">
                    <Icon icon="fluent-mdl2:time-entry" width="24" /> All Time{" "}
                  </MenuItem>
                </MenuList>
              </Menu>
              <Stats />
            </div>
          </div>
          <table className="mt-4 w-full min-w-max table-auto text-left font-[Inter] font-medium text-[16px]">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer   p-2 transition-colors  rounded-lg"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]"
                    >
                      {head} <Icon icon="prime:sort" width="19" />
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="w-full">
              {TABLE_ROWS.map(
                (
                  {
                    minimum,
                    maximum,
                    totalgame,
                    verified,
                    commission,
                    name,
                    onboard,
                  },
                  index
                ) => {
                  return (
                    <tr className="text-[#000000] ">
                      <td className="p-4">
                        <div className="flex flex-col">
                          <Typography className="font-[Inter] font-medium text-[16px]">
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="w-max">
                          <Typography className="font-[Inter] font-medium text-[16px]">
                            {minimum}
                          </Typography>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Typography className="font-[Inter] font-medium text-[16px]">
                            {maximum}
                          </Typography>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Typography className="font-[Inter] font-medium text-[16px]">
                            {commission}
                          </Typography>
                        </div>
                      </td>
                      <td className="p-4">
                        <Typography className="font-[Inter] font-medium text-[16px]">
                          {totalgame}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography className="font-[Inter] font-medium text-[16px]">
                          {verified}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography className="font-[Inter] font-medium text-[16px]">
                          {onboard}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <AdminFooter />
    </div>
  );
}

export default SuperCustomer;

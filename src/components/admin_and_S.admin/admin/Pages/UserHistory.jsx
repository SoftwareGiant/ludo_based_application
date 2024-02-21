import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Stats from "../Common.jsx/Stats";

const TABLE_HEAD = ["UID", "Name", "Register Date", "Account Status"];

const TABLE_ROWS = [
  {
    uid: "1234",
    name: "gaurav soni",
    registered: "Joined today",
    status: "Active",
  },
  {
    uid: "2345",
    name: "John Doe",
    registered: "Joined yesterday",
    status: "Inactive",
  },
  {
    uid: "3456",
    name: "Jane Smith",
    registered: "Joined last week",
    status: "Blocked",
  },
  {
    uid: "4567",
    name: "Alice Johnson",
    registered: "Joined last month",
    status: "Active",
  },
  {
    uid: "5678",
    name: "Bob Williams",
    registered: "Joined last year",
    status: "Inactive",
  },
  {
    uid: "6789",
    name: "Eve Brown",
    registered: "Joined 2 years ago",
    status: "Blocked",
  },
  {
    uid: "7890",
    name: "Michael Davis",
    registered: "Joined 3 years ago",
    status: "Active",
  },
  {
    uid: "8901",
    name: "Sarah Miller",
    registered: "Joined 4 years ago",
    status: "Inactive",
  },
  {
    uid: "9012",
    name: "David Wilson",
    registered: "Joined 5 years ago",
    status: "Blocked",
  },
  {
    uid: "0123",
    name: "Emily Anderson",
    registered: "Joined 6 years ago",
    status: "Active",
  },
  // Add more objects here with similar structure
];

export function UserHistory() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="font-[Inter] w-full min-h-screen bg-[#ffff] rounded-tl-3xl">
      <div className="bg-[#F4F4F4] rounded-tl-3xl py-1 px-4 flex flex-col gap-4">
        <div className="flex  mt-1  gap-2 text-[#008CF2] font-[Inter] font-medium text-[12px]">
          <span className="underline">Admin Control Panel </span>
          <span>&gt;&gt;</span>
          <span className="underline">Menu</span>
          <span>&gt;&gt;</span>
          <span className="underline">User History</span>
        </div>
        <h3 className="text-[#0F002B] text-lg">
          <span className="underline">U</span>ser{" "}
          <span className="underline">H</span>istory
        </h3>
      </div>
      <div className="flex px-3 py-2 items-center justify-between bg-[#EEEEEE]">
        <p className="text-[#000000] font-medium text-xs">
          Detail : Full detail of all users registered on this application.
        </p>
        <Icon icon="charm:cross" width="12" />
      </div>
      <Card className="overflow-scroll h-full w-full py-1 px-4">
        <CardBody className=" px-0">
          <div className="flex justify-between">
            <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
              Registered Users Details
            </span>
            <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
              <div
                onClick={handleClick}
                onBlur={handleClick}
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
                <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                  <Typography className="flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 text-[#000000] font-[Inter] font-medium text-[16px]">
                    UID
                    <Icon
                      icon="prime:sort"
                      strokeWidth={2}
                      className="h-4 w-4"
                    />
                  </Typography>
                </th>
                <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                  <Typography className="flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 text-[#000000] font-[Inter] font-medium text-[16px]">
                    Name
                  </Typography>
                </th>
                <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                  <Typography className="flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 text-[#000000] font-[Inter] font-medium text-[16px]">
                    Register Date
                    <Icon
                      icon="prime:sort"
                      strokeWidth={2}
                      className="h-4 w-4"
                    />
                  </Typography>
                </th>
                <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                  <Menu>
                    <MenuHandler>
                      <Typography className="flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 text-[#000000] font-[Inter] font-medium text-[16px]">
                        Account Status
                        <div className="flex justify-center items-center w-[19px] h-[19px] relative ">
                          <div className="bg-[#FEAD3A] w-[6.33px] absolute top-0 right-0 h-[6.33px]  rounded-full"></div>
                          <Icon
                            icon="oi:caret-bottom"
                            className="h-[3.96px] w-[7.92px] -mt-2 -ml-2"
                          />
                        </div>
                      </Typography>
                    </MenuHandler>
                    <MenuList className="flex flex-col gap-3">
                      <MenuItem className="flex items-center gap-2 font-[Inter] font-medium text-[#0F002B] text-[16px] ">
                        {" "}
                        <Icon icon="ri:walk-fill" width="24"/> Active Accounts
                      </MenuItem>
                      <MenuItem className="flex items-center gap-2 font-[Inter] font-medium text-[#0F002B] text-[16px]">
                        <Icon icon="fa6-solid:bed"  width="24"/> Inactive Accounts
                      </MenuItem>
                      <MenuItem className="flex items-center gap-2 font-[Inter] font-medium text-[#0F002B] text-[16px]">
                        <Icon icon="fluent:presence-blocked-10-regular"  width="24"/>{" "}
                        Blocked Accounts
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ uid, name, registered, status }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4";
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Typography className="font-[Inter] font-medium text-[16px]">
                          {uid}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography className="font-[Inter] font-medium text-[16px]">
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Typography className="font-[Inter] font-medium text-[16px]">
                          {registered}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div
                        className={`rounded-xl flex justify-center items-center w-[87px] h-[19px] ${
                          status === "Active"
                            ? "bg-[#0F002B] text-[#FFFFFF] "
                            : status === "Inactive"
                            ? "bg-gray-400 text-[#FFFFFF] "
                            : "bg-gray-200 text-[#000000] "
                        }`}
                      >
                        <Typography className="font-[Inter] font-normal text-[10px]  ">
                          {status}
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
    </div>
  );
}

export default UserHistory;

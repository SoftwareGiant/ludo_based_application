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
  MenuList,
  Menu,
  MenuHandler,
  MenuItem,
} from "@material-tailwind/react";
import Stats from "../Common.jsx/Stats";
import AdminFooter from "../Common.jsx/AdminFooter";

const TABLE_HEAD = ["UID", "Name", "Mobile Number", "Onboarding Date"];

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

export function NewOnboard() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="font-[Inter] w-full main-body-right overflow-y-scroll h-screen bg-[#ffff] rounded-tl-3xl">
      <div className="bg-[#F4F4F4] rounded-tl-3xl py-1 px-4 flex flex-col gap-4">
        <div className="flex  mt-1  gap-2 text-[#008CF2] font-[Inter] font-medium text-[12px]">
          <span className="underline">Admin Control Panel </span>
          <span>&gt;&gt;</span>
          <span className="underline">Menu</span>
          <span>&gt;&gt;</span>
          <span className="underline">New Onboard</span>
        </div>
        <h3 className="text-[#0F002B] text-lg">
          <span className="underline">N</span>ew{" "}
          <span className="underline">O</span>nboard
        </h3>
      </div>
      <div className="flex px-3 py-2 items-center justify-between bg-[#EEEEEE]">
        <p className="text-[#000000] font-medium text-xs">
          Detail : Full detail of new users onboarding on the platform.
        </p>
        <Icon icon="charm:cross" width="12" />
      </div>
      <Card className="table-auto overflow-scroll h-full w-full py-1 px-4">
        <CardBody className=" px-0 h-full w-full">
          <div className="flex justify-between">
            <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
              New Users
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
          <table className="mt-4 h-full w-full min-w-max table-auto text-left font-[Inter] font-medium text-[16px]">
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
                      {head}{" "}
                      {(index == 0 || index === 3) && (
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
            <tbody className=" h-full w-full">
              {TABLE_ROWS.map(({ uid, name, mobno, onboard }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4";
                return (
                  <tr key={mobno} className="text-[#000000] ">
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
                          {mobno}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography className="font-[Inter] font-medium text-[16px]">
                        {onboard}
                      </Typography>
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

export default NewOnboard;

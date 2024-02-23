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

const TABLE_HEAD = ["GID", "Game Type", "Time Stamp", "Status"];

const TABLE_ROWS = [
  {
    uid: "1234",
    gametype: "Open Challenge",
    timestamp: "Started 5min ago",
    status: "Pending",
  },
  {
    uid: "2333",
    gametype: "Listed Battle",
    timestamp: "Completed 55sec ago",
    status: "Approved",
  },
  // Add 28 more objects
  {
    uid: "3456",
    gametype: "Open Challenge",
    timestamp: "Started 10min ago",
    status: "Pending",
  },
  {
    uid: "4567",
    gametype: "Listed Battle",
    timestamp: "Completed 2min ago",
    status: "Approved",
  },
  {
    uid: "5678",
    gametype: "Open Challenge",
    timestamp: "Started 15min ago",
    status: "Pending",
  },
  {
    uid: "6789",
    gametype: "Listed Battle",
    timestamp: "Completed 3min ago",
    status: "Approved",
  },
  {
    uid: "7890",
    gametype: "Open Challenge",
    timestamp: "Started 20min ago",
    status: "Pending",
  },
  {
    uid: "8901",
    gametype: "Listed Battle",
    timestamp: "Completed 4min ago",
    status: "Approved",
  },
  {
    uid: "9012",
    gametype: "Open Challenge",
    timestamp: "Started 25min ago",
    status: "Pending",
  },
  {
    uid: "0123",
    gametype: "Listed Battle",
    timestamp: "Completed 5min ago",
    status: "Approved",
  },
  {
    uid: "2345",
    gametype: "Open Challenge",
    timestamp: "Started 30min ago",
    status: "Pending",
  },
  {
    uid: "3456",
    gametype: "Listed Battle",
    timestamp: "Completed 6min ago",
    status: "Approved",
  },
  {
    uid: "4567",
    gametype: "Open Challenge",
    timestamp: "Started 35min ago",
    status: "Pending",
  },
  {
    uid: "5678",
    gametype: "Listed Battle",
    timestamp: "Completed 7min ago",
    status: "Approved",
  },
  {
    uid: "6789",
    gametype: "Open Challenge",
    timestamp: "Started 40min ago",
    status: "Pending",
  },
  {
    uid: "7890",
    gametype: "Listed Battle",
    timestamp: "Completed 8min ago",
    status: "Approved",
  },
  {
    uid: "8901",
    gametype: "Open Challenge",
    timestamp: "Started 45min ago",
    status: "Pending",
  },
  {
    uid: "9012",
    gametype: "Listed Battle",
    timestamp: "Completed 9min ago",
    status: "Approved",
  },
  {
    uid: "0123",
    gametype: "Open Challenge",
    timestamp: "Started 50min ago",
    status: "Pending",
  },
  {
    uid: "2345",
    gametype: "Listed Battle",
    timestamp: "Completed 10min ago",
    status: "Approved",
  },
  {
    uid: "3456",
    gametype: "Open Challenge",
    timestamp: "Started 55min ago",
    status: "Pending",
  },
  {
    uid: "4567",
    gametype: "Listed Battle",
    timestamp: "Completed 11min ago",
    status: "Approved",
  },
  {
    uid: "5678",
    gametype: "Open Challenge",
    timestamp: "Started 60min ago",
    status: "Pending",
  },
  {
    uid: "6789",
    gametype: "Listed Battle",
    timestamp: "Completed 12min ago",
    status: "Approved",
  },
  {
    uid: "7890",
    gametype: "Open Challenge",
    timestamp: "Started 65min ago",
    status: "Pending",
  },
  {
    uid: "8901",
    gametype: "Listed Battle",
    timestamp: "Completed 13min ago",
    status: "Approved",
  },
  {
    uid: "9012",
    gametype: "Open Challenge",
    timestamp: "Started 70min ago",
    status: "Pending",
  },
  {
    uid: "0123",
    gametype: "Listed Battle",
    timestamp: "Completed 14min ago",
    status: "Approved",
  },
  {
    uid: "2345",
    gametype: "Open Challenge",
    timestamp: "Started 75min ago",
    status: "Pending",
  },
  {
    uid: "3456",
    gametype: "Listed Battle",
    timestamp: "Completed 15min ago",
    status: "Approved",
  },
];

export function GameVerificaion() {
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
          <span className="underline">Game History</span>
        </div>
        <h3 className="text-[#0F002B] text-lg">
          <span className="underline">G</span>ame{" "}
          <span className="underline">H</span>istory
        </h3>
      </div>
      <div className="flex px-3 py-2 items-center justify-between bg-[#EEEEEE]">
        <p className="text-[#000000] font-medium text-xs">
          Detail : Full detail of ongoing games and past games.
        </p>
        <Icon icon="charm:cross" width="12" />
      </div>
      <Card className="overflow-scroll table-auto h-full w-full py-1 px-4">
        <CardBody className=" px-0">
          <div className="flex justify-between">
            <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
              New games and recent game history
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
                      {(index == 0 || index === 2) && (
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
            <tbody>
              {TABLE_ROWS.map(({ uid, gametype, timestamp, status }, index) => {
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
                          {gametype}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Typography className="font-[Inter] font-medium text-[16px]">
                          {timestamp}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div
                        className={`rounded-xl flex justify-center items-center w-[87px] h-[19px] ${
                          status === "Pending" ? "bg-[#60E560]" : "bg-[#FF7676]"
                        }`}
                      >
                        <Typography className="font-[Inter] font-normal text-[10px] text-[#FFFFFF] ">
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

export default GameVerificaion;

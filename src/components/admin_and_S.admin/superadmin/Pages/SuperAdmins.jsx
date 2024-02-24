import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
import Stats from "../../admin/Common.jsx/Stats";
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
import AdminFooter from "../../admin/Common.jsx/AdminFooter";

const TABLE_HEAD = ["Name", "Number", "Position", "Status", "Onboarding Date"];

const TABLE_ROWS = [
  {
    position: "Admin",
    status: "Verified",
    name: "John Doe",
    mobno: "7610981931",
    onboard: "22/12/2014",
  },
  {
    position: "Super Admin",
    status: "Verified",
    name: "Jane Smith",
    mobno: "7610981932",
    onboard: "23/12/2014",
  },
  {
    position: "Super Admin",
    status: "Verified",
    name: "Alice Johnson",
    mobno: "7610981933",
    onboard: "24/12/2014",
  },
  {
    position: "Super Admin",
    status: "Verified",
    name: "Bob Brown",
    mobno: "7610981934",
    onboard: "25/12/2014",
  },
];

export function SuperAdmins() {
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
          <span className="underline">Admins</span>
        </div>
        <h3 className="text-[#0F002B] text-lg">
          <span className="underline">A</span>dmins{" "}
        </h3>
      </div>
      <div className="flex px-3 py-2 items-center justify-between bg-[#EEEEEE]">
        <p className="text-[#000000] font-medium text-xs">
          Detail : Details of all admins and super admin
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
                ({ position, status, name, mobno, onboard }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast ? "p-4" : "p-4";
                  return (
                    <tr key={mobno} className="text-[#000000] ">
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
                        <div className="flex items-center gap-3">
                          <Typography className="font-[Inter] font-medium text-[16px]">
                            {position}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Typography className="font-[Inter] font-medium text-[16px]">
                            {status}
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
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <AdminFooter/>
    </div>
  );
}

export default SuperAdmins;

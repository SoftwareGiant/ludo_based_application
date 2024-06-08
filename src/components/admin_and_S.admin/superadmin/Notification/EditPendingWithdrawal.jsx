import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
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
import Stats from "../../admin/Common.jsx/Stats";
import PendingwithdrawalCard from "./PendingwithdrawalCard";
import { formatDate } from "../../Functions/formateDate";
const TABLE_HEAD = [
  "Name",
  "Mobile Number",
  "ID",
  "Balance",
  "Withdrawal",
  "Date",
  "Status",
  "Edit",
];

const EditPendingWithdrawal = ({ TABLE_ROWS, setPage }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  const handleClose = () => {
    setIsClicked(false);
  };
  return (
    <div>
      <div className="bg-[#F4F4F4]  py-1 px-4 flex pt-2 items-center justify-between  gap-4">
        <h3 className="text-[#0F002B] text-lg">
          <span className="underline">E</span>dit{" "}
          <span className="underline">P</span>ending{" "}
          <span className="underline">W</span>ithdrawal{" "}
        </h3>
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
          <div
            onClick={() => setPage("notification")}
            className="shadow-sm  h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg"
          >
            <span>Collapse</span> <Icon icon="iconoir:collapse" width="24" />
          </div>
        </div>
      </div>
      <Card className="table-auto overflow-scroll h-full w-full py-1 px-4">
        <CardBody className=" px-0 h-full w-full">
          <table className=" w-full min-w-max table-auto text-left font-[Inter] font-medium text-[16px]">
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
              {TABLE_ROWS.map((item) => {
                return (
                  <tr key={item._id} className="text-[#000000] ">
                    <td className="p-4">
                      <div className="flex flex-col">
                        <Typography className="font-[Inter] font-medium text-[16px]">
                          {item._id?.slice(-6)}
                        </Typography>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="w-max">
                        <Typography className="font-[Inter] font-medium text-[16px]">
                          {item.user.mobileNo}
                        </Typography>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Typography className="font-[Inter] font-medium text-[16px]">
                          {item._id?.slice(-6)}
                        </Typography>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Typography className="font-[Inter] font-medium text-[16px]">
                          {item.user?.walletDetails?.totalAmount}
                        </Typography>
                      </div>
                    </td>
                    <td className="p-4">
                      <Typography className="font-[Inter] font-medium text-[16px]">
                        {item.amount}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography className="font-[Inter] font-medium text-[16px]">
                        {formatDate(item.timestamp)}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography className="font-[Inter] font-medium text-[16px]">
                        {item.status}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <PendingwithdrawalCard
                        name={item._id?.slice(-6)}
                        mobileno={item.user.mobileNo}
                        id={item._id}
                        balance={item.user?.walletDetails?.totalAmount}
                        withdrawal={item.amount}
                        date={formatDate(item.timestamp)}
                        status={item.status}
                      />
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
};

export default EditPendingWithdrawal;

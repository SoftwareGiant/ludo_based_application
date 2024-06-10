import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllWithdrawalRequests,
  selectAllWithdrawalRequests,
  selectAllWithdrawalRequestsStatus,
} from "../AdminSlice/withdrawlSlice";
import AdminFooter from "../Common.jsx/AdminFooter";
import PageLoader from "../../../MainLayout/PageLoader";
import WithdrawStatusCard from "../Common.jsx/WithdrawStatusCard";
import { Link } from "react-router-dom";

function Withdraw() {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const withdrawalRequests = useSelector(selectAllWithdrawalRequests);
  const status = useSelector(selectAllWithdrawalRequestsStatus);
  console.log(withdrawalRequests);

  useEffect(() => {
    dispatch(fetchAllWithdrawalRequests());
  }, [dispatch]);
  const RefreshWithdrawalReq = () => {
    dispatch(fetchAllWithdrawalRequests());
  };
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  if (status === "loading") {
    return <PageLoader full={true} />;
  }
  return (
    <div className="font-[Inter] w-full main-body-right overflow-y-scroll h-screen bg-[#ffff] rounded-tl-3xl">
      <div className="bg-[#F4F4F4] rounded-tl-3xl py-1 px-4 flex flex-col gap-4">
        <div className="flex  mt-1  gap-2 text-[#008CF2] font-[Inter] font-medium text-[12px]">
          <Link to="/newonboard" className="underline">
            Admin Control Panel{" "}
          </Link>
          <span>&gt;&gt;</span>
          <span className="underline">Menu</span>
          <span>&gt;&gt;</span>
          <span className="underline">Withdraw History</span>
        </div>
        <h3 className="text-[#0F002B] text-lg">
          <span className="underline">W</span>thdraw{" "}
          <span className="underline">H</span>istory
        </h3>
      </div>
      <div className="flex px-3 py-2 items-center justify-between bg-[#EEEEEE]">
        <span className="text-[#000000] font-medium text-xs">
          Detail : Full detail of all withdraw transaction performed.
        </span>
        <Icon icon="charm:cross" width="12" />
      </div>
      <Card className="overflow-scroll table-auto h-full w-full py-1 px-4">
        <CardBody className=" px-0">
          <div className="flex justify-between items-center">
            <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
              Withdraw Transaction Details
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
                    Sort <Icon icon="prime:sort" width="24" />
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
                    TID
                    <Icon
                      icon="prime:sort"
                      strokeWidth={2}
                      className="h-4 w-4"
                    />
                  </Typography>
                </th>
                <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                  <Typography className="flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 text-[#000000] font-[Inter] font-medium text-[16px]">
                    Amount
                  </Typography>
                </th>
                <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                  <Typography className="flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 text-[#000000] font-[Inter] font-medium text-[16px]">
                    Time Stamp
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
                        <div className="flex justify-between items-center w-full">
                          Transacion Status
                          <Icon icon="oi:caret-bottom" />
                        </div>
                      </Typography>
                    </MenuHandler>
                    <MenuList className="flex flex-col gap-3">
                      <MenuItem className="flex items-center gap-2 font-[Inter] font-medium text-[#0F002B] text-[16px] ">
                        {" "}
                        <Icon icon="ep:success-filled" width="24" /> Successful
                      </MenuItem>
                      <MenuItem className="flex items-center gap-2 font-[Inter] font-medium text-[#0F002B] text-[16px]">
                        <Icon icon="mdi:receipt-text-pending" width="24" />{" "}
                        Pending
                      </MenuItem>
                      <MenuItem className="flex items-center gap-2 font-[Inter] font-medium text-[#0F002B] text-[16px]">
                        <Icon icon="ic:sharp-error" width="24" /> Failed
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </th>
              </tr>
            </thead>
            <tbody>
              {withdrawalRequests?.map((val) => {
                return (
                  <tr key={val._id}>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <p className="font-[Inter] font-medium text-[16px]">
                          {val._id}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <p className="font-[Inter] font-medium text-[16px]">
                          {val.amount}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="w-max">
                        <p className="font-[Inter] font-medium text-[16px]">
                          {formatDate(val.timestamp)}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <WithdrawStatusCard
                        val={val}
                        RefreshWithdrawalReq={RefreshWithdrawalReq}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <AdminFooter />
    </div>
  );
}

export default Withdraw;

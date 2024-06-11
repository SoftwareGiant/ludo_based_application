import React, { useEffect, useState } from "react";
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
import EditPendingWithdrawal from "../Notification/EditPendingWithdrawal";
import EditDeposite from "../Notification/EditDeposite";
import { fetchWithdrawals } from "../SuperAdminSlices/withdrawalsSlice";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../Functions/formateDate";

const TABLE_ROWS = [
  {
    name: "User#1 Name",
    mobileno: "761293939393",
    id: "1122",
    balance: "₹2,00,000",
    withdrawal: "₹2,000",
    utr: "UBSD33438HH",
    depositeamount: "₹30,000",
    status: "pending",
    towallet: "Wallet #1",
    date: "12-Dec-2023",
  },
  {
    name: "User#2 Name",
    mobileno: "761293939394",
    id: "1123",
    balance: "₹1,50,000",
    withdrawal: "₹1,000",
    utr: "UBSD33438HI",
    depositeamount: "₹25,000",
    status: "completed",
    towallet: "Wallet #2",
    date: "15-Dec-2023",
  },
  {
    name: "User#3 Name",
    mobileno: "761293939395",
    id: "1124",
    balance: "₹1,80,000",
    withdrawal: "₹1,500",
    utr: "UBSD33438HJ",
    depositeamount: "₹20,000",
    status: "rejected",
    towallet: "Wallet #3",
    date: "18-Dec-2023",
  },
  {
    name: "User#4 Name",
    mobileno: "761293939396",
    id: "1125",
    balance: "₹2,50,000",
    withdrawal: "₹2,500",
    utr: "UBSD33438HK",
    depositeamount: "₹35,000",
    status: "completed",
    towallet: "Wallet #4",
    date: "20-Dec-2023",
  },
  {
    name: "User#5 Name",
    mobileno: "761293939397",
    id: "1126",
    balance: "₹2,20,000",
    withdrawal: "₹2,200",
    utr: "UBSD33438HL",
    depositeamount: "₹28,000",
    status: "pending",
    towallet: "Wallet #5",
    date: "22-Dec-2023",
  },
];

export function SuperNotification() {
  const [isClicked, setIsClicked] = useState(false);
  const [page, setPage] = useState("notification");
  const dispatch = useDispatch();
  const withdrawals = useSelector((state) => state.allwithdrawal.withdrawals);
  const status = useSelector((state) => state.allwithdrawal.status);
  console.log(withdrawals);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchWithdrawals());
    }
  }, [status, dispatch]);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  if (withdrawals===undefined){
    return <div>Loading...</div>;
  }
  const sumTotalamount = () => {
    const sum = withdrawals.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.user?.walletDetails?.totalAmount,
      0
    );
    return sum;
  };

  const sumWithdrawalamount = () => {
    const sum = withdrawals.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      0
    );
    return sum;
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
          <span
            onClick={() => setPage("notification")}
            className="underline cursor-pointer"
          >
            Notification
          </span>
          {page === "withdraw" && (
            <>
              <span>&gt;&gt;</span>
              <span className="underline">Edit (Pending Withdrawal)</span>
            </>
          )}
          {page === "deposite" && (
            <>
              <span>&gt;&gt;</span>
              <span className="underline">Edit (Deposit)</span>
            </>
          )}
        </div>
      </div>

      {page === "notification" && (
        <div>
          <div className="bg-[#F4F4F4]  py-1 px-4 flex flex-col gap-4">
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
                <div
                  onClick={() => setPage("withdraw")}
                  className="flex border-gray-200 border shadow-md rounded-3xl cursor-pointer items-center justify-between px-3 gap-2 h-[32px]"
                >
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
                    <div
                      onClick={() => setPage("withdraw")}
                      className="shadow-sm w-[78px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg"
                    >
                      <span>Edit</span> <Icon icon="circum:edit" width="24" />
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
                    {withdrawals !== undefined &&
                      withdrawals?.map((item) => {
                        return (
                          <tr key={item._id} className="text-[#000000]">
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <Typography className=" font-[Inter] font-normal text-[16px]">
                                  {item._id?.slice(-6)}
                                </Typography>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex flex-col">
                                <Typography className="font-[Inter] font-normal text-[16px]">
                                  {item.user.mobileNo}
                                </Typography>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="w-max">
                                <Typography className="font-[Inter] font-normal text-[16px]">
                                  {item._id?.slice(-6)}
                                </Typography>
                              </div>
                            </td>
                            <td className="p-4">
                              <Typography className="font-[Inter] font-normal text-[16px]">
                                {item.user?.walletDetails?.totalAmount}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <Typography className="font-[Inter] font-normal text-[16px]">
                                {item.amount}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <Typography className="font-[Inter] font-normal text-[16px]">
                                {formatDate(item.timestamp)}
                              </Typography>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                  <tfoot className="h-[51px] border  border-gray-600 rounded-b-md bg-[#F4F4F4]">
                    <tr className="text-[#000000] font-bold font-[Inter] text-[16px]">
                      <td className="px-4 ">Total</td>
                      <td className="px-4 ">-</td>
                      <td className="px-4 ">-</td>
                      <td className="px-4 ">₹{sumTotalamount()}</td>
                      <td className="px-4 ">₹{sumWithdrawalamount()}</td>
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
                    <div
                      onClick={() => setPage("deposite")}
                      className="shadow-sm w-[78px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg"
                    >
                      <span>Edit</span> <Icon icon="circum:edit" width="24" />
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
                        { utr, depositeamount, status, towallet, date },
                        index
                      ) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast ? "p-4" : "p-4";
                        return (
                          <tr key={utr} className="text-[#000000]">
                            <td className={classes}>
                              <div className="flex items-center gap-3">
                                <Typography className=" font-[Inter] font-normal text-[16px]">
                                  {utr}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <div className="flex flex-col">
                                <Typography className="font-[Inter] font-normal text-[16px]">
                                  {depositeamount}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <div className="w-max">
                                <Typography className="font-[Inter] font-normal text-[16px]">
                                  {status}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <Typography className="font-[Inter] font-normal text-[16px]">
                                {towallet}
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
        </div>
      )}
      {page === "withdraw" && (
        <EditPendingWithdrawal setPage={setPage} TABLE_ROWS={withdrawals} />
      )}
      {page === "deposite" && (
        <EditDeposite setPage={setPage} TABLE_ROWS={TABLE_ROWS} />
      )}

      <AdminFooter />
    </div>
  );
}

export default SuperNotification;

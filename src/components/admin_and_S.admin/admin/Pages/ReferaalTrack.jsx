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
import RefferalCard from "../Common.jsx/RefferalCard";
import AdminFooter from "../Common.jsx/AdminFooter";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserReferralCodes } from "../AdminSlice/refferalAdminSlice";

const TABLE_ROWS = [
  {
    uid: "1234",
    mobno: "7610981931",
    referid: "ABC12",
    rewardid: "GAURAV12",
  },
  {
    uid: "2345",
    mobno: "7610981932",
    referid: "DEF34",
    rewardid: "GAURAV34",
  },
  {
    uid: "3456",
    mobno: "7610981933",
    referid: "GHI56",
    rewardid: "GAURAV56",
  },
  {
    uid: "4567",
    mobno: "7610981934",
    referid: "JKL78",
    rewardid: "GAURAV78",
  },
  {
    uid: "5678",
    mobno: "7610981935",
    referid: "MNO90",
    rewardid: "GAURAV90",
  },
];

function ReferaalTrack() {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const referusers = useSelector((state) => state.referusers.users);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  useEffect(() => {
    dispatch(fetchUserReferralCodes());
  }, [dispatch]);
  console.log(referusers);
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
          <span className="underline">Referral Track</span>
        </div>
        <h3 className="text-[#0F002B] text-lg">
          <span className="underline">R</span>eferral{" "}
          <span className="underline">T</span>rack
        </h3>
      </div>
      <div className="flex px-3 py-2 items-center justify-between bg-[#EEEEEE]">
        <p className="text-[#000000] font-medium text-xs">
          Detail : Full detail of all users referral list.
        </p>
        <Icon icon="charm:cross" width="12" />
      </div>
      <Card className=" w-full py-1 pb-10 px-4">
        <CardBody className=" px-0 w-full">
          <div className="flex justify-between items-center">
            <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
              Referral Details
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
                    Mobile Number
                    <Icon
                      icon="prime:sort"
                      strokeWidth={2}
                      className="h-4 w-4"
                    />
                  </Typography>
                </th>
                <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                  <Typography className="flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 text-[#000000] font-[Inter] font-medium text-[16px]">
                    Referral ID
                    <Icon
                      icon="prime:sort"
                      strokeWidth={2}
                      className="h-4 w-4"
                    />
                  </Typography>
                </th>

                <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                  <Typography className="flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 text-[#000000] font-[Inter] font-medium text-[16px]">
                    Details
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {referusers.map((val, index) => {
                return (
                  <tr key={val?._id} className="text-[#000000]">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Typography className="font-[Inter] font-medium text-[16px]">
                          {val?._id}
                        </Typography>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <Typography className="font-[Inter] font-medium text-[16px]">
                          {val?.mobileNo}
                        </Typography>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="w-max">
                        <Typography className="font-[Inter] font-medium text-[16px]">
                          {val?.referralDetails?.referralCode}
                        </Typography>
                      </div>
                    </td>

                    <td className="p-4">
                      <RefferalCard val={val} />
                    </td>
                  </tr>
                );
              })}
              {/* {TABLE_ROWS.map(({ uid, mobno, referid, rewardid }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4";
                return (
                  <tr key={index} className="text-[#000000]">
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
                          {mobno}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Typography className="font-[Inter] font-medium text-[16px]">
                          {referid}
                        </Typography>
                      </div>
                    </td>
                 
                    <td className={classes}>
                 
                      <RefferalCard
                        status={referid}
                        uid={uid}
                        updatedAt={rewardid}
                      />
                    </td>
                  </tr>
                );
              })} */}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <AdminFooter />
    </div>
  );
}

export default ReferaalTrack;

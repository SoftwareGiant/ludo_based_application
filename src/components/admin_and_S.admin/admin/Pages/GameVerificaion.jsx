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
import {
  fetchAllGameHistory,
  selectAllGameHistory,
  selectAllGameHistoryStatus,
} from "../AdminSlice/gameHistorySlice ";
import { useDispatch, useSelector } from "react-redux";
import AdminFooter from "../Common.jsx/AdminFooter";
import Refreshloader from "../../superadmin/Common/Refreshloader";
import GameStatusCard from "../Common.jsx/gameStatusCard";
import PageLoader from "../../../MainLayout/PageLoader";
import { Link } from "react-router-dom";

export function GameVerificaion() {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isRefresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  const gameHistory = useSelector(selectAllGameHistory);
  const status = useSelector(selectAllGameHistoryStatus);
  useEffect(() => {
    dispatch(fetchAllGameHistory());
  }, [dispatch]);
  const RefreshGameHistory = ()=>{
    dispatch(fetchAllGameHistory());
  }
  console.log(gameHistory);
  const handleOpen = () => {
    setIsClicked(true);
  };
  const handleClose = () => {
    setIsClicked(false);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  if (status === "loading" && isRefresh === false) {
    return <PageLoader full={true}/>
  }

  if (status === "failed") {
    return <div>Error loading</div>;
  }

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const sortTable = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedGame = [...gameHistory].sort((a, b) => {
    if (sortConfig.key && sortConfig.direction) {
      if (sortConfig.direction === "ascending") {
        return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
      } else {
        return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
      }
    }
    return 0;
  });
  const filteredGame = sortedGame?.filter((user) =>
    user._id.includes(searchQuery)
  );
  const handleRefresh = async () => {
    setRefresh(true);
    await dispatch(fetchAllGameHistory())
      .then(() => {
        setRefresh(false);
      })
      .catch(() => {
        setRefresh(false);
      });
  };
  return (
    <div className="font-[Inter] w-full main-body-right overflow-y-scroll h-screen bg-[#ffff] rounded-tl-3xl">
      <div className="bg-[#F4F4F4] rounded-tl-3xl py-1 px-4 flex flex-col gap-4">
        <div className="flex  mt-1  gap-2 text-[#008CF2] font-[Inter] font-medium text-[12px]">
        <Link to="/newonboard"  className="underline">Admin Control Panel </Link>
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
      <Card className=" w-full py-1 pb-10 px-4">
        <CardBody className=" px-0 w-full">
          <div className="flex justify-between">
            <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
              New games and recent game history
            </span>
            <div className="flex gap-2 font-[Inter] font-medium text-[16px]">
              <div
                onClick={handleOpen}
                onBlur={handleClose}
                className="bg-[#F4F4F4] justify-between flex items-center p-1 px-2 h-[32px]  border rounded-lg"
              >
                <input
                  placeholder="Search"
                  className={`${
                    isClicked ? "delay-200" : "w-[54px]"
                  } transition-all duration-700 outline-none bg-[#F4F4F4] `}
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <Icon icon="material-symbols:search" width="24" />
              </div>
              <div className="w-[107px] h-[32px] justify-between p-1 bg-[#F4F4F4] flex items-center  border rounded-lg">
                <span>Refresh</span>{" "}
                {isRefresh ? (
                  <Refreshloader />
                ) : (
                  <Icon
                    onClick={handleRefresh}
                    icon="material-symbols:refresh"
                    width="24"
                  />
                )}
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
                <th
                  onClick={() => sortTable("_id")}
                  className="cursor-pointer   p-2 transition-colors  rounded-lg"
                >
                  <Typography className="flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 text-[#000000] font-[Inter] font-medium text-[16px]">
                    GID
                    <Icon
                      icon="prime:sort"
                      strokeWidth={2}
                      className="h-4 w-4"
                    />
                  </Typography>
                </th>
                <th className="cursor-pointer   p-2 transition-colors  rounded-lg">
                  <Typography className="flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 text-[#000000] font-[Inter] font-medium text-[16px]">
                    Game Type
                  </Typography>
                </th>
                <th
                  onClick={() => sortTable("gameactivationTimestamp")}
                  className="cursor-pointer   p-2 transition-colors  rounded-lg"
                >
                  <Typography className="flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 text-[#000000] font-[Inter] font-medium text-[16px]">
                    Time Stamp
                    <Icon
                      icon="prime:sort"
                      strokeWidth={2}
                      className="h-4 w-4"
                    />
                  </Typography>
                </th>
                <th
                  onClick={() => sortTable("status")}
                  className="cursor-pointer   p-2 transition-colors  rounded-lg"
                >
                  <Typography className="flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 text-[#000000] font-[Inter] font-medium text-[16px]">
                    Status
                    <Icon
                      icon="prime:sort"
                      strokeWidth={2}
                      className="h-4 w-4"
                    />
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredGame.map((val) => {
                return (
                  <tr key={val._id} className="text-[#000000] ">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Typography className="font-[Inter] font-medium text-[16px]">
                          {val._id}
                        </Typography>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <Typography className="font-[Inter] font-medium text-[16px]">
                          Open Challenge
                        </Typography>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="w-max">
                        <Typography className="font-[Inter] font-medium text-[16px]">
                          {formatDate(val.gameactivationTimestamp)}
                        </Typography>
                      </div>
                    </td>
                    <td className="p-4">
                      <GameStatusCard
                        val={val}
                     
                        handleRefresh={handleRefresh}
                        isRefresh={isRefresh}
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

export default GameVerificaion;

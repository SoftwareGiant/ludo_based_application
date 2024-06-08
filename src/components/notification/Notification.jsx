import React, { useEffect } from "react";
import "../../app.css";
import { useNavigate } from "react-router-dom";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { Button } from "@material-tailwind/react";
import LudoMainLogo from "../MainLayout/LudoMainLogo";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotifications } from "./NotificationSlice";
import { convertTimestamp } from "../admin_and_S.admin/Functions/convertTimestamp";
import { toast } from "react-toastify";
import axios from "axios";
import PageLoader from "../MainLayout/PageLoader";
import TotoalBal, { ProfileButton } from "../MainLayout/ProfileButton";
import { fetchUserDetail } from "../live_battle/userSlice";
const Notification = () => {
  const navigate = useNavigate();
  const { accessToken, refreshToken } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.user);

  const { notifications, status, error } = useSelector(
    (state) => state.notifications
  );

  useEffect(() => {
    dispatch(fetchUserDetail());
  }, []);
  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  const handlenotificationRead = async (notificationid) => {
    if (notificationid.readStatus === true) return;
    try {
      const apiResponse = await axios.get(
        `/api/notification/read/${notificationid._id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // console.log(apiResponse);
      dispatch(fetchNotifications());
    } catch (err) {
      // console.log(err);
      toast.error(err);
    }
  };

  const clearAllNotifications = async (notificationid) => {
    if (notificationid.readStatus === true) return;
    try {
      const apiResponse = await axios.get(`/api/notification/clearall`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      dispatch(fetchNotifications());
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>
      <div className="max-w-[480px] w-full min-h-screen h-full bg-[#fead3a]">
        <div
          id="NotificationspaceRoot"
          className="bg-[#fead3a]  h-8 overflow-hidden"
        />
        <div className="bg-[#fead3a]  flex flex-row justify-between max-w-[480px] w-full h-12 items-start pt-2 px-5 ">
          <div className="flex flex-row gap-3  items-start">
            <SidebarMob users={users} />
            <LudoMainLogo />
          </div>
          <div className="flex gap-2 items-center">
            <TotoalBal users={users} />
            <ProfileButton />
          </div>
        </div>

        <div
          id="Line"
          className="border-solid w-full h-px border-t border-black/30"
        />

        <div className="bg-[#fead3a] w-full min-h-screen overflow-hidden relative">
          {status !== "loading" && notifications?.length <= 0 && (
            <p className="mt-6 font-semibold text-3xl w-full flex justify-center ">
              No new notification...
            </p>
          )}
          {notifications.length !== 0 && (
            <div className="mb-10">
              <div className="cursor-pointer   flex justify-end w-[90%] m-auto font-['Nunito-Sans'] relative mt-2">
                <Button
                  onClick={clearAllNotifications}
                  className="p-1 "
                  variant="text"
                >
                  Clear All
                </Button>
              </div>
              {notifications.length !== 0 &&
                notifications?.map((item) => (
                  <div
                    key={item._id}
                    onClick={() => handlenotificationRead(item)}
                    className="cursor-pointer   flex flex-col w-[90%] m-auto rounded-lg  font-['Nunito-Sans'] relative mt-4"
                  >
                    <div
                      className={`${
                        item.readStatus === true
                          ? " bg-gray-800"
                          : " bg-gray-900"
                      } flex text-white flex-col gap-2 w-full shadow-lg rounded-lg p-3`}
                    >
                      <div className="w-full text-gray-300 text-xs">
                        <span>{convertTimestamp(item.updatedAt)}</span>
                      </div>
                      <div className="text-sm  flex items-center  w-full">
                        <span
                          className={`
                    ${
                      item.readStatus === true
                        ? "font-medium opacity-[80%]"
                        : "font-bold"
                    }`}
                        >
                          {item.message}
                        </span>
                      </div>
                    </div>
                    {/* <div className="flex  w-full p-4 justify-between items-center">
              <div className="flex text-xl font-['Inter'] font-bold text-[#0f002b] ">
                1.5% Off
              </div>

              <Button className="bg-white text-black shadow-none hover:shadow-none p-1">
                <IoIosArrowForward className="w-6 h-6" />
              </Button>
            </div> */}
                  </div>
                ))}
            </div>
          )}
          {/* <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-4/5 m-auto rounded-lg  font-['Nunito-Sans'] relative mt-4">
            <div className="text-white bg-[#0f002b] flex flex-col gap-2 w-full rounded-tl-lg rounded-tr-lg">
              <div className="flex justify-between w-full items-center p-3">
                <span className=" shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)]">
                  5 min ago
                </span>
              </div>
              <div className="text-xs shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex  px-4 items-center  w-full  py-5 pb-8 ">
                <span className="font-semibold">
                  {" "}
                  Refer your friends and get 1.5% commission on their winning
                  amount. Promotion valid for the next 72hours.
                </span>
              </div>
            </div>
            <div className="flex  w-full p-4 justify-between items-center">
              <div className="flex text-xl font-['Inter'] font-bold text-[#0f002b] ">
                1.5% Off
              </div>

              <Button className="bg-white text-black shadow-none hover:shadow-none p-1">
                <IoIosArrowForward className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <div className="shadow-[0px_0px_4px_0px_rgba(255,_255,_255,_0.25)] bg-white flex flex-col w-4/5 m-auto rounded-lg  font-['Nunito-Sans'] relative mt-4">
            <div className="text-white bg-[#0f002b] flex flex-col gap-2 w-full rounded-tl-lg rounded-tr-lg">
              <div className="flex justify-between w-full items-center p-3 pb-1">
                <span className=" shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)]">
                  5 min ago
                </span>

                {open ? (
                  <span className="p-2 cursor-pointer">
                    <IoIosArrowUp onClick={toggleClose} />
                  </span>
                ) : (
                  <span className="p-2 cursor-pointer">
                    <IoIosArrowDown onClick={toggleOpen} />
                  </span>
                )}
              </div>
              <div className="text-xs shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex  px-4 items-center  w-full  pb-4 ">
                {open ? (
                  <span className="font-semibold transition-all ease-in-out">
                    {" "}
                    Play your next game and get 1% commission back. Only valid
                    for first 500 players HURRY UP!{" "}
                  </span>
                ) : (
                  <span className="font-semibold transition-all ease-in-out">
                    {" "}
                    HURRY UP!{" "}
                  </span>
                )}
              </div>
            </div>
            <div className="flex  w-full p-4 justify-between">
              <div className="flex text-xl font-['Inter'] font-bold text-[#0f002b] ">
                1% Off
              </div>
              <Button className="bg-white text-black shadow-none hover:shadow-none p-1">
                <IoIosArrowForward className="w-6 h-6" />
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Notification;

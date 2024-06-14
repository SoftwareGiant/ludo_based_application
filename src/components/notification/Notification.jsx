import React, { useEffect } from "react";
import "../../App.css";
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
     await axios.get(
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
     await axios.get(`/api/notification/clearall`, {
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
                        <span>
                          {convertTimestamp(item.updatedAt) == "-1 second ago"
                            ? "now"
                            : convertTimestamp(item.updatedAt)}
                        </span>
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
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Notification;

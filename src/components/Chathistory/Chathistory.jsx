import React, { useEffect, useState } from "react";
import "../../app.css";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import { Card, Typography, Avatar } from "@material-tailwind/react";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import { fetchAllChatList } from "./ChatSlice";
import { useDispatch, useSelector } from "react-redux";
import LudoMainLogo from "../MainLayout/LudoMainLogo";
import { fetchUserDetail } from "../live_battle/userSlice";
import { fetchFavoriteMessages } from "./favoriteMessagesSlice";
import PageLoader from "../MainLayout/PageLoader";

const Chathistory = () => {
  const [OpenchatHistory, setOpenChatHistory] = useState(false);
  const [OpenRecent, setOpenRecent] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.user);
  const { allChatList, loading, error } = useSelector(
    (state) => state?.chatAll
  );

  const favoriteMessages = useSelector(
    (state) => state?.favChat?.favoriteMessages
  );

  console.log(users);
  console.log(allChatList);
  console.log(favoriteMessages, "favoriteMessages");
  useEffect(() => {
    dispatch(fetchFavoriteMessages());
    dispatch(fetchAllChatList());
    dispatch(fetchUserDetail());
  }, []);
  const handleChatHistory = () => {
    setOpenChatHistory(true);
  };
  const handleRecentOpen = () => {
    setOpenChatHistory(false);
    setOpenRecent(true);
  };
  function convertTimestampToDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }
  const handleRecentCardCLick = (userchat) => {
    userchat?.messageDetails[0].senderId === users?._id
      ? navigate(`/matchUserChat/${userchat?.messageDetails[0].receiverId}`)
      : navigate(`/matchUserChat/${userchat?.messageDetails[0].senderId}`);
  };
  if (loading) {
    return <PageLoader />;
  }
  return (
    <>
      <div className="max-w-[480px]  bg-[#0F002B] w-full min-h-screen h-full">
        <div
          id="NotificationspaceRoot"
          className="bg-[#fead3a]  h-8 overflow-hidden"
        />
        <div className="bg-[#fead3a]  flex justify-between items-center w-full   h-[51px]  px-4">
          <div className="flex flex-row gap-3 items-start mt-3">
            <SidebarMob />
            <LudoMainLogo />
          </div>
          <img
            onClick={() => navigate("/profile")}
            src={FrameProfile}
            alt="Frame1"
            className="w-[30px] h-[30px] mt-[9.5px] rounded-[100px] border border-solid border-white "
          />
        </div>

        {OpenRecent ? (
          <div className="relative   h-full">
            <div className="text-white py-2 px-4 flex  text-[20px] items-center justify-between">
              <div className="gap-2 flex items-center">
                <Icon
                  onClick={() => {
                    setOpenChatHistory(false);
                    setOpenRecent(false);
                  }}
                  icon="mingcute:arrow-left-line"
                  width="32"
                />
                <div className="flex items-center gap-1">
                  {" "}
                  <p className="font-bold">chat</p>
                  <p>history </p>
                </div>
              </div>
              <Icon icon="material-symbols:info-outline" width="32" />
            </div>
            <div className="flex flex-col gap-3 w-full items-center justify-center">
              {allChatList?.length > 0 &&
                allChatList?.map((userchat) => (
                  <Card
                    key={userchat?._id}
                    onClick={() => handleRecentCardCLick(userchat)}
                    color="transparent"
                    className="w-full mt-5 max-w-[22rem] bg-gray-100 hover:bg-gray-200 p-3 mx-4 rounded-3xl "
                  >
                    <div className="flex items-center gap-4 ">
                      <Avatar
                        onClick={() => navigate("/matchUserChat")}
                        size="lg"
                        variant="circular"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        alt="tania andrew"
                      />
                      <div className="flex w-full  flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                          <Typography variant="h5" color="blue-gray">
                            {userchat?.messageDetails[0].senderId === users?._id
                              ? userchat?.messageDetails[0].receiverId.slice(-6)
                              : userchat?.messageDetails[0].senderId.slice(-6)}
                          </Typography>
                          <div className="5 flex items-center gap-0 ">
                            {convertTimestampToDate(
                              userchat?.messageDetails[0].timestamp
                            )}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Icon icon="mdi:tick-circle-outline" />
                            Let’s play again
                          </div>

                          <Icon
                            className="cursor-pointer"
                            icon="solar:pin-bold"
                            width="26"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        ) : OpenchatHistory ? (
          <div className="relative   h-full">
            <div className="text-white py-2 px-4 flex font-bold text-[20px] items-center justify-between">
              <div className="gap-2 flex items-center">
                <Icon
                  onClick={() => setOpenChatHistory(false)}
                  icon="mingcute:arrow-left-line"
                  width="32"
                />
                <p>favourite</p>
              </div>
              <Icon icon="material-symbols:info-outline" width="32" />
            </div>
            <div className="flex flex-col gap-3 w-full items-center justify-center">
              {favoriteMessages.length > 0 &&
                favoriteMessages?.map((favuser) => (
                  <Card
                    key={favuser._id}
                    onClick={() => handleRecentCardCLick(favuser)}
                    color="transparent"
                    className="w-full mt-5 max-w-[22rem] bg-gray-100 hover:bg-gray-200 p-3 mx-4 rounded-3xl "
                  >
                    <div className="flex items-center gap-4 ">
                      <Avatar
                        size="lg"
                        variant="circular"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        alt="tania andrew"
                      />
                      <div className="flex w-full  flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                          <Typography variant="h5">
                            {favuser?.messageDetails[0].senderId === users?._id
                              ? favuser?.messageDetails[0].receiverId.slice(-6)
                              : favuser?.messageDetails[0].senderId.slice(-6)}
                          </Typography>
                          <div className="5 flex items-center gap-0 ">
                            {convertTimestampToDate(
                              favuser?.messageDetails[0].timestamp
                            )}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Typography className="flex items-center gap-1">
                            <Icon icon="mdi:tick-circle-outline" />
                            Let’s play again
                          </Typography>
                          <div className="gap-1 flex">
                            <Icon
                              icon="solar:star-bold"
                              className="cursor-pointer"
                              width="26"
                            />
                            <Icon
                              className="cursor-pointer"
                              icon="solar:pin-bold"
                              width="26"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        ) : (
          <div className="relative bg-[#fead3a] min-h-screen">
            <div className="flex justify-center gap-3 pt-4">
              <div
                onClick={handleChatHistory}
                className="bg-[#0F002B] text-white w-32 h-32 font-bold rounded-xl p-4 flex flex-col gap-3 items-center justify-center"
              >
                <Icon icon="solar:star-bold" width="58" />
                <p>Favourite</p>
              </div>
              <div
                onClick={handleRecentOpen}
                className="bg-[#0F002B] text-white w-32 h-32  font-bold rounded-xl p-4 flex flex-col gap-3 items-center justify-center"
              >
                <Icon icon="fluent:app-recent-24-regular" width="58" />
                <p>Recent</p>
              </div>
            </div>
            <div
              className={`flex flex-col h-[60%] ${
                OpenchatHistory
                  ? "translate-y-[100%] transition-transform delay-200"
                  : ""
              } fixed bottom-0 py-10 rounded-t-3xl bg-black w-full justify-start items-center gap-3 pt-4 max-w-[480px]`}
            >
              <div>
                <div className="bg-white rounded-3xl w-32 h-1" />
              </div>
              {allChatList?.length > 0 &&
                allChatList?.map((userchat) => (
                  <Card
                    key={userchat._id}
                    // onClick={() => handleRecentCardCLick(userchat)}
                    color="transparent"
                    className="w-full mt-5 max-w-[22rem] bg-gray-100 hover:bg-gray-200 p-3 mx-4 rounded-3xl "
                  >
                    <div className="flex items-center gap-4 ">
                      <Avatar
                        size="lg"
                        variant="circular"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        alt="tania andrew"
                      />
                      <div className="flex w-full  flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                          <Typography variant="h5" color="blue-gray">
                            {userchat?.messageDetails[0].senderId === users?._id
                              ? userchat?.messageDetails[0].receiverId.slice(-6)
                              : userchat?.messageDetails[0].senderId.slice(-6)}
                          </Typography>
                          <div className="5 flex items-center gap-0 ">
                            {convertTimestampToDate(
                              userchat?.messageDetails[0].timestamp
                            )}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Icon icon="mdi:tick-circle-outline" />
                            Let’s play again
                          </div>

                          <Icon
                            className="cursor-pointer"
                            icon="solar:pin-bold"
                            width="26"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}

             
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Chathistory;

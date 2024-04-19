import React, { useState } from "react";
import "../../app.css";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import { Card, Typography, Avatar } from "@material-tailwind/react";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify-icon/react";

const Chathistory = () => {
  const [openBottom, setOpenBottom] = useState(true);
  const [OpenchatHistory, setOpenChatHistory] = useState(false);
  const [OpenRecent, setOpenRecent] = useState(false);
  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);
  const navigate = useNavigate();
  const handleChatHistory = () => {
    setOpenChatHistory(true);
  };
  const handleRecentOpen = () => {
    setOpenChatHistory(false);
    setOpenRecent(true);
  };
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
            <div className="flex flex-col text-[#0f002b] ">
              <div className="  text-base font-['Nunito_Sans'] font-extrabold ">
                LUDO KING
              </div>

              <div className="text-center text-base font-['Oooh_Baby'] font-normal  -mt-2">
                punch line
              </div>
            </div>
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
                <div className="flex gap-1">
                  {" "}
                  <p className="font-extrabold">chat</p>history
                </div>
              </div>
              <Icon icon="material-symbols:info-outline" width="32" />
            </div>
            <div className="flex flex-col gap-3 w-full items-center justify-center">
              <Card
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
                        Ludo Player
                      </Typography>
                      <div className="5 flex items-center gap-0 ">
                        17/05/2023
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

              <Card
                color="transparent"
                className="w-full max-w-[22rem] bg-gray-100 hover:bg-gray-200 p-3 mx-4 rounded-3xl "
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
                        Ludo Player
                      </Typography>
                      <div className="5 flex items-center gap-0 ">
                        17/05/2023
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Typography color="blue-gray">
                        Let’s play again
                      </Typography>
                      <Icon
                        className="cursor-pointer"
                        icon="wpf:mute"
                        width="26"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        ) : OpenchatHistory ? (
          <div className="relative   h-full">
            <div className="text-white py-2 px-4 flex font-extrabold text-[20px] items-center justify-between">
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
              <Card
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
                      <Typography variant="h5" 
                      // color="blue-gray"
                      >
                        Ludo Player
                      </Typography>
                      <div className="5 flex items-center gap-0 ">
                        17/05/2023
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Typography
                        // color="blue-gray "
                        className="flex items-center gap-1"
                      >
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
              <Card
                color="transparent"
                className="w-full max-w-[22rem] bg-gray-100 hover:bg-gray-200 p-3 mx-4 rounded-3xl "
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
                      <Typography variant="h5" 
                      // color="blue-gray"
                      >
                        Ludo Player
                      </Typography>
                      <div className="5 flex items-center gap-0 ">
                        17/05/2023
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Typography
                      //  color="blue-gray"
                       >
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
                          icon="wpf:mute"
                          width="26"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
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
              <Card
                color="transparent"
                className="w-full mt-5 max-w-[22rem] bg-gray-100 hover:bg-gray-200 p-3 mx-4 rounded-3xl "
              >
                <div color="transparent" className="flex items-center gap-4 ">
                  <Avatar
                    size="lg"
                    variant="circular"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt="tania andrew"
                  />
                  <div className="flex w-full  flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                      <Typography variant="h5" 
                      // color="blue-gray"
                      >
                        Ludo Player
                      </Typography>
                      <div className="5 flex items-center gap-0 ">
                        17/05/2023
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="flex items-center gap-1">
                        <Icon icon="mdi:tick-circle-outline" />
                        Let’s play again
                      </p>

                      <Icon
                        className="cursor-pointer"
                        icon="solar:pin-bold"
                        width="26"
                      />
                    </div>
                  </div>
                </div>
              </Card>
              <Card
                color="transparent"
                className="w-full max-w-[22rem] bg-gray-100 hover:bg-gray-200 p-3 mx-4 rounded-3xl "
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
                      <Typography variant="h5" 
                      // color="blue-gray"
                      >
                        Ludo Player
                      </Typography>
                      <div className="5 flex items-center gap-0 ">
                        17/05/2023
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Typography 
                      // color="blue-gray"
                      >
                        Let’s play again
                      </Typography>
                      <Icon
                        className="cursor-pointer"
                        icon="wpf:mute"
                        width="26"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Chathistory;

import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { Avatar, Card, Typography } from "@material-tailwind/react";
import React from "react";
import { formatDate } from "../admin_and_S.admin/Functions/formateDate";
import { useNavigate } from "react-router-dom";
import HelpButton from "../MainLayout/HelpButton";

const OpenRecentTab = ({
  users,
  handleRecentCardCLick,
  setOpenRecent,
  setOpenChatHistory,
  allChatList,
}) => {
  const navigate = useNavigate();
  return (
    <div className="relative   bg-black">
      <div className="text-white py-2 px-4 flex  text-[20px] items-center justify-between">
        <div className="gap-2 flex items-center">
          <Icon
            onClick={() => {
              setOpenChatHistory(false);
              setOpenRecent(false);
            }}
            icon="mingcute:arrow-left-line"
            width="32"
            className="cursor-pointer"
          />

          <div className="flex items-center gap-1">
            {" "}
            <p className="font-bold">chat</p>
            <p>history </p>
          </div>
        </div>

        <HelpButton />
      </div>
      <div className="flex flex-col gap-3 w-full items-center justify-center">
        {allChatList?.length > 0 ? (
          allChatList?.map((userchat) => (
            <Card
              key={userchat?._id}
              onClick={() => handleRecentCardCLick(userchat)}
              color="transparent"
              className="w-[90%] cursor-pointer mt-5 max-w-[26rem] bg-gray-100 hover:bg-gray-200 p-3 mx-4 rounded-2xl "
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
                      {formatDate(userchat?.messageDetails[0].timestamp)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Icon icon="mdi:tick-circle-outline" />
                      Let’s play again
                    </div>
                    {/* 
                    <Icon
                      className="cursor-pointer"
                      icon="solar:pin-bold"
                      width="26"
                    /> */}
                  </div>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <p className="mt-6 text-white font-semibold text-3xl w-full flex justify-center ">
            No recent chat history...
          </p>
        )}
      </div>
    </div>
  );
};

export default OpenRecentTab;

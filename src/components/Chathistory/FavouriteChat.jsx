import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchFavoriteMessages } from "./favoriteMessagesSlice";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Card, Typography } from "@material-tailwind/react";
import { formatDate } from "../admin_and_S.admin/Functions/formateDate";
import HelpButton from "../MainLayout/HelpButton";

const FavouriteChat = ({
  setOpenChatHistory,
  users,
  handleRecentCardCLick,
}) => {
  const dispatch = useDispatch();
  const favoriteMessages = useSelector(
    (state) => state?.favChat?.favoriteMessages
  );
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchFavoriteMessages());
  }, [dispatch]);
  console.log(favoriteMessages);
  return (
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
        <HelpButton />
      </div>
      <div className="flex flex-col gap-3 w-full items-center justify-center">
        {(!favoriteMessages ||
          favoriteMessages.length === 0 ||
          !favoriteMessages.some((favuser) =>
            favuser.favourite?.userId?.some((id) => id !== users._id)
          )) && (
          <p className="mt-6 text-white font-semibold text-3xl w-full flex justify-center">
            No favourite chat...
          </p>
        )}

        {favoriteMessages?.length > 0 &&
          favoriteMessages.map((favuser) => {
            if (
              favuser?.favourite?.userId?.length > 0 &&
              favuser?.favourite?.userId.some((id) => id !== users._id)
            ) {
              return (
                <Card
                  key={favuser._id}
                  onClick={() => handleRecentCardCLick(favuser)}
                  color="transparent"
                  className="w-[90%] mt-5 max-w-[26rem] bg-gray-100 hover:bg-gray-200 p-3 mx-4 rounded-2xl"
                >
                  <div className="flex items-center gap-4">
                    <Avatar
                      size="lg"
                      variant="circular"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="tania andrew"
                    />
                    <div className="flex w-full flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <Typography variant="h5" className="truncate">
                          {favuser.favourite.userId
                            .filter((item) => item !== users._id)
                            .map((item) => item.slice(-6))
                            .join(", ")}
                        </Typography>
                        <div className="text-sm flex items-center gap-0">
                          {formatDate(favuser?.messageDetails[0].timestamp)}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Typography className="flex items-center gap-1">
                          <Icon icon="mdi:tick-circle-outline" />
                          Let’s play again
                        </Typography>
                        <div className="flex gap-1">
                          <Icon
                            icon="solar:star-bold"
                            className="cursor-pointer"
                            width={26}
                          />
                          <Icon
                            className="cursor-pointer"
                            icon="solar:pin-bold"
                            width={26}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            }
          })}
      </div>
    </div>
  );
};

export default FavouriteChat;

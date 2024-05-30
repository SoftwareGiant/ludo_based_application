import React, { useEffect, useState } from "react";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import { SidebarMob } from "../MainLayout/SidebarMob";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsergameHistory } from "./gamehistorySlice";
import { fetchUserDetail } from "../live_battle/userSlice";
import { Icon } from "@iconify-icon/react";
import LudoMainLogo from "../MainLayout/LudoMainLogo";
import { convertTimestamp } from "../admin_and_S.admin/Functions/convertTimestamp";
import PageLoader from "../MainLayout/PageLoader";
import { ProfileButton } from "../MainLayout/ProfileButton";
const GameHistoryMob = () => {
  const users = useSelector((state) => state.user.user);
  const gameHistorys = useSelector((state) => state.gamehistory?.gameHistory);
  const loading = useSelector((state) => state.gamehistory?.loading);

  console.log(gameHistorys);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserDetail());
    dispatch(fetchUsergameHistory());
  }, []);

  if (users === null || loading === true) return <PageLoader />;
  return (
    <div className="max-w-[480px] w-full min-h-screen h-full">
      <div
        id="NotificationspaceRoot"
        className="bg-[#fead3a]  h-8 overflow-hidden"
      />
      <div className="bg-[#fead3a] flex flex-row justify-between max-w-[480px] w-full h-12 items-start pt-2 px-5 ">
        <div className="flex flex-row gap-3 w-2/5 items-start">
          <SidebarMob />
          <LudoMainLogo />
        </div>
        <ProfileButton />
      </div>

      <div className="bg-[#fead3a] w-full min-h-screen overflow-hidden relative">
        {gameHistorys && gameHistorys?.length !== 0 ? (
          gameHistorys?.map((game) => (
            <div
              key={game._id}
              className=" bg-white flex flex-col w-4/5 m-auto rounded-lg  font-['Nunito-Sans'] relative mt-2 mb-2 shadow-md hover:shadow-xl"
            >
              <div className="text-white bg-[#0f002b] flex flex-col gap-2 w-full rounded-tl-lg rounded-tr-lg">
                <div className="flex justify-between w-full items-center p-3">
                  <span className=" shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)]">
                    {convertTimestamp(game?.matchingTimeStamp)}
                  </span>
                </div>
                <div className="text-xs shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] flex  px-4 items-center  w-full  py-2 pb-5 ">
                  <span className="font-semibold flex gap-1">
                    {" "}
                    You
                    <span>
                      {users?._id === game?.player1?._id
                        ? game?.gameResultDetail?.player1?.outcome
                        : game?.gameResultDetail?.player2?.outcome}
                    </span>
                    this match,
                    {users?._id === game?.player1?._id ? (
                      <span className="flex gap-1">
                        <span>you vs</span>
                        <span>
                          {/* {game?.player2._id}{" "} */}
                          {game?.player2?._id?.slice(
                            game?.player2?._id?.length - 6,
                            game?.player2?._id?.length
                          )}
                        </span>
                      </span>
                    ) : (
                      <span className="flex gap-1">
                        <span> you vs </span>
                        <span>
                          {" "}
                          {/* {game?.player1._id} */}
                          {game?.player1?._id?.slice(
                            game?.player1?._id?.length - 6,
                            game?.player1?._id?.length
                          )}
                        </span>
                      </span>
                    )}
                  </span>
                </div>
              </div>
              <div
                className={`border-solid border-t-4  mt-1 w-full  ${
                  users?._id === game?.player1?._id
                    ? game?.gameResultDetail?.player1?.outcome === "lose"
                      ? "border-[#FF0000]"
                      : "border-[#008000]"
                    : game?.gameResultDetail?.player2?.outcome === "lose"
                    ? "border-[#FF0000]"
                    : "border-[#008000]"
                } `}
              ></div>
              <div className="flex w-full px-4 py-3">
                <div className="flex text-xl font-['Inter'] font-bold text-[#0f002b] flex-1">
                  ₹ {game?.battleDetails?.amount}
                </div>

                {users?._id === game?.player1?._id ? (
                  <div className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex gap-2 items-center p-2 rounded-lg flex-1 max-w-[76px]">
                    {game?.gameResultDetail?.player1?.outcome === "lose" ? (
                      <Icon icon="noto:crying-face" />
                    ) : (
                      <Icon icon="noto:trophy" />
                    )}
                    <div className="text-sm font-['Inter'] text-white">
                      {game?.gameResultDetail?.player1?.outcome}
                    </div>
                  </div>
                ) : (
                  <div className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex gap-2 items-center p-2 rounded-lg flex-1 max-w-[76px]">
                    {game?.gameResultDetail?.player2?.outcome === "lose" ? (
                      <Icon icon="noto:crying-face" />
                    ) : (
                      <Icon icon="noto:trophy" />
                    )}
                    <div className="text-sm font-['Inter'] text-white">
                      {game?.gameResultDetail?.player2?.outcome}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-white font-semibold text-3xl pt-4 flex justify-center items-center h-full">
            No Game History...
          </p>
        )}
      </div>
    </div>
  );
};

export default GameHistoryMob;

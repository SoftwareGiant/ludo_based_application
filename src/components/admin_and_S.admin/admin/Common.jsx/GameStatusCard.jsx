import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllKyc } from "../AdminSlice/AllKycSlice";
import { toast } from "react-toastify";
import {
  Button,
  IconButton,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import Refreshloader from "../../superadmin/Common/Refreshloader";
import axios from "axios";
import { convertTimestamp } from "../../Functions/convertTimestamp";
const GameStatusCard = ({ val, handleRefresh, isRefresh }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResolve, setIsResolve] = useState(false);
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.auth);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  async function updateResult() {
    try {
      const depositeData = {
        gameId: val._id,
        changeTheResult: "true",
      };
      const response = await axios.post(
        "/api/admin/findGameAndChangeResult",
        depositeData,
        {
          headers: {
            Authorization: `bearer ${accessToken}`,
          },
        }
      );
      toast.success(response.data.message);
      handleRefresh();
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  }

  return (
    <div className="flex gap-3 mb-3">
      <div
        onClick={openModal}
        className={`ml-4 cursor-pointer rounded-xl flex justify-center items-center w-[87px] h-[19px] ${
          val.status === "running"
            ? "bg-[#FEAD3A] text-[#FFFFFF] "
            : val.status === "closed"
            ? "bg-[#000000] text-[#FFFFFF] "
            : "bg-gray-400 text-[#FFFFFF]"
        }`}
      >
        <Typography className="font-[Inter] font-normal text-[10px]  ">
          {val.status}
        </Typography>
      </div>

      {isOpen && (
        <div className="rounded-md fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute  inset-0 bg-black opacity-50"></div>
          <div className="bg-white w-[826px] rounded-md shadow-lg z-50">
            <div className="flex px-2 items-center rounded-t-md bg-[#EEEEEE] w-full h-[80px] justify-between">
              <div className="flex items-center gap-2 font-bold font-sans text-[#000000]">
                <div className="p-1 gap-2 h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                  <Icon icon="pajamas:status" width="24" />
                  <span>Game Status</span>{" "}
                </div>
                <div
                  className={`text-white ${
                    val.status === "closed" ? "bg-[#00C300]" : "bg-[#FEAD3A]"
                  }  px-2 p-1 rounded-md flex items-center text-[19.2px]`}
                >
                  {val.status}
                </div>
                <div>GID {val._id}</div>
              </div>
              <div className="flex items-center gap-2">
                {val.status === "closed" ? (
                  <div
                    onClick={() => setIsResolve(true)}
                    className="bg-[#F4F4F4] border cursor-pointer rounded-lg flex justify-center gap-2 items-center p-1"
                  >
                    <span>Resolve Issue now!</span>
                    <Icon icon="octicon:feed-issue-draft-16" width="24" />
                  </div>
                ) : (
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
                )}

                <button
                  onClick={closeModal}
                  className="bg-[#F4F4F4] hover:bg-blue-gray-100 text-white font-bold p-2 rounded-full w-[48px] h-[38.4px]"
                >
                  <Icon icon="charm:cross" className="text-black" width="24" />
                </button>
              </div>
            </div>

            {isResolve ? (
              <div className="w-full h-[465px] flex flex-col p-4">
                <IconButton
                  onClick={() => setIsResolve(false)}
                  className="bg-white m-1 h-[32px]"
                >
                  <Icon className="text-black" width="24" icon="ep:back" />
                </IconButton>
                <div className="flex flex-col  mt-4 ">
                  <p className="pt-2">Resolve the game winner issue :</p>
                  <div className="flex justify-between items-center">
                    <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[40px] min-w-[150px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <p>
                        {" "}
                        <b>Winner </b>
                      </p>
                    </div>
                    <Select label="Select Winner">
                      <Option> {val.player1.slice(-6)}</Option>
                      <Option>{val.player2.slice(-6)}</Option>
                    </Select>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[40px] min-w-[150px] flex items-center justify-between gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <p>
                        {" "}
                        <b>Looser </b>
                      </p>
                    </div>
                    <Select label="Select Looser">
                      <Option> {val.player1.slice(-6)}</Option>
                      <Option>{val.player2.slice(-6)}</Option>
                    </Select>
                  </div>
                </div>
                <div className="flex w-full mt-44 gap-2 justify-end">
                  <Button
                    onClick={updateResult}
                    color="green"
                    className="items-center flex gap-2"
                  >
                    <Icon icon="charm:circle-tick" width="20" />
                    <span>Resolved</span>
                  </Button>
                  <Button
                    className="items-center flex gap-2"
                    onClick={() => setIsResolve(false)}
                    color="red"
                  >
                    <Icon icon="carbon:error" width="20" />
                    <span>Unresolved</span>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="w-full h-[465px] flex ">
                <div className="flex-1 p-4">
                  <p className="w-full m-3">
                    Game started {convertTimestamp(val.gameactivationTimestamp)}
                  </p>
                  <div className="w-full flex items-center">
                    <div className="flex  flex-col  flex-1 justify-center items-center m-auto text-[#0F002B]  font-[Nunito-Sans]">
                      <img
                        alt="user"
                        className="w-[97.3px] h-[97.3px] rounded-full"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      />
                      <span className="flex items-center font-bold text-[30px]">
                        {val.player1.slice(-5)}
                        {val.status && (
                          <Icon
                            icon="bitcoin-icons:verify-outline"
                            width="26"
                          />
                        )}
                      </span>
                      <span className="font-normal text-[20px]">@player1</span>
                    </div>
                    <div className="font-bold text-[#000000] text-[25px]">
                      Vs
                    </div>
                    <div className="flex flex-col  flex-1 justify-center items-center m-auto text-[#0F002B]  font-[Nunito-Sans]">
                      <img
                        alt="user"
                        className="w-[97.3px] h-[97.3px] rounded-full"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      />
                      <span className="flex items-center font-bold text-[30px]">
                        {val.player2.slice(-5)}
                        {val.status && (
                          <Icon
                            icon="bitcoin-icons:verify-outline"
                            width="26"
                          />
                        )}
                      </span>
                      <span className="font-normal text-[20px]">@player2</span>
                    </div>
                  </div>
                  <table className="font-[Inter] text-[#0F002B] m-6 text-[16px] font-normal">
                    <tbody>
                      <tr>
                        <td className="p-1">Battle Type</td>
                        <td className="p-1">Open Challange</td>
                      </tr>
                      <tr>
                        <td className="p-1">Entry Fee</td>
                        <td className="p-1">₹ {val.battleDetails.amount}</td>
                      </tr>
                      <tr>
                        <td className="p-1">Prize</td>
                        <td className="p-1">
                          ₹ {val.battleDetails.amount * 1.95}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="h-[80%] my-auto w-[0.5px]  bg-black " />
                <div className="flex-1 p-4">
                  {val.status === "closed" ? (
                    <div className=" p-2 flex flex-col flex-1 min-w-max mt-12 text-center font-[Inter] font-medium text-[16px]">
                      {val.status === "closed" && (
                        <div className="font-[Inter] text-[24px] font-medium">
                          WINNER!
                        </div>
                      )}
                      <div className="flex flex-col  flex-1 justify-center items-center m-auto text-[#0F002B]  font-[Nunito-Sans]">
                        <img
                          alt="user"
                          className="w-[149pxpx] h-[149px] rounded-full"
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                        />
                        <span className="flex items-center font-bold text-[30px]">
                          {val.gameResultDetail?.player1.outcome === "win"
                            ? val.player1.slice(-5)
                            : val.player2.slice(-5)}
                          {val.status && (
                            <Icon
                              icon="bitcoin-icons:verify-outline"
                              width="26"
                            />
                          )}
                        </span>
                        <span className="font-normal text-[20px]">
                          @{" "}
                          {val.gameResultDetail?.player1.outcome === "win"
                            ? "player1"
                            : "player2"}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="p-2 flex flex-col flex-1 min-w-max mt-12 text-center font-[Inter] font-medium text-[44px]">
                      <span>Game in </span>
                      <span> progress</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameStatusCard;

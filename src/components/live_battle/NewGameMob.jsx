import React, { useEffect, useRef, useState, useContext } from "react";
import "../../App.css";
import { Icon } from "@iconify-icon/react";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import { SidebarMob } from "../MainLayout/SidebarMob";
import NewGameSLider from "./NewGameSLider";
import { useNavigate } from "react-router-dom";
import LiveBattles from "../../assets/new_game/livebattle.svg";
import {
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import ButtonLoader from "../MainLayout/ButtonLoader";
import axios from "axios";
// import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBattles } from "./battleSlice";
import { fetchUserDetail } from "./userSlice";
import { matchUser } from "./matchSlice";
import { toast } from "react-toastify";
import { fetchSocket } from "../../socket";
// import { SocketContext } from "../../socket";
// const socket = io("http://localhost:8003");
// import socket from "../../socket";
const NewGameMob = () => {
  // const { socket, soc } = useContext(SocketContext);
  const { accessToken, refreshToken } = useSelector((state) => state.auth);
  const { socketData } = useSelector((state) => state.socketfor);
  const navigate = useNavigate();
  const [battleAmount, setBattleAmount] = useState("");
  const [buttonStatus, setButtonStatus] = useState("create");
  const [openBottom, setOpenBottom] = useState(false);
  const [openMatchBottom, setOpenMatchBottom] = useState(false);
  const [timers, setTimers] = useState({});
  const [isRequest, setIsRequest] = useState(null);
  const [requestTimer, setRequestTimer] = useState(0);
  const users = useSelector((state) => state.user.user);
  const inputRef = useRef(null);
  // const match = useSelector((state) => state.match);
  // const [battles, setAllBattles] = useState([]);
  const battles = useSelector((state) => state.battle.battles);
  const [activeToggle, setActiveToggle] = useState("live"); // 'live' or 'challenges'

  const handleToggle = (toggle) => {
    setActiveToggle(toggle);
  };

  const openDrawerBottom = () => {
    setOpenBottom(true);
    inputRef.current.focus();
  };
  const closeDrawerBottom = () => {
    setBattleAmount("");
    setButtonStatus("create");
    setOpenBottom(false);
  };
  const dispatch = useDispatch();
  // console.log(battles);
  // useEffect(() => {
  //   socket.on("databaseChange", (data) => {
  //     console.log("inside database changes");
  //     setAllBattles(data);
  //   });
  // socket.emit("allNewGame");
  // socket.on("allNewGame", (data) => {
  //   setAllBattles(data);
  //   dispatch(setAllBattles(data));
  //   console.log(data);
  // });
  // }, []);

  useEffect(() => {
    if (isRequest === false && requestTimer < 50) {
      let requestInterval = setInterval(() => {
        setRequestTimer((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(requestInterval);
    }
  }, [isRequest, requestTimer]);

  useEffect(() => {
    dispatch(fetchAllBattles(socketData));
  }, [buttonStatus, socketData]);
  useEffect(() => {
    dispatch(fetchAllBattles(socketData));
    dispatch(fetchUserDetail());
  }, [socketData]);

  useEffect(() => {
    // socket?.on("battlecreated", (e) => {
    //   console.log(e, "hello world");
    // });

    // socket?.emit("allNewGame");
    // socket?.on("allNewGame", (data) => {
    //   console.log(data, "data okayy so ");
    // });

    dispatch(fetchSocket());
    console.log(socketData, "socket data inside new game");
  }, []);

  useEffect(() => {
    const intervalIds = {};

    battles?.forEach((e) => {
      const id = e._id;
      const previousTimestamp = e.battleTimeStamp;
      const currentTimestamp = Date.now();
      const timeDifference = currentTimestamp - previousTimestamp;
      const timeDifferenceInSeconds = timeDifference / 1000; // Convert to seconds
      const minutes = Math.floor(timeDifferenceInSeconds / 60); // Get the minutes
      const seconds = Math.floor(timeDifferenceInSeconds % 60); // Get the remaining seconds

      if (seconds < 50 && minutes < 1) {
        const initialTimerValue = 50 - seconds;
        intervalIds[id] = setInterval(() => {
          setTimers((prevTimers) => {
            if (prevTimers[id] <= 0 || minutes >= 1) {
              clearInterval(intervalIds[id]);
              return { ...prevTimers, [id]: 0 };
            }
            return {
              ...prevTimers,
              [id]: (prevTimers[id] || initialTimerValue) - 1,
            };
          });
        }, 1000);
        setTimers((prevTimers) => ({ ...prevTimers, [id]: initialTimerValue }));
      } else {
        setTimers((prevTimers) => ({ ...prevTimers, [id]: 0 }));
      }
    });
    // if (seconds < 50 && minutes < 1) {
    //   intervalIds[id] = setInterval(() => {
    //     setTimers((prevTimers) => {
    //       if (prevTimers[id] >= 50 || minutes >= 1) {
    //         return { ...prevTimers, [id]: 50 };
    //       }
    //       return { ...prevTimers, [id]: (prevTimers[id] || 0) + 1 };
    //     });
    //   }, 1000);
    //   setTimers((prevTimers) => ({ ...prevTimers, [id]: seconds }));
    // } else {
    //   setTimers((prevTimers) => ({ ...prevTimers, [id]: 50 }));
    // }
    return () => {
      Object.values(intervalIds).forEach((intervalId) =>
        clearInterval(intervalId)
      );
    };
  }, [battles]);
  const battleCreationTime = (e) => {
    const previousTimestamp = e.battleTimeStamp;
    const currentTimestamp = Date.now();
    const timeDifference = currentTimestamp - previousTimestamp;
    const timeDifferenceInSeconds = Math.floor(timeDifference / (1000 * 60));
    // return timeDifferenceInSeconds;
    if (timeDifferenceInSeconds === 0) {
      return "Now";
    } else if (timeDifferenceInSeconds < 60) {
      return Math.floor(timeDifferenceInSeconds) + "min ago";
    } else {
      const timeDifferenceInHours = timeDifferenceInSeconds / 60;
      return Math.floor(timeDifferenceInHours) + " hr ago";
    }
  };

  const handleCreate = async () => {
    try {
      setButtonStatus("loading");
      if (battleAmount === "") {
        toast.error("Please fill in the battle amount");
        setBattleAmount("");
        setButtonStatus("create");
        return;
      }
      if (battleAmount < 50 || battleAmount > 20000) {
        toast.error(
          "Battle amount should be greater than 50 and less than 20,000"
        );
        setBattleAmount("");
        setButtonStatus("create");
        return;
      }
      const response = await axios.post(
        "api/game/newgame",
        { battleAmount: battleAmount },
        {
          headers: {
            Authorization: `bearer ${accessToken}`,
          },
        }
      );

      const data = response.data;
      if (data.message === "You don't have sufficient amount!") {
        toast.error(data.message);
        setButtonStatus("create");
        setBattleAmount("");
      } else {
        setButtonStatus("success");
        setBattleAmount("");
        closeDrawerBottom();
      }
      if (response.status === 200) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      if (error.response.status != 200) {
        toast.error(error.response.data.message);
        setButtonStatus("create");
        setBattleAmount("");
      }
    }
  };

  const openmatchDrawerBottom = async (e) => {
    if (!users) return;
    if (users?._id === e?.player1) {
      toast.error("you have to wait until other user can't join the battle");
      return;
    }

    const data = {
      battleAmount: e?.amount,
      id: e?._id,
      player1: e?.player1,
    };
    if (users?._id !== e._id) {
      setIsRequest(false);
      setOpenMatchBottom(true);
      dispatch(matchUser({ data, setIsRequest, closematchDrawerBottom }));
    }
  };

  const handleBattleAmountChange = (e) => {
    const value = e.target.value;
    // Use regex to allow only numeric values
    if (/^\d*$/.test(value)) {
      setBattleAmount(value);
    }
  };
  const closematchDrawerBottom = () => setOpenMatchBottom(false);
  return (
    <div className="max-w-[480px] w-full min-h-screen h-full">
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

      <div className="bg-[#0f002b] w-full min-h-screen overflow-hidden relative">
        <div className="bg-[#fead3a] h-80 w-[650px] rounded-[50%]   -top-20 absolute -left-24" />
        <div className="py-4">
          <NewGameSLider />
        </div>
        <div className="relative m-6">
          <div className="border-[2px] border-white shadow-lg bg-[#fead3a] flex flex-col p-4 gap-6 w-full  max-w-screen items-start rounded-lg pb-8">
            <div
              id="StartYourOwnBattle1"
              className="text-xl font-['Inter'] text-[#0f002b]"
            >
              start your own <span className="font-bold">battle</span>
            </div>
            <div
              onClick={openDrawerBottom}
              className="cursor-pointer shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex justify-between  w-full items-center px-4 py-2 rounded-lg"
            >
              <div className="flex w-full pr-3">
                <span>₹</span>
                <p className="outline-none pl-2  focus:outline-none w-full">
                  Your battle amount
                </p>
              </div>

              <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-[#fead3a] flex rounded-full p-2">
                <Icon icon="arcticons:battleforwesnoth" width="24" />
              </div>
            </div>
            {/* <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex justify-between w-full items-center px-4 py-2 rounded-lg">
              <Icon
                className="cursor-pointer hover:scale-110 transition-transform"
                icon="logos:whatsapp-icon"
                width="32"
              />
              <Icon
                className="cursor-pointer hover:scale-110 transition-transform"
                icon="logos:facebook"
                width="32"
              />
              <Icon
                className="cursor-pointer hover:scale-110 transition-transform"
                icon="ri:twitter-x-fill"
                width="30"
              />
              <Icon
                className="cursor-pointer hover:scale-110 transition-transform"
                icon="solar:copy-linear"
                width="30"
              />
              <Icon
                className="cursor-pointer hover:scale-110 transition-transform"
                icon="mdi:share"
                width="32"
              />
            </div> */}
            {/* <div className="flex items-center justify-center w-full m-auto">
              <img
                src="https://file.rendit.io/n/KPwS2RCsAs5e6sLj4eAj.svg"
                alt="Line"
                id="Line"
                className="w-24"
              />
            </div> */}
          </div>
        </div>

        <div className="m-6 relative ">
          <div className="mb-4 shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white relative w-full  max-w-screen  flex flex-col gap-6 items-start rounded-lg p-2 pb-8">
            <div className="flex flex-col w-full">
              <div className="flex w-full space-x-0.5 bg-white">
                <button
                  className={`flex-1 py-2 px-4 rounded-lg text-black font-semibold focus:outline-none transition-all duration-300 ${
                    activeToggle === "live"
                      ? "bg-[#fead3a] text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => handleToggle("live")}
                >
                  Live <b>battle</b>
                </button>
                <button
                  className={`flex-1 py-2 px-4 rounded-lg text-black font-semibold focus:outline-none transition-all duration-300 ${
                    activeToggle === "challenges"
                      ? "bg-[#fead3a] text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => handleToggle("challenges")}
                >
                  Open <b>challenges</b>
                </button>
              </div>

              <div className="mt-4">
                <ul
                  className={` transition-transform duration-300 ease-in-out ${
                    activeToggle === "live"
                      ? "opacity-100 translate-y-0"
                      : "-translate-y-2"
                  }`}
                >
                  {activeToggle === "live" && (
                    <div className="p-2 flex flex-col  gap-4 m-auto w-full">
                      {users &&
                        battles?.length > 0 &&
                        battles?.map((e) => (
                          <div
                            key={e._id}
                            className="inline-flex flex-col justify-between w-full min-h-[120px] items-center border rounded-[10px] shadow-[0px_0px_40px_6px_rgba(0,_0,_0,_0.25)] bg-white border-solid border-[rgba(15,_0,_43,_0.2)]"
                          >
                            <div className="font-['Inter'] text-[#0f002b] w-full py-4 px-4 flex  justify-between">
                              <div className="italic">
                                open challenge from
                                <span className="font-extrabold pl-1">
                                  {e.player1.slice(
                                    e.player1.length - 6,
                                    e.player1.length
                                  )}
                                </span>
                              </div>

                              <div className="italic font-semibold ">
                                · {battleCreationTime(e)}
                              </div>
                            </div>
                            <div className="bg-[#fca837] shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] rounded-br-md rounded-bl-md  flex  gap-16  items-center justify-between w-full p-4 mb-0">
                              <div className="flex flex-col w-1/2 text-4 font-['Inter'] text-white font-extrabold">
                                <div className="flex justify-between ">
                                  <span>Entry fee</span>
                                  <span>₹{e.amount}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Prize</span>
                                  <span> ₹{e.amount * 1.95}</span>
                                </div>
                              </div>
                              {users?._id === e.player1 ? (
                                <div className=" flex w-[42px] h-[42px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]">
                                  <span className="text-white">
                                    {timers[e._id]}
                                  </span>
                                </div>
                              ) : (
                                <div
                                  onClick={() => openmatchDrawerBottom(e)}
                                  className="cursor-pointer flex w-[42px] h-[42px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]"
                                >
                                  <img
                                    src={LiveBattles}
                                    alt="Arcticonsbattleforwesnoth"
                                    className="w-4"
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                  {activeToggle === "challenges" && (
                    <div className="mt-4 flex flex-wrap justify-start gap-5 w-full m-auto">
                      {Array.from({ length: 4 }, (_, index) => (
                        <div key={index} className="shadow-[0px_0px_2px_1px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col justify-end gap-3  w-[170px] h-[170px] items-start pt-3 pb-1 px-1 rounded-lg">
                          <div className="flex flex-col ml-3 w-2/3 items-start">
                            <div
                              id="LiveBattle1"
                              className="text-xs font-['Inter'] text-[#0f002b]"
                            >
                              live <span className="font-bold">battle</span>
                            </div>
                            <div
                              id="StartedMinAgo2"
                              className="text-xs font-['Inter'] font-bold text-[#0f002b]"
                            >
                              ·<span> started </span>
                              <span>5min ago</span>
                            </div>
                          </div>
                          <div className="shadow-[inset_0px_0px_12px_0px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-[#fead3a] relative flex flex-row justify-center pt-8 w-full items-start rounded-br-lg rounded-bl-lg">
                            <div className="text-xl font-['Inter'] font-bold text-[#0f002b] absolute top-1 left-3 h-6 w-20">
                              ravan3p
                            </div>
                            <div className="shadow-[0px_11px_11px_0px_rgba(0,_0,_0,_0.25)] w-2/3 h-[113px] bg-[#0f002b] absolute top-0 left-20 flex flex-row justify-center pt-8 items-start rounded-tl-[86.39999389648438px] rounded-bl-[86.39999389648438px]">
                              <img
                                src="https://file.rendit.io/n/dzvjOLVXy80wPZnly7SR.svg"
                                alt="Arcticonsbattleforwesnoth2"
                                className="w-12"
                              />
                            </div>
                            <div className="text-xl font-['Inter'] font-bold text-white absolute top-20 left-3 h-6 w-24">
                              kansh23i
                            </div>
                            <img
                              src="https://file.rendit.io/n/q7ht7E6QOUQA59yGnbt3.svg"
                              alt="Materialsymbolsplaycircle"
                              className="relative mb-8 w-12"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white relative w-full  max-w-screen  flex flex-col gap-6 items-start rounded-lg p-2 pb-8">
            <div className="text-center text-xl font-['Inter'] text-[#0f002b] ml-6  top-5">
              live <span className="font-bold">battle</span>
            </div>
            <div className="p-2 flex flex-col  gap-4 m-auto w-full">
              {users &&
                battles?.length > 0 &&
                battles?.map((e) => (
                  <div
                    key={e._id}
                    className="inline-flex flex-col justify-between w-full min-h-[168px] items-center border rounded-[10px] shadow-[0px_0px_40px_6px_rgba(0,_0,_0,_0.25)] bg-white border-solid border-[rgba(15,_0,_43,_0.2)]"
                  >
                    <div className="font-['Inter'] text-[#0f002b] w-full py-2 px-4 flex flex-col justify-start">
                      <div className="italic">
                        open challenge from
                        <span className="font-extrabold pl-1">
                          {e.player1.slice(
                            e.player1.length - 6,
                            e.player1.length
                          )}
                        </span>
                      </div>
                      2
                      <div className="italic font-semibold ">
                        · {battleCreationTime(e)}
                      </div>
                    </div>
                    <div className="bg-[#fca837] shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] rounded-br-md rounded-bl-md  flex  gap-16  items-center justify-between w-full m-3 p-6 mb-0">
                      <div className="flex flex-col w-1/2 text-4 font-['Inter'] text-white font-extrabold">
                        <div className="flex justify-between ">
                          <span>Entry fee</span>
                          <span>₹{e.amount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Prize</span>
                          <span> ₹{e.amount * 1.95}</span>
                        </div>
                      </div>
                      {users?._id === e.player1 ? (
                        <div className=" flex w-[42px] h-[42px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]">
                          <span className="text-white">{timers[e._id]}</span>
                        </div>
                      ) : (
                        <div
                          onClick={() => openmatchDrawerBottom(e)}
                          className="cursor-pointer flex w-[42px] h-[42px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]"
                        >
                          <img
                            src={LiveBattles}
                            alt="Arcticonsbattleforwesnoth"
                            className="w-4"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}

          
            </div>
          </div>
          <div
            onClick={() => navigate("/LiveBattle", { state: { battles } })}
            className="shadow-[0px_0px_4px_1px_rgba(0,_0,_0,_0.25)] bg-white  flex flex-row justify-center -mt-6 relative ml-[42%] pt-2 w-12 h-12 items-start rounded-[24px]"
          >
            <img
              src="https://file.rendit.io/n/PZF2SOJvNd8p90uk3rGr.svg"
              alt="HardwareKeyboardArrowDown icon"
              id="Phcaretdown"
              className="w-6 mt-1"
            />
          </div> */}
          {/* <div className="absolute bottom-7 inset-0 bg-gradient-to-b from-transparent to-white opacity-50" /> */}
        </div>

        <Drawer
          placement="bottom"
          open={openMatchBottom}
          // onClose={closeDrawerBottom}
          className="p-4 w-[480px] bg-[#0f002b] rounded-t-3xl"
        >
          {isRequest == false && (
            <div className="flex flex-col p-4">
              <div className="mb-4 flex items-center  w-full justify-center gap-2">
                <div className="bg-white p-7 w-32 h-32 rounded-full relative flex justify-center items-center">
                  <div className="text-[#00C300] bold text-6xl ">
                    {requestTimer}
                  </div>
                </div>
              </div>
              <Typography
                color="white"
                className="flex justify-center text-xl font-bold"
              >
                Requesting...
              </Typography>
            </div>
          )}
          {isRequest == true && (
            <div>
              <div className="flex justify-center gap-6 mt-10 w-full">
                <Button
                  onClick={closematchDrawerBottom}
                  className="bg-[#0f002b] text-white text-lg font-extrabold  border border-gray-600  rounded-md"
                >
                  Reject
                </Button>
                <Button
                  onClick={() => navigate("/chat")}
                  className="bg-white text-[#0f002b] text-lg font-extrabold border border-white "
                >
                  Start
                </Button>
              </div>
              <Typography
                color="gray"
                className=" mt-12 pr-4 flex justify-center font-normal"
              >
                Reject will delete this open challenges from list
              </Typography>
            </div>
          )}
        </Drawer>

        <Drawer
          placement="bottom"
          open={openBottom}
          onClose={closeDrawerBottom}
          className="w-[480px] p-4  bg-[#fead3a] rounded-t-3xl"
        >
          <div className="mb-4 flex items-center justify-start gap-2">
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={closeDrawerBottom}
            >
              <Icon icon="ep:back" className="text-white" width="24" />
            </IconButton>
            <Typography variant="h5" color="white">
              Enter Battle Amount
            </Typography>
          </div>
          <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex justify-between  w-full items-center px-4 py-2 rounded-lg">
            <div className="flex w-full pr-3" onClick={openDrawerBottom}>
              <span>₹</span>
              <input
                inputMode="numeric"
                pattern="[0-9]*"
                ref={inputRef}
                value={battleAmount}
                onChange={handleBattleAmountChange}
                placeholder="Your battle amount"
                className="outline-none pl-2  focus:outline-none w-full"
              />
            </div>
            <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-[#fead3a] flex rounded-full p-2">
              <Icon icon="arcticons:battleforwesnoth" width="24" />
            </div>
          </div>

          <Typography className="mb-4 mt-12 pr-4 flex justify-center font-normal">
            You are creating a new open battle
          </Typography>
          <div className="flex justify-center w-full">
            {buttonStatus === "success" ? (
              <Button
                onClick={closeDrawerBottom}
                className="bg-white text-[#0f002b] text-lg font-extrabold w-4/5"
              >
                Success
              </Button>
            ) : buttonStatus === "loading" ? (
              <Button
                className="bg-white text-[#0f002b] text-lg font-extrabold w-4/5 "
                disabled
              >
                <ButtonLoader />
              </Button>
            ) : (
              <Button
                className="bg-white text-[#0f002b] text-lg font-extrabold w-4/5 "
                onClick={handleCreate}
              >
                Create!
              </Button>
            )}
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default NewGameMob;



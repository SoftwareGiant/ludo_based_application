import React, { useEffect, useRef, useState, useContext } from "react";
import "../../App.css";
import { Icon } from "@iconify-icon/react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBattles } from "./battleSlice";
import { fetchUserDetail } from "./userSlice";
import { matchUser } from "./matchSlice";
import { toast } from "react-toastify";
import { fetchSocket } from "../../socket";
import { useJwt } from "react-jwt";
import LudoMainLogo from "../MainLayout/LudoMainLogo";
import { fetchOpenChallenges } from "./openChallengeSlice";
import TotoalBal, {
  LoginBtn,
  ProfileButton,
} from "../MainLayout/ProfileButton";
import { convertTimestamp } from "../admin_and_S.admin/Functions/convertTimestamp";
const NewGameMob = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const { decodedToken } = useJwt(accessToken);
  const { socketData } = useSelector((state) => state.socketfor);
  let { match } = useSelector((state) => state.match);
  const navigate = useNavigate();
  const [battleAmount, setBattleAmount] = useState("");
  const [buttonStatus, setButtonStatus] = useState("create");
  const [openBottom, setOpenBottom] = useState(false);
  const [deleteDrawer, setDeleteDrawer] = useState(false);
  const [openMatchBottom, setOpenMatchBottom] = useState(false);
  const [timers, setTimers] = useState({});
  const [isRequest, setIsRequest] = useState(null);
  const [requestTimer, setRequestTimer] = useState(0);
  const users = useSelector((state) => state.user.user);
  const inputRef = useRef(null);
  let battles = useSelector((state) => state.battle.battles);
  const [activeToggle, setActiveToggle] = useState("live"); // 'live' or 'challenges'
  const [battleToPlay, setBattleToPlay] = useState();
  const [deleteBattleId, setSeleteBAttleId] = useState("");
  const [iscodeWait, setIscodewait] = useState(false);
  const openChallenges = useSelector((state) => state.opengame.openChallenges);
  const dispatch = useDispatch();
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

  const handleDeleteOption = (battleid) => {
    setSeleteBAttleId(battleid);
    setDeleteDrawer(true);
  };
  const handleCloseDeleteBattle = () => {
    setSeleteBAttleId("");
    setDeleteDrawer(false);
  };

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
    dispatch(fetchOpenChallenges());
  }, [socketData]);

  // useEffect(() => {
  //   if (socketData) {
  //     socketData?.on("match", (e) => {
  //       return toast.success(e.message);
  //     });
  //     socketData?.on("databaseChange", (data) => {
  //       dispatch(fetchAllBattles(socketData));
  //     });
  //     socketData?.on("updatecode", ({ gameCode, player2 }) => {
  //       toast.success(`code to start game ${gameCode}`);

  //       return navigate(`/chat/${player2}/player2`);

  //     });
  //   }
  // }, [socketData]);

  useEffect(() => {
    const handleMatch = (e) => {
      if (e.message === "You get matched!!") setIscodewait(true);
      toast.success(e.message);
    };

    const handleDatabaseChange = (data) => {
      dispatch(fetchAllBattles(socketData));
    };

    const handleUpdateCode = ({ gameCode, player2 }) => {
      setIscodewait(false);
      toast.success(`code to start game ${gameCode}`);
      navigate(`/chat/${player2}/player2`);
      // Remove the event listener after navigation
      socketData?.off("updatecode", handleUpdateCode);
    };

    if (socketData) {
      socketData?.on("match", handleMatch);
      socketData?.on("databaseChange", handleDatabaseChange);
      socketData?.on("updatecode", handleUpdateCode);
    }

    // Cleanup function to remove event listeners when the component unmounts or socketData changes
    return () => {
      if (socketData) {
        socketData?.off("match", handleMatch);
        socketData?.off("databaseChange", handleDatabaseChange);
        socketData?.off("updatecode", handleUpdateCode);
      }
    };
  }, [socketData]);

  useEffect(() => {
    console.log(match);
    if (match) {
      const player1 = match?.newGameDetail?.player1;
      if (player1) {
        navigate(`/chat/${player1}/player1/`);
        window.location.reload();
      }
    }
  }, [match]);

  useEffect(() => {
    if (decodedToken) {
      dispatch(fetchSocket(decodedToken));
    }
  }, [decodedToken]);

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

      if (seconds < 100 && minutes < 1) {
        const initialTimerValue = 100 - seconds;
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
    return () => {
      Object.values(intervalIds).forEach((intervalId) =>
        clearInterval(intervalId)
      );
    };
  }, [battles]);

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
          "Battle amount should be equal or greater than 50 and less than 20,000"
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
        return toast.success(data.message);
      } else {
        return toast.error(data.message);
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
    setOpenMatchBottom(true);
    setIsRequest(false);
    setBattleToPlay({
      battleAmount: e?.amount,
      id: e?._id,
      player1: e?.player1,
    });
  };

  const creategame = async (e) => {
    dispatch(
      matchUser({ data: battleToPlay, setIsRequest, closematchDrawerBottom })
    );
  };

  const handleBattleAmountChange = (e) => {
    const value = e.target.value;
    // Used regex to allow only numeric values
    if (/^\d*$/.test(value)) {
      setBattleAmount(value);
    }
  };

  const handleDelete = async (battleid) => {
    try {
      const battleId = {
        battleId: battleid,
      };
      const response = await axios.post("/api/game/deletebattle", battleId, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Ensure the correct capitalization for "Bearer"
        },
      });
      toast.success(response.data.message);
      dispatch(fetchAllBattles(socketData));
      handleCloseDeleteBattle();
      return response.data;
    } catch (error) {
      toast.error(error.message);
      throw error;
    }
  };
  const closematchDrawerBottom = () => setOpenMatchBottom(false);
  const handleOpenBattleNavigate = (battleItem) => {
    if (
      users?._id === battleItem?.player1 ||
      users?._id === battleItem?.player2
    )
      navigate(`/matchstart`);
  };

  return (
    <div className="max-w-[480px] bg-[#0f002b] w-full min-h-screen h-full">
      <div className="bg-[#fead3a] fixed  flex justify-between items-center max-w-[480px] top-5 z-50   w-full  h-[51px]  px-4">
        <div className="flex flex-row gap-3 items-start">
          <SidebarMob users={users} />
          <LudoMainLogo />
        </div>
        {!users ? (
          <LoginBtn />
        ) : (
          <div className="flex gap-2 items-center">
            <TotoalBal users={users} />
            <ProfileButton />
          </div>
        )}
      </div>

      <div className="bg-[#0f002b] w-full  overflow-hidden relative">
        <div className="bg-[#fead3a] h-[350px] w-[650px] rounded-[50%]   -top-20 absolute -left-24" />
        <div className="py-8 mt-12 ">
          <NewGameSLider />
        </div>

        {!users ? (
          <div className="relative m-6 mt-0">
            <div className="bg-[#0f002b] shadow-xl hover:shadow-2xl  border border-gray-700 hover:border-gray-600 transition-all  flex items-center gap-6 text-white rounded-xl p-6 px-18">
              <p className="text-xl">Click to see Full Game Rules</p>
              <div
                onClick={() => navigate("/gamerule")}
                className="flex justify-center items-center w-[32px] h-[32px] cursor-pointer"
              >
                <Icon icon="mingcute:arrow-right-line" width={32} />
              </div>
            </div>
          </div>
        ) : (
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
                <div className="flex text-lg  w-full pr-3">
                  <span>₹</span>
                  <p className="outline-none font-semibold pl-2 opacity-[50%] focus:outline-none w-full">
                    Your battle amount
                  </p>
                </div>

                <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-[#fead3a] flex rounded-full p-2">
                  <Icon icon="arcticons:battleforwesnoth" width="24" />
                </div>
              </div>
            </div>
          </div>
        )}
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
                    <div className="p-2 flex flex-col  gap-5 m-auto w-full">
                      {users &&
                        battles?.length > 0 &&
                        battles?.map((e) => (
                          <div
                            key={e._id}
                            className="inline-flex relative flex-col justify-between w-full min-h-[120px] items-center border rounded-[10px] shadow-[0px_0px_40px_6px_rgba(0,_0,_0,_0.25)] bg-white border-solid border-[rgba(15,_0,_43,_0.2)]"
                          >
                            <div className="font-['Inter'] text-[#0f002b] w-full py-4 px-4 flex  justify-between">
                              {users?._id === e?.player1 && (
                                <div className="absolute   -top-4  -right-2">
                                  <IconButton
                                    onClick={() => handleDeleteOption(e._id)}
                                    // color="black"

                                    className="rounded-full bg-[#0f002b] h-[36px]  w-[36px]"
                                  >
                                    <Icon
                                      icon="fluent:delete-12-regular"
                                      width={24}
                                    />
                                  </IconButton>
                                </div>
                              )}

                              <div className="italic">
                                {users?._id === e?.player1 ? (
                                  <span className="font-extrabold pl-1">
                                    Your battle
                                  </span>
                                ) : (
                                  <div>
                                    open challenge from
                                    <span className="font-extrabold pl-1">
                                      {e.player1.slice(-6)}
                                    </span>
                                  </div>
                                )}
                              </div>

                              <div className="italic font-semibold ">
                                · {convertTimestamp(e.battleTimeStamp)}
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
                              <IconButton className="rounded-full">
                                {users?._id === e.player1 ? (
                                  <div className=" flex w-[42px] h-[42px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]">
                                    <span
                                      className={`text-white animate-pulse`}
                                    >
                                      {timers[e._id] <= 0
                                        ? "wait.."
                                        : timers[e._id]}
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
                              </IconButton>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                  {activeToggle === "challenges" && (
                    <div className="mt-4 flex flex-wrap justify-start gap-5 w-full m-auto">
                      {openChallenges?.map((item, index) => (
                        <div
                          onClick={() => handleOpenBattleNavigate(item)}
                          key={item._id}
                          className="cursor-pointer shadow-[0px_0px_2px_1px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col justify-end gap-3  w-[160px] h-[170px] items-start pt-3 pb-1 px-1 rounded-lg transition-all hover:shadow-[0px_0px_6px_3px_rgba(0,_0,_0,_0.25)]"
                        >
                          <div className="flex flex-col ml-3  items-start">
                            <div
                              id="LiveBattle1"
                              className="text-xs font-['Inter'] text-[#0f002b]"
                            >
                              live <span className="font-bold">battle</span>
                            </div>
                            <div
                              id="StartedMinAgo2"
                              className="w-32 truncate ... text-xs font-['Inter'] font-bold text-[#0f002b]"
                            >
                              ·<span> started </span>
                              <span>
                                {convertTimestamp(item.matchingTimeStamp)}
                              </span>
                            </div>
                          </div>
                          <div className="shadow-[inset_0px_0px_12px_0px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-[#fead3a] relative flex h-[110px] flex-row justify-center pt-8 w-full items-start rounded-br-lg rounded-bl-lg">
                            <div className="text-lg font-['Inter'] font-bold text-[#0f002b] absolute top-1 left-3 h-6 w-20">
                              {item?.player1.slice(-6)}
                            </div>
                            <div className="shadow-[0px_11px_11px_0px_rgba(0,_0,_0,_0.25)] w-2/3 h-[113px] bg-[#0f002b] absolute top-0 left-20 flex flex-row justify-center pt-8 items-start rounded-tl-[86.39999389648438px] rounded-bl-[86.39999389648438px]">
                              <Icon
                                width={44}
                                icon="arcticons:battleforwesnoth"
                                style={{ color: "white" }}
                              />
                            </div>
                            <div className="text-lg font-['Inter'] font-bold text-white absolute top-20 left-3 h-6 w-24">
                              {item?.player2.slice(-6)}
                            </div>
                            <Icon
                              className="relative mb-8 w-12"
                              width={42}
                              icon="icon-park-solid:play"
                              style={{ color: "white" }}
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
        </div>

        <Drawer
          placement="bottom"
          open={openMatchBottom}
          onClose={closematchDrawerBottom}
          className="p-4 w-[480px] bg-[#0f002b] rounded-t-3xl"
        >
          {isRequest == true && (
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
          {isRequest == false && (
            <div>
              <div className="flex justify-center gap-6 mt-10 w-full">
                <Button
                  onClick={closematchDrawerBottom}
                  className="bg-[#0f002b] text-white text-lg font-extrabold  border border-gray-600  rounded-md"
                >
                  Cancel
                </Button>
                <Button
                  onClick={creategame}
                  className="bg-white text-[#0f002b] text-lg font-extrabold border border-white "
                >
                  Start
                </Button>
              </div>
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
              <span className=" text-xl font-semibold">₹</span>
              <input
                inputMode="numeric"
                pattern="[0-9]*"
                ref={inputRef}
                value={battleAmount}
                onChange={handleBattleAmountChange}
                placeholder="Your battle amount"
                className="outline-none pl-2 text-xl font-semibold focus:outline-none w-full"
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

        <Drawer
          placement="bottom"
          open={deleteDrawer}
          onClose={handleCloseDeleteBattle}
          className="w-[480px] p-4  bg-[#0f002b] rounded-t-3xl"
        >
          <div className="w-[50%] h-[2px] bg-white rounded-full m-auto -mt-1" />
          {/* <div className="mb-4 flex items-center justify-start gap-2">
            <IconButton
              onClick={handleCloseDeleteBattle}
              variant="text"
              color="blue-gray"
            >
              <Icon icon="ep:back" className="text-white" width="24" />
            </IconButton>
          </div> */}

          <Typography className="mb-10 mt-8  px-4  flex  gap-2 text-2xl text-white justify-center font-semibold">
            Delete this battle{" "}
            <span className="font-extralight"> (permanently)</span> !
          </Typography>
          <div className="flex justify-center gap-2 px-8 w-[80%] m-auto">
            <Button
              onClick={handleCloseDeleteBattle}
              color="white"
              variant="outlined"
              className="w-full flex justify-center items-center gap-2"
            >
              <Icon icon="mdi:cancel" width={18} />
              <p className="text-sm mt-[2px]">cancel</p>
            </Button>
            <Button
              onClick={() => handleDelete(deleteBattleId)}
              color="white"
              className="w-full flex justify-center items-center gap-2"
            >
              <Icon icon="fluent:delete-12-regular" width={20} />
              <p className="text-sm mt-[2px]">delete</p>
            </Button>
          </div>
          <p className="text-gray-400 px-6 pt-5 text-center">
            *Deleting a match cannot be undone.
          </p>
        </Drawer>

        <Drawer
          placement="bottom"
          open={iscodeWait}
          className="p-4 z-[2000px]  w-[480px] bg-[#fead3a] rounded-t-3xl"
        >
          <div className="flex flex-col p-4">
            <div className="mb-4 flex items-center  w-full justify-center gap-2">
              <div className="bg-white p-7 w-32 h-32 rounded-full relative flex justify-center items-center">
                <div className="text-[#00C300] animate-pulse bold text-2xl ">
                  wait...
                </div>
              </div>
            </div>

            <Typography
              color="white"
              className="flex justify-center animate-pulse text-black text-xl font-bold"
            >
              Wait for code...
            </Typography>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default NewGameMob;

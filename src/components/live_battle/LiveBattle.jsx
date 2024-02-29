import React, { useEffect, useState } from "react";
import { SidebarMob } from "../MainLayout/SidebarMob";
import FrameProfile from "../../assets/profile/Frame_profile.png";
import LiveBattles from "../../assets/new_game/livebattle.svg";
import { useLocation, useNavigate } from "react-router-dom";
import TopbarMobile from "../MainLayout/TopbarMobile";
import { Button, Drawer, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBattles } from "./battleSlice";
import { matchUser } from "./matchSlice";
import { fetchUserDetail } from "./userSlice";

const LiveBattle = () => {
  const dispatch = useDispatch();
  const [openBottom, setOpenBottom] = useState(false);
  const [isRequest, setIsRequest] = useState(null);
  const [timers, setTimers] = useState({});
  const navigate = useNavigate();
  const battles = useSelector((state) => state.battle.battles);
  const users = useSelector((state) => state.user.user);
  const match = useSelector((state) => state.match);
  console.log(match);
  const [requestTimer, setRequestTimer] = useState(0);
  // console.log(users);
  // const newGameDetail = useSelector((state) => state.match.match);
  // console.log(newGameDetail);
  // console.log(battles);
  useEffect(() => {
    dispatch(fetchAllBattles());
    dispatch(fetchUserDetail());
  }, []);
  useEffect(() => {
    console.log("hi");
    if (isRequest === false && requestTimer < 50) {
      let requestInterval = setInterval(() => {
        setRequestTimer((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(requestInterval);
    }
  }, [isRequest, requestTimer]);

  useEffect(() => {
    const intervalIds = {};

    battles.forEach((e) => {
      const id = e._id;
      const previousTimestamp = e.battleTimeStamp;
      const currentTimestamp = Date.now();
      const timeDifference = currentTimestamp - previousTimestamp;
      const timeDifferenceInSeconds = timeDifference / 1000; // Convert to seconds
      const minutes = Math.floor(timeDifferenceInSeconds / 60); // Get the minutes
      const seconds = Math.floor(timeDifferenceInSeconds % 60); // Get the remaining seconds

      if (seconds < 50 && minutes < 1) {
        intervalIds[id] = setInterval(() => {
          setTimers((prevTimers) => {
            if (prevTimers[id] >= 50 || minutes >= 1) {
              return { ...prevTimers, [id]: 50 };
            }
            return { ...prevTimers, [id]: (prevTimers[id] || 0) + 1 };
          });
        }, 1000);
        setTimers((prevTimers) => ({ ...prevTimers, [id]: seconds }));
      } else {
        setTimers((prevTimers) => ({ ...prevTimers, [id]: 50 }));
      }
    });
    return () => {
      Object.values(intervalIds).forEach((intervalId) =>
        clearInterval(intervalId)
      );
    };
  }, [battles]);
  // console.log(users?.user._id);
  const battleCreationTime = (e) => {
    const previousTimestamp = e.battleTimeStamp;
    const currentTimestamp = Date.now();
    const timeDifference = currentTimestamp - previousTimestamp;
    const timeDifferenceInSeconds = timeDifference / (1000 * 60);
    return timeDifferenceInSeconds;
  };

  const openDrawerBottom = async (e) => {
    // console.log(e.player1)
    // console.log(users?.user._id)
    if (users?.user._id === e.player1) {
      alert("you have to wait until other user can't join the battle");
      return;
    }

    const data = {
      battleAmount: e.amount,
      id: e._id,
      player1: e.player1,
    };
    if (users?.user._id !== e._id) {
      setIsRequest(false);
      setOpenBottom(true);
      dispatch(matchUser({ data, setIsRequest ,closeDrawerBottom}));
    }
  };
  const closeDrawerBottom = () => setOpenBottom(false);
  return (
    <div className="min-h-screen h-full bg-[#0f002b]">
      <TopbarMobile />
      <div className="bg-white w-full pt-20">
        <div className="flex justify-between items-center px-4 py-2 w-full">
          <div className="flex gap-5 items-center">
            <img
              onClick={() => navigate("/")}
              src="https://file.rendit.io/n/Bh3TjQUvsgxuYLevIVW7.svg"
              alt="HardwareKeyboardBackspace icon"
              id="Epback"
              className="w-6"
            />
            <div
              id="LiveBattle13"
              className="text-center text-xl font-['Inter'] text-[#0f002b]"
            >
              live <span className="font-bold">battle</span>
            </div>
          </div>
          <img
            onClick={() => navigate("/help")}
            src="https://file.rendit.io/n/ib8IMr1PTiCuwTfVAXZs.svg"
            alt="ActionInfoOutline icon"
            id="Icoutlineinfo"
            className="w-6"
          />
        </div>
        <div className="p-6 flex flex-col  gap-4 m-auto w-full">
          {battles.length > 0 &&
            battles.slice(0, 2).map((e) => (
              <div
                key={e._id}
                className="inline-flex flex-col justify-between w-full min-h-[168px] items-center border rounded-[10px] shadow-[0px_0px_40px_6px_rgba(0,_0,_0,_0.25)] bg-white border-solid border-[rgba(15,_0,_43,_0.2)]"
              >
                <div className="font-['Inter'] text-[#0f002b] w-full py-2 px-4 flex flex-col justify-start">
                  <div className="italic">
                    open challenge from
                    <span className="font-extrabold pl-1">
                      {e.player1.slice(e.player1.length - 6, e.player1.length)}
                    </span>
                  </div>
                  2
                  <div className="italic font-semibold ">
                    ·{" "}
                    {Math.floor(battleCreationTime(e)) == 0
                      ? "Now"
                      : `${Math.floor(battleCreationTime(e))} Minutes ago`}
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
                  {users?.user._id === e.player1 ? (
                    <div className=" flex w-[42px] h-[42px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]">
                      <span className="text-white">{timers[e._id]}</span>
                    </div>
                  ) : (
                    <div
                      onClick={() => openDrawerBottom(e)}
                      className=" flex w-[42px] h-[42px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]"
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
          {/* <div className="inline-flex flex-col justify-between w-full min-h-[168px] items-center border rounded-[10px] shadow-[0px_0px_40px_6px_rgba(0,_0,_0,_0.25)] bg-white border-solid border-[rgba(15,_0,_43,_0.2)]">
            <div className="font-['Inter'] text-[#0f002b] w-full py-2 px-4 flex flex-col justify-start">
              <div className="italic">
                open challenge from
                <span className="font-extrabold pl-1">ravan3p</span>
              </div>
              <div className="italic font-semibold ">· 2 minutes ago</div>
            </div>
            <div className="bg-[#fca837] shadow-[inset_0px_0px_2px_0px_rgba(0,_0,_0,_0.25)] rounded-br-md rounded-bl-md  flex  gap-16  items-center justify-between w-full m-3 p-6 mb-0">
              <div className="flex flex-col w-1/2 text-4 font-['Inter'] text-white font-extrabold">
                <div className="flex justify-between ">
                  <span>Entry fee</span>
                  <span> ₹40</span>
                </div>
                <div className="flex justify-between">
                  <span>Prize</span>
                  <span> ₹80</span>
                </div>
              </div>

              <div
                onClick={openDrawerBottom}
                className=" flex w-[25.5px] h-[25.5px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]"
              >
                <img
                  src={LiveBattles}
                  alt="Arcticonsbattleforwesnoth"
                  className="w-4"
                />
              </div>
            </div>
          </div> */}

          <div
            onClick={() => navigate("/livebattle2")}
            className="text-center text-xl font-['Inter'] text-[#0f002b] w-full"
          >
            view all open <span className="font-bold">challenges</span>
          </div>
        </div>
      </div>

      <Drawer
        placement="bottom"
        open={openBottom}
        // onClose={closeDrawerBottom}
        className="p-4  bg-[#0f002b] rounded-t-3xl"
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
                onClick={closeDrawerBottom}
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

      <div className="bg-[#0f002b] w-full px-2 py-6 flex flex-col  m-auto">
        <div className="flex flex-wrap justify-start gap-5 w-full m-auto">
          <div className="shadow-[0px_0px_2px_1px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col justify-end gap-3  w-[170px] h-[170px] items-start pt-3 pb-1 px-1 rounded-lg">
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
          <div className="shadow-[0px_0px_2px_1px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col justify-end gap-3  w-[170px] h-[170px] items-start pt-3 pb-1 px-1 rounded-lg">
            <div className="flex flex-col ml-3 w-2/3 items-start">
              <div
                id="LiveBattle3"
                className="text-xs font-['Inter'] text-[#0f002b]"
              >
                live <span className="font-bold">battle</span>
              </div>
              <div
                id="StartedMinAgo5"
                className="text-xs font-['Inter'] font-bold text-[#0f002b]"
              >
                ·<span> started </span>
                <span>5min ago</span>
              </div>
            </div>
            <div className="shadow-[inset_0px_0px_12px_0px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-[#fead3a] relative flex flex-col justify-end gap-px w-full items-start pt-8 pb-1 px-3 rounded-br-lg rounded-bl-lg">
              <div className="text-xl font-['Inter'] font-bold text-[#0f002b] absolute top-1 left-3 h-6 w-24">
                baingan9
              </div>
              <div className="shadow-[0px_11px_11px_0px_rgba(0,_0,_0,_0.25)] w-2/3 h-[113px] bg-[#0f002b] absolute top-0 left-20 flex flex-row justify-center pt-8 items-start rounded-tl-[86.39999389648438px] rounded-bl-[86.39999389648438px]">
                <img
                  src="https://file.rendit.io/n/dzvjOLVXy80wPZnly7SR.svg"
                  alt="Arcticonsbattleforwesnoth3"
                  className="w-12"
                />
              </div>
              <img
                src="https://file.rendit.io/n/J07RqKZzL9xJkJN9GmcL.svg"
                alt="Materialsymbolsplaycircle1"
                className="relative ml-10 w-12"
              />
              <div className="text-xl font-['Inter'] font-bold text-white relative">
                aloo45
              </div>
            </div>
          </div>
          <div className="shadow-[0px_0px_2px_1px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col justify-end gap-3   w-[170px] h-[170px] items-start pt-3 pb-1 px-1 rounded-lg">
            <div className="flex flex-col ml-3 w-2/3 items-start">
              <div
                id="LiveBattle3"
                className="text-xs font-['Inter'] text-[#0f002b]"
              >
                live <span className="font-bold">battle</span>
              </div>
              <div
                id="StartedMinAgo5"
                className="text-xs font-['Inter'] font-bold text-[#0f002b]"
              >
                ·<span> started </span>
                <span>5min ago</span>
              </div>
            </div>
            <div className="shadow-[inset_0px_0px_12px_0px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-[#fead3a] relative flex flex-col justify-end gap-px w-full items-start pt-8 pb-1 px-3 rounded-br-lg rounded-bl-lg">
              <div className="text-xl font-['Inter'] font-bold text-[#0f002b] absolute top-1 left-3 h-6 w-24">
                baingan9
              </div>
              <div className="shadow-[0px_11px_11px_0px_rgba(0,_0,_0,_0.25)] w-2/3 h-[113px] bg-[#0f002b] absolute top-0 left-20 flex flex-row justify-center pt-8 items-start rounded-tl-[86.39999389648438px] rounded-bl-[86.39999389648438px]">
                <img
                  src="https://file.rendit.io/n/dzvjOLVXy80wPZnly7SR.svg"
                  alt="Arcticonsbattleforwesnoth3"
                  className="w-12"
                />
              </div>
              <img
                src="https://file.rendit.io/n/J07RqKZzL9xJkJN9GmcL.svg"
                alt="Materialsymbolsplaycircle1"
                className="relative ml-10 w-12"
              />
              <div className="text-xl font-['Inter'] font-bold text-white relative">
                aloo45
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-xl font-['Inter'] text-white mt-2 w-full">
          view all open <span className="font-bold">challenges</span>
        </div>
      </div>
    </div>
  );
};

export default LiveBattle;

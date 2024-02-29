import React, { useEffect, useState } from "react";
import LiveBattles from "../../assets/new_game/livebattle.svg";
import { useNavigate } from "react-router-dom";
import TopbarMobile from "../MainLayout/TopbarMobile";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBattles } from "./battleSlice";
import { fetchUserDetail } from "./userSlice";
import { Icon } from "@iconify-icon/react";
const LiveBattle2 = () => {
  const navigate = useNavigate();
  const [timers, setTimers] = useState({});
  const [filter, setFilter] = useState(false);
  const users = useSelector((state) => state.user.user);

  // const newGameDetail = useSelector((state) => state.match.match);
  // console.log(newGameDetail);
  const battles = useSelector((state) => state.battle.battles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBattles());
    dispatch(fetchUserDetail());
  }, []);
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
  const battleCreationTime = (e) => {
    const previousTimestamp = e.battleTimeStamp;
    const currentTimestamp = Date.now();
    const timeDifference = currentTimestamp - previousTimestamp;
    const timeDifferenceInSeconds = timeDifference / (1000 * 60);
    return timeDifferenceInSeconds;
  };

  return (
    <div className="min-h-screen h-full bg-white ">
      <TopbarMobile />
      {filter === true ? (
        <div className="mt-20 shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col justify-between w-full h-[762px] items-start pt-2 pb-24 pl-px">
          <div className="flex flex-col justify-between gap-6 w-full items-start">
            <div className="flex w-full px-4  justify-between items-center">
              <div className="flex gap-5 items-center justify-center">
                <Icon
                  icon="ep:back"
                  width="24"
                  onClick={() => setFilter(false)}
                />
                <div
                  id="FilterLiveBattle1"
                  className="text-center text-xl font-['Inter']  text-[#0f002b] mt-px"
                >
                  <span className="font-bold"> filter</span> live battle
                </div>
              </div>
              <img
                onClick={() => navigate("/help")}
                src="https://file.rendit.io/n/8nZrkAaqy2tyyAf9aw0X.svg"
                alt="ActionInfoOutline icon"
                id="Icoutlineinfo"
                className="w-6"
              />
            </div>
            <div className="bg-white flex gap-2 w-full  justify-center items-center pt-4 px-5">
              <Icon icon="ion:search-outline" width="24" />
              <input
                className="font-['Inter'] text-black/56.99999999999999 outline-none border-none w-full"
                placeholder="Search Battle"
              />
            </div>

            <div className="flex  gap-4 w-full px-2 justify-center">
              <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] flex items-center justify-center p-[6px]   gap-4  rounded-lg">
                <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-white flex items-center justify-center p-2 rounded-full ">
                  <Icon icon="mdi:sort-ascending" width="22"/>
                </div>
                <div className="font-['Inter'] text-[#0f002b]">Low to High</div>
              </div>
              <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] flex p-[6px] justify-center items-center gap-4  rounded-lg">
                <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)]  flex items-center justify-center p-2 rounded-full ">    
                  <Icon icon="carbon:sort-descending" width="22"/>
                </div>
                <div className="font-['Inter'] text-[#0f002b] ">
                  High to Low
                </div>
              </div>
            </div>
            <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] flex  w-3/5 justify-cente items-center m-auto  p-[6px]  rounded-lg">
              <div className="text-[#0f002b] font-['Inter'] flex gap-2 pr-2 pl-4">
                <span className="font-bold">₹</span>{" "}
                <input
                  className="font-['Inter'] text-black/56.99999999999999 outline-none border-none w-full"
                  placeholder="From"
                />
              </div>

              <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-white flex items-center justify-center p-2 rounded-full ">
              <Icon icon="carbon:filter" width="22" />

              </div>
              <div className="text-[#0f002b] font-['Inter'] flex gap-2 pr-2  pl-4">
                <span className="font-bold">₹</span>
                <input
                  className="font-['Inter'] text-black/56.99999999999999 outline-none border-none w-full"
                  placeholder="To"
                />
              </div>
            </div>
          </div>
          <div
            onClick={() => setFilter(false)}
            className="cursor-pointer fixed bottom-10 left-0 right-0  font-['Inter'] font-bold text-white bg-[#0f002b] flex  justify-center w-3/5 m-auto items-center p-2 rounded-lg "
          >
            Apply Filter
          </div>
        </div>
      ) : (
        <div className="bg-white w-full mt-20">
          <div className="flex justify-between items-center px-4 py-2 w-full">
            <div className="flex gap-5 items-center">
              <Icon
                onClick={() => navigate("/livebattle")}
                icon="ep:back"
                width="24"
              />

              <div
                id="LiveBattle13"
                className="text-center text-xl font-['Inter'] text-[#0f002b]"
              >
                live <span className="font-bold">battle</span>
              </div>
            </div>

            <div className="flex gap-5">
              <Icon
                icon="ion:filter"
                width="24"
                onClick={() => setFilter(true)}
              />

              <img
                onClick={() => navigate("/help")}
                src="https://file.rendit.io/n/8nZrkAaqy2tyyAf9aw0X.svg"
                alt="ActionInfoOutline icon"
                id="Icoutlineinfo"
                className="w-6"
              />
            </div>
          </div>

          <div className="p-6 flex flex-col  gap-4 m-auto w-full">
            {battles.length > 0 &&
              battles.map((e) => (
                <div
                  onClick={() => navigate(`/requestchallange/${e._id}`)}
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
                      ·{" "}
                      {Math.floor(battleCreationTime(e)) === 0
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
                    <div className=" flex w-[42px] h-[42px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]">
                      {users?.user._id === e.player1 ? (
                        <span className="text-white">{timers[e._id]}</span>
                      ) : (
                        <img
                          src={LiveBattles}
                          alt="Arcticonsbattleforwesnoth"
                          className="w-4"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            {/* <div
            onClick={() => navigate("/requestchallange")}
            className="inline-flex flex-col justify-between w-full min-h-[168px] items-center border rounded-[10px] shadow-[0px_0px_40px_6px_rgba(0,_0,_0,_0.25)] bg-white border-solid border-[rgba(15,_0,_43,_0.2)]"
          >
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

              <div className=" flex w-[25.5px] h-[25.5px] items-center justify-center p-[6.67px] rounded-[19.421px] shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b]">
                <img
                  src={LiveBattles}
                  alt="Arcticonsbattleforwesnoth"
                  className="w-4"
                />
              </div>
            </div>
          </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveBattle2;

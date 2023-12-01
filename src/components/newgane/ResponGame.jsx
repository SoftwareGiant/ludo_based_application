import React from "react";

import Copy from "../../assets/new_game/copy.svg";
import Share from "../../assets/new_game/share.svg";
import Fb from "../../assets/new_game/fb.svg";
import Wp from "../../assets/new_game/wp.svg";
import Twtr from "../../assets/new_game/twtr.svg";
import LiveBattle from "../../assets/new_game/livebattle.svg";
import DropIcon from "../../assets/new_game/dropdown.svg";
import ElpAct from "../../assets/new_game/EllipseActive.svg";
import Elp from "../../assets/new_game/Ellipse.svg";

const ResponGame = () => {
  return (
    <div>
      <div
        id="NewGameRoot"
        className="overflow-hidden bg-[#fead3a] relative flex flex-col w-full h-[100%] items-start"
      >
        <img
          src="https://file.rendit.io/n/TxEvf0Lnt1mR2DBDKpIE.png"
          alt="Ludoindianmonumenttouch"
          className="w-24 h-24 origin-top-left rotate-[-45deg] absolute top-40 left-[-41px]"
        />
        <img
          src="https://file.rendit.io/n/1gRglTJ3LUZXxtvFZvLO.png"
          alt="Ludoindianmonumenttouch1"
          className="w-24 h-24 origin-top-left rotate-[-45deg] absolute top-40 left-[308px]"
        />
        <div className="relative flex flex-row w-full items-start">
          <div className="w-full h-12 bg-[#fead3a] absolute top-8 left-0 flex flex-row justify-between items-start pt-2 px-5">
            <div className="flex flex-row gap-3 w-2/5 items-start">
              <img
                src="https://file.rendit.io/n/c069tsTkMzmjgvYgx5P1.svg"
                alt="Materialsymbolsmenu"
                id="Materialsymbolsmenu"
                className="mt-1 w-6"
              />
              <div className="relative flex flex-row justify-center w-24 items-start">
                <div className="text-center text-base font-['Nunito_Sans'] font-bold text-[#0f002b] absolute top-0 left-0 h-5 w-24">
                  LUDO KING
                </div>
                <div className="text-center text-base font-['Oooh_Baby'] text-[#0f002b] relative mt-4">
                  punch line
                </div>
              </div>
            </div>
            <img
              src="https://file.rendit.io/n/c6s0VUvNnJMhUIhfdrvJ.png"
              alt="Frame34"
              className="mt-1 w-8 border"
            />
          </div>
          <div
            id="Notificationspace"
            className="bg-[#fead3a] relative mb-12 w-full h-8"
          />
        </div>
        <div className="overflow-hidden bg-[#0f002b] relative flex flex-col pb-24 gap-8 w-full items-start">
          <div className="relative flex flex-row justify-center w-[256.41%] items-start mt-[-705px] mx-[-305px]">
            <div
              id="Ellipse"
              className="w-full h-[1000px] bg-[#fead3a] absolute top-0 left-0 flex flex-col justify-end gap-3 items-start py-40 rounded-[50%]"
            >
              <div className="flex flex-row gap-4 w-2/3 items-start ml-[334px] mr-[-16px]">
                <div className="shadow-[0px_2px_17px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-end gap-2 w-1/2 items-start rounded-lg">
                  <div className="flex flex-row mt-6 w-20 items-start">
                    <div className="text-3xl font-['Nunito_Sans'] font-bold text-white">
                      2.5%
                    </div>
                    <div className="font-['Nunito_Sans'] text-white">*</div>
                  </div>
                  <div className="relative flex flex-row justify-end mb-6 w-1/2 items-start">
                    <div className="font-['Nunito_Sans'] text-white absolute top-6 left-0 h-10 w-4/5">
                      Refer your friends now
                    </div>
                    <img
                      src="https://file.rendit.io/n/KjMRtnbLnQFwBshMJP2P.svg"
                      alt="Ellipse6"
                      id="Ellipse6"
                      className="relative mb-3 w-16"
                    />
                  </div>
                </div>
                <div className="shadow-[0px_2px_17px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] w-1/2 h-24 rounded-lg" />
              </div>
              <div className="flex flex-row justify-between ml-[477px] w-12 items-start">
                <img
                  src={ElpAct}
                  alt="Ellipse1"
                  id="Ellipse1"
                  className="w-1"
                />
                <img src={Elp} alt="Ellipse2" id="Ellipse2" className="w-1" />
                <img src={Elp} alt="Ellipse3" id="Ellipse3" className="w-1" />
                <img src={Elp} alt="Ellipse4" id="Ellipse4" className="w-1" />
                <img src={Elp} alt="Ellipse5" id="Ellipse5" className="w-1" />
              </div>
            </div>
            <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] w-1/3 h-[484px] bg-white absolute top-[878px] left-[333px] flex flex-col justify-end pt-5 gap-6 items-start rounded-lg">
              <div
                id="LiveBattle1"
                className="text-center text-xl font-['Inter'] text-[#0f002b] ml-6"
              >
                live <span className="font-extrabold">battle</span>
              </div>
              <div className="border-solid border-[rgba(15,_0,_43,_0.2)] shadow-[0px_0px_40px_6px_rgba(0,_0,_0,_0.25)] bg-white flex flex-col justify-end ml-5 gap-3 w-[290px] h-[168px] items-start pt-4 pb-1 px-1 border rounded-lg">
                <div className="flex flex-col ml-4 w-[100%] h-[68px] gap-1 items-start">
                  <div className="font-['Inter'] text-[#0f002b]">
                    open challenge
                    <div>from </div>
                    <span className="font-bold">ravan3p</span>
                  </div>
                  <div
                    id="MinutesAgo1"
                    className="font-['Inter'] font-bold text-[#0f002b]"
                  >
                    · <span>2 minutes ago</span>
                  </div>
                </div>
                <div className="shadow-[inset_0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#fead3a] flex flex-row gap-16 w-full h-24 items-start pt-5 pl-5 pr-8 rounded-br-lg rounded-bl-lg">
                  <div className="flex flex-col gap-3 w-1/2 items-start">
                    <div className="flex flex-row gap-4 w-full items-start">
                      <div className="font-['Inter'] text-white">Entry fee</div>
                      <div className="font-['Inter'] font-bold text-white">
                        ₹40
                      </div>
                    </div>
                    <div className="flex flex-row gap-12 w-full items-start">
                      <div className="font-['Inter'] text-white">Prize</div>
                      <div className="font-['Inter'] font-bold text-white">
                        ₹80
                      </div>
                    </div>
                  </div>
                  <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-1 pt-3 w-10 h-10 items-start rounded-[32px]">
                    <img
                      src={LiveBattle}
                      alt="Arcticonsbattleforwesnoth"
                      className="w-5"
                    />
                  </div>
                </div>
              </div>
              <div className="relative flex flex-row w-full items-start">
                <div className="border-solid border-[rgba(15,_0,_43,_0.2)] shadow-[0px_0px_40px_6px_rgba(0,_0,_0,_0.25)] w-5/6 h-40 bg-white absolute top-0 left-5 flex flex-col justify-end gap-3 items-start pt-4 pb-1 px-1 border rounded-lg">
                  <div className="flex flex-col ml-4 gap-1 w-5/6 items-start">
                    <div className="font-['Inter'] text-[#0f002b]">
                      open challenge<span> </span>
                      <div>from </div>
                      <span className="font-bold">kansh23i</span>
                    </div>
                    <div
                      id="MinutesAgo3"
                      className="font-['Inter'] font-bold text-[#0f002b]"
                    >
                      · <span>2 minutes ago</span>
                    </div>
                  </div>
                  <div className="shadow-[inset_0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#fead3a] flex flex-row gap-16 w-full h-24 items-start pt-5 pl-5 pr-8 rounded-br-lg rounded-bl-lg">
                    <div className="flex flex-col gap-3 w-1/2 items-start">
                      <div className="flex flex-row gap-4 w-full items-start">
                        <div className="font-['Inter'] text-white">
                          Entry fee
                        </div>
                        <div className="font-['Inter'] font-bold text-white">
                          ₹40
                        </div>
                      </div>
                      <div className="flex flex-row gap-12 w-full items-start">
                        <div className="font-['Inter'] text-white">Prize</div>
                        <div className="font-['Inter'] font-bold text-white">
                          ₹80
                        </div>
                      </div>
                    </div>
                    <div className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#0f002b] flex flex-row justify-center mt-1 pt-3 w-10 h-10 items-start rounded-[32px]">
                      <img
                        src={LiveBattle}
                        alt="Arcticonsbattleforwesnoth1"
                        className="w-5"
                      />
                    </div>
                  </div>
                </div>
                <div
                  id="Gradientnewgame"
                  className="bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0)_0%,#ffffff_100%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat relative mt-8 w-full h-[181px]"
                />
              </div>
            </div>
            <div className="shadow-[0px_0px_4px_1px_rgba(0,_0,_0,_0.25)] bg-white relative flex flex-row justify-center mt-[1332px] pt-2 w-12 h-12 items-start rounded-[24px]">
              <img
                src={DropIcon}
                alt="HardwareKeyboardArrowDown icon"
                id="Phcaretdown"
                className="w-6"
              />
            </div>
          </div>
          <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-[#fead3a] flex flex-col justify-center ml-6 gap-10 w-5/6 items-start p-5 rounded-lg">
            <div className="flex flex-col justify-between gap-6 w-full items-start">
              <div
                id="StartYourOwnBattle1"
                className="text-center text-xl font-normal font-['Inter'] text-[#0f002b] ml-1"
              >
                start your own
                <span className="font-extrabold text-xl pl-1">battle</span>
              </div>
              <div className="shadow-[0px_0px_4px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-between gap-1 w-full h-14 items-start p-4 rounded-lg">
                <div className="flex flex-row  gap-1 w-3/5 items-start">
                  <p className="items-start text-base font-['Inter'] text-[#0f002b]">
                    ₹
                  </p>
                  <input
                    type="number"
                    className="text-left font-['Inter'] text-black/56.99999999999999"
                    placeholder="Your battle amount"
                  />
                </div>
                <div className="shadow-[0px_0px_2px_0px_rgba(0,_0,_0,_0.4)] bg-[#fead3a] flex flex-row w-9 items-start p-2 rounded-[20px]">
                  <img
                    src={LiveBattle}
                    alt="Arcticonsbattleforwesnoth2"
                    className="w-6"
                  />
                </div>
              </div>
              <div className="shadow-[0px_0px_3px_0px_rgba(0,_0,_0,_0.25)] bg-white flex flex-row justify-center pt-1 gap-6 w-full items-start rounded-lg">
                <div className="flex flex-row mt-1 gap-5 w-20 items-start">
                  <img
                    src={Wp}
                    alt="Logoswhatsappicon"
                    id="Logoswhatsappicon"
                    className="w-8"
                  />
                  <img
                    src={Fb}
                    alt="Logosfacebook"
                    id="Logosfacebook"
                    className="mt-px w-8"
                  />
                </div>
                <div className="flex flex-row mb-1 gap-4 w-1/2 items-start">
                  <img
                    src={Twtr}
                    alt="Ritwitterxfill"
                    id="Ritwitterxfill"
                    className="mt-2 w-6"
                  />
                  <div className="flex flex-row gap-2 w-24 items-start">
                    <div className="bg-white flex flex-row w-10 h-10 items-start pt-2 px-2">
                      <img
                        src={Copy}
                        alt="ActionLabelOutline icon"
                        id="Solarcopylinear"
                        className="w-6"
                      />
                    </div>
                    <div className="bg-white flex flex-row w-10 items-start pt-1 px-1">
                      <img
                        src={Share}
                        alt="Mdishare"
                        id="Mdishare"
                        className="mb-1 w-8"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://file.rendit.io/n/KPwS2RCsAs5e6sLj4eAj.svg"
              alt="Line"
              id="Line"
              className="ml-24 w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponGame;

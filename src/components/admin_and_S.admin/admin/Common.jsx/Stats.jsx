import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
const Stats = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex gap-3 mb-3">
      <div
        onClick={openModal}
        className="cursor-pointer p-1 w-[88px] h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg"
      >
        <span>Stats</span>{" "}
        <Icon icon="material-symbols:query-stats" width="24" />
      </div>
      {isOpen && (
        <div className="rounded-md fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute  inset-0 bg-black opacity-50"></div>
          <div className="bg-white w-[826px] rounded-md shadow-lg z-50">
            <div className="flex px-2 items-center rounded-t-md bg-[#EEEEEE] w-full h-[80px] justify-between">
              <div className="p-1 w-[88px] h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                <span>Stats</span>{" "}
                <Icon icon="material-symbols:query-stats" width="24" />
              </div>

              <button
                onClick={closeModal}
                className="bg-[#F4F4F4] hover:bg-blue-gray-100 text-white font-bold p-2 rounded-full w-[48px] h-[38.4px]"
              >
                <Icon icon="charm:cross" className="text-black" width="24" />
              </button>
            </div>
            <div className="w-full h-72"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;

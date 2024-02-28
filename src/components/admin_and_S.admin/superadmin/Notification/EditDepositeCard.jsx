import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
const EditDepositeCard = ({
    name,
    status,
    towallet,
    depositeamount,
    date,
    utr
}) => {
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
        className="hover:bg-blue-gray-100 flex justify-center items-center w-10 h-10 rounded-md cursor-pointer transition-all ease-in-out"
      >
      <Icon icon="circum:edit" width="24" />
      </div>
      {isOpen && (
        <div className="rounded-md fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute  inset-0 bg-black opacity-50"></div>
          <div className="bg-white w-[826px] rounded-md shadow-lg z-50">
            <div className="flex px-2 items-center rounded-t-md bg-[#EEEEEE] w-full h-[80px] justify-between">
             <div className="flex  items-center gap-4">
             <div className="p-1 gap-2 h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
               
             <Icon icon="circum:edit" width="24" />
               <span>Deposit</span>{" "}
               
             </div>
             <span>{utr}</span>
             </div>
       

              <button
                onClick={closeModal}
                className="bg-[#F4F4F4] hover:bg-blue-gray-100 text-white font-bold p-2 rounded-full w-[48px] h-[38.4px]"
              >
                <Icon icon="charm:cross" className="text-black" width="24" />
              </button>
            </div>
            <div className="w-full h-[465px] flex ">
              
                <div className="w-full px-8 py-2 flex flex-col   min-w-max mt-12 text-center font-[Inter] font-medium text-[16px]">
                  <div className="flex w-full mb-4 justify-between">
                    <div className="flex flex-col justify-center items-center gap-4 w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Name</span>
                      </div>
                      <span>{name}
                  
                      </span>
                      
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                      <div className="m- cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Status</span>
                      </div>
                      <span>{status}</span>
                    </div>      
                    <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                      <div className="m- cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>To Wallet</span>
                      </div>
                      <span>{towallet}</span>
                    </div>          
                  </div>
                  <div className="flex w-full mb-4 justify-between">
                    <div className="flex flex-col justify-center items-center gap-4 w-full mx-2">
                      <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Deposited Amount</span>
                      </div>
                      <span>{depositeamount}</span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                      <div className="m- cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                        <span>Starting Date</span>
                      </div>
                      <span>{date}</span>
                    </div>               
                  </div>
                
                  </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditDepositeCard;

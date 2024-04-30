import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const PendingwithdrawalCard = ({
  name,
  mobileno,
  id,
  balance,
  withdrawal,
  date,
  status,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { accessToken } = useSelector((state) => state.auth);
console.log(accessToken)
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const url = `http://localhost:8003/api/superadmin/approvewithdrawl/${id}`;

  const ApproveWithdrawal = () => {
    axios
      .post(url,{ status: "pending" }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log("success", response);
        toast.success("Approved Successfully");
        // window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
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
              <div className="p-1 gap-2 h-[32px] bg-[#F4F4F4] flex items-center justify-between border rounded-lg">
                <Icon icon="circum:edit" width="24" />
                <span>Pending Withdrawal</span>{" "}
                <span className="pl-2">UID {id?.slice(-6)}</span>
              </div>

              <button
                onClick={closeModal}
                className="bg-[#F4F4F4] hover:bg-blue-gray-100 text-white font-bold p-2 rounded-full w-[48px] h-[38.4px]"
              >
                <Icon icon="charm:cross" className="text-black" width="24" />
              </button>
            </div>
            <div className="w-full h-[465px] flex ">
              <div className="flex flex-col justify-center items-center m-auto text-[#0F002B] flex-1 font-[Nunito-Sans]">
                <img
                  alt="user"
                  className="w-[200px] h-[200px] rounded-full"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <span className="flex items-center font-bold text-[30px]">
                  {name} <Icon icon="bitcoin-icons:verify-outline" width="26" />
                </span>
                <span className="font-normal text-[20px]">@admin01</span>
              </div>
              <div className=" p-2 flex flex-col  flex-1 min-w-max mt-12 text-center font-[Inter] font-medium text-[16px]">
                <div className="flex w-full mb-4 justify-between">
                  <div className="flex flex-col justify-center items-center gap-4 w-full mx-2">
                    <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <span>Name</span>
                    </div>
                    <span>{name}</span>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                    <div className="m- cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <span>Mobile Number</span>
                    </div>
                    <span>{mobileno}</span>
                  </div>
                </div>
                <div className="flex w-full mb-4 justify-between">
                  <div className="flex flex-col justify-center items-center gap-4 w-full mx-2">
                    <div className="m-2 cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <span>Balance</span>
                    </div>
                    <span>{balance}</span>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4  mx-2 w-full">
                    <div className="m- cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <span>Withdrawal Amount</span>
                    </div>
                    <span>{withdrawal}</span>
                  </div>
                </div>
                <div className="flex w-full mb-4 justify-between">
                  <div
                    onClick={ApproveWithdrawal}
                    className="flex flex-col justify-center items-center gap-4 w-full mx-2"
                  >
                    <div className="m-2 text-[#00C300] cursor-pointer transition-colors  w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <span>Approve</span>
                    </div>
                  </div>
                  <div
                    onClick={closeModal}
                    className="flex flex-col justify-center items-center gap-4  mx-2 w-full"
                  >
                    <div className="m-2 text-[#FF0000] cursor-pointer transition-colors w-full px-3 h-[35px] flex items-center justify-center gap-2  leading-none border p-2 rounded-md hover:bg-blue-gray-50 font-[Inter] font-medium text-[16px]  ">
                      <span>Decline</span>
                    </div>
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

export default PendingwithdrawalCard;

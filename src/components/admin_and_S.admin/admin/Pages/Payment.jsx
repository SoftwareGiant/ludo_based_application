import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify-icon/react";
import { Button, Card, CardBody } from "@material-tailwind/react";
import AdminFooter from "../Common.jsx/AdminFooter";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Payment = () => {
  //   const { accessToken } = useSelector((state) => state.auth);
  //   const fileInputRef = useRef(null);

  const [upiNumber, setUpiNumber] = useState("");
  const [upiScanner, setUpiScanner] = useState(null);
  const [scannerPreview, setScannerPreview] = useState("");
  const fileInputRef = useRef(null);
  const handleUpiNumberChange = (e) => {
    setUpiNumber(e.target.value);
  };

  const handleUpiScannerChange = (e) => {
    const file = e.target.files[0];
    setUpiScanner(file);
    setScannerPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("UPI Number:", upiNumber);
    console.log("UPI Scanner:", upiScanner);
    toast.success("payment detail added successfully");
    setUpiNumber("");
    setUpiScanner(null);
    setScannerPreview("");
    fileInputRef.current.value = "";
  };

  //   const handleDelete = async (slideName) => {
  //     try {
  //       const fileData = {
  //         fileName: slideName,
  //       };

  //       const response = await axios.post("/api/admin/removeslider", fileData, {
  //         headers: {
  //           Authorization: `bearer ${accessToken}`,
  //         },
  //       });
  //       toast.success(response.data.message);
  //       getSlides();
  //     } catch (error) {
  //       console.error("Error deleting slide:", error);
  //       toast.error(`Failed to delete slide: ${error.message}`);
  //     }
  //   };
  const handlePreview = () => {
    setUpiNumber("");
    setUpiScanner(null);
    setScannerPreview("");
    fileInputRef.current.value = "";
  };
  return (
    <div className="font-[Inter] w-full main-body-right overflow-y-scroll h-screen bg-[#ffff] rounded-tl-3xl">
      <div className="bg-[#F4F4F4] rounded-tl-3xl py-1 px-4 flex flex-col gap-4">
        <div className="flex  mt-1  gap-2 text-[#008CF2] font-[Inter] font-medium text-[12px]">
          <Link to="/newonboard" className="underline">
            Admin Control Panel{" "}
          </Link>
          <span>&gt;&gt;</span>
          <span className="underline">Menu</span>
          <span>&gt;&gt;</span>
          <span className="underline">Payment</span>
        </div>
        <h3 className="text-[#0F002B] text-lg">
          <span className="underline">P</span>ayment{" "}
        </h3>
      </div>
      <div className="flex px-3 py-2 items-center justify-between bg-[#EEEEEE]">
        <p className="text-[#000000] font-medium text-xs">
          Detail : Full detail of Payments
        </p>
        <Icon icon="charm:cross" width="12" />
      </div>
      <Card className=" w-full py-1 pb-10 px-4">
        <CardBody className=" px-0 w-full">
          <div className="flex justify-between items-center">
            <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
              Add Payment Details
            </span>
          </div>

          <form onSubmit={handleSubmit} className="w-[400px] mt-4">
            <div className="mb-4">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
                htmlFor="upiNumber"
              >
                UPI Number
              </label>
              <input
                type="text"
                id="upiNumber"
                value={upiNumber}
                onChange={handleUpiNumberChange}
                className="border w-full border-gray-900 shadow-md py-[5px] px-[5px] focus:outline-none  rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-900 text-sm font-bold mb-2"
                htmlFor="upiScanner"
              >
                UPI Scanner
              </label>
              <input
                className="border w-full border-gray-900 shadow-md py-[5px] px-[5px]  rounded-md"
                accept=".jpg, .jpeg, .png"
                type="file"
                id="upiScanner"
                onChange={handleUpiScannerChange}
                required
                ref={fileInputRef}
              />
            </div>
            {scannerPreview && (
              <div className="my-3 ">
                <p className="text-gray-700 ml-2 text-sm font-bold mb-2">
                  Scanner Preview:
                </p>
                <div className="relative m-2 w-full">
                  <div className="w-full rounded-md shadow-md overflow-hidden relative border-2 border-black ">
                    <img
                      src={scannerPreview}
                      alt="UPI Scanner Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute top-0 right-0 flex">
                    <button
                      onClick={() => handlePreview()}
                      className="bg-red-500  text-white rounded-full p-4 w-6 h-6 flex items-center justify-center -m-2"
                    >
                      <Icon icon="charm:cross" width={24} />
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div className="flex items-center justify-between">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </CardBody>
      </Card>
      <AdminFooter />
    </div>
  );
};

export default Payment;

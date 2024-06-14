import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify-icon/react";
import { Button, Card, CardBody } from "@material-tailwind/react";
import AdminFooter from "../Common.jsx/AdminFooter";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminSLides = () => {
  const [sliderData, setSliderData] = useState([]);
  const [selectFile, setSelectFile] = useState("");
  const [filename, setFilename] = useState("");
  const [scannerPreview, setScannerPreview] = useState("");
  const { accessToken } = useSelector((state) => state.auth);
  const fileInputRef = useRef(null);
  useEffect(() => {
    getSlides();
  }, []);
  const getSlides = async () => {
    try {
      const response = await axios.get("/api/user/allSlider");
      console.log(response.data.slider.bannerContent);
      setSliderData(response.data.slider.bannerContent);
    } catch (error) {
      console.error("Error fetching slider data:", error);
    }
  };
  const handleDelete = async (slideName) => {
    try {
      const fileData = {
        fileName: slideName,
      };

      const response = await axios.post("/api/admin/removeslider", fileData, {
        headers: {
          Authorization: `bearer ${accessToken}`,
        },
      });
      toast.success(response.data.message);
      getSlides();
    } catch (error) {
      console.error("Error deleting slide:", error);
      toast.error(`Failed to delete slide: ${error.message}`);
    }
  };

  const handleAdd = async () => {
    if (selectFile) {
      try {
        const formData = new FormData();
        formData.append("image", selectFile);
        await axios.post("/api/admin/addslider", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `bearer ${accessToken}`,
          },
        });
        fileInputRef.current.value = "";
        toast.success("Image uploaded successfully");
        setSelectFile("");
        setFilename("");
        setScannerPreview("");
        getSlides();
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Failed to upload image");
      }
    } else {
      toast.error("Select an image to upload");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setScannerPreview(URL.createObjectURL(file));
    if (file) {
      setSelectFile(file);
      setFilename(file.name);
    }
  };
  const handlePreview = () => {
    fileInputRef.current.value = "";
    setSelectFile("");
    setFilename("");
    setScannerPreview("");
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
          <span className="underline">Slides</span>
        </div>
        <h3 className="text-[#0F002B] text-lg">
          <span className="underline">S</span>lides{" "}
        </h3>
      </div>
      <div className="flex px-3 py-2 items-center justify-between bg-[#EEEEEE]">
        <p className="text-[#000000] font-medium text-xs">
          Detail : Full detail of Slides
        </p>
        <Icon icon="charm:cross" width="12" />
      </div>
      <Card className=" w-full py-1 pb-10 px-4">
        <CardBody className=" px-0 w-full">
          <div className="flex justify-between items-center">
            <span className="font-[Inter] font-medium text-[16px] text-[#000000]">
              Slides Details
            </span>
          </div>
          <div className="flex flex-wrap">
            {sliderData.map((image, index) => (
              <div key={index} className="relative m-2 ">
                <div className="w-52 h-28 rounded-md shadow-md overflow-hidden relative border-2 border-black ">
                  <img
                    src={image}
                    className="w-full h-full object-cover"
                    alt="Cover"
                  />
                </div>

                <div className="absolute top-0 right-0 flex">
                  <button
                    onClick={() => handleDelete(image)}
                    className="bg-red-500  text-white rounded-full p-4 w-6 h-6 flex items-center justify-center -m-2"
                  >
                    <Icon icon="charm:cross" width={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 flex gap-2 ">
            <div>
              <input
                className="border border-gray-900 shadow-md py-[5px] px-[5px] w-80 rounded-lg"
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={handleFileChange}
                ref={fileInputRef}
                
              />
              {scannerPreview && (
                <div className="my-3 ">
                  <p className="text-gray-700 ml-2 text-sm font-bold mb-2">
                    Slide Preview:
                  </p>
                  <div className="relative m-2 w-52">
                    <div className="w-52 rounded-md shadow-md overflow-hidden relative border-2 border-black ">
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
            </div>

            <Button onClick={handleAdd} className="h-10" color="black">
              Add Slide
            </Button>
          </div>
        </CardBody>
      </Card>
      <AdminFooter />
    </div>
  );
};

export default AdminSLides;

import React, { useEffect, useState } from "react";
import { Icon } from "@iconify-icon/react";
import { Button, Card, CardBody } from "@material-tailwind/react";

import AdminFooter from "../Common.jsx/AdminFooter";
import axios from "axios";
import { toast } from "react-toastify";

const AdminSLides = () => {
  const [sliderData, setSliderData] = useState([]);

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
  const handleDelete = (id) => {
    toast.success("image deleted successfully");
    setImages(images.filter((image) => image.id !== id));
  };

  const handleAdd = () => {};

  //   const handleUpload = (e) => {
  //     const file = e.target.files[0];
  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         const newImage = {
  //           id: images.length + 1,
  //           url: reader.result,
  //           name: file.name,
  //         };
  //         setImages([...images, newImage]);
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   };
  return (
    <div className="font-[Inter] w-full main-body-right overflow-y-scroll h-screen bg-[#ffff] rounded-tl-3xl">
      <div className="bg-[#F4F4F4] rounded-tl-3xl py-1 px-4 flex flex-col gap-4">
        <div className="flex  mt-1  gap-2 text-[#008CF2] font-[Inter] font-medium text-[12px]">
          <span className="underline">Admin Control Panel </span>
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
              <div key={index} className="relative m-2">
                <div className="w-52 h-28 rounded-md shadow-xl overflow-hidden relative">
                  <img
                    src={image}
                    className="w-full h-full object-cover"
                    alt="Cover"
                  />
                </div>

                <div className="absolute top-0 right-0 flex">
                  <button
                    onClick={() => handleDelete(image.id)}
                    className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center -m-1"
                  >
                    <Icon icon="charm:cross" width={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2">
            <Button onClick={handleAdd} variant="outlined">
              Add More
            </Button>
          </div>
        </CardBody>
      </Card>
      <AdminFooter />
    </div>
  );
};

export default AdminSLides;

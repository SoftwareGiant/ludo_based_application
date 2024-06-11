import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { toast } from "react-toastify";

const NewGameSLider = () => {
  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    getSlides();
  }, []);

  const getSlides = async () => {
    try {
      const response = await axios.get("/api/user/allSlider");
      setSliderData(response.data.slider.bannerContent);
    } catch (error) {
      toast.error("Error fetching slider data:", error);
    }
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 484 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
      //   partialVisibilityGutter: 50,
    },
  };
  if (sliderData === undefined || sliderData?.length <= 0) {
    return;
  }
  return (
    <div className="w-full max-w-[480px] z-10 h-[140px] relative">
      <Carousel
        className="w-full"
        centerMode={true}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay={true}
        transitionDuration={500}
        renderDotsOutside={true}
        renderButtonGroupOutside={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}
      >
        {sliderData?.slice(0, 4).map((slideimg, index) => (
          <div
            key={index}
            className="p-2 h-[110px] rrounded-lg overflow-hidden"
          >
            <img
              className="object-cover w-full h-full rounded-lg"
              src={slideimg}
              alt={`img${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NewGameSLider;

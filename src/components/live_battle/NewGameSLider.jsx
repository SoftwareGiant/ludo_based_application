import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const NewGameSLider = () => {
  const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 484 },
        items: 1
      },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
      //   partialVisibilityGutter: 50,
    },
  };
  return (
    <div className="w-full max-w-[480px] h-[130px] relative ">
      <Carousel
        className=" w-full max-h-[90px] "
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
        <div className="p-2 ">
          <img
            className="rounded-xl"
            src="https://plus.unsplash.com/premium_photo-1701693533734-bc279bdd0c80?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img1"
          />
        </div>
        <div className="p-2 ">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="p-2 ">
          <img
            className="rounded-xl"
            src="https://plus.unsplash.com/premium_photo-1701693533734-bc279bdd0c80?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img1"
          />
        </div>
        <div className="p-2 ">
          <img
            className="rounded-xl"
            alt="img2"
            src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default NewGameSLider;

import React from "react";

const NotFoundpage = () => {
  handleBackToHomepage = () => {
    window.location.href = "/";
  };
  return (
    <section className="bg-[#fca837] min-h-screen max-w-[480px] ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto  max-w-screen-sm text-center">
          <h1 className="mb-4 text-[#0f002b] text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 ">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-[#0f002b] md:text-4xl ">
            Something went wrong.
          </p>
          <p className="mb-4 text-lg font-light text-[#0f002b]">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <button
            className="inline-flex text-white bg-[#0f002b] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4 animated-button"
            onClick={handleBackToHomepage}
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundpage;

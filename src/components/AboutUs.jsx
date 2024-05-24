import React from "react";
import About from "../assets/aboutUs.jpg";

const PageTemplate = () => {
  return (
    <>
      <div className="max-xs:grid-cols-6 max-xs:grid-rows-4 max-xs:gap-0 grid h-screen w-screen flex-col">
        <div className="max-xs:col-start-1 max-xs:col-end-2 max-xs:row-span-4 max-xs:w-1/2 max-xs:row-start-1 relative z-30 border-r-4 border-solid border-goldLines"></div>
        <div className="text-page-title-color max-xs:col-span-6 max-xs:col-start-1 max-xs:row-start-1 max-xs:h-1/4 max-xs:text-base relative z-20 flex items-center justify-center border-b-4 border-goldLines bg-primaryBackground bg-opacity-45">
          ABOUT US
        </div>
        <div className="max-xs:col-span-5 max-xs:col-start-2 max-xs:row-start-2 max-xs:place-items-center relative z-20  h-full">
          <div className="max-xs:py-4 max-xs:pl-2 max-pr-4  relative flex flex-col gap-10 bg-primaryBackground bg-opacity-45">
            <div className="text-subtitle-color max-xs:text-left max-xs:text-4xl relative">
              Where dreams Take Shape
            </div>
            <div className="text-subtitle-description-color max-xs:text-lg max-xs:text-left relative  font-Fahkwang font-thin">
              Step into a world of endless possibilities with
              <span className="font-bold"> DOC. </span>
              From concept to completion, we specialize in turning your
              architectural dreams into stunning reality. Whether you're
              envisioning a modern masterpiece or a cozy retreat, we're here to
              make it happen.
            </div>
          </div>
        </div>
        <div className="max-xs:absolute h-full w-full">
          <div className="relative h-full w-full">
            <div
              className="relative h-full w-full"
              style={{
                backgroundImage: `url(${About})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTemplate;

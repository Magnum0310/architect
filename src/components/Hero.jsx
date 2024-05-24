import React from "react";
import Architect from "../assets/architect.jpg";
import Logo from "../assets/DOC_Logo.svg";

const PageTemplate = () => {
  return (
    <>
      <div className="max-xs:grid-cols-6 max-xs:grid-rows-5 max-xs:gap-0 grid h-screen w-screen flex-col">
        <div className="max-xs:col-start-1 max-xs:col-end-2 max-xs:row-span-6 max-xs:w-1/2 max-xs:row-start-1 relative z-30 border-r-4 border-solid border-goldLines"></div>
        <div className="max-xs:absolute h-full w-full">
          <div className="relative h-full w-full">
            <div className="relative h-screen w-full bg-white"></div>
          </div>
        </div>
        <div className="max-xs:col-span-6 max-xs:col-start-1 max-xs:row-start-4 max-xs:row-span-2">
          <div
            className="relative h-full w-full flex-1 md:bg-[center_bottom_-5rem]"
            style={{
              backgroundImage: `url(${Architect})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="max-xs:col-span-6 max-xs:col-start-1 max-xs:row-start-1 max-xs:row-span-3 z-10 h-full w-full ">
          <div className="max-xs:grid max-xs:grid-cols-6 max-xs:grid-rows-3 relative h-full w-full">
            <div
              className=" relative col-span-5 col-start-1 row-span-2 row-start-1 h-[100%] w-full "
              style={{
                backgroundImage: `url(${Logo})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="col-start-2 col-end-6 row-span-2 row-start-2 flex w-full flex-col items-center justify-center  pt-10 text-4xl">
              <span className="max-xs:text-right max-xs:tracking-normal w-full tracking-wider">
                Architectural
              </span>
              <span className="max-xs:text-right max-xs:tracking-normal w-full  tracking-wider">
                Services
              </span>
            </div>
            <div className=" relative col-span-1 col-start-6 row-span-2 row-start-2 flex h-full w-full justify-center ">
              <div className="relative h-full w-[10%] bg-goldLines"></div>
            </div>
            <div className=" relative col-span-4 col-start-3 row-start-3 flex h-full w-full items-end ">
              <div className="relative mb-10 h-[5%] w-full bg-goldLines"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTemplate;

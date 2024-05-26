import React from "react";
import Architect from "../assets/architect.jpg";
import Logo from "../assets/DOC_Logo.svg";

const PageTemplate = () => {
  return (
    <>
      <div className="grid min-h-screen grid-cols-12 grid-rows-10 flex-col max-md:w-screen max-md:grid-cols-6 max-md:grid-rows-5 max-md:gap-0 ">
        {/* TABLET */}
        {/* BORDER LINES */}
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex items-end justify-center border-r-4 border-solid border-goldLines max-md:hidden"></div>
        <div className="z-20 col-start-1 col-end-1 row-start-2 row-end-11 border-r-4 border-solid border-goldLines max-md:hidden"></div>
        {/* WHITE BACKGROUND */}
        <div className="col-start-1 col-end-13 row-start-3 row-end-8 max-md:hidden">
          <div className="relative flex h-full w-full flex-col">
            <div className="relative h-full w-full flex-1  bg-cover bg-center xs:bg-cyan-500"></div>
          </div>
        </div>
        {/* IMAGE BACKGROUND */}
        <div className="col-start-1 col-end-13 row-start-6 row-end-11 max-md:hidden">
          <div
            className="relative h-full w-full flex-1 bg-[center_bottom_-5rem]"
            style={{
              backgroundImage: `url(${Architect})`,
              backgroundSize: "cover",
              backgroundPosition: "",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        {/* LOGO */}
        <div className="z-10 col-start-3 col-end-11 row-start-4 row-end-8 grid h-full w-full max-md:hidden">
          <div className="grid grid-cols-7 grid-rows-4">
            <div
              className="col-start-1 col-end-4 row-start-1 row-end-5 h-full w-full "
              style={{
                backgroundImage: `url(${Logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="text-other col-start-4 col-end-8 row-start-1 row-end-5 flex flex-col justify-center ">
              <div className=" tracking-wider">Architectural</div>

              <div className="  tracking-wider">Services</div>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="relative z-30 border-r-4 border-solid border-goldLines max-md:col-start-1 max-md:col-end-2 max-md:row-span-6 max-md:row-start-1 max-md:w-1/2 md:hidden"></div>
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex items-end justify-center border-r-4 border-solid border-goldLines md:hidden"></div>
        {/* WHITE BACKGROUND */}
        <div className="h-full w-full max-md:absolute md:hidden">
          <div className="relative h-full w-full">
            <div className="relative h-screen w-full bg-white"></div>
          </div>
        </div>
        {/* BACKGROUND IMAGE */}
        <div className="max-md:col-span-6 max-md:col-start-1 max-md:row-span-2 max-md:row-start-4 md:hidden">
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
        {/* LOGO */}
        <div className="z-10 h-full w-full max-md:col-span-6 max-md:col-start-1 max-md:row-span-3 max-md:row-start-1 md:hidden">
          <div className="relative h-full w-full max-md:grid max-md:grid-cols-6 max-md:grid-rows-3">
            <div
              className=" relative col-span-4 col-start-1 row-span-2 row-start-1 h-[100%] w-full "
              style={{
                backgroundImage: `url(${Logo})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="col-start-2 col-end-6 row-span-2 row-start-2 flex w-full flex-col items-center justify-center  pt-10 text-4xl">
              <span className="w-full tracking-wider max-md:text-right max-md:tracking-normal">
                Architectural
              </span>
              <span className="w-full tracking-wider max-md:text-right  max-md:tracking-normal">
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

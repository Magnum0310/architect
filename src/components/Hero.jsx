import React from "react";
import About from "../assets/aboutUs.jpg";
import Architect from "../assets/architect.jpg";
import Logo from "../assets/DOC_Logo.svg";

const PageTemplate = () => {
  return (
    <>
      <div className="grid min-h-screen grid-cols-12 grid-rows-10">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex items-end justify-center border-r-4 border-solid border-goldLines"></div>
        <div className="z-20 col-start-1 col-end-1 row-start-2 row-end-11 border-r-4 border-solid border-goldLines"></div>

        <div className="col-start-1 col-end-13 row-start-3 row-end-8">
          <div className="relative flex h-full w-full flex-col">
            <div className="relative h-full w-full flex-1 bg-white bg-cover bg-center"></div>
          </div>
        </div>
        <div className="col-start-1 col-end-13 row-start-6 row-end-11">
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
        <div className="z-10 col-start-3 col-end-11 row-start-4 row-end-8 grid h-full w-full">
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
      </div>
    </>
  );
};

export default PageTemplate;

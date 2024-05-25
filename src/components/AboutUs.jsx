import React from "react";
import About from "../assets/aboutUs.jpg";

const PageTemplate = () => {
  return (
    <>
      {/* TABLET */}
      <div className="grid h-[130vh] grid-cols-12 grid-rows-10 max-md:hidden">
        <div className="text-page-title-color col-start-1 col-end-2 row-start-1 row-end-2 flex h-[6rem] items-end justify-center border-b-4 border-r-4 border-solid  border-goldLines pb-2 text-2xl">
          ABOUT US
        </div>
        <div className="col-start-2 col-end-13 grid h-[6rem] border-b-4 border-solid border-goldLines "></div>
        <div className="col-start-1 col-end-2 row-start-1 row-end-2  border-r-4 border-solid border-goldLines"></div>
        <div className="z-20 col-start-1 col-end-1 row-start-2 row-end-11 border-r-4 border-solid border-goldLines"></div>
        <div className="col-start-3 col-end-11 row-start-2 row-end-6 grid">
          <div className="relative flex h-full w-full flex-col justify-evenly gap-12">
            <div className="text-subtitle text-subtitle-color">
              Where dreams Take Shape
            </div>
            <div className="text-subtitle-description text-subtitle-description-color ml-48 font-Fahkwang font-thin">
              Step into a world of endless possibilities with
              <span className="font-bold"> DOC. </span>
              From concept to completion, we specialize in turning your
              architectural dreams into stunning reality. Whether you're
              envisioning a modern masterpiece or a cozy retreat, we're here to
              make it happen.
            </div>
          </div>
        </div>
        <div className="col-start-1 col-end-13 row-start-7 row-end-11">
          <div className="relative flex h-full w-full flex-col">
            <div
              className="relative h-full w-full flex-1 bg-cover bg-center"
              style={{
                backgroundImage: `url(${About})`,
                backgroundSize: "",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="grid w-screen flex-col bg-red-500 max-xs:h-screen max-xs:grid-cols-6 max-xs:grid-rows-4 max-xs:gap-0 md:hidden md:h-[130vh]">
        <div className="relative z-30 border-r-4 border-solid border-goldLines max-xs:col-start-1 max-xs:col-end-2 max-xs:row-span-4 max-xs:row-start-1 max-xs:w-1/2"></div>
        <div className="text-page-title-color relative z-20 flex items-center justify-center border-b-4 border-goldLines bg-primaryBackground bg-opacity-45 max-xs:col-span-6 max-xs:col-start-1 max-xs:row-start-1 max-xs:h-1/4 max-xs:text-base">
          ABOUT US
        </div>
        <div className="relative z-20 h-full max-xs:col-span-5 max-xs:col-start-2 max-xs:row-start-2  max-xs:place-items-center">
          <div className="relative flex flex-col  gap-10 bg-primaryBackground bg-opacity-45 max-xs:py-4 max-xs:pl-2 max-xs:pr-4">
            <div className="text-subtitle-color relative max-xs:text-left max-xs:text-4xl">
              Where dreams Take Shape
            </div>
            <div className="text-subtitle-description-color max-xs:text-subtitle-description relative font-Fahkwang  font-thin max-xs:text-left">
              Step into a world of endless possibilities with
              <span className="font-bold"> DOC. </span>
              From concept to completion, we specialize in turning your
              architectural dreams into stunning reality. Whether you're
              envisioning a modern masterpiece or a cozy retreat, we're here to
              make it happen.
            </div>
          </div>
        </div>
        <div className="h-full w-full max-xs:absolute">
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

import React from "react";
import About from "../assets/aboutUs.jpg";

const PageTemplate = () => {
  return (
    <>
      <div className="grid h-[130vh] grid-cols-12 grid-rows-10">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex h-[6rem] items-end justify-center border-b-4 border-r-4 border-solid border-goldLines  pb-2 text-2xl text-white">
          ABOUT US
        </div>
        <div className="col-start-2 col-end-13 grid h-[6rem] border-b-4 border-solid border-goldLines "></div>
        <div className="col-start-1 col-end-2 row-start-1 row-end-2  border-r-4 border-solid border-goldLines"></div>
        <div className="z-20 col-start-1 col-end-1 row-start-2 row-end-11 border-r-4 border-solid border-goldLines"></div>
        <div className="col-start-3 col-end-11 row-start-2 row-end-6 grid">
          <div className="relative flex h-full w-full flex-col justify-evenly gap-12">
            <div className="text-subtitle text-white">
              Where dreams Take Shape
            </div>
            <div className="text-subtitle-description ml-48 font-Fahkwang font-thin text-white">
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
              className="relative h-full w-full flex-1 bg-cover bg-center text-white"
              style={{
                backgroundImage: `url(${About})`,
                backgroundSize: "",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTemplate;

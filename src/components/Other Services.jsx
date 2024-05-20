import React from "react";
import About from "../assets/aboutUs.jpg";

const PageTemplate = () => {
  return (
    <>
      <div className="relative grid h-full grid-cols-12 grid-rows-9">
        <div className="text-page-title-color col-start-1 col-end-2 row-start-1 row-end-2 flex items-end justify-center border-b-4 border-r-4 border-solid border-goldLines pb-2 text-2xl">
          <div className="relative flex h-full w-full flex-col items-center justify-end ">
            <div>
              <p>OTHER</p>
              <p>SERVICES</p>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-end-13 grid  border-b-4 border-solid border-goldLines "></div>
        <div className="z-20 col-start-1 col-end-1 row-start-2 row-end-10 border-r-4 border-solid border-goldLines"></div>
        <div className="col-start-3 col-end-11 row-start-3 row-end-7 grid ">
          <div className="relative flex h-full w-full flex-col justify-evenly gap-12">
            <div className="text-subtitle text-subtitle-color">
              Explore additional offerings to complement your architectural
              needs:
            </div>
            {/* <div className="text-subtitle-description text-subtitle-description-color ml-48 font-Fahkwang font-thin">
              Discover our diverse expertise. From architectural design to
              construction, our talented team brings creativity and innovation
              to every project. Explore our areas of expertise and let us bring
              your vision to life
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTemplate;

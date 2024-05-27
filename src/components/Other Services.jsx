import React from "react";
import About from "../assets/aboutUs.jpg";

const PageTemplate = () => {
  return (
    <>
      {/* TABLET */}
      <div className="relative grid h-full grid-cols-12 grid-rows-9 max-md:hidden">
        <div className="text-page-title-color text-page-section col-start-1 col-end-2 row-start-1 row-end-2 flex items-end justify-center border-b-4 border-r-4 border-solid border-goldLines pb-2">
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
            <div className="text-page-section-title text-subtitle-color">
              Explore additional offerings to complement your architectural
              needs:
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="grid w-screen flex-col  max-md:h-full max-md:grid-cols-6 max-md:grid-rows-4 max-md:gap-0 md:hidden">
        <div className="relative z-30 border-r-4 border-solid border-goldLines max-md:col-start-1 max-md:col-end-2 max-md:row-span-4 max-md:row-start-1 max-md:w-1/2"></div>
        <div className="text-page-title-color relative z-20 flex items-center justify-center border-b-4 border-goldLines bg-primaryBackground bg-opacity-45 max-md:col-span-6 max-md:col-start-1 max-md:row-start-1 max-md:h-1/4 max-md:text-base">
          <p>OTHER</p>
          <p>SERVICES</p>
        </div>
        <div className="relative z-20 h-full max-md:col-span-5 max-md:col-start-2 max-md:row-start-2  max-md:place-items-center">
          <div className="relative flex flex-col gap-10 bg-primaryBackground bg-opacity-45 max-md:py-4 max-md:pl-2 max-md:pr-4">
            <div className="text-subtitle-color relative max-md:text-left max-md:text-4xl">
              Explore additional offerings to complement your architectural
              needs:
            </div>
            {/* NEED TO BE HIDDEN - will edit later */}
            {/* <div className="text-subtitle-description-color relative hidden font-Fahkwang font-thin  max-md:text-left max-md:text-lg">
              Step into a world of endless possibilities with
              <span className="font-bold"> DOC. </span>
              From concept to completion, we specialize in turning your
              architectural dreams into stunning reality. Whether you're
              envisioning a modern masterpiece or a cozy retreat, we're here to
              make it happen.
            </div> */}
          </div>
        </div>
        {/* <div className="hidden h-full w-full max-md:absolute">
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
        </div> */}
      </div>
    </>
  );
};

export default PageTemplate;

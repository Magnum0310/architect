import { motion } from "framer-motion";

const PageTemplate = () => {
  return (
    <>
      <div className="max-xs:grid-cols-6 max-xs:grid-rows-4 max-xs:gap-0 max-xs:h-screen max-xs:w-screen max-xs:flex-col relative grid h-full grid-cols-12 grid-rows-9">
        <div className="max-xs:col-start-1 max-xs:col-end-2 max-xs:row-span-4 max-xs:w-1/2 max-xs:row-start-1 relative z-30 border-solid border-goldLines max-md:border-r-4"></div>
        <div className="text-page-title-color max-xs:col-span-6 max-xs:col-start-1 max-xs:row-start-1 max-xs:h-1/4 max-xs:text-base relative z-20 flex items-center justify-center border-b-4 border-goldLines bg-primaryBackground bg-opacity-45 md:col-span-1 md:col-start-1 md:row-start-1">
          SERVICES
        </div>

        <div className="col-start-2 col-end-13 row-start-1 grid border-b-4 border-solid border-goldLines max-md:hidden "></div>
        <div className="z-20 col-start-1 col-end-2 row-start-1 row-end-10 border-r-4 border-solid border-goldLines max-md:hidden"></div>

        <div className="max-xs:col-span-5 max-xs:col-start-2 max-xs:row-start-2 max-xs:place-items-center relative z-20 grid h-full md:col-start-3 md:col-end-11 md:row-start-3 md:row-end-7">
          <div className="max-xs:py-4 max-xs:pl-2 max-pr-4 relative flex flex-col gap-10 bg-primaryBackground bg-opacity-45 md:h-full md:w-full md:justify-evenly md:gap-12">
            <div className="text-subtitle-color md:text-subtitle max-xs:text-left max-xs:text-4xl relative">
              Discover our comprehensive range of services
            </div>
            <div className="text-subtitle-description-color max-xs:text-lg max-xs:text-left text-subtitle-description relative font-Fahkwang font-thin md:ml-48 md:text-xl">
              Discover our diverse expertise. From architectural design to
              construction, our talented team brings creativity and innovation
              to every project. Explore our areas of expertise and let us bring
              your vision to life.
            </div>
          </div>
        </div>
        {/* <div className="max-xs:absolute h-full w-full">
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

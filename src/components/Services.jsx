import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Variants from "./constants/Variants";

const {
  primaryVariant,
  titleVariant,
  textVariant,
  leftTextVariant,
  downTitleVariant,
} = Variants;

const PageTemplate = () => {
  const divRef = useRef(null);
  const mobileRef = useRef(null);
  const isInView = useInView(divRef, {
    once: true,
    margin: "0px 100px -300px 0px",
  });
  const mobileView = useInView(mobileRef, {
    once: true,
    margin: "0px 100px -300px 0px",
  });
  return (
    <>
      {/* TABLET */}
      <div className="relative grid h-full grid-cols-12 grid-rows-9 max-md:hidden">
        <div className="text-page-title-color text-page-section col-start-1 col-end-2 row-start-1 row-end-2  flex items-end justify-center border-b-4 border-r-4 border-solid border-goldLines py-5"></div>
        <div className="col-start-2 col-end-13 grid  border-b-4 border-solid border-goldLines "></div>
        <div className="z-20 col-start-1 col-end-1 row-start-2 row-end-10 border-r-4 border-solid border-goldLines"></div>
        <div
          className="col-start-3 col-end-11 row-start-3 row-end-7 grid"
          ref={divRef}
        >
          {isInView ? (
            <motion.div
              className="relative flex h-full w-full flex-col justify-evenly gap-12"
              variants={primaryVariant}
              animate="animate"
              initial="initial"
            >
              <motion.div
                className="text-page-section-title text-subtitle-color"
                variants={titleVariant}
              >
                Discover our comprehensive range of services
              </motion.div>
              <motion.div
                className="text-page-section-content text-subtitle-description-color ml-48 font-Fahkwang font-thin"
                variants={leftTextVariant}
              >
                Discover our diverse expertise. From architectural design to
                construction, our talented team brings creativity and innovation
                to every project. Explore our areas of expertise and let us
                bring your vision to life.
              </motion.div>
            </motion.div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* MOBILE */}
      <div className="relative grid h-full grid-cols-12 grid-rows-9 max-md:h-screen max-md:w-screen max-md:grid-cols-6 max-md:grid-rows-4 max-md:flex-col max-md:gap-0 md:hidden">
        <div className="relative z-30 border-solid border-goldLines max-md:col-start-1 max-md:col-end-2 max-md:row-span-4 max-md:row-start-1 max-md:w-1/2 max-md:border-r-4"></div>
        <div className="text-page-title-color text-page-section relative z-20 flex items-center justify-center border-b-4 border-goldLines bg-primaryBackground bg-opacity-45 max-md:col-span-6 max-md:col-start-1 max-md:row-start-1 max-md:h-1/4 md:col-span-1 md:col-start-1 md:row-start-1">
          {/* SERVICES */}
        </div>

        <div className="col-start-2 col-end-13 row-start-1 grid border-b-4 border-solid border-goldLines max-md:hidden "></div>
        <div className="z-20 col-start-1 col-end-2 row-start-1 row-end-10 border-r-4 border-solid border-goldLines max-md:hidden"></div>

        <div
          className="relative z-20 grid h-full  max-md:col-span-5 max-md:col-start-2 max-md:row-span-4 max-md:row-start-1 max-md:h-3/4 max-md:place-items-center md:col-start-3 md:col-end-11 md:row-start-3 md:row-end-7"
          ref={mobileRef}
        >
          {mobileView ? (
            <motion.div
              className="relative flex flex-col gap-10 bg-primaryBackground bg-opacity-45 max-md:py-4 max-md:pl-2 max-md:pr-4 md:h-full md:w-full md:justify-evenly md:gap-12"
              variants={primaryVariant}
              animate="animate"
              initial="initial"
            >
              <motion.div
                className="text-subtitle-color text-page-section-title relative max-md:text-left"
                variants={titleVariant}
              >
                Discover our comprehensive range of services
              </motion.div>
              <motion.div
                className="text-subtitle-description-color text-page-section-content relative font-Fahkwang font-thin max-md:text-left md:ml-48 md:text-xl"
                variants={leftTextVariant}
              >
                Discover our diverse expertise. From architectural design to
                construction, our talented team brings creativity and innovation
                to every project. Explore our areas of expertise and let us
                bring your vision to life.
              </motion.div>
            </motion.div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default PageTemplate;

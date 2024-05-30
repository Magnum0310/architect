import { useRef } from "react";
import Variants from "./constants/Variants";
import { motion, useInView } from "framer-motion";

const { primaryVariant, textVariant, titleVariant } = Variants;

const PageTemplate = () => {
  const divRef = useRef(null);
  const isInView = useInView(divRef, {
    once: true,
    margin: "0px 100px -300px 0px",
  });
  return (
    <>
      {/* TABLET */}
      <div className="relative grid h-full grid-cols-12 grid-rows-9  max-md:hidden">
        <div className="text-page-title-color text-page-section col-start-1 col-end-2 row-start-1 row-end-2 flex items-end justify-center border-b-4 border-r-4 border-solid border-goldLines pb-2"></div>
        <div className="col-start-2 col-end-13 grid  border-b-4 border-solid border-goldLines "></div>
        <div className="z-20 col-start-1 col-end-1 row-start-2 row-end-10 border-r-4 border-solid border-goldLines"></div>
        <div
          className="col-start-3 col-end-11 row-start-4 row-end-7 grid"
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
                Explore additional offerings to complement your architectural
                needs:
              </motion.div>
            </motion.div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* MOBILE */}
      <div className="grid w-screen flex-col  max-md:h-full max-md:grid-cols-6 max-md:grid-rows-4 max-md:gap-0 md:hidden">
        <div className="relative z-30 border-r-4 border-solid border-goldLines max-md:col-start-1 max-md:col-end-2 max-md:row-span-4 max-md:row-start-1 max-md:w-1/2"></div>
        <div className="text-page-title-color relative z-20 flex items-center justify-center border-b-4 border-goldLines bg-primaryBackground bg-opacity-45 max-md:col-span-6 max-md:col-start-1 max-md:row-start-1 max-md:h-1/4 max-md:text-base"></div>
        <div className="relative z-20 h-full max-md:col-span-5 max-md:col-start-2 max-md:row-start-2  max-md:place-items-center">
          <div className="relative flex flex-col gap-10 bg-primaryBackground bg-opacity-45 max-md:py-4 max-md:pl-2 max-md:pr-4">
            <div className="text-subtitle-color text-page-section-title relative max-md:text-left">
              Explore additional offerings to complement your architectural
              needs:
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTemplate;

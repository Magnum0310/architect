import { useRef } from "react";
import About from "../assets/aboutUs.jpg";
import { motion, useInView } from "framer-motion";
import Variants from "./constants/Variants";

const { primaryVariant, textVariant, titleVariant, shapeVariant } = Variants;

const PageTemplate = () => {
  const divRef = useRef(null);
  const isInView = useInView(divRef, {
    once: true,
    margin: "0px 100px -300px 0px",
  });
  return (
    <>
      {/* TABLET */}

      <div
        className="grid h-[130vh] grid-cols-12 grid-rows-10 max-md:hidden"
        ref={divRef}
      >
        <div className="text-page-title-color text-page-section col-start-1 col-end-2 row-start-1 row-end-2  flex items-end justify-center border-b-4 border-r-4 border-solid border-goldLines py-5"></div>
        <div className="col-start-2 col-end-13 grid border-b-4 border-solid border-goldLines "></div>
        <div className="z-20 col-start-1 col-end-1 row-start-2 row-end-11 border-r-4 border-solid border-goldLines"></div>
        {isInView ? (
          <>
            <motion.div className="col-start-3 col-end-11 row-start-2 row-end-7 ">
              <motion.div
                className="relative flex h-full w-full flex-col justify-center gap-5 "
                variants={primaryVariant}
                animate="animate"
                initial="initial"
              >
                <motion.div
                  className="text-page-section-title text-subtitle-color"
                  variants={titleVariant}
                >
                  Where dreams Take Shape
                </motion.div>
                <motion.div
                  className="text-page-section-content text-subtitle-description-color ml-48 font-Fahkwang font-thin"
                  variants={textVariant}
                >
                  Step into a world of endless possibilities with
                  <span className="font-bold"> DOC. </span>
                  From concept to completion, we specialize in turning your
                  architectural dreams into stunning reality. Whether you're
                  envisioning a modern masterpiece or a cozy retreat, we're here
                  to make it happen.
                </motion.div>
              </motion.div>
            </motion.div>
            <div className="col-start-1 col-end-13 row-start-7 row-end-11 bg-blue-500">
              <motion.div
                className="relative flex h-full w-full flex-col"
                variants={primaryVariant}
                animate="animate"
                initial="initial"
              >
                <motion.div
                  className="relative z-10 h-full w-full flex-1  bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${About})`,
                    backgroundSize: "",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="grid h-full w-full grid-cols-4 grid-rows-7 ">
                    <motion.div
                      className="col-start-1 col-end-2 row-start-1 row-end-8 bg-primaryBackground"
                      variants={shapeVariant}
                      style={{ originX: 1 }}
                    ></motion.div>
                    <motion.div
                      className="col-start-2 col-end-3 row-start-1 row-end-8 bg-primaryBackground"
                      variants={shapeVariant}
                      style={{ originX: 1 }}
                    ></motion.div>
                    <motion.div
                      className="col-start-3 col-end-4 row-start-1 row-end-8 bg-primaryBackground"
                      variants={shapeVariant}
                      style={{ originX: 1 }}
                    ></motion.div>
                    <motion.div
                      className="col-start-4 col-end-5 row-start-1 row-end-8 bg-primaryBackground"
                      variants={shapeVariant}
                      style={{ originX: 1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      {/* MOBILE */}
      <div className="grid w-screen flex-col max-md:h-screen max-md:grid-cols-6 max-md:grid-rows-4 max-md:gap-0 md:hidden md:h-[100vh]">
        <div className="relative z-30 border-r-4 border-solid border-goldLines max-md:col-start-1 max-md:col-end-2 max-md:row-span-4 max-md:row-start-1 max-md:w-1/2"></div>
        <div className="text-page-title-color text-page-section relative z-20 flex items-center justify-center border-b-4 border-goldLines bg-primaryBackground bg-opacity-45 max-md:col-span-6 max-md:col-start-1 max-md:row-start-1 max-md:h-1/4">
          {/* ABOUT US */}
        </div>
        <div className="relative z-20 h-full max-md:col-span-5 max-md:col-start-2 max-md:row-span-2 max-md:row-start-2 max-md:place-items-center">
          <div className="relative flex h-full w-full flex-col justify-center gap-10 bg-primaryBackground bg-opacity-45 max-md:py-4 max-md:pl-2 max-md:pr-4">
            <div className="text-subtitle-color max-md:text-subtitle relative max-md:text-left">
              Where dreams Take Shape
            </div>
            <div className="text-subtitle-description-color text-page-section-content relative font-Fahkwang  font-thin max-md:text-left">
              Step into a world of endless possibilities with
              <span className="font-bold"> DOC. </span>
              From concept to completion, we specialize in turning your
              architectural dreams into stunning reality. Whether you're
              envisioning a modern masterpiece or a cozy retreat, we're here to
              make it happen.
            </div>
          </div>
        </div>
        <div className="h-full w-full max-md:absolute">
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

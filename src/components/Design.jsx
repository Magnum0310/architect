import { useRef, useEffect } from "react";
import {
  useScroll,
  motion,
  useInView,
  useTransform,
  easeInOut,
  easeIn,
} from "framer-motion";
import React from "react";
import Design from "../assets/design.jpg";
import Interior from "../assets/interior.jpg";
import Landscape from "../assets/landscape.jpg";
import Project from "../assets/project.jpg";
import Construction from "../assets/construction.jpg";

const ServicesPage = ({ track }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: track,
    offset: ["start center", "end center"],
  });

  const trackerStart = 0.05;
  const trackerEnd = 0.1;

  const yTitle = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [-60, 0],
    {
      ease: easeInOut,
    },
  );
  const yDescription = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [60, 0],
    {
      ease: easeInOut,
    },
  );
  const imageScale = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [0.3, 1],
    {
      ease: easeInOut,
    },
  );
  const imageScroll = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4],
    [0, 0, -1000],
    { ease: easeInOut },
  );
  // Highlight and Shapes
  const shapeOpacity = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [0, 0.45],
    {
      ease: easeInOut,
    },
  );
  const hightLightOpacity = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [0, 1],
    {
      ease: easeInOut,
    },
  );
  const topHighlight = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [-100, 0],
    {
      ease: easeInOut,
    },
  );
  const bottomHighlight = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [-100, 0],
    {
      ease: easeInOut,
    },
  );

  return (
    <>
      <div className="max-xs:h-full max-xs:w-full  md:mb-96">
        {/* MAIN GRID */}
        <motion.div className="max-xs:flex max-xs:h-full max-xs:w-full max-xs:justify-center  max-xs:flex-col md:grid md:grid-cols-12 md:grid-rows-10 ">
          {/* IMAGE */}
          {/* TABLET */}
          <motion.div className="col-start-1 col-end-13 row-start-1 row-end-11 max-md:hidden">
            <motion.div
              className="h-[100vh] w-full bg-cover"
              style={{
                backgroundImage: `url(${Design})`,
                scale: imageScale,
                y: imageScroll,
              }}
            />
          </motion.div>
          {/* MOBILE */}
          <motion.div className="relative h-1/2 w-full  md:hidden">
            <motion.div
              className="h-full w-full bg-cover"
              style={{
                backgroundImage: `url(${Design})`,
                scale: 1,
                y: 0,
              }}
            />
          </motion.div>
          {/* WRAPPER */}

          {/* TABLET */}
          <div className="col-start-4 col-end-11 row-start-3 row-end-10 max-md:hidden">
            <div className="relative grid h-full grid-cols-7 grid-rows-7 ">
              {/* GRAY RECTANGLE */}
              <motion.div
                className="col-start-1 col-end-9 row-start-2 row-end-10  bg-primaryBackground opacity-45"
                style={{ opacity: shapeOpacity }}
              ></motion.div>
              {/* SERVICE TITLE */}
              <motion.div
                className="text-title z-10 col-start-1 col-end-6 row-start-1 row-end-3 flex items-center justify-center"
                style={{ y: yTitle }}
              >
                <span className="text-title-color">Architectural</span>
              </motion.div>
              <motion.div
                className="text-title z-10 col-start-4 col-end-7 row-start-2 row-end-4 flex  items-center"
                style={{ y: yTitle }}
              >
                <span className="text-title-color">Design</span>
              </motion.div>
              {/* SERVICE SUBTITLE */}
              <motion.div
                className="text-subtitle-description-color text-service-description  z-10 col-start-1 col-end-4 row-start-4 row-end-5 flex  justify-center font-Fahkwang"
                style={{ y: yDescription }}
              >
                <span>Architectural Design</span>
              </motion.div>
              {/* SERVICE DESCRIPTION */}
              <motion.div
                className="text-subtitle-description-color text-service-description z-10 col-start-4 col-end-7 row-start-4 row-end-7  font-Fahkwang"
                style={{ y: yDescription }}
              >
                <span>
                  Meet our visionary architects, who tirelessly work to bring
                  yourvision to life. With expertise, attention to detail, and
                  dedication to innovation, each member of our team brings a
                  unique perspective to every project. From concept to
                  completion, we collaborate closely with you to ensure that
                  your space is a true reflection of your style and personality.
                </span>
              </motion.div>
              {/* HIGHTLIGHTS */}
              <motion.div
                className="relative left-1/2 right-1/2 col-start-7 col-end-8 row-start-4 row-end-8 w-[.5rem] bg-goldLines"
                ref={element}
                style={{ opacity: hightLightOpacity, y: topHighlight }}
              ></motion.div>
              <motion.div
                className="relative bottom-1/2 top-1/2 col-start-4 col-end-8 row-start-7 row-end-8 h-[.5rem] bg-goldLines"
                style={{ opacity: hightLightOpacity, x: bottomHighlight }}
              ></motion.div>
            </div>
          </div>

          {/* MOBILE */}
          <div className="absolute grid h-3/4 w-full grid-cols-6 grid-rows-6 bg-green-500 bg-opacity-0 md:hidden">
            {/* <div className="relative grid h-full grid-cols-7 grid-rows-7 "> */}

            {/* SERVICE TITLE */}
            <motion.div
              className=" col-span-6 col-start-2 flex items-end justify-start  text-4xl"
              style={{ y: 0 }}
            >
              <span className="text-title-color">Architectural</span>
            </motion.div>
            <motion.div
              className=" col-span-6 col-start-2 flex items-start justify-start  text-4xl "
              style={{ y: 0 }}
            >
              <span className="text-title-color">Design</span>
            </motion.div>
            {/* SERVICE SUBTITLE */}
            {/* <motion.div
                className="text-subtitle-description-color text-service-description  z-10 col-start-1 col-end-4 row-start-4 row-end-5 flex  justify-center font-Fahkwang"
                style={{ y: yDescription }}
              >
                <span>Architectural Design</span>
              </motion.div> */}
            {/* SERVICE DESCRIPTION */}
            {/* GRAY RECTANGLE */}
            <motion.div className=" col-span-6 col-start-1 row-span-3 row-start-3 bg-primaryBackground opacity-45"></motion.div>
            <motion.div
              className="text-subtitle-description-color z-10 col-span-5 col-start-2 row-span-3 row-start-3 flex items-center  pr-5 text-left font-Fahkwang text-xs"
              style={{ y: 0 }}
            >
              <span>
                Meet our visionary architects, who tirelessly work to bring
                yourvision to life. With expertise, attention to detail, and
                dedication to innovation, each member of our team brings a
                unique perspective to every project. From concept to completion,
                we collaborate closely with you to ensure that your space is a
                true reflection of your style and personality.
              </span>
            </motion.div>
            {/* HIGHTLIGHTS */}
            {/* <motion.div
                className="relative left-1/2 right-1/2 col-start-7 col-end-8 row-start-4 row-end-8 w-[.5rem] bg-goldLines"
                ref={element}
                style={{ opacity: hightLightOpacity, y: topHighlight }}
              ></motion.div> */}
            {/* <motion.div
                className="relative bottom-1/2 top-1/2 col-start-4 col-end-8 row-start-7 row-end-8 h-[.5rem] bg-goldLines"
                style={{ opacity: hightLightOpacity, x: bottomHighlight }}
              ></motion.div> */}
            {/* </div> */}
          </div>
          {/* BORDER LINE */}
          <div className="z-10 col-start-1 col-end-2 row-start-1 row-end-11 border-r-4 border-goldLines"></div>
          <div className="absolute grid h-full w-full grid-cols-6 grid-rows-4 md:hidden">
            <div className="max-xs:col-start-1 max-xs:col-end-2 max-xs:row-span-4 max-xs:w-1/2 max-xs:row-start-1 relative  border-r-4 border-solid border-goldLines"></div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ServicesPage;

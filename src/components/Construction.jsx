import { useRef, useEffect } from "react";
import {
  useScroll,
  motion,
  useInView,
  useTransform,
  easeInOut,
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
    offset: [".6 .5", ".9 .5"],
  });

  const trackerStart = 0.365;
  const trackerEnd = 0.455;

  const yOpacity = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [0, 1],
    {
      ease: easeInOut,
    },
  );
  const yTitle = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd, 0.8, 1],
    [100, 0, 0, -60],
    {
      ease: easeInOut,
    },
  );
  const yDescription = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd, 0.8, 1],
    [60, 0, 0, 60],
    {
      ease: easeInOut,
    },
  );
  const imageScale = useTransform(
    scrollYProgress,
    [1, 1, 0.85],
    [0.3, 0.3, 1],
    {
      ease: easeInOut,
    },
  );
  const backgroundScale = useTransform(scrollYProgress, [1, 0.9], [1, 1], {
    ease: easeInOut,
  });
  // Highlight and Shapes
  const shapeOpacity = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd, 0.8, 1],
    [0, 0.45, 0.45, 0],
    {
      ease: easeInOut,
    },
  );
  const hightLightOpacity = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd, 0.8, 1],
    [0, 1, 1, 0],
    {
      ease: easeInOut,
    },
  );
  const topHighlight = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd, 0.8, 1],
    [-100, 0, 0, -100],
    {
      ease: easeInOut,
    },
  );
  const bottomHighlight = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd, 0.8, 1],
    [-100, 0, 0, -100],
    {
      ease: easeInOut,
    },
  );

  return (
    <>
      <div className="">
        <motion.div className="grid grid-cols-12 grid-rows-10">
          <motion.div className="col-start-1 col-end-13 row-start-1 row-end-11 ">
            <motion.div
              className="h-[100vh] w-full bg-cover"
              style={{
                backgroundImage: `url(${Construction})`,
                scale: imageScale,
              }}
            />
            <motion.div
              className="absolute top-0 -z-10 h-full w-full "
              style={{
                backgroundColor: "#171C22",
                scale: backgroundScale,
              }}
            />
          </motion.div>

          {/* WRAPPER */}
          <div className="col-start-4 col-end-11 row-start-3 row-end-10">
            <div className="relative grid h-full grid-cols-7 grid-rows-7 ">
              {/* GRAY RECTANGLE */}
              <motion.div
                className="col-start-1 col-end-9 row-start-2 row-end-10  bg-primaryBackground opacity-45"
                style={{ opacity: shapeOpacity }}
              ></motion.div>
              {/* SERVICE TITLE */}
              <motion.div
                className="text-title z-10 col-start-1 col-end-6 row-start-1 row-end-3 flex items-center justify-center"
                style={{ y: yTitle, opacity: yOpacity }}
              >
                <span className="text-title-color">Construction</span>
              </motion.div>
              <motion.div
                className="text-title z-10 col-start-4 col-end-7 row-start-2 row-end-4 flex  items-center"
                style={{ y: yTitle, opacity: yOpacity }}
              >
                <span className="text-title-color"></span>
              </motion.div>
              {/* SERVICE SUBTITLE */}
              <motion.div
                className="text-subtitle-description-color text-service-description  z-10 col-start-1 col-end-4 row-start-4 row-end-5 flex  justify-center font-Fahkwang"
                style={{ y: yDescription, opacity: yOpacity }}
              >
                <span>Construction</span>
              </motion.div>
              {/* SERVICE DESCRIPTION */}
              <motion.div
                className="text-subtitle-description-color text-service-description z-10 col-start-4 col-end-7 row-start-4 row-end-7  font-Fahkwang"
                style={{ y: yDescription, opacity: yOpacity }}
              >
                <span>
                  Experience craftsmanship at its finest with our skilled
                  construction team. From groundbreaking to finishing touches,
                  we bring designs to life with meticulous attention to detail
                  and a commitment to excellence. With a focus on quality and
                  durability, we ensure that your project is not only visually
                  stunning but also built to withstand the test of time.
                </span>
              </motion.div>
              {/* HIGHTLIGHTS */}
              <motion.div
                className="relative left-1/2 right-1/2 col-start-7 col-end-8 row-start-4 row-end-8 w-[.5rem] bg-goldLines"
                style={{ opacity: hightLightOpacity, y: topHighlight }}
              ></motion.div>
              <motion.div
                className="relative bottom-1/2 top-1/2 col-start-4 col-end-8 row-start-7 row-end-8 h-[.5rem] bg-goldLines"
                style={{ opacity: hightLightOpacity, x: bottomHighlight }}
              ></motion.div>
            </div>
          </div>
          {/* BORDER LINE */}
          <div className="z-10 col-start-1 col-end-2 row-start-1 row-end-11 border-r-4 border-goldLines"></div>
        </motion.div>
      </div>
    </>
  );
};

export default ServicesPage;

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

  const isInView = useInView(element, { margin: "-50% 0% -50% 50%" });

  console.log(isInView);
  return (
    <>
      <div className="mb-96">
        <motion.div className="grid grid-cols-12 grid-rows-10">
          <motion.div className="col-start-1 col-end-13 row-start-1 row-end-11 ">
            <motion.div
              className="h-[100vh] w-full bg-cover"
              style={{
                backgroundImage: `url(${Design})`,
                scale: imageScale,
                y: imageScroll,
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
          {/* BORDER LINE */}
          <div className="z-10 col-start-1 col-end-2 row-start-1 row-end-11 border-r-4 border-goldLines"></div>
        </motion.div>
      </div>
    </>
  );
};

export default ServicesPage;

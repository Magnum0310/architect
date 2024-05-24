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
import Permit from "../assets/buildingPermits.jpg";
import Interior from "../assets/interior.jpg";
import Landscape from "../assets/landscape.jpg";
import Project from "../assets/project.jpg";
import Construction from "../assets/construction.jpg";

const ServicesPage = ({ track }) => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start center", "center center"],
  });

  const trackerStart = 0.5;
  const trackerEnd = 1;

  const yTitle = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [280, 280],
    {
      ease: easeInOut,
    },
  );
  const xTitle = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [-150, -150],
    {
      ease: easeInOut,
    },
  );
  const xSubTitle = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [-510, -510],
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
  const yDescriptionOpacity = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd, 1],
    [0, 0.5, 1],
    {
      ease: easeInOut,
    },
  );

  // IMAGE
  const imageScale = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [0.6, 0.75],
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

  const imageY = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [90, 0],
  );
  const imageX = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [225, 225],
  );

  // Highlight and Shapes
  const shapeOpacity = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [0.45, 0.45],
    // [1, 1],
    {
      ease: easeInOut,
    },
  );
  const hightLightOpacity = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [1, 1],
    {
      ease: easeInOut,
    },
  );
  const yTopHighlight = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [55, 55],
    {
      ease: easeInOut,
    },
  );
  const xTopHighlight = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [-425, -425],
    {
      ease: easeInOut,
    },
  );

  const yBottomHighlight = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [-25, -25],
    {
      ease: easeInOut,
    },
  );

  const xBottomHighlight = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [-310, -310],
    {
      ease: easeInOut,
    },
  );

  // SHAPE
  const shapeScale = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [0.7, 0.7],
  );
  const shapeX = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [-300, -300],
  );
  const shapeY = useTransform(
    scrollYProgress,
    [trackerStart, trackerEnd],
    [50, 50],
  );

  return (
    <>
      <div className="">
        <motion.div className="grid h-screen grid-cols-12 grid-rows-10">
          <motion.div className="col-start-1 col-end-13 row-start-1 row-end-11 ">
            <motion.div
              className="h-full w-full bg-cover "
              style={{
                backgroundImage: `url(${Permit})`,
                backgroundRepeat: "no-repeat",
                scale: imageScale,
                x: imageX,
                y: imageY,
              }}
            />
          </motion.div>
          {/* WRAPPER */}
          <div className="col-start-4 col-end-11 row-start-3 row-end-10">
            <div className="relative grid h-full grid-cols-7 grid-rows-7">
              {/* GRAY RECTANGLE */}
              <motion.div
                className="col-start-1 col-end-9 row-start-2 row-end-10 bg-primaryBackground opacity-45"
                style={{
                  opacity: shapeOpacity,
                  scale: shapeScale,
                  x: shapeX,
                  y: shapeY,
                }}
              ></motion.div>
              {/* SERVICE TITLE */}
              <motion.div
                className="text-title z-10 col-start-1 col-end-6 row-start-1 row-end-3 flex items-center justify-center"
                style={{ y: yTitle, x: xTitle }}
                // style={{ y: 280, x: -150 }}
              >
                <span className="text-title-color">Building Permit</span>
              </motion.div>
              <motion.div
                className="text-title z-10 col-start-4 col-end-7 row-start-2 row-end-4 flex w-max items-center "
                style={{ y: yTitle, x: xSubTitle }}
                // style={{ y: 280, x: -510 }}
              >
                <span className="text-title-color">Documents</span>
              </motion.div>
              {/* SERVICE SUBTITLE */}
              <motion.div
                className="text-subtitle-description-color text-service-description z-10 col-start-1  col-end-4 row-start-4 row-end-5 flex    justify-center font-Fahkwang"
                style={{ y: yDescription, opacity: yDescriptionOpacity }}
              >
                <span>Building Permit Documents</span>
              </motion.div>
              {/* SERVICE DESCRIPTION */}
              <motion.div
                className="text-subtitle-description-color text-service-description z-10 col-start-4 col-end-7 row-start-4 row-end-7 hidden   font-Fahkwang"
                style={{ y: yDescription, opacity: yDescriptionOpacity }}
              >
                <span>
                  Ensure compliance and expedite your project with our
                  comprehensive building permit document services. Our team
                  handles the paperwork, ensuring all necessary permits and
                  approvals are obtained efficiently.
                </span>
              </motion.div>
              {/* HIGHTLIGHTS */}
              <motion.div
                className="relative left-1/2 right-1/2 col-start-7 col-end-8 row-start-4 row-end-7  w-[.5rem] bg-goldLines"
                style={{
                  opacity: hightLightOpacity,
                  y: yTopHighlight,
                  x: xTopHighlight,
                }}
              ></motion.div>
              <motion.div
                className="relative bottom-1/2 top-1/2 col-start-6 col-end-7 row-start-7 row-end-8  h-[.5rem] bg-goldLines"
                style={{
                  opacity: hightLightOpacity,
                  x: xBottomHighlight,
                  y: yBottomHighlight,
                }}
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

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

const services = [
  {
    id: 1,
    image: Design,
    title: "Architectural",
    subtitle: "Design",
    service: "Architectural Design",
    description:
      "Meet our visionary architects, who tirelessly work to bring yourvision to life. With expertise, attention to detail, and dedication to innovation, each member of our team brings a unique perspective to every project. From concept to completion, we collaborate closely with you to ensure that your space is a true reflection of your style and personality.",
  },
  {
    id: 2,
    image: Interior,
    title: "Architectural",
    subtitle: "Interiors",
    service: "Architectural Interiors",
    description:
      "Meet our creative interior designers, who bring warmth, style, and functionality to every space. With an eye for detail and a passion for design, they transform interiors into inviting and inspiring environments. Whether it's a residential project or a commercial space, we'll create interiors that enhance your lifestyle and leave a lasting impression.",
  },
  {
    id: 3,
    image: Landscape,
    title: "Landscape",
    subtitle: "Design",
    service: "Landscape Design",
    description:
      "Enrich your outdoor spaces with our expert landscape design services. Our landscape architects blend artistry with environmental consciousness to create outdoor environments that seamlessly integrate with their surroundings. Whether it's a serene garden retreat or a dynamic outdoor entertainment area, we'll design landscapes that captivate the senses and elevate your lifestyle.",
  },
  {
    id: 4,
    image: Project,
    title: "Project|Site",
    subtitle: "Management",
    service: "Project|Site Management",
    description:
      "Let us handle the complexities of project management, ensuring smooth coordination and timely execution. Led by a seasoned architect, our team ensures smooth coordination and timely execution. With their expertise at the helm, your project is in capable hands from start to finish.",
  },
  {
    id: 5,
    image: Construction,
    title: "Construction",
    subtitle: "",
    service: "Construction",
    description:
      "Experience craftsmanship at its finest with our skilled construction team. From groundbreaking to finishing touches, we bring designs to life with meticulous attention to detail and a commitment to excellence. With a focus on quality and durability, we ensure that your project is not only visually stunning but also built to withstand the test of time.",
  },
];

const ServicesPage = ({ track }) => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: track,
    offset: ["start center", "end center"],
  });

  const trackerStart = 0.24;
  const trackerEnd = 0.28;

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
    [trackerStart, trackerEnd],
    [100, 0],
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
  const imageScale = useTransform(scrollYProgress, [0.2, 0.5], [0.3, 1], {
    ease: easeInOut,
  });
  const imageScroll = useTransform(
    scrollYProgress,
    [0, 0.35, 0.51],
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
      <div className="">
        <motion.div className="grid grid-cols-12 grid-rows-10">
          <motion.div className="col-start-1 col-end-13 row-start-1 row-end-11 ">
            <motion.div
              className="h-[100vh] w-full bg-cover max-md:hidden"
              style={{
                backgroundImage: `url(${Interior})`,
                y: imageScroll,
              }}
            />
            <motion.div
              className="h-[100vh] w-full bg-cover md:hidden"
              style={{
                backgroundImage: `url(${Interior})`,
                y: 0,
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
                <span className="text-title-color">Architectural</span>
              </motion.div>
              <motion.div
                className="text-title z-10 col-start-4 col-end-7 row-start-2 row-end-4 flex  items-center"
                style={{ y: yTitle, opacity: yOpacity }}
              >
                <span className="text-title-color">Interiors</span>
              </motion.div>
              {/* SERVICE SUBTITLE */}
              <motion.div
                className="text-subtitle-description-color text-service-description  z-10 col-start-1 col-end-4 row-start-4 row-end-5 flex  justify-center font-Fahkwang"
                style={{ y: yDescription, opacity: yOpacity }}
              >
                <span>Architectural Interiors</span>
              </motion.div>
              {/* SERVICE DESCRIPTION */}
              <motion.div
                className="text-subtitle-description-color text-service-description z-10 col-start-4 col-end-7 row-start-4 row-end-7  font-Fahkwang"
                style={{ y: yDescription, opacity: yOpacity }}
              >
                <span>
                  Meet our creative interior designers, who bring warmth, style,
                  and functionality to every space. With an eye for detail and a
                  passion for design, they transform interiors into inviting and
                  inspiring environments. Whether it's a residential project or
                  a commercial space, we'll create interiors that enhance your
                  lifestyle and leave a lasting impression.
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

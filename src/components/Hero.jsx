import Image from "../components/constants/Images";
import { motion } from "framer-motion";
import Variants from "../components/constants/Variants";
import ScrollTo from "./constants/ScrollTo";

const { heroTitle, heroSubtitle, heroLogo } = Variants;
const { toService } = ScrollTo;

const primaryVariant = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.15,
    },
  },
};

const sideBorderLine = {
  initial: { y: -700, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 3,
    },
  },
};

const rightBorderLine = {
  initial: { y: 700, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 2.5,
    },
  },
};
const lowerBorderLine = {
  initial: { x: 200, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 2.8,
    },
  },
};

const titleTextVariant = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "linear",
      duration: 0.2,
    },
  },
};
const textVariant = {
  initial: { x: -700 },
  animate: {
    x: 0,
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 2.5,
    },
  },
};

const PageTemplate = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-10 max-md:h-[100dvh] max-md:w-screen max-md:grid-cols-6 max-md:grid-rows-5 max-md:gap-0 md:min-h-screen">
      {/* TABLET */}
      {/* BORDER LINES */}
      <div className="z-20 col-start-1 col-end-1 row-start-1 row-end-11 border-r-4 border-solid border-goldLines max-md:hidden"></div>
      {/* GRADIENT BACKGROUND */}
      <div className="z-10 col-start-1 col-end-13 row-span-10 row-start-1 max-md:hidden">
        <div className="relative flex h-full w-full flex-col">
          <div className="relative h-full w-full flex-1 bg-gradient-to-tr from-primaryBackground/45 to-backgroundGradient/45 "></div>
        </div>
      </div>
      {/* IMAGE BACKGROUND */}
      <div className="col-span-12 col-start-1 row-span-10 row-start-1">
        <div
          className="relative h-full w-full"
          style={{
            backgroundImage: `url(${Image.Architect})`,
            backgroundSize: "cover",
            backgroundPosition: "",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      {/* LOGO */}
      <motion.div
        className="z-10 col-span-3 col-start-3 row-start-4 row-end-8 grid h-full w-full overflow-hidden  max-md:hidden"
        variants={primaryVariant}
        animate="animate"
        initial="initial"
      >
        <div className=" h-full w-full">
          <div
            className=" h-full w-full "
            style={{
              backgroundImage: `url(${Image.Logo})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              scale: "150%",
            }}
          ></div>
        </div>
      </motion.div>
      {/* PAGE TITLE */}
      <motion.div
        className="w-ful z-10 col-span-6 col-start-6 row-start-4 row-end-8 h-full overflow-hidden max-md:hidden"
        variants={primaryVariant}
        animate="animate"
        initial="initial"
      >
        <div className="relative ml-10 grid h-full w-full grid-cols-6 grid-rows-5">
          <motion.div
            className="text-title relative col-span-6 col-start-1 row-span-2 row-start-1 flex h-full w-full items-end tracking-wide text-white"
            variants={textVariant}
          >
            Architectural
          </motion.div>
          <motion.div
            className="text-title relative col-span-6 col-start-1 row-span-2 row-start-3 flex h-full w-full items-start tracking-wide text-white "
            variants={textVariant}
          >
            Services
          </motion.div>
          <motion.div
            className="relative col-span-6 col-start-1 row-start-5 flex items-center  justify-center text-base"
            variants={textVariant}
          >
            <div className="relative flex h-1/2 w-full flex-col justify-center text-lg ">
              <motion.button
                className="relative flex h-full w-max items-center rounded-full bg-white px-5 tracking-wider hover:cursor-pointer hover:text-goldLines 
                "
                onClick={() => toService()}
                whileHover={{
                  scale: 1.01,
                  y: -0.5,
                }}
              >
                EXPLORE OUR SERVICES
              </motion.button>
            </div>
          </motion.div>
        </div>
        {/* </div> */}
      </motion.div>

      {/* MOBILE */}
      <motion.div
        className="relative z-30 border-r-4 border-solid border-goldLines max-md:col-start-1 max-md:col-end-2 max-md:row-span-6 max-md:row-start-1 max-md:w-1/2 md:hidden"
        variants={sideBorderLine}
        animate="animate"
        initial="initial"
      ></motion.div>
      {/* GRADIENT BACKGROUND */}
      <div className="z-10 col-span-6 col-start-1 row-span-5 row-start-1 h-full w-full md:hidden">
        <div className="relative h-full w-full">
          <div className="relative h-screen w-full bg-gradient-to-tr from-primaryBackground/45 to-backgroundGradient/45"></div>
        </div>
      </div>
      {/* BACKGROUND IMAGE */}
      <div className="max-md:col-span-6 max-md:col-start-1 max-md:row-span-5 max-md:row-start-1 md:hidden">
        <div
          className="relative h-full w-full"
          style={{
            backgroundImage: `url(${Image.Architect})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      {/* LOGO */}
      <div className="z-10 h-full w-full overflow-hidden max-md:col-span-6 max-md:col-start-1 max-md:row-span-5 max-md:row-start-1 md:hidden">
        <motion.div
          className=" relative h-full w-full max-md:grid max-md:grid-cols-6 max-md:grid-rows-3"
          variants={primaryVariant}
          animate="animate"
          initial="initial"
        >
          <motion.div
            className="relative col-span-6 col-start-1 row-span-2 row-start-1 h-[100%] w-full overflow-hidden"
            variants={heroLogo}
            style={{
              backgroundImage: `url(${Image.Logo})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              scale: "80%",
            }}
          ></motion.div>
          {/* SITE TITLE */}
          <motion.div className="col-start-2 col-end-6 row-span-2 row-start-2 flex h-1/2 w-full flex-col items-center justify-end overflow-hidden ">
            <motion.span
              className="text-title w-full  tracking-wider max-md:text-center max-md:tracking-normal"
              variants={heroTitle}
            >
              Architectural
            </motion.span>
            <motion.span
              className="text-title w-full tracking-wider max-md:text-center  max-md:tracking-normal"
              variants={heroSubtitle}
            >
              Services
            </motion.span>
          </motion.div>
          <motion.div
            className=" relative col-span-1 col-start-6 row-span-2 row-start-2 flex h-full w-full justify-center "
            variants={rightBorderLine}
            animate="animate"
            initial="initial"
          >
            <div className="relative h-full w-[10%] bg-goldLines"></div>
          </motion.div>
          <motion.div
            className=" relative col-span-4 col-start-3 row-start-3 flex h-full w-full items-end "
            variants={lowerBorderLine}
            animate="animate"
            initial="initial"
          >
            <div className="relative mb-10 h-[3%] w-full bg-goldLines"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PageTemplate;

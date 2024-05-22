import { useState, useRef, useEffect } from "react";
import Permit from "../assets/buildingPermits.jpg";
import Stainless from "../assets/stainless.jpg";
import Aluminum from "../assets/aluminum.jpg";
import Furniture from "../assets/furniture.jpg";
import Window from "../assets/window.jpg";
import { motion, useInView, useScroll } from "framer-motion";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";

const images = [
  { id: 1, image: Permit, title: "Building Permit", subTitle: "Documents" },
  { id: 2, image: Stainless, title: "Stainless", subTitle: "Works" },
  { id: 3, image: Aluminum, title: "Aluminum", subTitle: "Works" },
  { id: 4, image: Furniture, title: "Furniture" },
  { id: 5, image: Window, title: "Window Blinds" },
];

const primaryVariant = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      delayChildren: 0.4,
      staggerChildren: 0.1,
      ease: "easeInOut",
    },
  },
};
const secondaryVariant = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
      ease: "circOut",
      type: "tween",
    },
  },
};

const shapeVariant = {
  initial: {
    scaleX: 1,
  },
  animate: {
    scaleX: 0,
  },
};

const titleVariant = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "circOut",
      type: "tween",
    },
  },
};

const Carousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const track = useRef(null);

  const isInView = useInView(track);
  const next = () => {
    if (imgIndex >= 0 && imgIndex <= 3) {
      setImgIndex((prev) => prev + 1);
    } else return;
  };

  const prev = () => {
    if (imgIndex <= 4 && imgIndex >= 1) setImgIndex((prev) => prev - 1);
  };

  const x = `${imgIndex * -100}%`;

  const TWEEN_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 350,
    damping: 50,
  };

  return (
    <div
      className=" sticky top-0 flex h-screen w-full overflow-hidden"
      ref={track}
    >
      <motion.button
        onClick={next}
        disabled={imgIndex == 4 ? true : false}
        className={`absolute bottom-1/2 left-auto right-0 top-auto z-10 mr-10 h-20 min-w-16 font-bold text-white ${imgIndex == 4 ? "opacity-45" : "opacity-1 "}`}
        style={{
          backgroundImage: `url(${rightArrow})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        whileTap={{ scale: 0.8 }}
      ></motion.button>
      <motion.button
        onClick={prev}
        disabled={imgIndex == 0 ? true : false}
        className={`absolute bottom-1/2 left-0 right-auto top-auto z-10 ml-10 h-20 min-w-16 font-bold text-white ${imgIndex == 0 ? "opacity-45" : "opacity-1"}`}
        style={{
          backgroundImage: `url(${leftArrow})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        whileTap={{ scale: 0.8 }}
      ></motion.button>
      {images.map((image, index) => (
        <>
          {isInView ? (
            <motion.div
              key={index}
              ref={track}
              className="grid aspect-video w-screen shrink-0 grid-cols-12 grid-rows-10 bg-primaryBackground"
              transition={TWEEN_OPTIONS}
              animate={{ translateX: x }}
            >
              <motion.div
                className="col-start-4 col-end-12 row-start-3 row-end-10 shrink-0"
                style={{
                  backgroundImage: `url(${image.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* IMAGES */}
                <motion.div
                  className="grid h-full w-full grid-cols-8 grid-rows-2"
                  variants={primaryVariant}
                  animate={imgIndex + 1 == image.id ? "animate" : ""}
                  initial="initial"
                >
                  {/* SHAPE VARIANTS */}
                  <motion.div
                    className="col-start-1 col-end-3 row-start-1 row-end-3 bg-primaryBackground"
                    variants={shapeVariant}
                    style={{ originX: 1 }}
                  ></motion.div>
                  <motion.div
                    className="col-start-3 col-end-5 row-start-1 row-end-3  bg-primaryBackground"
                    variants={shapeVariant}
                    style={{ originX: 1 }}
                  ></motion.div>
                  <motion.div
                    className="col-start-5 col-end-7 row-start-1 row-end-3 bg-primaryBackground"
                    variants={shapeVariant}
                    style={{ originX: 1 }}
                  ></motion.div>

                  <motion.div
                    className="col-start-7 col-end-9 row-start-1 row-end-3  bg-primaryBackground"
                    variants={shapeVariant}
                    style={{ originX: 1 }}
                  ></motion.div>
                </motion.div>
              </motion.div>

              {/* GRAY RECTANGLE */}
              <motion.div
                className="relative col-start-2 col-end-7 row-start-5 row-end-9"
                variants={secondaryVariant}
                animate={imgIndex + 1 == image.id ? "animate" : ""}
                initial="initial"
              >
                <div className="grid h-full grid-cols-7 grid-rows-6 border-2 border-solid border-goldLines bg-primaryBackground bg-opacity-45">
                  <div className="absolute flex h-full w-full flex-col justify-center">
                    <motion.div
                      className="text-title relative z-10  ml-10 flex items-center"
                      variants={titleVariant}
                    >
                      <span className="text-title-color">{image.title}</span>
                    </motion.div>
                    <motion.div
                      className="text-title relative z-10  ml-10 flex items-center"
                      variants={titleVariant}
                    >
                      <span className="text-title-color">{image.subTitle}</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              {/* <div className="z-10 col-start-1 col-end-2 row-start-1 row-end-11 border-r-4 border-goldLines"></div> */}
            </motion.div>
          ) : (
            <></>
          )}
        </>
      ))}
    </div>
  );
};

export default Carousel;

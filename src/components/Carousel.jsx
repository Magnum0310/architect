import { useState, useRef } from "react";
import { motion, useInView, useMotionValue } from "framer-motion";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import PageTracker from "./PageTracker";
import Image from "../components/constants/Images";

const images = [
  {
    id: 1,
    image: Image.Permit,
    title: "Building Permit",
    subTitle: "Documents",
    full: "Building Permit Documents",
  },
  {
    id: 2,
    image: Image.Stainless,
    title: "Stainless",
    subTitle: "Works",
    full: "Stainless Works",
  },
  {
    id: 3,
    image: Image.Aluminum,
    title: "Aluminum",
    subTitle: "Works",
    full: "Aluminum Works",
  },
  { id: 4, image: Image.Furniture, title: "Furnitures", full: "Furnitures" },
  { id: 5, image: Image.Window, title: "Window Blinds", full: "WIndow Blinds" },
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

  // const isInView = useInView(track, { once: true, margin: "-100px 0px" });
  const isInView = useInView(track);

  // NEXT BUTTON
  const next = () => {
    if (imgIndex >= 0 && imgIndex <= 3) {
      setImgIndex((prev) => prev + 1);
    } else return;
  };
  // PRE BUTTON
  const prev = () => {
    if (imgIndex <= 4 && imgIndex >= 1) setImgIndex((prev) => prev - 1);
  };
  // X VALUE
  const x = `${imgIndex * -100}%`;
  // TWEEN OPTION
  const TWEEN_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 350,
    damping: 50,
  };

  // SWIPE CONFIGS
  const DRAG_BUFFER = 30;
  const dragX = useMotionValue(0);
  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div
      className="sticky top-0 flex h-screen w-full overflow-hidden "
      ref={track}
    >
      {/* TABLET */}
      <div className="relative flex overflow-hidden max-md:hidden" ref={track}>
        {/* PAGE NUMBER */}
        {isInView ? (
          <motion.div
            className={`absolute top-14 z-10 flex w-full items-center justify-center`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
          >
            {/* BUTTON LEFT */}
            <motion.button
              onClick={prev}
              disabled={imgIndex == 0 ? true : false}
              className={` h-16 min-w-16 font-bold text-white max-xl:h-10 ${imgIndex == 0 ? "opacity-45" : "opacity-1"}`}
              style={{
                backgroundImage: `url("${leftArrow}")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              whileTap={{ scale: 0.8 }}
            ></motion.button>
            <PageTracker page={imgIndex + 1} />
            {/* BUTTON RIGHT */}
            <motion.button
              onClick={next}
              disabled={imgIndex == 4 ? true : false}
              className={` h-16 min-w-16  font-bold text-white max-xl:h-10 ${imgIndex == 4 ? "opacity-45" : "opacity-1 "}`}
              style={{
                backgroundImage: `url("${rightArrow}")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              whileTap={{ scale: 0.8 }}
            ></motion.button>
          </motion.div>
        ) : (
          <></>
        )}

        {/* CAROUSEL */}
        {images.map((image, index) => (
          <div key={index}>
            {/* {isInView ? ( */}
            <motion.div
              className="relative grid h-full w-screen shrink-0 grid-cols-12 grid-rows-10  bg-primaryBackground"
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              style={{
                x: dragX,
              }}
              transition={TWEEN_OPTIONS}
              animate={{ translateX: x }}
              onDragEnd={onDragEnd}
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
                <div className="grid h-full grid-cols-7 grid-rows-6 border-2 border-l-2 border-solid border-goldLines bg-primaryBackground bg-opacity-45">
                  <div className="absolute flex h-full w-full flex-col justify-center">
                    <motion.div
                      className="text-carousel-title relative z-10  ml-10 flex items-center"
                      variants={titleVariant}
                    >
                      <span className="text-title-color">{image.title}</span>
                    </motion.div>
                    <motion.div
                      className="text-carousel-title relative z-10  ml-10 flex items-center"
                      variants={titleVariant}
                    >
                      <span className="text-title-color">{image.subTitle}</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              {/* <div className="z-10 col-start-1 col-end-2 row-start-1 row-end-11 border-r-4 border-goldLines"></div> */}
            </motion.div>
            {/* ) : (
              <></>
            )} */}
          </div>
        ))}
      </div>

      {/* MOBILE */}
      <div className="flex overflow-hidden md:hidden">
        {/* PAGE NUMBER */}
        {isInView ? (
          <motion.div
            className={`absolute top-14 z-10 flex w-full items-center justify-center`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
          >
            {/* BUTTON LEFT */}
            <motion.button
              onClick={prev}
              disabled={imgIndex == 0 ? true : false}
              className={` h-16 min-w-16 font-bold text-white max-xl:h-10 ${imgIndex == 0 ? "opacity-45" : "opacity-1"}`}
              style={{
                backgroundImage: `url("${leftArrow}")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              whileTap={{ scale: 0.8 }}
            ></motion.button>
            <PageTracker page={imgIndex + 1} />
            {/* BUTTON RIGHT */}
            <motion.button
              onClick={next}
              disabled={imgIndex == 4 ? true : false}
              className={` h-16 min-w-16  font-bold text-white max-xl:h-10 ${imgIndex == 4 ? "opacity-45" : "opacity-1 "}`}
              style={{
                backgroundImage: `url("${rightArrow}")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              whileTap={{ scale: 0.8 }}
            ></motion.button>
          </motion.div>
        ) : (
          <></>
        )}

        {/* CAROUSEL */}
        {images.map((image, index) => (
          <div key={index} className="h-screen ">
            <motion.div
              ref={track}
              className="grid h-full w-screen shrink-0 cursor-grab active:cursor-grabbing max-md:grid-cols-6 max-md:grid-rows-4"
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              style={{
                x: dragX,
              }}
              onDragEnd={onDragEnd}
              transition={TWEEN_OPTIONS}
              animate={{ translateX: x }}
            >
              <motion.div
                className="col-span-6 col-start-1 row-span-4 row-start-1 shrink-0"
                style={{
                  backgroundImage: `url(${image.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* IMAGES */}
                <motion.div
                  className="grid h-full w-full grid-cols-6 grid-rows-4"
                  variants={primaryVariant}
                  animate={imgIndex + 1 == image.id ? "animate" : ""}
                  initial="initial"
                >
                  {/* SHAPE VARIANTS */}
                  <motion.div
                    className="col-span-2 col-start-1 row-span-4 row-start-1  bg-primaryBackground"
                    variants={shapeVariant}
                    style={{ originX: 1 }}
                  ></motion.div>
                  <motion.div
                    className="col-span-2 col-start-3 row-span-4 row-start-1   bg-primaryBackground"
                    variants={shapeVariant}
                    style={{ originX: 1 }}
                  ></motion.div>
                  <motion.div
                    className="row-start- col-span-2 col-start-5 row-span-4  bg-primaryBackground"
                    variants={shapeVariant}
                    style={{ originX: 1 }}
                  ></motion.div>
                </motion.div>
              </motion.div>
              {/* GRAY RECTANGLE */}
              <motion.div
                className="col-span-6 col-start-1 row-span-2 row-start-2 flex items-center "
                variants={secondaryVariant}
                animate={imgIndex + 1 == image.id ? "animate" : ""}
                initial="initial"
              >
                <div className="grid h-3/5 w-full grid-cols-6 grid-rows-2  bg-primaryBackground bg-opacity-45  ">
                  <div className="col-span-6 col-start-1 row-span-2 row-start-1 flex h-full w-full flex-col items-center justify-center px-2 ">
                    <motion.div
                      className="text-title relative z-10 flex items-center text-center"
                      variants={titleVariant}
                    >
                      <span className="text-title-color">{image.title}</span>
                    </motion.div>
                    <motion.div
                      className="text-title relative z-10 flex items-center"
                      variants={titleVariant}
                    >
                      <span className="text-title-color">{image.subTitle}</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
        {/* </div> */}
      </div>

      {/* BORDER LINE */}
      <div className="absolute grid h-full w-1/4 grid-cols-3 grid-rows-10 ">
        <div className="col-start-1 col-end-2 row-start-1 row-end-11 border-r-4 border-goldLines"></div>
      </div>
    </div>
  );
};

export default Carousel;

import { useState } from "react";
import Permit from "../assets/buildingPermits.jpg";
import Stainless from "../assets/stainless.jpg";
import Aluminum from "../assets/aluminum.jpg";
import Furniture from "../assets/furniture.jpg";
import Window from "../assets/window.jpg";
import { motion } from "framer-motion";

const images = [
  { image: Permit, title: "Building Permit", subTitle: "Documents" },
  { image: Stainless, title: "Stainless", subTitle: "Works" },
  { image: Aluminum, title: "Aluminum", subTitle: "Works" },
  { image: Furniture, title: "Furniture" },
  { image: Window, title: "Window", subTitle: "Blinds" },
];

const Carousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

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

  console.log(imgIndex);

  return (
    <div className="relative flex h-screen w-full overflow-hidden">
      <button
        onClick={next}
        className="absolute bottom-1/2 left-auto right-0 top-auto z-10 h-20 w-32 border-4 border-solid border-violet-500 font-bold text-white"
      >
        NEXT
      </button>
      <button
        onClick={prev}
        className="absolute bottom-1/2 left-0 right-auto top-auto z-10 h-20 w-32 border-4 border-solid border-violet-500 font-bold text-white"
      >
        PREV
      </button>
      {images.map((image, index) => (
        <motion.div
          className="grid aspect-video w-screen shrink-0 grid-cols-12 grid-rows-10 bg-primaryBackground "
          animate={{ translateX: x }}
          transition={TWEEN_OPTIONS}
        >
          <motion.div
            key={index}
            className="col-start-4 col-end-12 row-start-3 row-end-10  shrink-0"
            style={{
              backgroundImage: `url(${image.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></motion.div>
          {/* GRAY RECTANGLE */}
          <motion.div className="relative col-start-2 col-end-7 row-start-5 row-end-9  ">
            <div className="grid h-full grid-cols-7 grid-rows-6 border-2 border-solid border-goldLines bg-primaryBackground bg-opacity-45">
              <div className="absolute flex h-full w-full flex-col justify-center">
                <motion.div className="text-title relative z-10  ml-10 flex items-center">
                  <span className="text-title-color">{image.title}</span>
                </motion.div>
                <motion.div className="text-title relative z-10  ml-10 flex items-center">
                  <span className="text-title-color">{image.subTitle}</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
          {/* <motion.div className="relative col-start-7 col-end-12 row-start-3 row-end-10 m-10 ">
            <div className="grid h-full grid-cols-7 grid-rows-6 ">
              <motion.div className="text-title relative z-10 col-start-1 col-end-8 row-start-2 row-end-4 ml-10 flex items-center">
                <span className="text-title-color">{image.title}</span>
              </motion.div>
              <motion.div className="text-title relative z-10 col-start-1 col-end-4 row-start-4 row-end-6 ml-10 flex items-center">
                <span className="text-title-color">{image.subTitle}</span>
              </motion.div>
              <div className="col-start-1 col-end-9 row-start-1 row-end-7 grid h-full bg-primaryBackground opacity-45"></div>
            </div>
          </motion.div> */}
        </motion.div>
      ))}
    </div>
  );
};

export default Carousel;

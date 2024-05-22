import React from "react";
import Contact from "../assets/contact.jpg";
import Logo from "../assets/DOC_Logo.svg";
import { motion } from "framer-motion";

const primaryVariant = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      delayChildren: 0.8,
      staggerChildren: 0.1,
      ease: "easeInOut",
    },
  },
};
const secondaryVariant = {
  initial: { opacity: 0, y: 30 },
  animate: {
    scaleY: 1,
    opacity: 1,
    y: 0,
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

const titleDelay = 0.7;
const detailDelay = 1;
const imageDelay = 0.7;
const imageStagger = 0.1;

const textVariant = {
  initial: { opacity: 0, y: 5 },
  animate: { opacity: 1, y: 0 },
};
const PageTemplate = () => {
  return (
    <>
      <div className="relative grid h-full grid-cols-12 grid-rows-9">
        <div className="text-page-title-color col-start-1 col-end-2 row-start-1 row-end-2 flex items-end justify-center border-b-4 border-r-4 border-solid border-goldLines pb-2 text-2xl">
          <div className="relative flex h-full w-full flex-col items-center justify-end ">
            <div>
              <p>CONTACT</p>
            </div>
          </div>
        </div>
        <div className="col-start-2 col-end-13 grid  border-b-4 border-solid border-goldLines "></div>
        <div className="z-20 col-start-1 col-end-1 row-start-2 row-end-10 border-r-4 border-solid border-goldLines"></div>
        {/* CONTACT INFO BOX */}
        <motion.div
          className="col-start-3 col-end-9 row-start-3 row-end-10 grid "
          variants={secondaryVariant}
          animate="animate"
          initial="initial"
        >
          <motion.div className="flex flex-col gap-8">
            <motion.div variants={textVariant}>
              <div className="text-title text-subtitle-color">CONTACT US</div>
              <motion.div
                variants={textVariant}
                transition={{ delay: detailDelay }}
                className="text-subtitle-description text-subtitle-color"
              >
                Ready to bring your architectural vision to life? Reach out to
                us today to schedule a consultation with our team of experts.
              </motion.div>
            </motion.div>
            <div className="text-service-description text-subtitle-color">
              <div className="flex flex-col gap-2">
                <motion.div
                  className="text-contact-opacity"
                  variants={textVariant}
                  transition={{ delay: titleDelay }}
                >
                  ARCHITECT
                </motion.div>
                <motion.div
                  variants={textVariant}
                  transition={{ delay: detailDelay }}
                >
                  Dave O. Candelario
                </motion.div>
              </div>
            </div>
            <div className="text-service-description text-subtitle-color">
              <div className="flex flex-col gap-2">
                <motion.div
                  className="text-contact-opacity"
                  variants={textVariant}
                  transition={{ delay: titleDelay }}
                >
                  CONTACTS
                </motion.div>
                <motion.div
                  variants={textVariant}
                  transition={{ delay: detailDelay }}
                >
                  09777538014
                </motion.div>
                <motion.div
                  variants={textVariant}
                  transition={{ delay: detailDelay }}
                >
                  09616397716
                </motion.div>
              </div>
            </div>
            <div className="text-service-description text-subtitle-color">
              <div className="flex flex-col gap-2">
                <motion.div
                  className="text-contact-opacity"
                  variants={textVariant}
                  transition={{ delay: titleDelay }}
                >
                  EMAIL
                </motion.div>
                <motion.div
                  variants={textVariant}
                  transition={{ delay: detailDelay }}
                >
                  dav08veolarte@gmail.com
                </motion.div>
              </div>
            </div>
            <div className="text-service-description text-subtitle-color">
              <div className="flex flex-col gap-2">
                <motion.div
                  className="text-contact-opacity"
                  variants={textVariant}
                  transition={{ delay: titleDelay }}
                >
                  LOCATION
                </motion.div>
                <motion.div
                  variants={textVariant}
                  transition={{ delay: detailDelay }}
                >
                  Brgy. Sampaloc Bolinao Pangasinan
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* CONTACT IMAGE */}
        <motion.div
          className="col-start-9 col-end-13 row-start-3 row-end-10 bg-violet-500 "
          style={{
            backgroundImage: `url(${Contact})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          variants={primaryVariant}
          animate="animate"
          initial="initial"
        >
          <div className="grid h-full w-full grid-cols-4 grid-rows-7 ">
            <motion.div
              className="col-start-1 col-end-2 row-start-1 row-end-8 bg-primaryBackground"
              variants={shapeVariant}
              style={{ originX: 1 }}
              // transition={{ delay: imageDelay }}
            ></motion.div>
            <motion.div
              className="col-start-2 col-end-3 row-start-1 row-end-8 bg-primaryBackground"
              variants={shapeVariant}
              style={{ originX: 1 }}
              // transition={{ delay: imageDelay }}
            ></motion.div>
            <motion.div
              className="col-start-3 col-end-4 row-start-1 row-end-8 bg-primaryBackground"
              variants={shapeVariant}
              style={{ originX: 1 }}
              // transition={{ delay: imageDelay }}
            ></motion.div>
            <motion.div
              className="col-start-4 col-end-5 row-start-1 row-end-8 bg-primaryBackground"
              variants={shapeVariant}
              style={{ originX: 1 }}
              // transition={{ delay: imageDelay }}
            ></motion.div>
          </div>
        </motion.div>
        {/* CONTACT FOOTER */}
        <div className="text-service-description relative top-1/2 col-start-1 col-end-13 row-start-9 row-end-10 flex h-1/2 w-full justify-center  bg-white bg-opacity-100">
          <div className="relative flex w-1/4 place-content-center items-center">
            <div
              className="relative flex h-full basis-[30%]"
              style={{
                backgroundImage: `url(${Logo})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex flex-1 text-black ">
              <span>ARCHITECTURAL SERVICES</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTemplate;

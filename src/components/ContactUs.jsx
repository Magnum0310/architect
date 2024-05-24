import { useRef } from "react";
import Contact from "../assets/contact.jpg";
import Logo from "../assets/DOC_Logo.svg";
import { motion, useInView } from "framer-motion";

const primaryVariant = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      delayChildren: 1.5,
      staggerChildren: 0.1,
      ease: "easeInOut",
    },
  },
};

const titleVariant = {
  initial: { y: 0, opacity: 1 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1,
    },
  },
};

const defaultVariant = {
  initial: { opacity: 1 },
  animate: {
    y: 1,
    transition: {
      duration: 0.2,
      delayChildren: 0.1,
      staggerChildren: 0.2,
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

const titleDelay = 0;
const detailDelay = 0.5;
const imageDelay = 1.5;
const imageStagger = 0.1;

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
  initial: { x: -500 },
  animate: {
    x: 0,
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 1,
    },
  },
};

const PageTemplate = () => {
  const divRef = useRef(null);
  const isInView = useInView(divRef, {
    // once: true,
    margin: "0px 100px -300px 0px",
  });
  return (
    <div ref={divRef}>
      <div className="relative grid h-screen grid-cols-12 grid-rows-9">
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
        {isInView ? (
          <>
            {" "}
            <motion.div className="col-start-3 col-end-9 row-start-3 row-end-10 grid overflow-hidden ">
              <motion.div
                className="flex flex-col gap-8 "
                variants={titleVariant}
                initial="initial"
                animate="animate"
              >
                <motion.div
                  className=""
                  variants={defaultVariant}
                  initial="initial"
                  animate="animate"
                >
                  <motion.div
                    className="text-title text-subtitle-color "
                    variants={titleTextVariant}
                  >
                    CONTACT US
                  </motion.div>
                  <motion.div
                    variants={titleTextVariant}
                    className="text-subtitle-description text-subtitle-color"
                  >
                    Ready to bring your architectural vision to life? Reach out
                    to us today to schedule a consultation with our team of
                    experts.
                  </motion.div>
                </motion.div>
                <div className="text-service-description text-subtitle-color">
                  <div className="flex flex-col gap-2">
                    <motion.div
                      className="text-contact-opacity"
                      variants={textVariant}
                    >
                      ARCHITECT
                    </motion.div>
                    <motion.div variants={textVariant}>
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
                ></motion.div>
                <motion.div
                  className="col-start-2 col-end-3 row-start-1 row-end-8 bg-primaryBackground"
                  variants={shapeVariant}
                  style={{ originX: 1 }}
                ></motion.div>
                <motion.div
                  className="col-start-3 col-end-4 row-start-1 row-end-8 bg-primaryBackground"
                  variants={shapeVariant}
                  style={{ originX: 1 }}
                ></motion.div>
                <motion.div
                  className="col-start-4 col-end-5 row-start-1 row-end-8 bg-primaryBackground"
                  variants={shapeVariant}
                  style={{ originX: 1 }}
                ></motion.div>
              </div>
            </motion.div>{" "}
          </>
        ) : (
          <></>
        )}
        {/* CONTACT FOOTER */}
        <div className="text-service-description relative top-1/2 col-start-1 col-end-13 row-start-9 row-end-10 flex h-1/2 w-full justify-center bg-white bg-opacity-100">
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
    </div>
  );
};

export default PageTemplate;

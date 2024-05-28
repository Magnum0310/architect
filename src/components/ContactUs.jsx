import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "../components/constants/Images";
import Facebook from "../assets/Facebook.svg";

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
  initial: { x: -600 },
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
    margin: "0px 100px -300px 0px",
  });
  return (
    <div
      className="relative grid h-screen grid-cols-12 grid-rows-9 max-lg:grid-cols-6 max-lg:grid-rows-4"
      ref={divRef}
    >
      {/* TABLET */}
      <div className=" relative col-span-12 col-start-1 row-span-9 row-start-1 max-lg:hidden">
        <div className="relative grid h-screen grid-cols-12 grid-rows-9 ">
          <div className="text-page-title-color col-start-1 col-end-2 row-start-1 row-end-2 flex items-end justify-center border-b-4 border-r-4 border-solid border-goldLines pb-2 text-2xl">
            <div className="text-page-section relative flex h-full w-full flex-col items-center justify-end">
              <div>
                <p>CONTACT</p>
              </div>
            </div>
          </div>
          <div className="col-start-2 col-end-13 grid border-b-4 border-solid border-goldLines "></div>
          <div className="z-20 col-start-1 col-end-1 row-start-2 row-end-10 border-r-4 border-solid border-goldLines"></div>
          {/* CONTACT INFO BOX */}
          {isInView ? (
            <>
              {/* CONTACT DETAILS */}
              <motion.div className="col-start-2 col-end-8 row-start-2 row-end-10 grid overflow-hidden  px-[2rem] py-[2rem]">
                <motion.div
                  className="flex flex-col gap-5 "
                  variants={titleVariant}
                  initial="initial"
                  animate="animate"
                >
                  <motion.div
                    className="flex flex-col gap-10 "
                    variants={defaultVariant}
                    initial="initial"
                    animate="animate"
                  >
                    <motion.div
                      className="service-title text-subtitle-color "
                      variants={titleTextVariant}
                    >
                      CONTACT US
                    </motion.div>
                    <motion.div
                      variants={titleTextVariant}
                      className="service-content text-subtitle-color"
                    >
                      Ready to bring your architectural vision to life? Reach
                      out to us today to schedule a consultation with our team
                      of experts.
                    </motion.div>
                  </motion.div>
                  <div className="flex h-full flex-col justify-center gap-5">
                    <div className="text-subtitle-color">
                      <div className="flex flex-col">
                        <motion.div
                          className="text-contact-opacity text-contact-title"
                          variants={textVariant}
                        >
                          ARCHITECT
                        </motion.div>
                        <motion.div
                          variants={textVariant}
                          className="text-contact-detail"
                        >
                          Dave O. Candelario
                        </motion.div>
                      </div>
                    </div>
                    <div className="text-service-description text-subtitle-color">
                      <div className="flex flex-col ">
                        <motion.div
                          className="text-contact-opacity text-contact-title"
                          variants={textVariant}
                          transition={{ delay: titleDelay }}
                        >
                          CONTACTS
                        </motion.div>
                        <motion.div
                          className="text-contact-detail"
                          variants={textVariant}
                          transition={{ delay: detailDelay }}
                        >
                          09777538014
                        </motion.div>
                        <motion.div
                          className="text-contact-detail"
                          variants={textVariant}
                          transition={{ delay: detailDelay }}
                        >
                          09616397716
                        </motion.div>
                      </div>
                    </div>
                    <div className="text-service-description text-subtitle-color">
                      <div className="flex flex-col">
                        <motion.div
                          className="text-contact-opacity text-contact-title"
                          variants={textVariant}
                          transition={{ delay: titleDelay }}
                        >
                          EMAIL
                        </motion.div>
                        <motion.div
                          className="text-contact-detail"
                          variants={textVariant}
                          transition={{ delay: detailDelay }}
                        >
                          dav08veolarte@gmail.com
                        </motion.div>
                      </div>
                    </div>
                    <div className="text-service-description text-subtitle-color">
                      <div className="flex flex-col ">
                        <motion.div
                          className="text-contact-opacity text-contact-title"
                          variants={textVariant}
                          transition={{ delay: titleDelay }}
                        >
                          LOCATION
                        </motion.div>
                        <motion.div
                          className="text-contact-detail"
                          variants={textVariant}
                          transition={{ delay: detailDelay }}
                        >
                          Brgy. Sampaloc Bolinao Pangasinan
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              {/* FACEBOOK */}
              <motion.div
                variants={titleVariant}
                initial="initial"
                animate="animate"
                className="relative z-40 col-span-2 col-start-6 row-span-2 row-start-7 flex h-full w-full place-items-center justify-center  py-16 3xl:py-10 "
              >
                <motion.div
                  variants={titleTextVariant}
                  className="relative h-full w-full"
                  style={{
                    backgroundImage: `url("${Facebook}")`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></motion.div>
              </motion.div>
              {/* BACKGROUND IMAGE */}
              <motion.div
                className="col-start-8 col-end-13 row-start-2 row-end-10 "
                style={{
                  backgroundImage: `url(${Image.Contact})`,
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
              </motion.div>
            </>
          ) : (
            <></>
          )}
          {/* CONTACT FOOTER */}
          <div className="text-service-description relative z-20 col-start-1 col-end-13 row-start-9 row-end-9 flex h-1/2 w-full translate-y-full justify-center bg-white bg-opacity-100">
            <div className="relative flex w-1/4 place-content-center items-center">
              <div
                className="relative flex h-full basis-[30%]"
                style={{
                  backgroundImage: `url(${Image.Logo})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      {/* MAIN GRID */}
      <div className="relative col-span-6 col-start-1 row-span-4 row-start-1 lg:hidden">
        <div className="relative grid h-screen grid-cols-6 grid-rows-4">
          {/* BORDER LINES */}
          <div className="relative z-30 border-r-4 border-solid border-goldLines max-lg:col-start-1 max-lg:col-end-2 max-lg:row-span-4 max-lg:row-start-1 max-lg:w-1/2"></div>
          <div className="relative z-20  bg-primaryBackground bg-opacity-45 max-lg:col-start-1 max-lg:col-end-2 max-lg:row-span-4 max-lg:row-start-1 max-lg:w-full"></div>
          <div className="text-page-title-color relative z-20 flex items-center justify-center border-b-4 border-goldLines bg-primaryBackground bg-opacity-45 max-lg:col-span-6 max-lg:col-start-1 max-lg:row-start-1 max-lg:h-1/4 max-lg:text-base">
            {/* CONTACT */}
          </div>
          {/* CONTACT INFO BOX */}
          {isInView ? (
            <>
              {/* CONTACT DETAILS */}
              <motion.div className="z-10 col-span-5 col-start-2 row-span-4 row-start-1 grid overflow-hidden bg-primaryBackground bg-opacity-45">
                <motion.div
                  className="grid grid-cols-6 grid-rows-4 items-center pr-4"
                  variants={titleVariant}
                  initial="initial"
                  animate="animate"
                >
                  {/* PAGE TITLE */}
                  <motion.div
                    className="col-span-5 col-start-1 row-span-2 row-start-1 flex h-3/4 flex-col justify-center gap-5 "
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
                      className="text-subtitle-description text-subtitle-color mr-5 max-lg:text-sm"
                    >
                      Ready to bring your architectural vision to life? Reach
                      out to us today to schedule a consultation with our team
                      of experts.
                    </motion.div>
                  </motion.div>
                  <div className="col-span-4 col-start-1 row-span-4 row-start-2 flex h-[80%] flex-col justify-center gap-5 ">
                    {/* ARCHITECT */}
                    <div className="text-subtitle-color">
                      <div className="flex flex-col gap-1">
                        <motion.div
                          className="text-contact-opacity text-contact-title"
                          variants={textVariant}
                        >
                          ARCHITECT
                        </motion.div>
                        <motion.div
                          className="text-contact-detail"
                          variants={textVariant}
                        >
                          {/* Dave O. Candelario */}
                          XXXX-XXXXX-XXXXX
                        </motion.div>
                      </div>
                    </div>
                    {/* CONTACTS */}
                    <div className=" text-subtitle-color">
                      <div className="flex flex-col gap-1">
                        <motion.div
                          className="text-contact-opacity text-contact-title"
                          variants={textVariant}
                          transition={{ delay: titleDelay }}
                        >
                          CONTACTS
                        </motion.div>
                        <motion.div
                          className="text-contact-detail"
                          variants={textVariant}
                          transition={{ delay: detailDelay }}
                        >
                          XXXX-XXXXX-XXXXX
                          {/* 09777538014 */}
                        </motion.div>
                        <motion.div
                          className="text-contact-detail"
                          variants={textVariant}
                          transition={{ delay: detailDelay }}
                        >
                          XXXX-XXXXX-XXXXX
                          {/* 09616397716 */}
                        </motion.div>
                      </div>
                    </div>
                    {/* EMAIL */}
                    <div className=" text-subtitle-color">
                      <div className="flex flex-col gap-1">
                        <motion.div
                          className="text-contact-opacity text-contact-title"
                          variants={textVariant}
                          transition={{ delay: titleDelay }}
                        >
                          EMAIL
                        </motion.div>
                        <motion.div
                          className="text-contact-detail"
                          variants={textVariant}
                          transition={{ delay: detailDelay }}
                        >
                          XXXX-XXXXX-XXXXX
                          {/* dav08veolarte@gmail.com */}
                        </motion.div>
                      </div>
                    </div>
                    {/* LOCATION */}
                    <div className="text-subtitle-color">
                      <div className="flex flex-col gap-1">
                        <motion.div
                          className="text-contact-opacity text-contact-title"
                          variants={textVariant}
                          transition={{ delay: titleDelay }}
                        >
                          LOCATION
                        </motion.div>
                        <motion.div
                          className="text-contact-detail"
                          variants={textVariant}
                          transition={{ delay: detailDelay }}
                        >
                          XXXX-XXXXX-XXXXX
                          {/* Brgy. Sampaloc Bolinao Pangasinan */}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              {/* FACEBOOK */}
              <motion.div
                variants={titleVariant}
                initial="initial"
                animate="animate"
                className="relative z-10 col-span-2 col-start-5 row-start-4 flex h-full w-full place-items-center justify-center py-14 "
              >
                <motion.div
                  className="relative h-full w-full "
                  variants={titleTextVariant}
                  style={{
                    backgroundImage: `url("${Facebook}")`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></motion.div>
              </motion.div>
              {/* BACKGROUND IMAGE */}
              <motion.div
                className="col-span-6 col-start-1 row-span-4 row-start-1 "
                style={{
                  backgroundImage: `url(${Image.Contact})`,
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
          <div className="text-service-description relative col-span-6 col-start-1 row-span-1 row-start-5 flex h-full w-full justify-center bg-white">
            <div className="relative flex h-full w-full ">
              <div
                className="relative h-8 w-full text-center"
                style={{
                  backgroundImage: `url(${Image.Logo})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* <div className="flex w-full bg-blue-500 text-sm text-black"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;

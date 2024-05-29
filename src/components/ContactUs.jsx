import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "../components/constants/Images";
import Facebook from "../assets/Facebook.svg";
import Contacts from "../components/constants/Contacts";
import Variants from "../components/constants/Variants";

const {
  contactPrimaryVariant,
  contactsDetailsVariant,
  contactDefaultVariant,
  shapeVariant,
  contactTitleTextVariant,
  contactTextVariant,
} = Variants;

const titleDelay = 0;
const detailDelay = 0.5;

const PageTemplate = () => {
  const divRef = useRef(null);
  const isInView = useInView(divRef, {
    // margin: "0px 100px -300px 0px",
    margin: "0px 0px 0px 0px",
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
            <div className="text-page-section relative flex h-full w-full flex-col items-center justify-end"></div>
          </div>
          <div className="col-start-2 col-end-13 grid border-b-4 border-solid border-goldLines "></div>
          <div className="z-20 col-start-1 col-end-1 row-start-2 row-end-10 border-r-4 border-solid border-goldLines"></div>
          {/* CONTACT INFO BOX */}
          {isInView ? (
            <>
              {/* CONTACT DETAILS */}
              <motion.div className="col-start-2 col-end-8 row-start-2 row-end-10 grid  px-[2rem] py-[2rem]">
                <motion.div
                  className="flex flex-col gap-5 "
                  variants={contactsDetailsVariant}
                  initial="initial"
                  animate="animate"
                >
                  <motion.div
                    className="flex flex-col gap-10 "
                    variants={contactDefaultVariant}
                    initial="initial"
                    animate="animate"
                  >
                    <motion.div
                      className="service-title text-subtitle-color "
                      variants={contactTitleTextVariant}
                    >
                      CONTACT US
                    </motion.div>
                    <motion.div
                      variants={contactTitleTextVariant}
                      className="service-content text-subtitle-color"
                    >
                      Ready to bring your architectural vision to life? Reach
                      out to us today to schedule a consultation with our team
                      of experts.
                    </motion.div>
                  </motion.div>
                  {/* CONTACT INFO */}
                  <div className="flex h-full flex-col justify-center gap-5 overflow-hidden ">
                    {Contacts.map((contact, id) => {
                      if (contact.id == 2) {
                        return (
                          <div className="text-subtitle-color" key={contact.id}>
                            <motion.div
                              className="text-contact-opacity text-contact-title"
                              variants={contactTextVariant}
                              transition={{ delay: titleDelay }}
                            >
                              {contact.title}
                            </motion.div>
                            <motion.div
                              className="text-contact-detail"
                              variants={contactTextVariant}
                              transition={{ delay: detailDelay }}
                            >
                              {contact.numberOne}
                            </motion.div>
                            <motion.div
                              className="text-contact-detail"
                              variants={contactTextVariant}
                              transition={{ delay: detailDelay }}
                            >
                              {contact.numberTwo}
                            </motion.div>
                          </div>
                        );
                      }
                      return (
                        <div className="text-subtitle-color" key={contact.id}>
                          <div className="flex flex-col">
                            <motion.div
                              className="text-contact-opacity text-contact-title"
                              variants={contactTextVariant}
                            >
                              {contact.title}
                            </motion.div>
                            <motion.div
                              variants={contactTextVariant}
                              className="text-contact-detail"
                            >
                              {contact.detail}
                            </motion.div>
                          </div>
                        </div>
                      );
                    })}

                    {/* SOCIAL MEDIA PAGE*/}
                    <div className="text-service-description text-subtitle-color">
                      <div className="flex flex-col">
                        <motion.div
                          className="text-contact-opacity text-contact-title"
                          variants={contactTextVariant}
                          transition={{ delay: titleDelay }}
                        >
                          FACEBOOK PAGE
                        </motion.div>
                        <a href="https://facebook.com">
                          <motion.div
                            className="h-social-media flex w-full"
                            variants={contactTextVariant}
                            transition={{ delay: detailDelay }}
                            style={{
                              backgroundImage: `url("${Facebook}")`,
                              backgroundSize: "contain",
                              backgroundPosition: "left",
                              backgroundRepeat: "no-repeat",
                            }}
                          ></motion.div>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              {/* BACKGROUND IMAGE */}
              <motion.div
                className="col-start-8 col-end-13 row-start-2 row-end-10 "
                style={{
                  backgroundImage: `url(${Image.Contact})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                variants={contactPrimaryVariant}
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
                  variants={contactsDetailsVariant}
                  initial="initial"
                  animate="animate"
                >
                  {/* PAGE TITLE */}
                  <motion.div
                    className="col-span-6 col-start-1 row-span-2 row-start-1 flex h-3/4 flex-col justify-center gap-5 "
                    variants={contactDefaultVariant}
                    initial="initial"
                    animate="animate"
                  >
                    <motion.div
                      className="text-title text-subtitle-color "
                      variants={contactTitleTextVariant}
                    >
                      CONTACT US
                    </motion.div>
                    <motion.div
                      variants={contactTitleTextVariant}
                      className="text-subtitle-description text-subtitle-color mr-5 max-lg:text-sm"
                    >
                      Ready to bring your architectural vision to life? Reach
                      out to us today to schedule a consultation with our team
                      of experts.
                    </motion.div>
                  </motion.div>
                  {/* CONTACT INFO */}
                  <div className="col-span-4 col-start-1 row-span-4 row-start-2 flex h-[80%] flex-col justify-end gap-5 ">
                    {Contacts.map((contact, id) => {
                      if (contact.id == 2) {
                        return (
                          <div className="flex flex-col" key={contact.id}>
                            <motion.div
                              className="text-contact-opacity text-contact-title"
                              variants={contactTextVariant}
                              transition={{ delay: titleDelay }}
                            >
                              {contact.title}
                            </motion.div>
                            <motion.div
                              className="text-contact-detail"
                              variants={contactTextVariant}
                              transition={{ delay: detailDelay }}
                            >
                              {contact.numberOne}
                            </motion.div>
                            <motion.div
                              className="text-contact-detail"
                              variants={contactTextVariant}
                              transition={{ delay: detailDelay }}
                            >
                              {contact.numberTwo}
                            </motion.div>
                          </div>
                        );
                      } else {
                        return (
                          <div className="text-subtitle-color" key={contact.id}>
                            <div className="flex flex-col gap-1">
                              <motion.div
                                className="text-contact-opacity text-contact-title"
                                variants={contactTextVariant}
                              >
                                {contact.title}
                              </motion.div>
                              <motion.div
                                variants={contactTextVariant}
                                className="text-contact-detail"
                              >
                                {contact.detail}
                              </motion.div>
                            </div>
                          </div>
                        );
                      }
                    })}
                    {/* SOCIAL MEDIA PAGE */}
                    <div className="text-subtitle-color relative ">
                      <div className="relative flex h-full flex-col  gap-1">
                        <motion.div
                          className="text-contact-opacity text-contact-title flex"
                          variants={contactTextVariant}
                          transition={{ delay: titleDelay }}
                        >
                          FACEBOOK PAGE
                        </motion.div>
                        <motion.div
                          className="h-social-media flex  w-full"
                          variants={contactTextVariant}
                          transition={{ delay: detailDelay }}
                          style={{
                            backgroundImage: `url("${Facebook}")`,
                            backgroundSize: "contain",
                            backgroundPosition: "left",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              {/* BACKGROUND IMAGE */}
              <motion.div
                className="col-span-6 col-start-1 row-span-4 row-start-1 "
                style={{
                  backgroundImage: `url(${Image.Contact})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                variants={contactPrimaryVariant}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;

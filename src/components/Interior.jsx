import { useScroll, motion, useTransform, easeInOut } from "framer-motion";
import Details from "../components/constants/details.json";
import Image from "../components/constants/Images";

const ServicesPage = ({ track }) => {
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: track,
    offset: ["start center", "end center"],
  });
  // Animation tracker
  const trackerStart = 0.24;
  const trackerEnd = 0.28;
  // Y axis animation
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
  // Scale Animation
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
      {/* TABLET */}
      <motion.div className="grid grid-cols-12 grid-rows-10 max-md:hidden">
        <motion.div className="col-start-1 col-end-13 row-start-1 row-end-11 ">
          <motion.div
            className="h-[100vh] w-full bg-cover"
            style={{
              backgroundImage: `url(${Image.Interior})`,
              y: imageScroll,
            }}
          />
        </motion.div>
        {/* WRAPPER */}
        <div className="col-start-4 col-end-11 row-start-3 row-end-10 max-lg:col-start-3 max-lg:col-end-12">
          <div className="relative grid h-full grid-cols-7 grid-rows-7 ">
            {/* GRAY RECTANGLE */}
            <motion.div
              className="col-start-1 col-end-9 row-start-2 row-end-10  bg-primaryBackground opacity-45"
              style={{ opacity: shapeOpacity }}
            ></motion.div>
            {/* SERVICE TITLE */}
            <motion.div
              className="service-title z-10 col-start-1 col-end-6 row-start-1 row-end-3 flex items-center justify-center"
              style={{ y: yTitle, opacity: yOpacity }}
            >
              <span className="text-title-color">{Details.interior.title}</span>
            </motion.div>
            <motion.div
              className="service-title z-10 col-start-4 col-end-7 row-start-2 row-end-4 flex  items-center"
              style={{ y: yTitle, opacity: yOpacity }}
            >
              <span className="text-title-color">
                {Details.interior.subTitle}
              </span>
            </motion.div>
            {/* SERVICE SUBTITLE */}
            <motion.div
              className="text-subtitle-description-color service-content z-10 col-start-1 col-end-4 row-start-4 row-end-5 flex justify-center font-Fahkwang max-xl:hidden"
              style={{ y: yDescription, opacity: yOpacity }}
            >
              <span>{Details.interior.descriptionTitle}</span>
            </motion.div>
            {/* SERVICE DESCRIPTION */}
            <motion.div
              className="text-subtitle-description-color service-content z-10 col-start-4 col-end-7 row-start-4 row-end-7 font-Fahkwang max-xl:col-start-2"
              style={{ y: yDescription, opacity: yOpacity }}
            >
              <span>{Details.interior.description}</span>
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

      {/* MOBILE */}
      <div className=" bg-primaryBackground max-md:h-full max-md:w-full md:hidden">
        {/* MAIN GRID */}
        <motion.div className="max-md:flex max-md:h-full max-md:w-full max-md:flex-col max-md:justify-center md:grid md:grid-cols-12 md:grid-rows-10 ">
          {/* IMAGE */}
          <motion.div className="relative h-1/2 w-full md:hidden">
            <motion.div
              className="h-full w-full bg-cover"
              style={{
                backgroundImage: `url(${Image.Interior})`,
                scale: 1,
                y: 0,
              }}
            />
          </motion.div>
          {/* WRAPPER */}
          <div className="absolute grid h-3/4 w-full grid-cols-6 grid-rows-6 md:hidden">
            {/* SERVICE TITLE */}
            <motion.div
              className=" service-title col-span-6 col-start-2 flex items-end  justify-start"
              style={{ y: 0 }}
            >
              <span className="text-title-color">{Details.interior.title}</span>
            </motion.div>
            <motion.div
              className="service-title col-span-6 col-start-2 flex items-start  justify-start "
              style={{ y: 0 }}
            >
              <span className="text-title-color">
                {Details.interior.subTitle}
              </span>
            </motion.div>
            <motion.div className=" col-span-6 col-start-1 row-span-3 row-start-3 bg-primaryBackground opacity-45"></motion.div>
            <motion.div
              className="text-subtitle-description-color service-content z-10 col-span-5 col-start-2 row-span-3 row-start-3 flex items-center pr-5 text-left font-Fahkwang"
              style={{ y: 0 }}
            >
              <span>{Details.interior.description}</span>
            </motion.div>
          </div>
          {/* BORDER LINE */}
          <div className="z-10 col-start-1 col-end-2 row-start-1 row-end-11 border-r-4 border-goldLines"></div>
          <div className="absolute grid h-full w-full grid-cols-6 grid-rows-4 md:hidden">
            <div className="relative border-r-4 border-solid border-goldLines max-md:col-start-1 max-md:col-end-2  max-md:row-span-4 max-md:row-start-1 max-md:w-1/2"></div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ServicesPage;

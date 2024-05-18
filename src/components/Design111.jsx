import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
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

const ServicesPage = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start start"],
  });
  return (
    <motion.div
      className="sticky top-0 grid h-screen grid-cols-12 grid-rows-10"
      ref={element}
      style={{ opacity: scrollYProgress }}
    >
      <div className="col-start-1 col-end-13 row-start-1 row-end-11">
        <div
          className="h-full w-full bg-cover"
          style={{
            backgroundImage: `url(${Design})`,
          }}
        />
      </div>
      {/* GRAY RECTANGLE */}
      <div className=" col-start-4 col-end-11 row-start-4 row-end-10 bg-primaryBackground opacity-45"></div>
      {/* SERVICE TITLE */}
      <div className=" text-title  z-10 col-start-4 col-end-9 row-start-3 row-end-5 flex items-center justify-center">
        <span className="text-title-color">Architectural</span>
      </div>
      <div className=" text-title  z-10 col-start-7 col-end-10 row-start-4 row-end-6 flex  items-center">
        <span className="text-title-color">Design</span>
      </div>
      {/* SERVICE SUBTITLE */}
      <div className=" text-subtitle-description-color text-service-description  z-10 col-start-4 col-end-7 row-start-6 row-end-7 flex  justify-center font-Fahkwang">
        <span>Architectural Design</span>
      </div>
      {/* SERVICE DESCRIPTION */}
      <div className=" text-subtitle-description-color text-service-description  z-10 col-start-7 col-end-10 row-start-6 row-end-9  font-Fahkwang">
        <span>
          "Meet our visionary architects, who tirelessly work to bring
          yourvision to life. With expertise, attention to detail, and
          dedication to innovation, each member of our team brings a unique
          perspective to every project. From concept to completion, we
          collaborate closely with you to ensure that your space is a true
          reflection of your style and personality."
        </span>
      </div>
      {/* HIGHTLIGHTS */}
      <div className=" relative left-1/2 right-1/2 col-start-10 col-end-11 row-start-6 row-end-10 w-[.5rem] bg-goldLines"></div>
      <div className=" relative bottom-1/2 top-1/2 col-start-8 col-end-11 row-start-9 row-end-10 h-[.5rem] bg-goldLines"></div>
      {/* BORDER LINE */}
      <div className=" col-start-1 col-end-2 row-start-1 row-end-11 border-r-4 border-goldLines"></div>
    </motion.div>
  );
};

export default ServicesPage;

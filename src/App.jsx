import { useEffect, useRef } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/AboutUs";
import Services from "./components/Services";
import Design from "./components/Design";
import Interior from "./components/Interior";
import Landscape from "./components/Landscape";
import Project from "./components/Project";
import Construction from "./components/Construction";
import OtherServices from "./components/Other Services";
import Carousel from "./components/Carousel";
import Permit from "./components/Permit";
import Contact from "./components/ContactUs";
// import TEST from "./components/Hero";
import PageTracker from "./components/PageTracker";

import "./App.css";
import Lenis from "lenis";
import { useScroll } from "framer-motion";

function App() {
  const track = useRef(null);
  const track1 = useRef(null);
  const track2 = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative bg-primaryBackground font-Coda">
      {/* NAV */}
      <div className="absolute z-20 flex w-full pt-5 max-md:hidden">
        <div className="h-full w-full ">
          <div className="grid h-full w-full grid-cols-6 text-white">
            <a
              className="col-start-4 col-end-5 flex items-end justify-start hover:text-goldLines"
              href="#about"
            >
              ABOUT US
            </a>
            <a
              className="col-start-5 col-end-6 flex items-end justify-start hover:text-goldLines"
              href="#service"
            >
              SERVICES
            </a>
            <a
              className="col-start-6 col-end-7 flex items-end justify-start hover:text-goldLines"
              href="#contact"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
      {/* HERO SECTION */}
      <div className="">
        <Hero />
      </div>
      {/* ABOUT SECTION */}
      <div id="about" className="relative">
        <About />
      </div>
      {/* SERVICES SECTION */}
      <div className="h-[80vh] max-md:h-[50vh]" id="service">
        <Services />
      </div>
      <div className="max-md:h-[550vh] md:min-h-[1300vh]" ref={track}>
        <div className="sticky top-0 max-md:h-screen md:min-h-[300vh]">
          <Design track={track} />
        </div>
        <div className="sticky top-0 max-md:h-screen md:min-h-[200vh]">
          <Interior track={track} />
        </div>
        <div className="sticky top-0 max-md:h-screen md:min-h-[200vh]">
          <Landscape track={track} />
        </div>
        <div className="sticky top-0 max-md:h-screen md:min-h-[200vh] ">
          <Project track={track} />
        </div>
        <div className="sticky top-0 max-md:h-screen md:min-h-[100vh] ">
          <Construction track={track} />
        </div>
      </div>
      {/* OTHER SERVICES SECTION */}
      <div className="h-[50vh]">
        <OtherServices />
      </div>
      <div className="min-h-[200vh] text-white max-md:relative">
        <Carousel />
      </div>
      {/* CONTACT SECTION */}
      <div className="h-screen text-white max-xs:relative" id="contact ">
        <Contact />
      </div>
    </div>
  );
}

export default App;

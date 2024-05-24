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
    <div className="relative overflow-hidden bg-primaryBackground font-Coda">
      {/* NAV */}
      {/* <div className="absolute grid min-h-screen w-full grid-cols-12 grid-rows-10 border-b-4 border-solid border-goldLines">
        <div className="absolute top-16 w-full border-b-4 border-solid border-goldLines  ">
          <div className="grid h-full w-full grid-cols-6 text-white">
            <a
              className="col-start-4 col-end-5 flex items-end justify-start"
              href="#about"
            >
              ABOUT US
            </a>
            <a
              className="col-start-5 col-end-6 flex items-end justify-start"
              href="#service"
            >
              SERVICES
            </a>
            <a
              className="col-start-6 col-end-7 flex items-end justify-start"
              href="#contact"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div> */}
      {/* HERO SECTION */}
      <div>
        <Hero />
      </div>
      {/* ABOUT SECTION */}
      <div id="about" className="relative">
        <About />
      </div>
      {/* SERVICES SECTION */}
      <div className="h-screen" id="service">
        <Services />
      </div>
      <div className="relative md:min-h-[1300vh]" ref={track}>
        <div className="max-xs:h-screen sticky top-0 md:min-h-[300vh]">
          <Design track={track} />
        </div>
        {/* <div className="max-xs:h-screen max-xs:bg-violet-500 sticky top-0 md:min-h-[200vh] ">
          <Interior track={track} />
        </div>
        <div className="max-xs:h-screen max-xs:bg-violet-500 sticky top-0 md:min-h-[200vh] ">
          <Landscape track={track} />
        </div>
        <div className="max-xs:h-screen max-xs:bg-violet-500 sticky top-0 md:min-h-[200vh] ">
          <Project track={track} />
        </div>
        <div className="max-xs:h-screen max-xs:bg-violet-500 sticky top-0 md:min-h-[100vh] ">
          <Construction track={track} />
        </div> */}
      </div>
      {/* OTHER SERVICES SECTION */}
      <div className="h-[70vh]">
        <OtherServices />
      </div>
      <div className="h-[200vh] text-white">
        <Carousel />
      </div>
      {/* CONTACT SECTION */}
      <div className="h-screen text-white" id="contact">
        <Contact />
      </div>
      {/* <div>
        <Hero />
      </div> */}
    </div>
  );
}

export default App;

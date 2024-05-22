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
    <div className="bg-primaryBackground font-Coda">
      <div className="absolute w-full ">
        <Nav />
      </div>
      <div className="relative flex h-screen w-full flex-col justify-end p-5">
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div className="h-screen">
        <Services />
      </div>
      <div className="min-h-[1300vh]" ref={track}>
        <div className="sticky top-0 min-h-[300vh]">
          <Design track={track} />
        </div>
        <div className="sticky top-0 min-h-[200vh] ">
          <Interior track={track} />
        </div>
        <div className="sticky top-0 min-h-[200vh] ">
          <Landscape track={track} />
        </div>
        <div className="sticky top-0 min-h-[200vh] ">
          <Project track={track} />
        </div>
        <div className="sticky top-0 min-h-[100vh]">
          <Construction track={track} />
        </div>
      </div>
      <div className="h-screen">
        <OtherServices />
      </div>
      <div className="h-[200vh] text-white">
        <Carousel />
      </div>
      <div className="h-screen text-white">
        <Contact />
      </div>
    </div>
  );
}

export default App;

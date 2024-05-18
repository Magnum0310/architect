import { useEffect, useRef } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/AboutUs";
import Services from "./components/Services";
import Design111 from "./components/Design111";
import Interior111 from "./components/Interior111";
import Trial from "./components/Trial";
import Design from "./components/Design";
import Interior from "./components/Interior";
import Landscape from "./components/Landscape";
import Project from "./components/Project";
import Construction from "./components/Construction";

import "./App.css";
import Lenis from "lenis";
import { useScroll } from "framer-motion";

function App() {
  const track = useRef(null);
  const track1 = useRef(null);
  const track2 = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: track,
  //   offset: ["start start", "end end"],
  // });
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
      <div className="h-[90%]">
        <Services />
      </div>
      {/* <div className="h-[200vh]">
        <Design />
      </div> */}
      <div className="min-h-[1300vh]" ref={track}>
        <div className="sticky top-0 min-h-[300vh]">
          <Design track={track} />
        </div>
        <div className="sticky top-0 min-h-[200vh] ">
          <Interior track={track} />
        </div>
        {/* <div className="relative mb-[32rem] bg-red-500">SPACER</div> */}
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
      <div className="h-[90%]">
        <Services />
      </div>
    </div>
  );
}

export default App;

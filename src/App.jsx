import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/AboutUs";
import Services from "./components/Services";
import Template from "./components/ServiceTemplate";
import "./App.css";

function App() {
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
      <div>
        <Template />
      </div>
    </div>
  );
}

export default App;

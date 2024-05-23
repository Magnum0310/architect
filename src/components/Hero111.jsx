import React from "react";
import Architect from "../assets/architect.jpg";
import Logo from "../assets/DOC_Logo.svg";

const Hero = () => {
  return (
    <>
      <div className="relative flex h-[85%] flex-col bg-white">
        <div className="flex-1 bg-white"></div>
        <div
          className="relative flex-1 bg-cover bg-[center_bottom_-10rem]"
          style={{
            backgroundImage: `url(${Architect})`,
            backgroundSize: "",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="absolute flex h-full w-full items-center justify-center">
          <div
            className="h-[30rem] w-[30rem] bg-contain bg-right"
            style={{
              backgroundImage: `url(${Logo})`,
              backgroundSize: "",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className=" text-title flex flex-col ">
            <span className="font-Coda tracking-wider">Architectural</span>
            <span className="font-Coda tracking-wider">Services</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

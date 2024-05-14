import React from "react";
import Logo from "../assets/DOC_Logo.svg";

const Nav = () => {
  return (
    <div className="h-[8rem]">
      <div className="relative top-1/2 h-[.3rem] w-full bg-goldLines" />
      <div className=" relative flex justify-between px-20 ">
        <img
          src={Logo}
          height="100px"
          width="100px"
          className="relative top-4 z-20 bg-white"
        />
        <ul className="flex w-1/2 items-center justify-around font-Coda text-white">
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

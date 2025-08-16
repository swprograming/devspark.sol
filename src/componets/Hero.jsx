import React from "react";
import me from "../assets/me.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full h-auto min-h-[80vh] flex flex-col md:flex-row items-center mx-auto justify-between px-4 sm:px-6 md:px-10 lg:px-8 xl:px-12 py-4 sm:py-6 md:py-8 lg:py-6 xl:py-8 gap-8 md:gap-6 lg:gap-4 xl:gap-6">
      {/* Left Side */}
      <div className="flex-1 flex flex-col max-w-md sm:max-w-lg md:max-w-md lg:max-w-sm xl:max-w-md pl-4 mb-8 md:mb-0">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-bold mb-4">Hi, I’m Solomon Wondwesn</h1>
        <p className="text-sm sm:text-base mb-6">
          Turning Ideas into Functional Web Experiences{" "}
          <span className="text-blue-500 font-semibold">
            Full Stack Web Developer
          </span>{" "}
          & Creative Problem Solver
        </p>
        <button className="px-4 py-2 w-36 h-10 sm:w-40 sm:h-12 md:w-44 md:h-14 lg:w-40 lg:h-12 xl:w-[10.875rem] xl:h-[3.5rem] bg-black font-bold text-lg md:text-2xl text-white rounded-2xl hover:bg-blue-500 hover:text-white transition-colors">
          <Link to="/Contact">Contact</Link>
        </button>
      </div>

      {/* Right side */}
      <div className="flex-1 flex justify-end pr-4">
        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden">
          <img
            src={me}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
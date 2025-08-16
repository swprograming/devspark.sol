import React from "react";
import me from "../assets/me.jpg";

const Hero = () => {
    return (
        <div className="w-full h-screen flex items-center mx-auto justify-between px-8">
            {/* Left Side */}
            <div className="flex-1 flex flex-col max-w-lg pl-4">
                <h1 className="text-8xl font-bold mb-4">Hi, I’m Solomon Wondwesn</h1>
                <p className="text-base mb-6">
                    Turning Ideas into Functional Web Experiences{" "}
                    <span className="text-[#A2D729] font-semibold">
                        Full Stack Web Developer
                    </span>{" "}
                    & Creative Problem Solver
                </p>
                <button className="px-4 py-2 w-[10.875rem] h-[3.5rem] bg-black font-bold text-2xl text-white rounded-2xl">
                    Contact Us
                </button>
            </div>
            {/* Right side */}
            <div className="flex-1 flex justify-end pr-4">
                <div className="w-100 h-100 rounded-full overflow-hidden">
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
import React from "react";
import me from "../assets/me.jpg";
import { FaReact, FaNodeJs, FaPython, FaCss3Alt } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-[1197px] mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center">About Me</h1>

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500">
            <img src={me} alt="Solomon" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-2">Solomon Wondwesen</h2>
            <p className="text-xl text-blue-500 mb-2">Full Stack Developer</p>
            <p className="text-gray-700">
              Building functional & aesthetic digital experiences.
            </p>
          </div>
        </div>

        {/* TECH STACK */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
          <div className="flex gap-8 text-4xl text-blue-500">
            <FaReact />
            <FaNodeJs />
            <FaPython />
            <FaCss3Alt />
          </div>
        </div>

        {/* STORY (with your original text) */}
        <div className="mt-12 bg-white/60 backdrop-blur-[3px] rounded-3xl p-8 border border-gray-200">
          <h2 className="text-5xl font-bold mb-6 text-blue-500">My Story</h2>
          <p className="text-lg leading-8 text-gray-700">
            My name is <span className="font-semibold">Solomon Wondwesen</span>,
            a highly motivated and passionate creative developer based in Addis
            Ababa. I started my journey in tech at a young age, building small
            websites and experimenting with different tools. Over time my
            curiosity grew into a strong passion for{" "}
            <span className="text-blue-500 font-semibold">design</span> and{" "}
            <span className="text-blue-500 font-semibold">full-stack
            development</span>.
          </p>
          <p className="text-lg leading-8 text-gray-700 mt-4">
            Aside from coding, I also enjoy working on{" "}
            <span className="text-blue-500 font-semibold">video and photo
            editing</span>, where I get to explore my creative side. My goal is
            to build products that are not only functional, but also meaningful
            and visually engaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

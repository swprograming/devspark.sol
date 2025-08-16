import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="max-w-[1197px] mx-auto flex flex-col items-center gap-4 px-4">
        <p className="text-lg font-semibold text-[#A2D729]">Solomon Wondwesen</p>
        <div className="flex gap-6">
          <a href="https://github.com/swprograming" target="_blank">
            <FaGithub className="text-2xl hover:text-[#A2D729] transition-colors" />
          </a>
          <a href="https://linkedin.com/in/solomon-wondwesen-8b27a934b" target="_blank">
            <FaLinkedin className="text-2xl hover:text-[#A2D729] transition-colors" />
          </a>
          <a href="mailto:solomonwondwosen54@gmail.com">
            <FaEnvelope className="text-2xl hover:text-[#A2D729] transition-colors" />
          </a>
        </div>
        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Solomon Wondwesen — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

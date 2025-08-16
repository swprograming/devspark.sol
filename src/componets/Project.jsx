import React from "react";
import plantai from "../assets/plantai.png";
import anime from "../assets/anime.png";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React & TailwindCSS.",
    image: "/assets/project1.png",
    link: "#",
  },
  {
    title: "Anime App",
    description: "A full-featured Anime platform with anime & manga.",
    image: anime,
    link: "#",
  },
  {
    title: "AI Plant Identifier",
    description: "Web app using AI to identify plants from images.",
    image: plantai,
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="w-full py-20 px-8 bg-gray-50">
      <div className="max-w-[1197px] mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center text-blue-500">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden 
                         transition-transform duration-300 
                         hover:scale-105 md:hover:scale-105 hover:scale-100"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="text-blue-500 font-semibold hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

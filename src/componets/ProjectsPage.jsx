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

const ProjectsPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-[1197px] mx-auto">
        {/* Page title */}
        <h1 className="text-5xl font-bold mb-12">Projects</h1>

        {/* Scrollable Vertical List */}
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[450px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-lg">{project.description}</p>
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
    </div>
  );
};

export default ProjectsPage;

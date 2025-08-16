import React from "react";
import {
  FaPaintBrush,
  FaCode,
  FaServer,
  FaUsers,
  FaCameraRetro,
} from "react-icons/fa";

const skillsData = [
  {
    category: "UI/UX",
    icon: <FaPaintBrush className="text-3xl mb-4 text-blue-500" />,
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 80 },
      { name: "Wireframing", level: 85 },
    ],
  },
  {
    category: "Frontend",
    icon: <FaCode className="text-3xl mb-4 text-blue-500" />,
    skills: [
      { name: "React", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: <FaServer className="text-3xl mb-4 text-blue-500" />,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 85 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    category: "Creative Skills",
    icon: <FaCameraRetro className="text-3xl mb-4 text-blue-500" />,
    skills: [
      { name: "Video Editing", level: 85 },
      { name: "Photo Editing", level: 90 },
    ],
  },
  {
    category: "Soft Skills",
    icon: <FaUsers className="text-3xl mb-4 text-blue-500" />,
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Communication", level: 85 },
      { name: "Teamwork", level: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="w-full py-20 px-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-[1197px] mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-blue-500">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-100 md:hover:scale-105"
            >
              <div className="flex flex-col items-center">
                {category.icon}
                <h3 className="text-2xl font-bold mb-6">{category.category}</h3>

                <div className="space-y-5 w-full">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2 font-medium">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-300 rounded-full h-3">
                        <div
                          className="bg-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

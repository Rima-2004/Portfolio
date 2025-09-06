import React from "react";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiPython, SiCplusplus } from "react-icons/si";

const TechStack = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Python", icon: <SiPython className="text-blue-300" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
  ];

  return (
    <section id="techstack" className="py-16 bg-black text-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">⚡ Tech Stack</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 hover:scale-110 transition-transform"
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="text-sm sm:text-base">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

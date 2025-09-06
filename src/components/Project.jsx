import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Chat App",
      tech: "React.js, Node.js, Socket.IO, MongoDB, Vercel",
      link: "https://chat-app-two-amber.vercel.app/",
      description:
        "Developed a real-time chat application with online presence tracking, message notifications, and user authentication.",
      features: [
        "Socket.IO for real-time communication",
        "MongoDB for message storage and user data",
        "Deployed on Vercel for scalable performance",
      ],
    },
    {
      title: "Academic Research Repository",
      tech: "HTML, CSS, JavaScript, PHP, MySQL, XML, AJAX",
      link: "https://github.com/Rima-2004/Research-Management-sys",
      description:
        "Developed a full-stack web application to manage research papers, authors, and journals with dynamic CRUD operations.",
      features: [
        "XML/XSD for schema validation",
        "MySQL backend for data storage",
        "AJAX for seamless user interaction",
      ],
    },
    {
      title: "Code Runner Platform",
      tech: "React.js, Node.js, MongoDB",
      link: "https://coderunnerapp.netlify.app",
      description:
        "Built a full-stack platform for real-time code execution and algorithm recommendation.",
      features: [
        "Hybrid content + collaborative recommendation engine",
        "Real-time code execution in a sandbox environment",
        "MongoDB for persistent user data management",
      ],
    },
    {
      title: "3D Portfolio Website",
      tech: "React.js, Tailwind CSS, Spline, Vercel",
      link: "https://portfolio-chi-ivory-q3cxx49n5a.vercel.app",
      description:
        "Designed a responsive, interactive 3D portfolio showcasing skills and projects.",
      features: [
        "Used Spline for immersive 3D components",
        "Optimized for smooth performance across devices",
        "Deployed on Vercel for fast delivery",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-16 bg-[#0f0f0f]"
    >
      {/* Heading */}
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-white"
      >
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-orange-500/20 transition"
          >
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{project.tech}</p>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-6">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-orange-500 text-black font-medium rounded-full hover:bg-orange-400 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-16"
    >
      {/* Section Heading */}
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center"
      >
        About Me
      </h2>

      {/* Content */}
      <div className="max-w-4xl text-center space-y-6">
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-base sm:text-lg text-gray-300 leading-relaxed"
        >
          Hi, I’m{" "}
          <span className="text-orange-400 font-semibold">Rima Kumari</span>, an
          aspiring{" "}
          <span className="text-orange-400 font-semibold">
            Full Stack Developer
          </span>{" "}
          with a strong foundation in both frontend and backend technologies. I
          enjoy building scalable web applications and solving real-world
          problems through clean and efficient code.
        </p>

        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-base sm:text-lg text-gray-300 leading-relaxed"
        >
          I have hands-on experience with{" "}
          <span className="font-medium">Python</span>,{" "}
          <span className="font-medium">JavaScript</span>,{" "}
          <span className="font-medium">C/C++</span>, and I actively practice{" "}
          <span className="font-medium">DSA</span> for strong problem-solving.
          I’ve worked with the <span className="font-medium">MERN stack</span>{" "}
          for full-stack projects, and I’m also exploring{" "}
          <span className="font-medium">Docker</span>,{" "}
          <span className="font-medium">AWS (basics)</span>, and{" "}
          <span className="font-medium">System Design</span> concepts to
          strengthen my backend skills.
        </p>

        {/* Tech Stack / Skills */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {[
            "Python",
            "JavaScript",
            "C/C++",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Git",
            "GitHub",
            "Docker",
            "AWS (Basics)",
            "System Design",
            "DSA",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded-full text-sm sm:text-base text-gray-300 hover:border-orange-400 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

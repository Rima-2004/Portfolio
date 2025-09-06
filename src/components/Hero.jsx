import React from "react";
import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] px-6 md:px-12 lg:px-20">
      {/* Left Side (Text) */}
      <div
        data-aos="fade-right"
        data-aos-delay="200"
        className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0"
      >
        {/* Tagline */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full"
        >
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <i className="bx bx-diamond"></i>
            Introducing
          </div>
        </div>

        {/* Main Heading */}
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8"
        >
          Hi, I’m <span className="text-orange-500">Rima Kumari</span>
          <br />
          Full Stack Developer
        </h1>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]"
        >
          I’m a computer science student with interest in frontend, backend, and
          ML projects...
        </p>

        {/* Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex gap-4 mt-12"
        >
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <i className="bx bx-link-external"></i>
          </a>

          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
            href="#contact"
          >
            Contact <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>

      {/* Right Side (3D Model) */}
      <Spline
        data-aos="zoom-in"
        data-aos-delay="700"
        className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full"
        scene="https://prod.spline.design/geAmcv9ecNe8k0N2/scene.splinecode"
      />
    </main>
  );
};

export default Hero;

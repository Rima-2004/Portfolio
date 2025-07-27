import React from "react";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  const toggleMenu = () => {
    const mobilemenu = document.getElementById("mobilemenu");

    //if it has the hidden class ,remove it otherwise add it
    if (mobilemenu.classList.contains("hidden")) {
      mobilemenu.classList.remove("hidden");
    } else {
      mobilemenu.classList.add("hidden");
    }
  };
  return (
    <header className="flex justify-between items-center py-6 px-6 lg:px-20">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-3xl md:text-4xl lg:text-5xl font-light m-0 px-6 md:px-12 lg:px-20"
      >
        RIMA KUMARI
      </h1>

      {/* Deesktop Navigation */}

      <nav className="hidden md:flex items-center gap-12">
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-base tracking-wider transition-colors hover:text-grey-300 z-50 "
          href="#"
        >
          About
        </a>

        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-base tracking-wider transition-colors hover:text-grey-300 z-50 "
          href="#"
        >
          Project
        </a>

        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1800"
          className="text-base tracking-wider transition-colors hover:text-grey-300 z-50 "
          href="#"
        >
          Skills
        </a>

        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="text-base tracking-wider transition-colors hover:text-grey-300 z-50 "
          href="#"
        >
          Contact
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2300"
          className="text-base tracking-wider transition-colors hover:text-grey-300 z-50 "
          href="https://github.com/Rima-2004"
        >
          GitHub
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2700"
          className="text-base tracking-wider transition-colors hover:text-grey-300 z-50 "
          href="https://www.linkedin.com/in/rima-kumari-739391287/"
        >
          LinkedIn
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3200"
          className="text-base tracking-wider transition-colors hover:text-grey-300 z-50 "
          href="mailto:rima.simi2004@gmail.com"
        >
          Email
        </a>
      </nav>

      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-non font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
        SIGN IN
      </button>

      {/* mobile menu  */}

      <button
        onClick={toggleMenu}
        className="block md:hidden text-3xl p-2 z-50"
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* mobile side baar */}
      <div
        id="mobilemenu"
        className=" hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md"
      >
        <nav className="flex flex-col gap-6 items-center">
          <a
            className="text-base tracking-wider transition-colors hover:text-grey-300 z-50 "
            href="#"
          >
            Company
          </a>

          <a
            className="text-base tracking-wider transition-colors hover:text-grey-300 z-50 "
            href="#"
          >
            Feature
          </a>

          <a
            className="text-base tracking-wider transition-colors hover:text-grey-300 z-50 "
            href="#"
          >
            Resources
          </a>

          <a
            className="text-base tracking-wider transition-colors hover:text-grey-300 z-50 "
            href="#"
          >
            docs
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

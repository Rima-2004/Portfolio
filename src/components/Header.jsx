import "boxicons/css/boxicons.min.css";

const Header = () => {
  const toggleMenu = () => {
    const mobilemenu = document.getElementById("mobilemenu");
    mobilemenu.classList.toggle("hidden");
  };

  return (
    <header className="flex justify-between items-center py-6 px-6 lg:px-20 fixed w-full top-0 bg-black bg-opacity-70 backdrop-blur z-50">
      {/* Logo */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
        <a
          href="#home"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider 
             bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 
             bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
        >
          RIMA KUMARI
        </a>
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-12">
        <a href="#about" className="hover:text-gray-300">
          About
        </a>
        <a href="#projects" className="hover:text-gray-300">
          Projects
        </a>
        <a href="#techstack" className="hover:text-gray-300">
          Tech Stack
        </a>

        <a href="https://github.com/Rima-2004" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/rima-kumari-739391287/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </nav>

      {/* CTA Button */}
      <a
        href="mailto:rima.simi2004@gmail.com?subject=Hiring Inquiry&body=Hi Rima, I would like to hire you for a project."
        className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium transition-all duration-500 hover:bg-white"
      >
        HIRE ME
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="block md:hidden text-3xl p-2 z-50"
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile Side Menu */}
      <div
        id="mobilemenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur"
      >
        <nav className="flex flex-col gap-6 items-center">
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

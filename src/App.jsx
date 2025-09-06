import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <main>
      {/* Background Elements */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10"
        src="/gradient.png"
        alt="Gradient-img"
      />

      {/* Glow effect (optimized) */}
      <div className="h-0 w-[30rem] absolute top-[20%] right-[-5%] shadow-[0_0_200px_60px_#e99b63] -rotate-[30deg] -z-10"></div>

      {/* Sections */}
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Project />
      <Contact />
    </main>
  );
}

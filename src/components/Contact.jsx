import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-16"
    >
      {/* Heading */}
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
      >
        Contact Me
      </h2>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 w-full max-w-3xl shadow-lg"
      >
        <p className="text-gray-300 text-center mb-6 text-lg">
          I’m always open to new opportunities, collaborations, or just a quick
          chat. Feel free to reach out to me via email or connect on LinkedIn &
          GitHub!
        </p>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
          <a
            href="mailto:rima.simi2004@gmail.com"
            className="px-6 py-3 bg-orange-500 text-black font-medium rounded-full hover:bg-orange-400 transition"
          >
            📧 Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/rima-kumari-2a7673279"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#0A66C2] text-white font-medium rounded-full hover:bg-[#0d5db0] transition"
          >
            🔗 LinkedIn
          </a>

          <a
            href="https://github.com/Rima-2004"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-700 text-white font-medium rounded-full hover:bg-gray-600 transition"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

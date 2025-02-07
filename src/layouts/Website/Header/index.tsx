import React from "react";

const WebsiteHeader: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50  max-w-6xl mx-auto px-9 py-6 flex items-center justify-between">
        <h1 className="text-3xl font-extrabold">
          S<span className="text-primary">.</span>
        </h1>
        <nav className="flex items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection("my-skill")}
            className=" text-primary-500 hover:text-primary-600 transition-colors duration-300 font-extrabold text-lg tracking-widest uppercase"
          >
            My-Skill
          </button>
          <button
            onClick={() => scrollToSection("about-me")}
            className=" text-primary-500 hover:text-primary-600 transition-colors duration-300 font-extrabold text-lg tracking-widest uppercase"
          >
            About-Me
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className=" text-primary-500 hover:text-primary-600 transition-colors duration-300 font-extrabold text-lg tracking-widest uppercase"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("resume")}
            className=" text-primary-500 hover:text-primary-600 transition-colors duration-300 font-extrabold text-lg tracking-widest uppercase"
          >
            Resume
          </button>
        </nav>
      </header>
    </>
  );
};

export default WebsiteHeader;

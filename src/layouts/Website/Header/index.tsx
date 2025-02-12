import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const WebsiteHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B1120] shadow-md w-full px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
      <h1 className="text-3xl font-extrabold">
        S<span className="text-primary">.</span>
      </h1>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      
      {/* Navigation Links */}
      <nav
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#0B1120] md:bg-transparent shadow-md md:shadow-none p-5 md:p-0 flex flex-col md:flex-row gap-4 md:gap-6 items-center transition-transform duration-300 ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        {[
          { id: "my-skill", label: "My-Skill" },
          { id: "about-me", label: "About-Me" },
          { id: "projects", label: "Projects" },
          { id: "resume", label: "Resume" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-primary-500 hover:text-primary-600 transition-colors duration-300 font-extrabold text-lg tracking-widest uppercase"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default WebsiteHeader;

"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="fixed top-3 w-full z-10 flex justify-center items-center">
        <nav className="md:flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur hidden">
          <a href="#HeroSection" className="nav-item">Home</a>
          <a href="#AboutMe" className="nav-item">About</a>
          <a href="#SkillsSection" className="nav-item">Skills</a>
          <a href="#ProjectsSection" className="nav-item">Projects</a>
          <a href="#ServiceSection" className="nav-item">Services</a>
          <a href="#ContactSection" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden px-4 w-full flex justify-between items-center">
          <div className="font-bold text-white text-lg"></div>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="w-10 h-10" /> : <Menu className="w-10 h-10" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
            <div className="absolute top-16 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex flex-col items-center py-4 space-y-2 md:hidden">
              <a href="#HeroSection" className="nav-item" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#AboutMe" className="nav-item" onClick={() => setIsOpen(false)}>About</a>
              <a href="#SkillsSection" className="nav-item" onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#ProjectsSection" className="nav-item" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#ServiceSection" className="nav-item" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#ContactSection" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
        )}
      </div>
  );
};

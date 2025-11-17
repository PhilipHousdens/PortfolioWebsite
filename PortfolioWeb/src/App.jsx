import { useState, useEffect } from 'react'
import './styles.css'
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import SkillSection from './components/SkillSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import MobileNav from './components/MobileNav.jsx';

function App() {
  return (
    <div className='h-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white scroll-smooth'>
      {/* ===== Navigation Bar ===== */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 montserrat-100 hidden lg:block">
        <ul className="flex justify-between w-[25vw] bg-black/40 py-3 px-6 rounded-full backdrop-blur-md text-white shadow-lg">
          <li><a href="#about" className="hover:text-gray-300">About Me</a></li>
          <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </header>

      {/* ===== Mobile Navbar (Hamburger) ===== */}
      <MobileNav/>

      {/* ===== Hero Section ===== */}
      <section id="home" className="h-screen snap-start bg-black">
        <HeroSection />
      </section>

      {/* ===== About Section ===== */}
      <section id="about" className="h-screen snap-start bg-white text-black relative">
        <AboutSection />
      </section>

      {/* ==== Skills Section ===== */}
      <section id="skills" className="h-screen snap-start bg-black text-black">
        <SkillSection />
      </section>

      {/* ==== Project Section ===== */}
      <section id="projects" className="h-screen snap-start bg-gray-950 text-white">
        <ProjectsSection/>
      </section>

      {/* ==== Contact Section ===== */}
      <section id="contact" className="h-screen snap-start bg-black text-white">
        <ContactSection/>
      </section>
    </div>
  );
}

export default App

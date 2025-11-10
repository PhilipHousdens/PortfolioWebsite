import { useState, useEffect } from 'react'
import './styles.css'
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className='h-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white scroll-smooth'>
      {/* ===== Navigation Bar ===== */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <ul className="flex justify-between w-[25vw] bg-white/10 py-3 px-6 rounded-full backdrop-blur-md text-white shadow-lg">
          <li><a href="#about" className="hover:text-gray-300">About Me</a></li>
          <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </header>

      {/* ===== Hero Section ===== */}
      <section id='home' className='h-screen snap-start'>
          <HeroSection />
      </section>
      

      {/* About me section */}
      <section id='about' className='h-screen snap-start'>
          <AboutSection />
      </section>
      
    </div>
  );
}

export default App

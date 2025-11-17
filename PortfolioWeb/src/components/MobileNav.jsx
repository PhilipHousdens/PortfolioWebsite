import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icon library, or swap to simple SVGs

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="lg:hidden fixed top-5 right-5 z-50 bg-black/50 p-3 rounded-full backdrop-blur-md"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="lg:hidden fixed top-16 right-5 bg-black/80 text-white p-6 rounded-xl shadow-xl flex flex-col space-y-4 z-50 backdrop-blur-xl">
          <a href="#about" onClick={() => setOpen(false)}>About Me</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </>
  );
}

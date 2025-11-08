import { useState, useEffect } from 'react'
import './styles.css'

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className='h-screen bg-black overflow-hidden relative'>
      {/* ===== Navigation Bar ===== */}
      <header className='mx-auto flex justify-center pt-5 text-white'>
        <ul className='flex justify-between w-[20%] bg-white/10 py-4 px-5 rounded-4xl'>
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </header>

      {/* ===== Hero Section ===== */}
      <main className="relative">
        {/* === Glowing Circle === */}
        <div className="absolute top-[-5%] right-[-5%] w-[350px] h-[350px] rounded-full border border-white animate-pulse shadow-[0_0_100px_40px_rgba(255,255,255,0.2)] "></div>
        <div className="absolute bottom-[-20%] left-[-5%] w-[350px] h-[350px] rounded-full border border-white animate-pulse shadow-[0_0_100px_40px_rgba(255,255,255,0.2)] "></div>

        <section className='text-white flex flex-col w-[70%] m-auto justify-center h-[70vh] relative'>
          <h1 className='text-3xl font-bold mt-20 relative z-10'>
            Welcome to my portfolio website. <br />
            Here is where I store all my work
          </h1>
          <p className='text-9xl mt-10 relative z-10'>PHILIP HOUSDEN</p>
        </section>
      </main>
    </div>
  );
}

export default App

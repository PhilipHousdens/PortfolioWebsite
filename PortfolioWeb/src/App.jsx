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
    <div >
      <header className='mx-auto flex justify-center pt-5 text-white '>
        <ul className='flex justify-between w-[20%] bg-white/10 py-4 px-5 rounded-4xl'>
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </header>
    </div>
  );
}

export default App

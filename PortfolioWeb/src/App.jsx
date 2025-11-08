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
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Frontend + Backend Test</h1>
      <p>{message}</p>
    </div>
  );
}

export default App

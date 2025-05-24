import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'

function App() {
  const [count, setCount] = useState(0);

  const cursor = document.createElement("div");
  cursor.classList.add("cursor-dot");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
  });


  return (
    <>
      <div className='bg-gray-950'>
        <Navbar />
        <Banner />
        <About />
        <Skills />
        <Experience />
      </div>

    </>
  )
}

export default App

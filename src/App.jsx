import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './store/AuthContext'

function App() {
  const [count, setCount] = useState(0);

  const cursor = document.createElement("div");
  cursor.classList.add("cursor-dot");
  const dot = document.createElement("div");
  cursor.appendChild(dot);
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
  });


  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={
              <div className='bg-gray-950'>
                <Navbar />
                <Banner />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
              </div>
            } />
            <Route path='login' element={<Login />} />
            <Route path='dashboard' element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>} />
          </Routes>
        </Router>
      </AuthProvider>

    </>
  )
}

export default App

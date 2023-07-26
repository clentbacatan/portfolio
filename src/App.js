import React from 'react'
// import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Skills from './components/pages/Skills'
import Contact from './components/pages/Contact';



function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;

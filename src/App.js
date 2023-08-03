import React from 'react'
import { Route, HashRouter as Router } from 'react-router-dom';
import {Routes} from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Skills from './components/pages/Skills'
import Contact from './components/pages/Contact';
import ContactForm from './components/ContactForm';
import Wholepage from './components/pages/Wholepage';


function App() {
    
  return (
    <div>
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" element={<Wholepage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/project" element={<Projects/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/contact" element={<Contact/>}/>   
            <Route path="/contactform" element={<ContactForm />}/>
        </Routes>
    </Router>
    </div>
  );
  
}

export default App;

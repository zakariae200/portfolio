import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;

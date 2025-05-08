import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import WelcomePopup from './components/WelcomePopup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
      <ChatBot />
      <WelcomePopup />
    </div>
  );
}

export default App;

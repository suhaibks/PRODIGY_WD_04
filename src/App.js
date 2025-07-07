// File: src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-white to-gray-100 text-gray-800">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

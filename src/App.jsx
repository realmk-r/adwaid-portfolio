
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ParticleBackground from './components/ParticleBackground';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <main className="app-shell">

      <ParticleBackground />

      <Navbar />

      <Hero />

      <About />

      <Experience />

      <Skills />
      
      <Projects />
      <Contact />

    </main>
  );
}

export default App;

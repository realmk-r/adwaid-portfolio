
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Download,
} from 'lucide-react';

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Introduction */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >

        <div className="hero-status">
          <span className="status-dot"></span>
          SOFTWARE DEVELOPER
        </div>

        <p className="hero-intro">
          HELLO, I'M
        </p>

        <h1 className="hero-title">
          ADWAID
          <span> P B.</span>
        </h1>

        <h2 className="hero-subtitle">
          Turning ideas into
          <span> digital experiences.</span>
        </h2>

        <p className="hero-description">
          Software Developer passionate about building
          intelligent applications, AI-powered solutions
          and meaningful digital experiences.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn-primary">
            VIEW PROJECTS
            <ArrowUpRight size={18} />
          </a>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            className="btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            DOWNLOAD CV
            <Download size={17} />
          </a>

        </div>

        <a href="#about" className="scroll-indicator">
          <ArrowDown size={17} />
          SCROLL TO EXPLORE
        </a>

      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.3,
          ease: 'easeOut',
        }}
      >

        <div className="visual-glow"></div>

        <div className="profile-frame">

          <img
            src={`${import.meta.env.BASE_URL}images/profile.png`}
            alt="Adwaid - Software Developer"
            className="profile-image"
          />

        </div>

        <div className="visual-label">
          <span>01 / 05</span>
          <span>DEVELOPER PORTFOLIO</span>
        </div>

      </motion.div>

      <div className="hero-side-text">
        CREATIVE MINDSET / TECHNICAL EXECUTION
      </div>

    </section>
  );
}

export default Hero;

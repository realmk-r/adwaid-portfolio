
import { ArrowUpRight, GraduationCap, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="about-section section-padding" id="about">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label">01 / WHO I AM</p>
        <h2>
          ABOUT <span>ME.</span>
        </h2>
      </motion.div>

      <div className="about-grid">

        <motion.div
          className="about-main"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="about-highlight">
            I build things that bring
            <span> ideas to life.</span>
          </p>

          <p className="about-description">
            I'm Adwaid P B, a Computer Science graduate and
            Software Developer passionate about creating
            intelligent applications and solving real-world
            problems through technology.
          </p>

          <p className="about-description">
            My interests include Python development, AI
            applications, backend engineering and building
            practical software solutions. I enjoy exploring
            new technologies and continuously improving
            my development skills.
          </p>

          <a
            href="https://github.com/realmk-r"
            target="_blank"
            rel="noreferrer"
            className="about-link"
          >
            EXPLORE MY GITHUB
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

        <motion.div
          className="about-info"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="info-card">
            <GraduationCap size={25} />

            <div>
              <span>EDUCATION</span>
              <h3>B.Tech Computer Science</h3>
              <p>St. Thomas College of Engineering and Technology</p>
              <small>2021 — 2025</small>
            </div>
          </div>

          <div className="info-card">
            <Code2 size={25} />

            <div>
              <span>CORE INTERESTS</span>
              <h3>Software & AI Development</h3>
              <p>Python · Backend · AI Applications</p>
            </div>
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;

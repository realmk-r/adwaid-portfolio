
import { motion } from 'framer-motion';
import { BriefcaseBusiness, CalendarDays } from 'lucide-react';

function Experience() {
  return (
    <section className="experience-section section-padding" id="experience">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-label">02 / MY JOURNEY</p>
        <h2>
          WORK <span>EXPERIENCE.</span>
        </h2>
      </motion.div>

      <div className="timeline">

        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="timeline-marker">
            <BriefcaseBusiness size={20} />
          </div>

          <div className="experience-card">

            <div className="experience-top">
              <span className="experience-type">
                PROFESSIONAL EXPERIENCE
              </span>

              <span className="experience-date">
                <CalendarDays size={14} />
                OCT 2025 — OCT 2026
              </span>
            </div>

            <h3>Software Developer</h3>

            <h4>CEZEN TECH (ADE-DRDO)</h4>

            <p className="experience-description">
            Built an AI-powered document analysis system using Retrieval-Augmented Generation (RAG) to extract
            insights and answer natural-language queries from structured and unstructured documents with high
            accuracy.
            </p>

            <ul className="experience-points">
              <li>
                Improved backend logic and data flow in the
                LabnetAI document analysis platform.
              </li>

              <li>
                Worked on query handling and retrieval
                relevance to improve response quality.
              </li>

              <li>
                Contributed to improving response speed
                and backend efficiency.
              </li>

              <li>
                Worked with Java, Spring MVC, Spring AI,
                Ollama and ChromaDB.
              </li>
            </ul>

            <div className="tech-tags">
              <span>JAVA</span>
              <span>SPRING AI</span>
              <span>OLLAMA</span>
              <span>CHROMADB</span>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Experience;

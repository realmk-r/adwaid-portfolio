
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'LabnetAI',
    category: 'AI / BACKEND DEVELOPMENT',
    status: 'PROFESSIONAL EXPERIENCE',
    description:
      'Contributed to improving an AI-powered document analysis platform by enhancing backend logic, data flow, query handling and retrieval relevance.',
    technologies: [
      'Java',
      'Spring MVC',
      'Spring AI',
      'Ollama',
      'ChromaDB',
    ],
    visual: 'labnet',
  },
  {
    number: '02',
    title: 'BrainSLM',
    category: 'MACHINE LEARNING / NLP',
    status: 'IN DEVELOPMENT',
    description:
      'Developing a domain-specific Small Language Model using SmolLM2, custom dataset preparation and LoRA fine-tuning.',
    technologies: [
      'Python',
      'PyTorch',
      'Transformers',
      'LoRA',
      'Hugging Face',
    ],
    visual: 'brain',
  },
  {
    number: '03',
    title: 'Hybrid Recommendation System',
    category: 'MACHINE LEARNING / WEB',
    status: 'PERSONAL PROJECT',
    description:
      'Created a movie recommendation system using Python and integrated the recommendation functionality into a web application.',
    technologies: [
      'Python',
      'Machine Learning',
      'Web Development',
    ],
    visual: 'movie',
  },
  {
    number: '04',
    title: 'Hand Gesture Screen Control',
    category: 'COMPUTER VISION',
    status: 'PERSONAL PROJECT',
    description:
      'Developed a gesture-based control system to manage system volume, screen brightness and window operations using hand movements.',
    technologies: [
      'Python',
      'OpenCV',
      'Computer Vision',
    ],
    visual: 'gesture',
  },
  {
    number: '05',
    title: '3D Animation Using Pose Estimation',
    category: 'COMPUTER VISION / 3D',
    status: 'MAJOR PROJECT',
    description:
      'Built an application that uses image or video input and pose estimation to generate real-time 3D animations.',
    technologies: [
      'Python',
      'Pose Estimation',
      '3D Animation',
    ],
    visual: 'animation',
  },
  {
    number: '06',
    title: 'Legends of the Forgotten Realm',
    category: 'GAME DEVELOPMENT',
    status: 'PERSONAL PROJECT',
    description:
      'Building a fantasy RPG featuring character creation, multiple character classes, player statistics, enemy encounters and game progression.',
    technologies: [
      'Python',
      'OOP',
      'Game Logic',
    ],
    visual: 'game',
  },
];

function Projects() {
  return (
    <section className="projects-section section-padding" id="projects">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label">04 / SELECTED WORK</p>

        <h2>
          FEATURED <span>PROJECTS.</span>
        </h2>

        <p className="section-subtitle">
          A collection of things I've built, explored and contributed to.
        </p>
      </motion.div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.number}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: (index % 2) * 0.12,
            }}
          >

            {/* Project visual */}
            <div className={`project-visual visual-${project.visual}`}>

              <span className="project-visual-number">
                PROJECT / {project.number}
              </span>

              <div className="project-visual-center">
                <span>{project.number}</span>
              </div>

              <span className="project-visual-label">
                {project.category}
              </span>

            </div>

            {/* Project information */}
            <div className="project-info">

              <div className="project-meta">
                <span>{project.category}</span>
                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-footer">

                <a
                  href="https://github.com/realmk-r"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <strong className="github-text">GH</strong>
                  GITHUB PROFILE
                  <ArrowUpRight size={16} />
                </a>

                <span className="project-index">
                  {project.number} / 06
                </span>

              </div>

            </div>

          </motion.article>
        ))}

      </div>

      <motion.div
        className="projects-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>MORE EXPERIMENTS. MORE IDEAS. MORE TO BUILD.</p>

        <a
          href="https://github.com/realmk-r"
          target="_blank"
          rel="noreferrer"
        >
          EXPLORE ALL ON GITHUB
          <ArrowUpRight size={18} />
        </a>
      </motion.div>

    </section>
  );
}

export default Projects;

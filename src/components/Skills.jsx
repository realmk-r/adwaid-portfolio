
import { motion } from 'framer-motion';
import {
  Code2,
  Globe,
  Server,
  BrainCircuit
} from 'lucide-react';

const skillGroups = [
  {
    title: 'PROGRAMMING',
    icon: Code2,
    skills: ['Python', 'Java', 'C', 'JavaScript'],
  },
  {
    title: 'FRONTEND',
    icon: Globe,
    skills: ['HTML', 'CSS', 'React', 'Figma'],
  },
  {
    title: 'BACKEND & DATABASE',
    icon: Server,
    skills: ['Spring MVC', 'Spring AI', 'MySQL', 'ChromaDB'],
  },
  {
    title: 'AI & DEVELOPMENT',
    icon: BrainCircuit,
    skills: ['RAG', 'Ollama', 'Git', 'VS Code'],
  },
];

function Skills() {
  return (
    <section className="skills-section section-padding" id="skills">

      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="section-label">03 / MY TOOLKIT</p>
        <h2>
          TECHNICAL <span>SKILLS.</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I use to turn ideas into reality.
        </p>
      </motion.div>

      <div className="skills-grid">

        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              className="skill-card"
              key={group.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >

              <div className="skill-card-heading">
                <Icon size={25} />
                <h3>{group.title}</h3>
              </div>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}

export default Skills;

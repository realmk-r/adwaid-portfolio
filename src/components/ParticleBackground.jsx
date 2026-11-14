
import { motion } from 'framer-motion';

const particles = [
  { left: '8%', top: '20%', delay: 0 },
  { left: '18%', top: '75%', delay: 1 },
  { left: '30%', top: '35%', delay: 2 },
  { left: '42%', top: '85%', delay: 0.5 },
  { left: '55%', top: '15%', delay: 1.5 },
  { left: '68%', top: '65%', delay: 2.5 },
  { left: '78%', top: '30%', delay: 0.8 },
  { left: '90%', top: '80%', delay: 1.8 },
  { left: '95%', top: '18%', delay: 0.3 },
  { left: '12%', top: '50%', delay: 2.2 },
  { left: '35%', top: '10%', delay: 1.2 },
  { left: '62%', top: '90%', delay: 0.7 },
  { left: '85%', top: '48%', delay: 2.7 },
  { left: '48%', top: '55%', delay: 1.7 },
  { left: '22%', top: '90%', delay: 0.2 },
];

function ParticleBackground() {
  return (
    <div className="particle-background">

      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -35, 0],
            opacity: [0.2, 1, 0.2],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{
            duration: 4 + (index % 3),
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

    </div>
  );
}

export default ParticleBackground;

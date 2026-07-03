import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiExternalLink, FiChevronDown } from 'react-icons/fi';
import { projects } from '../data/resumeData';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Projects() {
  const [expanded, setExpanded] = useState(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="projects" className="relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" style={{ y: bgY }} />
      </div>
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-120px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="section-title"
        >
          Featured <span className="text-text-primary">Projects</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 64 }}
          viewport={{ once: false, margin: '-120px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="accent-line"
        />

        {/* <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6/"> */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: '-120px' }}
              className={`card group cursor-pointer ${expanded === i ? 'card-expanded' : ''}`}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm text-text-secondary font-medium mt-0.5">{project.subtitle}</p>
                  )}
                </div>
                <FiExternalLink className="text-text-muted group-hover:text-accent transition-colors shrink-0 mt-1" size={16} />
              </div>

              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ maxHeight: 0, opacity: 0 }}
                    animate={{ maxHeight: 1000, opacity: 1 }}
                    exit={{ maxHeight: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 my-4">
                      {project.bullets.map((bullet, j) => (
                        <li key={j} className="text-base text-text-secondary leading-relaxed pl-4 relative">
                          <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-accent rounded-full" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.slice(0, expanded === i ? undefined : 4).map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full">
                    {t}
                  </span>
                ))}
                {expanded !== i && project.tech.length > 4 && (
                  <span className="px-2.5 py-1 text-xs font-medium text-text-muted">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 mt-4 text-sm font-medium text-text-secondary">
                <FiChevronDown
                  className={`transition-transform duration-300 ${expanded === i ? 'rotate-180' : ''}`}
                  size={14}
                />
                {expanded === i ? 'Show less' : 'Tap to expand'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

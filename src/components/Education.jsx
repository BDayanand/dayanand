import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiBookOpen, FiCalendar } from 'react-icons/fi';
import { education } from '../data/resumeData';

export default function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section id="education" className="relative" ref={ref}>
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
          <span className="text-gradient">Education</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 64 }}
          viewport={{ once: false, margin: '-120px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="accent-line"
        />

        <div className="mt-10 relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/70 to-transparent hidden md:block" />

          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-120px' }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative pl-0 md:pl-14 pb-10 last:pb-0"
            >
              <div className="absolute left-0 top-1 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 border border-accent/30 text-accent">
                <FiBookOpen size={18} />
              </div>

              <div className="card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-text-primary">{edu.degree}</h3>
                  <span className="flex items-center gap-1.5 text-sm text-text-secondary shrink-0">
                    <FiCalendar size={14} />
                    {edu.period}
                  </span>
                </div>
                <p className="text-text-secondary">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

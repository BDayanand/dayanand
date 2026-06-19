import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiAward } from 'react-icons/fi';
import { certifications } from '../data/resumeData';

export default function Certifications() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  return (
    <section id="certifications" className="relative" ref={ref}>
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
          <span className="text-gradient">Certifications</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 64 }}
          viewport={{ once: false, margin: '-120px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="accent-line"
        />

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-120px' }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="card"
            >
              <div className="p-3 bg-accent/10 rounded-lg text-accent inline-block mb-4">
                <FiAward size={24} />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-1">{cert.title}</h3>
              <p className="text-sm text-accent font-bold mb-2 tracking-wide">{cert.issuer}</p>
              <p className="text-base text-text-secondary leading-relaxed">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

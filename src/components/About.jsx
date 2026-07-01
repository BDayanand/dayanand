import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiUser, FiAward, FiCode } from 'react-icons/fi';
import { personalInfo } from '../data/resumeData';

const stats = [
  { icon: FiCode, label: 'Projects', value: '2+' },

  { icon: FiUser, label: 'Experience', value: 'Internship' },
];

function SectionHeader() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-120px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="section-title"
      >
        About <span className="text-text-primary">Me</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 64 }}
        viewport={{ once: false, margin: '-120px' }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="accent-line"
      />
    </>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="about" className="relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute inset-0 bg-gradient-to-b from-accent/3 via-transparent to-transparent" style={{ y: bgY }} />
      </div>
      <div className="section-container">
        <SectionHeader />

        <div ref={ref} className="grid md:grid-cols-5 gap-10 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3 space-y-4"
          >
            <p className="text-text-secondary leading-relaxed text-base">
              {personalInfo.summary}
            </p>
            <p className="text-text-secondary leading-relaxed text-base">
              I am a Bachelor of Engineering (B.E.) graduate in Information Science and Engineering with a passion for software development and building practical, user-focused applications. I enjoy solving real-world problems through clean, efficient code and continuously improving my technical and problem-solving skills.
            </p>
            <p className="text-text-secondary leading-relaxed text-base">
              Throughout my academic journey and internship, I gained hands-on experience by developing web applications and software projects, strengthening my understanding of modern development practices and collaborative workflows. I enjoy learning new technologies, exploring better development approaches, and applying them to create reliable and scalable solutions.
            </p>
            <p className="text-text-secondary leading-relaxed text-base">
              I am currently seeking an entry-level Software Developer opportunity where I can contribute to meaningful projects, work with experienced teams, and continue growing as a software engineer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 grid grid-cols-1 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="card flex items-center gap-4"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                  <stat.icon size={22} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-text-muted font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

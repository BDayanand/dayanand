import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiExternalLink } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { personalInfo } from '../data/resumeData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303]"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(229,9,20,0.07) 0.5px, transparent 0.5px)`,
        backgroundSize: '24px 24px',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-[#030303]/60 to-[#030303] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] bg-accent/10 rounded-full blur-[100px] md:blur-[150px] lg:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-background pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="section-container text-center relative z-10">
        <motion.h1
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-hero mb-4 leading-none"
        >
          <span className="text-text-primary">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-hero-sub text-text-secondary max-w-2xl mx-auto mb-4 tracking-wide"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.summary}
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href={personalInfo.resumeUrl} className="btn-primary" target="_blank">
            <FiDownload size={18} />
            Resume
          </a>
          <a href={`mailto:${personalInfo.email}`} className="btn-outline">
            <FiMail size={18} />
            Contact
          </a>
          <div className="flex items-center gap-3 ml-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-text-secondary hover:text-text-primary active:text-text-primary focus:text-text-primary hover:bg-white/10 active:bg-white/10 focus:bg-white/10 rounded-full backdrop-blur-sm border border-border-dark hover:border-white/20 active:border-white/20 focus:border-white/20 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-text-secondary hover:text-text-primary active:text-text-primary focus:text-text-primary hover:bg-white/10 active:bg-white/10 focus:bg-white/10 rounded-full backdrop-blur-sm border border-border-dark hover:border-white/20 active:border-white/20 focus:border-white/20 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 border-2 border-text-muted rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-text-muted rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

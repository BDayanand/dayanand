import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { personalInfo } from '../data/resumeData';

const contactLinks = [
  { icon: FiMail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: FiPhone, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: FaGithub, label: 'GitHub', href: personalInfo.github },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://www.linkedin.com/in/dayanandbadiger' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative bg-[#020202]">
      <div className="h-[3px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px)`,
          backgroundSize: '100% 32px',
        }}
      />

      <div className="section-container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Get In <span className="text-text-primary">Touch</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 64 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="accent-line"
        />

        <div className="mt-10 grid md:grid-cols-5 gap-8 md:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-6"
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 group"
              >
                <div className="p-3 bg-gradient-to-br from-background-card to-[#020202] border border-border-dark rounded-lg text-accent group-hover:text-accent group-hover:border-accent/30 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-200">
                  <link.icon size={20} />
                </div>
                <div>
                  <p className="text-base font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                    {link.label}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-background-card/80 border border-border-dark rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-200"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-background-card/80 border border-border-dark rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-200"
              />
            </div>
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 bg-background-card/80 border border-border-dark rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-200 resize-none"
            />
            <button
              type="submit"
              className="btn-primary"
              disabled={sent}
            >
              {sent ? (
                'Message Sent!'
              ) : (
                <>
                  <FiSend size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      <div className="border-t border-border-dark/30">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm font-medium text-text-secondary">
              &copy; {new Date().getFullYear()} {personalInfo.name}.
            </p>
            <div className="flex items-center gap-6">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-text-secondary hover:text-accent transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/dayanandbadiger" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-text-secondary hover:text-accent transition-colors">LinkedIn</a>
              <a href={`mailto:${personalInfo.email}`} className="text-sm font-medium text-text-secondary hover:text-accent transition-colors">Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

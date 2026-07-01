import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const sections = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Certifications', 'Contact'];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const current = sections
        .map((id) => {
          const el = document.getElementById(id.toLowerCase());
          if (el) {
            const rect = el.getBoundingClientRect();
            return { id, top: rect.top };
          }
          return null;
        })
        .filter(Boolean)
        .reduce((prev, curr) => (curr.top <= 150 ? curr : prev), { id: 'Home', top: 0 });

      setActive(current.id);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/70 backdrop-blur-xl border-b border-border-dark/50' : 'bg-transparent'
      }`}
      style={scrolled ? { boxShadow: '0 4px 24px rgba(0,0,0,0.3)' } : {}}
    >
      <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => scrollTo('home')} className="text-2xl font-extrabold tracking-tight">
            <span className="text-accent max-sm:drop-shadow-none drop-shadow-[0_0_8px_rgba(229,9,20,0.5)]">D</span>
            <span className="text-text-primary">ayanand Badiger</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active === item ? 'text-text-primary' : 'text-text-muted hover:text-text-secondary'
                }`}
              >
                {item}
                {active === item && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border-dark overflow-y-auto max-h-[calc(100vh-4rem)]"
          >
            <div className="px-4 py-4 space-y-1">
              {sections.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active === item
                      ? 'bg-accent/10 text-accent'
                      : 'text-text-muted hover:text-text-primary hover:bg-background-light'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

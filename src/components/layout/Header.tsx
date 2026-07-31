import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Jurisdictions', path: '/jurisdictions' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out ${scrolled
          ? 'bg-primary/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
            <Logo variant="light" className={`origin-left transition-all duration-200 ${scrolled ? 'scale-100' : 'scale-110'}`} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative group text-sm font-bold transition-all duration-[250ms] ease-out ${isActive ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#D4AF37]"
                    />
                  )}
                  {!isActive && (
                    <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] transition-all duration-[250ms] ease-out group-hover:w-full bg-[#D4AF37]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button to="/contact" variant="primary" className="font-bold">
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2.5 -mr-2.5 rounded-lg focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-all duration-200 active:scale-95 opacity-90 hover:opacity-100 hover:bg-white/10"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Open mobile menu"
          >
            <img width="28" height="28"
              src="/hamburger.png"
              alt=""
              aria-hidden="true"
              className="h-6 w-6 sm:h-7 sm:w-7 transition-all duration-200 invert brightness-0"
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[85%] max-w-sm bg-primary border-l border-white/10 shadow-2xl flex flex-col lg:hidden"
            >
              <div className="p-6 flex justify-between items-center">
                <Logo variant="light" className="scale-90 origin-left" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 -mr-3 text-text-secondary hover:text-accent transition-colors focus:outline-none flex items-center justify-center rounded-full hover:bg-surface"
                  aria-label="Close mobile menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-4 text-2xl font-serif tracking-tight transition-colors ${location.pathname === link.path ? 'text-accent' : 'text-text-primary hover:text-accent'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 bg-primary/80 backdrop-blur-md border-t border-white/10 sticky bottom-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Button to="/contact" variant="primary" className="w-full font-bold">Get In Touch</Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

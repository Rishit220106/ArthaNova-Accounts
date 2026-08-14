import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
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
          ? 'bg-[#F8F5EE]/95 backdrop-blur-xl border-b border-[#E8DED0] shadow-sm py-3'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
            <Logo variant="dark" className={`origin-left transition-all duration-200 ${scrolled ? 'scale-100' : 'scale-110'}`} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative group text-sm font-bold transition-all duration-[250ms] ease-out ${isActive ? 'text-[#D4AF37]' : 'text-[#10254A] hover:text-[#D4AF37]'
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
            type="button"
            className="lg:hidden p-2.5 -mr-2.5 rounded-lg focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-all duration-200 active:scale-95 hover:bg-[#10254A]/5 text-[#10254A] flex items-center justify-center"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          >
            <Menu className="h-6 w-6 sm:h-7 sm:w-7 stroke-[2]" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Warm Ivory Background) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-md lg:hidden"
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
              className="fixed top-0 right-0 bottom-0 z-[70] w-[85%] max-w-sm bg-[#F8F5EE] border-l border-[#D4AF37]/35 shadow-[0_0_50px_rgba(16,37,74,0.2)] flex flex-col lg:hidden"
            >
              <div className="p-6 flex justify-between items-center border-b border-[#10254A]/10">
                <Logo variant="dark" className="scale-90 origin-left" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 -mr-2 text-[#10254A] hover:text-[#D4AF37] transition-colors focus:outline-none flex items-center justify-center rounded-full hover:bg-[#10254A]/5"
                  aria-label="Close mobile menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col space-y-3">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-3.5 text-2xl font-serif font-bold tracking-tight transition-colors ${location.pathname === link.path ? 'text-[#D4AF37]' : 'text-[#10254A] hover:text-[#D4AF37]'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 bg-[#F8F5EE] border-t border-[#10254A]/10 sticky bottom-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Button to="/contact" variant="primary" className="w-full font-bold" onClick={() => setMobileMenuOpen(false)}>Get In Touch</Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

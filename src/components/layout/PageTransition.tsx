import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Scroll to top when this component mounts (which is when the route changes)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="flex-grow flex flex-col w-full relative z-0"
    >
      {children}
    </motion.div>
  );
};

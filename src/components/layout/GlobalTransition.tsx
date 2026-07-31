import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import type { DotLottie } from '@lottiefiles/dotlottie-react';

export const GlobalTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  const handleAnimationComplete = () => {
    setIsTransitioning(false);
  };

  const dotLottieRefCallback = (dotLottie: DotLottie | null) => {
    if (dotLottie) {
      dotLottie.addEventListener('complete', handleAnimationComplete);
    }
  };

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center pointer-events-auto"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {!shouldReduceMotion ? (
            <div className="w-64 h-64 md:w-96 md:h-96">
              <DotLottieReact
                src="/animations/page-transition.lottie"
                autoplay
                loop={false}
                dotLottieRefCallback={dotLottieRefCallback}
                onError={() => {
                  // Fallback if animation fails to load
                  setTimeout(handleAnimationComplete, 600);
                }}
              />
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="w-12 h-12 border-2 border-primary border-t-accent rounded-full animate-spin mb-4" />
              <p className="text-text-primary font-serif">Loading...</p>
              {/* Fallback for reduced motion */}
              <img 
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
                onLoad={() => setTimeout(handleAnimationComplete, 600)} 
                alt=""
                className="hidden" 
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle2 } from 'lucide-react';

export const OrbitingHeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  // Autoplay rotation: advances every 8 seconds if not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 8000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Handle 3D Mouse Parallax Tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      rotateX: (-y / rect.height) * 6,
      rotateY: (x / rect.width) * 6,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const cardsData = [
    {
      id: 'approach',
      tag: 'Our Approach',
      badge: 'Trusted Partner',
      content: (
        <>
          <div className="flex items-center justify-between mb-4">
            <div className="text-[#1D4ED8] dark:text-blue-400 text-xs font-bold uppercase tracking-[0.05em]">
              Our Approach
            </div>
            <div className="text-[#1D4ED8] dark:text-blue-300 text-xs bg-white/90 dark:bg-white/10 backdrop-blur-md border border-white/80 dark:border-white/20 px-3 py-1.5 rounded-full font-bold tracking-wide flex items-center gap-1.5 shadow-sm">
              <Shield className="w-3.5 h-3.5 text-[#1D4ED8] dark:text-blue-400" />
              Trusted Partner
            </div>
          </div>
          <div className="text-2xl sm:text-[1.65rem] font-serif font-bold text-[#07162D] dark:text-white leading-[1.25] mb-2.5">
            Precision.<br />Compliance.<br />Growth.
          </div>
          <div className="text-xs sm:text-sm text-[#334155] dark:text-slate-300 font-body leading-relaxed font-medium">
            Helping businesses manage <br />global finances.
          </div>
        </>
      ),
    },
    {
      id: 'compliance',
      tag: 'Statutory Compliance',
      badge: 'UK • US Standards',
      content: (
        <>
          <div className="flex items-center gap-3.5 mb-5">
            <div className="w-10 h-10 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-md border border-white/80 dark:border-white/20 flex items-center justify-center shrink-0 shadow-sm">
              <Shield className="w-5 h-5 text-[#1D4ED8] dark:text-blue-400" />
            </div>
            <div>
              <div className="text-[#1D4ED8] dark:text-blue-400 text-xs font-bold uppercase tracking-[0.05em] mb-0.5">
                Statutory Compliance
              </div>
              <div className="text-sm font-bold text-[#07162D] dark:text-white">
                UK • US Standards
              </div>
            </div>
          </div>
          <div className="divide-y divide-[#E2E8F0] dark:divide-white/10">
            <div className="pb-3 flex justify-between items-center text-xs sm:text-sm">
              <span className="text-[#475569] dark:text-slate-300 font-medium flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] dark:text-blue-400" /> HMRC Requirements
              </span>
              <span className="text-[#1D4ED8] dark:text-blue-300 bg-white/90 dark:bg-white/10 backdrop-blur-md border border-white/80 dark:border-white/20 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4ED8] dark:text-blue-400" /> Verified
              </span>
            </div>
            <div className="pt-3 flex justify-between items-center text-xs sm:text-sm">
              <span className="text-[#475569] dark:text-slate-300 font-medium flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] dark:text-blue-400" /> IRS Requirements
              </span>
              <span className="text-[#1D4ED8] dark:text-blue-300 bg-white/90 dark:bg-white/10 backdrop-blur-md border border-white/80 dark:border-white/20 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4ED8] dark:text-blue-400" /> Verified
              </span>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'services',
      tag: 'Core Services',
      content: (
        <>
          <div className="text-[#1D4ED8] dark:text-blue-400 text-xs font-bold uppercase tracking-[0.05em] mb-4">
            Core Services
          </div>
          <div className="divide-y divide-[#E2E8F0] dark:divide-white/10">
            <div className="pb-2.5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-md border border-white/80 dark:border-white/20 flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#1D4ED8] dark:text-blue-400" />
              </div>
              <span className="text-sm font-bold text-[#07162D] dark:text-white">Bookkeeping</span>
            </div>
            <div className="py-2.5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-md border border-white/80 dark:border-white/20 flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#1D4ED8] dark:text-blue-400" />
              </div>
              <span className="text-sm font-bold text-[#07162D] dark:text-white">Payroll</span>
            </div>
            <div className="pt-2.5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-md border border-white/80 dark:border-white/20 flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#1D4ED8] dark:text-blue-400" />
              </div>
              <span className="text-sm font-bold text-[#07162D] dark:text-white">Financial Reporting</span>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-center py-4 sm:py-6">
      
      {/* Background Soft Glow & Orbital Lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Soft Radial Glow */}
        <div className="w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18)_0%,rgba(212,175,55,0.08)_50%,transparent_75%)] blur-3xl rounded-full" />
        
        {/* Faint Orbital Lines */}
        <div className="absolute w-[440px] h-[440px] border border-white/10 rounded-full opacity-60 pointer-events-none" />
        <div className="absolute w-[320px] h-[320px] border border-white/[0.06] rounded-full opacity-40 pointer-events-none" />
      </div>

      {/* 3D Orbiting Stage Container */}
      <div
        className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center perspective-[1200px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          animate={{
            rotateX: tilt.rotateX,
            rotateY: tilt.rotateY,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          className="relative w-full h-full flex items-center justify-center transform-style-3d"
        >
          {cardsData.map((card, index) => {
            // Calculate relative offset position (0 = active/front, 1 = right/back, 2 = left/back)
            const offset = (index - activeIndex + 3) % 3;
            const isActive = offset === 0;
            const isRight = offset === 1;
            const isLeft = offset === 2;

            // Position & 3D Depth parameters
            let xPos = 0;
            let yPos = 0;
            let scale = 1;
            let zIndex = 10;
            let opacity = 0.65;
            let blur = 'blur(2px)';
            let rotateY = 0;

            if (isActive) {
              xPos = 0;
              yPos = 0;
              scale = 1.04;
              zIndex = 30;
              opacity = 1;
              blur = 'blur(0px)';
              rotateY = 0;
            } else if (isRight) {
              xPos = 120;
              yPos = -10;
              scale = 0.85;
              zIndex = 10;
              opacity = 0.65;
              blur = 'blur(2px)';
              rotateY = -10;
            } else if (isLeft) {
              xPos = -120;
              yPos = -10;
              scale = 0.85;
              zIndex = 10;
              opacity = 0.65;
              blur = 'blur(2px)';
              rotateY = 10;
            }

            return (
              <motion.div
                key={card.id}
                initial={false}
                animate={{
                  x: xPos,
                  y: yPos,
                  scale: scale,
                  rotateY: rotateY,
                  opacity: opacity,
                  filter: blur,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 1, 0.5, 1], // Smooth spring physics
                }}
                style={{ zIndex }}
                onClick={() => setActiveIndex(index)}
                className={`absolute w-[290px] sm:w-[330px] p-6 rounded-[28px] cursor-pointer select-none transition-all duration-300 ${
                  isActive
                    ? 'bg-white/90 dark:bg-white/[0.14] backdrop-blur-[28px] border border-white/80 dark:border-[#D4AF37]/40 shadow-[0_25px_80px_rgba(0,0,0,0.4),0_0_35px_rgba(212,175,55,0.22)] ring-1 ring-white/30'
                    : 'bg-white/75 dark:bg-white/[0.08] backdrop-blur-[24px] border border-white/60 dark:border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:opacity-90'
                }`}
              >
                {/* Soft Glass Rim Highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent rounded-t-[28px] pointer-events-none" />

                {/* Card Content */}
                {card.content}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Elegant Gold Navigation Dots (No arrows) */}
      <div className="flex items-center justify-center gap-2.5 mt-2 z-20">
        {cardsData.map((_, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer outline-none ${
                isActive
                  ? 'w-7 h-2 bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.6)]'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/60'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

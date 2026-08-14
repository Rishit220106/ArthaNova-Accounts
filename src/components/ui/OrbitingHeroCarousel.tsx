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
            <div className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.05em]">
              Our Approach
            </div>
            <div className="text-white text-xs bg-[#17345C] backdrop-blur-md border border-[#D4AF37]/50 px-3 py-1.5 rounded-full font-bold tracking-wide flex items-center gap-1.5 shadow-sm">
              <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
              Trusted Partner
            </div>
          </div>
          <div className="text-2xl sm:text-[1.65rem] font-serif font-bold text-white leading-[1.25] mb-2.5">
            Precision.<br />Compliance.<br />Growth.
          </div>
          <div className="text-xs sm:text-sm text-[#E8DED0] font-sans leading-relaxed font-medium">
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
            <div className="w-10 h-10 rounded-full bg-[#17345C] border border-[#D4AF37]/50 flex items-center justify-center shrink-0 shadow-sm">
              <Shield className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <div className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.05em] mb-0.5">
                Statutory Compliance
              </div>
              <div className="text-sm font-bold text-white">
                UK • US Standards
              </div>
            </div>
          </div>
          <div className="divide-y divide-[#17345C]">
            <div className="pb-3 flex justify-between items-center text-xs sm:text-sm">
              <span className="text-[#E8DED0] font-medium flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> HMRC Requirements
              </span>
              <span className="text-white bg-[#17345C] border border-[#D4AF37]/40 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Verified
              </span>
            </div>
            <div className="pt-3 flex justify-between items-center text-xs sm:text-sm">
              <span className="text-[#E8DED0] font-medium flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> IRS Requirements
              </span>
              <span className="text-white bg-[#17345C] border border-[#D4AF37]/40 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Verified
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
          <div className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.05em] mb-4">
            Core Services
          </div>
          <div className="divide-y divide-[#17345C]">
            <div className="pb-2.5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#17345C] border border-[#D4AF37]/50 flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#D4AF37]" />
              </div>
              <span className="text-sm font-bold text-white">Bookkeeping</span>
            </div>
            <div className="py-2.5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#17345C] border border-[#D4AF37]/50 flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#D4AF37]" />
              </div>
              <span className="text-sm font-bold text-white">Payroll</span>
            </div>
            <div className="pt-2.5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#17345C] border border-[#D4AF37]/50 flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#D4AF37]" />
              </div>
              <span className="text-sm font-bold text-white">Financial Reporting</span>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-center py-4 sm:py-6">
      
      {/* Background Soft Warm Ambient Lighting & Subdued Lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Soft Radial Warm Glow */}
        <div className="w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,rgba(244,240,232,0.5)_50%,transparent_75%)] blur-3xl rounded-full" />
        
        {/* Faint Subtle Warm Orbital Lines */}
        <div className="absolute w-[440px] h-[440px] border border-[#10254A]/[0.05] rounded-full opacity-60 pointer-events-none" />
        <div className="absolute w-[320px] h-[320px] border border-[#10254A]/[0.04] rounded-full opacity-40 pointer-events-none" />
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
            let opacity = 0.7;
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
              opacity = 0.7;
              blur = 'blur(2px)';
              rotateY = -10;
            } else if (isLeft) {
              xPos = -120;
              yPos = -10;
              scale = 0.85;
              zIndex = 10;
              opacity = 0.7;
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
                    ? 'bg-[#10254A] border border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(16,37,74,0.25)] ring-1 ring-[#D4AF37]/20'
                    : 'bg-[#17345C] border border-[#E8DED0]/20 shadow-[0_10px_30px_rgba(16,37,74,0.15)] hover:opacity-95'
                }`}
              >
                {/* Soft Rim Highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent rounded-t-[28px] pointer-events-none" />

                {/* Card Content */}
                {card.content}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Gold Navigation Dots */}
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
                  ? 'w-7 h-2 bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.5)]'
                  : 'w-2 h-2 bg-[#10254A]/30 hover:bg-[#10254A]/60'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, CheckCircle2, Check, Quote, Users, Award, ShieldCheck } from 'lucide-react';

const CountUp = ({ end, suffix = '', duration = 2, isString = false, stringVal = "" }: any) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const text = useTransform(rounded, (latest) => `${latest}${suffix}`);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  React.useEffect(() => {
    if (isInView && !isString) {
      const controls = animate(count, end, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, end, duration, isString, count]);

  if (isString) {
    return <span ref={ref}>{stringVal}</span>;
  }
  return <motion.span ref={ref}>{text}</motion.span>;
};

const StatItem = ({ icon: Icon, value, suffix, label, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.3, delay }}
    className="group relative bg-gradient-to-br from-[#132B57] via-[#10254A] to-[#0D1D3A] rounded-[22px] p-5 border border-[#D4AF37]/35 shadow-[0_10px_30px_rgba(16,37,74,0.14)] hover:border-[#D4AF37] hover:shadow-[0_18px_40px_rgba(16,37,74,0.25)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex items-center gap-4 text-left"
  >
    {/* Top edge inner gold line */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent group-hover:via-[#D4AF37]/80 transition-all duration-300" />

    {/* Micro Accent Gold Dot */}
    <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50 group-hover:bg-[#D4AF37] group-hover:scale-125 transition-all duration-300 shadow-[0_0_6px_rgba(212,175,55,0.6)]" />

    <div className="w-11 h-11 rounded-full bg-[#10254A] border border-[#D4AF37]/40 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-all duration-300">
      <Icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
    </div>
    <div>
      <div className="text-base sm:text-lg lg:text-xl font-serif font-bold text-white leading-tight group-hover:text-[#F8F5EE] transition-colors">
        {typeof value === 'number' ? <CountUp end={value} suffix={suffix} /> : <span>{value}{suffix}</span>}
      </div>
      <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#D4AF37] uppercase pt-0.5">
        {label}
      </div>
    </div>
  </motion.div>
);

const UKFlag = () => (
  <svg className="w-5 h-3.5 rounded-[2px] shadow-sm shrink-0 border border-white/20 inline-block align-middle" viewBox="0 0 600 300">
    <clipPath id="uk-clip-gp">
      <rect width="600" height="300" />
    </clipPath>
    <g clipPath="url(#uk-clip-gp)">
      <rect width="600" height="300" fill="#012169" />
      <path d="M0,0 L600,300 M600,0 L0,300" stroke="#fff" strokeWidth="60" />
      <path d="M0,0 L600,300 M600,0 L0,300" stroke="#C8102E" strokeWidth="40" />
      <path d="M300,0 V300 M0,150 H600" stroke="#fff" strokeWidth="100" />
      <path d="M300,0 V300 M0,150 H600" stroke="#C8102E" strokeWidth="60" />
    </g>
  </svg>
);

const USFlag = () => (
  <svg className="w-5 h-3.5 rounded-[2px] shadow-sm shrink-0 border border-white/20 inline-block align-middle" viewBox="0 0 741 390">
    <rect width="741" height="390" fill="#b22234" />
    <path d="M0,30H741M0,90H741M0,150H741M0,210H741M0,270H741M0,330H741" stroke="#fff" strokeWidth="30" />
    <rect width="296.4" height="210" fill="#3c3b6e" />
    <g fill="#fff">
      <circle cx="30" cy="20" r="9" /><circle cx="90" cy="20" r="9" /><circle cx="150" cy="20" r="9" /><circle cx="210" cy="20" r="9" /><circle cx="270" cy="20" r="9" />
      <circle cx="60" cy="50" r="9" /><circle cx="120" cy="50" r="9" /><circle cx="180" cy="50" r="9" /><circle cx="240" cy="50" r="9" />
      <circle cx="30" cy="80" r="9" /><circle cx="90" cy="80" r="9" /><circle cx="150" cy="80" r="9" /><circle cx="210" cy="80" r="9" /><circle cx="270" cy="80" r="9" />
      <circle cx="60" cy="110" r="9" /><circle cx="120" cy="110" r="9" /><circle cx="180" cy="110" r="9" /><circle cx="240" cy="110" r="9" />
      <circle cx="30" cy="140" r="9" /><circle cx="90" cy="140" r="9" /><circle cx="150" cy="140" r="9" /><circle cx="210" cy="140" r="9" /><circle cx="270" cy="140" r="9" />
      <circle cx="60" cy="170" r="9" /><circle cx="120" cy="170" r="9" /><circle cx="180" cy="170" r="9" /><circle cx="240" cy="170" r="9" />
      <circle cx="30" cy="195" r="9" /><circle cx="90" cy="195" r="9" /><circle cx="150" cy="195" r="9" /><circle cx="210" cy="195" r="9" /><circle cx="270" cy="195" r="9" />
    </g>
  </svg>
);

const AUFlag = () => (
  <svg className="w-5 h-3.5 rounded-[2px] shadow-sm shrink-0 border border-white/20 inline-block align-middle" viewBox="0 0 1200 600">
    <rect width="1200" height="600" fill="#00008B" />
    <g transform="scale(0.5)">
      <rect width="1200" height="600" fill="#012169" />
      <path d="M0,0 L1200,600 M1200,0 L0,600" stroke="#fff" strokeWidth="120" />
      <path d="M0,0 L1200,600 M1200,0 L0,600" stroke="#C8102E" strokeWidth="80" />
      <path d="M600,0 V600 M0,300 H1200" stroke="#fff" strokeWidth="200" />
      <path d="M600,0 V600 M0,300 H1200" stroke="#C8102E" strokeWidth="120" />
    </g>
    <polygon fill="#fff" points="300,370 312,410 350,400 325,430 350,460 312,450 300,490 288,450 250,460 275,430 250,400 288,410" />
    <circle cx="900" cy="150" r="26" fill="#fff" />
    <circle cx="1020" cy="270" r="26" fill="#fff" />
    <circle cx="900" cy="450" r="26" fill="#fff" />
    <circle cx="780" cy="330" r="26" fill="#fff" />
    <circle cx="960" cy="390" r="18" fill="#fff" />
  </svg>
);

const FloatingCard = ({ title, flag, items, position, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    animate={{
      y: [0, -6, 0],
      x: [0, 3, 0]
    }}
    transition={{
      default: { duration: 0.3, delay },
      y: { duration: 5 + delay * 2, repeat: Infinity, ease: "easeInOut", delay },
      x: { duration: 7 + delay * 2, repeat: Infinity, ease: "easeInOut", delay }
    }}
    className={`absolute ${position} z-20 w-52 sm:w-56 bg-white rounded-[24px] border border-[#D4AF37]/35 shadow-[0_12px_35px_rgba(16,37,74,0.08)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.16)] hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-300 group overflow-hidden hidden md:block`}
  >
    {/* Dark Navy Header Strip */}
    <div className="bg-[#10254A] px-4 py-2.5 flex items-center justify-between border-b border-[#D4AF37]/30">
      <div className="flex items-center gap-2">
        {flag && <div className="flex items-center shrink-0">{flag}</div>}
        <span className="text-xs font-bold text-white tracking-wide group-hover:text-[#F8F5EE] transition-colors">{title}</span>
      </div>
      <div className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.8)] animate-pulse" />
    </div>

    {/* Body with Checkmarks */}
    <div className="p-3.5 bg-white space-y-2">
      {items.map((item: string, i: number) => (
        <div key={i} className="flex items-center gap-2 text-xs">
          <div className="w-4 h-4 rounded-full bg-[#D4AF37]/15 flex items-center justify-center shrink-0">
            <Check className="w-2.5 h-2.5 text-[#D4AF37]" strokeWidth={2.5} />
          </div>
          <span className="text-[#10254A]/80 font-medium">{item}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

export const GlobalPresence = () => {
  return (
    <section className="py-16 md:py-28 lg:py-36 relative overflow-hidden bg-[#FAF9F5]">
      {/* Subtle Background Blueprint Lines & Pattern (Opacity < 6%) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Faint stardust texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('/stardust.png')] pointer-events-none" />

      {/* Very subtle warm radial glow behind center (opacity < 6%) */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      
      {/* Additional ambient lighting */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

          {/* Left Column: Editorial Content (45%) */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center items-start text-left order-1">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
              className="text-xs text-[#D4AF37] font-bold tracking-[0.22em] uppercase mb-4 flex items-center gap-2"
            >
              <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
              INTERNATIONAL EXPERTISE
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-[#10254A] mb-4 sm:mb-6 leading-[1.18] tracking-tight"
            >
              Supporting Businesses Across{' '}
              <span className="text-[#D4AF37] font-serif italic font-normal">
                Global Financial Markets
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-base sm:text-lg text-[#667085] font-sans leading-relaxed mb-6 sm:mb-8 font-normal max-w-xl"
            >
              We help accounting firms and businesses navigate international compliance, bookkeeping, payroll and tax requirements with specialized expertise across multiple jurisdictions.
            </motion.p>

            {/* Mobile Compact Global Presence Card (<=768px Only) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="w-full bg-gradient-to-br from-[#132B57] via-[#10254A] to-[#0D1D3A] rounded-[22px] p-5 sm:p-6 border border-[#D4AF37]/35 shadow-[0_12px_35px_rgba(16,37,74,0.18)] my-5 relative overflow-hidden md:hidden"
            >
              {/* Top edge inner gold line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
              
              {/* Micro Accent Gold Dot */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />

              {/* Card Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center shrink-0">
                  <Globe className="w-4.5 h-4.5 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-white font-bold text-xl sm:text-2xl tracking-tight">
                  Global Presence
                </h3>
              </div>

              <div className="w-10 h-[2px] bg-[#D4AF37]/60 mb-4 rounded-full" />

              {/* 3 Compact Country Rows */}
              <div className="space-y-3">
                {/* Row 1: UK */}
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <UKFlag />
                    <span className="text-white font-semibold text-sm font-sans">United Kingdom</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#D4AF37] bg-[#D4AF37]/15 border border-[#D4AF37]/40 px-2.5 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                    <Check className="w-3 h-3 text-[#D4AF37]" /> Operational
                  </span>
                </div>

                {/* Row 2: US */}
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <USFlag />
                    <span className="text-white font-semibold text-sm font-sans">United States</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#D4AF37] bg-[#D4AF37]/15 border border-[#D4AF37]/40 px-2.5 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                    <Check className="w-3 h-3 text-[#D4AF37]" /> Operational
                  </span>
                </div>

                {/* Row 3: AU */}
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2.5">
                    <AUFlag />
                    <span className="text-white font-semibold text-sm font-sans">Australia</span>
                  </div>
                  <span className="text-[10px] font-bold text-[#D4AF37] bg-[#D4AF37]/15 border border-[#D4AF37]/40 px-2.5 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" /> Launching Soon
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Statistics Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 border-t border-[#10254A]/10 pt-6 w-full">
              <StatItem icon={Users} value="Professional" suffix="" label="Expertise" delay={0.3} />
              <StatItem icon={Award} value="ACCA & CA" suffix="" label="Certified Professionals" delay={0.4} />
              <StatItem icon={Globe} value={3} suffix=" Jurisdictions" label="UK, US & Australia" delay={0.5} />
              <StatItem icon={ShieldCheck} value="Cross-Border" suffix="" label="Compliance" delay={0.6} />
            </div>

            {/* Redesigned Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E7DED2] border-t-2 border-t-[#D4AF37] shadow-[0_8px_30px_rgba(16,37,74,0.04)] hover:shadow-[0_15px_35px_rgba(16,37,74,0.08)] transition-all duration-300 mb-8 w-full"
            >
              <div className="flex items-start gap-3.5">
                <Quote className="w-6 h-6 text-[#D4AF37] shrink-0 rotate-180" strokeWidth={1.5} />
                <p className="text-[#10254A] font-serif text-sm sm:text-base leading-relaxed italic font-medium">
                  "Delivering internationally compliant accounting solutions with local expertise and global standards."
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full"
            >
              <Button to="/jurisdictions" variant="primary" className="bg-[#10254A] text-white hover:bg-[#10254A]/90 hover:-translate-y-0.5 transition-all shadow-[0_4px_15px_rgba(16,37,74,0.15)] flex items-center justify-center">
                Explore Jurisdictions
                <ArrowRight className="w-4 h-4 ml-2 text-[#D4AF37]" />
              </Button>
              <p className="hidden sm:block text-xs text-[#667085] leading-relaxed max-w-xs font-medium">
                Discover how our international expertise supports your business across multiple financial ecosystems.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Desktop World Network Visualization (55% - Hidden on Mobile) */}
          <div className="w-full lg:w-[55%] relative h-[420px] sm:h-[520px] md:h-[600px] hidden md:flex items-center justify-center order-2 overflow-hidden lg:overflow-visible">
            
            {/* Network Canvas Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-[650px] h-[650px] flex items-center justify-center scale-[0.55] sm:scale-[0.75] md:scale-[0.9] lg:scale-100 origin-center flex-shrink-0"
            >
              {/* Soft central radial glow */}
              <div className="absolute inset-20 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] rounded-full blur-2xl pointer-events-none" />

              {/* Faint Dotted Orbital Circles */}
              <div className="absolute inset-10 rounded-full border border-[#D4AF37]/20 border-dashed animate-[spin_160s_linear_infinite]" />
              <div className="absolute inset-24 rounded-full border border-[#10254A]/10 animate-[spin_120s_linear_infinite_reverse]" />
              <div className="absolute inset-36 rounded-full border border-[#D4AF37]/15 border-dashed" />

              {/* Abstract Latitude/Longitude Lines */}
              <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#10254A]/10 to-transparent top-1/2 -translate-y-1/2" />
              <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#10254A]/10 to-transparent left-1/2 -translate-x-1/2" />
              <div className="absolute w-[68%] h-[68%] rounded-full border border-[#10254A]/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 transform-gpu" style={{ transformStyle: 'preserve-3d', transform: 'translate(-50%, -50%) rotateX(60deg) rotateZ(45deg)' }} />

              {/* Central Global Accounting Hub Center Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-[-14px] rounded-full border border-[#D4AF37]/35 animate-ping opacity-30" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-[-6px] rounded-full border border-[#D4AF37]/50" />
                  <div className="w-16 h-16 rounded-full bg-[#10254A] border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.35)] flex items-center justify-center">
                    <Globe className="w-8 h-8 text-[#D4AF37] animate-pulse" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Curved Connection Lines from Country Cards to Center Hub */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                <motion.path
                  d="M 160 160 Q 240 220 325 325"
                  fill="none"
                  stroke="rgba(212,175,55,0.5)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.8, delay: 0.4 }}
                />
                <motion.path
                  d="M 490 140 Q 420 210 325 325"
                  fill="none"
                  stroke="rgba(212,175,55,0.5)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.8, delay: 0.6 }}
                />
                <motion.path
                  d="M 480 490 Q 410 420 325 325"
                  fill="none"
                  stroke="rgba(212,175,55,0.5)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.8, delay: 0.8 }}
                />
              </svg>

              {/* Small Gold Network Nodes */}
              <div className="absolute top-[28%] left-[26%] w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37] animate-pulse" />
              <div className="absolute top-[24%] left-[72%] w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37] animate-pulse" />
              <div className="absolute top-[72%] left-[70%] w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37] animate-pulse" />

              {/* Country Cards */}
              <FloatingCard
                title="United States"
                flag={<USFlag />}
                items={["Bookkeeping", "Financial Reporting", "Payroll", "Tax Preparation"]}
                position="top-[8%] left-[2%]"
                delay={0.2}
              />

              <FloatingCard
                title="United Kingdom"
                flag={<UKFlag />}
                items={["Statutory Accounts", "Corporation Tax", "Payroll", "HMRC Compliance"]}
                position="top-[5%] left-[58%]"
                delay={0.4}
              />

              <FloatingCard
                title="Australia"
                flag={<AUFlag />}
                items={["Cloud Accounting", "Bookkeeping", "BAS Compliance"]}
                position="top-[70%] left-[56%]"
                delay={0.6}
              />

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

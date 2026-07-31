import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, CheckCircle2, MapPin, Check } from 'lucide-react';

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

const StatItem = ({ value, suffix, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.2, delay }}
    className="flex flex-col items-center lg:items-start text-center lg:text-left"
  >
    <div className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#07162D] mb-1 group-hover:text-[#D4AF37] transition-colors">
      {typeof value === 'number' ? <CountUp end={value} suffix={suffix} /> : <span>{value}{suffix}</span>}
    </div>
    <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#07162D]/60 uppercase">{label}</div>
  </motion.div>
);

const UKFlag = () => (
  <svg className="w-5 h-3.5 rounded-[2px] shadow-sm shrink-0 border border-[#07162D]/15 inline-block align-middle" viewBox="0 0 600 300">
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
  <svg className="w-5 h-3.5 rounded-[2px] shadow-sm shrink-0 border border-[#07162D]/15 inline-block align-middle" viewBox="0 0 741 390">
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
  <svg className="w-5 h-3.5 rounded-[2px] shadow-sm shrink-0 border border-[#07162D]/15 inline-block align-middle" viewBox="0 0 1200 600">
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
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    animate={{
      y: [0, -10, 0],
      x: [0, 5, 0]
    }}
    transition={{
      default: { duration: 0.2, delay },
      y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      x: { duration: 8, repeat: Infinity, ease: "easeInOut", delay }
    }}
    className={`absolute ${position} z-20 w-52 bg-white/70 backdrop-blur-xl border border-[#07162D]/5 rounded-2xl p-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hidden md:block hover:shadow-[0_25px_50px_-12px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/30 hover:-translate-y-1.5 transition-all duration-200 group`}
  >
    <div className="flex items-center gap-2 mb-3">
      <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
      {flag && <div className="flex items-center shrink-0">{flag}</div>}
      <span className="text-sm font-bold text-[#07162D] tracking-wide group-hover:text-[#D4AF37] transition-colors">{title}</span>
    </div>
    <div className="space-y-2">
      {items.map((item: string, i: number) => (
        <div key={i} className="flex items-center gap-2">
          <Check className="w-3 h-3 text-[#D4AF37]" />
          <span className="text-xs text-[#07162D]/70 font-medium">{item}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

export const GlobalPresence = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 relative overflow-hidden bg-[#F7F3EA]">
      {/* Light Theme Background Effects */}
      <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />

      {/* Soft mesh gradients & glows for Light Theme */}
      <div className="absolute top-0 right-0 w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-[#D4AF37]/10 rounded-full filter blur-[100px] lg:blur-[150px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-[#D4AF37]/15 rounded-full filter blur-[80px] lg:blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Minimal star-like particles (adapted for light theme) */}
      <div className="absolute top-20 left-20 w-1 h-1 bg-[#D4AF37] rounded-full opacity-40 blur-[1px] animate-pulse" />
      <div className="absolute bottom-40 right-1/4 w-1.5 h-1.5 bg-[#D4AF37] rounded-full opacity-30 blur-[2px]" />
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-[#D4AF37] rounded-full opacity-50 blur-[1px] animate-pulse" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-8">

          {/* Left Column: Editorial & Stats (45%) */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2 }}
              className="inline-block px-3 py-1 lg:px-4 lg:py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#07162D] font-bold tracking-[0.2em] uppercase text-[9px] lg:text-[10px] mb-4 lg:mb-8 shadow-premium backdrop-blur-sm"
            >
              International Expertise
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#07162D] mb-4 lg:mb-6 leading-[1.15] tracking-tight text-balance w-[95%] lg:w-full mx-auto lg:mx-0"
            >
              Supporting Businesses Across Global Financial Markets
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="text-[15px] sm:text-lg md:text-xl text-[#07162D]/70 font-sans leading-relaxed mb-6 lg:mb-12 font-medium max-w-[90%] sm:max-w-xl mx-auto lg:mx-0"
            >
              We help accounting firms and businesses navigate international compliance, bookkeeping, payroll and tax requirements with specialized expertise across multiple jurisdictions.
            </motion.p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 lg:gap-y-10 gap-x-4 lg:gap-x-6 mb-6 lg:mb-12 border-t border-[#07162D]/10 pt-6 lg:pt-10 w-full group">
              <StatItem value="Founder-Led" suffix="" label="Expertise" delay={0.3} />
              <StatItem value="ACCA & CA" suffix="" label="Certified Professionals" delay={0.4} />
              <StatItem value={3} suffix="" label="Global Jurisdictions" delay={0.5} />
              <StatItem value="Cross-Border" suffix="" label="Compliance" delay={0.6} />
              <StatItem value="Precision" suffix="" label="Driven Services" delay={0.7} />
            </div>

            {/* Trust Callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: 0.8 }}
              className="bg-white/50 backdrop-blur-xl border border-[#07162D]/10 rounded-2xl p-5 lg:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.15)] hover:-translate-y-1.5 transition-all duration-200 mb-6 lg:mb-12 w-full max-w-[95%] lg:max-w-none mx-auto lg:mx-0"
            >
              <p className="text-[#07162D]/80 font-serif text-[15px] lg:text-lg leading-relaxed italic">
                "Delivering internationally compliant accounting solutions with local expertise and global standards."
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: 0.9 }}
              className="flex flex-col items-center lg:items-start lg:flex-row gap-4 lg:gap-6 w-full"
            >
              <Button to="/jurisdictions" variant="primary">
                Explore Jurisdictions
              </Button>
              <p className="hidden lg:block text-sm text-[#07162D]/70 leading-relaxed max-w-xs font-medium">
                Discover how our international expertise supports your business across multiple financial ecosystems.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Globe Visualization (55%) */}
          <div className="w-full lg:w-[55%] relative h-[280px] sm:h-[350px] md:h-[500px] lg:min-h-full flex items-center justify-center order-1 lg:order-2 overflow-hidden lg:overflow-visible">
            {/* The Globe Canvas Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-[700px] h-[700px] flex items-center justify-center scale-[0.4] sm:scale-[0.5] md:scale-[0.7] lg:scale-100 origin-center flex-shrink-0"
            >
              {/* Core Globe Glow (Light Theme) */}
              <div className="absolute inset-10 bg-[#D4AF37]/10 rounded-full filter blur-[80px]" />
              <div className="absolute inset-20 bg-[#D4AF37]/10 rounded-full filter blur-[60px]" />

              {/* Abstract Globe (CSS representation) */}
              <div className="absolute inset-8 rounded-full border border-[#07162D]/10 border-dashed animate-[spin_120s_linear_infinite]" />
              <div className="absolute inset-16 rounded-full border border-[#07162D]/10 animate-[spin_80s_linear_infinite_reverse]" />

              {/* Latitude/Longitude grid lines abstract */}
              <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#07162D]/10 to-transparent top-1/2 -translate-y-1/2" />
              <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#07162D]/10 to-transparent left-1/2 -translate-x-1/2" />
              <div className="absolute w-[70%] h-[70%] rounded-full border border-[#07162D]/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 transform-gpu" style={{ transformStyle: 'preserve-3d', transform: 'translate(-50%, -50%) rotateX(60deg) rotateZ(45deg)' }} />

              {/* Glowing core */}
              <Globe className="w-32 h-32 text-[#D4AF37]/40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" strokeWidth={1} />

              {/* Central Connection Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ filter: 'drop-shadow(0 0 4px rgba(212,175,55,0.3))' }}>
                <motion.path
                  d="M 25% 35% Q 50% 20% 65% 40%"
                  fill="none"
                  stroke="rgba(212,175,55,0.6)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <motion.path
                  d="M 65% 40% Q 80% 50% 75% 75%"
                  fill="none"
                  stroke="rgba(212,175,55,0.6)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
              </svg>

              {/* Markers & Floating Cards */}

              {/* UK Marker & Card */}
              <div className="absolute top-[35%] left-[60%] md:left-[65%] z-30">
                <div className="relative">
                  <div className="w-4 h-4 bg-[#D4AF37] rounded-full shadow-[0_0_15px_#D4AF37] animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-[#D4AF37]/40 rounded-full animate-ping" />
                </div>
              </div>
              <FloatingCard
                title="United Kingdom"
                flag={<UKFlag />}
                items={["Statutory Accounts", "Corporation Tax", "Payroll", "HMRC Compliance"]}
                position="top-[5%] left-[65%] md:left-[70%]"
                delay={0.2}
              />

              {/* US Marker & Card */}
              <div className="absolute top-[45%] left-[20%] md:left-[25%] z-30">
                <div className="relative">
                  <div className="w-4 h-4 bg-[#D4AF37] rounded-full shadow-[0_0_15px_#D4AF37] animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-[#D4AF37]/40 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                </div>
              </div>
              <FloatingCard
                title="United States"
                flag={<USFlag />}
                items={["Bookkeeping", "Financial Reporting", "Payroll", "Tax Preparation"]}
                position="top-[15%] left-[0%] md:-left-[5%]"
                delay={0.4}
              />

              {/* Australia Marker & Card */}
              <div className="absolute top-[75%] left-[75%] z-30">
                <div className="relative">
                  <div className="w-3 h-3 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37] opacity-70" />
                </div>
              </div>
              <FloatingCard
                title="Australia"
                flag={<AUFlag />}
                items={["Cloud Accounting", "Bookkeeping"]}
                position="top-[80%] left-[65%]"
                delay={0.6}
              />

              {/* Europe Marker */}
              <div className="absolute top-[40%] left-[68%] z-30">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full shadow-[0_0_10px_#D4AF37] opacity-60" />
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Globe, MapPin, Building, Landmark, CheckCircle2, ArrowRight, ShieldCheck, Users, Briefcase, Lock, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const CheckItem = ({ text, colorClass = "text-[#D4AF37]" }) => (
  <div className="flex items-center gap-3">
    <CheckCircle2 className={`w-5 h-5 shrink-0 ${colorClass}`} />
    <span className="text-white/90 font-medium">{text}</span>
  </div>
);

const CheckItemDark = ({ text, colorClass = "text-[#D4AF37]" }) => (
  <div className="flex items-center gap-3">
    <CheckCircle2 className={`w-5 h-5 shrink-0 ${colorClass}`} />
    <span className="text-[#07162D]/90 font-medium">{text}</span>
  </div>
);

const UKFlag = ({ className = "w-5 h-3.5" }: { className?: string }) => (
  <svg className={`${className} shrink-0 border border-black/10 rounded-[2px] inline-block align-middle`} viewBox="0 0 600 300">
    <clipPath id="uk-clip-juri">
      <rect width="600" height="300" />
    </clipPath>
    <g clipPath="url(#uk-clip-juri)">
      <rect width="600" height="300" fill="#012169" />
      <path d="M0,0 L600,300 M600,0 L0,300" stroke="#fff" strokeWidth="60" />
      <path d="M0,0 L600,300 M600,0 L0,300" stroke="#C8102E" strokeWidth="40" />
      <path d="M300,0 V300 M0,150 H600" stroke="#fff" strokeWidth="100" />
      <path d="M300,0 V300 M0,150 H600" stroke="#C8102E" strokeWidth="60" />
    </g>
  </svg>
);

const USFlag = ({ className = "w-5 h-3.5" }: { className?: string }) => (
  <svg className={`${className} shrink-0 border border-black/10 rounded-[2px] inline-block align-middle`} viewBox="0 0 741 390">
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

const AUFlag = ({ className = "w-5 h-3.5" }: { className?: string }) => (
  <svg className={`${className} shrink-0 border border-black/10 rounded-[2px] inline-block align-middle`} viewBox="0 0 1200 600">
    <rect width="1200" height="600" fill="#00008B" />
    <rect width="600" height="300" fill="#012169" />
    <path d="M0,0 L600,300 M600,0 L0,300" stroke="#fff" strokeWidth="60" />
    <path d="M0,0 L600,300 M600,0 L0,300" stroke="#C8102E" strokeWidth="36" />
    <path d="M300,0 V300 M0,150 H600" stroke="#fff" strokeWidth="100" />
    <path d="M300,0 V300 M0,150 H600" stroke="#C8102E" strokeWidth="60" />
    <polygon points="600,0 640,120 760,120 665,195 700,315 600,240 500,315 535,195 440,120 560,120" fill="#fff" />
    <polygon points="900,80 915,125 962,125 924,155 938,200 900,170 862,200 876,155 838,125 885,125" fill="#fff" />
    <polygon points="1050,200 1060,230 1092,230 1066,250 1076,280 1050,260 1024,280 1034,250 1008,230 1040,230" fill="#fff" />
    <polygon points="950,350 965,395 1012,395 974,425 988,470 950,440 912,470 926,425 888,395 935,395" fill="#fff" />
    <polygon points="780,420 790,450 822,450 796,470 806,500 780,480 754,500 764,470 738,450 770,450" fill="#fff" />
  </svg>
);

const CompactJurisdictionCard = ({
  flag,
  title,
  keyword,
  delay,
  className,
}: {
  flag: React.ReactNode;
  title: string;
  keyword: string;
  delay: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay }}
    className={`bg-[#10254A] rounded-[20px] px-4 py-4 sm:px-5 sm:py-5 border border-white/[0.05] shadow-[0_12px_32px_rgba(16,37,74,0.14)] hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(16,37,74,0.22)] hover:border-[#D4AF37]/35 transition-all duration-300 ${className ?? ''}`}
  >
    <div className="mb-3">{flag}</div>
    <h3 className="text-white font-serif text-sm sm:text-base font-bold tracking-tight leading-snug mb-1">
      {title}
    </h3>
    <p className="text-white/75 text-[11px] sm:text-xs font-sans tracking-wide">
      {keyword}
    </p>
  </motion.div>
);

export const Jurisdictions = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  return (
    <div className="flex flex-col">

      <SEO
        title="International Accounting Jurisdictions: UK, US & Australia"
        description="Navigate complex cross-border compliance with our expert accounting services across the United Kingdom, United States, and Australia."
        canonical="/jurisdictions"

        breadcrumbs={[{ "name": "Home", "url": "/" }, { "name": "Jurisdictions", "url": "/jurisdictions" }]}
      />

      {/* 1. Hero Section — Warm Ivory Editorial */}
      <section className="bg-[#F8F5EE] text-[#10254A] pt-40 pb-20 md:pt-48 md:pb-28 lg:pt-52 lg:pb-32 relative overflow-hidden">
        {/* Subtle editorial grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_45%,#000_50%,transparent_100%)] pointer-events-none" />

        {/* Soft warm radial glow behind the visual */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/[0.06] filter blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">

            {/* Left Column (40% / 5 Cols on LG): Editorial Headline & Copy */}
            <div className="lg:col-span-5 max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="w-[2px] h-10 bg-[#D4AF37] shrink-0" aria-hidden="true" />
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-white text-[#10254A] font-bold tracking-[0.2em] uppercase text-[11px] shadow-sm">
                  <Globe className="mr-2 h-3.5 w-3.5 text-[#D4AF37]" />
                  International Reach
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-serif leading-[1.12] mb-6 tracking-tight text-[#10254A]"
              >
                Global Jurisdictions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-[#667085] font-sans leading-relaxed font-normal mb-8"
              >
                Deep regulatory expertise and seamless cross-border accounting support across major international financial markets.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
              >
                <a
                  href="#primary-markets"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('primary-markets');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group inline-flex items-center gap-2.5 text-sm font-bold tracking-wide text-[#10254A] hover:text-[#D4AF37] transition-colors duration-250 cursor-pointer"
                >
                  <span className="relative">
                    Explore Jurisdictions
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
              </motion.div>
            </div>

            {/* Right Column (60% / 7 Cols on LG): Global Network Illustration */}
            <div className="lg:col-span-7 w-full">
              <div className="relative min-h-[560px] sm:min-h-[600px] lg:h-[620px] flex flex-col md:block justify-center items-center gap-6">

                {/* Central SVG Orbit Lines & Connecting Gold Rays */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-[5]" viewBox="0 0 600 600" fill="none">
                  {/* Abstract Faint Orbital Circles */}
                  <circle cx="300" cy="300" r="250" stroke="#D4AF37" strokeWidth="1" opacity="0.08" strokeDasharray="6 6" />
                  <circle cx="300" cy="300" r="180" stroke="#D4AF37" strokeWidth="1" opacity="0.12" />
                  <circle cx="300" cy="300" r="110" stroke="#D4AF37" strokeWidth="1" opacity="0.15" />
                  <ellipse cx="300" cy="300" rx="230" ry="95" stroke="#D4AF37" strokeWidth="0.75" opacity="0.14" transform="rotate(-15 300 300)" />
                  <ellipse cx="300" cy="300" rx="200" ry="120" stroke="#D4AF37" strokeWidth="0.75" opacity="0.12" transform="rotate(30 300 300)" />

                  {/* Connecting Gold Lines from Center (300, 300) to 3 Country Cards */}
                  {/* Line to UK (Top-Left ~ 140, 110) */}
                  <path d="M 300 300 Q 200 180 140 110" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.45" />
                  <circle cx="140" cy="110" r="3.5" fill="#D4AF37" />

                  {/* Line to US (Top-Right ~ 460, 110) */}
                  <path d="M 300 300 Q 400 180 460 110" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.45" />
                  <circle cx="460" cy="110" r="3.5" fill="#D4AF37" />

                  {/* Line to AU (Bottom-Center ~ 300, 480) */}
                  <path d="M 300 300 L 300 480" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.45" />
                  <circle cx="300" cy="480" r="3.5" fill="#D4AF37" />
                </svg>

                {/* Center Hub: Animated Globe Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex flex-col items-center justify-center z-20 pointer-events-none">
                  {/* Animate Orbit Rings */}
                  <div className="absolute w-32 h-32 rounded-full border border-[#D4AF37]/30 animate-ping opacity-30 pointer-events-none" />
                  <div className="absolute w-24 h-24 rounded-full border border-[#D4AF37]/40 animate-pulse pointer-events-none" />

                  {/* Gold Circular Icon with Globe Emoji */}
                  <div className="w-16 h-16 rounded-full bg-[#10254A] border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.35)] flex items-center justify-center text-white text-2xl relative z-10">
                    🌍
                  </div>
                </div>

                {/* Top-Left Card: 🇬🇧 United Kingdom */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="bg-[#10254A] rounded-[24px] p-6 sm:p-7 border border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(16,37,74,0.22)] hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(16,37,74,0.35)] hover:border-[#D4AF37] transition-all duration-300 w-full md:w-[260px] lg:w-[280px] md:absolute md:top-[2%] md:left-[0%] lg:left-[2%] z-30 cursor-default relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <UKFlag className="w-8 h-5 rounded-[3px] shadow-sm" />
                    <span className="text-[11px] font-bold text-[#D4AF37] bg-[#D4AF37]/15 border border-[#D4AF37]/40 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                      Operational
                    </span>
                  </div>
                  <h3 className="font-serif text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
                    United Kingdom
                  </h3>
                  <div className="space-y-2 pt-3 border-t border-white/10 text-xs text-white/80 font-light">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                      <span>Statutory Accounts & Tax</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                      <span>HMRC VAT Compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                      <span>BACS Payroll Management</span>
                    </div>
                  </div>
                </motion.div>

                {/* Top-Right Card: 🇺🇸 United States */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                  className="bg-[#10254A] rounded-[24px] p-6 sm:p-7 border border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(16,37,74,0.22)] hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(16,37,74,0.35)] hover:border-[#D4AF37] transition-all duration-300 w-full md:w-[260px] lg:w-[280px] md:absolute md:top-[2%] md:right-[0%] lg:right-[2%] z-30 cursor-default relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <USFlag className="w-8 h-5 rounded-[3px] shadow-sm" />
                    <span className="text-[11px] font-bold text-[#D4AF37] bg-[#D4AF37]/15 border border-[#D4AF37]/40 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                      Active
                    </span>
                  </div>
                  <h3 className="font-serif text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
                    United States
                  </h3>
                  <div className="space-y-2 pt-3 border-t border-white/10 text-xs text-white/80 font-light">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                      <span>Corporate Tax (Form 1120/1040)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                      <span>Multi-State Payroll & IRS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                      <span>GAAP Financial Reporting</span>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom-Center Card: 🇦🇺 Australia */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.45 }}
                  className="bg-[#10254A] rounded-[24px] p-6 sm:p-7 border border-[#D4AF37]/35 shadow-[0_20px_50px_rgba(16,37,74,0.22)] hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(16,37,74,0.35)] hover:border-[#D4AF37] transition-all duration-300 w-full md:w-[260px] lg:w-[280px] md:absolute md:bottom-[2%] md:left-1/2 md:-translate-x-1/2 z-30 cursor-default relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <AUFlag className="w-8 h-5 rounded-[3px] shadow-sm" />
                    <span className="text-[11px] font-bold text-[#D4AF37] bg-[#D4AF37]/15 border border-[#D4AF37]/40 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                      Launching Soon
                    </span>
                  </div>
                  <h3 className="font-serif text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
                    Australia
                  </h3>
                  <div className="space-y-2 pt-3 border-t border-white/10 text-xs text-white/80 font-light">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                      <span>BAS & GST Return Filing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                      <span>ASIC Corporate Compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                      <span>Cloud Bookkeeping & CFO</span>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Primary Markets - Warm Ivory Editorial Design */}
      <section id="primary-markets" className="py-32 bg-[#F8F5EE] relative overflow-hidden border-b border-[#10254A]/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_45%,#000_50%,transparent_100%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('/stardust.png')] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full filter blur-[150px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-[#10254A] mb-6">Primary Markets</h2>
            <p className="text-lg text-[#667085] leading-relaxed">
              Providing comprehensive accounting and compliance solutions for entities operating within the UK and US.
            </p>
          </div>

          <div className="grid xl:grid-cols-2 gap-12">

            {/* UK Capability Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredCountry('uk')}
              onMouseLeave={() => setHoveredCountry(null)}
              className="group bg-[#10254A] border border-white/[0.06] rounded-[28px] p-8 lg:p-12 shadow-[0_20px_50px_rgba(16,37,74,0.08)] hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(16,37,74,0.2)] hover:border-[#D4AF37] transition-all duration-300 relative overflow-hidden flex flex-col cursor-default"
            >
              {/* Subtle watermark (3% opacity) */}
              <div className="absolute -right-8 -bottom-8 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-300">
                <Landmark className="w-56 h-56" strokeWidth={1} />
              </div>

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-9 border border-white/20 rounded-xl p-1 bg-white/10 backdrop-blur-md shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden shrink-0">
                    <UKFlag className="w-full h-full rounded-[4px]" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-white">United Kingdom</h3>
                </div>

                {/* Active Market Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 shadow-sm shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-[pulse_2s_ease-in-out_infinite]" />
                  <span className="text-xs font-bold tracking-wider uppercase text-[#D4AF37]">Active Market</span>
                </div>
              </div>

              {/* Subtle gold divider below header */}
              <div className="h-[2px] w-16 bg-[#D4AF37] -mt-[1px] relative z-20 mb-8" />

              {/* Content Organisation - Modules */}
              <div className="grid sm:grid-cols-2 gap-8 mb-10 relative z-10 pb-8 border-b border-white/10">
                <div className="space-y-6">
                  {/* Module 1 */}
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#D4AF37] uppercase tracking-wider font-bold mb-1.5">
                      <Landmark className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2} />
                      Regulatory Authority
                    </div>
                    <div className="text-lg font-serif text-white/90">HMRC</div>
                  </div>
                  {/* Module 2 */}
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#D4AF37] uppercase tracking-wider font-bold mb-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2} />
                      Accounting Standards
                    </div>
                    <div className="text-lg font-serif text-white/90">UK GAAP / FRS 102</div>
                  </div>
                </div>

                {/* Module 3: Supported Services (Pills) */}
                <div>
                  <div className="text-xs text-[#D4AF37] uppercase tracking-wider font-bold mb-4">Supported Services</div>
                  <div className="flex flex-wrap gap-2">
                    {["Corporation Tax", "Statutory Accounts", "Payroll & PAYE", "Bookkeeping"].map((service) => (
                      <span
                        key={service}
                        className="px-3.5 py-1.5 rounded-full bg-white/[0.08] text-white text-xs font-medium border border-transparent hover:border-[#D4AF37] hover:bg-white/[0.12] transition-all duration-200 cursor-default"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Half: Stacked Premium Cards */}
              <div className="space-y-4.5 relative z-10">

                {/* Statutory Compliance Card */}
                <div className="bg-[#163663] rounded-[18px] p-5.5 border border-white/[0.04] hover:border-[#D4AF37]/45 transition-all duration-300 group/sub">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-white mb-1.5 group-hover/sub:text-[#D4AF37] transition-colors">Statutory Compliance</h4>
                      <p className="text-white/75 text-sm leading-relaxed font-sans font-normal">
                        Preparation and filing of statutory accounts with Companies House and Corporation Tax returns (CT600) with HMRC, ensuring all deadlines are met without exception.
                      </p>
                    </div>
                  </div>
                </div>

                {/* VAT Management Card */}
                <div className="bg-[#163663] rounded-[18px] p-5.5 border border-white/[0.04] hover:border-[#D4AF37]/45 transition-all duration-300 group/sub">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-white mb-1.5 group-hover/sub:text-[#D4AF37] transition-colors">VAT Management</h4>
                      <p className="text-white/75 text-sm leading-relaxed font-sans font-normal">
                        Making Tax Digital (MTD) compliant VAT return preparation, dealing with complex partial exemption calculations and cross-border VAT issues.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payroll & PAYE Card */}
                <div className="bg-[#163663] rounded-[18px] p-5.5 border border-white/[0.04] hover:border-[#D4AF37]/45 transition-all duration-300 group/sub">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-white mb-1.5 group-hover/sub:text-[#D4AF37] transition-colors">Payroll & PAYE</h4>
                      <p className="text-white/75 text-sm leading-relaxed font-sans font-normal">
                        Comprehensive PAYE administration, Real Time Information (RTI) submissions, and auto-enrolment workplace pension management.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* US Capability Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onMouseEnter={() => setHoveredCountry('us')}
              onMouseLeave={() => setHoveredCountry(null)}
              className="group bg-[#10254A] border border-white/[0.06] rounded-[28px] p-8 lg:p-12 shadow-[0_20px_50px_rgba(16,37,74,0.08)] hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(16,37,74,0.2)] hover:border-[#D4AF37] transition-all duration-300 relative overflow-hidden flex flex-col cursor-default"
            >
              {/* Subtle watermark (3% opacity) */}
              <div className="absolute -right-8 -bottom-8 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-300">
                <Building className="w-56 h-56" strokeWidth={1} />
              </div>

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-9 border border-white/20 rounded-xl p-1 bg-white/10 backdrop-blur-md shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden shrink-0">
                    <USFlag className="w-full h-full rounded-[4px]" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-white">United States</h3>
                </div>

                {/* Active Market Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 shadow-sm shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-[pulse_2s_ease-in-out_infinite]" />
                  <span className="text-xs font-bold tracking-wider uppercase text-[#D4AF37]">Active Market</span>
                </div>
              </div>

              {/* Subtle gold divider below header */}
              <div className="h-[2px] w-16 bg-[#D4AF37] -mt-[1px] relative z-20 mb-8" />

              {/* Content Organisation - Modules */}
              <div className="grid sm:grid-cols-2 gap-8 mb-10 relative z-10 pb-8 border-b border-white/10">
                <div className="space-y-6">
                  {/* Module 1 */}
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#D4AF37] uppercase tracking-wider font-bold mb-1.5">
                      <Building className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2} />
                      Regulatory Authority
                    </div>
                    <div className="text-lg font-serif text-white/90">IRS</div>
                  </div>
                  {/* Module 2 */}
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#D4AF37] uppercase tracking-wider font-bold mb-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2} />
                      Accounting Standards
                    </div>
                    <div className="text-lg font-serif text-white/90">US GAAP</div>
                  </div>
                </div>

                {/* Module 3: Supported Services (Pills) */}
                <div>
                  <div className="text-xs text-[#D4AF37] uppercase tracking-wider font-bold mb-4">Supported Services</div>
                  <div className="flex flex-wrap gap-2">
                    {["Federal & State Tax", "Sales Tax Admin", "Financial Reporting", "Bookkeeping"].map((service) => (
                      <span
                        key={service}
                        className="px-3.5 py-1.5 rounded-full bg-white/[0.08] text-white text-xs font-medium border border-transparent hover:border-[#D4AF37] hover:bg-white/[0.12] transition-all duration-200 cursor-default"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Half: Stacked Premium Cards */}
              <div className="space-y-4.5 relative z-10">

                {/* Federal & State Compliance Card */}
                <div className="bg-[#163663] rounded-[18px] p-5.5 border border-white/[0.04] hover:border-[#D4AF37]/45 transition-all duration-300 group/sub">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-white mb-1.5 group-hover/sub:text-[#D4AF37] transition-colors">Federal & State Compliance</h4>
                      <p className="text-white/75 text-sm leading-relaxed font-sans font-normal">
                        Preparation of federal tax returns (Forms 1120, 1120S, 1065) and navigation of complex state-level tax filings and franchise taxes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sales Tax Administration Card */}
                <div className="bg-[#163663] rounded-[18px] p-5.5 border border-white/[0.04] hover:border-[#D4AF37]/45 transition-all duration-300 group/sub">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-white mb-1.5 group-hover/sub:text-[#D4AF37] transition-colors">Sales Tax Administration</h4>
                      <p className="text-white/75 text-sm leading-relaxed font-sans font-normal">
                        Management of state-by-state economic nexus thresholds and preparation of multi-state sales and use tax returns.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bookkeeping & Reporting Card */}
                <div className="bg-[#163663] rounded-[18px] p-5.5 border border-white/[0.04] hover:border-[#D4AF37]/45 transition-all duration-300 group/sub">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-white mb-1.5 group-hover/sub:text-[#D4AF37] transition-colors">Bookkeeping & Reporting</h4>
                      <p className="text-white/75 text-sm leading-relaxed font-sans font-normal">
                        US GAAP compliant ledger management, specialized reporting for US stakeholders, and seamless management of W-9/1099 vendor compliance.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 3. International Compliance Framework (Warm Ivory) */}
      <section className="py-32 bg-[#F7F3EA] relative overflow-hidden border-y border-[#07162D]/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 filter blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-[#07162D] mb-6">International Compliance Framework</h2>
            <p className="text-lg text-[#07162D]/70 leading-relaxed">
              Our standardized approach to global compliance ensures consistent quality across different regulatory bodies.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 lg:gap-12 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent -translate-y-1/2 z-0" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setHoveredCountry('uk')}
              onMouseLeave={() => setHoveredCountry(null)}
              className="bg-[#07162D] border border-[#07162D]/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex-1 relative z-10 max-w-md w-full mx-auto hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/40 transition-all duration-200 group cursor-default overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#D4AF37]" />
              <div className="text-center mb-8 pb-8 border-b border-white/5">
                <div className="w-16 h-16 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#D4AF37]/20 shadow-[0_4px_15px_rgba(212,175,55,0.1)] group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-transform">
                  <Landmark className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#D4AF37] transition-colors">HMRC</h3>
                <p className="text-sm text-white/50 font-bold uppercase tracking-wide">United Kingdom</p>
              </div>
              <div className="space-y-4">
                <CheckItem text="VAT" />
                <CheckItem text="Corporation Tax" />
                <CheckItem text="Payroll" />
                <CheckItem text="Final Accounts" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: 0.2 }}
              onMouseEnter={() => setHoveredCountry('us')}
              onMouseLeave={() => setHoveredCountry(null)}
              className="bg-[#07162D] border border-[#07162D]/10 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex-1 relative z-10 max-w-md w-full mx-auto hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/40 transition-all duration-200 group cursor-default overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#4F8CFF]" />
              <div className="text-center mb-8 pb-8 border-b border-white/5">
                <div className="w-16 h-16 bg-[#4F8CFF]/10 text-[#4F8CFF] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#4F8CFF]/20 shadow-[0_4px_15px_rgba(79,140,255,0.1)] group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-transform">
                  <Building className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#4F8CFF] transition-colors">IRS</h3>
                <p className="text-sm text-white/50 font-bold uppercase tracking-wide">United States</p>
              </div>
              <div className="space-y-4">
                <CheckItem text="Federal Tax" colorClass="text-[#4F8CFF]" />
                <CheckItem text="Payroll" colorClass="text-[#4F8CFF]" />
                <CheckItem text="Bookkeeping" colorClass="text-[#4F8CFF]" />
                <CheckItem text="Financial Statements" colorClass="text-[#4F8CFF]" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: 0.4 }}
              onMouseEnter={() => setHoveredCountry('au')}
              onMouseLeave={() => setHoveredCountry(null)}
              className="bg-[#102547] border border-white/5 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex-1 relative z-10 max-w-md w-full mx-auto hover:-translate-y-1.5 hover:border-[#D4AF37]/40 transition-all duration-200 group opacity-90 hover:opacity-100 cursor-default overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#2BB673]" />
              <div className="text-center mb-8 pb-8 border-b border-white/5">
                <div className="w-16 h-16 bg-white/5 text-white/40 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10 shadow-[0_4px_15px_rgba(43,182,115,0.1)] group-hover:text-[#2BB673] transition-colors">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-white/60 mb-2 group-hover:text-[#2BB673]">ATO</h3>
                <p className="text-sm text-white/40 font-bold uppercase tracking-wide">Australia</p>
              </div>
              <div className="flex items-center justify-center h-32">
                <span className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 font-bold uppercase tracking-wider text-xs group-hover:text-[#2BB673] group-hover:border-[#D4AF37]/40 transition-colors">
                  Coming Soon
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Expansion Roadmap (Warm Ivory & Deep Navy Roadmap) */}
      <section className="py-32 bg-[#F8F5EE] relative overflow-hidden border-b border-[#10254A]/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_45%,#000_50%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full filter blur-[140px] -translate-y-1/2 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left Column: Context & Header */}
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-1 h-6 bg-[#D4AF37] rounded-full shrink-0" />
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 text-[#D4AF37] font-bold tracking-wider uppercase text-xs shadow-sm">
                  Expansion Roadmap
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#10254A] mb-8">Australia</h2>
              <div className="space-y-6">
                <p className="text-lg text-[#667085] leading-relaxed font-light">
                  ArthaNova Accounts is currently laying the groundwork for our Australian expansion.
                </p>
                <p className="text-lg text-[#667085] leading-relaxed font-light">
                  We are establishing the necessary infrastructure to provide ATO-compliant tax services, BAS preparation, and ASIC statutory reporting. This market will soon benefit from our trademark precision and premium service delivery.
                </p>
              </div>
            </div>

            {/* Right Column: Global Expansion Journey Cards */}
            <div className="relative pl-8 md:pl-10">

              {/* Thin elegant gold connecting path */}
              <div className="absolute left-[13px] md:left-[17px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/80 to-[#D4AF37]/30 pointer-events-none z-0" />

              <div className="space-y-6 relative z-10">

                {/* CARD 1: United Kingdom */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredCountry('uk')}
                  onMouseLeave={() => setHoveredCountry(null)}
                  className="relative group cursor-default"
                >
                  {/* Glowing Node */}
                  <div className="absolute -left-[27px] md:-left-[31px] top-6 w-4 h-4 rounded-full bg-[#D4AF37] border-2 border-[#F8F5EE] shadow-[0_0_12px_#D4AF37] z-20 group-hover:scale-125 transition-transform duration-300" />

                  <div className="bg-[#10254A] border border-white/[0.06] rounded-[24px] p-6 md:p-7 shadow-[0_20px_50px_rgba(16,37,74,0.12)] hover:-translate-y-1.5 hover:border-[#D4AF37] hover:shadow-[0_30px_60px_rgba(16,37,74,0.25)] transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-7 border border-white/20 rounded-lg p-0.5 bg-white/10 backdrop-blur-md shadow-sm shrink-0 flex items-center justify-center overflow-hidden">
                          <UKFlag className="w-full h-full rounded-[2px]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-serif text-white group-hover:text-[#D4AF37] transition-colors">United Kingdom</h3>
                          <p className="text-xs text-white/78 font-sans font-light">Established Primary Market</p>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-semibold tracking-wide">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.5} />
                        <span>Operational</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CARD 2: United States */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  onMouseEnter={() => setHoveredCountry('us')}
                  onMouseLeave={() => setHoveredCountry(null)}
                  className="relative group cursor-default"
                >
                  {/* Glowing Node */}
                  <div className="absolute -left-[27px] md:-left-[31px] top-6 w-4 h-4 rounded-full bg-[#D4AF37] border-2 border-[#F8F5EE] shadow-[0_0_12px_#D4AF37] z-20 group-hover:scale-125 transition-transform duration-300" />

                  <div className="bg-[#10254A] border border-white/[0.06] rounded-[24px] p-6 md:p-7 shadow-[0_20px_50px_rgba(16,37,74,0.12)] hover:-translate-y-1.5 hover:border-[#D4AF37] hover:shadow-[0_30px_60px_rgba(16,37,74,0.25)] transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-7 border border-white/20 rounded-lg p-0.5 bg-white/10 backdrop-blur-md shadow-sm shrink-0 flex items-center justify-center overflow-hidden">
                          <USFlag className="w-full h-full rounded-[2px]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-serif text-white group-hover:text-[#D4AF37] transition-colors">United States</h3>
                          <p className="text-xs text-white/78 font-sans font-light">Established Primary Market</p>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-semibold tracking-wide">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.5} />
                        <span>Operational</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* CARD 3: Australia (Slightly Larger Highlighted Card) */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  onMouseEnter={() => setHoveredCountry('au')}
                  onMouseLeave={() => setHoveredCountry(null)}
                  className="relative group cursor-default"
                >
                  {/* Active Glowing Halo behind Australia card */}
                  <div className="absolute -inset-1.5 bg-[#D4AF37]/20 rounded-[28px] filter blur-xl opacity-75 pointer-events-none group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Active Glowing Node with pulse */}
                  <div className="absolute -left-[29px] md:-left-[33px] top-8 w-5 h-5 rounded-full bg-[#D4AF37] border-2 border-[#F8F5EE] shadow-[0_0_16px_#D4AF37] z-20 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10254A] animate-ping" />
                  </div>

                  <div className="bg-[#10254A] border border-[#D4AF37]/40 rounded-[24px] p-7 md:p-8 shadow-[0_25px_60px_rgba(16,37,74,0.18)] hover:-translate-y-1.5 hover:border-[#D4AF37] hover:shadow-[0_35px_75px_rgba(16,37,74,0.3)] transition-all duration-300 relative z-10">

                    {/* Header Row */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                      <div className="flex items-center gap-4">
                        <div className="w-11 h-8 border border-white/20 rounded-lg p-0.5 bg-white/10 backdrop-blur-md shadow-sm shrink-0 flex items-center justify-center overflow-hidden">
                          <AUFlag className="w-full h-full rounded-[2px]" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-serif text-white">Australia</h3>
                          <p className="text-xs text-white/78 font-sans font-light">Strategic Expansion Jurisdiction</p>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold uppercase tracking-wider shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-[pulse_2s_ease-in-out_infinite]" />
                        <span>Launching Soon</span>
                      </div>
                    </div>

                    {/* Progress Chips (Horizontal) */}
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] mb-3">Milestone Progress</div>
                      <div className="flex flex-wrap gap-2.5">
                        <div className="px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.06] text-white/90 text-xs font-medium flex items-center gap-2 hover:border-[#D4AF37]/40 transition-colors">
                          <span className="text-[#D4AF37]">📋</span>
                          <span>Planning</span>
                        </div>
                        <div className="px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.06] text-white/90 text-xs font-medium flex items-center gap-2 hover:border-[#D4AF37]/40 transition-colors">
                          <span className="text-[#D4AF37]">🏗</span>
                          <span>Infrastructure</span>
                        </div>
                        <div className="px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.06] text-white/90 text-xs font-medium flex items-center gap-2 hover:border-[#D4AF37]/40 transition-colors">
                          <span className="text-[#D4AF37]">✓</span>
                          <span>ATO Compliance</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Why Businesses Trust Our Global Expertise (Warm Ivory) */}
      <section className="py-32 bg-[#F7F3EA] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-[#07162D] mb-6 drop-shadow-sm">Why Businesses Trust Our Global Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-[#0B1D38] border border-[#07162D]/10 hover:border-[#D4AF37]/40 hover:bg-[#102547] transition-all duration-200 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] hover:-translate-y-1.5 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-transform duration-200">
                <Globe className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#D4AF37] transition-colors">International Compliance</h3>
              <p className="text-sm text-white/70 leading-relaxed font-light">Navigating complex multi-jurisdictional regulations with pinpoint accuracy and proactive monitoring.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="bg-[#0B1D38] border border-[#07162D]/10 hover:border-[#D4AF37]/40 hover:bg-[#102547] transition-all duration-200 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] hover:-translate-y-1.5 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-transform duration-200">
                <Users className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#D4AF37] transition-colors">Dedicated Specialists</h3>
              <p className="text-sm text-white/70 leading-relaxed font-light">Access to highly trained professionals with specific regional certifications and market expertise.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
              className="bg-[#0B1D38] border border-[#07162D]/10 hover:border-[#D4AF37]/40 hover:bg-[#102547] transition-all duration-200 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] hover:-translate-y-1.5 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-transform duration-200">
                <Briefcase className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#D4AF37] transition-colors">Cross-Border Advisory</h3>
              <p className="text-sm text-white/70 leading-relaxed font-light">Strategic financial reporting and planning for businesses operating in multiple countries.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3 }}
              className="bg-[#0B1D38] border border-[#07162D]/10 hover:border-[#D4AF37]/40 hover:bg-[#102547] transition-all duration-200 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] hover:-translate-y-1.5 group"
            >
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-transform duration-200">
                <Lock className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#D4AF37] transition-colors">Secure Collaboration</h3>
              <p className="text-sm text-white/70 leading-relaxed font-light">Enterprise-grade security protocols protecting your sensitive international financial data.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Premium Centered CTA (Warm Ivory Background with Deep Navy Container) */}
      <section className="py-24 md:py-32 bg-[#F8F5EE] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_45%,#000_50%,transparent_100%)] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            className="max-w-[1100px] mx-auto bg-[#10254A] border border-white/[0.08] rounded-[28px] py-16 px-6 sm:px-10 md:py-24 md:px-16 shadow-[0_25px_60px_rgba(16,37,74,0.15)] relative overflow-hidden text-center"
          >
            {/* Subtle radial glow behind heading */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 filter blur-[100px] rounded-full pointer-events-none" />

            {/* Thin abstract gold curved lines */}
            <svg className="absolute -top-12 -right-12 w-96 h-96 text-[#D4AF37] opacity-[0.04] pointer-events-none" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <svg className="absolute -bottom-16 -left-16 w-96 h-96 text-[#D4AF37] opacity-[0.04] pointer-events-none" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="1.2" />
            </svg>

            {/* Tiny glowing gold particles */}
            <div className="absolute top-8 left-1/4 w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-40 blur-[0.5px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-12 right-1/4 w-2 h-2 rounded-full bg-[#D4AF37] opacity-50 blur-[0.5px] animate-pulse pointer-events-none" />
            <div className="absolute top-1/3 right-12 w-1 h-1 rounded-full bg-[#D4AF37] opacity-60 pointer-events-none" />
            <div className="absolute bottom-1/3 left-12 w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-35 pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.15] tracking-tight">
                Ready to Expand Across Borders?
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 font-light max-w-[700px] mx-auto">
                Partner with ArthaNova Accounts to simplify international accounting, tax compliance and financial reporting across multiple jurisdictions.
              </p>

              {/* Trust Chips (Horizontal Rounded Pills) */}
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#163663]/60 border border-[#D4AF37]/30 text-white text-xs md:text-sm font-medium shadow-sm hover:border-[#D4AF37]/60 transition-colors cursor-default">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>UK Compliance</span>
                </div>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#163663]/60 border border-[#D4AF37]/30 text-white text-xs md:text-sm font-medium shadow-sm hover:border-[#D4AF37]/60 transition-colors cursor-default">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>US Compliance</span>
                </div>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#163663]/60 border border-[#D4AF37]/30 text-white text-xs md:text-sm font-medium shadow-sm hover:border-[#D4AF37]/60 transition-colors cursor-default">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Future Expansion</span>
                </div>
              </div>

              {/* Primary Button */}
              <div className="flex justify-center mb-6">
                <Button
                  to="/contact"
                  variant="primary"
                  className="bg-[#D4AF37] text-[#10254A] hover:bg-[#E5C158] px-9 py-4 rounded-full font-semibold text-base md:text-lg shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
                >
                  Start a Conversation
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Optional Subtext */}
              <p className="text-xs md:text-sm text-white/70 font-light tracking-wide max-w-lg mx-auto">
                Trusted by accounting firms and businesses across multiple international jurisdictions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

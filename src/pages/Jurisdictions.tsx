import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Globe, MapPin, Building, Landmark, CheckCircle2, ArrowRight, ShieldCheck, Users, Briefcase, Lock, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const TrustMetric = ({ title, subtitle, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2, delay }}
    className="bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-4 md:p-6 flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:bg-white/10 transition-colors duration-200"
  >
    <span className="text-2xl md:text-3xl font-serif text-white mb-1 group-hover:text-[#D4AF37] transition-colors">{title}</span>
    <span className="text-xs text-white/50 uppercase tracking-wider font-bold">{subtitle}</span>
  </motion.div>
);

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

const MapNode = ({ top, left, delay, active }: { top: string, left: string, delay: string, active: boolean }) => (
  <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top, left }}>
    {/* Outer pulse */}
    <div 
      className={`absolute inset-[-6px] rounded-full bg-[#D4AF37]/30 transition-all duration-200 
        ${active ? 'animate-none scale-150 opacity-60' : 'animate-ping opacity-70'}`} 
      style={{ animationDelay: delay, animationDuration: '4s' }} 
    />
    {/* Core node */}
    <div 
      className={`relative w-3.5 h-3.5 rounded-full transition-all duration-200 flex items-center justify-center 
        ${active ? 'bg-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.8)] scale-125' : 'bg-[#D4AF37]/80 shadow-[0_0_15px_rgba(212,175,55,0.4)]'}`}
    >
      <div className={`w-1.5 h-1.5 bg-[#0B1D38] rounded-full transition-opacity duration-200 ${active ? 'opacity-100' : 'opacity-70'}`} />
    </div>
  </div>
);

export const Jurisdictions = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  return (
    <div className="flex flex-col">

      <SEO 
        title="International Accounting Jurisdictions: UK, US & Australia"
        description="Navigate complex cross-border compliance with our expert accounting services across the United Kingdom, United States, and Australia."
        canonical="/jurisdictions"
      
        breadcrumbs={[{"name":"Home","url":"/"},{"name":"Jurisdictions","url":"/jurisdictions"}]}
      />

      {/* 1. Hero Section (Deep Navy Gradient) */}
      <section className="bg-gradient-to-b from-[#102547] via-[#0B1D38] to-[#07162D] text-white pt-48 pb-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4AF37]/10 rounded-full filter blur-[150px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full filter blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        
        {/* Floating Map Container */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] pointer-events-none">
          <motion.div 
            animate={{ y: [-8, 8, -8] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full relative"
          >
            {/* Ambient Map Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#3378D8]/10 filter blur-[100px] rounded-[100%] opacity-40" />
            
            <svg viewBox="0 0 1000 500" className="w-full h-full fill-white/5 stroke-white/10" strokeWidth="0.5">
              <path d="M450,150 Q480,140 500,160 T520,200 Q500,220 480,210 Z" />
              <path d="M150,200 Q200,180 250,220 T280,300 Q200,350 180,250 Z" />
              <path d="M800,350 Q850,320 880,380 T820,450 Q780,400 800,350 Z" />
            </svg>

            {/* Connection Lines */}
            <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full">
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* UK to US */}
              <path d="M 480 150 Q 365 100 250 200" fill="none" stroke="#D4AF37" strokeWidth="1" className={`transition-all duration-200 ${hoveredCountry === 'uk' || hoveredCountry === 'us' ? 'opacity-50' : 'opacity-15'}`} />
              <path d="M 480 150 Q 365 100 250 200" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="40 1000" filter="url(#glow)" className={`transition-opacity duration-200 ${hoveredCountry === 'uk' || hoveredCountry === 'us' ? 'opacity-100' : 'opacity-30'}`}>
                <animate attributeName="stroke-dashoffset" from="1040" to="0" dur="4s" repeatCount="indefinite" />
              </path>
              
              {/* UK to AU */}
              <path d="M 480 150 Q 650 300 820 350" fill="none" stroke="#D4AF37" strokeWidth="1" className={`transition-all duration-200 ${hoveredCountry === 'uk' || hoveredCountry === 'au' ? 'opacity-50' : 'opacity-15'}`} />
              <path d="M 480 150 Q 650 300 820 350" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="40 1000" filter="url(#glow)" className={`transition-opacity duration-200 ${hoveredCountry === 'uk' || hoveredCountry === 'au' ? 'opacity-100' : 'opacity-30'}`}>
                <animate attributeName="stroke-dashoffset" from="1040" to="0" dur="5s" repeatCount="indefinite" />
              </path>

              {/* US to AU */}
              <path d="M 250 200 Q 535 450 820 350" fill="none" stroke="#D4AF37" strokeWidth="1" className={`transition-all duration-200 ${hoveredCountry === 'us' || hoveredCountry === 'au' ? 'opacity-50' : 'opacity-15'}`} />
              <path d="M 250 200 Q 535 450 820 350" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="40 1000" filter="url(#glow)" className={`transition-opacity duration-200 ${hoveredCountry === 'us' || hoveredCountry === 'au' ? 'opacity-100' : 'opacity-30'}`}>
                <animate attributeName="stroke-dashoffset" from="1040" to="0" dur="6s" repeatCount="indefinite" />
              </path>
            </svg>

            {/* Nodes */}
            <MapNode top="30%" left="48%" delay="0s" active={hoveredCountry === 'uk'} />
            <MapNode top="40%" left="25%" delay="1s" active={hoveredCountry === 'us'} />
            <MapNode top="70%" left="82%" delay="2s" active={hoveredCountry === 'au'} />
            
            {/* Ambient particles (very subtle) */}
            <div className="absolute top-[35%] left-[30%] w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute top-[60%] left-[55%] w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }} />
            <div className="absolute top-[45%] left-[70%] w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '6s' }} />
          </motion.div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-8 shadow-premium backdrop-blur-sm"
              >
                <Globe className="mr-2 h-4 w-4" />
                International Reach
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
                className="text-5xl md:text-7xl font-serif leading-[1.15] mb-8 tracking-tight text-white drop-shadow-sm"
              >
                Global Jurisdictions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
                className="text-xl md:text-2xl text-white/70 font-sans leading-relaxed mb-12 font-light"
              >
                Deep regulatory expertise and strict compliance across major international financial markets.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <TrustMetric title="3" subtitle="Global Jurisdictions" delay={0.3} />
              <TrustMetric title="ACCA & CA" subtitle="Certified" delay={0.4} />
              <TrustMetric title="Founder-Led" subtitle="Expertise" delay={0.5} />
              <TrustMetric title="Cross-Border" subtitle="Compliance" delay={0.6} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Primary Markets (Deep Navy) */}
      <section className="py-32 bg-[#0B1D38] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />
        
        {/* Soft radial glows (< 6% opacity) */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Primary Markets</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Providing comprehensive accounting and compliance solutions for entities operating within the UK and US.
            </p>
          </div>

          <div className="grid xl:grid-cols-2 gap-12">
            {/* UK Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setHoveredCountry('uk')}
              onMouseLeave={() => setHoveredCountry(null)}
              className="group primary-market-card p-8 lg:p-12 relative overflow-hidden flex flex-col cursor-default"
            >
              {/* Soft white top-left reflection */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none rounded-[28px] group-hover:from-white/[0.14] transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              {/* Specular top rim line */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none rounded-t-[28px]" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 relative z-10">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-9 border border-white/20 rounded-xl p-1 bg-white/10 backdrop-blur-md shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden shrink-0">
                    <UKFlag className="w-full h-full rounded-[4px]" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-white group-hover:text-[#D4AF37] transition-colors duration-300">United Kingdom</h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full active-market-badge shadow-sm shrink-0">
                  <UKFlag className="w-4 h-2.5 rounded-[2px]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-[pulse_2s_ease-in-out_infinite]" />
                  <span className="text-xs font-semibold tracking-wide text-white/90">Active Market</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 mb-12 relative z-10 pb-10 border-b border-white/10">
                <div className="space-y-6">
                  <div>
                    <div className="text-xs text-white/50 uppercase tracking-wider font-bold mb-1">Regulatory Authority</div>
                    <div className="text-lg font-serif text-white">HMRC</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/50 uppercase tracking-wider font-bold mb-1">Accounting Standards</div>
                    <div className="text-lg font-serif text-white">UK GAAP / FRS 102</div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-bold mb-4">Supported Services</div>
                  <div className="space-y-3">
                    <CheckItem text="Corporation Tax" colorClass="text-[#D4AF37]" />
                    <CheckItem text="Statutory Accounts" colorClass="text-[#D4AF37]" />
                    <CheckItem text="Payroll & PAYE" colorClass="text-[#D4AF37]" />
                    <CheckItem text="Bookkeeping" colorClass="text-[#D4AF37]" />
                  </div>
                </div>
              </div>

              <div className="space-y-8 relative z-10">
                <div>
                  <h4 className="font-serif text-xl text-white mb-3">Statutory Compliance</h4>
                  <p className="text-white/70 leading-relaxed font-light">
                    Preparation and filing of statutory accounts with Companies House and Corporation Tax returns (CT600) with HMRC, ensuring all deadlines are met without exception.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white mb-3">VAT Management</h4>
                  <p className="text-white/70 leading-relaxed font-light">
                    Making Tax Digital (MTD) compliant VAT return preparation, dealing with complex partial exemption calculations and cross-border VAT issues.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white mb-3">Payroll & PAYE</h4>
                  <p className="text-white/70 leading-relaxed font-light">
                    Comprehensive PAYE administration, Real Time Information (RTI) submissions, and auto-enrolment workplace pension management.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* US Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.2, delay: 0.2 }}
              onMouseEnter={() => setHoveredCountry('us')}
              onMouseLeave={() => setHoveredCountry(null)}
              className="group primary-market-card p-8 lg:p-12 relative overflow-hidden flex flex-col cursor-default"
            >
              {/* Soft white top-left reflection */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none rounded-[28px] group-hover:from-white/[0.14] transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              {/* Specular top rim line */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none rounded-t-[28px]" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 relative z-10">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-9 border border-white/20 rounded-xl p-1 bg-white/10 backdrop-blur-md shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center overflow-hidden shrink-0">
                    <USFlag className="w-full h-full rounded-[4px]" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-white group-hover:text-[#3B82F6] transition-colors duration-300">United States</h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full active-market-badge shadow-sm shrink-0">
                  <USFlag className="w-4 h-2.5 rounded-[2px]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-[pulse_2s_ease-in-out_infinite]" />
                  <span className="text-xs font-semibold tracking-wide text-white/90">Active Market</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 mb-12 relative z-10 pb-10 border-b border-white/10">
                <div className="space-y-6">
                  <div>
                    <div className="text-xs text-white/50 uppercase tracking-wider font-bold mb-1">Regulatory Authority</div>
                    <div className="text-lg font-serif text-white">IRS</div>
                  </div>
                  <div>
                    <div className="text-xs text-white/50 uppercase tracking-wider font-bold mb-1">Accounting Standards</div>
                    <div className="text-lg font-serif text-white">US GAAP</div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-bold mb-4">Supported Services</div>
                  <div className="space-y-3">
                    <CheckItem text="Federal & State Tax" colorClass="text-[#3B82F6]" />
                    <CheckItem text="Sales Tax Admin" colorClass="text-[#3B82F6]" />
                    <CheckItem text="Financial Reporting" colorClass="text-[#3B82F6]" />
                    <CheckItem text="Bookkeeping" colorClass="text-[#3B82F6]" />
                  </div>
                </div>
              </div>

              <div className="space-y-8 relative z-10">
                <div>
                  <h4 className="font-serif text-xl text-white mb-3">Federal & State Compliance</h4>
                  <p className="text-white/70 leading-relaxed font-light">
                    Preparation of federal tax returns (Forms 1120, 1120S, 1065) and navigation of complex state-level tax filings and franchise taxes.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white mb-3">Sales Tax Administration</h4>
                  <p className="text-white/70 leading-relaxed font-light">
                    Management of state-by-state economic nexus thresholds and preparation of multi-state sales and use tax returns.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-white mb-3">Bookkeeping & Reporting</h4>
                  <p className="text-white/70 leading-relaxed font-light">
                    US GAAP compliant ledger management, specialized reporting for US stakeholders, and seamless management of W-9/1099 vendor compliance.
                  </p>
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

      {/* 4. Expansion Roadmap (Deep Navy) */}
      <section className="py-32 bg-[#102547] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full filter blur-[120px] -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <div>
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] font-bold tracking-wider uppercase text-xs mb-6 shadow-premium">
                Expansion Roadmap
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Australia</h2>
              <div className="space-y-6">
                <p className="text-lg text-white/70 leading-relaxed font-light">
                  ArthaNovaccounts is currently laying the groundwork for our Australian expansion.
                </p>
                <p className="text-lg text-white/70 leading-relaxed font-light">
                  We are establishing the necessary infrastructure to provide ATO-compliant tax services, BAS preparation, and ASIC statutory reporting. This market will soon benefit from our trademark precision and premium service delivery.
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[27px] top-4 bottom-4 w-[1.5px] bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/30 to-transparent" />
              
              <div className="space-y-12">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  onMouseEnter={() => setHoveredCountry('uk')}
                  onMouseLeave={() => setHoveredCountry(null)}
                  className="flex items-start gap-8 relative group cursor-default"
                >
                  <div className="w-14 h-14 bg-[#0B1D38] border border-[#D4AF37] rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.3)] z-10 relative group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-transform">
                    <Check className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div className="pt-3">
                    <h4 className="text-xl font-serif text-white mb-1 group-hover:text-[#D4AF37] transition-colors">United Kingdom</h4>
                    <p className="text-sm font-bold text-[#D4AF37]/80 uppercase tracking-wider">Fully Operational</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1 }}
                  onMouseEnter={() => setHoveredCountry('us')}
                  onMouseLeave={() => setHoveredCountry(null)}
                  className="flex items-start gap-8 relative group cursor-default"
                >
                  <div className="w-14 h-14 bg-[#0B1D38] border border-[#4F8CFF] rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(79,140,255,0.3)] z-10 relative group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-transform">
                    <Check className="w-6 h-6 text-[#4F8CFF]" />
                  </div>
                  <div className="pt-3">
                    <h4 className="text-xl font-serif text-white mb-1 group-hover:text-[#4F8CFF] transition-colors">United States</h4>
                    <p className="text-sm font-bold text-[#4F8CFF]/80 uppercase tracking-wider">Fully Operational</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.2 }}
                  onMouseEnter={() => setHoveredCountry('au')}
                  onMouseLeave={() => setHoveredCountry(null)}
                  className="flex items-start gap-8 relative group cursor-default"
                >
                  <div className="w-14 h-14 bg-[#0B1D38] border border-white/20 rounded-full flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(0,0,0,0.5)] z-10 relative group-hover:border-[#2BB673]/50 transition-colors">
                    <div className="w-3 h-3 bg-[#2BB673] rounded-full animate-pulse" />
                  </div>
                  <div className="pt-3">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-serif text-white/60 group-hover:text-white transition-colors">Australia</h4>
                      <span className="px-3 py-1 rounded-full bg-[#2BB673]/10 text-[#2BB673] text-[10px] font-bold uppercase tracking-wider border border-[#2BB673]/30">Launching Soon</span>
                    </div>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center gap-2 text-sm text-white/50 font-light">
                        <ArrowRight className="w-4 h-4 text-[#2BB673]/60" /> Planning
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/50 font-light">
                        <ArrowRight className="w-4 h-4 text-[#2BB673]/60" /> Infrastructure
                      </li>
                      <li className="flex items-center gap-2 text-sm text-white/50 font-light">
                        <ArrowRight className="w-4 h-4 text-[#2BB673]/60" /> ATO Compliance
                      </li>
                    </ul>
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

      {/* 6. Premium CTA (Deep Navy to Core Navy) */}
      <section className="py-32 bg-gradient-to-br from-[#102547] to-[#07162D] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/10 filter blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-[1.15]">
              Ready to Expand Across Borders?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10 font-light">
              Partner with ArthaNovaccounts to simplify international accounting, tax compliance and financial reporting across multiple jurisdictions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                <span className="font-medium tracking-wide">UK Compliance</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                <span className="font-medium tracking-wide">US Compliance</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                <span className="font-medium tracking-wide">Future Expansion</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button to="/contact" variant="primary">
                Start a Conversation
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1 inline-block" />
              </Button>
              <Button to="/contact" variant="outline" className="border-white/20 text-white hover:bg-white/5 px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all hover:border-[#D4AF37]/50">
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

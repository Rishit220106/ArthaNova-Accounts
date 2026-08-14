import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { CtaBanner } from '../components/ui/CtaBanner';
import { FileText, LayoutDashboard, Calculator, CheckCircle2, Building2, BarChart3, TrendingUp, Calendar, ArrowRight, ShieldCheck, PieChart, Users, LineChart, FileCheck, DollarSign, ClipboardCheck, ClipboardList, Target, Send, BookOpen, Folder, Landmark, FileSearch, Archive, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Services = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    }
  }, [location.hash]);
  return (
    <div className="flex flex-col">

      <SEO
        title="Premium Accounting & Bookkeeping Services"
        description="Comprehensive financial solutions including bookkeeping, payroll management, corporate tax returns, and statutory compliance for global businesses."
        canonical="/services"
        schema={`{"@context":"https://schema.org","@type":"Service","name":"International Accounting & Bookkeeping Services","provider":{"@type":"AccountingService","name":"ArthaNova Accounts"},"areaServed":["UK","US","Australia"],"hasOfferCatalog":{"@type":"OfferCatalog","name":"Accounting Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Bookkeeping & Management Accounts"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Payroll Management"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Statutory Accounts & Financial Reporting"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Corporate Tax Returns & Planning"}}]}}`}

        breadcrumbs={[{ "name": "Home", "url": "/" }, { "name": "Services", "url": "/services" }]}
      />

      {/* Page Hero - Warm Ivory Editorial Design */}
      <section className="bg-[#F8F5EE] text-[#10254A] pt-40 pb-20 md:pt-48 md:pb-28 lg:pt-52 lg:pb-32 relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_45%,#000_50%,transparent_100%)] pointer-events-none" />

        {/* Faint stardust texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('/stardust.png')] pointer-events-none" />

        {/* Subtle world illustration background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none overflow-hidden">
          <svg className="w-[1200px] h-[600px] text-[#10254A]" viewBox="0 0 1000 500" fill="none" stroke="currentColor">
            {/* Faint globe grid & continent arc lines */}
            <circle cx="500" cy="250" r="220" strokeWidth="1" strokeDasharray="4 4" />
            <ellipse cx="500" cy="250" rx="220" ry="90" strokeWidth="1" strokeDasharray="4 4" />
            <ellipse cx="500" cy="250" rx="220" ry="160" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="500" y1="30" x2="500" y2="470" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="280" y1="250" x2="720" y2="250" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M180,160 Q260,110 320,150 T440,160 T520,130" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M580,120 Q680,90 780,150 T880,180" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M220,320 Q320,290 420,330 T540,320" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M640,330 Q740,310 840,360" strokeWidth="1" strokeDasharray="3 3" />
          </svg>
        </div>

        {/* Ambient subtle gold radial glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Editorial Headline & Value Proposition */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xs text-[#D4AF37] font-bold tracking-[0.22em] uppercase mb-5 flex items-center gap-2"
              >
                <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
                SERVICES & SOLUTIONS
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-serif text-[#10254A] leading-[1.12] mb-6 tracking-tight"
              >
                Accounting Expertise<br />
                Built Around{' '}
                <span className="text-[#D4AF37] font-serif italic font-normal">
                  Your Business
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-[#667085] font-sans leading-relaxed max-w-xl font-normal"
              >
                From bookkeeping and payroll to taxation and financial reporting, our services are tailored to help businesses operate with confidence across the UK, US and Australia.
              </motion.p>
            </div>

            {/* Right Column: Three Staggered Deep Navy Cards */}
            <div className="lg:col-span-6 w-full">
              <div className="relative min-h-[600px] sm:min-h-[620px] lg:h-[620px] flex flex-col md:block justify-center gap-5 md:gap-0">

                {/* Card 1 - Bookkeeping (Top Right) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: [0, -3, 0]
                  }}
                  transition={{
                    opacity: { duration: 0.3, delay: 0.2 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  onClick={() => document.getElementById('bookkeeping')?.scrollIntoView({ behavior: 'smooth' })}
                  className="md:absolute md:top-[15px] md:right-4 lg:right-6 md:w-[280px] lg:w-[310px] z-20 bg-[#10254A] rounded-[24px] p-6 sm:p-7 border border-[#D4AF37]/20 shadow-[0_20px_40px_rgba(16,37,74,0.18)] hover:border-[#D4AF37] hover:shadow-[0_25px_50px_rgba(16,37,74,0.3)] transition-all duration-300 relative overflow-hidden group cursor-pointer"
                >
                  {/* Subtle watermark graphic */}
                  <div className="absolute -right-3 -bottom-3 opacity-[0.04] text-white pointer-events-none group-hover:opacity-[0.07] transition-opacity duration-300">
                    <Calculator className="w-28 h-28" strokeWidth={1} />
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center mb-3.5 shrink-0">
                    <Calculator className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                  </div>
                  <div className="w-8 h-[2px] bg-[#D4AF37] mb-3.5 rounded-full" />
                  <h3 className="text-white font-serif text-lg sm:text-xl font-bold mb-1.5 tracking-tight">
                    Bookkeeping
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                    Accurate bookkeeping tailored for growing businesses.
                  </p>
                </motion.div>

                {/* Card 2 - Payroll (Middle Left) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: [0, -3, 0]
                  }}
                  transition={{
                    opacity: { duration: 0.3, delay: 0.3 },
                    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
                  }}
                  onClick={() => document.getElementById('payroll')?.scrollIntoView({ behavior: 'smooth' })}
                  className="md:absolute md:top-[215px] md:left-[-20px] lg:left-[-40px] md:w-[280px] lg:w-[310px] z-30 bg-[#10254A] rounded-[24px] p-6 sm:p-7 border border-[#D4AF37]/20 shadow-[0_20px_40px_rgba(16,37,74,0.18)] hover:border-[#D4AF37] hover:shadow-[0_25px_50px_rgba(16,37,74,0.3)] transition-all duration-300 relative overflow-hidden group cursor-pointer"
                >
                  {/* Subtle watermark graphic */}
                  <div className="absolute -right-3 -bottom-3 opacity-[0.04] text-white pointer-events-none group-hover:opacity-[0.07] transition-opacity duration-300">
                    <Users className="w-28 h-28" strokeWidth={1} />
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center mb-3.5 shrink-0">
                    <Users className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                  </div>
                  <div className="w-8 h-[2px] bg-[#D4AF37] mb-3.5 rounded-full" />
                  <h3 className="text-white font-serif text-lg sm:text-xl font-bold mb-1.5 tracking-tight">
                    Payroll
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                    Reliable payroll management with full compliance.
                  </p>
                </motion.div>

                {/* Card 3 - Taxation (Bottom Right) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: [0, -3, 0]
                  }}
                  transition={{
                    opacity: { duration: 0.3, delay: 0.4 },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
                  }}
                  onClick={() => document.getElementById('vat')?.scrollIntoView({ behavior: 'smooth' })}
                  className="md:absolute md:top-[410px] md:right-2 lg:right-6 md:w-[280px] lg:w-[310px] z-10 bg-[#10254A] rounded-[24px] p-6 sm:p-7 border border-[#D4AF37]/20 shadow-[0_20px_40px_rgba(16,37,74,0.18)] hover:border-[#D4AF37] hover:shadow-[0_25px_50px_rgba(16,37,74,0.3)] transition-all duration-300 relative overflow-hidden group cursor-pointer"
                >
                  {/* Subtle watermark graphic */}
                  <div className="absolute -right-3 -bottom-3 opacity-[0.04] text-white pointer-events-none group-hover:opacity-[0.07] transition-opacity duration-300">
                    <PieChart className="w-28 h-28" strokeWidth={1} />
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center mb-3.5 shrink-0">
                    <PieChart className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                  </div>
                  <div className="w-8 h-[2px] bg-[#D4AF37] mb-3.5 rounded-full" />
                  <h3 className="text-white font-serif text-lg sm:text-xl font-bold mb-1.5 tracking-tight">
                    Taxation
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                    Strategic tax planning and statutory compliance.
                  </p>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service 1: Finalisation - Warm White */}
      <section id="finalisation" className="py-32 bg-[#F7F3EA] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full filter blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full lg:w-5/12"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#102547] border border-[#102547]/10 shadow-premium flex items-center justify-center mb-8">
                <FileText className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#07162D] mb-6 leading-tight">Finalisation</h2>
              <p className="text-xl text-[#07162D]/90 font-medium leading-relaxed mb-6">
                Year-end accounts preparation ensuring compliance with statutory requirements and accounting standards.
              </p>
              <div className="h-px w-12 bg-[#D4AF37] mb-6" />
              <p className="text-lg text-[#07162D]/70 leading-relaxed">
                Our finalisation service goes beyond simple compliance. We meticulously prepare your year-end statutory accounts, ensuring every financial detail aligns perfectly with the latest reporting standards. We review your ledgers, adjust accruals and prepayments, and prepare a comprehensive final file that is ready for audit or stakeholder review, providing you with absolute peace of mind.
              </p>
            </motion.div>

            {/* Right: Visual Showcase Panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-7/12 relative"
            >
              <div className="bg-white border border-[#E7DED2] rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(16,37,74,0.06)] relative overflow-hidden">
                {/* Subtle dotted accounting grid pattern (3-5% opacity) */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(16,37,74,0.12)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6 items-stretch">

                  {/* Card 1: Year-End Accounts */}
                  <div className="bg-[#10254A] rounded-[24px] p-7 sm:p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_15px_35px_rgba(16,37,74,0.15)] hover:shadow-[0_25px_50px_rgba(16,37,74,0.25)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                    {/* Subtle watermark graphic (3% opacity) */}
                    <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                      <FileText className="w-28 h-28" strokeWidth={1} />
                    </div>

                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center mb-5 shrink-0">
                        <FileText className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.75} />
                      </div>
                      <h3 className="text-white font-serif text-xl font-bold tracking-tight mb-2">
                        Year-End Accounts
                      </h3>
                      <div className="w-8 h-[2px] bg-[#D4AF37] mb-4 rounded-full" />
                      <p className="text-white/75 text-sm font-sans leading-relaxed">
                        Preparation of statutory financial statements aligned with applicable accounting standards.
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Compliance Ready */}
                  <div className="bg-[#10254A] rounded-[24px] p-7 sm:p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_15px_35px_rgba(16,37,74,0.15)] hover:shadow-[0_25px_50px_rgba(16,37,74,0.25)] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                    {/* Subtle watermark graphic (3% opacity) */}
                    <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                      <ShieldCheck className="w-28 h-28" strokeWidth={1} />
                    </div>

                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center mb-5 shrink-0">
                        <ShieldCheck className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.75} />
                      </div>
                      <h3 className="text-white font-serif text-xl font-bold tracking-tight mb-2">
                        Compliance Ready
                      </h3>
                      <div className="w-8 h-[2px] bg-[#D4AF37] mb-4 rounded-full" />
                      <p className="text-white/75 text-sm font-sans leading-relaxed">
                        Every submission is reviewed for accuracy, completeness and regulatory compliance.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Service 2: Payroll - Warm Ivory background with Executive Workflow Dashboard */}
      <section id="payroll" className="py-32 bg-[#F8F5EE] relative overflow-hidden">
        {/* Ambient subtle background textures */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_45%,#000_50%,transparent_100%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('/stardust.png')] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full filter blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full filter blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-24 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left: Visual Showcase (Payroll Workflow Dashboard) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-7/12 relative"
            >
              {/* Outer Panel Container */}
              <div className="bg-white border border-[#10254A]/[0.08] rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(16,37,74,0.06)] relative overflow-hidden">
                {/* Subtle dotted accounting grid pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(16,37,74,0.12)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none" />

                <div className="relative z-10 space-y-5">

                  {/* CARD 1: Employee Information */}
                  <div className="bg-[#10254A] rounded-[22px] p-5 sm:p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                    {/* Subtle watermark graphic (3% opacity) */}
                    <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                      <Users className="w-28 h-28" strokeWidth={1} />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                            <Users className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                          </div>
                          <h3 className="text-white font-serif text-lg font-bold tracking-tight">
                            Employee Information
                          </h3>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm shrink-0">
                          Verified
                        </span>
                      </div>

                      <div className="w-8 h-[2px] bg-[#D4AF37] my-2.5 rounded-full" />

                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-white/75 text-xs font-sans leading-relaxed pt-1">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                          <span>Employee records verified</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                          <span>Secure staff database</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                          <span>Information ready</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* CARD 2: Payroll Processing */}
                  <div className="bg-[#10254A] rounded-[22px] p-5 sm:p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                    {/* Subtle watermark graphic (3% opacity) */}
                    <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                      <Calculator className="w-28 h-28" strokeWidth={1} />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                            <Calculator className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                          </div>
                          <h3 className="text-white font-serif text-lg font-bold tracking-tight">
                            Payroll Processing
                          </h3>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm shrink-0">
                          Processing
                        </span>
                      </div>

                      <div className="w-8 h-[2px] bg-[#D4AF37] my-2.5 rounded-full" />

                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-white/75 text-xs font-sans leading-relaxed pt-1">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                          <span>Salary calculations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                          <span>Tax deductions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                          <span>Pension contributions</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* CARD 3: Payslip & Compliance */}
                  <div className="bg-[#10254A] rounded-[22px] p-5 sm:p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                    {/* Subtle watermark graphic (3% opacity) */}
                    <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                      <FileCheck className="w-28 h-28" strokeWidth={1} />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                            <FileCheck className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                          </div>
                          <h3 className="text-white font-serif text-lg font-bold tracking-tight">
                            Payslip & Compliance
                          </h3>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm shrink-0">
                          Approved
                        </span>
                      </div>

                      <div className="w-8 h-[2px] bg-[#D4AF37] my-2.5 rounded-full" />

                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-white/75 text-xs font-sans leading-relaxed pt-1">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                          <span>Digital payslips</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                          <span>Compliance review</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                          <span>Ready for distribution</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* BOTTOM SUMMARY CARD: Full-width Payroll Workflow Process */}
                  <div className="bg-[#163663] rounded-[22px] p-5 sm:p-6 border border-[#D4AF37]/25 shadow-[0_10px_25px_rgba(16,37,74,0.12)] relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3.5">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                        <h4 className="text-white font-serif text-sm sm:text-base font-bold tracking-tight">
                          Payroll Workflow
                        </h4>
                      </div>

                      {/* Horizontal Process Steps */}
                      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-1.5 pt-1">
                        <div className="bg-[#10254A] px-3 py-2 rounded-xl border border-white/10 flex items-center gap-2 flex-1 min-w-[120px] justify-center">
                          <Users className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span className="text-[11px] text-white/90 font-medium">Employee Data</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                        <div className="bg-[#10254A] px-3 py-2 rounded-xl border border-white/10 flex items-center gap-2 flex-1 min-w-[120px] justify-center">
                          <Calculator className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span className="text-[11px] text-white/90 font-medium">Payroll Review</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                        <div className="bg-[#10254A] px-3 py-2 rounded-xl border border-white/10 flex items-center gap-2 flex-1 min-w-[120px] justify-center">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span className="text-[11px] text-white/90 font-medium">Compliance Check</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                        <div className="bg-[#10254A] px-3 py-2 rounded-xl border border-white/10 flex items-center gap-2 flex-1 min-w-[120px] justify-center">
                          <FileText className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span className="text-[11px] text-white/90 font-medium">Payslip Delivery</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full lg:w-5/12"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#10254A] border border-[#10254A]/10 shadow-premium flex items-center justify-center mb-8">
                <Building2 className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#10254A] mb-6 leading-tight">Payroll</h2>
              <p className="text-xl text-[#10254A]/90 font-medium leading-relaxed mb-6">
                Secure, compliant, and timely payroll processing for your entire organization.
              </p>
              <div className="h-px w-12 bg-[#D4AF37] mb-6" />
              <p className="text-lg text-[#667085] leading-relaxed">
                We manage the complexities of payroll administration so you can focus on core business activities. From calculating net pay, processing tax deductions, managing pension contributions, to issuing digital payslips, our precise payroll service ensures your workforce is paid accurately and on time while maintaining strict compliance with local employment tax regulations.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Service 3: Management Accounts - Centered Middle Layout */}
      <section id="management-accounts" className="py-32 bg-[#F8F5EE] relative overflow-hidden">
        {/* Ambient subtle background textures */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_45%,#000_50%,transparent_100%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('/stardust.png')] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full filter blur-[150px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-24 relative z-10">

          {/* Centered Header & Text */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-16 h-16 rounded-2xl bg-[#10254A] border border-[#10254A]/10 shadow-premium flex items-center justify-center mb-6 mx-auto"
            >
              <LayoutDashboard className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-serif text-[#10254A] mb-5 leading-tight"
            >
              Management Accounts
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
              className="text-xl text-[#10254A]/90 font-medium leading-relaxed mb-5 max-w-2xl"
            >
              Detailed monthly or quarterly reporting providing critical insights into your financial performance.
            </motion.p>

            <div className="h-px w-12 bg-[#D4AF37] mb-5 mx-auto" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-3xl"
            >
              Navigate your business with clarity. We deliver bespoke management accounts tailored to your specific operational needs. Our reports include profit and loss analysis, balance sheet reconciliations, cash flow forecasting, and KPI tracking, empowering your executive team to make data-driven, strategic decisions with confidence.
            </motion.p>
          </div>

          {/* Middle Centered Executive Reporting Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.25, ease: "easeOut" }}
            className="w-full max-w-4xl mx-auto text-left"
          >
            {/* Outer Panel Container */}
            <div className="bg-white border border-[#10254A]/[0.08] rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(16,37,74,0.06)] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(16,37,74,0.12)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none" />

              <div className="relative z-10 space-y-4.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">

                  {/* CARD 1: Executive Summary */}
                  <div className="bg-[#10254A] rounded-[24px] p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                    <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                      <ClipboardList className="w-24 h-24" strokeWidth={1} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                          <ClipboardList className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm">
                          Ready
                        </span>
                      </div>
                      <h3 className="text-white font-serif text-lg font-bold tracking-tight mb-1">
                        Executive Summary
                      </h3>
                      <div className="w-8 h-[2px] bg-[#D4AF37] mb-2.5 rounded-full" />
                      <p className="text-white/75 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                        Monthly business performance prepared for informed decision making.
                      </p>
                    </div>
                  </div>

                  {/* CARD 2: Financial Reports */}
                  <div className="bg-[#10254A] rounded-[24px] p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                    <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                      <FileText className="w-24 h-24" strokeWidth={1} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm">
                          Reviewed
                        </span>
                      </div>
                      <h3 className="text-white font-serif text-lg font-bold tracking-tight mb-1">
                        Financial Reports
                      </h3>
                      <div className="w-8 h-[2px] bg-[#D4AF37] mb-2.5 rounded-full" />
                      <p className="text-white/75 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                        Profit & loss, balance sheet and cash flow reports prepared professionally.
                      </p>
                    </div>
                  </div>

                  {/* CARD 3: Strategic Insights */}
                  <div className="bg-[#10254A] rounded-[24px] p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                    <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                      <Target className="w-24 h-24" strokeWidth={1} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                          <Target className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm">
                          Updated
                        </span>
                      </div>
                      <h3 className="text-white font-serif text-lg font-bold tracking-tight mb-1">
                        Strategic Insights
                      </h3>
                      <div className="w-8 h-[2px] bg-[#D4AF37] mb-2.5 rounded-full" />
                      <p className="text-white/75 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                        Clear reporting highlights opportunities and operational improvements.
                      </p>
                    </div>
                  </div>

                  {/* CARD 4: Monthly Review */}
                  <div className="bg-[#10254A] rounded-[24px] p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                    <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                      <Calendar className="w-24 h-24" strokeWidth={1} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                          <Calendar className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm">
                          Scheduled
                        </span>
                      </div>
                      <h3 className="text-white font-serif text-lg font-bold tracking-tight mb-1">
                        Monthly Review
                      </h3>
                      <div className="w-8 h-[2px] bg-[#D4AF37] mb-2.5 rounded-full" />
                      <p className="text-white/75 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                        Regular reporting cycles ensuring complete financial visibility.
                      </p>
                    </div>
                  </div>

                </div>

                {/* BOTTOM WORKFLOW CARD */}
                <div className="bg-[#163663] rounded-[22px] p-5 sm:p-6 border border-[#D4AF37]/25 shadow-[0_10px_25px_rgba(16,37,74,0.12)] relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                      <h4 className="text-white font-serif text-sm sm:text-base font-bold tracking-tight">
                        Management Reporting Workflow
                      </h4>
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-1.5 pt-1">
                      <div className="bg-[#10254A] px-2.5 py-2 rounded-xl border border-white/10 flex items-center gap-1.5 flex-1 min-w-[100px] justify-center">
                        <BookOpen className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="text-[11px] text-white/90 font-medium">Bookkeeping</span>
                      </div>
                      <ArrowRight className="w-3 h-3 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                      <div className="bg-[#10254A] px-2.5 py-2 rounded-xl border border-white/10 flex items-center gap-1.5 flex-1 min-w-[100px] justify-center">
                        <FileSearch className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="text-[11px] text-white/90 font-medium">Review</span>
                      </div>
                      <ArrowRight className="w-3 h-3 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                      <div className="bg-[#10254A] px-2.5 py-2 rounded-xl border border-white/10 flex items-center gap-1.5 flex-1 min-w-[100px] justify-center">
                        <FileText className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="text-[11px] text-white/90 font-medium text-center">Management Report</span>
                      </div>
                      <ArrowRight className="w-3 h-3 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                      <div className="bg-[#10254A] px-2.5 py-2 rounded-xl border border-white/10 flex items-center gap-1.5 flex-1 min-w-[100px] justify-center">
                        <Users className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="text-[11px] text-white/90 font-medium text-center">Business Discussion</span>
                      </div>
                      <ArrowRight className="w-3 h-3 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                      <div className="bg-[#10254A] px-2.5 py-2 rounded-xl border border-white/10 flex items-center gap-1.5 flex-1 min-w-[100px] justify-center">
                        <Target className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="text-[11px] text-white/90 font-medium text-center">Decision Support</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Service 4: VAT Compliance - Warm Ivory background with Premium Compliance Workspace */}
      <section id="vat" className="py-32 bg-[#F8F5EE] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_45%,#000_50%,transparent_100%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('/stardust.png')] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full lg:w-5/12 order-2 lg:order-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#10254A] border border-[#10254A]/10 shadow-premium flex items-center justify-center mb-8">
                <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#10254A] mb-6 leading-tight">VAT Compliance</h2>
              <p className="text-xl text-[#10254A]/90 font-medium leading-relaxed mb-6">
                Meticulous VAT return preparation and advisory to navigate complex international tax laws.
              </p>
              <div className="h-px w-12 bg-[#D4AF37] mb-6" />
              <p className="text-lg text-[#667085] leading-relaxed">
                Indirect tax compliance requires extreme precision. Our VAT specialists handle the preparation and submission of your VAT returns, ensuring all input and output taxes are accurately recorded. We provide proactive advisory on cross-border transactions, complex VAT schemes, and regulatory changes to minimize your risk of penalties.
              </p>
            </motion.div>

            {/* Right: Premium VAT Compliance Visual Panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-7/12 relative order-1 lg:order-2"
            >
              {/* Outer Panel Container */}
              <div className="bg-white border border-[#10254A]/[0.08] rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(16,37,74,0.06)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(16,37,74,0.12)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none" />

                <div className="relative z-10 space-y-4.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">

                    {/* CARD 1: VAT Preparation */}
                    <div className="bg-[#10254A] rounded-[24px] p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                      <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                        <ClipboardCheck className="w-24 h-24" strokeWidth={1} />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                            <ClipboardCheck className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm">
                            Prepared
                          </span>
                        </div>
                        <h3 className="text-white font-serif text-lg font-bold tracking-tight mb-1">
                          VAT Preparation
                        </h3>
                        <div className="w-8 h-[2px] bg-[#D4AF37] mb-2.5 rounded-full" />
                        <p className="text-white/75 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                          Collect and organize transaction records before submission.
                        </p>
                      </div>
                    </div>

                    {/* CARD 2: Compliance Review */}
                    <div className="bg-[#10254A] rounded-[24px] p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                      <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                        <FileSearch className="w-24 h-24" strokeWidth={1} />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                            <FileSearch className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm">
                            Verified
                          </span>
                        </div>
                        <h3 className="text-white font-serif text-lg font-bold tracking-tight mb-1">
                          Compliance Review
                        </h3>
                        <div className="w-8 h-[2px] bg-[#D4AF37] mb-2.5 rounded-full" />
                        <p className="text-white/75 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                          Review documentation to ensure regulatory accuracy.
                        </p>
                      </div>
                    </div>

                    {/* CARD 3: Regulatory Check */}
                    <div className="bg-[#10254A] rounded-[24px] p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                      <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                        <ShieldCheck className="w-24 h-24" strokeWidth={1} />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm">
                            Compliant
                          </span>
                        </div>
                        <h3 className="text-white font-serif text-lg font-bold tracking-tight mb-1">
                          Regulatory Check
                        </h3>
                        <div className="w-8 h-[2px] bg-[#D4AF37] mb-2.5 rounded-full" />
                        <p className="text-white/75 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                          Cross-check records against current VAT requirements.
                        </p>
                      </div>
                    </div>

                    {/* CARD 4: Submission Ready */}
                    <div className="bg-[#10254A] rounded-[24px] p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                      <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                        <Send className="w-24 h-24" strokeWidth={1} />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                            <Send className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm">
                            Ready
                          </span>
                        </div>
                        <h3 className="text-white font-serif text-lg font-bold tracking-tight mb-1">
                          Submission Ready
                        </h3>
                        <div className="w-8 h-[2px] bg-[#D4AF37] mb-2.5 rounded-full" />
                        <p className="text-white/75 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                          Finalize documentation for timely filing and record keeping.
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* BOTTOM WORKFLOW CARD */}
                  <div className="bg-[#163663] rounded-[22px] p-5 sm:p-6 border border-[#D4AF37]/25 shadow-[0_10px_25px_rgba(16,37,74,0.12)] relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3.5">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                        <h4 className="text-white font-serif text-sm sm:text-base font-bold tracking-tight">
                          VAT Compliance Workflow
                        </h4>
                      </div>

                      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-1.5 pt-1">
                        <div className="bg-[#10254A] px-2.5 py-2 rounded-xl border border-white/10 flex items-center gap-1.5 flex-1 min-w-[100px] justify-center">
                          <BookOpen className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span className="text-[11px] text-white/90 font-medium text-center">Transaction Records</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                        <div className="bg-[#10254A] px-2.5 py-2 rounded-xl border border-white/10 flex items-center gap-1.5 flex-1 min-w-[100px] justify-center">
                          <ClipboardCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span className="text-[11px] text-white/90 font-medium text-center">VAT Preparation</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                        <div className="bg-[#10254A] px-2.5 py-2 rounded-xl border border-white/10 flex items-center gap-1.5 flex-1 min-w-[100px] justify-center">
                          <FileSearch className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span className="text-[11px] text-white/90 font-medium text-center">Compliance Review</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                        <div className="bg-[#10254A] px-2.5 py-2 rounded-xl border border-white/10 flex items-center gap-1.5 flex-1 min-w-[100px] justify-center">
                          <Send className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span className="text-[11px] text-white/90 font-medium text-center">Submission</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                        <div className="bg-[#10254A] px-2.5 py-2 rounded-xl border border-white/10 flex items-center gap-1.5 flex-1 min-w-[100px] justify-center">
                          <Archive className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span className="text-[11px] text-white/90 font-medium text-center">Archive</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Service 5: Corporation Tax - Warm Ivory background with Compliance Workspace */}
      <section id="corporation-tax" className="py-32 bg-[#F8F5EE] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_45%,#000_50%,transparent_100%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('/stardust.png')] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Right: Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full lg:w-5/12 order-2 lg:order-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#10254A] border border-[#10254A]/10 shadow-premium flex items-center justify-center mb-8">
                <Calculator className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#10254A] mb-6 leading-tight">Corporation Tax</h2>
              <p className="text-xl text-[#10254A]/90 font-medium leading-relaxed mb-6">
                Strategic tax planning and accurate corporate tax return filings for optimal tax positioning.
              </p>
              <div className="h-px w-12 bg-[#D4AF37] mb-6" />
              <p className="text-lg text-[#667085] leading-relaxed">
                Protect your corporate wealth through intelligent tax planning. We prepare and file your Corporation Tax returns accurately, identifying allowable expenses and capital allowances to optimize your tax liabilities. Our team stays abreast of the latest tax legislation to ensure your enterprise benefits from all available reliefs while remaining strictly compliant.
              </p>
            </motion.div>

            {/* Left: Corporation Tax Visual Panel */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-7/12 relative order-1 lg:order-1"
            >
              <div className="bg-white border border-[#10254A]/[0.08] rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(16,37,74,0.06)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(16,37,74,0.12)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none" />

                <div className="relative z-10 space-y-4.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">

                    <div className="bg-[#10254A] rounded-[24px] p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                      <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                        <Calculator className="w-24 h-24" strokeWidth={1} />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                            <Calculator className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm">
                            Computed
                          </span>
                        </div>
                        <h3 className="text-white font-serif text-lg font-bold tracking-tight mb-1">
                          Tax Computation
                        </h3>
                        <div className="w-8 h-[2px] bg-[#D4AF37] mb-2.5 rounded-full" />
                        <p className="text-white/75 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                          Comprehensive analysis of allowable expenses and tax liabilities.
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#10254A] rounded-[24px] p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                      <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                        <ShieldCheck className="w-24 h-24" strokeWidth={1} />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm">
                            Optimized
                          </span>
                        </div>
                        <h3 className="text-white font-serif text-lg font-bold tracking-tight mb-1">
                          Relief Optimization
                        </h3>
                        <div className="w-8 h-[2px] bg-[#D4AF37] mb-2.5 rounded-full" />
                        <p className="text-white/75 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                          Identify available capital allowances and statutory tax reliefs.
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#10254A] rounded-[24px] p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                      <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                        <FileCheck className="w-24 h-24" strokeWidth={1} />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                            <FileCheck className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm">
                            Prepared
                          </span>
                        </div>
                        <h3 className="text-white font-serif text-lg font-bold tracking-tight mb-1">
                          Return Preparation
                        </h3>
                        <div className="w-8 h-[2px] bg-[#D4AF37] mb-2.5 rounded-full" />
                        <p className="text-white/75 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                          Accurate preparation of corporate tax returns and statutory schedules.
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#10254A] rounded-[24px] p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                      <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                        <Send className="w-24 h-24" strokeWidth={1} />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                            <Send className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm">
                            Filed
                          </span>
                        </div>
                        <h3 className="text-white font-serif text-lg font-bold tracking-tight mb-1">
                          Statutory Filing
                        </h3>
                        <div className="w-8 h-[2px] bg-[#D4AF37] mb-2.5 rounded-full" />
                        <p className="text-white/75 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                          Timely statutory filing ensuring complete regulatory compliance.
                        </p>
                      </div>
                    </div>

                  </div>

                  <div className="bg-[#163663] rounded-[22px] p-5 sm:p-6 border border-[#D4AF37]/25 shadow-[0_10px_25px_rgba(16,37,74,0.12)] relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3.5">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                        <h4 className="text-white font-serif text-sm sm:text-base font-bold tracking-tight">
                          Corporation Tax Workflow
                        </h4>
                      </div>

                      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-1.5 pt-1">
                        <div className="bg-[#10254A] px-2.5 py-2 rounded-xl border border-white/10 flex items-center gap-1.5 flex-1 min-w-[100px] justify-center">
                          <BookOpen className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span className="text-[11px] text-white/90 font-medium text-center">Financial Review</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                        <div className="bg-[#10254A] px-2.5 py-2 rounded-xl border border-white/10 flex items-center gap-1.5 flex-1 min-w-[100px] justify-center">
                          <Calculator className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span className="text-[11px] text-white/90 font-medium text-center">Tax Calculation</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                        <div className="bg-[#10254A] px-2.5 py-2 rounded-xl border border-white/10 flex items-center gap-1.5 flex-1 min-w-[100px] justify-center">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span className="text-[11px] text-white/90 font-medium text-center">Relief Application</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                        <div className="bg-[#10254A] px-2.5 py-2 rounded-xl border border-white/10 flex items-center gap-1.5 flex-1 min-w-[100px] justify-center">
                          <FileCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span className="text-[11px] text-white/90 font-medium text-center">Return Prep</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                        <div className="bg-[#10254A] px-2.5 py-2 rounded-xl border border-white/10 flex items-center gap-1.5 flex-1 min-w-[100px] justify-center">
                          <Send className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span className="text-[11px] text-white/90 font-medium text-center">Filing</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Service 6: Bookkeeping - Centered Middle Layout */}
      <section id="bookkeeping" className="py-32 bg-[#F8F5EE] relative overflow-hidden">
        {/* Ambient subtle background textures */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_45%,#000_50%,transparent_100%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.015] bg-[url('/stardust.png')] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-24 relative z-10">

          {/* Centered Header & Text */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-16 h-16 rounded-2xl bg-[#10254A] border border-[#10254A]/10 shadow-premium flex items-center justify-center mb-6 mx-auto"
            >
              <BarChart3 className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-serif text-[#10254A] mb-5 leading-tight"
            >
              Bookkeeping
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
              className="text-xl text-[#10254A]/90 font-medium leading-relaxed mb-5 max-w-2xl"
            >
              Accurate daily ledger management, reconciliation, and cloud accounting software integration.
            </motion.p>

            <div className="h-px w-12 bg-[#D4AF37] mb-5 mx-auto" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-3xl"
            >
              The foundation of robust financial management is immaculate bookkeeping. We maintain your daily ledgers, process purchase and sales invoices, reconcile bank statements, and ensure every transaction is categorized with absolute precision. We seamlessly integrate with leading cloud accounting platforms to provide real-time visibility into your financial health.
            </motion.p>
          </div>

          {/* Middle Centered Bookkeeping Visual Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.25, ease: "easeOut" }}
            className="w-full max-w-4xl mx-auto text-left"
          >
            {/* Outer Panel Container */}
            <div className="bg-white border border-[#10254A]/[0.08] rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(16,37,74,0.06)] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(16,37,74,0.12)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none" />

              <div className="relative z-10 space-y-4.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">

                  {/* CARD 1: Transaction Recording */}
                  <div className="bg-[#10254A] rounded-[24px] p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                    <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                      <BookOpen className="w-24 h-24" strokeWidth={1} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                          <BookOpen className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm">
                          Recorded
                        </span>
                      </div>
                      <h3 className="text-white font-serif text-lg font-bold tracking-tight mb-1">
                        Transaction Recording
                      </h3>
                      <div className="w-8 h-[2px] bg-[#D4AF37] mb-2.5 rounded-full" />
                      <p className="text-white/75 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                        Organize daily business transactions into structured financial records.
                      </p>
                    </div>
                  </div>

                  {/* CARD 2: Categorisation */}
                  <div className="bg-[#10254A] rounded-[24px] p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                    <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                      <Folder className="w-24 h-24" strokeWidth={1} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                          <Folder className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm">
                          Organised
                        </span>
                      </div>
                      <h3 className="text-white font-serif text-lg font-bold tracking-tight mb-1">
                        Categorisation
                      </h3>
                      <div className="w-8 h-[2px] bg-[#D4AF37] mb-2.5 rounded-full" />
                      <p className="text-white/75 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                        Classify expenses, income and accounts using organized bookkeeping practices.
                      </p>
                    </div>
                  </div>

                  {/* CARD 3: Bank Reconciliation */}
                  <div className="bg-[#10254A] rounded-[24px] p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                    <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                      <Landmark className="w-24 h-24" strokeWidth={1} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                          <Landmark className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm">
                          Balanced
                        </span>
                      </div>
                      <h3 className="text-white font-serif text-lg font-bold tracking-tight mb-1">
                        Bank Reconciliation
                      </h3>
                      <div className="w-8 h-[2px] bg-[#D4AF37] mb-2.5 rounded-full" />
                      <p className="text-white/75 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                        Compare financial records with bank statements to ensure complete accuracy.
                      </p>
                    </div>
                  </div>

                  {/* CARD 4: Monthly Review */}
                  <div className="bg-[#10254A] rounded-[24px] p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] shadow-[0_12px_30px_rgba(16,37,74,0.14)] hover:shadow-[0_20px_45px_rgba(16,37,74,0.22)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between">
                    <div className="absolute -right-3 -bottom-3 opacity-[0.03] text-white pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-300">
                      <ClipboardCheck className="w-24 h-24" strokeWidth={1} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/25 flex items-center justify-center shrink-0">
                          <ClipboardCheck className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.75} />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-[10px] tracking-wider uppercase shadow-sm">
                          Completed
                        </span>
                      </div>
                      <h3 className="text-white font-serif text-lg font-bold tracking-tight mb-1">
                        Monthly Review
                      </h3>
                      <div className="w-8 h-[2px] bg-[#D4AF37] mb-2.5 rounded-full" />
                      <p className="text-white/75 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2">
                        Review and maintain accurate books ready for reporting and compliance.
                      </p>
                    </div>
                  </div>

                </div>

                {/* BOTTOM WORKFLOW CARD */}
                <div className="bg-[#163663] rounded-[22px] p-5 sm:p-6 border border-[#D4AF37]/25 shadow-[0_10px_25px_rgba(16,37,74,0.12)] relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                      <h4 className="text-white font-serif text-sm sm:text-base font-bold tracking-tight">
                        Bookkeeping Workflow
                      </h4>
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-1 pt-1">
                      <div className="bg-[#10254A] px-2 py-2 rounded-xl border border-white/10 flex items-center gap-1 flex-1 min-w-[90px] justify-center">
                        <FileText className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="text-[10px] text-white/90 font-medium text-center">Source Docs</span>
                      </div>
                      <ArrowRight className="w-2.5 h-2.5 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                      <div className="bg-[#10254A] px-2 py-2 rounded-xl border border-white/10 flex items-center gap-1 flex-1 min-w-[90px] justify-center">
                        <BookOpen className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="text-[10px] text-white/90 font-medium text-center">Recording</span>
                      </div>
                      <ArrowRight className="w-2.5 h-2.5 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                      <div className="bg-[#10254A] px-2 py-2 rounded-xl border border-white/10 flex items-center gap-1 flex-1 min-w-[90px] justify-center">
                        <Folder className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="text-[10px] text-white/90 font-medium text-center">Categorisation</span>
                      </div>
                      <ArrowRight className="w-2.5 h-2.5 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                      <div className="bg-[#10254A] px-2 py-2 rounded-xl border border-white/10 flex items-center gap-1 flex-1 min-w-[90px] justify-center">
                        <Landmark className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="text-[10px] text-white/90 font-medium text-center">Reconciliation</span>
                      </div>
                      <ArrowRight className="w-2.5 h-2.5 text-[#D4AF37]/60 shrink-0 hidden sm:block" />

                      <div className="bg-[#10254A] px-2 py-2 rounded-xl border border-white/10 flex items-center gap-1 flex-1 min-w-[90px] justify-center">
                        <ClipboardCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="text-[10px] text-white/90 font-medium text-center">Monthly Review</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Final CTA Banner */}
      <CtaBanner
        title="Ready to optimize your financial operations?"
        description="Connect with our experts to design a tailored outsourcing solution for your firm."
        primaryActionText="Get In Touch"
      />
    </div>
  );
};

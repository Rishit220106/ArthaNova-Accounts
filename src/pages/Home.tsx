import React, { useState, useEffect } from 'react';

import { SEO } from '../components/SEO';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

import { Button } from '../components/ui/Button';

import { SectionHeader } from '../components/ui/SectionHeader';

import { FeatureCard } from '../components/ui/FeatureCard';

import { CtaBanner } from '../components/ui/CtaBanner';

import { TechPartners } from '../components/ui/TechPartners';

import { GlobalPresence } from '../components/ui/GlobalPresence';

import { HowWeWork } from '../components/ui/HowWeWork';

import { ClientConfidence } from '../components/ui/ClientConfidence';

import { OrbitingHeroCarousel } from '../components/ui/OrbitingHeroCarousel';

import { Globe, LayoutDashboard, FileText, CheckCircle2, ArrowRight, BarChart3, Calculator, Building2, Users, Shield, ShieldCheck, Award, TrendingUp, FileCheck, Laptop } from 'lucide-react';

import { Link } from 'react-router-dom';

import { BUSINESS_CONTACT } from '../constants/contact';



export const Home = () => {

  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  const [isTablet, setIsTablet] = useState(false);



  useEffect(() => {

    const handleResize = () => {

      setIsMobile(window.innerWidth < 768);

      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);

    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);

  }, []);



  // Mouse Parallax Hooks

  const mouseX = useMotionValue(0);

  const mouseY = useMotionValue(0);



  const springConfig = { damping: 40, stiffness: 100, mass: 1 };

  const smoothMouseX = useSpring(mouseX, springConfig);

  const smoothMouseY = useSpring(mouseY, springConfig);



  // Parallax transforms for the 3 cards (subtle amounts, heavily damped, never exceed 5px)

  const parallax1X = useTransform(smoothMouseX, [-1, 1], [-2, 2]);

  const parallax1Y = useTransform(smoothMouseY, [-1, 1], [-2, 2]);



  const parallax2X = useTransform(smoothMouseX, [-1, 1], [3, -3]);

  const parallax2Y = useTransform(smoothMouseY, [-1, 1], [3, -3]);



  const parallax3X = useTransform(smoothMouseX, [-1, 1], [-4, 4]);

  const parallax3Y = useTransform(smoothMouseY, [-1, 1], [-4, 4]);



  const handleMouseMove = (e: React.MouseEvent) => {

    const { clientX, clientY, currentTarget } = e;

    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = (clientX - left) / width * 2 - 1;

    const y = (clientY - top) / height * 2 - 1;

    mouseX.set(x);

    mouseY.set(y);

  };



  const handleMouseLeave = () => {

    mouseX.set(0);

    mouseY.set(0);

  };



  const services = [

    {

      id: "finalisation",

      title: "Finalisation",

      shortDesc: "Year-end accounts preparation ensuring statutory compliance across UK and US reporting standards.",

      icon: FileText,

      bullets: ["Companies House Ready", "HMRC Compliant", "Audit Ready Documentation"]

    },

    {

      id: "bookkeeping",

      title: "Bookkeeping",

      shortDesc: "Accurate daily ledger management, reconciliation and cloud accounting software integration.",

      icon: BarChart3,

      bullets: ["Xero & QuickBooks Experts", "Multi-currency Reconciliation", "Receipt Management"]

    },

    {

      id: "payroll",

      title: "Payroll",

      shortDesc: "Secure, compliant and timely payroll processing for your entire organization.",

      icon: Building2,

      bullets: ["BACS Approved Bureau", "Pension Auto-enrolment", "International Payroll"]

    },

    {

      id: "management-accounts",

      title: "Management Accounts",

      shortDesc: "Detailed monthly reporting providing critical insights into your financial performance.",

      icon: LayoutDashboard,

      bullets: ["Custom KPIs", "Cashflow Forecasting", "Board-ready Reports"]

    },

    {

      id: "vat",

      title: "VAT",

      shortDesc: "Meticulous VAT return preparation and advisory to navigate complex international tax laws.",

      icon: CheckCircle2,

      bullets: ["Making Tax Digital (MTD)", "Cross-border VAT", "Partial Exemption"]

    },

    {

      id: "corporation-tax",

      title: "Corporation Tax",

      shortDesc: "Strategic tax planning and accurate corporate tax return filings for optimal tax positioning.",

      icon: Calculator,

      bullets: ["CT600 Preparation", "R&D Tax Credits", "Capital Allowances"]

    }

  ];



  const pageVariants = {

    hidden: { opacity: 0 },

    show: {

      opacity: 1,

      transition: {

        staggerChildren: 0.15,

      },

    },

  };



  const sectionRevealVariants = {

    hidden: { opacity: 0, y: 30 },

    show: {

      opacity: 1,

      y: 0,

      transition: { duration: 0.2, ease: "easeOut" }

    },

  };



  return (

    <motion.div

      className="flex flex-col"

      initial="hidden"

      animate="show"

      variants={pageVariants}

    >



      <SEO
        title="ArthaNova Accounts | Tax & Corporate Advisory"
        description="Professional UK, US & Australia Accounting, Bookkeeping, Payroll & Tax Advisory Services."
        canonical="/"
      />



      {/* Hero Section */}

      <motion.div variants={sectionRevealVariants}>

        <section className="bg-[#F8F5EE] text-[#10254A] pt-32 pb-20 lg:pt-32 lg:pb-24 px-6 relative overflow-hidden min-h-[80vh] flex items-center">

          {/* Background Gradients & Soft Paper Texture */}

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(248,245,238,1)_0%,rgba(244,240,232,0.85)_70%)] opacity-100" />



          {/* Subtle warm ivory & gold ambient light */}

          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none blur-3xl" />

          <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(244,240,232,0.6)_0%,transparent_60%)] pointer-events-none blur-3xl" />



          {/* Faint subtle warm background lines */}

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] md:w-[120%] aspect-square border border-[#10254A]/[0.03] rounded-full pointer-events-none" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] md:w-[90%] aspect-square border border-[#10254A]/[0.04] rounded-full pointer-events-none" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] aspect-square border border-[#10254A]/[0.03] rounded-full pointer-events-none" />



          <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-8 lg:gap-x-16 items-center lg:items-start pt-8 lg:pt-0">



            {/* Left Side: Top Copy */}

            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left lg:pr-8 order-1">

              <motion.div

                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.2, ease: "easeOut" }}

                className="inline-flex items-center rounded-full border border-[#D4AF37] bg-white px-4 py-1.5 text-sm font-medium text-[#10254A] mb-6 md:mb-8 shadow-sm"

              >

                <Globe className="mr-2 h-4 w-4 text-[#D4AF37]" />

                International Accounting Experts

              </motion.div>



              <motion.h1

                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}

                className="text-4xl sm:text-5xl md:text-[3rem] lg:text-[4rem] xl:text-[3.75rem] font-serif leading-[1.15] xl:leading-[1.1] mb-6 tracking-tight text-[#10254A] w-full max-w-[90%] sm:max-w-none mx-auto lg:mx-0 text-balance"

              >

                Premium International <br className="hidden lg:block" />

                Accounting & <br className="hidden lg:block" />

                Bookkeeping Services

              </motion.h1>



              <motion.p

                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}

                className="text-lg md:text-xl text-[#55657A] font-sans leading-relaxed w-full max-w-[90%] sm:max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10 text-pretty"

              >

                Helping accounting firms and businesses across the UK and United States scale efficiently through professional bookkeeping, payroll, statutory compliance and financial reporting.

              </motion.p>



              <motion.div

                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}

                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start"

              >

                <Button to="/contact" size="lg" variant="primary">

                  Start a Conversation

                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1.5" />

                </Button>

                <Button to="/services" size="lg" variant="secondary" className="h-12 md:h-14 px-8 text-base w-full sm:w-auto transition-all duration-200">

                  View Services

                </Button>

              </motion.div>

            </div>



            {/* Right Side: Premium 3D Orbiting Glass Carousel */}

            <div className="w-full relative flex items-center justify-center order-2 lg:row-span-2 py-4 md:py-0 mt-4 md:mt-8 lg:mt-0">

              <OrbitingHeroCarousel />

            </div>



            {/* Left Side Bottom: Stats & Trust */}

            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left order-3 lg:col-start-1 mt-12 md:mt-24 lg:mt-0 lg:-mt-4">

              {/* Premium Stats Row */}

              <motion.div

                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.2, ease: "easeOut", delay: 0.4 }}

                className="w-full lg:w-auto mt-2 lg:mt-0 grid grid-cols-2 gap-4 sm:gap-6 lg:flex lg:flex-row lg:items-center lg:justify-start lg:gap-x-10 lg:gap-y-0"

              >

                {/* Desktop View */}

                <div className="hidden lg:flex flex-col items-start">

                  <span className="text-[#10254A] font-serif text-3xl leading-tight mb-1 tracking-tight">Professional</span>

                  <span className="text-[11px] text-[#55657A] tracking-widest uppercase font-semibold">Expertise</span>

                </div>

                <div className="hidden lg:block w-px h-10 bg-[#E8DED0]" />

                <div className="hidden lg:flex flex-col items-start">

                  <span className="text-[#10254A] font-serif text-3xl leading-tight mb-1 tracking-tight">3</span>

                  <span className="text-[11px] text-[#55657A] tracking-widest uppercase font-semibold">Global Jurisdictions</span>

                </div>

                <div className="hidden lg:block w-px h-10 bg-[#E8DED0]" />

                <div className="hidden lg:flex flex-col items-start">

                  <span className="text-[#10254A] font-serif text-3xl leading-tight mb-1 tracking-tight">ACCA & CA</span>

                  <span className="text-[11px] text-[#55657A] tracking-widest uppercase font-semibold">Certified Professionals</span>

                </div>

                <div className="hidden lg:block w-px h-10 bg-[#E8DED0]" />

                <div className="hidden lg:flex flex-col items-start">

                  <span className="text-[#10254A] font-serif text-3xl leading-tight mb-1 tracking-tight">Dedicated</span>

                  <span className="text-[11px] text-[#55657A] tracking-widest uppercase font-semibold">Client Support</span>

                </div>



                {/* Mobile & Tablet View */}
                <div className="lg:hidden flex flex-col items-center sm:items-start text-center sm:text-left p-5 sm:p-6 bg-gradient-to-br from-[#132B57] via-[#10254A] to-[#0D1D3A] rounded-[22px] border border-[#D4AF37]/35 shadow-[0_10px_25px_rgba(16,37,74,0.18)] relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="text-white font-serif text-xl sm:text-2xl font-bold leading-tight mb-1">Professional</span>
                  <span className="text-[10px] sm:text-xs text-[#D4AF37] tracking-widest uppercase font-bold">Expertise</span>
                </div>

                <div className="lg:hidden flex flex-col items-center sm:items-start text-center sm:text-left p-5 sm:p-6 bg-gradient-to-br from-[#132B57] via-[#10254A] to-[#0D1D3A] rounded-[22px] border border-[#D4AF37]/35 shadow-[0_10px_25px_rgba(16,37,74,0.18)] relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="text-white font-serif text-xl sm:text-2xl font-bold leading-tight mb-1">3 Global</span>
                  <span className="text-[10px] sm:text-xs text-[#D4AF37] tracking-widest uppercase font-bold">Jurisdictions</span>
                </div>

                <div className="lg:hidden flex flex-col items-center sm:items-start text-center sm:text-left p-5 sm:p-6 bg-gradient-to-br from-[#132B57] via-[#10254A] to-[#0D1D3A] rounded-[22px] border border-[#D4AF37]/35 shadow-[0_10px_25px_rgba(16,37,74,0.18)] relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="text-white font-serif text-xl sm:text-2xl font-bold leading-tight mb-1">ACCA & CA</span>
                  <span className="text-[10px] sm:text-xs text-[#D4AF37] tracking-widest uppercase font-bold">Certified</span>
                </div>

                <div className="lg:hidden flex flex-col items-center sm:items-start text-center sm:text-left p-5 sm:p-6 bg-gradient-to-br from-[#132B57] via-[#10254A] to-[#0D1D3A] rounded-[22px] border border-[#D4AF37]/35 shadow-[0_10px_25px_rgba(16,37,74,0.18)] relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                  <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="text-white font-serif text-xl sm:text-2xl font-bold leading-tight mb-1">Dedicated</span>
                  <span className="text-[10px] sm:text-xs text-[#D4AF37] tracking-widest uppercase font-bold">Client Support</span>
                </div>

              </motion.div>



              {/* Trust Row */}

              <motion.div

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                transition={{ duration: 0.2, delay: 0.5 }}

                className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-[#E8DED0] w-full max-w-xl"

              >

                <p className="text-[10px] md:text-xs text-[#55657A] font-semibold mb-4 uppercase tracking-[0.2em] text-center lg:text-left">

                  Trusted by firms using

                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 md:gap-x-12 gap-y-4 text-[#10254A]/70 font-serif text-lg md:text-xl tracking-wide font-medium">

                  <span>Xero</span>

                  <span>QuickBooks</span>

                  <span>Sage</span>

                  <span>IRIS</span>

                </div>

              </motion.div>

            </div>



          </div>



          {/* Scroll Indicator */}

          <motion.div

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            transition={{ duration: 1, delay: 1.5 }}

            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 hidden lg:flex"

          >

            <div className="w-[1px] h-12 bg-[#10254A]/20 relative overflow-hidden">

              <motion.div

                animate={{ y: ['-100%', '100%'] }}

                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}

                className="absolute top-0 left-0 w-full h-1/2 bg-[#10254A]/40"

              />

            </div>

          </motion.div>

        </section>

      </motion.div>



      {/* Why ArthaNova Accounts Section */}
      <motion.div variants={sectionRevealVariants}>
        <section className="py-28 md:py-36 bg-[#F8F5EF] relative overflow-hidden text-[#10254A]">
          {/* Faint editorial grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

          {/* Faint stardust texture overlay */}
          <div className="absolute inset-0 opacity-[0.015] bg-[url('/stardust.png')] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-start">

              {/* Left Column (40%) */}
              <div className="w-full lg:w-2/5 flex flex-col items-start pt-4 lg:sticky lg:top-32 h-fit">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl md:text-5xl font-serif text-[#10254A] leading-[1.15] tracking-tight mb-6"
                >
                  Why Leading Accounting Firms Choose ArthaNova Accounts
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-lg text-[#55657A] font-sans leading-relaxed mb-8"
                >
                  Delivering precision, transparency and international expertise through a partnership built on quality, compliance and long-term growth.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: 48 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="h-[2px] bg-[#D4AF37] mb-6 rounded-full"
                />
              </div>

              {/* Right Column (60%) with Soft Radial Glow behind Cards */}
              <div className="w-full lg:w-3/5 relative">
                {/* Soft warm radial glow behind feature cards ONLY */}
                <div className="absolute -inset-6 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,rgba(212,175,55,0.03)_50%,transparent_75%)] rounded-[32px] blur-2xl pointer-events-none" />

                <div className="grid sm:grid-cols-2 gap-6 lg:gap-7 relative z-10">

                  {/* Top Featured Card (UK & US Expertise) - Spans 2 cols */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className="sm:col-span-2 group relative bg-gradient-to-br from-[#132B57] via-[#0F254B] to-[#0A1A37] rounded-[26px] p-8 sm:p-10 border border-[#D4AF37]/35 shadow-[0_15px_40px_rgba(10,26,55,0.18)] hover:shadow-[0_25px_60px_rgba(212,175,55,0.22)] hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden"
                  >
                    {/* Top edge inner gold highlight */}
                    <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent group-hover:via-[#D4AF37]/80 transition-all duration-300" />

                    {/* Upper-right tiny gold accent dot */}
                    <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-[#D4AF37]/70 group-hover:bg-[#D4AF37] group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_rgba(212,175,55,0.8)]" />

                    {/* Faint stardust background texture */}
                    <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-300 pointer-events-none" />

                    {/* Large Watermark Illustration in Bottom-Right Corner (5-8% opacity) */}
                    <div className="absolute -bottom-8 -right-8 text-white/5 group-hover:text-[#D4AF37]/15 group-hover:scale-105 transition-all duration-500 pointer-events-none">
                      <Globe className="w-52 h-52 sm:w-60 sm:h-60" strokeWidth={0.8} />
                    </div>

                    <div className="relative z-10">
                      {/* Compact Horizontal Layout: Icon ─────── Heading */}
                      <div className="flex items-center gap-4 mb-4">
                        {/* Gold outlined icon inside subtle circular container */}
                        <div className="w-13 h-13 shrink-0 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/12 flex items-center justify-center group-hover:border-[#D4AF37]/70 group-hover:bg-[#D4AF37]/25 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all duration-300">
                          <Globe className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                        </div>

                        {/* Thin horizontal gold line extending toward heading */}
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/20 to-transparent" />

                        {/* Heading aligned horizontally with icon */}
                        <h3 className="text-xl sm:text-2xl font-serif text-white font-semibold tracking-tight group-hover:text-[#F8F5EF] transition-colors">
                          UK & US Expertise
                        </h3>
                      </div>

                      {/* Description text underneath */}
                      <p className="text-base text-white/80 font-sans leading-relaxed max-w-xl">
                        Specialized knowledge of UK and US accounting standards, tax regulations and compliance frameworks.
                      </p>
                    </div>
                  </motion.div>

                  {/* Supporting Cards */}
                  {[
                    {
                      icon: Users,
                      Watermark: Users,
                      title: "Qualified Professionals",
                      desc: "Experienced accountants, bookkeepers and payroll specialists committed to international best practices."
                    },
                    {
                      icon: Shield,
                      Watermark: Shield,
                      title: "Data Security",
                      desc: "Strict confidentiality, secure document handling and professional processes protecting sensitive financial information."
                    },
                    {
                      icon: TrendingUp,
                      Watermark: TrendingUp,
                      title: "Scalable Partnership",
                      desc: "Flexible support designed to grow alongside your accounting firm or business without operational disruption."
                    },
                    {
                      icon: FileCheck,
                      Watermark: FileCheck,
                      title: "Accuracy & Compliance",
                      desc: "Rigorous quality reviews ensure every financial report meets statutory and professional standards."
                    },
                    {
                      icon: Laptop,
                      Watermark: Laptop,
                      title: "Modern Technology",
                      desc: "Working seamlessly with leading accounting software and cloud-based financial platforms."
                    }
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.3, delay: 0.2 + (i * 0.08) }}
                      className="group relative bg-gradient-to-br from-[#132B57] via-[#0E244B] to-[#0A1A37] rounded-[24px] p-7 md:p-8 border border-[#D4AF37]/20 shadow-[0_10px_30px_rgba(10,26,55,0.12)] hover:shadow-[0_20px_45px_rgba(10,26,55,0.25)] hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden flex flex-col justify-between"
                    >
                      {/* Top edge inner gold highlight */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent group-hover:via-[#D4AF37]/60 transition-all duration-300" />

                      {/* Upper-right tiny gold accent dot */}
                      <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50 group-hover:bg-[#D4AF37] group-hover:scale-125 transition-all duration-300 shadow-[0_0_6px_rgba(212,175,55,0.6)]" />

                      {/* Stardust texture */}
                      <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none" />

                      {/* Oversized watermark illustration in bottom-right corner (5-8% opacity default) */}
                      <div className="absolute -bottom-6 -right-6 text-white/5 group-hover:text-[#D4AF37]/15 group-hover:scale-105 transition-all duration-500 pointer-events-none">
                        <feature.Watermark className="w-36 h-36" strokeWidth={1} />
                      </div>

                      <div className="relative z-10">
                        {/* Compact Horizontal Layout: Icon ─────── Heading */}
                        <div className="flex items-center gap-3.5 mb-4">
                          {/* Gold outlined icon inside circular container */}
                          <div className="w-11 h-11 shrink-0 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 flex items-center justify-center group-hover:border-[#D4AF37]/60 group-hover:bg-[#D4AF37]/20 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all duration-300">
                            <feature.icon className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                          </div>

                          {/* Thin horizontal gold line extending toward heading */}
                          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/40 via-[#D4AF37]/15 to-transparent" />

                          {/* Heading aligned horizontally with icon */}
                          <h3 className="text-lg font-serif text-white font-semibold tracking-tight group-hover:text-[#F8F5EF] transition-colors">
                            {feature.title}
                          </h3>
                        </div>

                        {/* Description text underneath */}
                        <p className="text-sm text-white/75 font-sans leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                </div>
              </div>

            </div>
          </div>
        </section>
      </motion.div>



      {/* Our Core Services Section */}
      <motion.div variants={sectionRevealVariants}>
        <section className="py-28 md:py-36 bg-[#F8F5EE] relative overflow-hidden text-[#10254A]">
          {/* Subtle Background Blueprint Lines & Pattern (Opacity < 6%) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

          {/* Faint concentric geometric circular outlines */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[1300px] border border-[#10254A]/[0.035] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] border border-[#10254A]/[0.03] rounded-full pointer-events-none" />

          {/* Soft Gold Radial Ambient Glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none blur-3xl" />
          <div className="absolute inset-0 opacity-[0.02] bg-[url('/stardust.png')] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 xl:gap-16 items-stretch">

              {/* LEFT COLUMN: Content (35%) */}
              <div className="w-full lg:w-[35%] flex flex-col justify-between items-start pt-2">
                <div>
                  {/* Eyebrow Label */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3 }}
                    className="text-xs text-[#D4AF37] font-bold mb-5 uppercase tracking-[0.22em] flex items-center gap-2"
                  >
                    <span className="w-6 h-[1.5px] bg-[#D4AF37]" />
                    OUR EXPERTISE
                  </motion.div>

                  {/* Heading */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#10254A] leading-[1.18] tracking-tight mb-7 max-w-lg"
                  >
                    Comprehensive Accounting Solutions Designed for{' '}
                    <span className="text-[#D4AF37] font-serif italic font-normal">
                      International Growth
                    </span>
                  </motion.h2>

                  {/* Paragraph */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="text-base sm:text-lg text-[#55657A] font-sans leading-relaxed mb-10 max-w-md"
                  >
                    Supporting accounting firms and businesses across the United Kingdom and United States with reliable bookkeeping, payroll, taxation and financial reporting services.
                  </motion.p>

                  {/* Trust Bullets */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="flex flex-col gap-4 mb-10"
                  >
                    {[
                      "HMRC & IRS Compliant",
                      "Dedicated UK & US Teams",
                      "Cloud Accounting Specialists",
                      "Secure Financial Operations"
                    ].map((bullet, i) => (
                      <div key={i} className="flex items-center gap-3.5 text-[#10254A] font-medium text-sm">
                        <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.5} />
                        </div>
                        <span className="tracking-tight">{bullet}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="flex flex-wrap items-center gap-4 pt-4"
                >
                  <Button to="/services" variant="primary" className="bg-[#10254A] text-white hover:bg-[#10254A]/90 hover:shadow-lg transition-all">
                    View Services <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>

                  <Link to="/services" className="group text-sm font-semibold text-[#10254A]/80 hover:text-[#D4AF37] transition-colors flex items-center px-4 py-2.5 rounded-full border border-[#10254A]/20 hover:border-[#D4AF37]">
                    Explore Details
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1 text-[#D4AF37]" />
                  </Link>
                </motion.div>
              </div>

              {/* RIGHT CONTAINER: Center Navigation (Center) & Active Panel (Right) */}
              <div className="w-full lg:w-[65%] flex flex-col md:flex-row gap-6 lg:gap-8 relative items-stretch">

                {/* CENTER COLUMN: Service Navigation Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="md:w-5/12 lg:w-4/12 flex md:flex-col overflow-x-auto md:overflow-visible pb-3 md:pb-0 gap-3 hide-scrollbar shrink-0"
                  role="tablist"
                  aria-label="Accounting Services Navigation"
                >
                  {services.map((service, i) => {
                    const isActive = activeServiceIndex === i;
                    return (
                      <button
                        key={service.id}
                        role="tab"
                        id={`tab-${service.id}`}
                        aria-selected={isActive}
                        aria-controls={`panel-${service.id}`}
                        onMouseEnter={() => setActiveServiceIndex(i)}
                        onClick={() => setActiveServiceIndex(i)}
                        className={`group relative text-left px-4.5 py-3.5 md:px-5 md:py-4 rounded-2xl border flex items-center gap-3.5 transition-all duration-250 ease-out outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 cursor-pointer select-none whitespace-nowrap md:whitespace-normal
                          ${isActive
                            ? 'bg-white border-[#D4AF37] shadow-[0_8px_25px_rgba(16,37,74,0.08)] -translate-y-0.5'
                            : 'bg-white border-[#E7DED2] shadow-[0_2px_8px_rgba(16,37,74,0.03)] hover:bg-[#FDFBF7] hover:border-[#D4AF37]/60 hover:-translate-y-0.5'
                          }`}
                      >
                        {/* Active State Left Gold Line Accent */}
                        {isActive && (
                          <motion.div
                            layoutId="activeServiceGoldIndicator"
                            transition={{ type: "spring", stiffness: 450, damping: 35 }}
                            className="absolute left-0 top-3 bottom-3 w-1 bg-[#D4AF37] rounded-r-full pointer-events-none"
                          />
                        )}

                        {/* Service Icon Badge */}
                        <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200
                          ${isActive ? 'bg-[#10254A] text-[#D4AF37] shadow-sm' : 'bg-[#F8F5EE] text-[#10254A] group-hover:bg-[#10254A]/10 group-hover:text-[#D4AF37]'}`}
                        >
                          <service.icon className="w-4.5 h-4.5 md:w-5 md:h-5" strokeWidth={1.5} />
                        </div>

                        {/* Service Title */}
                        <span className={`text-sm font-semibold tracking-tight transition-colors duration-200 ${isActive ? 'text-[#10254A]' : 'text-[#10254A]/75 group-hover:text-[#10254A]'}`}>
                          {service.title}
                        </span>
                      </button>
                    );
                  })}
                </motion.div>

                {/* RIGHT COLUMN: Active Service Panel Preview Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="md:w-7/12 lg:w-8/12 flex flex-col"
                  role="tabpanel"
                  id={`panel-${services[activeServiceIndex].id}`}
                  aria-labelledby={`tab-${services[activeServiceIndex].id}`}
                >
                  <div className="relative rounded-[28px] p-8 sm:p-10 h-full overflow-hidden group bg-gradient-to-br from-[#10254A] via-[#0E2042] to-[#0A1833] text-white border border-[#D4AF37]/25 shadow-[0_25px_60px_rgba(16,37,74,0.22)] hover:border-[#D4AF37]/45 transition-all duration-300 flex flex-col justify-between">

                    {/* Subtle top edge inner gold highlight line */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent group-hover:via-[#D4AF37]/70 transition-all duration-300" />

                    {/* Background Decorations (Faint blueprint art & radial glow, opacity < 5%) */}
                    <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full border border-white/[0.04] pointer-events-none" />
                    <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full border border-[#D4AF37]/[0.05] pointer-events-none" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none blur-2xl" />
                    <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.02] pointer-events-none" />

                    <motion.div
                      key={activeServiceIndex}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="relative z-10 flex flex-col h-full justify-between"
                    >
                      <div>
                        {/* TOP: Large Premium Circular Icon Badge */}
                        <div className="w-16 h-16 rounded-full bg-[#0B1A36] border border-[#D4AF37]/40 shadow-[0_0_20px_rgba(212,175,55,0.18)] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-[#D4AF37]/70 transition-all duration-300">
                          {React.createElement(services[activeServiceIndex].icon, {
                            className: "w-7 h-7 text-[#D4AF37] transition-transform duration-300 group-hover:rotate-3",
                            strokeWidth: 1.5
                          })}
                        </div>

                        {/* Service Title */}
                        <h3 className="text-2xl sm:text-3xl font-serif text-white font-semibold mb-3 tracking-tight">
                          {services[activeServiceIndex].title}
                        </h3>

                        {/* Thin Gold Divider */}
                        <div className="h-[1px] w-full bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/20 to-transparent mb-5" />

                        {/* Short Description */}
                        <p className="text-base text-white/80 font-sans leading-relaxed mb-8">
                          {services[activeServiceIndex].shortDesc}
                        </p>

                        {/* MIDDLE: Checklist */}
                        <div className="space-y-4 mb-8">
                          {services[activeServiceIndex].bullets.map((bullet, i) => (
                            <div key={i} className="flex items-center gap-3.5">
                              <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.5} />
                              </div>
                              <span className="text-sm font-medium text-white/90">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* BOTTOM: Trust Badges & CTA */}
                      <div className="pt-6 border-t border-white/10 flex flex-col gap-6 mt-auto">
                        {/* Purely Visual Trust Badges Row */}
                        <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs opacity-80">
                          <div className="flex items-center gap-1.5 text-white/80">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span className="font-semibold tracking-wider text-[11px] uppercase">HMRC Ready</span>
                          </div>
                          <span className="h-3 w-[1px] bg-white/20" />
                          <div className="flex items-center gap-1.5 text-white/80">
                            <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span className="font-semibold tracking-wider text-[11px] uppercase">Companies House</span>
                          </div>
                          <span className="h-3 w-[1px] bg-white/20" />
                          <div className="flex items-center gap-1.5 text-white/80">
                            <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span className="font-semibold tracking-wider text-[11px] uppercase">UK GAAP & IRS</span>
                          </div>
                          <span className="h-3 w-[1px] bg-white/20" />
                          <div className="flex items-center gap-1.5 text-white/80">
                            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span className="font-semibold tracking-wider text-[11px] uppercase">ACCA Standards</span>
                          </div>
                        </div>

                        {/* CTA Link Button */}
                        <div className="flex items-center justify-between pt-1">
                          <Link
                            to={`/services#${services[activeServiceIndex].id}`}
                            className="group/cta inline-flex items-center px-6 py-3 rounded-full bg-[#D4AF37] text-[#10254A] font-semibold text-sm hover:bg-white transition-all duration-200 shadow-[0_4px_15px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.3)] hover:-translate-y-0.5"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/cta:translate-x-1" />
                          </Link>
                        </div>
                      </div>

                    </motion.div>
                  </div>
                </motion.div>

              </div>

            </div>
          </div>
        </section>
      </motion.div>



      {/* Tech Partners Section */}

      <motion.div variants={sectionRevealVariants}>

        <TechPartners />

      </motion.div>



      {/* Global Presence */}

      <motion.div variants={sectionRevealVariants}>

        <GlobalPresence />

      </motion.div>



      {/* How We Work */}

      <motion.div variants={sectionRevealVariants}>

        <HowWeWork />

      </motion.div>



      {/* Client Confidence (Replaces Testimonials) */}

      <motion.div variants={sectionRevealVariants}>

        <ClientConfidence />

      </motion.div>



      {/* CTA Banner */}

      <motion.div variants={sectionRevealVariants}>

        <CtaBanner

          title="Elevate Your Financial Strategy"

          description="Schedule a confidential consultation with our senior partners to discuss your specific outsourcing requirements."

          primaryActionText="Contact Our Team"

        />

      </motion.div>

    </motion.div>

  );

};


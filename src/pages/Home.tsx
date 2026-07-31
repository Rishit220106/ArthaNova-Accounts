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
import { Globe, LayoutDashboard, FileText, CheckCircle2, ArrowRight, BarChart3, Calculator, Building2, Users, Shield, TrendingUp, FileCheck, Laptop } from 'lucide-react';
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
        title="ArthaNovaccounts | International Accounting & Tax Advisory"
        description="Professional UK, US & Australia Accounting, Bookkeeping, Payroll & Tax Advisory Services."
        canonical="/"
        schema={`{"@context":"https://schema.org","@type":"AccountingService","name":"ArthaNovaccounts","url":"https://arthanovaaccounts.com","logo":"https://arthanovaaccounts.com/logo-an-mark-og.png","description":"Professional UK, US & Australia Accounting, Bookkeeping, Payroll & Tax Advisory Services.","email":"${BUSINESS_CONTACT.email}","areaServed":[{"@type":"Country","name":"United Kingdom"},{"@type":"Country","name":"United States"},{"@type":"Country","name":"Australia"}]}`}
      />

      {/* Hero Section */}
      <motion.div variants={sectionRevealVariants}>
        <section className="bg-[#07162D] text-white pt-32 pb-20 lg:pt-32 lg:pb-24 px-6 relative overflow-hidden min-h-[80vh] flex items-center">
          {/* Background Gradients & Textures */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#07162D] via-[#102547] to-[#07162D] opacity-95" />

          {/* Subtle radial glow & Premium lighting */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(19,45,86,0.3)_0%,transparent_60%)] pointer-events-none blur-3xl" />

          {/* Faint orbital financial lines */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] md:w-[120%] aspect-square border border-white/[0.03] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] md:w-[90%] aspect-square border border-white/[0.04] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] aspect-square border border-white/[0.05] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-8 lg:gap-x-16 items-center lg:items-start pt-8 lg:pt-0">

            {/* Left Side: Top Copy */}
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left lg:pr-8 order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="inline-flex items-center rounded-full border border-white/10 bg-[#132D56]/40 px-4 py-1.5 text-sm font-medium text-white/90 mb-6 md:mb-8 backdrop-blur-md shadow-premium"
              >
                <Globe className="mr-2 h-4 w-4 text-[#D4AF37]" />
                International Accounting Experts
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-[3rem] lg:text-[4rem] xl:text-[3.75rem] font-serif leading-[1.15] xl:leading-[1.1] mb-6 tracking-tight text-white w-full max-w-[90%] sm:max-w-none mx-auto lg:mx-0 text-balance"
              >
                Premium International <br className="hidden lg:block" />
                Accounting & <br className="hidden lg:block" />
                Bookkeeping Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
                className="text-lg md:text-xl text-text-secondary/90 font-sans leading-relaxed w-full max-w-[90%] sm:max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10 text-pretty"
              >
                Helping accounting firms and businesses across the UK and United States scale efficiently through professional bookkeeping, payroll, statutory compliance and financial reporting.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start"
              >
                <Button size="lg" variant="primary">
                  Start a Conversation
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </Button>
                <Button to="/services" size="lg" variant="outline" className="text-white border-white/20 hover:border-[#D4AF37]/50 hover:bg-white/10 h-12 md:h-14 px-8 text-base w-full sm:w-auto backdrop-blur-sm transition-all duration-200">
                  View Services
                </Button>
              </motion.div>
            </div>

            {/* Right Side: Premium 3D Orbiting Glass Carousel */}
            <div className="w-full relative flex items-center justify-center order-2 lg:row-span-2 py-4 md:py-0 mt-4 md:mt-8 lg:mt-0">
              <OrbitingHeroCarousel />
            </div>

            {/* Left Side Bottom: Stats & Trust (Moved here for mobile ordering) */}
            <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left order-3 lg:col-start-1 mt-12 md:mt-24 lg:mt-0 lg:-mt-4">
              {/* Premium Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 0.4 }}
                className="w-full lg:w-auto mt-2 lg:mt-0 grid grid-cols-2 gap-4 sm:gap-6 lg:flex lg:flex-row lg:items-center lg:justify-start lg:gap-x-10 lg:gap-y-0"
              >
                {/* Desktop View (Hidden on mobile/tablet) */}
                <div className="hidden lg:flex flex-col items-start">
                  <span className="text-white font-serif text-3xl leading-tight mb-1 tracking-tight">Founder-Led</span>
                  <span className="text-[11px] text-white/70 tracking-widest uppercase font-medium">Expertise</span>
                </div>
                <div className="hidden lg:block w-px h-10 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
                <div className="hidden lg:flex flex-col items-start">
                  <span className="text-white font-serif text-3xl leading-tight mb-1 tracking-tight">3</span>
                  <span className="text-[11px] text-white/70 tracking-widest uppercase font-medium">Global Jurisdictions</span>
                </div>
                <div className="hidden lg:block w-px h-10 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
                <div className="hidden lg:flex flex-col items-start">
                  <span className="text-white font-serif text-3xl leading-tight mb-1 tracking-tight">ACCA & CA</span>
                  <span className="text-[11px] text-white/70 tracking-widest uppercase font-medium">Certified Professionals</span>
                </div>
                <div className="hidden lg:block w-px h-10 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
                <div className="hidden lg:flex flex-col items-start">
                  <span className="text-white font-serif text-3xl leading-tight mb-1 tracking-tight">Dedicated</span>
                  <span className="text-[11px] text-white/70 tracking-widest uppercase font-medium">Client Support</span>
                </div>

                {/* Mobile & Tablet View (Hidden on desktop) */}
                <div className="lg:hidden flex flex-col items-center sm:items-start text-center sm:text-left p-5 sm:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-premium relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
                  <span className="text-white font-serif text-xl sm:text-2xl leading-tight mb-1">Founder-Led</span>
                  <span className="text-[10px] sm:text-xs text-white/70 tracking-widest uppercase font-medium">Expertise</span>
                </div>
                <div className="lg:hidden flex flex-col items-center sm:items-start text-center sm:text-left p-5 sm:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-premium relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
                  <span className="text-white font-serif text-xl sm:text-2xl leading-tight mb-1">3 Global</span>
                  <span className="text-[10px] sm:text-xs text-white/70 tracking-widest uppercase font-medium">Jurisdictions</span>
                </div>
                <div className="lg:hidden flex flex-col items-center sm:items-start text-center sm:text-left p-5 sm:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-premium relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
                  <span className="text-white font-serif text-xl sm:text-2xl leading-tight mb-1">ACCA & CA</span>
                  <span className="text-[10px] sm:text-xs text-white/70 tracking-widest uppercase font-medium">Certified</span>
                </div>
                <div className="lg:hidden flex flex-col items-center sm:items-start text-center sm:text-left p-5 sm:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-premium relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
                  <span className="text-white font-serif text-xl sm:text-2xl leading-tight mb-1">Dedicated</span>
                  <span className="text-[10px] sm:text-xs text-white/70 tracking-widest uppercase font-medium">Client Support</span>
                </div>
              </motion.div>

              {/* Trust Row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.5 }}
                className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/10 w-full max-w-xl"
              >
                <p className="text-[10px] md:text-xs text-text-secondary/50 font-semibold mb-4 uppercase tracking-[0.2em] text-center lg:text-left">
                  Trusted by firms using
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 md:gap-x-12 gap-y-4 text-text-secondary/40 font-serif text-lg md:text-xl tracking-wide">
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
            <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
              <motion.div
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-white/10"
              />
            </div>
          </motion.div>
        </section>
      </motion.div>

      {/* Why ArthaNovaccounts Section */}
      <motion.div variants={sectionRevealVariants}>
        <section className="py-32 bg-[#102547] relative overflow-hidden">
          {/* Ambient lighting / noise */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.03)_0%,transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('/stardust.png')] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">

              {/* Left Column (40%) */}
              <div className="w-full lg:w-2/5 flex flex-col items-start pt-4 lg:sticky lg:top-32 h-fit">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.2 }}
                  className="text-4xl md:text-5xl font-serif text-text-primary leading-[1.15] tracking-tight mb-6"
                >
                  Why Leading Accounting Firms Choose ArthaNovaccounts
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="text-lg text-text-secondary font-sans leading-relaxed mb-8"
                >
                  Delivering precision, transparency and international expertise through a partnership built on quality, compliance and long-term growth.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: 40 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="h-px bg-accent mb-12"
                />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  <Link to="/about" className="group inline-flex items-center text-sm font-medium text-[#D4AF37] hover:text-[#D4AF37]/80 transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </motion.div>
              </div>

              {/* Right Column (60%) */}
              <div className="w-full lg:w-3/5 grid sm:grid-cols-2 gap-6 lg:gap-8">

                {/* Featured Card (Spans full width) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="sm:col-span-2 group relative bg-[#0B1D38] rounded-3xl p-10 border border-white/5 shadow-premium hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] hover:-translate-y-1.5 transition-all duration-200 ease-out overflow-hidden"
                >
                  {/* Subtle glass highlight / accent line on hover */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/0 to-transparent group-hover:via-[#D4AF37]/50 transition-all duration-200" />
                  <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-200 pointer-events-none" />

                  <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center relative z-10">
                    <div className="w-16 h-16 shrink-0 rounded-full bg-[#132D56] border border-white/10 shadow-inner flex items-center justify-center group-hover:bg-[#132D56]/80 transition-colors duration-200">
                      <Globe className="w-7 h-7 text-white/90 group-hover:text-[#D4AF37] group-hover:rotate-3 transition-all duration-200" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif text-white mb-3">UK & US Expertise</h3>
                      <p className="text-base text-white/70 leading-relaxed">Specialized knowledge of UK and US accounting standards, tax regulations and compliance frameworks.</p>
                    </div>
                  </div>
                </motion.div>

                {/* Supporting Cards */}
                {[
                  {
                    icon: Users,
                    title: "Qualified Professionals",
                    desc: "Experienced accountants, bookkeepers and payroll specialists committed to international best practices."
                  },
                  {
                    icon: Shield,
                    title: "Data Security",
                    desc: "Strict confidentiality, secure document handling and professional processes protecting sensitive financial information."
                  },
                  {
                    icon: TrendingUp,
                    title: "Scalable Partnership",
                    desc: "Flexible support designed to grow alongside your accounting firm or business without operational disruption."
                  },
                  {
                    icon: FileCheck,
                    title: "Accuracy & Compliance",
                    desc: "Rigorous quality reviews ensure every financial report meets statutory and professional standards."
                  },
                  {
                    icon: Laptop,
                    title: "Modern Technology",
                    desc: "Working seamlessly with leading accounting software and cloud-based financial platforms."
                  }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.2, delay: 0.3 + (i * 0.1) }}
                    className="group relative bg-[#0B1D38] rounded-2xl p-8 border border-white/5 shadow-premium hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] hover:-translate-y-1.5 transition-all duration-200 ease-out overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/0 to-transparent group-hover:via-[#D4AF37]/40 transition-all duration-200" />
                    <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-200 pointer-events-none" />

                    <div className="w-12 h-12 rounded-full bg-[#132D56] border border-white/10 shadow-inner flex items-center justify-center mb-6 group-hover:bg-[#132D56]/80 transition-colors duration-200 relative z-10">
                      <feature.icon className="w-5 h-5 text-white/90 group-hover:text-[#D4AF37] group-hover:rotate-3 transition-all duration-200" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-serif text-white mb-3 relative z-10">{feature.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed relative z-10">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>
      </motion.div>

      {/* Our Core Services Section */}
      <motion.div variants={sectionRevealVariants}>
        <section className="py-32 bg-[#F7F3EA] relative overflow-hidden">
          {/* Soft radial blur for texture */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05)_0%,transparent_50%)] pointer-events-none blur-3xl" />
          <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

              {/* Left Column (40%) */}
              <div className="w-full lg:w-2/5 flex flex-col items-start pt-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.2 }}
                  className="text-xs text-[#D4AF37] font-bold mb-4 uppercase tracking-[0.2em]"
                >
                  OUR EXPERTISE
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="text-4xl md:text-5xl font-serif text-[#07162D] leading-[1.15] tracking-tight mb-6"
                >
                  Comprehensive Accounting Solutions Designed for International Growth
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="text-lg text-[#07162D]/70 font-sans leading-relaxed mb-10"
                >
                  Supporting accounting firms and businesses across the United Kingdom and United States with reliable bookkeeping, payroll, taxation and financial reporting services.
                </motion.p>

                {/* Trust Bullets */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className="flex flex-col gap-4 mb-12"
                >
                  {[
                    "HMRC & IRS Compliant",
                    "Dedicated UK & US Teams",
                    "Cloud Accounting Specialists",
                    "Secure Financial Operations"
                  ].map((bullet, i) => (
                    <div key={i} className="flex items-center gap-3 text-[#07162D] font-medium text-sm">
                      <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                      </div>
                      {bullet}
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="flex flex-wrap items-center gap-8"
                >
                  <Button to="/services" variant="primary">View Services <ArrowRight className="w-4 h-4 ml-1.5" /></Button>
                  <Link to="/services" className="group text-sm font-medium text-[#07162D]/70 hover:text-[#07162D] transition-colors flex items-center">
                    View Services
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>

              {/* Right Column (60%) */}
              <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-8 lg:gap-12 relative">

                {/* Mobile/Tablet: Horizontal scroll tabs, Desktop: Vertical list */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className="md:w-1/3 flex md:flex-col overflow-x-auto md:overflow-visible pb-4 md:pb-0 gap-2 hide-scrollbar shrink-0"
                  role="tablist"
                  aria-label="Accounting Services"
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
                        className="group relative text-left px-5 py-4 rounded-[20px] whitespace-nowrap md:whitespace-normal outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 cursor-pointer select-none transition-colors duration-200"
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeServiceGlassCapsule"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 32,
                              mass: 0.8
                            }}
                            className="glass-capsule-active absolute inset-0 pointer-events-none overflow-hidden"
                          >
                            <div className="glass-reflection absolute top-0 left-0 right-0 h-1/2 rounded-t-[20px] pointer-events-none" />
                          </motion.div>
                        )}
                        <span className={`relative z-10 font-medium transition-colors duration-200 block ${isActive ? 'text-[#07162D] font-bold' : 'text-[#07162D]/60 group-hover:text-[#07162D]'}`}>
                          {service.title}
                        </span>
                      </button>
                    );
                  })}
                </motion.div>

                {/* Active Service Panel */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="md:w-2/3"
                  role="tabpanel"
                  id={`panel-${services[activeServiceIndex].id}`}
                  aria-labelledby={`tab-${services[activeServiceIndex].id}`}
                >
                  <div className="relative rounded-[2rem] p-8 md:p-10 h-full overflow-hidden group
                    bg-white/45 backdrop-blur-2xl backdrop-saturate-[1.7]
                    border border-white/70
                    shadow-[0_25px_70px_-20px_rgba(7,22,45,0.18),0_8px_24px_-8px_rgba(212,175,55,0.15),inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-20px_40px_-25px_rgba(212,175,55,0.12)]
                    hover:shadow-[0_30px_80px_-18px_rgba(7,22,45,0.22),0_10px_30px_-8px_rgba(212,175,55,0.22),inset_0_1px_1px_rgba(255,255,255,0.95),inset_0_-20px_40px_-25px_rgba(212,175,55,0.18)]
                    hover:bg-white/55
                    transition-all duration-300"
                  >
                    {/* specular sweep — light catching the top-left of the glass */}
                    <div className="absolute -top-1/4 -left-1/6 w-1/2 h-1/2 rounded-full bg-white/60 blur-3xl rotate-12 pointer-events-none" />

                    {/* thin refractive edge ring */}
                    <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/50 pointer-events-none" />

                    {/* warm ambient tint bleeding through from the page behind it */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F7F3EA]/40 via-transparent to-[#D4AF37]/[0.04] pointer-events-none" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full filter blur-[80px] group-hover:bg-[#D4AF37]/20 transition-colors duration-300 pointer-events-none" />

                    {/* We use an AnimatePresence pattern, or just animate the key so it re-triggers */}
                    <motion.div
                      key={activeServiceIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="relative z-10 flex flex-col h-full justify-between"
                    >
                      <div>
                        <div className="w-16 h-16 rounded-2xl bg-[#07162D]/90 backdrop-blur-sm border border-white/10 shadow-[0_8px_20px_-6px_rgba(7,22,45,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)] flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-200">
                          {React.createElement(services[activeServiceIndex].icon, {
                            className: "w-8 h-8 text-[#F7F3EA] group-hover:text-[#D4AF37] group-hover:-rotate-3 transition-all duration-200",
                            strokeWidth: 1.5
                          })}
                        </div>

                        <h3 className="text-3xl font-serif text-[#07162D] mb-4 leading-tight">
                          {services[activeServiceIndex].title}
                        </h3>

                        <p className="text-base text-[#07162D]/70 leading-relaxed mb-8">
                          {services[activeServiceIndex].shortDesc}
                        </p>

                        <div className="space-y-4 mb-10">
                          {services[activeServiceIndex].bullets.map((bullet, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" strokeWidth={2} />
                              <span className="text-sm font-medium text-[#07162D]">{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link to={`/services#${services[activeServiceIndex].id}`} className="group/btn inline-flex items-center text-sm font-semibold text-[#07162D] hover:text-[#D4AF37] transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1.5" />
                      </Link>
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

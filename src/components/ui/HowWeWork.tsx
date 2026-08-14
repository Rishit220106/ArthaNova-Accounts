import React, { useRef, useState } from 'react';
import { motion, useScroll } from 'motion/react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import {
  PhoneCall,
  FileSearch,
  UserPlus,
  LineChart,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Award,
  UserCheck,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Check
} from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Discovery Call',
    shortTag: 'Initial Consultation',
    description: 'We analyze your business structure, accounting requirements, software stack (Xero/QuickBooks), and statutory compliance needs.',
    icon: PhoneCall,
    metric: 'Custom Blueprint'
  },
  {
    id: '02',
    title: 'Assessment & Planning',
    shortTag: 'Workflow Design',
    description: 'Our specialists review your financial processes and design a streamlined accounting operating model tailored to your business.',
    icon: FileSearch,
    metric: 'Tailored Strategy'
  },
  {
    id: '03',
    title: 'Seamless Onboarding',
    shortTag: 'Zero Interruption',
    description: 'Secure document collection, cloud accounting integration, and dedicated assignment of certified ACCA/CA specialists.',
    icon: UserPlus,
    metric: 'Dedicated Lead'
  },
  {
    id: '04',
    title: 'Financial Operations',
    shortTag: 'Daily Precision',
    description: 'Real-time bookkeeping, BACS payroll, CT600 tax preparation, and board-ready management reporting executed smoothly.',
    icon: LineChart,
    metric: 'Rigorous Standards'
  },
  {
    id: '05',
    title: 'Continuous Support',
    shortTag: 'Proactive Advisory',
    description: 'Regular financial health checks, cashflow forecasting, and ongoing regulatory compliance monitoring for long-term clarity.',
    icon: ShieldCheck,
    metric: 'Continuous Protection'
  }
];

export const HowWeWork = () => {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 relative bg-[#FAF9F5] overflow-hidden text-[#10254A]"
    >
      {/* Subtle Background Blueprint Lines & Pattern (Opacity < 6%) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Faint stardust texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('/stardust.png')] pointer-events-none" />

      {/* Ambient Radial Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)] filter blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 text-[#10254A] font-bold tracking-[0.2em] uppercase text-[11px] mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            OUR OPERATIONAL FRAMEWORK
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#10254A] mb-6 leading-[1.15] tracking-tight"
          >
            How We Deliver Exceptional{' '}
            <span className="text-[#D4AF37] font-serif italic font-normal">
              Financial Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#667085] font-sans leading-relaxed font-normal"
          >
            A structured, client-focused framework engineered for accuracy, statutory compliance, and strategic long-term partnership.
          </motion.p>
        </div>

        {/* Timeline & Interactive Command Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-20 relative items-start">

          {/* Left Column: Executive Workflow Timeline (7/12) */}
          <div className="w-full lg:w-7/12 relative">
            {/* Elegant Vertical Gold Timeline Bar */}
            <div className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-[#D4AF37]/25 rounded-full overflow-hidden">
              <motion.div
                className="w-full bg-[#D4AF37]"
                style={{ height: scrollYProgress, transformOrigin: "top" }}
              />
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isBlueCard = index % 2 === 0; // Alternating permanent blue cards (Step 01, Step 03, Step 05)
                const IconComponent = step.icon;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    onMouseEnter={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                    className="relative pl-16 sm:pl-20 cursor-pointer group select-none"
                  >
                    {/* Glowing Connection Nodes */}
                    <div
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 z-10 ${
                        isBlueCard
                          ? 'bg-[#10254A] border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.25)]'
                          : 'bg-white border border-[#E7DED2] shadow-sm group-hover:border-[#D4AF37]/60'
                      } ${isActive ? 'scale-110 border-[#D4AF37] ring-2 ring-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.4)]' : ''}`}
                    >
                      <IconComponent
                        className={`w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300 ${
                          isBlueCard
                            ? 'text-[#D4AF37]'
                            : 'text-[#10254A] group-hover:text-[#D4AF37]'
                        } ${isActive ? 'scale-110 rotate-3' : ''}`}
                        strokeWidth={1.5}
                      />
                      {isActive && (
                        <div className="absolute inset-0 rounded-2xl border border-[#D4AF37] animate-ping opacity-40 pointer-events-none" />
                      )}
                    </div>

                    {/* Milestone Card */}
                    <div
                      className={`rounded-[22px] p-6 sm:p-7 border transition-all duration-300 relative overflow-hidden ${
                        isBlueCard
                          ? 'bg-gradient-to-r from-[#10254A] via-[#142C54] to-[#10254A] text-white border-[#D4AF37]/40 shadow-[0_10px_30px_rgba(16,37,74,0.15)]'
                          : 'bg-white text-[#10254A] border-[#E7DED2] shadow-[0_4px_16px_rgba(16,37,74,0.04)] group-hover:bg-[#FDFBF7] group-hover:border-[#D4AF37]/50'
                      } ${
                        isActive 
                          ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/40 shadow-[0_18px_45px_rgba(16,37,74,0.22)] -translate-y-1.5' 
                          : 'hover:-translate-y-0.5'
                      }`}
                    >
                      {/* Top Specular Inner Line */}
                      <div className={`absolute top-0 left-0 right-0 h-[1.5px] transition-all duration-300 ${
                        isBlueCard || isActive
                          ? 'bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-100'
                          : 'bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent group-hover:via-[#D4AF37]/60'
                      }`} />

                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          {/* Gold Step Pill */}
                          <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase transition-colors ${
                            isBlueCard
                              ? 'bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37]'
                              : 'bg-[#10254A]/10 border border-[#10254A]/20 text-[#10254A]'
                          }`}>
                            STEP {step.id}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                          <span className={`text-xs font-semibold tracking-wide uppercase ${isBlueCard ? 'text-white/70' : 'text-[#667085]'}`}>
                            {step.shortTag}
                          </span>
                        </div>

                        {/* Status Badge Pill */}
                        <span className={`text-[11px] font-bold px-3 py-1 rounded-full border shadow-sm transition-all duration-300 ${
                          isBlueCard
                            ? 'bg-[#10254A] border-[#D4AF37]/60 text-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.2)]'
                            : 'bg-[#F8F5EE] border-[#E7DED2] text-[#10254A] group-hover:border-[#D4AF37]/40'
                        }`}>
                          {step.metric}
                        </span>
                      </div>

                      <h3 className={`text-xl sm:text-2xl font-serif mb-2.5 font-semibold tracking-tight transition-colors duration-300 ${
                        isBlueCard ? 'text-white' : 'text-[#10254A]'
                      }`}>
                        {step.title}
                      </h3>

                      <p className={`text-sm sm:text-base leading-relaxed font-sans ${
                        isBlueCard ? 'text-white/80' : 'text-[#667085]'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Operations Dashboard (5/12) */}
          <div className="w-full lg:w-5/12 relative lg:sticky lg:top-32 min-h-[480px] flex items-center justify-center">
            {/* Glowing Aura Backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative w-full max-w-lg">

              {/* Financial Command Panel */}
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.97, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-gradient-to-b from-[#10254A] via-[#0E2042] to-[#0A1833] text-white border border-[#D4AF37]/30 rounded-[28px] p-6 sm:p-8 shadow-[0_25px_60px_rgba(16,37,74,0.22)] relative overflow-hidden"
              >
                {/* Specular top rim line */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

                {/* Header with macOS Dots & Status */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_6px_rgba(255,95,86,0.6)]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_6px_rgba(255,189,46,0.6)]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_6px_rgba(39,201,63,0.6)]" />
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_8px_#D4AF37]" />
                    <span className="text-[11px] font-bold tracking-wider text-white uppercase">
                      Operational Status: Step {steps[activeStep].id}
                    </span>
                  </div>
                </div>

                {/* Step Operational Card */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.07] border border-white/10 shadow-inner">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white mb-0.5">
                          {steps[activeStep].title}
                        </div>
                        <div className="text-xs text-white/70 font-medium">
                          Status: Active & Operational
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/15 px-3 py-1 rounded-full border border-[#D4AF37]/30">
                      LIVE
                    </span>
                  </div>

                  {/* Operational Quality Execution Chart */}
                  <div className="p-5 rounded-2xl bg-white/[0.05] border border-white/10 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-white/80 tracking-wider uppercase">
                        Execution Performance
                      </span>
                      <span className="text-xs font-bold text-[#D4AF37] flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-[#D4AF37]" /> Peak Standards
                      </span>
                    </div>

                    {/* Chart Bars using Gold, Slate, and Light Grey */}
                    <div className="flex items-end gap-3 h-28 pt-2">
                      {[55, 75, 48, 92, 68, 88, 100].map((h, i) => {
                        const isGold = i === (activeStep % 7) || i === 3;
                        const isSlate = i % 2 === 0;
                        return (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                            <div
                              className={`w-full rounded-t-md transition-all duration-500 relative group ${isGold
                                  ? 'bg-gradient-to-t from-[#D4AF37] to-[#FFF3C4] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                                  : isSlate
                                    ? 'bg-gradient-to-t from-[#10254A] to-[#25457B]'
                                    : 'bg-gradient-to-t from-[#E7DED2]/40 to-[#E7DED2]/80'
                                }`}
                              style={{ height: `${h}%` }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Progress Indicators Below Chart */}
                  <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-white/80">Compliance Monitoring</span>
                        <span className="text-[#D4AF37] font-bold">100%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#D4AF37] rounded-full w-[100%]" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-white/80">Payroll & Audit Precision</span>
                        <span className="text-[#D4AF37] font-bold">98%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#D4AF37] to-white rounded-full w-[98%]" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-white/80">VAT & Tax Filing</span>
                        <span className="text-[#D4AF37] font-bold">95%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#D4AF37] rounded-full w-[95%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Trust Badge inside Panel */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                  <span className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> ACCA & CA Certified Process
                  </span>
                  <span className="font-bold text-white">HMRC & IRS Compliant</span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

        {/* Bottom KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-16 relative">
          {[
            { value: '1 Day', label: 'Response Time', icon: Zap, highlight: 'Rapid SLAs' },
            { value: 'Thorough', label: 'Multi-Tier Quality Audits', icon: Award, highlight: 'Zero-Error Target' },
            { value: 'Dedicated', label: 'Single Point of Contact', icon: UserCheck, highlight: 'Direct Access' },
            { value: 'Proactive', label: 'Statutory Compliance', icon: ShieldCheck, highlight: 'Continuous Protection' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-gradient-to-br from-[#10254A] via-[#142C54] to-[#10254A] text-white border border-[#D4AF37]/35 rounded-2xl p-6 flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-[0_20px_45px_rgba(212,175,55,0.18)] transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-[0_10px_30px_rgba(16,37,74,0.18)]"
            >
              {/* Top gold specular line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent group-hover:via-[#D4AF37] transition-all duration-300" />

              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-full bg-[#10254A] border border-[#D4AF37]/40 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-all duration-300 shadow-sm">
                  <item.icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold text-[#D4AF37] bg-[#D4AF37]/15 px-2.5 py-1 rounded-full border border-[#D4AF37]/30 uppercase tracking-wider">
                  {item.highlight}
                </span>
              </div>

              <div>
                <div className="text-3xl font-serif font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                  {item.value}
                </div>
                <div className="text-xs font-bold text-white/70 uppercase tracking-widest">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3 }}
          className="relative bg-gradient-to-r from-[#10254A] via-[#142C54] to-[#10254A] text-white border border-[#D4AF37]/30 shadow-[0_25px_60px_rgba(16,37,74,0.22)] rounded-[28px] p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden group"
        >
          {/* Gold specular rim line */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full filter blur-[100px] pointer-events-none group-hover:bg-[#D4AF37]/20 transition-colors duration-500" />

          <div className="relative z-10 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-2.5 leading-tight font-semibold">
              Ready to experience a seamless accounting workflow?
            </h3>
            <p className="text-white/80 text-base font-sans font-normal max-w-xl">
              Connect with our senior accounting partners today and transform your financial management.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 relative z-10 w-full sm:w-auto">
            <Button to="/contact" size="lg" variant="primary" className="w-full sm:w-auto bg-[#D4AF37] text-[#10254A] font-semibold hover:bg-white transition-all shadow-[0_4px_15px_rgba(212,175,55,0.25)]">
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button to="/services" size="lg" className="bg-white text-[#10254A] border border-white hover:bg-[#F8F5EE] hover:border-[#D4AF37] hover:text-[#10254A] px-8 h-12 md:h-14 text-base w-full sm:w-auto transition-all font-semibold shadow-md">
              View Services
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

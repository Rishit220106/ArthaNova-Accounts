import React, { useRef, useState } from 'react';
import { motion, useScroll } from 'motion/react';
import { Button } from './Button';
import {
  PhoneCall,
  FileSearch,
  UserPlus,
  LineChart,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Zap,
  Award,
  UserCheck,
  ArrowRight,
  TrendingUp,
  Sparkles
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
      className="py-24 md:py-32 relative bg-[#07162D] overflow-hidden rounded-[2.5rem] mx-4 lg:mx-8 my-20 shadow-[0_30px_90px_rgba(5,14,29,0.8)] border border-white/10"
    >
      {/* Dynamic Background Mesh & Ambient Glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D38] via-[#07162D] to-[#0A1A33]" />
      <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.04] pointer-events-none" />

      {/* Soft Luminous Orbs */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_70%)] filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.14)_0%,transparent_70%)] filter blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 text-[#D4AF37] font-semibold tracking-[0.2em] uppercase text-[11px] mb-6 shadow-[0_4px_20px_rgba(212,175,55,0.15)] backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            OUR OPERATIONAL FRAMEWORK
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.12] tracking-tight text-balance"
          >
            How We Deliver Exceptional <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-white via-[#F7F3EA] to-[#D4AF37] bg-clip-text text-transparent">
              Financial Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 font-sans leading-relaxed font-light text-pretty"
          >
            A structured, client-focused framework engineered for accuracy, statutory compliance, and strategic long-term partnership.
          </motion.p>
        </div>

        {/* Timeline & Interactive Command Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-24 relative items-start">

          {/* Left Column: Interactive Timeline Steps */}
          <div className="w-full lg:w-7/12 relative">
            {/* Timeline Vertical Progress Line */}
            <div className="absolute left-[31px] top-6 bottom-6 w-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="w-full bg-gradient-to-b from-[#D4AF37] via-[#3B82F6] to-[#D4AF37]"
                style={{ height: scrollYProgress, transformOrigin: "top" }}
              />
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const IconComponent = step.icon;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.2, delay: index * 0.08 }}
                    onMouseEnter={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                    className="relative pl-20 cursor-pointer group select-none"
                  >
                    {/* Glowing Timeline Icon Badge */}
                    <div
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 z-10 ${isActive
                          ? 'bg-[#102547] border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)] scale-110'
                          : 'bg-[#132D56]/80 border border-white/15 group-hover:border-[#D4AF37]/50 group-hover:scale-105'
                        }`}
                    >
                      <IconComponent
                        className={`w-7 h-7 transition-all duration-300 ${isActive
                            ? 'text-[#D4AF37] scale-110 rotate-3'
                            : 'text-white/60 group-hover:text-white'
                          }`}
                      />
                      {isActive && (
                        <div className="absolute inset-0 rounded-2xl border border-[#D4AF37] animate-ping opacity-30 pointer-events-none" />
                      )}
                    </div>

                    {/* Glass Step Card */}
                    <div
                      className={`rounded-2xl p-6 md:p-7 border transition-all duration-300 relative overflow-hidden ${isActive
                          ? 'bg-gradient-to-r from-[#132D56]/90 via-[#102547]/80 to-[#132D56]/90 border-[#D4AF37]/50 shadow-[0_15px_45px_rgba(0,0,0,0.3),0_0_20px_rgba(212,175,55,0.15)] -translate-y-1'
                          : 'bg-[#132D56]/30 backdrop-blur-md border-white/5 group-hover:bg-[#132D56]/60 group-hover:border-white/20 group-hover:-translate-y-0.5'
                        }`}
                    >
                      {/* Specular top rim line */}
                      <div className={`absolute top-0 left-0 right-0 h-[1.5px] transition-all duration-300 ${isActive
                          ? 'bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-100'
                          : 'bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/30'
                        }`} />

                      <div className="flex items-center justify-between gap-4 mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-bold tracking-widest text-[#D4AF37] font-serif">
                            STEP {step.id}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50" />
                          <span className="text-[11px] font-medium text-white/50 tracking-wide uppercase">
                            {step.shortTag}
                          </span>
                        </div>

                        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border transition-all duration-300 ${isActive
                            ? 'bg-[#D4AF37]/15 border-[#D4AF37]/40 text-[#D4AF37]'
                            : 'bg-white/5 border-white/10 text-white/50 group-hover:text-white/80'
                          }`}>
                          {step.metric}
                        </span>
                      </div>

                      <h3 className={`text-2xl font-serif mb-2.5 transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/90 group-hover:text-white'
                        }`}>
                        {step.title}
                      </h3>

                      <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Operational Command Visual (Hidden on mobile <1024px, visible on lg+) */}
          <div className="hidden lg:flex w-full lg:w-5/12 relative lg:sticky lg:top-32 min-h-[480px] items-center justify-center">
            {/* Glowing Aura Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/10 via-transparent to-[#D4AF37]/15 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative w-full max-w-lg">

              {/* VisionOS Financial Command Glass Panel */}
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-gradient-to-b from-[#102547]/95 to-[#0B1D38]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(212,175,55,0.1)] relative overflow-hidden"
              >
                {/* Specular top rim glass edge */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                {/* Panel Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span className="text-[11px] font-bold tracking-wider text-white/80 uppercase">
                      Active Phase: Step {steps[activeStep].id}
                    </span>
                  </div>
                </div>

                {/* Dynamic Content Displayed Based on Active Step */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white mb-0.5">
                          {steps[activeStep].title}
                        </div>
                        <div className="text-xs text-white/60 font-medium">
                          Status: Active & Operational
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20">
                      Live
                    </span>
                  </div>

                  {/* Qualitative Execution Visual */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-white/70 tracking-wider uppercase">
                        Execution Quality
                      </span>
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" /> Peak Standards
                      </span>
                    </div>

                    <div className="flex items-end gap-3 h-28 pt-2">
                      {[55, 75, 48, 92, 68, 88, 100].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                          <div
                            className={`w-full rounded-t-md transition-all duration-500 relative group ${i === (activeStep % 7)
                                ? 'bg-gradient-to-t from-[#D4AF37] to-[#FCE7F3] shadow-[0_0_15px_rgba(212,175,55,0.5)]'
                                : 'bg-gradient-to-t from-white/20 to-white/5'
                              }`}
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Trust Badge inside Panel */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                  <span className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> ACCA & CA Certified Process
                  </span>
                  <span className="font-bold text-white/90">HMRC & IRS Compliant</span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

        {/* Bottom Operational Excellence Cards (Pure Qualitative Text, No Numbers) */}
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
              className="group relative bg-[#132D56]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-[#132D56]/80 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Top gold accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/0 to-transparent group-hover:via-[#D4AF37]/70 transition-all duration-300" />

              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37]/15 group-hover:border-[#D4AF37]/30 transition-colors">
                  <item.icon className="w-5 h-5 text-white/70 group-hover:text-[#D4AF37] transition-colors" />
                </div>
                <span className="text-[10px] font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/20 uppercase tracking-wider">
                  {item.highlight}
                </span>
              </div>

              <div>
                <div className="text-3xl font-serif text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                  {item.value}
                </div>
                <div className="text-xs font-bold text-white/50 uppercase tracking-widest">
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
          transition={{ duration: 0.2 }}
          className="relative bg-gradient-to-r from-[#102547] via-[#132D56] to-[#102547] backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] rounded-3xl p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden group"
        >
          {/* Gold specular rim line */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full filter blur-[100px] pointer-events-none group-hover:bg-[#D4AF37]/20 transition-colors duration-500" />

          <div className="relative z-10 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-2.5 leading-tight">
              Ready to experience a seamless accounting workflow?
            </h3>
            <p className="text-white/70 text-base font-light max-w-xl">
              Connect with our senior accounting partners today and transform your financial management.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 relative z-10 w-full sm:w-auto">
            <Button to="/contact" size="lg" variant="primary" className="w-full sm:w-auto">
              Start a Conversation
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button to="/services" size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 h-12 md:h-14 text-base w-full sm:w-auto backdrop-blur-sm transition-all hover:border-[#D4AF37]/40 hover:-translate-y-1 font-medium">
              View Services
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

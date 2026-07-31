import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { Star, Quote, ShieldCheck, FileCheck, Cloud, Lock, Building2, Briefcase, HeartPulse, ShoppingCart, Factory, Laptop } from 'lucide-react';

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

export const ClientConfidence = () => {




  const industries = [
    { name: "Accounting Practices", icon: Building2 },
    { name: "Professional Services", icon: Briefcase },
    { name: "Healthcare", icon: HeartPulse },
    { name: "E-commerce", icon: ShoppingCart },
    { name: "Manufacturing", icon: Factory },
    { name: "Technology", icon: Laptop }
  ];

  return (
    <section className="py-24 bg-[#F7F3EA] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#D4AF37]/5 filter blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#102547]/5 filter blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#07162D] font-bold tracking-[0.2em] uppercase text-[10px] mb-6 shadow-premium backdrop-blur-sm"
          >
            Client Confidence
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-[#07162D] mb-6 leading-tight"
          >
            Trusted by ambitious accounting firms and businesses across the <span className="relative whitespace-nowrap"><span className="relative z-10">UK, US & Australia.</span><svg className="absolute w-full h-3 -bottom-1 left-0 text-[#D4AF37]/20 z-0" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" /></svg></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="text-lg md:text-xl text-[#07162D]/70 font-medium leading-relaxed max-w-3xl mx-auto"
          >
            Every client relationship is built on accuracy, responsiveness, confidentiality and long-term partnership.
          </motion.p>
        </div>

        {/* Premium Trust Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { text: "Founder-Led", label: "Expertise" },
            { text: "Precision", label: "Driven Services" },
            { text: "ACCA & CA", label: "Certified Professionals" },
            { text: "UK • US • AU", label: "Global Coverage" }
          ].map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-xl border border-[#07162D]/5 rounded-2xl p-6 lg:p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/30 hover:-translate-y-1.5 transition-all duration-200 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="text-3xl md:text-4xl font-serif text-[#07162D] mb-2 font-medium group-hover:text-[#D4AF37] transition-colors">
                {metric.text}
              </div>
              <div className="text-xs text-[#07162D]/60 uppercase tracking-widest font-bold">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Industries We Support */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-xl md:text-2xl font-serif text-[#07162D]">Industries We Support</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-xl border border-[#07162D]/5 rounded-xl p-5 flex items-center gap-4 hover:bg-white hover:border-[#D4AF37]/20 hover:shadow-[0_10px_20px_-10px_rgba(212,175,55,0.15)] hover:-translate-y-1.5 transition-all duration-200 group cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-[#102547] flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors duration-200">
                  <industry.icon className="w-5 h-5 text-white/80 group-hover:text-[#050E1D] group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all duration-200" />
                </div>
                <span className="font-bold text-[#07162D]/80 text-sm group-hover:text-[#07162D] transition-colors">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

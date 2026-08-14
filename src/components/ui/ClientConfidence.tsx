import React from 'react';
import { motion } from 'motion/react';
import {
  Users,
  Target,
  Award,
  Globe,
  Sparkles
} from 'lucide-react';

export const ClientConfidence = () => {
  const trustMetrics = [
    {
      text: "Professional",
      label: "EXPERTISE",
      icon: Users,
      watermarkIcon: Users
    },
    {
      text: "Precision",
      label: "DRIVEN SERVICES",
      icon: Target,
      watermarkIcon: Target
    },
    {
      text: "ACCA & CA",
      label: "CERTIFIED PROFESSIONALS",
      icon: Award,
      watermarkIcon: Award
    },
    {
      text: "UK • US • AU",
      label: "GLOBAL COVERAGE",
      icon: Globe,
      watermarkIcon: Globe
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAF9F5] relative overflow-hidden text-[#10254A]">
      {/* Editorial Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Faint Stardust Texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('/stardust.png')] pointer-events-none" />

      {/* Soft Radial Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(16,37,74,0.04)_0%,transparent_70%)] filter blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 text-[#10254A] font-bold tracking-[0.2em] uppercase text-[11px] mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            CLIENT CONFIDENCE & CREDIBILITY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-[#10254A] mb-6 leading-[1.18] tracking-tight"
          >
            Trusted by ambitious accounting firms and businesses across the{' '}
            <span className="text-[#D4AF37] font-serif italic font-normal">
              UK, US & Australia.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#667085] font-sans leading-relaxed font-normal max-w-3xl mx-auto"
          >
            Every client relationship is built on accuracy, responsiveness, confidentiality and long-term strategic partnership.
          </motion.p>
        </div>

        {/* Premium Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {trustMetrics.map((metric, index) => {
            const IconComp = metric.icon;
            const WatermarkComp = metric.watermarkIcon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="group relative bg-gradient-to-b from-[#183A68] to-[#10254A] text-white rounded-[24px] p-8 border border-white/[0.08] shadow-[0_12px_35px_rgba(16,37,74,0.18)] hover:border-[#D4AF37] hover:shadow-[0_22px_45px_rgba(212,175,55,0.18)] hover:-translate-y-[6px] transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Ultra-subtle Watermark (3-5% Opacity) */}
                <WatermarkComp className="w-32 h-32 absolute -bottom-5 -right-5 text-[#D4AF37] opacity-[0.04] pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:opacity-[0.07]" strokeWidth={1} />

                {/* Top Specular Inner Gold Line */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/0 to-transparent group-hover:via-[#D4AF37]/80 transition-all duration-300" />

                {/* Micro Accent Gold Dot */}
                <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50 group-hover:bg-[#D4AF37] group-hover:scale-125 transition-all duration-300 shadow-[0_0_6px_rgba(212,175,55,0.6)]" />

                <div>
                  {/* Premium Circular Icon Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#10254A] border border-[#D4AF37]/40 flex items-center justify-center mb-6 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-all duration-300 shadow-md">
                    <IconComp className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />
                  </div>

                  {/* Metric Value */}
                  <h3 className="text-3xl sm:text-4xl font-serif text-white font-bold mb-2 tracking-tight transition-colors duration-250 group-hover:text-[#F8F5EE]">
                    {metric.text}
                  </h3>
                </div>

                {/* Metric Subtitle */}
                <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] mt-3">
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

interface CtaBannerProps {
  title: string;
  description: string;
  primaryActionText?: string;
  primaryActionTo?: string;
  secondaryActionText?: string;
  secondaryActionTo?: string;
  className?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  title,
  description,
  primaryActionText = "Get Started",
  primaryActionTo,
  secondaryActionText,
  secondaryActionTo,
  className
}) => {
  return (
    <section className={cn("py-24 bg-[#F8F5EE]", className)}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="bg-[#10254A] rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(16,37,74,0.2)] border border-[#D4AF37]/30">
          {/* Subtle background warm gold lighting */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#17345C] via-[#10254A] to-[#0A1830] opacity-90" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37] rounded-full filter blur-[150px] opacity-[0.08] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 py-24 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                {title}
              </h2>
              <p className="text-lg text-[#E7DED2] font-sans leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button to={primaryActionTo || "/contact"} size="lg" className="bg-[#D4AF37] text-[#10254A] border border-[#D4AF37] hover:bg-[#C59F27] font-semibold">
                {primaryActionText}
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
              {secondaryActionText && (
                <Button to={secondaryActionTo || "/services"} size="lg" className="bg-white text-[#10254A] border border-white hover:border-[#D4AF37] hover:bg-[#F8F5EE] hover:text-[#10254A] font-semibold shadow-md">
                  {secondaryActionText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

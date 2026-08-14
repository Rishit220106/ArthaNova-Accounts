import React from 'react';
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  align = 'center', 
  className, 
  ...props 
}) => {
  return (
    <div 
      className={cn(
        "max-w-3xl mb-16", 
        align === 'center' ? "mx-auto text-center" : "text-left",
        className
      )}
      {...props}
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-serif text-[#10254A] leading-tight tracking-tight mb-6"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
          className="text-lg md:text-xl text-[#55657A] font-sans leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

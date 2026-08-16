import React, { useState, useEffect, useRef } from 'react';
import { SEO } from '../components/SEO';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { MapPin, Award, Globe, ShieldCheck, Briefcase, GraduationCap, Linkedin, ArrowRight, FileText, Users, Landmark, Compass, Network, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

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

export const Team = () => {
  const founders = [
    {
      name: "Ami Sampat",
      title: "Senior Partner",
      qualifications: "ACCA",
      jurisdiction: "UK",
      flag: "🇬🇧",
      imageSrc: "/team/ami-sampat.jpg",
      watermark: Compass
    },
    {
      name: "Ashmit Bansal",
      title: "Senior Partner",
      qualifications: "ACCA",
      jurisdiction: "UK",
      flag: "🇬🇧",
      imageSrc: "",
      watermark: Globe
    },
    {
      name: "V Aishwarya Singh",
      title: "Senior Partner",
      qualifications: "ACCA",
      jurisdiction: "UK",
      flag: "🇬🇧",
      imageSrc: "/team/v-aishwarya-singh.jpg",
      watermark: Network
    }
  ];

  const team = [
    {
      name: "Naimish Raiyani",
      title: "Australia Specialist",
      qualifications: "CA",
      jurisdiction: "AU",
      imageSrc: "/team/naimish-raiyani.JPG",
      watermark: ShieldCheck
    },
    {
      name: "Radhika Raiyani",
      title: "Australia Specialist",
      qualifications: "CA",
      jurisdiction: "AU",
      imageSrc: "/team/radhika-raiyani.jpg",
      watermark: Compass
    },
    {
      name: "Hardik Sampat",
      title: "US Specialist",
      qualifications: "CA",
      jurisdiction: "US",
      imageSrc: "/team/hardik-sampat.jpg",
      watermark: Globe
    },
    {
      name: "Krunal Kukdiya",
      title: "US Specialist",
      qualifications: "CA",
      jurisdiction: "US",
      imageSrc: "/team/krunal-kukdiya.jpg",
      watermark: Network
    }
  ];

  return (
    <div className="flex flex-col bg-[#F8F5EE]">

      <SEO
        title="Our Expert Accounting Team"
        description="Meet the senior partners and specialists at ArthaNova Accounts, delivering exceptional cross-border accounting and corporate structuring expertise."
        canonical="/team"
        schema={`{"@context":"https://schema.org","@type":"AboutPage","name":"Our Expert Accounting Team | ArthaNova Accounts","url":"https://arthanovaccounts.com/team"}`}

        breadcrumbs={[{ "name": "Home", "url": "/" }, { "name": "Team", "url": "/team" }]}
      />

      {/* 1. Page Hero (Warm Ivory Background with Deep Navy Feature Container) */}
      <section className="bg-[#F8F5EE] text-[#10254A] pt-40 pb-20 md:pt-48 md:pb-28 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_45%,#000_50%,transparent_100%)] pointer-events-none" />

        {/* Oversized Subtle Circular Gold Outline (4% opacity) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border border-[#D4AF37]/15 rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">

          {/* Badge: OUR PEOPLE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#D4AF37] bg-white text-[#D4AF37] font-semibold tracking-[0.2em] uppercase text-[10px] mb-8 shadow-sm"
          >
            Our People
          </motion.div>

          {/* Centered Deep Navy Feature Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
            className="max-w-[950px] mx-auto bg-[#10254A] border border-white/[0.06] rounded-[32px] py-14 px-6 sm:px-10 md:py-20 md:px-14 shadow-[0_25px_60px_rgba(16,37,74,0.14)] relative overflow-hidden"
          >
            {/* Soft Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#D4AF37]/5 filter blur-[100px] rounded-full pointer-events-none" />

            {/* Abstract Gold Vector Lines */}
            <svg className="absolute -top-10 -right-10 w-72 h-72 text-[#D4AF37] opacity-[0.04] pointer-events-none" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.5" />
            </svg>

            {/* Subtle Inner Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

            {/* Tiny Glowing Gold Particles */}
            <div className="absolute top-6 left-12 w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-40 blur-[0.5px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-8 right-12 w-2 h-2 rounded-full bg-[#D4AF37] opacity-40 blur-[0.5px] animate-pulse pointer-events-none" />
            <div className="absolute top-1/2 right-6 w-1 h-1 rounded-full bg-[#D4AF37] opacity-50 pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              {/* Heading */}
              <h1 className="text-4xl md:text-6xl font-serif leading-[1.15] text-white mb-6 tracking-tight">
                Leadership & Experts
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/82 font-sans leading-relaxed max-w-[700px] mx-auto font-light mb-10">
                A team of rigorously qualified professionals dedicated to delivering uncompromising financial precision.
              </p>

              {/* Bottom Trust Strip */}
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#163663]/60 border border-[#D4AF37]/35 text-white text-xs md:text-sm font-medium shadow-sm hover:border-[#D4AF37]/60 transition-colors cursor-default">
                  <span className="text-[#D4AF37] font-bold">✓</span>
                  <span>ACCA & CA Professionals</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#163663]/60 border border-[#D4AF37]/35 text-white text-xs md:text-sm font-medium shadow-sm hover:border-[#D4AF37]/60 transition-colors cursor-default">
                  <span className="text-[#D4AF37] font-bold">✓</span>
                  <span>International Specialists</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#163663]/60 border border-[#D4AF37]/35 text-white text-xs md:text-sm font-medium shadow-sm hover:border-[#D4AF37]/60 transition-colors cursor-default">
                  <span className="text-[#D4AF37] font-bold">✓</span>
                  <span>Professional Expertise</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Company Vision / Quote Panel */}
      <section className="py-24 bg-[#F8F5EE] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            {/* Centered Deep Navy Feature Panel with 28px Rounded Corners */}
            <div className="bg-[#10254A] border border-[#D4AF37]/20 rounded-[28px] p-10 sm:p-14 md:p-20 relative overflow-hidden shadow-[0_25px_60px_rgba(16,37,74,0.25)] text-center group">
              {/* Very Subtle Gold Radial Glow behind the Quote Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#D4AF37]/10 filter blur-[90px] rounded-full pointer-events-none" />

              <div className="relative z-10 text-center flex flex-col items-center">
                {/* White Quote Icon with Gold Ambient Glow */}
                <div className="relative mb-8 flex items-center justify-center">
                  <div className="absolute w-24 h-24 bg-[#D4AF37]/15 filter blur-2xl rounded-full pointer-events-none" />
                  <svg className="w-12 h-12 md:w-14 md:h-14 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                {/* White Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6 leading-tight tracking-tight">
                  Built on Absolute Precision
                </h2>

                {/* Muted White Supporting Text */}
                <p className="text-base sm:text-lg md:text-xl text-white/80 font-sans leading-relaxed max-w-2xl mx-auto font-light">
                  A commitment to rigorous technical accuracy, cross-border regulatory expertise, and partner-led accounting governance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Leadership & Senior Partners */}
      <section id="partners" className="py-24 bg-[#F8F5EE] relative overflow-hidden">
        {/* Subtle radial lighting for the section */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#D4AF37]/[0.04] rounded-full filter blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

          {/* Desktop: 3 equal cards, Tablet: 2 cards, Mobile: 1 card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {founders.map((founder, index) => {
              const WatermarkIcon = founder.watermark;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                  className="group relative h-full"
                >
                  {/* Executive Profile Card */}
                  <div className="relative bg-[#10254A] rounded-[24px] overflow-hidden border border-[#D4AF37]/20 shadow-[0_15px_35px_rgba(16,37,74,0.25)] group-hover:shadow-[0_25px_50px_rgba(16,37,74,0.45)] group-hover:-translate-y-2 group-hover:border-[#D4AF37] transition-all duration-300 ease-out flex flex-col h-full p-8 sm:p-10">
                    
                    {/* Abstract Watermark in Lower-Right Corner (3% Opacity, Brightens on Hover) */}
                    <div className="absolute bottom-3 right-3 text-white opacity-[0.03] group-hover:opacity-[0.10] transition-opacity duration-300 pointer-events-none z-0">
                      <WatermarkIcon className="w-36 h-36" strokeWidth={1} />
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10 flex flex-col items-center text-center flex-1">
                      {/* Circular Profile Photo with Luxury Gold Border & Soft Shadow */}
                      <div className="relative mb-6">
                        <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-[0_10px_25px_rgba(0,0,0,0.35)] relative bg-[#163663] flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300 ease-out">
                          <div className="absolute inset-0 flex items-center justify-center text-white/20">
                            <svg className="w-24 h-24 mt-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                          </div>
                          {founder.imageSrc ? (
                            <img
                              loading="lazy"
                              src={founder.imageSrc}
                              alt={founder.name}
                              className="w-full h-full object-cover relative z-10 transition-transform duration-300 ease-out"
                              onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            />
                          ) : null}
                        </div>
                      </div>

                      {/* Name: White Large Serif Heading */}
                      <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2 leading-tight">
                        {founder.name}
                      </h3>

                      {/* Role: Luxury Gold */}
                      <div className="text-[#D4AF37] font-semibold text-xs sm:text-sm tracking-[0.15em] uppercase mb-5">
                        {founder.title}
                      </div>

                      {/* Premium Two-Column Credential Mini-Panel */}
                      <div className="w-full mt-auto pt-4 border-t border-[#D4AF37]/20 grid grid-cols-2 gap-3 text-left">
                        {/* ACCA Credential Box */}
                        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#163663]/60 border border-[#D4AF37]/30 backdrop-blur-sm group-hover:border-[#D4AF37]/60 transition-all duration-300">
                          <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                            <Award className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-white font-bold text-xs sm:text-sm tracking-wide leading-tight">ACCA</div>
                            <div className="text-white/60 text-[11px] font-medium leading-tight mt-0.5">Certified</div>
                          </div>
                        </div>

                        {/* UK Jurisdiction Credential Box */}
                        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#163663]/60 border border-[#D4AF37]/30 backdrop-blur-sm group-hover:border-[#D4AF37]/60 transition-all duration-300">
                          <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                            <Globe className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-white font-bold text-xs sm:text-sm tracking-wide leading-tight flex items-center justify-between">
                              <span>UK</span>
                              <span className="text-xs">🇬🇧</span>
                            </div>
                            <div className="text-white/60 text-[11px] font-medium leading-tight mt-0.5 truncate">Jurisdiction</div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Areas of Expertise Section */}
          <div className="mt-28 pt-16 relative z-10 flex flex-col items-center">
            {/* Subtle Gold Divider */}
            <div className="w-20 h-px bg-[#D4AF37]/40 mb-8" />
            
            {/* Centered Heading */}
            <h4 className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#10254A]/70 mb-12 text-center">
              Areas of Expertise
            </h4>

            {/* Expertise Pills: Desktop/Tablet wrap naturally, Mobile full-width rows */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-5 w-full sm:w-auto max-w-5xl mx-auto">
              {[
                { text: "UK Compliance", icon: Globe },
                { text: "US Tax Compliance", icon: ShieldCheck },
                { text: "Australian BAS & GST", icon: MapPin },
                { text: "Bookkeeping", icon: Briefcase },
                { text: "Financial Reporting", icon: FileText },
                { text: "Payroll Management", icon: Users },
                { text: "Tax Compliance", icon: Landmark },
                { text: "Business Advisory", icon: GraduationCap }
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: idx * 0.04 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 rounded-[999px] bg-[#10254A] border border-[#D4AF37]/40 text-white shadow-md hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#10254A] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(212,175,55,0.3)] transition-all duration-300 ease-out cursor-default group"
                >
                  <badge.icon className="w-4 h-4 text-[#D4AF37] group-hover:text-[#10254A] transition-colors duration-300 shrink-0" />
                  <span className="text-sm font-medium tracking-wide transition-colors duration-300 text-center">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Company Statistics (Warm Ivory Background with Deep Navy Cards) */}
      <section className="py-24 bg-[#F8F5EE] relative overflow-hidden border-t border-[#10254A]/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 filter blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-[#10254A] border border-[#D4AF37]/20 rounded-[20px] p-8 flex flex-col items-center justify-center text-center shadow-[0_15px_35px_rgba(16,37,74,0.2)] group hover:-translate-y-1.5 hover:border-[#D4AF37] hover:shadow-[0_25px_50px_rgba(16,37,74,0.35)] transition-all duration-300 min-h-[220px]"
            >
              <Award className="w-8 h-8 text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all duration-300" />
              <div className="text-2xl sm:text-3xl font-serif text-white mb-2 font-bold tracking-tight">ACCA Certified</div>
              <div className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold">Qualified Professionals</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="bg-[#10254A] border border-[#D4AF37]/20 rounded-[20px] p-8 flex flex-col items-center justify-center text-center shadow-[0_15px_35px_rgba(16,37,74,0.2)] group hover:-translate-y-1.5 hover:border-[#D4AF37] hover:shadow-[0_25px_50px_rgba(16,37,74,0.35)] transition-all duration-300 min-h-[220px]"
            >
              <Globe className="w-8 h-8 text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all duration-300" />
              <div className="text-2xl sm:text-3xl font-serif text-white mb-2 font-bold tracking-tight">Cross-Border Expertise</div>
              <div className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold">International Accounting</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
              className="bg-[#10254A] border border-[#D4AF37]/20 rounded-[20px] p-8 flex flex-col items-center justify-center text-center shadow-[0_15px_35px_rgba(16,37,74,0.2)] group hover:-translate-y-1.5 hover:border-[#D4AF37] hover:shadow-[0_25px_50px_rgba(16,37,74,0.35)] transition-all duration-300 min-h-[220px]"
            >
              <Landmark className="w-8 h-8 text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all duration-300" />
              <div className="text-4xl font-serif text-white mb-3 font-bold"><CountUp end={3} /></div>
              <div className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold">Global Jurisdictions</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3 }}
              className="bg-[#10254A] border border-[#D4AF37]/20 rounded-[20px] p-8 flex flex-col items-center justify-center text-center shadow-[0_15px_35px_rgba(16,37,74,0.2)] group hover:-translate-y-1.5 hover:border-[#D4AF37] hover:shadow-[0_25px_50px_rgba(16,37,74,0.35)] transition-all duration-300 min-h-[220px]"
            >
              <CheckCircle className="w-8 h-8 text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all duration-300" />
              <div className="text-2xl sm:text-3xl font-serif text-white mb-2 font-bold tracking-tight">Precision-Led Service</div>
              <div className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold">Accuracy & Compliance</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Professional Team (Only renders if team members exist) */}
      {team.length > 0 && (
        <section className="py-24 bg-[#F8F5EE] relative border-t border-[#10254A]/5">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-[#10254A] mb-6">
                The people behind <span className="italic text-[#D4AF37]">the work.</span>
              </h2>
              <p className="text-lg text-[#10254A]/70 leading-relaxed font-light">
                Each team member is a qualified Chartered Accountant with hands-on expertise in their jurisdiction. Files are picked up by the person best placed to handle them.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => {
                const WatermarkIcon = member.watermark;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                    className="group relative flex flex-col h-full"
                  >
                    {/* Executive Profile Card */}
                    <div className="relative bg-[#10254A] rounded-[24px] overflow-hidden border border-[#D4AF37]/20 shadow-[0_15px_35px_rgba(16,37,74,0.25)] group-hover:shadow-[0_25px_50px_rgba(16,37,74,0.45)] group-hover:-translate-y-2 group-hover:border-[#D4AF37] transition-all duration-300 ease-out flex flex-col h-full p-6 sm:p-8">
                      
                      {/* Abstract Watermark in Lower-Right Corner (3% Opacity, Brightens on Hover) */}
                      <div className="absolute bottom-3 right-3 text-white opacity-[0.03] group-hover:opacity-[0.10] transition-opacity duration-300 pointer-events-none z-0">
                        <WatermarkIcon className="w-32 h-32" strokeWidth={1} />
                      </div>

                      {/* Card Content */}
                      <div className="relative z-10 flex flex-col items-center text-center flex-1">
                        {/* Circular Profile Photo with Luxury Gold Border & Soft Shadow */}
                        <div className="relative mb-5">
                          <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-[0_10px_25px_rgba(0,0,0,0.35)] relative bg-[#163663] flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300 ease-out">
                            <div className="absolute inset-0 flex items-center justify-center text-white/20">
                              <svg className="w-20 h-20 mt-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                              </svg>
                            </div>
                            {member.imageSrc ? (
                              <img
                                loading="lazy"
                                src={member.imageSrc}
                                alt={member.name}
                                className="w-full h-full object-cover relative z-10 transition-transform duration-300 ease-out"
                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                              />
                            ) : null}
                          </div>
                        </div>

                        {/* Name: White Large Serif Heading */}
                        <h4 className="text-xl sm:text-2xl font-serif text-white mb-1.5 leading-tight">
                          {member.name}
                        </h4>

                        {/* Role: Luxury Gold */}
                        <div className="text-[#D4AF37] font-semibold text-xs tracking-[0.15em] uppercase mb-3">
                          {member.title}
                        </div>

                        {/* Qualifications: Muted White */}
                        <p className="text-white/80 text-xs sm:text-sm font-medium mb-5">
                          {member.qualifications}
                        </p>

                        {/* Bottom Tags / Pills */}
                        <div className="mt-auto pt-3 flex flex-wrap items-center justify-center gap-2">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#163663]/60 border border-[#D4AF37]/30 text-white text-xs font-medium backdrop-blur-sm">
                            <GraduationCap className="w-3 h-3 text-[#D4AF37] shrink-0" />
                            <span>{member.qualifications}</span>
                          </div>
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#163663]/60 border border-[#D4AF37]/30 text-white text-xs font-medium backdrop-blur-sm">
                            <Globe className="w-3 h-3 text-[#D4AF37] shrink-0" />
                            <span>{member.jurisdiction}</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6. Final CTA (Warm Ivory Background + Premium Deep Navy CTA Card) */}
      <section className="py-28 md:py-36 bg-[#F8F5EF] relative overflow-hidden">
        {/* Subtle Editorial Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(19,43,87,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(19,43,87,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        {/* Soft Warm Radial Glow Centered Behind CTA Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D4AF37]/5 filter blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          
          {/* Centered Large Serif Heading (60-72px on Desktop) */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-serif text-[#132B57] mb-6 leading-[1.1] tracking-tight"
          >
            Meet the Team Behind Your Success
          </motion.h2>

          {/* Slate Gray Description (Max Width 650px) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="text-lg md:text-xl text-[#55657A] leading-relaxed max-w-[650px] mx-auto font-light mb-12 sm:mb-16"
          >
            Our professionals combine global expertise with personalized service to help your business grow confidently.
          </motion.p>

          {/* Premium Deep Navy CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="max-w-[720px] mx-auto relative group"
          >
            {/* Faint Circular Grid behind the Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-[#D4AF37]/10 rounded-full pointer-events-none" />

            <div className="relative bg-gradient-to-b from-[#132B57] to-[#0E2042] border border-[#D4AF37]/30 rounded-[28px] p-8 sm:p-10 md:p-12 shadow-[0_25px_60px_rgba(19,43,87,0.18)] group-hover:shadow-[0_30px_70px_rgba(19,43,87,0.28)] group-hover:-translate-y-1 group-hover:border-[#D4AF37]/60 transition-all duration-300 ease-out overflow-hidden text-center">
              
              {/* Tiny Floating Gold Accent Dots */}
              <div className="absolute top-6 left-8 w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 animate-pulse pointer-events-none" />
              <div className="absolute bottom-6 right-8 w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 animate-pulse pointer-events-none" />

              {/* Soft Radial Gradient Across Card */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_70%)] pointer-events-none" />

              {/* Inside Card - Top Row: Feature Badges */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-10 text-xs sm:text-sm font-medium text-white">
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37] font-bold text-sm">✓</span>
                  <span>Professional Expertise</span>
                </div>
                <div className="hidden sm:block text-[#D4AF37]/40">•</div>
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37] font-bold text-sm">✓</span>
                  <span>ACCA & CA Professionals</span>
                </div>
                <div className="hidden sm:block text-[#D4AF37]/40">•</div>
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37] font-bold text-sm">✓</span>
                  <span>UK • US • Australia</span>
                </div>
              </div>

              {/* Inside Card - Middle: Centered Gold CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="relative z-10 flex justify-center mb-6"
              >
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#D4AF37] text-[#132B57] font-semibold text-base sm:text-lg shadow-[0_8px_25px_rgba(212,175,55,0.35)] hover:bg-[#C59F27] hover:shadow-[0_12px_30px_rgba(212,175,55,0.5)] hover:-translate-y-0.5 transition-all duration-300 group/btn cursor-pointer"
                >
                  <span>Meet Our Experts</span>
                  <ArrowRight className="w-5 h-5 text-[#132B57] group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </motion.div>

              {/* Inside Card - Bottom: Small Supporting Caption */}
              <p className="relative z-10 text-white/60 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
                Trusted by businesses seeking long-term financial partnerships.
              </p>

            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

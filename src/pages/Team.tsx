import React, { useState, useEffect, useRef } from 'react';
import { SEO } from '../components/SEO';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { MapPin, Award, Globe, ShieldCheck, Briefcase, GraduationCap, Linkedin, ArrowRight, FileText, Users, Landmark } from 'lucide-react';
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
      title: "Founding Partner",
      qualifications: "FCCA, CPA",
      jurisdiction: "UK & US",
      flag: "🇬🇧 🇺🇸",
      imageSrc: "/team/ami-sampat.jpg"
    },
    {
      name: "Ashmit Bansal",
      title: "Founding Partner",
      qualifications: "ACA, CTA",
      jurisdiction: "UK",
      flag: "🇬🇧",
      imageSrc: ""
    },
    {
      name: "V Aishwarya Singh",
      title: "Founding Partner",
      qualifications: "CA",
      jurisdiction: "Australia",
      flag: "🇦🇺",
      imageSrc: "/team/v-aishwarya-singh.jpg"
    }
  ];

  const team = [
    {
      name: "Naimish Raiyani",
      title: "Australia Specialist",
      qualifications: "CA",
      jurisdiction: "AU",
      imageSrc: "/team/naimish-raiyani.JPG"
    },
    {
      name: "Radhika Raiyani",
      title: "Australia Specialist",
      qualifications: "CA",
      jurisdiction: "AU",
      imageSrc: "/team/radhika-raiyani.jpg"
    },
    {
      name: "Hardik Sampat",
      title: "US Specialist",
      qualifications: "CA",
      jurisdiction: "US",
      imageSrc: "/team/hardik-sampat.jpg"
    },
    {
      name: "Krunal Kukdiya",
      title: "US Specialist",
      qualifications: "CA",
      jurisdiction: "US",
      imageSrc: "/team/krunal-kukdiya.jpg"
    }
  ];

  return (
    <div className="flex flex-col bg-[#07162D]">

      <SEO 
        title="Our Expert Accounting Team"
        description="Meet the founding partners and specialists at ArthaNovaccounts, delivering exceptional cross-border accounting and corporate structuring expertise."
        canonical="/team"
        schema={`{"@context":"https://schema.org","@type":"AboutPage","name":"Our Expert Accounting Team | ArthaNovaccounts","url":"https://arthanovaaccounts.com/team"}`}
      
        breadcrumbs={[{"name":"Home","url":"/"},{"name":"Team","url":"/team"}]}
      />

      {/* 1. Page Hero (Deep Navy) */}
      <section className="bg-[#07162D] text-white pt-48 pb-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full filter blur-[150px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full filter blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] font-semibold tracking-[0.2em] uppercase text-[10px] mb-8 backdrop-blur-sm"
          >
            Our People
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif leading-[1.15] max-w-4xl mx-auto mb-8 tracking-tight drop-shadow-sm text-white"
          >
            Leadership & Experts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 font-sans leading-relaxed max-w-2xl mx-auto font-light"
          >
            A team of rigorously qualified professionals dedicated to delivering uncompromising financial precision.
          </motion.p>
        </div>
      </section>

      {/* 2. Company Vision / Founder's Vision */}
      <section className="py-24 bg-[#F7F3EA] relative border-b border-[#07162D]/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.02] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/70 backdrop-blur-xl border border-[#07162D]/5 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(7,22,45,0.05)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] transition-shadow duration-200 group">
              {/* Radial Lighting */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full filter blur-[80px] pointer-events-none group-hover:bg-[#D4AF37]/10 transition-colors duration-200" />
              
              {/* Minimal decorative line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
              
              <div className="relative z-10 text-center">
                <div className="text-[#D4AF37]/80 mb-8 flex justify-center group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] group-hover:text-[#D4AF37] transition-all duration-200">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/></svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#07162D] mb-8">Built on Absolute Precision</h2>
                
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Founding Partners */}
      <section id="partners" className="py-24 bg-[#F7F3EA] relative overflow-hidden">
        {/* Subtle radial lighting for the section */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#D4AF37]/[0.04] rounded-full filter blur-[100px] pointer-events-none" />
        
        {/* Minimal world-map texture */}
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/world-map.svg')] opacity-[0.02] bg-no-repeat bg-center bg-contain pointer-events-none filter grayscale" />
        
        {/* Faint geometric line accents */}
        <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#07162D]/[0.03] to-transparent pointer-events-none" />
        <div className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#07162D]/[0.03] to-transparent pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.1 }}
                className="group relative h-full"
              >
                {/* Gradient Border Illusion */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#D4AF37]/30 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-200 blur-[2px]" />
                
                <div className="relative bg-white rounded-[2rem] overflow-hidden border border-[#D4AF37]/20 shadow-[0_15px_40px_rgba(7,22,45,0.08)] group-hover:shadow-[0_25px_60px_rgba(212,175,55,0.15)] group-hover:-translate-y-1.5 group-hover:border-[#D4AF37]/40 transition-all duration-200 ease-out flex flex-col h-full">
                  <div className="w-full relative overflow-hidden bg-gradient-to-b from-[#07162D]/5 to-transparent aspect-[4/3] flex items-center justify-center p-8 pb-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full filter blur-[50px] opacity-60 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
                    
                    <div className="w-56 h-56 rounded-full overflow-hidden border-[6px] border-white shadow-[0_15px_40px_rgba(0,0,0,0.1)] relative z-10 -mb-10 bg-gray-100 group-hover:border-[#D4AF37]/40 group-hover:-translate-y-1.5 group-hover:shadow-[0_25px_50px_rgba(212,175,55,0.2)] transition-all duration-200 ease-out ring-1 ring-black/5">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                        <svg className="w-28 h-28 mt-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                      </div>
                      {founder.imageSrc ? <img loading="lazy" 
                        src={founder.imageSrc} 
                        alt={founder.name} 
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-200 ease-out relative z-10" 
                        onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                      /> : null}
                    </div>
                    
                    {/* Hover Link Overlay */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full border border-[#07162D]/10 shadow-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 ease-out z-20">
                      <Linkedin className="w-5 h-5 text-[#07162D] group-hover:text-[#D4AF37] transition-colors" />
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-10 pt-16 flex flex-col flex-1 relative bg-white z-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-[3rem] -z-10 group-hover:bg-[#D4AF37]/10 transition-colors duration-200" />
                    
                    <h3 className="text-3xl font-serif text-[#07162D] mb-1">{founder.name}</h3>
                    <div className="text-[#D4AF37] font-semibold text-sm tracking-wide uppercase mb-6">{founder.title}</div>
                    
                    {/* Elegant Divider */}
                    <div className="w-12 h-px bg-gradient-to-r from-[#D4AF37]/60 to-transparent mb-6" />
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F7F3EA] border border-[#07162D]/5 text-xs text-[#07162D]/80 font-medium w-fit group-hover:border-[#D4AF37]/20 transition-colors">
                        <GraduationCap className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {founder.qualifications}
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F7F3EA] border border-[#07162D]/5 text-xs text-[#07162D]/80 font-medium w-fit group-hover:border-[#D4AF37]/20 transition-colors">
                        <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                        {founder.jurisdiction} <span className="ml-1 tracking-widest">{founder.flag}</span>
                      </div>
                      
                    </div>

                    
                    
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Areas of Expertise */}
          <div className="mt-20 pt-12 relative z-10 flex flex-col items-center">
            {/* Subtle Gold Divider */}
            <div className="w-16 h-px bg-[#D4AF37]/40 mb-8" />
            <h4 className="text-sm font-semibold tracking-widest uppercase text-[#07162D]/60 mb-10">Areas of Expertise</h4>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
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
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#0B1D38] border border-[#D4AF37]/20 shadow-[0_4px_15px_rgba(7,22,45,0.05)] group hover:-translate-y-[3px] hover:border-[#D4AF37]/60 hover:shadow-[0_8px_25px_rgba(212,175,55,0.2)] transition-all duration-200 ease-out cursor-default"
              >
                <badge.icon className="w-4 h-4 text-[#D4AF37]/80 group-hover:text-[#D4AF37] transition-colors duration-200" />
                <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-200">{badge.text}</span>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Company Statistics (Deep Navy) */}
      <section className="py-24 bg-[#102547] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 filter blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-[#0B1D38] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center group hover:-translate-y-1.5 hover:border-[#D4AF37]/40 hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] transition-all duration-200"
            >
              <Briefcase className="w-8 h-8 text-[#D4AF37] mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all duration-200" />
              <div className="text-4xl font-serif text-white mb-3"><CountUp end={3} /></div>
              <div className="text-xs text-white/50 uppercase tracking-widest font-semibold">Founding Partners</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="bg-[#0B1D38] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center group hover:-translate-y-1.5 hover:border-[#D4AF37]/40 hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] transition-all duration-200"
            >
              <ShieldCheck className="w-8 h-8 text-[#D4AF37] mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all duration-200" />
              <div className="text-4xl font-serif text-white mb-3"><CountUp end={15} suffix="+" /></div>
              <div className="text-xs text-white/50 uppercase tracking-widest font-semibold">Qualified Professionals</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
              className="bg-[#0B1D38] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center group hover:-translate-y-1.5 hover:border-[#D4AF37]/40 hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] transition-all duration-200"
            >
              <Globe className="w-8 h-8 text-[#D4AF37] mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all duration-200" />
              <div className="text-4xl font-serif text-white mb-3"><CountUp end={3} /></div>
              <div className="text-xs text-white/50 uppercase tracking-widest font-semibold">Global Jurisdictions</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3 }}
              className="bg-[#0B1D38] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center group hover:-translate-y-1.5 hover:border-[#D4AF37]/40 hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] transition-all duration-200"
            >
              <Award className="w-8 h-8 text-[#D4AF37] mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all duration-200" />
              <div className="text-4xl font-serif text-white mb-3"><CountUp end={100} suffix="%" /></div>
              <div className="text-xs text-white/50 uppercase tracking-widest font-semibold">ACCA / CA Certified</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Professional Team (Only renders if team members exist) */}
      {team.length > 0 && (
        <section className="py-24 bg-[#F7F3EA] relative border-t border-[#07162D]/5">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-[#07162D] mb-6">
                The people behind <span className="italic text-[#D4AF37]">the work.</span>
              </h2>
              <p className="text-lg text-[#07162D]/70 leading-relaxed font-light">
                Each team member is a qualified Chartered Accountant with hands-on expertise in their jurisdiction. Files are picked up by the person best placed to handle them.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.1 }}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#07162D]/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] hover:-translate-y-1.5 hover:border-[#D4AF37]/40 transition-all duration-200"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                      <svg className="w-32 h-32 mt-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    </div>
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-[#07162D] text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full z-20 group-hover:bg-[#D4AF37] transition-colors duration-200 shadow-md">
                      {member.jurisdiction}
                    </div>
                    
                    {member.imageSrc ? <img loading="lazy" 
                      src={member.imageSrc} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200 ease-out relative z-10" 
                      onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                    /> : null}
                  </div>
                  
                  <div className="p-6 relative">
                    <h4 className="text-xl font-serif text-[#07162D] mb-1 group-hover:text-[#D4AF37] transition-colors">{member.name}</h4>
                    <div className="flex items-center text-sm">
                      <span className="text-[#D4AF37] font-semibold">{member.qualifications}</span>
                      <span className="mx-2 text-[#07162D]/20">&middot;</span>
                      <span className="text-[#07162D]/60 font-light">{member.title}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Final CTA (Premium Enterprise) */}
      <section className="py-32 bg-[#0B1D38] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/10 filter blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-4xl md:text-6xl font-serif text-white mb-8 leading-[1.15]"
            >
              Meet the Team Behind Your Success
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/70 leading-relaxed mb-12 font-light"
            >
              Our professionals combine global expertise with personalized service to help your business grow confidently.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button 
                onClick={() => document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/5 hover:border-[#D4AF37]/50 px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-200"
              >
                Meet Our Partners
              </Button>
              <Button to="/contact" variant="primary">
                Start a Conversation
                <ArrowRight className="w-5 h-5 text-[#07162D] group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

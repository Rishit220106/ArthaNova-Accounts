import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

import xeroTaxLogo from '../../assets/software-logos/xero-tax.svg';
import cchLogo from '../../assets/software-logos/cch.svg';
import digitaLogo from '../../assets/software-logos/digita.svg';
import irisLogo from '../../assets/software-logos/iris.svg';
import taxcalcLogo from '../../assets/software-logos/taxcalc.svg';
import taxfilerLogo from '../../assets/software-logos/taxfiler.svg';
import xeroLogo from '../../assets/software-logos/xero.svg';
import myobLogo from '../../assets/software-logos/myob.svg';
import reckonLogo from '../../assets/software-logos/reckon.svg';
import quickbooksLogo from '../../assets/software-logos/quickbooks.svg';
import drakeTaxLogo from '../../assets/software-logos/drake-tax.svg';
import lacerteLogo from '../../assets/software-logos/lacerte.svg';

const partners = [
  { name: 'Xero Tax', country: 'UK', use: 'Finalisation', logo: xeroTaxLogo, sizeClass: 'w-[92%] h-[85%]' },
  { name: 'CCH', country: 'UK', use: 'Finalisation', logo: cchLogo, sizeClass: 'w-[92%] h-[85%]' },
  { name: 'Digita', country: 'UK', use: 'Finalisation', logo: digitaLogo, sizeClass: 'w-[90%] h-[82%]' },
  { name: 'IRIS', country: 'UK', use: 'Finalisation', logo: irisLogo, sizeClass: 'w-[92%] h-[85%]' },
  { name: 'TaxCalc', country: 'UK', use: 'Tax', logo: taxcalcLogo, sizeClass: 'w-[90%] h-[85%]' },
  { name: 'Taxfiler', country: 'UK', use: 'Tax', logo: taxfilerLogo, sizeClass: 'w-[90%] h-[85%]' },
  { name: 'Xero', country: 'AU', use: 'Bookkeeping', logo: xeroLogo, sizeClass: 'w-[92%] h-[85%]' },
  { name: 'MYOB', country: 'AU', use: 'Bookkeeping', logo: myobLogo, sizeClass: 'w-[92%] h-[85%]' },
  { name: 'Reckon', country: 'AU', use: 'Bookkeeping', logo: reckonLogo, sizeClass: 'w-[90%] h-[82%]' },
  { name: 'QuickBooks', country: 'US', use: 'Bookkeeping', logo: quickbooksLogo, sizeClass: 'w-[85%] h-[76%]' },
  { name: 'Drake Tax', country: 'US', use: 'Tax', logo: drakeTaxLogo, sizeClass: 'w-[90%] h-[85%]' },
  { name: 'Lacerte', country: 'US', use: 'Tax', logo: lacerteLogo, sizeClass: 'w-[90%] h-[85%]' },
];

export const TechPartners = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#FAF9F5] text-[#10254A]">
      {/* Faint Editorial Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
      
      {/* Faint Stardust Texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('/stardust.png')] pointer-events-none" />

      {/* Very Soft Warm Radial Glow Behind Platform Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      {/* Faint Circular Background Grid Lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-[#10254A]/[0.03] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] border border-[#10254A]/[0.025] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 text-xs text-[#D4AF37] font-bold mb-4 uppercase tracking-[0.22em]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            TECHNOLOGY ECOSYSTEM
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-[#10254A] leading-tight tracking-tight mb-5"
          >
            Powered by Industry-Leading Accounting Platforms
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-base sm:text-lg text-[#667085] font-sans leading-relaxed"
          >
            We work with globally recognised accounting, payroll and tax software to deliver secure, accurate and efficient financial operations.
          </motion.p>
        </div>

        {/* Showcase Platform Container Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-[#FDFBF7] rounded-[28px] p-6 sm:p-8 md:p-10 lg:p-12 border border-[#D4AF37]/30 shadow-[0_15px_45px_rgba(16,37,74,0.06)] mb-16 relative overflow-hidden"
        >
          {/* Subtle Top Inner Gold Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent pointer-events-none" />

          {/* Technology Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 relative z-10">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: 0.1 + (index * 0.04), ease: "easeOut" }}
              >
                <div
                  tabIndex={0}
                  className="group flex flex-col justify-between bg-gradient-to-br from-[#132B57] via-[#0E244B] to-[#0A1A37] rounded-3xl p-6 sm:p-7 border border-[#D4AF37]/25 shadow-[0_10px_30px_rgba(10,26,55,0.15)] hover:shadow-[0_20px_45px_rgba(212,175,55,0.18)] hover:-translate-y-1.5 hover:border-[#D4AF37] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] h-full cursor-default relative overflow-hidden"
                >
                  {/* Top specular gold line */}
                  <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/0 to-transparent group-hover:via-[#D4AF37]/70 transition-all duration-300" />
                  
                  {/* Upper-right tiny gold accent dot */}
                  <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-[#D4AF37]/50 group-hover:bg-[#D4AF37] group-hover:scale-125 transition-all duration-300 shadow-[0_0_6px_rgba(212,175,55,0.6)]" />

                  {/* Floating White Logo Canvas */}
                  <div className="w-full h-20 sm:h-24 flex items-center justify-center p-3 sm:p-4 bg-[#FFFDFA] rounded-2xl border border-[#E7DED2] shadow-md group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 mb-6 relative z-10 overflow-hidden">
                    <img
                      loading="lazy"
                      src={partner.logo}
                      alt={`${partner.name} official logo`}
                      className="max-w-[92%] max-h-[88%] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Content Layout */}
                  <div className="mt-auto relative z-10 flex flex-col justify-end">
                    <h3 className="text-xl sm:text-2xl font-serif text-white font-semibold mb-3 tracking-tight transition-colors duration-250 group-hover:text-[#F8F5EF]">
                      {partner.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                      {/* Country Pill */}
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-[11px] font-bold tracking-wider uppercase">
                        {partner.country}
                      </span>
                      {/* Service Pill */}
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-semibold">
                        {partner.use}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Summary Panel (Deep Navy Statistics Panel) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="bg-gradient-to-br from-[#10254A] via-[#142C54] to-[#10254A] text-white rounded-[28px] border border-[#D4AF37]/35 p-8 lg:p-12 shadow-[0_20px_50px_rgba(16,37,74,0.22)] flex flex-col items-center relative overflow-hidden"
        >
          {/* Top Edge Specular Gold Line */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
          
          <p className="text-center text-base sm:text-lg md:text-xl font-serif text-white/90 font-medium mb-10 relative z-10 italic">
            "Supporting workflows across the world's leading accounting platforms."
          </p>

          <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative z-10">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center px-4 group w-full md:w-auto">
              <span className="text-3xl sm:text-4xl font-serif text-white font-bold mb-1 group-hover:text-[#D4AF37] transition-colors duration-250">
                12+
              </span>
              <div className="h-[1px] w-10 bg-[#D4AF37] my-2" />
              <span className="text-xs text-white/70 uppercase tracking-[0.18em] font-bold">
                Professional Platforms
              </span>
            </div>

            <div className="hidden md:block w-px h-16 bg-white/15" />

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center px-4 group w-full md:w-auto">
              <span className="text-3xl sm:text-4xl font-serif text-white font-bold mb-1 group-hover:text-[#D4AF37] transition-colors duration-250">
                UK • US • AU
              </span>
              <div className="h-[1px] w-10 bg-[#D4AF37] my-2" />
              <span className="text-xs text-white/70 uppercase tracking-[0.18em] font-bold">
                Accounting Ecosystems
              </span>
            </div>

            <div className="hidden md:block w-px h-16 bg-white/15" />

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center px-4 group w-full md:w-auto">
              <span className="text-3xl sm:text-4xl font-serif text-white font-bold mb-1 group-hover:text-[#D4AF37] transition-colors duration-250">
                Cloud Ready
              </span>
              <div className="h-[1px] w-10 bg-[#D4AF37] my-2" />
              <span className="text-xs text-white/70 uppercase tracking-[0.18em] font-bold">
                Modern Workflow
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

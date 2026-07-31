import React from 'react';
import { motion } from 'motion/react';

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
    <section className="py-32 relative overflow-hidden bg-[#102547]">
      {/* Background Enhancements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.05] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />

      {/* Subtle Visual Depth Accents */}
      <div className="absolute top-40 left-10 w-[400px] h-[400px] bg-[#132D56]/30 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.2 }}
            className="text-xs text-[#D4AF37] font-semibold mb-4 uppercase tracking-[0.2em]"
          >
            TECHNOLOGY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white leading-tight tracking-tight mb-6"
          >
            Powered by Industry-Leading Accounting Platforms
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="text-lg text-white/70 font-sans leading-relaxed"
          >
            We work with globally recognised accounting, payroll and tax software to deliver secure, accurate and efficient financial operations.
          </motion.p>
        </div>

        {/* Premium Technology Ecosystem Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-6 md:p-10 lg:p-12 border border-white/5 shadow-premium mb-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#132D56]/20 to-transparent pointer-events-none" />

          {/* Technology Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.2, delay: 0.3 + (index * 0.05), ease: "easeOut" }}
              >
                <div
                  tabIndex={0}
                  className="group flex flex-col justify-between bg-[#132D56]/40 rounded-3xl p-8 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_-10px_rgba(212,175,55,0.12)] hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[#D4AF37]/35 hover:bg-[#132D56]/60 transition-all duration-[300ms] ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] h-full cursor-default relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/0 to-transparent group-hover:via-[#D4AF37]/35 transition-all duration-200" />

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0)_0%,transparent_50%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_100%)] transition-colors duration-200 pointer-events-none" />

                  <div className="h-20 flex items-center mb-10 relative z-10">
                    <div className="w-20 h-20 relative flex items-center justify-center shrink-0 p-2 bg-white/95 backdrop-blur-md rounded-2xl border border-white/20 shadow-[0_8px_25px_rgba(0,0,0,0.08)] group-hover:scale-105 group-hover:bg-white group-hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.3)] transition-all duration-[300ms]">
                      <img loading="lazy"
                        src={partner.logo}
                        alt={`${partner.name} official logo`}
                        className={`${partner.sizeClass || 'w-[85%] h-[80%]'} object-contain transition-transform duration-200`}
                      />
                    </div>
                  </div>

                  <div className="mt-auto relative z-10 flex flex-col justify-end">
                    <h3 className="text-2xl font-serif text-white mb-4 tracking-tight transition-colors duration-[250ms] group-hover:text-[#D4AF37]">
                      {partner.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white/70 text-[10px] font-semibold tracking-wider uppercase group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37]/40 group-hover:text-white transition-colors duration-200">
                        {partner.country}
                      </span>
                      <span className="text-sm font-medium text-white/50 group-hover:text-white/80 transition-colors duration-200">
                        {partner.use}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.2, delay: 0.7 }}
          className="bg-white/5 rounded-3xl border border-white/5 p-10 lg:p-14 shadow-premium flex flex-col items-center relative overflow-hidden backdrop-blur-md"
        >
          {/* Subtle glow inside trust strip */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/10 rounded-full filter blur-[100px] pointer-events-none" />

          <p className="text-center text-lg md:text-xl font-serif text-white mb-12 relative z-10">
            "Supporting workflows across the world's leading accounting platforms."
          </p>

          <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4 relative z-10">
            <div className="flex flex-col items-center text-center px-4 group">
              <span className="text-4xl font-serif text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-200">12+</span>
              <span className="text-xs text-white/60 uppercase tracking-[0.15em] font-medium">Professional Platforms</span>
            </div>

            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            <div className="flex flex-col items-center text-center px-4 group">
              <span className="text-4xl font-serif text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-200">UK, US & AU</span>
              <span className="text-xs text-white/60 uppercase tracking-[0.15em] font-medium">Accounting Ecosystems</span>
            </div>

            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            <div className="flex flex-col items-center text-center px-4 group">
              <span className="text-4xl font-serif text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-200">Cloud Ready</span>
              <span className="text-xs text-white/60 uppercase tracking-[0.15em] font-medium">Modern Workflow</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

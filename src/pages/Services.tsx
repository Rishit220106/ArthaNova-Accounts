import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { CtaBanner } from '../components/ui/CtaBanner';
import { FileText, LayoutDashboard, Calculator, CheckCircle2, Building2, BarChart3, TrendingUp, Calendar, ArrowRight, ShieldCheck, PieChart, Users, LineChart, FileCheck, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const Services = () => {
  return (
    <div className="flex flex-col">

      <SEO
        title="Premium Accounting & Bookkeeping Services"
        description="Comprehensive financial solutions including bookkeeping, payroll management, corporate tax returns, and statutory compliance for global businesses."
        canonical="/services"
        schema={`{"@context":"https://schema.org","@type":"Service","name":"International Accounting & Bookkeeping Services","provider":{"@type":"AccountingService","name":"ArthaNovaccounts"},"areaServed":["UK","US","Australia"],"hasOfferCatalog":{"@type":"OfferCatalog","name":"Accounting Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Bookkeeping & Management Accounts"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Payroll Management"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Statutory Accounts & Financial Reporting"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Corporate Tax Returns & Planning"}}]}}`}

        breadcrumbs={[{ "name": "Home", "url": "/" }, { "name": "Services", "url": "/services" }]}
      />

      {/* Page Hero - Deep Navy Gradient with Luminous Glow */}
      <section className="bg-[#07162D] text-white pt-48 pb-32 relative overflow-hidden">
        {/* Core background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#102547] via-[#0B1D38] to-[#07162D]" />

        {/* Textures */}
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />

        {/* Financial Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4AF37]/10 rounded-full filter blur-[150px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full filter blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        {/* Central Spotlight behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[1000px] h-[500px] bg-[#132D56]/30 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-24 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-block px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-8 shadow-premium backdrop-blur-sm"
          >
            Our Expertise
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif leading-[1.15] max-w-4xl mx-auto mb-8 tracking-tight text-white drop-shadow-sm"
          >
            Premium Accounting Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 font-sans leading-relaxed max-w-3xl mx-auto font-light mb-12"
          >
            Rigorous, scalable, and fully compliant financial management solutions for modern global enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
          >
            <Button onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })} className="group bg-[#D4AF37] text-[#050E1D] hover:bg-white px-8 py-6 text-lg rounded-full shadow-[0_4px_15px_rgba(212,175,55,0.2)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.4)] transition-all duration-200 font-bold hover:-translate-y-1.5">
              View Services
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1 inline-block" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Service 1: Finalisation - Warm White */}
      <section id="finalisation" className="py-32 bg-[#F7F3EA] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full filter blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full lg:w-5/12"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#102547] border border-[#102547]/10 shadow-premium flex items-center justify-center mb-8">
                <FileText className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#07162D] mb-6 leading-tight">Finalisation</h2>
              <p className="text-xl text-[#07162D]/90 font-medium leading-relaxed mb-6">
                Year-end accounts preparation ensuring compliance with statutory requirements and accounting standards.
              </p>
              <div className="h-px w-12 bg-[#D4AF37] mb-6" />
              <p className="text-lg text-[#07162D]/70 leading-relaxed">
                Our finalisation service goes beyond simple compliance. We meticulously prepare your year-end statutory accounts, ensuring every financial detail aligns perfectly with the latest reporting standards. We review your ledgers, adjust accruals and prepayments, and prepare a comprehensive final file that is ready for audit or stakeholder review, providing you with absolute peace of mind.
              </p>
            </motion.div>

            {/* Right: Visual Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-7/12 relative h-[500px] flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl border border-[#07162D]/5 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] group-hover:shadow-[0_30px_70px_-15px_rgba(212,175,55,0.15)] transition-all duration-200 overflow-hidden">
                {/* Abstract UI Representation */}
                <div className="p-8 h-full flex flex-col justify-center">
                  <div className="flex gap-6 justify-center items-end h-[300px]">
                    {/* Floating Report Cards */}
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="w-48 bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#07162D]/5 relative z-10"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#F7F3EA] flex items-center justify-center mb-4">
                        <FileCheck className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                      <div className="h-2 w-20 bg-[#F7F3EA] rounded mb-3" />
                      <div className="h-2 w-12 bg-[#F7F3EA] rounded mb-8" />
                      <div className="h-16 w-full bg-[#F7F3EA] rounded-lg mb-4" />
                      <div className="flex items-center justify-between">
                        <div className="h-2 w-16 bg-[#F7F3EA] rounded" />
                        <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle2 className="w-2.5 h-2.5 text-green-600" />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -10 }}
                      className="w-56 bg-white rounded-2xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-[#07162D]/5 relative z-20 -mb-8"
                    >
                      <div className="flex justify-between items-center mb-6">
                        <div className="h-3 w-24 bg-[#102547]/10 rounded" />
                        <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div className="space-y-4">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded border border-[#D4AF37]/30 flex items-center justify-center bg-[#D4AF37]/5">
                              <CheckCircle2 className="w-2.5 h-2.5 text-[#D4AF37]" />
                            </div>
                            <div className="h-2 flex-1 bg-[#F7F3EA] rounded" />
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 pt-4 border-t border-[#07162D]/5 flex items-center justify-between">
                        <div className="h-2 w-16 bg-[#F7F3EA] rounded" />
                        <div className="h-6 w-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[9px] font-bold text-[#D4AF37] uppercase tracking-wider">
                          Compliant
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Service 2: Payroll - Very Light Blue Tint */}
      <section id="payroll" className="py-32 bg-[#102547] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full filter blur-[120px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#132D56]/30 rounded-full filter blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-24 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left: Visual Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-7/12 relative h-[500px] group"
            >
              <div className="absolute inset-0 bg-[#132D56]/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-[0_15px_50px_rgba(0,0,0,0.3)] group-hover:shadow-[0_25px_60px_rgba(212,175,55,0.1)] transition-all duration-200 p-8 flex flex-col justify-center">
                {/* Payroll Dashboard UI */}
                <div className="w-full max-w-lg mx-auto bg-[#0B1D38] rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-white/5">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-white" />
                      <div className="h-3 w-24 bg-white/10 rounded" />
                    </div>
                    <div className="h-6 w-24 bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wider flex items-center justify-center rounded-full border border-green-500/20">
                      Processed
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-4 mb-6">
                      <div className="flex-1 bg-white/5 border border-white/5 p-4 rounded-xl">
                        <div className="h-2 w-16 bg-white/10 rounded mb-3" />
                        <div className="h-5 w-24 bg-[#D4AF37]/20 rounded mb-1" />
                      </div>
                      <div className="flex-1 bg-white/5 border border-white/5 p-4 rounded-xl">
                        <div className="h-2 w-16 bg-white/10 rounded mb-3" />
                        <div className="h-5 w-24 bg-[#93C5FD]/20 rounded mb-1" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-white/5 hover:bg-white/5 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] text-xs font-bold">
                              {String.fromCharCode(64 + i)}
                            </div>
                            <div>
                              <div className="h-2 w-20 bg-white/20 rounded mb-1.5" />
                              <div className="h-1.5 w-12 bg-white/10 rounded" />
                            </div>
                          </div>
                          <div className="h-3 w-16 bg-white/10 rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full lg:w-5/12"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 shadow-[0_8px_20px_rgba(212,175,55,0.05)] flex items-center justify-center mb-8">
                <Building2 className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">Payroll</h2>
              <p className="text-xl text-white/90 font-medium leading-relaxed mb-6">
                Secure, compliant, and timely payroll processing for your entire organization.
              </p>
              <div className="h-px w-12 bg-[#D4AF37] mb-6" />
              <p className="text-lg text-white/70 leading-relaxed">
                We manage the complexities of payroll administration so you can focus on core business activities. From calculating net pay, processing tax deductions, managing pension contributions, to issuing digital payslips, our precise payroll service ensures your workforce is paid accurately and on time while maintaining strict compliance with local employment tax regulations.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Service 3: Management Accounts - White (Split layout with floating cards) */}
      <section id="management-accounts" className="py-32 bg-[#0B1D38] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#132D56]/40 rounded-full filter blur-[150px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.2 }}
              className="w-20 h-20 mx-auto rounded-3xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 shadow-[0_8px_20px_rgba(212,175,55,0.05)] flex items-center justify-center mb-8"
            >
              <LayoutDashboard className="w-10 h-10 text-[#D4AF37]" strokeWidth={1.5} />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight"
            >
              Management Accounts
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="text-xl text-white/90 font-medium leading-relaxed mb-6"
            >
              Detailed monthly or quarterly reporting providing critical insights into your financial performance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <p className="text-lg text-white/70 leading-relaxed">
                Navigate your business with clarity. We deliver bespoke management accounts tailored to your specific operational needs. Our reports include profit and loss analysis, balance sheet reconciliations, cash flow forecasting, and KPI tracking, empowering your executive team to make data-driven, strategic decisions with confidence.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.2, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
          >
            {/* Visual KPI Cards */}
            <div className="bg-[#102547] border border-white/5 rounded-3xl p-8 flex flex-col hover:bg-[#132D56] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] hover:-translate-y-1.5 transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-6 border border-[#D4AF37]/20 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-transform">
                <TrendingUp className="w-6 h-6" strokeWidth={2} />
              </div>
              <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-2">Revenue Growth</h4>
              <div className="text-4xl font-serif text-white mb-4 group-hover:text-[#D4AF37] transition-colors">+24.8%</div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-auto">
                <div className="w-[75%] h-full bg-[#D4AF37] rounded-full" />
              </div>
            </div>

            <div className="bg-[#102547] border border-white/5 rounded-3xl p-8 flex flex-col hover:bg-[#132D56] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] hover:-translate-y-1.5 transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-6 border border-[#D4AF37]/20 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-transform">
                <PieChart className="w-6 h-6" strokeWidth={2} />
              </div>
              <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-2">Operating Margin</h4>
              <div className="text-4xl font-serif text-white mb-4 group-hover:text-[#D4AF37] transition-colors">18.2%</div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-auto">
                <div className="w-[60%] h-full bg-[#D4AF37] rounded-full" />
              </div>
            </div>

            <div className="bg-[#102547] border border-white/5 rounded-3xl p-8 flex flex-col hover:bg-[#132D56] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] hover:-translate-y-1.5 transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-6 border border-[#D4AF37]/20 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-transform">
                <DollarSign className="w-6 h-6" strokeWidth={2} />
              </div>
              <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-2">Cash Runway</h4>
              <div className="text-4xl font-serif text-white mb-4 group-hover:text-[#D4AF37] transition-colors">14 Mo</div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-auto">
                <div className="w-[85%] h-full bg-[#D4AF37] rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service 4: VAT - Soft Slate Background */}
      <section id="vat" className="py-32 bg-[#F7F3EA] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full lg:w-5/12 order-2 lg:order-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#102547] border border-[#102547]/10 shadow-premium flex items-center justify-center mb-8">
                <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#07162D] mb-6 leading-tight">VAT Compliance</h2>
              <p className="text-xl text-[#07162D]/90 font-medium leading-relaxed mb-6">
                Meticulous VAT return preparation and advisory to navigate complex international tax laws.
              </p>
              <div className="h-px w-12 bg-[#D4AF37] mb-6" />
              <p className="text-lg text-[#07162D]/70 leading-relaxed">
                Indirect tax compliance requires extreme precision. Our VAT specialists handle the preparation and submission of your VAT returns, ensuring all input and output taxes are accurately recorded. We provide proactive advisory on cross-border transactions, complex VAT schemes, and regulatory changes to minimize your risk of penalties.
              </p>
            </motion.div>

            {/* Right: Visual Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-7/12 relative h-[500px] flex items-center justify-center group order-1 lg:order-2"
            >
              <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[#07162D]/5 p-8 relative z-10 group-hover:-translate-y-1.5 transition-transform duration-200">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#07162D]/10">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#D4AF37]" />
                    <div className="text-sm font-bold text-[#07162D] tracking-wide">Q3 VAT RETURN</div>
                  </div>
                  <div className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-100">
                    ON TRACK
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs text-[#07162D]/60 font-bold uppercase tracking-wider mb-1">Output VAT</div>
                      <div className="text-2xl font-serif text-[#07162D]">£42,500.00</div>
                    </div>
                    <LineChart className="w-6 h-6 text-[#07162D]/20" />
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs text-[#07162D]/60 font-bold uppercase tracking-wider mb-1">Input VAT</div>
                      <div className="text-2xl font-serif text-[#07162D]">£18,250.00</div>
                    </div>
                    <PieChart className="w-6 h-6 text-[#07162D]/20" />
                  </div>
                </div>

                <div className="bg-[#F7F3EA] p-5 rounded-2xl border border-[#07162D]/5 flex justify-between items-center">
                  <div>
                    <div className="text-xs text-[#07162D]/60 font-bold uppercase tracking-wider mb-1">Net Payable</div>
                    <div className="text-xl font-serif text-[#D4AF37] font-bold">£24,250.00</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white shadow-premium flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                </div>
              </div>

              {/* Decorative background element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#D4AF37]/10 to-transparent rounded-full filter blur-[40px] -z-10 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-transform duration-200" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Service 5: Corporation Tax - White (Glass panel layout) */}
      <section id="corporation-tax" className="py-32 bg-[#102547] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-24 relative z-10">
          <div className="bg-[#0B1D38]/80 backdrop-blur-sm rounded-[3rem] border border-white/5 p-10 lg:p-20 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* Soft decorative glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full filter blur-[80px] pointer-events-none group-hover:bg-[#D4AF37]/10 transition-colors duration-200" />

            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
              {/* Left: Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.2 }}
                className="w-full lg:w-1/2"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 shadow-[0_8px_20px_rgba(212,175,55,0.05)] flex items-center justify-center mb-8">
                  <Calculator className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">Corporation Tax</h2>
                <p className="text-xl text-white/90 font-medium leading-relaxed mb-6">
                  Strategic tax planning and accurate corporate tax return filings for optimal tax positioning.
                </p>
                <div className="h-px w-12 bg-[#D4AF37] mb-6" />
                <p className="text-lg text-white/70 leading-relaxed">
                  Protect your corporate wealth through intelligent tax planning. We prepare and file your Corporation Tax returns accurately, identifying allowable expenses and capital allowances to optimize your tax liabilities. Our team stays abreast of the latest tax legislation to ensure your enterprise benefits from all available reliefs while remaining strictly compliant.
                </p>
              </motion.div>

              {/* Right: Visual Illustration (Glass style) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="w-full lg:w-1/2 relative flex justify-end"
              >
                <div className="w-full max-w-lg bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)] group-hover:-translate-y-1.5 transition-transform duration-200">
                  <div className="flex gap-4 mb-8">
                    <div className="w-1/2 h-32 bg-white/5 rounded-2xl border border-white/5 p-4 flex flex-col justify-between">
                      <div className="w-8 h-8 rounded-full bg-[#102547] flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <div className="h-2 w-16 bg-white/20 rounded" />
                    </div>
                    <div className="w-1/2 h-32 bg-[#D4AF37]/10 rounded-2xl border border-[#D4AF37]/20 p-4 flex flex-col justify-between">
                      <div className="w-8 h-8 rounded-full bg-[#102547] flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                        <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                      </div>
                      <div className="h-2 w-20 bg-[#D4AF37]/30 rounded" />
                    </div>
                  </div>

                  <div className="bg-[#102547] rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-white/5">
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
                      <div className="h-3 w-32 bg-white/10 rounded" />
                      <div className="h-4 w-12 bg-[#D4AF37]/20 rounded" />
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex justify-between items-center">
                          <div className="flex gap-3 items-center">
                            <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                            <div className="h-2 w-24 bg-white/10 rounded" />
                          </div>
                          <div className="h-2 w-12 bg-white/10 rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 6: Bookkeeping - Very Light Blue */}
      <section id="bookkeeping" className="py-32 bg-[#0B1D38] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#132D56] rounded-full filter blur-[100px] -translate-x-1/4 -translate-y-1/4 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-24 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left: Visual Illustration */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-7/12 relative h-[500px] group flex items-center"
            >
              <div className="w-full flex flex-col gap-4">
                {/* Simulated Ledger Rows */}
                {[
                  { icon: Building2, color: 'text-[#D4AF37]', bg: 'bg-[#D4AF37]/10 border-[#D4AF37]/20', amount: '+ £12,450.00', delay: 0 },
                  { icon: FileText, color: 'text-[#93C5FD]', bg: 'bg-[#93C5FD]/10 border-[#93C5FD]/20', amount: '- £1,200.00', delay: 100 },
                  { icon: Users, color: 'text-white', bg: 'bg-white/10 border-white/20', amount: '- £8,450.00', delay: 200 },
                  { icon: LayoutDashboard, color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20', amount: '+ £5,320.00', delay: 300 },
                ].map((row, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-[#102547] rounded-2xl p-5 flex items-center justify-between shadow-[0_4px_15px_rgba(0,0,0,0.2)] border border-white/5 hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/20 transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${row.bg}`}>
                        <row.icon className={`w-5 h-5 ${row.color}`} />
                      </div>
                      <div>
                        <div className="h-3 w-32 bg-white/10 rounded mb-2" />
                        <div className="h-2 w-20 bg-white/5 rounded" />
                      </div>
                    </div>
                    <div className="font-mono text-sm font-medium text-white">
                      {row.amount}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full lg:w-5/12"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 shadow-[0_8px_20px_rgba(212,175,55,0.05)] flex items-center justify-center mb-8">
                <BarChart3 className="w-8 h-8 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">Bookkeeping</h2>
              <p className="text-xl text-white/90 font-medium leading-relaxed mb-6">
                Accurate daily ledger management, reconciliation, and cloud accounting software integration.
              </p>
              <div className="h-px w-12 bg-[#D4AF37] mb-6" />
              <p className="text-lg text-white/70 leading-relaxed">
                The foundation of robust financial management is immaculate bookkeeping. We maintain your daily ledgers, process purchase and sales invoices, reconcile bank statements, and ensure every transaction is categorized with absolute precision. We seamlessly integrate with leading cloud accounting platforms to provide real-time visibility into your financial health.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <CtaBanner
        title="Ready to optimize your financial operations?"
        description="Connect with our experts to design a tailored outsourcing solution for your firm."
        primaryActionText="Get In Touch"
      />
    </div>
  );
};

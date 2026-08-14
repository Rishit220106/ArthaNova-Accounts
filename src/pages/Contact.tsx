import React, { useState, useRef, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, ArrowRight, Building2, Globe, Clock, ShieldCheck, CheckCircle2, ChevronDown, Award, Users, Lock, FastForward, AlertCircle, Check, X } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { contactService } from '../services/contactService';
import { BUSINESS_CONTACT } from '../constants/contact';
import { UKFlag, USFlag, AUFlag } from '../components/ui/Flags';

const AVAILABLE_SERVICES = [
  'Bookkeeping',
  'Payroll Management',
  'VAT Compliance',
  'Corporation Tax',
  'Management Accounts',
  'Financial Reporting',
  'Business Advisory',
  'Other'
];

export const Contact = () => {
  const [formState, setFormState] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    jurisdiction: string;
    services: string[];
    message: string;
  }>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jurisdiction: '',
    services: [],
    message: ''
  });

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleService = (serviceName: string) => {
    setFormState((prev) => {
      const exists = prev.services.includes(serviceName);
      const updated = exists
        ? prev.services.filter((s) => s !== serviceName)
        : [...prev.services, serviceName];
      return { ...prev, services: updated };
    });
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const removeService = (serviceName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFormState((prev) => ({
      ...prev,
      services: prev.services.filter((s) => s !== serviceName)
    }));
  };

  const clearAllServices = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFormState((prev) => ({
      ...prev,
      services: []
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const getCountryName = (jurisdiction: string): string => {
    switch (jurisdiction) {
      case 'uk':
        return 'United Kingdom';
      case 'us':
        return 'United States';
      case 'au':
        return 'Australia';
      case 'multiple':
        return 'Multiple Regions';
      default:
        return jurisdiction || 'International';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Front-end validation
    const fullName = `${formState.firstName} ${formState.lastName}`.trim();
    if (!fullName || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (formState.services.length === 0) {
      setErrorMessage('Please select at least one service.');
      return;
    }

    setIsSubmitting(true);

    const country = getCountryName(formState.jurisdiction);

    const payload = {
      name: fullName,
      email: formState.email.trim(),
      company: formState.company.trim() || 'N/A',
      country: country,
      services: formState.services,
      service: formState.services.join(' · '),
      message: formState.message.trim()
    };

    try {
      await contactService.submitPublicContact(payload);
      setIsSubmitted(true);
      setFormState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jurisdiction: '',
        services: [],
        message: ''
      });
      setIsServicesOpen(false);
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to submit inquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      country: "United Kingdom",
      flagIcon: <UKFlag className="w-5 h-3.5 rounded-[2px] shadow-sm border border-[#07162D]/15 inline-block align-middle shrink-0" />,
      description: "Statutory compliance, VAT, and corporate tax advisory for UK enterprises."
    },
    {
      country: "United States",
      flagIcon: <USFlag className="w-5 h-3.5 rounded-[2px] shadow-sm border border-[#07162D]/15 inline-block align-middle shrink-0" />,
      description: "Federal and state-level tax, bookkeeping, and economic nexus analysis."
    },
    {
      country: "Australia",
      flagIcon: <AUFlag className="w-5 h-3.5 rounded-[2px] shadow-sm border border-[#07162D]/15 inline-block align-middle shrink-0" />,
      description: "ATO compliance, BAS preparation, and strategic corporate structuring."
    }
  ];

  const trustFeatures = [
    {
      icon: Users,
      title: "Dedicated Account Managers",
      description: "A single point of contact who understands your business intimately."
    },
    {
      icon: Award,
      title: "ACCA / CA Professionals",
      description: "All files managed by rigorously qualified financial experts."
    },
    {
      icon: Lock,
      title: "Secure Data Handling",
      description: "Enterprise-grade encryption and strict confidentiality protocols."
    },
    {
      icon: FastForward,
      title: "Responsive Support",
      description: "Dedicated communication channels and rapid issue resolution."
    }
  ];

  return (
    <div className="flex flex-col bg-[#F8F5EE]">

      <SEO
        title="Contact Us"
        description="Start a conversation with ArthaNova Accounts for tailored accounting, tax, and compliance solutions across the UK, US, and Australia."
        canonical="/contact"
        schema={`{"@context":"https://schema.org","@type":"ContactPage","name":"Contact Us | ArthaNova Accounts","url":"https://arthanovaaccounts.com/contact","contactPoint":{"@type":"ContactPoint","email":"${BUSINESS_CONTACT.email}","contactType":"customer support"}}`}

        breadcrumbs={[{ "name": "Home", "url": "/" }, { "name": "Contact", "url": "/contact" }]}
      />

      {/* 1. Page Hero (Warm Ivory Background with Deep Navy Feature Container) */}
      <section className="bg-[#F8F5EE] text-[#10254A] pt-40 pb-20 md:pt-48 md:pb-28 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_45%,#000_50%,transparent_100%)] pointer-events-none" />

        {/* Soft Warm Radial Glow Behind Center of Hero (<4% Opacity) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#D4AF37]/[0.035] filter blur-[120px] rounded-full pointer-events-none" />

        {/* Oversized Subtle Circular Gold Accent Line (Opacity 4%) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border border-[#D4AF37]/15 rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">

          {/* Centered Floating Deep Navy Feature Panel (900-1000px width, 32px rounded corners, soft layered shadow) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
            className="max-w-[950px] mx-auto bg-[#10254A] border border-white/[0.08] rounded-[32px] py-12 px-6 sm:px-10 md:py-20 md:px-14 shadow-[0_25px_60px_rgba(16,37,74,0.18)] relative overflow-hidden text-center"
          >
            {/* Soft Radial Glow Behind Heading */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#D4AF37]/5 filter blur-[90px] rounded-full pointer-events-none" />

            {/* Abstract Gold Curved Lines */}
            <svg className="absolute -top-10 -right-10 w-72 h-72 text-[#D4AF37] opacity-[0.04] pointer-events-none" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.5" />
            </svg>

            {/* Subtle Inner Geometric Grid (<5% Opacity) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

            {/* Tiny Glowing Gold Particles (3-5 only) */}
            <div className="absolute top-6 left-12 w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-40 blur-[0.5px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-8 right-12 w-2 h-2 rounded-full bg-[#D4AF37] opacity-40 blur-[0.5px] animate-pulse pointer-events-none" />
            <div className="absolute top-1/2 right-6 w-1 h-1 rounded-full bg-[#D4AF37] opacity-50 pointer-events-none" />
            <div className="absolute bottom-10 left-16 w-1 h-1 rounded-full bg-[#D4AF37] opacity-40 pointer-events-none" />

            <div className="relative z-10">
              {/* Heading: White Large Editorial Serif, Max Width ~750px */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.15] text-white mb-6 tracking-tight max-w-[750px] mx-auto">
                Let's Discuss Your Financial Goals
              </h1>

              {/* Description: Muted White, Centered, Max Width ~650px */}
              <p className="text-base sm:text-lg md:text-xl text-white/82 font-sans leading-relaxed max-w-[650px] mx-auto font-light mb-10">
                Our specialists help businesses with accounting, tax, payroll, bookkeeping, compliance, and international expansion.
              </p>

              {/* Four Trust Chips (Translucent Navy Background, Thin Gold Outline, White Text, Gold Check) */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#163663]/60 border border-[#D4AF37]/35 text-white text-xs sm:text-sm font-medium shadow-sm hover:border-[#D4AF37]/60 transition-colors cursor-default backdrop-blur-sm">
                  <span className="text-[#D4AF37] font-bold">✓</span>
                  <span>UK Accounting</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#163663]/60 border border-[#D4AF37]/35 text-white text-xs sm:text-sm font-medium shadow-sm hover:border-[#D4AF37]/60 transition-colors cursor-default backdrop-blur-sm">
                  <span className="text-[#D4AF37] font-bold">✓</span>
                  <span>US Tax Compliance</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#163663]/60 border border-[#D4AF37]/35 text-white text-xs sm:text-sm font-medium shadow-sm hover:border-[#D4AF37]/60 transition-colors cursor-default backdrop-blur-sm">
                  <span className="text-[#D4AF37] font-bold">✓</span>
                  <span>Payroll Services</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#163663]/60 border border-[#D4AF37]/35 text-white text-xs sm:text-sm font-medium shadow-sm hover:border-[#D4AF37]/60 transition-colors cursor-default backdrop-blur-sm">
                  <span className="text-[#D4AF37] font-bold">✓</span>
                  <span>Business Advisory</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Main Content Grid (Contact Form + Info) */}
      <section className="py-24 bg-[#F7F3EA] relative -mt-16 z-20 rounded-t-[3rem] border-t border-[#07162D]/5">
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.02] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

          {/* Pre-Contact Trust Strip */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 relative z-10">
            {[
              {
                icon: Lock,
                title: "Confidential & Secure",
                desc: "Your financial information is handled with absolute professionalism and confidentiality."
              },
              {
                icon: Globe,
                title: "International Expertise",
                desc: "Supporting businesses across the UK, United States, and Australia."
              },
              {
                icon: Award,
                title: "Personalized Experience",
                desc: "Every engagement is tailored to your business goals and compliance requirements."
              }
            ].map((trust, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                className="bg-[#10254A] rounded-2xl p-6 md:p-8 border border-[#D4AF37]/20 shadow-[0_15px_35px_rgba(16,37,74,0.25)] hover:shadow-[0_25px_50px_rgba(16,37,74,0.45)] hover:-translate-y-1.5 hover:border-[#D4AF37] transition-all duration-300 ease-out flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-[#163663] border border-[#D4AF37]/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all duration-300 shadow-md">
                  <trust.icon className="w-5 h-5 text-[#D4AF37] group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all duration-300" />
                </div>
                <h4 className="font-serif text-white text-lg mb-2">{trust.title}</h4>
                <p className="text-sm text-white/80 leading-relaxed font-light">
                  {trust.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* Left Column: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
              className="lg:col-span-3 bg-[#102547] rounded-[2rem] p-8 md:p-12 border border-[#07162D]/5 shadow-[0_20px_60px_-15px_rgba(7,22,45,0.15)] relative overflow-hidden"
            >
              {/* Subtle top gradient */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#D4AF37]" />

              <h3 className="text-3xl font-serif text-white mb-8">Request a Consultation</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#0B1D38] border border-green-500/20 rounded-2xl p-8 flex flex-col items-center text-center h-[400px] justify-center shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h4 className="text-2xl font-serif text-white mb-4">Request Received</h4>
                  <p className="text-white/80 max-w-md font-sans leading-relaxed">
                    Thank you for contacting ArthaNova Accounts. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2.5 bg-[#D4AF37] text-[#07162D] text-xs font-bold rounded-full hover:bg-[#E5C35A] transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-white/70">First Name <span className="text-[#D4AF37]">*</span></label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        autoComplete="given-name"
                        value={formState.firstName}
                        onChange={handleChange}
                        className="w-full h-14 px-4 rounded-xl border border-white/10 bg-[#07162D]/50 text-white focus:bg-[#07162D] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all duration-200 shadow-inner"
                        placeholder="Emma"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-white/70">Last Name <span className="text-[#D4AF37]">*</span></label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        autoComplete="family-name"
                        value={formState.lastName}
                        onChange={handleChange}
                        className="w-full h-14 px-4 rounded-xl border border-white/10 bg-[#07162D]/50 text-white focus:bg-[#07162D] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all duration-200 shadow-inner"
                        placeholder="Thompson"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white/70">Work Email <span className="text-[#D4AF37]">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full h-14 px-4 rounded-xl border border-white/10 bg-[#07162D]/50 text-white focus:bg-[#07162D] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all duration-200 shadow-inner"
                        placeholder="emma.thompson@thompsonadvisory.co.uk"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-white/70">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full h-14 px-4 rounded-xl border border-white/10 bg-[#07162D]/50 text-white focus:bg-[#07162D] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all duration-200 shadow-inner"
                        placeholder="+44 7700 900123"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-white/70">Company Name <span className="text-[#D4AF37]">*</span></label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        autoComplete="organization"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full h-14 px-4 rounded-xl border border-white/10 bg-[#07162D]/50 text-white focus:bg-[#07162D] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all duration-200 shadow-inner"
                        placeholder="Thompson Advisory Ltd."
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="jurisdiction" className="text-sm font-medium text-white/70">Target Jurisdiction <span className="text-[#D4AF37]">*</span></label>
                      <div className="relative">
                        <select
                          id="jurisdiction"
                          name="jurisdiction"
                          required
                          value={formState.jurisdiction}
                          onChange={handleChange}
                          className="w-full h-14 px-4 rounded-xl border border-white/10 bg-[#07162D]/50 text-white focus:bg-[#07162D] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all duration-200 appearance-none cursor-pointer shadow-inner"
                        >
                          <option value="" disabled>Select region...</option>
                          <option value="uk" className="bg-[#07162D] text-white">United Kingdom</option>
                          <option value="us" className="bg-[#07162D] text-white">United States</option>
                          <option value="au" className="bg-[#07162D] text-white">Australia</option>
                          <option value="multiple" className="bg-[#07162D] text-white">Multiple Regions</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Service Required (Multi-Select) */}
                  <div className="space-y-2 relative" ref={dropdownRef}>
                    <div className="flex justify-between items-center">
                      <label htmlFor="services-trigger" className="text-sm font-medium text-white/70">
                        Service Required <span className="text-[#D4AF37]">*</span>
                      </label>
                      {formState.services.length > 0 && (
                        <span className="text-xs font-semibold text-[#D4AF37] bg-[#D4AF37]/15 border border-[#D4AF37]/35 px-2.5 py-0.5 rounded-full">
                          {formState.services.length} {formState.services.length === 1 ? 'service' : 'services'} selected
                        </span>
                      )}
                    </div>

                    <div className="relative">
                      <button
                        type="button"
                        id="services-trigger"
                        onClick={() => setIsServicesOpen((prev) => !prev)}
                        className={`w-full min-h-[3.5rem] px-4 py-3 rounded-xl border ${
                          formState.services.length === 0 && errorMessage?.includes('service')
                            ? 'border-rose-500/70 bg-rose-500/10'
                            : 'border-white/10 bg-[#07162D]/50 focus:bg-[#07162D] focus:border-[#D4AF37]'
                        } text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all duration-200 text-left flex items-center justify-between shadow-inner cursor-pointer`}
                        aria-expanded={isServicesOpen}
                        aria-label="Service Required Multi-Select"
                      >
                        <div className="flex-1 flex flex-wrap items-center gap-1.5 pr-2">
                          {formState.services.length === 0 ? (
                            <span className="text-white/40 text-sm">Select services...</span>
                          ) : (
                            formState.services.map((srv) => (
                              <span
                                key={srv}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-semibold"
                              >
                                {srv}
                                <span
                                  role="button"
                                  tabIndex={0}
                                  onClick={(e) => removeService(srv, e)}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') removeService(srv, e as any);
                                  }}
                                  className="hover:text-white transition-colors cursor-pointer ml-0.5 p-0.5"
                                  title={`Remove ${srv}`}
                                >
                                  <X className="w-3 h-3" />
                                </span>
                              </span>
                            ))
                          )}
                        </div>

                        <div className="flex items-center gap-2 shrink-0 text-white/50">
                          {formState.services.length > 0 && (
                            <span
                              role="button"
                              tabIndex={0}
                              onClick={clearAllServices}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') clearAllServices(e as any);
                              }}
                              className="text-xs text-white/40 hover:text-white/90 transition-colors pr-2 border-r border-white/15 cursor-pointer font-medium"
                              title="Clear all selected services"
                            >
                              Clear
                            </span>
                          )}
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-[#D4AF37]' : ''}`} />
                        </div>
                      </button>

                      {/* Dropdown Options */}
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 right-0 top-full mt-2 z-40 bg-[#07162D] border border-white/20 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] py-2 max-h-72 overflow-y-auto backdrop-blur-2xl"
                            role="listbox"
                          >
                            <div className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] border-b border-white/10 flex justify-between items-center">
                              <span>Select Services Needed</span>
                              <span className="text-white/40 text-[10px]">Multi-select</span>
                            </div>
                            {AVAILABLE_SERVICES.map((serviceName) => {
                              const isSelected = formState.services.includes(serviceName);
                              return (
                                <div
                                  key={serviceName}
                                  onClick={() => toggleService(serviceName)}
                                  className={`flex items-center justify-between px-4 py-3 text-sm cursor-pointer transition-all ${
                                    isSelected
                                      ? 'bg-[#D4AF37]/15 text-white font-semibold'
                                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                                  }`}
                                >
                                  <span className="flex-1">{serviceName}</span>
                                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                                    isSelected
                                      ? 'bg-[#D4AF37] border-[#D4AF37] text-[#07162D]'
                                      : 'border-white/30 bg-white/5'
                                  }`}>
                                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                                  </div>
                                </div>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center mb-1">
                      <label htmlFor="message" className="text-sm font-medium text-white/90">How can we help? <span className="text-[#D4AF37]">*</span></label>
                      <span className="text-xs font-semibold text-[#D4AF37] bg-[#D4AF37]/15 border border-[#D4AF37]/35 px-2.5 py-0.5 rounded-full tracking-wide shadow-sm">
                        {formState.message.trim() ? formState.message.trim().split(/\s+/).length : 0} {formState.message.trim() && formState.message.trim().split(/\s+/).length === 1 ? 'word' : 'words'}
                      </span>
                    </div>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl border border-white/15 bg-[#07162D]/60 text-white focus:bg-[#07162D] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all duration-200 resize-none shadow-inner text-sm font-sans"
                        placeholder="Describe your business goals and the accounting or tax support you're looking for..."
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto h-14 px-8 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-base hover:bg-[#E5C35A] hover:shadow-[0_8px_25px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer shadow-md disabled:opacity-50 group"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-[#10254A]/30 border-t-[#10254A] rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Start a Conversation</span>
                        <ArrowRight className="w-5 h-5 text-[#10254A] group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-white/50 text-center mt-4 font-light">
                    Your information is strictly confidential and protected by enterprise-grade security.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Right Column: Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.4 }}
              className="lg:col-span-2 space-y-6 pt-12 lg:pt-0"
            >
              {/* Direct Contact Card */}
              <div className="bg-[#10254A] rounded-3xl p-8 border border-[#D4AF37]/20 shadow-[0_15px_35px_rgba(16,37,74,0.25)] group hover:-translate-y-1.5 hover:border-[#D4AF37] hover:shadow-[0_25px_50px_rgba(16,37,74,0.45)] transition-all duration-300 ease-out relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-[3rem] -z-10 group-hover:bg-[#D4AF37]/10 transition-colors duration-300" />

                <h3 className="text-xl font-serif text-white mb-6 relative z-10">Direct Contact</h3>

                <div className="space-y-6 relative z-10">
                  <div className="flex gap-4 items-start group/item">
                    <div className="w-12 h-12 rounded-full bg-[#163663] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 group-hover/item:-translate-y-0.5 group-hover/item:border-[#D4AF37] group-hover/item:shadow-[0_4px_15px_rgba(212,175,55,0.2)] transition-all duration-300">
                      <Mail className="w-5 h-5 text-[#D4AF37] group-hover/item:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase mb-1">Email Support</div>
                      <a href={BUSINESS_CONTACT.mailto} className="text-lg font-medium text-white hover:text-[#D4AF37] transition-colors">
                        {BUSINESS_CONTACT.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start group/item">
                    <div className="w-12 h-12 rounded-full bg-[#163663] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 group-hover/item:-translate-y-0.5 group-hover/item:border-[#D4AF37] group-hover/item:shadow-[0_4px_15px_rgba(212,175,55,0.2)] transition-all duration-300">
                      <Clock className="w-5 h-5 text-[#D4AF37] group-hover/item:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase mb-1">Response Time</div>
                      <p className="text-base font-medium text-white">
                        Response within 1 working day<br />
                        <span className="text-sm font-normal text-white/70">UK · AU · US time zones covered</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Presence Cards */}
              <div className="bg-[#10254A] rounded-3xl p-8 border border-[#D4AF37]/20 shadow-[0_15px_35px_rgba(16,37,74,0.25)] group hover:-translate-y-1.5 hover:border-[#D4AF37] hover:shadow-[0_25px_50px_rgba(16,37,74,0.45)] transition-all duration-300 ease-out relative overflow-hidden">
                {/* Subtle map decoration */}
                <div className="absolute inset-0 bg-[url('/world-map.svg')] opacity-[0.03] bg-no-repeat bg-[center_top_-2rem] bg-[length:150%] pointer-events-none filter grayscale" />

                <h3 className="text-xl font-serif text-white mb-6 relative z-10">Global Jurisdictions</h3>
                <div className="space-y-4 relative z-10">
                  {offices.map((office, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-[#163663]/60 border border-[#D4AF37]/25 shadow-sm hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:shadow-[0_8px_20px_rgba(212,175,55,0.15)] transition-all duration-300 ease-out cursor-default backdrop-blur-sm">
                      <div className="w-9 h-9 rounded-lg bg-[#10254A] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        {office.flagIcon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{office.country}</h4>
                        <p className="text-sm text-white/80 font-light leading-relaxed">{office.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* What Happens Next? Timeline */}
          <div className="mt-24 pt-16 border-t border-[#07162D]/5 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h3 className="text-2xl md:text-3xl font-serif text-[#07162D] mb-4">What Happens Next?</h3>
              <p className="text-base text-[#07162D]/60 font-light leading-relaxed">
                Our typical consultation journey is designed to quickly understand your business and deliver tailored compliance solutions.
              </p>
            </div>

            <div className="relative">
              {/* Desktop Connecting Line */}
              <div className="hidden md:block absolute top-[1.75rem] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent z-0" />

              <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative z-10">
                {[
                  { step: "1", title: "Submit Your Inquiry", desc: "Share your business details and requirements via our secure form.", icon: Mail },
                  { step: "2", title: "Initial Review", desc: "Our partners review your inquiry to align the right expertise.", icon: ShieldCheck },
                  { step: "3", title: "Consultation Discussion", desc: "A detailed discussion to understand your specific challenges.", icon: Users },
                  {
                    step: "4", title: "Tailored Solution", desc: "We propose a customized accounting and compliance roadmap.", icon: Award
                  }].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.2, delay: idx * 0.1, ease: "easeOut" }}
                      className="flex flex-col items-center text-center group"
                    >
                      {/* Step Indicator */}
                      <div className="w-14 h-14 bg-[#0B1D38] rounded-full flex items-center justify-center mb-6 relative border border-[#D4AF37]/40 shadow-[0_8px_20px_rgba(212,175,55,0.15)] group-hover:shadow-[0_12px_25px_rgba(212,175,55,0.3)] group-hover:-translate-y-1.5 group-hover:border-[#D4AF37]/80 transition-all duration-200 ease-out z-10 cursor-default">
                        <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 filter blur-[6px] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <span className="text-xl font-serif text-[#D4AF37] relative z-10">{item.step}</span>
                      </div>

                      {/* Timeline Card */}
                      <div className="bg-gradient-to-br from-[#10254A] to-[#17345C] backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/5 shadow-[0_10px_30px_rgba(7,22,45,0.1)] w-full group-hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] group-hover:border-[#D4AF37]/40 group-hover:-translate-y-1.5 transition-all duration-200 ease-out flex flex-col items-center h-full relative overflow-hidden cursor-default">
                        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.04] pointer-events-none" />

                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/10 transition-colors duration-200">
                          <item.icon className="w-4 h-4 text-[#D4AF37]/80 group-hover:text-[#D4AF37] group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all duration-200" />
                        </div>

                        <h4 className="font-serif text-white text-lg mb-3">{item.title}</h4>
                        <p className="text-sm text-white/60 leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Clients Contact Us (Trust Section) */}
      <section className="py-24 bg-[#F8F5EE] border-t border-black/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#10254A] mb-6">The ArthaNova Accounts Advantage</h2>
            <p className="text-lg text-[#55657A] font-light leading-relaxed">
              We don't just process numbers. We provide rigorous financial intelligence and compliance confidence to ambitious global enterprises.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.2, delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#10254A] to-[#17345C] rounded-2xl p-8 border border-white/5 group hover:-translate-y-1.5 hover:border-[#D4AF37]/40 hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] transition-all duration-200 ease-out"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#D4AF37]/5 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-200">
                  <feature.icon className="w-6 h-6 text-[#D4AF37] opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all duration-200" />
                </div>
                <h4 className="text-lg font-serif text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-200">{feature.title}</h4>
                <p className="text-sm text-[#D8DCE4] font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

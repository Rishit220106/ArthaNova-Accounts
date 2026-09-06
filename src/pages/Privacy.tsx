import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, AlertTriangle, FileText, Mail, HelpCircle, UserCheck, Scale, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRIVACY_POLICY_VERSION, GRIEVANCE_CONTACT } from '../constants/privacy';

export const Privacy = () => {
  return (
    <div className="flex flex-col bg-[#F8F5EE] text-[#10254A] min-h-screen">
      <SEO
        title="Privacy Notice"
        description="Learn how ArthaNova Accounts collects, processes, stores, and protects personal data in compliance with the Digital Personal Data Protection (DPDP) Act."
        canonical="/privacy"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Privacy Notice", url: "/privacy" }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-[#F8F5EE] pt-40 pb-16 md:pt-48 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          
          {/* Legal Review Required Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-semibold mb-6 shadow-sm"
          >
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>LEGAL REVIEW REQUIRED — Implementation Draft Pending Final Counsel Review</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#10254A] mb-6 tracking-tight">
            Privacy Notice
          </h1>
          <p className="text-lg md:text-xl text-[#10254A]/80 font-light max-w-3xl mx-auto leading-relaxed">
            This Privacy Notice explains how ArthaNova Accounts ("we", "us", "our") collects, uses, retains, and safeguards personal data under the India Digital Personal Data Protection (DPDP) Act, 2023 and applicable privacy standards.
          </p>

          <div className="mt-6 text-xs text-[#10254A]/60 font-mono">
            Policy Version: <span className="font-semibold text-[#10254A]">{PRIVACY_POLICY_VERSION}</span> | Last Updated: September 1, 2026
          </div>
        </div>
      </section>

      {/* Main Document Body */}
      <section className="pb-24 bg-[#F8F5EE]">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          
          {/* Executive Summary Box */}
          <div className="bg-[#10254A] rounded-2xl p-8 text-white mb-12 border border-[#D4AF37]/30 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/10 rounded-bl-full pointer-events-none" />
            <h2 className="text-2xl font-serif mb-4 text-[#D4AF37] flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              Data Protection Commitments
            </h2>
            <p className="text-sm text-white/90 leading-relaxed font-light mb-4">
              ArthaNova Accounts operates as a Data Fiduciary regarding personal information provided through our public website and professional enquiry channels. We are committed to transparency, purpose limitation, data minimization, and enabling your statutory rights.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs text-white/80">
              <div><strong className="text-[#D4AF37]">Lawful Basis:</strong> Consent & Service Performance</div>
              <div><strong className="text-[#D4AF37]">Storage Location:</strong> Encrypted DB Clusters</div>
              <div><strong className="text-[#D4AF37]">Data Rights:</strong> Fully Supported via <Link to="/data-rights" className="underline text-[#D4AF37]">Portal</Link></div>
            </div>
          </div>

          <div className="space-y-12 text-[#10254A]/90 leading-relaxed font-sans text-base">

            {/* Section 1 */}
            <article className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#10254A] border-b border-[#10254A]/10 pb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#10254A] text-[#D4AF37] text-xs font-bold flex items-center justify-center font-sans">1</span>
                Who is Responsible for Processing
              </h2>
              <p>
                <strong>ArthaNova Accounts</strong> acts as the <em>Data Fiduciary</em> (or Data Controller) for personal data collected through <a href="https://arthanovaccounts.com" className="text-[#D4AF37] hover:underline font-medium">arthanovaccounts.com</a> and related operational communications.
              </p>
              <p className="text-sm text-[#10254A]/70 italic">
                Note: Legal entity registration details, physical corporate addresses, and statutory registration numbers are subject to final verification and legal review.
              </p>
            </article>

            {/* Section 2 */}
            <article className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#10254A] border-b border-[#10254A]/10 pb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#10254A] text-[#D4AF37] text-xs font-bold flex items-center justify-center font-sans">2</span>
                What Personal Data We Collect
              </h2>
              <p>We strictly minimize data collection to information essential for addressing business inquiries and providing accounting services:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-[#10254A]/85">
                <li><strong>Identity Information:</strong> Full name, professional title, business/company name.</li>
                <li><strong>Contact Information:</strong> Business email address, telephone/phone number (if provided).</li>
                <li><strong>Inquiry Details:</strong> Target jurisdiction (UK, US, Australia, or Multiple), required service categories (Bookkeeping, Tax, Payroll, Financial Reporting), and message content.</li>
                <li><strong>Technical Data:</strong> Standard server access logs, IP address (for security and rate-limiting purposes), browser user-agent header.</li>
                <li><strong>Consent Records:</strong> Affirmative consent timestamps, policy version accepted, and consent purpose preferences.</li>
              </ul>
            </article>

            {/* Section 3 */}
            <article className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#10254A] border-b border-[#10254A]/10 pb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#10254A] text-[#D4AF37] text-xs font-bold flex items-center justify-center font-sans">3</span>
                How Data is Collected
              </h2>
              <p>Personal data is collected directly from you when you submit a consultation inquiry on our website or submit a Data Rights Request form. We do not obtain personal data from undisclosed third-party data brokers or automated scraping.</p>
            </article>

            {/* Section 4 */}
            <article className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#10254A] border-b border-[#10254A]/10 pb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#10254A] text-[#D4AF37] text-xs font-bold flex items-center justify-center font-sans">4</span>
                Why Data is Collected (Purpose of Processing)
              </h2>
              <p>We process personal data for specific, clear, and lawful purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-[#10254A]/85">
                <li>Evaluating your corporate accounting and compliance needs.</li>
                <li>Responding to your contact inquiries and delivering requested consultations.</li>
                <li>Fulfilling legal, statutory, tax, and professional standards requirements.</li>
                <li>Protecting website integrity, security logging, and preventing abuse or spam.</li>
                <li>Sending optional professional insights or marketing communications (only if explicitly opted-in).</li>
              </ul>
            </article>

            {/* Section 5 & 6 */}
            <article className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#10254A] border-b border-[#10254A]/10 pb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#10254A] text-[#D4AF37] text-xs font-bold flex items-center justify-center font-sans">5</span>
                Necessary Processing vs. Consent-Based Processing
              </h2>
              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <div className="bg-white/80 p-6 rounded-xl border border-[#10254A]/10 shadow-sm">
                  <h3 className="font-serif font-semibold text-[#10254A] mb-2 text-lg">Necessary Processing</h3>
                  <p className="text-xs text-[#10254A]/80 leading-relaxed">
                    Processing your name, work email, company, and inquiry message is necessary to take steps at your request prior to entering into a contract or fulfilling your requested consultation.
                  </p>
                </div>
                <div className="bg-white/80 p-6 rounded-xl border border-[#10254A]/10 shadow-sm">
                  <h3 className="font-serif font-semibold text-[#10254A] mb-2 text-lg">Consent-Based Processing</h3>
                  <p className="text-xs text-[#10254A]/80 leading-relaxed">
                    Receiving optional news, marketing updates, or promotional materials requires your explicit, affirmative, unticked-by-default consent, which can be withdrawn at any time.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 7 */}
            <article className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#10254A] border-b border-[#10254A]/10 pb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#10254A] text-[#D4AF37] text-xs font-bold flex items-center justify-center font-sans">6</span>
                Data Retention
              </h2>
              <p>
                Personal data is retained only for as long as necessary to satisfy the purpose for which it was collected, or as required by applicable tax, statutory accounting, and legal records retention regulations.
              </p>
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 font-medium">
                LEGAL REVIEW REQUIRED: Automated retention purging workflows are currently managed manually pending legal counsel confirmation of exact statutory retention schedules under Indian law.
              </div>
            </article>

            {/* Section 8 & 9 */}
            <article className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#10254A] border-b border-[#10254A]/10 pb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#10254A] text-[#D4AF37] text-xs font-bold flex items-center justify-center font-sans">7</span>
                Data Sharing & Third-Party Service Providers
              </h2>
              <p>We do not sell, rent, or trade your personal data. Data is shared strictly with trusted Data Processors operating under contract to maintain our service infrastructure:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-[#10254A]/85">
                <li><strong>Resend Technologies:</strong> Email delivery infrastructure provider for transaction and contact notifications.</li>
                <li><strong>MongoDB Atlas / Cloud Infrastructure:</strong> Database hosting and server infrastructure (Render, Cloudflare) with TLS encryption.</li>
              </ul>
            </article>

            {/* Section 10 */}
            <article className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#10254A] border-b border-[#10254A]/10 pb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#10254A] text-[#D4AF37] text-xs font-bold flex items-center justify-center font-sans">8</span>
                Security Measures
              </h2>
              <p>
                We maintain appropriate technical and organizational measures including HTTPS transport layer security (TLS 1.2+), hashed authentication credentials (bcryptjs), rate-limiting middleware against brute-force attacks, and restricted administrative authorization access.
              </p>
            </article>

            {/* Section 11 - 15 */}
            <article className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#10254A] border-b border-[#10254A]/10 pb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#10254A] text-[#D4AF37] text-xs font-bold flex items-center justify-center font-sans">9</span>
                Data Principal Rights & How to Exercise Them
              </h2>
              <p>Under the DPDP Act and privacy regulations, you (as Data Principal) hold the following statutory rights:</p>
              
              <div className="grid sm:grid-cols-2 gap-4 text-xs font-sans">
                <div className="p-4 bg-white rounded-lg border border-[#10254A]/10">
                  <strong className="text-[#10254A] block mb-1">Right to Access:</strong>
                  Summary of personal data being processed and identities of processing entities.
                </div>
                <div className="p-4 bg-white rounded-lg border border-[#10254A]/10">
                  <strong className="text-[#10254A] block mb-1">Right to Correction & Erasure:</strong>
                  Request correction of inaccurate data or erasure of data no longer necessary.
                </div>
                <div className="p-4 bg-white rounded-lg border border-[#10254A]/10">
                  <strong className="text-[#10254A] block mb-1">Right to Withdraw Consent:</strong>
                  Withdraw consent at any time with ease equal to how consent was provided.
                </div>
                <div className="p-4 bg-white rounded-lg border border-[#10254A]/10">
                  <strong className="text-[#10254A] block mb-1">Right to Grievance Redressal:</strong>
                  Seek resolution of privacy grievances from our Grievance Officer.
                </div>
              </div>

              <p className="pt-2">
                To submit a request regarding access, correction, erasure, or consent withdrawal, please use our online portal:
              </p>
              <div>
                <Link
                  to="/data-rights"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#10254A] text-white font-semibold text-sm hover:bg-[#163663] transition-colors shadow-md"
                >
                  <UserCheck className="w-4 h-4 text-[#D4AF37]" />
                  Submit Data Rights Request
                </Link>
              </div>
            </article>

            {/* Section 16 & 17 */}
            <article className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#10254A] border-b border-[#10254A]/10 pb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#10254A] text-[#D4AF37] text-xs font-bold flex items-center justify-center font-sans">10</span>
                Grievance Redressal & Contact Information
              </h2>
              <p>
                If you have questions, concerns, or grievances regarding personal data processing, you may reach out directly to our designated Privacy / Grievance Officer:
              </p>
              
              <div className="bg-[#10254A]/5 border border-[#10254A]/15 rounded-2xl p-6 space-y-2 text-sm">
                <div className="font-bold text-[#10254A] text-base">{GRIEVANCE_CONTACT.name}</div>
                <div className="text-[#10254A]/80">Entity: {GRIEVANCE_CONTACT.entity}</div>
                <div className="text-[#10254A]/80 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  Email: <a href={GRIEVANCE_CONTACT.mailto} className="text-[#10254A] font-semibold underline">{GRIEVANCE_CONTACT.email}</a>
                </div>
              </div>
            </article>

            {/* Section 18 */}
            <article className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#10254A] border-b border-[#10254A]/10 pb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#10254A] text-[#D4AF37] text-xs font-bold flex items-center justify-center font-sans">11</span>
                Changes to This Privacy Notice
              </h2>
              <p>
                We may update this Privacy Notice periodically to reflect operational changes or statutory updates under the DPDP Act. Any modifications will be published here with an updated Policy Version number.
              </p>
            </article>

          </div>

        </div>
      </section>
    </div>
  );
};

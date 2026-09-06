import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { ShieldCheck, FileText, AlertTriangle, Scale, Lock, UserCheck, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRIVACY_POLICY_VERSION, GRIEVANCE_CONTACT } from '../constants/privacy';

export const Terms = () => {
  return (
    <div className="flex flex-col bg-[#F8F5EE] text-[#10254A] min-h-screen">
      <SEO
        title="Terms of Service"
        description="Terms of Service governing the use of ArthaNova Accounts website, consulting services, and data protection practices."
        canonical="/terms"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Terms of Service", url: "/terms" }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-[#F8F5EE] pt-40 pb-16 md:pt-48 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-semibold mb-6 shadow-sm"
          >
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>LEGAL REVIEW REQUIRED — Privacy & Data Protection Clause Updated</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#10254A] mb-6 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-[#10254A]/80 font-light max-w-3xl mx-auto leading-relaxed">
            Please read these Terms of Service carefully before using the website or engaging ArthaNova Accounts for accounting and corporate compliance services.
          </p>

          <div className="mt-6 text-xs text-[#10254A]/60 font-mono">
            Effective Date: September 1, 2026
          </div>
        </div>
      </section>

      {/* Terms Content Body */}
      <section className="pb-24 bg-[#F8F5EE]">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          
          <div className="space-y-12 text-[#10254A]/90 leading-relaxed font-sans text-base">

            {/* Section 1 */}
            <article className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#10254A] border-b border-[#10254A]/10 pb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#10254A] text-[#D4AF37] text-xs font-bold flex items-center justify-center font-sans">1</span>
                Acceptance of Terms
              </h2>
              <p>
                By accessing or using the website of ArthaNova Accounts ("us", "we", or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you should not access or use our website or services.
              </p>
            </article>

            {/* Section 2 */}
            <article className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#10254A] border-b border-[#10254A]/10 pb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#10254A] text-[#D4AF37] text-xs font-bold flex items-center justify-center font-sans">2</span>
                Professional Accounting Services
              </h2>
              <p>
                Information on this website is for general informational purposes only and does not constitute formal legal, accounting, audit, or tax advice. A client-professional relationship is established only upon execution of a formal engagement agreement between ArthaNova Accounts and the client.
              </p>
            </article>

            {/* Section 3: Data Protection & Privacy Clause (DPDP Compliant) */}
            <article className="space-y-4 bg-white/80 p-8 rounded-2xl border border-[#D4AF37]/40 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#D4AF37] text-[#10254A] font-bold text-[11px] uppercase tracking-wider rounded-bl-xl">
                LEGAL REVIEW REQUIRED
              </div>

              <h2 className="text-2xl font-serif font-bold text-[#10254A] border-b border-[#10254A]/10 pb-3 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
                3. Personal Data Protection & Privacy (DPDP Act Compliance)
              </h2>

              <p className="text-sm leading-relaxed">
                <strong>3.1 Personal Data Handling:</strong> ArthaNova Accounts collects and processes personal data strictly in accordance with the Digital Personal Data Protection (DPDP) Act, 2023 and our <Link to="/privacy" className="text-[#D4AF37] font-semibold underline">Privacy Notice</Link>. We act as a Data Fiduciary for personal data submitted through our consultation forms and communication channels.
              </p>

              <p className="text-sm leading-relaxed">
                <strong>3.2 Privacy Notice Incorporation:</strong> By agreeing to these Terms, you acknowledge that you have reviewed our <Link to="/privacy" className="text-[#D4AF37] font-semibold underline">Privacy Notice</Link>, which details data collection points, processing purposes, retention criteria, and third-party service providers (such as email delivery via Resend and encrypted cloud database hosting).
              </p>

              <p className="text-sm leading-relaxed">
                <strong>3.3 User Responsibilities:</strong> Users agree to provide accurate, truthful information when submitting inquiries or exercising data rights. You agree not to submit sensitive credentials (such as passwords, payment credentials, or authentication PINs) via public contact forms.
              </p>

              <p className="text-sm leading-relaxed">
                <strong>3.4 Data Principal Rights Mechanism:</strong> Users retain statutory rights under the DPDP Act including the right to request access, correction, erasure of personal data, or withdrawal of consent. All such requests must be submitted through our formal <Link to="/data-rights" className="text-[#D4AF37] font-semibold underline">Data Rights Request Portal</Link> or directed to our Grievance Officer.
              </p>

              <p className="text-sm leading-relaxed">
                <strong>3.5 Security Standards:</strong> We maintain technical and organizational safeguards (HTTPS encryption, role-based access controls, bcrypt hashing) to protect personal data against unauthorized disclosure or loss.
              </p>
            </article>

            {/* Section 4 */}
            <article className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#10254A] border-b border-[#10254A]/10 pb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#10254A] text-[#D4AF37] text-xs font-bold flex items-center justify-center font-sans">4</span>
                Intellectual Property
              </h2>
              <p>
                All content on this website—including text, graphics, branding, design system tokens, logos, and UI layouts—is the property of ArthaNova Accounts and protected by copyright and intellectual property laws.
              </p>
            </article>

            {/* Section 5 */}
            <article className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#10254A] border-b border-[#10254A]/10 pb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#10254A] text-[#D4AF37] text-xs font-bold flex items-center justify-center font-sans">5</span>
                Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, ArthaNova Accounts shall not be liable for indirect, incidental, special, or consequential damages resulting from the use or inability to use this website or information published herein.
              </p>
            </article>

            {/* Section 6 */}
            <article className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-[#10254A] border-b border-[#10254A]/10 pb-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#10254A] text-[#D4AF37] text-xs font-bold flex items-center justify-center font-sans">6</span>
                Governing Law & Grievances
              </h2>
              <p>
                These Terms shall be governed by the laws of India. Any grievances regarding privacy or data handling should be directed to our designated Privacy Grievance Contact:
              </p>
              <div className="bg-[#10254A]/5 p-4 rounded-xl text-xs space-y-1 font-mono">
                <div>Grievance Contact: {GRIEVANCE_CONTACT.name}</div>
                <div>Email: <a href={GRIEVANCE_CONTACT.mailto} className="text-[#10254A] font-bold underline">{GRIEVANCE_CONTACT.email}</a></div>
              </div>
            </article>

          </div>

        </div>
      </section>
    </div>
  );
};

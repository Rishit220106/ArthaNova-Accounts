import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { ShieldCheck, UserCheck, AlertTriangle, CheckCircle2, AlertCircle, ArrowRight, Lock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dataRightsService, DataRightsPayload } from '../services/dataRightsService';
import { PRIVACY_POLICY_VERSION, GRIEVANCE_CONTACT } from '../constants/privacy';

export const DataRights = () => {
  const [formState, setFormState] = useState<{
    name: string;
    email: string;
    requestType: DataRightsPayload['requestType'];
    details: string;
    referenceId: string;
    consentGiven: boolean;
  }>({
    name: '',
    email: '',
    requestType: 'Access',
    details: '',
    referenceId: '',
    consentGiven: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormState((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }));
    }
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formState.name.trim() || !formState.email.trim() || !formState.details.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!formState.consentGiven) {
      setErrorMessage('You must confirm authorization and consent to process this request.');
      return;
    }

    setIsSubmitting(true);

    try {
      await dataRightsService.submitRequest({
        name: formState.name.trim(),
        email: formState.email.trim(),
        requestType: formState.requestType,
        details: formState.details.trim(),
        referenceId: formState.referenceId.trim(),
        consentGiven: formState.consentGiven,
        policyVersion: PRIVACY_POLICY_VERSION
      });
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        requestType: 'Access',
        details: '',
        referenceId: '',
        consentGiven: false
      });
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to submit data rights request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col bg-[#F8F5EE] text-[#10254A] min-h-screen">
      <SEO
        title="Data Principal Rights Portal"
        description="Exercise your statutory data privacy rights under the India DPDP Act, including Access, Correction, Erasure, Withdrawal of Consent, and Grievance submission."
        canonical="/data-rights"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Data Rights", url: "/data-rights" }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-[#F8F5EE] pt-40 pb-16 md:pt-48 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,37,74,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,37,74,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10254A]/10 text-[#10254A] text-xs font-semibold mb-6 border border-[#10254A]/15 shadow-sm"
          >
            <UserCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Digital Personal Data Protection (DPDP) Portal</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#10254A] mb-6 tracking-tight">
            Data Principal Rights Portal
          </h1>
          <p className="text-lg md:text-xl text-[#10254A]/80 font-light max-w-3xl mx-auto leading-relaxed">
            Submit formal requests regarding your personal data processed by ArthaNova Accounts. You can request access, correction, erasure, consent withdrawal, or submit a privacy grievance.
          </p>
        </div>
      </section>

      {/* Main Content Form */}
      <section className="pb-24 bg-[#F8F5EE]">
        <div className="max-w-[850px] mx-auto px-6 lg:px-12">

          {/* Mandatory Security Warning Banner */}
          <div className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-medium flex items-start gap-3 shadow-sm">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>SECURITY NOTICE:</strong> Do not submit passwords, payment details, bank credentials, authentication PINs, or other sensitive credentials through this form.
            </div>
          </div>

          <div className="bg-[#102547] rounded-[2rem] p-8 md:p-12 border border-[#07162D]/5 shadow-[0_20px_60px_-15px_rgba(7,22,45,0.15)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#D4AF37]" />

            <h2 className="text-2xl font-serif text-white mb-2">Submit Data Rights Request</h2>
            <p className="text-xs text-white/70 font-light mb-8">
              All requests are reviewed by our Privacy Officer. Identity verification may be required prior to completing requests. Learn more in our <Link to="/privacy" className="text-[#D4AF37] underline hover:text-[#E5C35A]">Privacy Notice</Link>.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#0B1D38] border border-green-500/20 rounded-2xl p-8 flex flex-col items-center text-center py-16 shadow-inner"
              >
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">Request Received</h3>
                <p className="text-white/80 max-w-md font-sans text-sm leading-relaxed mb-6">
                  Your data rights request has been submitted to ArthaNova Accounts for review. Our Grievance Officer will review your request and contact you at the provided email address.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-[#D4AF37] text-[#07162D] text-xs font-bold rounded-full hover:bg-[#E5C35A] transition-colors"
                >
                  Submit Another Request
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
                    <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name <span className="text-[#D4AF37]">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full h-14 px-4 rounded-xl border border-white/10 bg-[#07162D]/50 text-white focus:bg-[#07162D] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all text-sm"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white/80">Email Address <span className="text-[#D4AF37]">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full h-14 px-4 rounded-xl border border-white/10 bg-[#07162D]/50 text-white focus:bg-[#07162D] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all text-sm"
                      placeholder="jane.doe@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="requestType" className="text-sm font-medium text-white/80">Request Type <span className="text-[#D4AF37]">*</span></label>
                    <select
                      id="requestType"
                      name="requestType"
                      required
                      value={formState.requestType}
                      onChange={handleChange}
                      className="w-full h-14 px-4 rounded-xl border border-white/10 bg-[#07162D]/50 text-white focus:bg-[#07162D] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all text-sm appearance-none cursor-pointer"
                    >
                      <option value="Access" className="bg-[#07162D]">Access Personal Data</option>
                      <option value="Correction" className="bg-[#07162D]">Correction of Inaccurate Data</option>
                      <option value="Erasure" className="bg-[#07162D]">Erasure / Deletion of Personal Data</option>
                      <option value="Withdrawal of Consent" className="bg-[#07162D]">Withdrawal of Consent</option>
                      <option value="Grievance" className="bg-[#07162D]">Privacy Grievance Redressal</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="referenceId" className="text-sm font-medium text-white/80">Reference Identifier (Optional)</label>
                    <input
                      type="text"
                      id="referenceId"
                      name="referenceId"
                      value={formState.referenceId}
                      onChange={handleChange}
                      className="w-full h-14 px-4 rounded-xl border border-white/10 bg-[#07162D]/50 text-white focus:bg-[#07162D] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all text-sm"
                      placeholder="Contact Submission Email or ID"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="details" className="text-sm font-medium text-white/80">Request Details <span className="text-[#D4AF37]">*</span></label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    required
                    value={formState.details}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl border border-white/15 bg-[#07162D]/60 text-white focus:bg-[#07162D] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all resize-none text-sm font-sans"
                    placeholder="Provide specific details regarding your request so we can locate your record..."
                  />
                </div>

                {/* Consent Checkbox (Unticked by default!) */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 text-xs text-white/80 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consentGiven"
                      checked={formState.consentGiven}
                      onChange={handleChange}
                      required
                      className="mt-0.5 w-4 h-4 rounded border-white/20 bg-[#07162D]/50 text-[#D4AF37] focus:ring-[#D4AF37] cursor-pointer"
                    />
                    <span>
                      I confirm the information provided is accurate and authorize ArthaNova Accounts to process this request in accordance with the <Link to="/privacy" className="text-[#D4AF37] underline hover:text-[#E5C35A]" target="_blank">Privacy Notice</Link>. <span className="text-[#D4AF37]">*</span>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto h-14 px-8 rounded-full bg-[#D4AF37] text-[#10254A] font-bold text-base hover:bg-[#E5C35A] hover:shadow-[0_8px_25px_rgba(212,175,55,0.35)] transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-[#10254A]/30 border-t-[#10254A] rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <ArrowRight className="w-5 h-5 text-[#10254A]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Grievance Contact Card */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-[#10254A]/10 text-xs space-y-2 text-[#10254A]/80 shadow-sm">
            <div className="font-bold text-[#10254A] text-sm">Direct Grievance Contact</div>
            <div>If you encounter any difficulty with the online portal, you may contact our Grievance Officer directly:</div>
            <div className="font-mono text-[#10254A]">Email: <a href={GRIEVANCE_CONTACT.mailto} className="font-bold underline">{GRIEVANCE_CONTACT.email}</a></div>
          </div>

        </div>
      </section>
    </div>
  );
};

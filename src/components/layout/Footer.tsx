import React from 'react';
import { Logo } from '../ui/Logo';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react';
import { BUSINESS_CONTACT } from '../../constants/contact';

export const Footer = () => {
  return (
    <footer className="bg-[#F8F5EE] text-[#10254A] pt-20 pb-10 border-t border-[rgba(16,37,74,0.08)] relative overflow-hidden">
      {/* Subtle Gold Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#D4AF37]/[0.03] filter blur-[120px] rounded-full pointer-events-none" />

      {/* Abstract Dotted Contour Pattern along bottom edge (3-5% opacity) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-[0.04] pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,transparent,black)]" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Link to="/" className="inline-block mb-6 hover:opacity-90 transition-opacity">
              <Logo variant="dark" className="scale-90 origin-center sm:origin-left" />
            </Link>
            <p className="text-[#10254A]/70 text-sm leading-relaxed mb-6 font-light max-w-sm">
              Premium accounting solutions for ambitious businesses operating across international jurisdictions.
            </p>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/acca-ami-sampat-7735b5264/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="group inline-flex items-center gap-3.5 p-2.5 pr-5 rounded-full border border-[#D4AF37]/40 bg-white/70 backdrop-blur-sm hover:bg-white hover:border-[#D4AF37] hover:shadow-[0_8px_25px_rgba(212,175,55,0.22)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-[#10254A] transition-all duration-300 shadow-sm">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-[#10254A] group-hover:text-[#D4AF37] transition-colors leading-tight">
                  Connect on LinkedIn
                </div>
                <div className="text-[11px] text-[#10254A]/60 font-light leading-tight">
                  Follow our professional updates
                </div>
              </div>
            </a>
          </div>

          {/* Quick Links Column */}
          <div className="text-left">
            <h4 className="text-[#10254A] font-serif text-lg font-semibold mb-2">Navigation</h4>
            <div className="w-8 h-[2px] bg-[#D4AF37] mb-6" />
            <ul className="space-y-3.5 text-sm text-[#10254A]/80 font-medium">
              <li>
                <Link to="/services" className="hover:text-[#D4AF37] transition-colors duration-250 flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-250" />
                  <span className="-ml-5 group-hover:ml-0 transition-all duration-250">Services</span>
                </Link>
              </li>
              <li>
                <Link to="/jurisdictions" className="hover:text-[#D4AF37] transition-colors duration-250 flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-250" />
                  <span className="-ml-5 group-hover:ml-0 transition-all duration-250">Jurisdictions</span>
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#D4AF37] transition-colors duration-250 flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-250" />
                  <span className="-ml-5 group-hover:ml-0 transition-all duration-250">Team</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4AF37] transition-colors duration-250 flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-250" />
                  <span className="-ml-5 group-hover:ml-0 transition-all duration-250">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Expertise Column (Dynamic Services Deep Links) */}
          <div className="text-left">
            <h4 className="text-[#10254A] font-serif text-lg font-semibold mb-2">Expertise</h4>
            <div className="w-8 h-[2px] bg-[#D4AF37] mb-6" />
            <ul className="space-y-3.5 text-sm text-[#10254A]/80 font-medium">
              <li>
                <Link to="/services#bookkeeping" className="hover:text-[#D4AF37] transition-colors duration-250 flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-250" />
                  <span className="-ml-5 group-hover:ml-0 transition-all duration-250">Bookkeeping</span>
                </Link>
              </li>
              <li>
                <Link to="/services#payroll" className="hover:text-[#D4AF37] transition-colors duration-250 flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-250" />
                  <span className="-ml-5 group-hover:ml-0 transition-all duration-250">Payroll Management</span>
                </Link>
              </li>
              <li>
                <Link to="/services#management-accounts" className="hover:text-[#D4AF37] transition-colors duration-250 flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-250" />
                  <span className="-ml-5 group-hover:ml-0 transition-all duration-250">Financial Reporting</span>
                </Link>
              </li>
              <li>
                <Link to="/services#vat" className="hover:text-[#D4AF37] transition-colors duration-250 flex items-center gap-2 group">
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-250" />
                  <span className="-ml-5 group-hover:ml-0 transition-all duration-250">Tax Compliance</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div className="text-left">
            <h4 className="text-[#10254A] font-serif text-lg font-semibold mb-2">Get In Touch</h4>
            <div className="w-8 h-[2px] bg-[#D4AF37] mb-6" />
            <ul className="space-y-4 text-sm text-[#10254A]/80 font-medium">
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors duration-250">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href={BUSINESS_CONTACT.mailto} className="hover:text-[#D4AF37] transition-colors duration-250">
                  {BUSINESS_CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors duration-250">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="leading-relaxed">
                  <span className="text-[#10254A] font-semibold block mb-0.5">International Coverage</span>
                  <span className="text-xs text-[#10254A]/70 font-normal">UK • US • Australia</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar Divider */}
        <div className="pt-8 border-t border-[rgba(16,37,74,0.08)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#10254A]/70">
          <p>© 2026 ArthaNova Accounts. All rights reserved. | <a href="https://arthanovaaccounts.com" className="hover:text-[#D4AF37] transition-colors duration-250">arthanovaaccounts.com</a></p>
          <div className="flex items-center gap-2">
            <Link to="/contact" className="hover:text-[#D4AF37] transition-colors duration-250">Privacy Policy</Link>
            <span className="w-px h-3 bg-[#D4AF37]/60 inline-block align-middle mx-3" />
            <Link to="/contact" className="hover:text-[#D4AF37] transition-colors duration-250">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

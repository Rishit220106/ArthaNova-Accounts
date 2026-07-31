import React from 'react';
import { Logo } from '../ui/Logo';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { BUSINESS_CONTACT } from '../../constants/contact';

export const Footer = () => {
  return (
    <footer className="bg-primary text-text-primary pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 filter blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/stardust.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <Logo variant="light" className="scale-90 origin-left" />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Premium accounting solutions for ambitious businesses operating across international jurisdictions.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/arthanovaaccounts" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 hover:-translate-y-1.5 hover:shadow-[0_4px_20px_rgba(200,165,82,0.15)] transition-all duration-200">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/arthanovaccounts" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 hover:-translate-y-1.5 hover:shadow-[0_4px_20px_rgba(200,165,82,0.15)] transition-all duration-200">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><Link to="/services" className="hover:text-accent transition-colors flex items-center group"><span className="w-0 h-px bg-accent mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-200"></span>Services</Link></li>
              <li><Link to="/jurisdictions" className="hover:text-accent transition-colors flex items-center group"><span className="w-0 h-px bg-accent mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-200"></span>Jurisdictions</Link></li>
              <li><Link to="/team" className="hover:text-accent transition-colors flex items-center group"><span className="w-0 h-px bg-accent mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-200"></span>Team</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors flex items-center group"><span className="w-0 h-px bg-accent mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-200"></span>Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Expertise</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li className="hover:text-white transition-colors cursor-default">Bookkeeping</li>
              <li className="hover:text-white transition-colors cursor-default">Payroll Management</li>
              <li className="hover:text-white transition-colors cursor-default">Financial Reporting</li>
              <li className="hover:text-white transition-colors cursor-default">Tax Compliance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li className="flex items-start gap-3 group">
                <Mail className="w-4 h-4 mt-0.5 text-accent/70 group-hover:text-accent transition-colors" />
                <a href={BUSINESS_CONTACT.mailto} className="hover:text-white transition-colors">
                  {BUSINESS_CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 mt-0.5 text-accent/70 group-hover:text-accent transition-colors shrink-0" />
                <span className="leading-relaxed">
                  International coverage<br/>
                  UK • US • Australia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
          <p>© 2026 ArthaNovaccounts. All rights reserved. | <a href="https://arthanovaaccounts.com" className="hover:text-white transition-colors">arthanovaaccounts.com</a></p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

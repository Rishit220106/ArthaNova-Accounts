import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Download, Check, Sparkles, X } from 'lucide-react';
import { BreadcrumbNavigation } from '../../components/admin/BreadcrumbNavigation';
import { ContactTable } from '../../components/admin/ContactTable';
import { useContacts } from '../../hooks/useContacts';

export const AdminContacts: React.FC = () => {
  const { contacts, addContact, refreshContacts } = useContacts();
  const [showAddModal, setShowAddModal] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  // New Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    service: 'Corporate Tax Advisory',
    message: '',
    status: 'New' as const
  });

  const handleCreateContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;

    addContact({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      country: formData.country || 'International',
      service: formData.service,
      message: formData.message || 'Direct mock inquiry created via admin portal.',
      status: formData.status
    });

    setShowAddModal(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      country: '',
      service: 'Corporate Tax Advisory',
      message: '',
      status: 'New'
    });
  };

  const handleExportCSV = () => {
    setIsExporting(true);
    const headers = ['ID', 'Name', 'Email', 'Company', 'Country', 'Status', 'Created Date'];
    const rows = contacts.map((c) => [
      c.id,
      `"${c.name}"`,
      `"${c.email}"`,
      `"${c.company}"`,
      `"${c.country}"`,
      c.status,
      c.createdDate
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `arthanov_contacts_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setIsExporting(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Breadcrumb */}
      <BreadcrumbNavigation />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <span>Client Contact Management</span>
            <Sparkles className="w-5 h-5 text-blue-400" />
          </h1>
          <p className="text-xs text-slate-300">
            View, search, filter, update status, and manage corporate client inquiries.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.05] border border-white/10 hover:bg-white/10 text-white rounded-2xl text-xs font-bold shadow-sm transition-all cursor-pointer backdrop-blur-md"
          >
            {isExporting ? <Check className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4 text-blue-400" />}
            <span>{isExporting ? 'Exported!' : 'Export CSV'}</span>
          </button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 text-white rounded-2xl text-xs font-extrabold shadow-lg shadow-blue-500/25 border border-white/20 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Mock Contact</span>
          </motion.button>
        </div>
      </div>

      {/* Full Contact Table Component */}
      <ContactTable
        limit={8}
        showFilters={true}
        showPagination={true}
        title="All Contact Submissions"
        subtitle="Interactive data table with real-time status filtering and search"
      />

      {/* Add Contact Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-lg bg-[#0E2447]/95 backdrop-blur-2xl rounded-[30px] shadow-[0_30px_70px_rgba(0,0,0,0.6)] border border-white/15 overflow-hidden text-white"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/[0.02]">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Add New Mock Contact</span>
                  <Sparkles className="w-4 h-4 text-blue-400" />
                </h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-2 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateContact} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jonathan Sterling"
                      className="w-full p-3 text-xs bg-white/[0.05] border border-white/12 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/[0.08] backdrop-blur-md transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="j.sterling@firm.com"
                      className="w-full p-3 text-xs bg-white/[0.05] border border-white/12 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/[0.08] backdrop-blur-md transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Sterling Financial Ltd"
                      className="w-full p-3 text-xs bg-white/[0.05] border border-white/12 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/[0.08] backdrop-blur-md transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Country
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="United Kingdom"
                      className="w-full p-3 text-xs bg-white/[0.05] border border-white/12 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/[0.08] backdrop-blur-md transition-all font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Inquiry Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Details of tax advisory service requested..."
                    className="w-full p-3 text-xs bg-white/[0.05] border border-white/12 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/[0.08] backdrop-blur-md transition-all resize-none font-medium"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-5 py-2.5 text-xs font-bold text-slate-300 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 rounded-2xl shadow-lg shadow-blue-500/25 border border-white/20 transition-all cursor-pointer"
                  >
                    Create Record
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

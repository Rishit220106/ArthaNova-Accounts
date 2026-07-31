import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, RefreshCw, Filter, FileText, Check, Sparkles } from 'lucide-react';
import { useContacts } from '../../hooks/useContacts';

export const QuickActions: React.FC = () => {
  const navigate = useNavigate();
  const { contacts, setStatusFilter, refreshContacts } = useContacts();
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleExportCSV = () => {
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
    link.setAttribute('download', `arthanov_contacts_export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    refreshContacts();
    setTimeout(() => setIsRefreshing(false), 600);
  };

  const handleFilterNew = () => {
    setStatusFilter('New');
    navigate('/admin/contacts');
  };

  return (
    <div className="bg-[#0D2142]/65 backdrop-blur-xl rounded-[28px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <h3 className="text-sm font-bold text-white tracking-wide flex items-center gap-2">
          <span>Quick Actions</span>
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
        </h3>
        <span className="text-[10px] text-slate-400 font-mono">Tools & Data</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Export CSV */}
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleExportCSV}
          className="flex items-center gap-3 p-3.5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-pink-600/20 hover:border-blue-500/30 text-white text-xs font-semibold transition-all cursor-pointer text-left backdrop-blur-md shadow-sm"
        >
          <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30 shrink-0">
            {downloadSuccess ? <Check className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4" />}
          </div>
          <div>
            <div className="font-bold text-white">{downloadSuccess ? 'Exported!' : 'Export CSV'}</div>
            <div className="text-[10px] text-slate-400 font-normal">Download report</div>
          </div>
        </motion.button>

        {/* Filter New Contacts */}
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleFilterNew}
          className="flex items-center gap-3 p-3.5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-gradient-to-r hover:from-amber-600/20 hover:to-pink-600/20 hover:border-amber-500/30 text-white text-xs font-semibold transition-all cursor-pointer text-left backdrop-blur-md shadow-sm"
        >
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
            <Filter className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-white">Review New</div>
            <div className="text-[10px] text-slate-400 font-normal">Pending submissions</div>
          </div>
        </motion.button>

        {/* Refresh Data */}
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleRefresh}
          className="flex items-center gap-3 p-3.5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-gradient-to-r hover:from-pink-600/20 hover:to-blue-600/20 hover:border-pink-500/30 text-white text-xs font-semibold transition-all cursor-pointer text-left backdrop-blur-md shadow-sm"
        >
          <div className="p-2.5 rounded-xl bg-pink-500/20 text-pink-300 border border-pink-500/30 shrink-0">
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-pink-400' : ''}`} />
          </div>
          <div>
            <div className="font-bold text-white">Sync API</div>
            <div className="text-[10px] text-slate-400 font-normal">Reload database</div>
          </div>
        </motion.button>

        {/* System Settings */}
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/admin/settings')}
          className="flex items-center gap-3 p-3.5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] hover:border-white/20 text-white text-xs font-semibold transition-all cursor-pointer text-left backdrop-blur-md shadow-sm"
        >
          <div className="p-2.5 rounded-xl bg-white/10 text-slate-200 border border-white/15 shrink-0">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-white">Settings</div>
            <div className="text-[10px] text-slate-400 font-normal">Credentials & profile</div>
          </div>
        </motion.button>
      </div>
    </div>
  );
};

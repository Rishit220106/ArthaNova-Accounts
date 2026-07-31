import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Sparkles } from 'lucide-react';
import { Contact } from '../../services/mockData';

interface UpdateStatusModalProps {
  isOpen: boolean;
  contact: Contact | null;
  onClose: () => void;
  onConfirm: (newStatus: Contact['status'], note?: string) => void;
}

const STATUSES: Contact['status'][] = ['New', 'Contacted', 'In Progress', 'Closed'];

export const UpdateStatusModal: React.FC<UpdateStatusModalProps> = ({
  isOpen,
  contact,
  onClose,
  onConfirm
}) => {
  const [selectedStatus, setSelectedStatus] = useState<Contact['status']>('New');
  const [note, setNote] = useState('');

  useEffect(() => {
    if (contact) {
      setSelectedStatus(contact.status);
      setNote('');
    }
  }, [contact]);

  if (!isOpen || !contact) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(selectedStatus, note);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="w-full max-w-md bg-[#0E2447]/95 backdrop-blur-2xl rounded-[30px] shadow-[0_30px_70px_rgba(0,0,0,0.6)] border border-white/15 overflow-hidden text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/[0.02]">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Update Contact Status</span>
                <Sparkles className="w-4 h-4 text-blue-400" />
              </h3>
              <p className="text-xs text-blue-300/80 font-mono mt-0.5">{contact.name} • {contact.company}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-widest mb-3">
                Select New Status
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {STATUSES.map((status) => {
                  const isSelected = selectedStatus === status;
                  return (
                    <button
                      key={status}
                      type="button"
                      onClick={() => setSelectedStatus(status)}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-blue-400 bg-gradient-to-r from-blue-600/40 to-pink-600/40 text-white shadow-lg shadow-blue-500/25 ring-2 ring-blue-400/30'
                          : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20 hover:bg-white/[0.08]'
                      }`}
                    >
                      <span>{status}</span>
                      {isSelected && <Check className="w-4 h-4 text-blue-400" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-widest mb-2">
                Internal Audit Note (Optional)
              </label>
              <textarea
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add reason for status change or next steps..."
                className="w-full p-3.5 text-xs bg-white/[0.05] border border-white/12 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/[0.08] backdrop-blur-md transition-all resize-none font-medium"
              />
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-bold text-slate-300 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 rounded-2xl shadow-lg shadow-blue-500/30 border border-white/20 transition-all cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

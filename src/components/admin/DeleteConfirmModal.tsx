import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';
import { Contact } from '../../services/mockData';

interface DeleteConfirmModalProps {
  isOpen: boolean;
  contact: Contact | null;
  onClose: () => void;
  onConfirm: (id: string) => void;
}

export const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  isOpen,
  contact,
  onClose,
  onConfirm
}) => {
  if (!isOpen || !contact) return null;

  const handleDelete = () => {
    onConfirm(contact.id);
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
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-2xl shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="text-base font-bold text-white">Delete Contact Inquiry</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Are you sure you want to permanently delete the contact record for{' '}
                  <strong className="text-white font-bold">{contact.name}</strong> ({contact.company})?
                </p>
                <p className="text-[11px] text-rose-400 font-semibold pt-1">
                  This action cannot be undone and will be logged in the audit trail.
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-bold text-slate-300 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="px-5 py-2.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-2xl shadow-lg shadow-rose-600/30 border border-white/20 transition-all cursor-pointer"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

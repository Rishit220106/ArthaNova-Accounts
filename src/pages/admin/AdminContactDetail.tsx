import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Mail,
  Building2,
  Globe,
  Calendar,
  MessageSquare,
  Edit3,
  Trash2,
  Loader2,
  AlertCircle,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { BreadcrumbNavigation } from '../../components/admin/BreadcrumbNavigation';
import { StatusBadge } from '../../components/admin/StatusBadge';
import { UpdateStatusModal } from '../../components/admin/UpdateStatusModal';
import { DeleteConfirmModal } from '../../components/admin/DeleteConfirmModal';
import { useContacts } from '../../hooks/useContacts';
import { Contact } from '../../services/mockData';

export const AdminContactDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getContact, updateStatus, deleteContact } = useContacts();

  const [contact, setContact] = useState<Contact | undefined>(undefined);
  const [isLoadingDetail, setIsLoadingDetail] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const loadDetail = async () => {
      if (!id) return;
      setIsLoadingDetail(true);
      setErrorMessage(null);
      try {
        const fetched = await getContact(id);
        if (isMounted) {
          setContact(fetched);
        }
      } catch (err: any) {
        if (isMounted) {
          setErrorMessage(err.message || 'Failed to load contact details from server.');
        }
      } finally {
        if (isMounted) {
          setIsLoadingDetail(false);
        }
      }
    };

    loadDetail();
    return () => {
      isMounted = false;
    };
  }, [id, getContact]);

  if (isLoadingDetail) {
    return (
      <div className="space-y-6">
        <BreadcrumbNavigation />
        <div className="bg-[#0D2142]/65 backdrop-blur-2xl rounded-[28px] p-16 border border-white/10 text-center flex flex-col items-center justify-center gap-4">
          <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
          <p className="text-xs font-bold text-slate-300">Loading Contact Details from API...</p>
        </div>
      </div>
    );
  }

  if (!contact || errorMessage) {
    return (
      <div className="space-y-6">
        <BreadcrumbNavigation />
        <div className="bg-[#0D2142]/65 backdrop-blur-2xl rounded-[28px] p-16 border border-white/10 text-center space-y-4 max-w-lg mx-auto">
          <AlertCircle className="w-12 h-12 text-rose-400 mx-auto" />
          <h2 className="text-xl font-bold text-white">Contact Record Not Found</h2>
          <p className="text-xs text-slate-300">
            {errorMessage || `The requested contact record does not exist or was deleted.`}
          </p>
          <button
            onClick={() => navigate('/admin/contacts')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-pink-600 text-white text-xs font-bold rounded-2xl shadow-lg shadow-blue-500/25 border border-white/20 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Contacts List</span>
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateStr;
    }
  };

  const handleUpdateStatus = async (newStatus: Contact['status']) => {
    try {
      await updateStatus(contact.id, newStatus);
      setContact({ ...contact, status: newStatus });
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to update status.');
    }
  };

  const handleDelete = async () => {
    try {
      await deleteContact(contact.id);
      navigate('/admin/contacts');
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to delete contact.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Breadcrumb Navigation */}
      <BreadcrumbNavigation />

      {/* Top Header Glass Card */}
      <div className="bg-[#0D2142]/65 backdrop-blur-2xl rounded-[28px] p-6 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            to="/admin/contacts"
            className="p-2.5 rounded-2xl border border-white/10 bg-white/[0.05] text-slate-300 hover:text-white hover:bg-white/10 transition-colors shadow-sm"
            title="Back to contacts"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {contact.name}
              </h1>
              <StatusBadge status={contact.status} />
            </div>
            <p className="text-xs text-slate-300 mt-1 font-mono">
              Contact ID: <strong className="text-blue-400">{contact.id}</strong> • Submitted {formatDate(contact.createdDate)}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsUpdateModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-amber-500/15 border border-amber-400/30 hover:bg-amber-500/25 text-amber-300 rounded-2xl text-xs font-bold shadow-sm transition-all cursor-pointer backdrop-blur-md"
          >
            <Edit3 className="w-4 h-4 text-amber-400" />
            <span>Update Status</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsDeleteModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-rose-500/15 border border-rose-500/30 hover:bg-rose-500/25 text-rose-300 rounded-2xl text-xs font-bold shadow-sm transition-all cursor-pointer backdrop-blur-md"
          >
            <Trash2 className="w-4 h-4 text-rose-400" />
            <span>Delete</span>
          </motion.button>
        </div>
      </div>

      {/* Details (Left 2/3) & Quick Status Controller (Right 1/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Details Card */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#0D2142]/65 backdrop-blur-2xl rounded-[28px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-8 space-y-6">
            <h2 className="text-xs font-bold text-slate-300 uppercase tracking-widest border-b border-white/10 pb-4 flex items-center gap-2">
              <span>Contact Information</span>
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Name</span>
                <p className="text-base font-extrabold text-white">{contact.name}</p>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</span>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm font-semibold text-blue-400 hover:text-pink-400 transition-colors font-mono"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Company */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Company Name</span>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-pink-400" />
                  <p className="text-sm font-bold text-white">{contact.company || 'N/A'}</p>
                </div>
              </div>

              {/* Country */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Country</span>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-amber-400" />
                  <p className="text-sm font-semibold text-slate-200">{contact.country || 'N/A'}</p>
                </div>
              </div>

              {/* Services Required */}
              <div className="space-y-1 sm:col-span-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Services Required</span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {contact.services && contact.services.length > 0 ? (
                    contact.services.map((srv, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-500/15 border border-blue-400/30 text-blue-300 rounded-full text-xs font-semibold"
                      >
                        {srv}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm font-semibold text-slate-200">{contact.service || 'N/A'}</span>
                  )}
                </div>
              </div>

              {/* Created Date */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Submission Date</span>
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <p className="text-xs font-mono">{formatDate(contact.createdDate)}</p>
                </div>
              </div>

              {/* Status */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Current Status</span>
                <div>
                  <StatusBadge status={contact.status} />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Inquiry Message</span>
              </div>
              <div className="p-5 bg-white/[0.03] border border-white/10 rounded-2xl text-xs text-slate-200 leading-relaxed font-sans whitespace-pre-wrap backdrop-blur-md">
                {contact.message}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Status Controller */}
        <div className="space-y-6">
          {/* Status Quick Change Card */}
          <div className="bg-[#0D2142]/65 backdrop-blur-2xl rounded-[28px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-6 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/10 pb-3 flex items-center justify-between">
              <span>Status Controller</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </h3>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Updates contact record status directly via backend Express API.
            </p>
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {(['New', 'Contacted', 'Closed'] as const).map((st) => {
                const isActive = contact.status === st;
                return (
                  <button
                    key={st}
                    onClick={() => handleUpdateStatus(st)}
                    className={`py-3 px-3 rounded-2xl text-xs font-bold border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-pink-600 text-white border-white/20 shadow-lg shadow-blue-500/25'
                        : 'bg-white/[0.04] text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {st}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <UpdateStatusModal
        isOpen={isUpdateModalOpen}
        contact={contact}
        onClose={() => setIsUpdateModalOpen(false)}
        onConfirm={(newStatus) => handleUpdateStatus(newStatus)}
      />

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        contact={contact}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => handleDelete()}
      />
    </motion.div>
  );
};

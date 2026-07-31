import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Eye,
  Edit3,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Globe,
  Mail,
  Building2,
  Calendar,
  Loader2,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { Contact } from '../../services/mockData';
import { StatusBadge } from './StatusBadge';
import { UpdateStatusModal } from './UpdateStatusModal';
import { DeleteConfirmModal } from './DeleteConfirmModal';
import { useContacts } from '../../hooks/useContacts';

interface ContactTableProps {
  limit?: number;
  showFilters?: boolean;
  showPagination?: boolean;
  title?: string;
  subtitle?: string;
}

export const ContactTable: React.FC<ContactTableProps> = ({
  limit,
  showFilters = true,
  showPagination = true,
  title = 'Contact Inquiries',
  subtitle = 'Manage and respond to corporate client inquiries'
}) => {
  const navigate = useNavigate();
  const {
    contacts,
    pagination,
    isLoading,
    error,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    updateStatus,
    deleteContact,
    fetchContacts
  } = useContacts();

  // Modal states
  const [statusModalContact, setStatusModalContact] = useState<Contact | null>(null);
  const [deleteModalContact, setDeleteModalContact] = useState<Contact | null>(null);

  const pageSize = limit || 10;

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  const handlePageChange = (newPage: number) => {
    fetchContacts({ page: newPage, limit: pageSize });
  };

  return (
    <div className="bg-[#0D2142]/65 backdrop-blur-2xl rounded-[28px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden">
      {/* Table Header Controls */}
      <div className="p-6 border-b border-white/10 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span>{title}</span>
              <Sparkles className="w-4 h-4 text-blue-400" />
            </h2>
            <p className="text-xs text-slate-300">{subtitle}</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-300 font-medium px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
              Showing <strong className="text-blue-400 font-bold">{contacts.length}</strong> of{' '}
              <strong className="text-white font-bold">{pagination.totalRecords || contacts.length}</strong> entries
            </span>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 font-semibold flex items-center gap-2.5 backdrop-blur-md">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Filter bar */}
        {showFilters && (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
            {/* Search Input */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  fetchContacts({ page: 1, limit: pageSize, search: e.target.value });
                }}
                placeholder="Filter by name, email, company..."
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-white/[0.05] border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/[0.08] backdrop-blur-md transition-all font-medium"
              />
            </div>

            {/* Status Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <span className="text-xs text-slate-400 flex items-center gap-1 mr-1.5 font-bold uppercase tracking-wider text-[10px]">
                <Filter className="w-3.5 h-3.5 text-blue-400" /> Filter:
              </span>
              {['All', 'New', 'Contacted', 'Closed'].map((st) => {
                const isActive = statusFilter === st;
                return (
                  <button
                    key={st}
                    onClick={() => {
                      setStatusFilter(st);
                      fetchContacts({ page: 1, limit: pageSize, status: st });
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-pink-600 text-white border-white/20 shadow-md shadow-blue-500/20'
                        : 'bg-white/[0.04] text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {st}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Main Data Table */}
      <div className="overflow-x-auto relative min-h-[220px]">
        {isLoading && (
          <div className="absolute inset-0 bg-[#0D2142]/80 backdrop-blur-md z-10 flex items-center justify-center">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold">
              <Loader2 className="w-5 h-5 animate-spin text-blue-400" />
              <span>Fetching Live API Data...</span>
            </div>
          </div>
        )}

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/[0.02] border-b border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest sticky top-0 backdrop-blur-md z-0">
              <th className="py-3.5 px-4 sm:px-6">Name</th>
              <th className="py-3.5 px-4">Email</th>
              <th className="py-3.5 px-4">Company</th>
              <th className="py-3.5 px-4">Country</th>
              <th className="py-3.5 px-4">Status</th>
              <th className="py-3.5 px-4">Created Date</th>
              <th className="py-3.5 px-4 sm:px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-xs text-slate-200">
            {contacts.length > 0 ? (
              contacts.slice(0, limit || contacts.length).map((contact) => (
                <tr
                  key={contact.id}
                  className="hover:bg-white/[0.05] transition-all group cursor-pointer"
                  onClick={() => navigate(`/admin/contact/${contact.id}`)}
                >
                  {/* Name */}
                  <td className="py-4 px-4 sm:px-6 font-semibold text-white whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-blue-600/30 to-pink-600/30 text-blue-300 font-bold flex items-center justify-center text-xs shrink-0 border border-white/10 shadow-sm">
                        {contact.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-white group-hover:text-blue-300 transition-colors">
                          {contact.name}
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">{contact.id.slice(-6)}</span>
                      </div>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="py-4 px-4 whitespace-nowrap text-slate-300">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-blue-400/70" />
                      <span className="font-mono text-xs text-slate-300">{contact.email}</span>
                    </div>
                  </td>

                  {/* Company */}
                  <td className="py-4 px-4 whitespace-nowrap font-medium text-white">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-pink-400/70" />
                      <span>{contact.company || 'N/A'}</span>
                    </div>
                  </td>

                  {/* Country */}
                  <td className="py-4 px-4 whitespace-nowrap text-slate-300">
                    <div className="flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-amber-400/70" />
                      <span>{contact.country || 'N/A'}</span>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-4 whitespace-nowrap">
                    <StatusBadge status={contact.status} />
                  </td>

                  {/* Created Date */}
                  <td className="py-4 px-4 whitespace-nowrap text-slate-400 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{formatDate(contact.createdDate)}</span>
                    </div>
                  </td>

                  {/* Action Buttons */}
                  <td
                    className="py-4 px-4 sm:px-6 text-right whitespace-nowrap"
                    onClick={(e) => e.stopPropagation()} // Prevent row click
                  >
                    <div className="flex items-center justify-end gap-2">
                      {/* View Button */}
                      <button
                        onClick={() => navigate(`/admin/contact/${contact.id}`)}
                        className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-blue-300 hover:bg-blue-500/20 hover:border-blue-400/30 transition-all cursor-pointer shadow-xs"
                        title="View Contact Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      {/* Update Status Button */}
                      <button
                        onClick={() => setStatusModalContact(contact)}
                        className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-amber-300 hover:bg-amber-500/20 hover:border-amber-400/30 transition-all cursor-pointer shadow-xs"
                        title="Update Status"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>

                      {/* Delete Button */}
                      <button
                        onClick={() => setDeleteModalContact(contact)}
                        className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-rose-400 hover:bg-rose-500/20 hover:border-rose-500/30 transition-all cursor-pointer shadow-xs"
                        title="Delete Contact"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              !isLoading && (
                <tr>
                  <td colSpan={7} className="py-16 text-center text-slate-400 text-xs">
                    No matching contact inquiries found in backend database.
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      {showPagination && pagination.totalPages > 1 && (
        <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-t border-white/10 text-xs">
          <p className="text-slate-300">
            Page <strong className="text-white font-bold">{pagination.currentPage}</strong> of{' '}
            <strong className="text-white font-bold">{pagination.totalPages}</strong>
          </p>

          <div className="flex items-center gap-2">
            <button
              disabled={pagination.currentPage === 1 || isLoading}
              onClick={() => handlePageChange(pagination.currentPage - 1)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.05] font-bold text-slate-200 hover:bg-white/10 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              disabled={pagination.currentPage === pagination.totalPages || isLoading}
              onClick={() => handlePageChange(pagination.currentPage + 1)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.05] font-bold text-slate-200 hover:bg-white/10 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      <UpdateStatusModal
        isOpen={!!statusModalContact}
        contact={statusModalContact}
        onClose={() => setStatusModalContact(null)}
        onConfirm={async (newStatus) => {
          if (statusModalContact) {
            await updateStatus(statusModalContact.id, newStatus);
          }
        }}
      />

      <DeleteConfirmModal
        isOpen={!!deleteModalContact}
        contact={deleteModalContact}
        onClose={() => setDeleteModalContact(null)}
        onConfirm={async (id) => {
          await deleteContact(id);
        }}
      />
    </div>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  Bell,
  Search,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Shield,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useContacts } from '../../hooks/useContacts';

interface TopbarProps {
  onToggleSidebar: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({ onToggleSidebar }) => {
  const { user, logout } = useAuth();
  const { searchQuery, setSearchQuery } = useContacts();
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(e.target as Node)) {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (window.location.pathname !== '/admin/contacts') {
      navigate('/admin/contacts');
    }
  };

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-20 px-4 sm:px-8 bg-[#081A36]/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all">
      {/* Left side: Mobile Hamburger + Glass Search Bar */}
      <div className="flex items-center gap-3 sm:gap-4 flex-1 max-w-xl">
        <button
          onClick={onToggleSidebar}
          className="p-2.5 text-slate-300 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 lg:hidden transition-all"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Search Bar */}
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400/80" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search contacts, companies, email..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white/[0.05] border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/80 focus:border-blue-500/80 focus:bg-white/[0.08] backdrop-blur-md transition-all shadow-inner"
          />
        </div>
      </div>

      {/* Right side: Production Status + Notification Glass Icon + Profile Dropdown */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* System Status Pill */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-md shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Production Ready</span>
        </div>

        {/* Notification Glass Button & Dropdown */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative p-2.5 text-slate-300 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/10 hover:text-white hover:scale-105 transition-all cursor-pointer shadow-sm"
            aria-label="View notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full ring-2 ring-[#081A36]" />
          </button>

          <AnimatePresence>
            {notificationsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-3 w-80 sm:w-96 bg-[#0E2447]/95 backdrop-blur-2xl rounded-[24px] shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-white/15 py-3 z-50 overflow-hidden"
              >
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                  <h3 className="text-xs font-bold text-white tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    System Notifications
                  </h3>
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2.5 py-0.5 rounded-full font-bold">
                    2 New
                  </span>
                </div>
                <div className="divide-y divide-white/5 max-h-72 overflow-y-auto">
                  <div className="px-5 py-3.5 hover:bg-white/[0.05] transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs text-white font-bold">New Contact Inquiry Received</p>
                        <p className="text-[11px] text-slate-300 mt-0.5">Marcus Vance submitted a high priority restructuring request.</p>
                        <span className="text-[10px] text-blue-400 mt-1 block font-mono">10 mins ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-3.5 hover:bg-white/[0.05] transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 shrink-0">
                        <Shield className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-white font-bold">Admin Security Session Active</p>
                        <p className="text-[11px] text-slate-300 mt-0.5">JWT Token refreshed successfully for user Alexander Wright.</p>
                        <span className="text-[10px] text-blue-400 mt-1 block font-mono">1 hour ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="h-6 w-px bg-white/10 mx-0.5" />

        {/* User Profile Glass Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3 p-1.5 sm:px-3 sm:py-2 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/10 transition-all cursor-pointer shadow-sm group"
          >
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256'}
              alt={user?.name || 'User'}
              className="w-8 h-8 rounded-xl object-cover ring-2 ring-blue-500/30"
            />
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold text-white leading-tight group-hover:text-blue-300 transition-colors">{user?.name || 'Alexander Wright'}</p>
              <p className="text-[10px] text-slate-400 leading-tight">{user?.role || 'Managing Partner'}</p>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-white transition-transform" />
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-3 w-60 bg-[#0E2447]/95 backdrop-blur-2xl rounded-[24px] shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-white/15 py-2 z-50 overflow-hidden"
              >
                <div className="px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                  <p className="text-xs font-bold text-white">{user?.name || 'Alexander Wright'}</p>
                  <p className="text-[11px] text-blue-300/80 truncate font-mono mt-0.5">{user?.email || 'admin@arthanov.com'}</p>
                </div>

                <div className="py-1.5 px-2">
                  <Link
                    to="/admin/settings"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <User className="w-4 h-4 text-blue-400" />
                    <span>My Profile</span>
                  </Link>
                  <Link
                    to="/admin/settings"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <Settings className="w-4 h-4 text-pink-400" />
                    <span>Account Settings</span>
                  </Link>
                </div>

                <div className="pt-1 px-2 border-t border-white/10">
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-3.5 py-2.5 rounded-xl text-xs font-bold text-rose-400 hover:bg-rose-500/20 transition-colors cursor-pointer"
                  >
                    <LogOut className="w-4 h-4 text-rose-400" />
                    <span>Logout Session</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

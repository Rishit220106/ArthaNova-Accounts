import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  X,
  ShieldCheck,
  Building2,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navItems = [
    { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Contacts', path: '/admin/contacts', icon: Users },
    { label: 'Settings', path: '/admin/settings', icon: Settings }
  ];

  return (
    <>
      {/* Mobile backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar container - Floating Glass Panel */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col w-64 lg:w-70 p-4 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full bg-[#0D2142]/75 backdrop-blur-2xl border border-white/10 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Header / Branding */}
          <div className="flex items-center justify-between p-5 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-pink-500 text-white shadow-lg shadow-blue-500/25 ring-1 ring-white/30">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-sm font-bold text-white tracking-wider flex items-center gap-1.5">
                  ArthaNovaccounts
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-gradient-to-r from-blue-500/30 to-pink-500/30 text-amber-300 font-mono border border-amber-400/20">PRO</span>
                </h1>
                <p className="text-[10px] uppercase tracking-widest text-blue-400 font-semibold mt-0.5">
                  Admin Portal
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 lg:hidden transition-colors"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Profile Card inside Sidebar */}
          <div className="p-4 border-b border-white/10 bg-white/[0.01]">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-inner">
              <div className="relative">
                <img
                  src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256'}
                  alt={user?.name || 'Admin'}
                  className="w-10 h-10 rounded-xl object-cover ring-2 ring-blue-400/30"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full ring-2 ring-[#0D2142]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-white truncate">{user?.name || 'Alexander Wright'}</p>
                <p className="text-[11px] text-blue-300/80 truncate font-medium">{user?.role || 'Administrator'}</p>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-4 py-5 space-y-1.5 overflow-y-auto">
            <div className="px-3 mb-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-between">
              <span>Main Menu</span>
              <Sparkles className="w-3 h-3 text-pink-400" />
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className="relative flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-semibold transition-all group"
                >
                  {/* Animated Active Pill Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active-indicator"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-pink-600/90 rounded-2xl shadow-lg shadow-blue-500/25 border border-white/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {!isActive && (
                    <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/[0.06] group-hover:border group-hover:border-white/10 transition-all" />
                  )}

                  <Icon className={`relative z-10 w-4 h-4 transition-transform group-hover:scale-110 ${
                    isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-400'
                  }`} />
                  <span className={`relative z-10 tracking-wide ${
                    isActive ? 'text-white font-bold' : 'text-slate-300 group-hover:text-white'
                  }`}>
                    {item.label}
                  </span>
                </NavLink>
              );
            })}
          </nav>

          {/* Footer / System Status & Logout */}
          <div className="p-4 border-t border-white/10 bg-white/[0.02] space-y-3">
            <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-[11px]">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>JWT Secured System</span>
              </div>
              <p className="text-[10px] text-slate-400 pl-6">Authorized Admin Session</p>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-2xl text-xs font-bold text-slate-300 hover:text-white hover:bg-rose-500/20 border border-white/10 hover:border-rose-500/40 transition-all cursor-pointer group shadow-sm"
            >
              <LogOut className="w-4 h-4 text-rose-400 group-hover:translate-x-0.5 transition-transform" />
              <span>Logout Session</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  User,
  Lock,
  LogOut,
  Shield,
  KeyRound,
  Bell,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { BreadcrumbNavigation } from '../../components/admin/BreadcrumbNavigation';
import { useAuth } from '../../hooks/useAuth';
import { authService } from '../../services/authService';

export const AdminSettings: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Change Password Form State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMsg, setPasswordMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  // Preference Toggles
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [dailySummary, setDailySummary] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordMsg(null);

    if (!currentPassword) {
      setPasswordMsg({ type: 'error', text: 'Please enter your current password.' });
      return;
    }

    if (newPassword.length < 6) {
      setPasswordMsg({ type: 'error', text: 'New password must be at least 6 characters.' });
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordMsg({ type: 'error', text: 'New passwords do not match.' });
      return;
    }

    setIsUpdatingPassword(true);

    try {
      const res = await authService.updatePassword({
        currentPassword,
        newPassword,
        confirmPassword
      });

      setPasswordMsg({ type: 'success', text: res.message || 'Password updated successfully!' });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err: any) {
      setPasswordMsg({ type: 'error', text: err.message || 'Failed to update password.' });
    } finally {
      setIsUpdatingPassword(false);
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

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <span>Admin Account & Security Settings</span>
            <Sparkles className="w-5 h-5 text-blue-400" />
          </h1>
          <p className="text-xs text-slate-300">
            Manage partner credentials, security authentication, and notification preferences.
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2.5 bg-rose-500/15 border border-rose-500/30 hover:bg-rose-500/25 text-rose-300 rounded-2xl text-xs font-bold shadow-sm transition-all cursor-pointer backdrop-blur-md"
        >
          <LogOut className="w-4 h-4 text-rose-400" />
          <span>Logout Session</span>
        </button>
      </div>

      {/* Grid: Left Column Profile Card & System Toggles, Right Column Change Password */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card Component (1/3 width) */}
        <div className="space-y-6">
          <div className="bg-[#0D2142]/65 backdrop-blur-2xl rounded-[28px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-6 text-center space-y-4 relative overflow-hidden">
            <div className="relative inline-block">
              <img
                src={user?.avatar || '/team/ami-sampat.jpg'}
                alt={user?.name || 'Admin Avatar'}
                className="w-24 h-24 rounded-2xl object-cover ring-4 ring-blue-500/30 shadow-xl mx-auto"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full ring-4 ring-[#0D2142]" />
            </div>

            <div>
              <h2 className="text-lg font-extrabold text-white">{user?.name || 'Alexander Wright'}</h2>
              <p className="text-xs font-bold text-blue-400 mt-0.5">{user?.role || 'Senior Managing Partner'}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{user?.department || 'Tax & Corporate Advisory'}</p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2.5 text-left text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Email:</span>
                <span className="font-bold text-white font-mono">{user?.email || 'admin@arthanov.com'}</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Security Level:</span>
                <span className="font-bold text-emerald-400 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" /> Tier 1 Super Admin
                </span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Last Login:</span>
                <span className="font-medium text-slate-200 font-mono">{user?.lastLogin || 'Today, 18:42'}</span>
              </div>
            </div>
          </div>

          {/* System Notification Toggles */}
          <div className="bg-[#0D2142]/65 backdrop-blur-2xl rounded-[28px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-6 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/10 pb-3 flex items-center gap-2">
              <Bell className="w-4 h-4 text-blue-400" />
              <span>Admin Notifications</span>
            </h3>

            <div className="space-y-3.5">
              <label className="flex items-center justify-between cursor-pointer p-2 rounded-xl hover:bg-white/[0.03] transition-colors">
                <span className="text-xs font-medium text-slate-200">Email Contact Alerts</span>
                <input
                  type="checkbox"
                  checked={emailAlerts}
                  onChange={(e) => setEmailAlerts(e.target.checked)}
                  className="w-4 h-4 text-blue-500 rounded border-white/20 bg-white/5 focus:ring-blue-500/50 cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer p-2 rounded-xl hover:bg-white/[0.03] transition-colors">
                <span className="text-xs font-medium text-slate-200">Daily Digest Summary</span>
                <input
                  type="checkbox"
                  checked={dailySummary}
                  onChange={(e) => setDailySummary(e.target.checked)}
                  className="w-4 h-4 text-blue-500 rounded border-white/20 bg-white/5 focus:ring-blue-500/50 cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer p-2 rounded-xl hover:bg-white/[0.03] transition-colors">
                <span className="text-xs font-medium text-slate-200">2FA Security Token Prompt</span>
                <input
                  type="checkbox"
                  checked={twoFactor}
                  onChange={(e) => setTwoFactor(e.target.checked)}
                  className="w-4 h-4 text-blue-500 rounded border-white/20 bg-white/5 focus:ring-blue-500/50 cursor-pointer"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Change Password Form (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#0D2142]/65 backdrop-blur-2xl rounded-[28px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-white">Change Admin Password</h2>
                <p className="text-xs text-slate-300">
                  Update your authentication credentials for the admin portal.
                </p>
              </div>
            </div>

            {passwordMsg && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-4 rounded-2xl text-xs font-bold border backdrop-blur-md ${
                  passwordMsg.type === 'success'
                    ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                    : 'bg-rose-500/15 text-rose-300 border-rose-500/30'
                }`}
              >
                {passwordMsg.text}
              </motion.div>
            )}

            <form onSubmit={handleChangePassword} className="space-y-4 max-w-md">
              {/* Current Password */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Current Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm bg-white/[0.05] border border-white/12 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/[0.08] backdrop-blur-md transition-all font-medium"
                  />
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password (min. 6 chars)"
                    required
                    className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm bg-white/[0.05] border border-white/12 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/[0.08] backdrop-blur-md transition-all font-medium"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter new password"
                    required
                    className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm bg-white/[0.05] border border-white/12 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/[0.08] backdrop-blur-md transition-all font-medium"
                  />
                </div>
              </div>

              <div className="pt-3">
                <motion.button
                  whileHover={{ scale: isUpdatingPassword ? 1 : 1.02 }}
                  whileTap={{ scale: isUpdatingPassword ? 1 : 0.98 }}
                  type="submit"
                  disabled={isUpdatingPassword}
                  className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 disabled:opacity-50 text-white rounded-2xl text-xs sm:text-sm font-extrabold shadow-lg shadow-blue-500/25 border border-white/20 transition-all cursor-pointer"
                >
                  {isUpdatingPassword ? 'Updating Password...' : 'Update Password'}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

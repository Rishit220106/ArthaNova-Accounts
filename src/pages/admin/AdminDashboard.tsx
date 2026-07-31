import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  UserPlus,
  Clock,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Loader2,
  AlertCircle,
  Sparkles,
  Zap
} from 'lucide-react';
import { BreadcrumbNavigation } from '../../components/admin/BreadcrumbNavigation';
import { StatCard } from '../../components/admin/StatCard';
import { ContactTable } from '../../components/admin/ContactTable';
import { RecentActivity } from '../../components/admin/RecentActivity';
import { QuickActions } from '../../components/admin/QuickActions';
import { useContacts } from '../../hooks/useContacts';
import { useAuth } from '../../hooks/useAuth';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { stats, isLoading, error, refreshContacts } = useContacts();
  const { user } = useAuth();

  useEffect(() => {
    refreshContacts();
  }, [refreshContacts]);

  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        duration: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Breadcrumb Navigation */}
      <BreadcrumbNavigation />

      {/* Greeting Banner - Glass Floating Card */}
      <motion.div
        variants={itemVariants}
        className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-[#0D2142]/80 via-[#152E58]/80 to-[#0D2142]/80 backdrop-blur-2xl p-6 sm:p-8 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col sm:flex-row sm:items-center justify-between gap-6"
      >
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 text-xs font-bold border border-blue-400/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <Zap className="w-3.5 h-3.5 text-amber-300" />
            Backend Live Connected
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Welcome back, <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-pink-400 bg-clip-text text-transparent">{user?.name || 'Admin'}</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Real-time client metrics, corporate inquiry portal, and firm audit statistics.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/admin/contacts')}
          className="relative z-10 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 text-white rounded-2xl text-xs font-extrabold transition-all shadow-[0_10px_30px_rgba(59,130,246,0.35)] shrink-0 cursor-pointer border border-white/20"
        >
          <span>View All Contacts</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>

      {error && (
        <motion.div
          variants={itemVariants}
          className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 font-semibold flex items-center gap-2.5 backdrop-blur-md"
        >
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
          <span>{error}</span>
        </motion.div>
      )}

      {/* 5 Statistic Cards Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* 1. Total Contacts */}
        <StatCard
          title="Total Contacts"
          value={isLoading ? '...' : stats.total}
          subtitle="All database entries"
          icon={Users}
          iconBgColor="bg-blue-500/15 border-blue-500/30"
          iconTextColor="text-blue-400"
        />

        {/* 2. New Contacts */}
        <StatCard
          title="New Contacts"
          value={isLoading ? '...' : stats.newCount}
          badgeText="Pending Review"
          icon={UserPlus}
          iconBgColor="bg-pink-500/15 border-pink-500/30"
          iconTextColor="text-pink-400"
        />

        {/* 3. Contacted */}
        <StatCard
          title="Contacted"
          value={isLoading ? '...' : stats.contactedCount}
          subtitle="In communication"
          icon={Clock}
          iconBgColor="bg-amber-500/15 border-amber-500/30"
          iconTextColor="text-amber-400"
        />

        {/* 4. Closed */}
        <StatCard
          title="Closed Cases"
          value={isLoading ? '...' : stats.closedCount}
          subtitle="Resolved / Archived"
          icon={CheckCircle2}
          iconBgColor="bg-emerald-500/15 border-emerald-500/30"
          iconTextColor="text-emerald-400"
        />

        {/* 5. Today's Contacts */}
        <StatCard
          title="Today's Contacts"
          value={isLoading ? '...' : stats.todayCount}
          subtitle="Received today"
          icon={Calendar}
          iconBgColor="bg-indigo-500/15 border-indigo-500/30"
          iconTextColor="text-indigo-400"
        />
      </motion.div>

      {/* Main Content Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Contacts Table Component */}
        <div className="lg:col-span-2 space-y-4">
          <ContactTable
            limit={5}
            showFilters={false}
            showPagination={false}
            title="Recent Client Contacts"
            subtitle="Top 5 latest client inquiries from MongoDB backend"
          />

          <div className="text-right">
            <button
              onClick={() => navigate('/admin/contacts')}
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-pink-400 transition-colors cursor-pointer"
            >
              <span>Explore full data table</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Side Panels */}
        <div className="space-y-6">
          <QuickActions />
          <RecentActivity />
        </div>
      </motion.div>
    </motion.div>
  );
};

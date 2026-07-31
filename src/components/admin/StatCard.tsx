import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, TrendingUp, TrendingDown, Sparkles } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number | string;
  subtitle?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  icon: LucideIcon;
  iconBgColor?: string;
  iconTextColor?: string;
  badgeText?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  trend,
  icon: Icon,
  iconBgColor = 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  iconTextColor = 'text-blue-400',
  badgeText
}) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="relative group bg-[#0D2142]/60 backdrop-blur-xl rounded-[24px] p-5 border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.35)] hover:border-blue-500/40 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-all overflow-hidden"
    >
      {/* Top subtle gradient highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-start justify-between">
        <div className="space-y-1.5">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
            <span>{title}</span>
          </p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {value}
            </h3>
            {badgeText && (
              <span className="px-2.5 py-0.5 text-[10px] font-bold bg-gradient-to-r from-blue-500/20 to-pink-500/20 text-amber-300 border border-amber-400/30 rounded-full">
                {badgeText}
              </span>
            )}
          </div>
        </div>

        <div className={`p-3 rounded-2xl ${iconBgColor} ${iconTextColor} border shrink-0 backdrop-blur-md shadow-sm group-hover:scale-110 transition-transform`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      {(subtitle || trend) && (
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
          {trend ? (
            <div className="flex items-center gap-1.5 font-medium">
              {trend.isPositive ? (
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
              )}
              <span className={trend.isPositive ? 'font-bold text-emerald-400' : 'font-bold text-rose-400'}>
                {trend.value}
              </span>
              <span className="text-slate-400 text-[11px]">vs last week</span>
            </div>
          ) : (
            <span className="text-slate-400 font-medium text-[11px]">{subtitle}</span>
          )}
        </div>
      )}
    </motion.div>
  );
};

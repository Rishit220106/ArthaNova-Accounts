import React from 'react';
import { Contact } from '../../services/mockData';

interface StatusBadgeProps {
  status: Contact['status'];
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const getStyle = () => {
    switch (status) {
      case 'New':
        return 'bg-blue-500/15 text-blue-300 border-blue-400/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]';
      case 'Contacted':
        return 'bg-amber-500/15 text-amber-300 border-amber-400/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]';
      case 'In Progress':
        return 'bg-pink-500/15 text-pink-300 border-pink-400/30 shadow-[0_0_15px_rgba(236,72,153,0.2)]';
      case 'Closed':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]';
      default:
        return 'bg-slate-500/15 text-slate-300 border-slate-400/30';
    }
  };

  const getDotColor = () => {
    switch (status) {
      case 'New':
        return 'bg-blue-400 animate-pulse';
      case 'Contacted':
        return 'bg-amber-400';
      case 'In Progress':
        return 'bg-pink-400 animate-pulse';
      case 'Closed':
        return 'bg-emerald-400';
      default:
        return 'bg-slate-400';
    }
  };

  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-[10px] font-bold' : 'px-3 py-1 text-xs font-bold';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border backdrop-blur-md font-mono tracking-wide ${getStyle()} ${sizeClasses}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${getDotColor()}`} />
      {status}
    </span>
  );
};

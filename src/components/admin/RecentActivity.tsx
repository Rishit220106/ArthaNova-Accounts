import React from 'react';
import { Clock, Activity, CheckCircle2, UserPlus, Trash2, RefreshCw } from 'lucide-react';
import { useContacts } from '../../hooks/useContacts';

export const RecentActivity: React.FC = () => {
  const { activities } = useContacts();

  const getIcon = (type: string) => {
    switch (type) {
      case 'new_contact':
        return <UserPlus className="w-4 h-4 text-blue-400" />;
      case 'status_change':
        return <RefreshCw className="w-4 h-4 text-pink-400" />;
      case 'delete':
        return <Trash2 className="w-4 h-4 text-rose-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
    }
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'new_contact':
        return 'bg-blue-500/10 border-blue-500/20';
      case 'status_change':
        return 'bg-pink-500/10 border-pink-500/20';
      case 'delete':
        return 'bg-rose-500/10 border-rose-500/20';
      default:
        return 'bg-emerald-500/10 border-emerald-500/20';
    }
  };

  return (
    <div className="bg-[#0D2142]/65 backdrop-blur-xl rounded-[28px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-6 space-y-4">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <Activity className="w-4 h-4 text-pink-400" />
          <h3 className="text-sm font-bold text-white tracking-wide">Recent Audit Activity</h3>
        </div>
        <span className="text-[10px] bg-white/[0.04] text-blue-300 border border-white/10 font-bold px-2.5 py-0.5 rounded-full">
          Live Trail
        </span>
      </div>

      <div className="space-y-3.5 max-h-80 overflow-y-auto pr-1">
        {activities.slice(0, 7).map((item) => (
          <div key={item.id} className="flex items-start gap-3 text-xs p-2.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
            <div className={`p-2 rounded-xl border ${getBadgeColor(item.type)} shrink-0 mt-0.5 backdrop-blur-md`}>
              {getIcon(item.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-slate-200 font-medium leading-relaxed">
                <span className="font-bold text-white">{item.user}</span> {item.action}{' '}
                <strong className="text-blue-300 font-semibold">{item.target}</strong>
              </p>
              <div className="flex items-center gap-1.5 mt-1 text-[10px] text-slate-400 font-mono">
                <Clock className="w-3 h-3 text-slate-500" />
                <span>{item.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

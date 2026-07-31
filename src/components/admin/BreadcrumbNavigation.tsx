import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  customItems?: BreadcrumbItem[];
}

export const BreadcrumbNavigation: React.FC<BreadcrumbProps> = ({ customItems }) => {
  const location = useLocation();

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    if (customItems) return customItems;

    const pathSegments = location.pathname.split('/').filter(Boolean);
    // Remove 'admin' root segment as it's represented by Home / Admin
    const items: BreadcrumbItem[] = [{ label: 'Admin', path: '/admin/dashboard' }];

    if (pathSegments.length > 1) {
      const current = pathSegments[1];
      if (current === 'dashboard') {
        items.push({ label: 'Dashboard' });
      } else if (current === 'contacts') {
        items.push({ label: 'Contacts' });
      } else if (current === 'contact' && pathSegments[2]) {
        items.push({ label: 'Contacts', path: '/admin/contacts' });
        items.push({ label: `Contact (${pathSegments[2]})` });
      } else if (current === 'settings') {
        items.push({ label: 'Settings' });
      } else {
        items.push({ label: current.charAt(0).toUpperCase() + current.slice(1) });
      }
    }

    return items;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav className="flex items-center text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1.5 sm:space-x-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
        <li className="inline-flex items-center">
          <Link
            to="/admin/dashboard"
            className="inline-flex items-center text-slate-400 hover:text-blue-400 transition-colors"
          >
            <Home className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
            <span className="sr-only">Dashboard</span>
          </Link>
        </li>
        {breadcrumbs.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight className="w-3.5 h-3.5 text-slate-500 mx-1 shrink-0" />
              {item.path ? (
                <Link
                  to={item.path}
                  className="font-semibold text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-bold text-white tracking-wide">{item.label}</span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

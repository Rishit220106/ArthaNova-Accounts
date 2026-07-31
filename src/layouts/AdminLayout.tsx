import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/admin/Sidebar';
import { Topbar } from '../components/admin/Topbar';
import { ContactProvider } from '../context/ContactContext';

export const AdminLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ContactProvider>
      <div className="min-h-screen flex bg-[#081A36] text-slate-100 font-sans antialiased relative overflow-x-hidden">
        {/* Ambient Glassmorphism Glow Blobs */}
        <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none z-0" />
        <div className="fixed top-1/3 right-10 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[160px] pointer-events-none z-0" />
        <div className="fixed bottom-10 left-10 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

        {/* Floating Glass Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden relative z-10">
          {/* Glass Topbar Navigation */}
          <Topbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

          {/* Page Content with smooth padding */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6">
            <Outlet />
          </main>
        </div>
      </div>
    </ContactProvider>
  );
};

import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { GlobalTransition } from './components/layout/GlobalTransition';
import { PageTransition } from './components/layout/PageTransition';
import { AnimatePresence } from 'motion/react';

// Admin imports
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/admin/ProtectedRoute';
import { AdminLayout } from './layouts/AdminLayout';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminContacts } from './pages/admin/AdminContacts';
import { AdminContactDetail } from './pages/admin/AdminContactDetail';
import { AdminSettings } from './pages/admin/AdminSettings';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Jurisdictions = lazy(() => import('./pages/Jurisdictions').then(module => ({ default: module.Jurisdictions })));
const Team = lazy(() => import('./pages/Team').then(module => ({ default: module.Team })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="w-8 h-8 border-4 border-[#D4AF37]/20 border-t-[#D4AF37] rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  if (isAdminRoute) {
    return (
      <AuthProvider>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="contact/:id" element={<AdminContactDetail />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
          </Route>
          <Route path="*" element={<Navigate to="/admin/login" replace />} />
        </Routes>
      </AuthProvider>
    );
  }

  return (
    <>
      <GlobalTransition />
      <Layout>
        <AnimatePresence mode="wait" initial={false}>
          {/* @ts-ignore - React Router v6 Routes type doesn't officially include key but it's required for AnimatePresence */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Suspense fallback={<LoadingFallback />}><Home /></Suspense></PageTransition>} />
            <Route path="/services" element={<PageTransition><Suspense fallback={<LoadingFallback />}><Services /></Suspense></PageTransition>} />
            <Route path="/jurisdictions" element={<PageTransition><Suspense fallback={<LoadingFallback />}><Jurisdictions /></Suspense></PageTransition>} />
            <Route path="/team" element={<PageTransition><Suspense fallback={<LoadingFallback />}><Team /></Suspense></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Suspense fallback={<LoadingFallback />}><Contact /></Suspense></PageTransition>} />
            <Route path="*" element={<PageTransition><Suspense fallback={<LoadingFallback />}><NotFound /></Suspense></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  );
}

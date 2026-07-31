import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#081634] text-text-primary selection:bg-accent/20">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:px-6 focus:py-3 focus:bg-accent focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-accent/50 focus:font-medium transition-all"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-grow flex flex-col" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

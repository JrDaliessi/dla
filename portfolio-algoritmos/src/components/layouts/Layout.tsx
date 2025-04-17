import React, { ReactNode } from 'react';
import Sidebar from '@/components/layouts/Sidebar';
import MobileMenuButton from '@/components/ui/MobileMenuButton';
import { useChallenges } from '@/contexts/ChallengeContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { sidebarCollapsed } = useChallenges();

  return (
    <div className="container">
      <Sidebar />
      <MobileMenuButton />
      <main className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`} id="main-content" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
};

export default Layout; 
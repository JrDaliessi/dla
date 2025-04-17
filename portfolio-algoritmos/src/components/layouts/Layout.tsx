import React, { ReactNode, useEffect } from 'react';
import { useChallenges } from '@/contexts/ChallengeContext';
import DynamicSidebar from './DynamicSidebar';
import MobileMenuButton from '../ui/MobileMenuButton';
import Head from 'next/head';
import { useTheme } from '@/contexts/ThemeContext';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'Algoritmos' }: LayoutProps) {
  const { sidebarCollapsed, toggleSidebar } = useChallenges();
  const { theme } = useTheme();

  // Handle escape key to close sidebar on mobile
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && window.innerWidth <= 768 && !sidebarCollapsed) {
        toggleSidebar();
      }
    };
    
    window.addEventListener('keydown', handleEscapeKey);
    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, [sidebarCollapsed, toggleSidebar]);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (
        window.innerWidth <= 768 && 
        !sidebarCollapsed && 
        !target.closest('.sidebar') && 
        !target.closest('.mobile-menu-btn')
      ) {
        // Impedir propagação do evento para evitar bugs
        e.stopPropagation();
        // Fechar o sidebar
        toggleSidebar();
        
        // Garantir que a classe mobile-visible seja removida
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
          sidebar.classList.remove('mobile-visible');
        }
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [sidebarCollapsed, toggleSidebar]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Portfólio de algoritmos e estruturas de dados" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <DynamicSidebar />
        
        <main 
          id="main-content" 
          tabIndex={-1} 
          className={`main-content ${!sidebarCollapsed ? 'expanded' : ''}`}
          data-theme={theme}
        >
          {children}
        </main>
      
        <MobileMenuButton />
      </div>
    </>
  );
} 
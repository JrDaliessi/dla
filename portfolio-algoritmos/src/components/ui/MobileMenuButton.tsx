import React, { useState, useEffect } from 'react';
import { useChallenges } from '../../contexts/ChallengeContext';

const MobileMenuButton: React.FC = () => {
  const { toggleSidebar, sidebarCollapsed } = useChallenges();
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Verificar inicialmente
    checkIsMobile();
    
    // Adicionar evento para redimensionamento
    window.addEventListener('resize', checkIsMobile);
    
    // Limpar evento
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);
  
  // Esconder o botão ao rolar para baixo
  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY;
      if (st > lastScrollTop && st > 100) {
        // Rolar para baixo
        setIsVisible(false);
      } else {
        // Rolar para cima
        setIsVisible(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);
  
  if (!isMobile) return null;
  
  return (
    <button 
      className={`mobile-menu-btn ${isVisible ? 'visible' : 'hidden'} ${!sidebarCollapsed ? 'active' : ''}`}
      onClick={toggleSidebar}
      aria-label={sidebarCollapsed ? "Abrir menu" : "Fechar menu"}
    >
      <div className="menu-btn-icon">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </button>
  );
};

export default MobileMenuButton; 
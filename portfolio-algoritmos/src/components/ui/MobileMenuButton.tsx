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
      
      // Determinar a direção do scroll
      if (st > lastScrollTop && st > 100) {
        // Rolar para baixo - esconder o botão
        setIsVisible(false);
      } else {
        // Rolar para cima ou no topo - mostrar o botão
        setIsVisible(true);
      }
      
      // Atualizar a posição do último scroll
      setLastScrollTop(st <= 0 ? 0 : st);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);
  
  const handleClick = () => {
    // Primeiro, encontrar o elemento da sidebar
    const sidebar = document.querySelector('.sidebar');
    
    // Alternar o estado do sidebar no contexto
    toggleSidebar();
    
    // Aplicar ou remover a classe mobile-visible com base no novo estado
    // Como toggleSidebar já trocou o estado, precisamos verificar o oposto do sidebarCollapsed atual
    if (sidebar) {
      if (sidebarCollapsed) {
        // O sidebar estava fechado, agora estará aberto
        sidebar.classList.add('mobile-visible');
      } else {
        // O sidebar estava aberto, agora estará fechado
        sidebar.classList.remove('mobile-visible');
      }
    }
  };
  
  if (!isMobile) return null;
  
  return (
    <button 
      className={`mobile-menu-btn ${isVisible ? 'visible' : 'hidden'} ${!sidebarCollapsed ? 'active' : ''}`}
      onClick={handleClick}
      aria-label={sidebarCollapsed ? "Abrir menu" : "Fechar menu"}
      id="hamburger-btn"
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
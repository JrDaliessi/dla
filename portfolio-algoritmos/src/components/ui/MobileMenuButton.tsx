import React, { useState, useEffect } from 'react';
import { useChallenges } from '../../contexts/ChallengeContext';

const MobileMenuButton: React.FC = () => {
  const { toggleSidebar } = useChallenges();
  const [isMobile, setIsMobile] = useState(false);
  
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
  
  if (!isMobile) return null;
  
  return (
    <button 
      className="mobile-menu-btn"
      onClick={toggleSidebar}
      aria-label="Abrir menu"
    >
      <i className="fas fa-bars"></i>
    </button>
  );
};

export default MobileMenuButton; 
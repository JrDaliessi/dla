import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useChallenges } from '../../contexts/ChallengeContext';
import { ChallengeDay, ChallengeData, ChallengeVersion } from '../../types';

const Sidebar: React.FC = () => {
  const { challengeDays, toggleSidebar, sidebarCollapsed, loadChallenge } = useChallenges();
  const [expandedDays, setExpandedDays] = useState<Record<string, boolean>>({});
  const [expandedChallenges, setExpandedChallenges] = useState<Record<string, boolean>>({});
  const [activeChallengeId, setActiveChallengeId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // Marcar que estamos no cliente após a montagem do componente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Verificar se é dispositivo móvel
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Expandir automaticamente o dia selecionado ao carregar
  useEffect(() => {
    if (router.query.dia && challengeDays.length > 0) {
      const dayIndex = challengeDays.findIndex(day => 
        day.day.toLowerCase().replace(/\s+/g, '-') === router.query.dia
      );
      
      if (dayIndex !== -1) {
        setExpandedDays(prev => ({
          ...prev,
          [dayIndex]: true
        }));
        
        // Se houver um desafio selecionado, expandi-lo também
        if (router.query.desafio) {
          const challenge = challengeDays[dayIndex].challenges.find(c => 
            c.id.includes(router.query.desafio as string)
          );
          
          if (challenge) {
            setExpandedChallenges(prev => ({
              ...prev,
              [challenge.id]: true
            }));
          }
        }
      }
    }
  }, [router.query, challengeDays]);

  const toggleDay = (dayIndex: number) => {
    setExpandedDays(prev => ({
      ...prev,
      [dayIndex]: !prev[dayIndex]
    }));
  };

  const toggleChallenge = (challengeId: string) => {
    setExpandedChallenges(prev => ({
      ...prev,
      [challengeId]: !prev[challengeId]
    }));
  };

  const handleVersionClick = (versionId: string) => {
    setActiveChallengeId(versionId);
    loadChallenge(versionId);
    
    // Extrair partes do ID para a rota
    const parts = versionId.split('-');
    if (parts.length >= 3) {
      const dia = parts[0];
      const desafio = parts[1];
      const versao = parts.slice(2).join('-');
      
      // Navegar para a página do desafio
      router.push(`/desafios/${dia}/${desafio}/${versao}`);
      
      // Em dispositivos móveis, fechar o menu após seleção
      if (isMobile && !sidebarCollapsed) {
        // Adicionar um pequeno atraso para melhor experiência do usuário
        setTimeout(() => {
          toggleSidebar();
          
          // Garantir que a classe mobile-visible seja removida
          const sidebar = document.querySelector('.sidebar');
          if (sidebar) {
            sidebar.classList.remove('mobile-visible');
          }
        }, 300);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, callback: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  };

  // Não renderizar nada durante a renderização do servidor
  // ou usar uma versão simplificada durante a renderização do servidor
  if (!isClient) {
    return (
      <aside className="sidebar" aria-label="Menu de navegação entre desafios" id="sidebar">
        <div className="sidebar-header">
          <h2>Desafios</h2>
          <button className="toggle-btn" aria-label="Toggle menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sidebar-toggle-icon" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="sidebar-content">
          <ul className="challenges-tree" role="tree">
            {/* Esqueleto básico durante SSR */}
            <li>Carregando...</li>
          </ul>
        </div>
      </aside>
    );
  }

  const sidebarClass = `sidebar ${sidebarCollapsed ? 'collapsed' : ''} ${isMobile && !sidebarCollapsed ? 'mobile-visible' : ''} ${isMobile ? 'mobile' : ''}`;

  return (
    <aside 
      className={sidebarClass} 
      aria-label="Menu de navegação entre desafios"
      id="sidebar"
    >
      <div className="sidebar-header">
        <h2>Desafios</h2>
        <button 
          className="toggle-btn" 
          onClick={toggleSidebar} 
          aria-label={sidebarCollapsed ? "Expandir menu lateral" : "Recolher menu lateral"}
          aria-expanded={!sidebarCollapsed}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="sidebar-toggle-icon"
            aria-hidden="true"
          >
            <path 
              d={sidebarCollapsed ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      
      <div className="sidebar-content">
        <ul className="challenges-tree" role="tree">
          {challengeDays.map((day, dayIndex) => (
            <li 
              key={day.day} 
              role="treeitem" 
              aria-expanded={expandedDays[dayIndex]}
              className="day-item"
            >
              <div 
                className={`day ${expandedDays[dayIndex] ? 'expanded' : ''}`}
                onClick={() => toggleDay(dayIndex)}
                onKeyDown={(e) => handleKeyDown(e, () => toggleDay(dayIndex))}
                tabIndex={0}
                role="button"
                aria-expanded={expandedDays[dayIndex]}
                aria-controls={`day-content-${dayIndex}`}
              >
                <div className="day-icon-title">
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="day-icon"
                    aria-hidden="true"
                  >
                    <path 
                      d="M19 4h-4V3c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7-1h2v2h-2V3zm7 17H5V8h14v12z" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path 
                      d="M12 12h5M12 16h5M7 12h2M7 16h2" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>{day.day}</span>
                </div>
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`day-chevron ${expandedDays[dayIndex] ? 'rotate' : ''}`}
                  aria-hidden="true"
                >
                  <path 
                    d="M9 18l6-6-6-6" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              
              <div 
                id={`day-content-${dayIndex}`}
                className={`day-content ${expandedDays[dayIndex] ? 'expanded' : ''}`}
                role="group"
              >
                {day.challenges.map(challenge => (
                  <div 
                    key={challenge.id} 
                    role="treeitem" 
                    aria-expanded={expandedChallenges[challenge.id]}
                    className="challenge-item"
                  >
                    <div 
                      className={`challenge ${expandedChallenges[challenge.id] ? 'expanded' : ''}`}
                      onClick={() => toggleChallenge(challenge.id)}
                      onKeyDown={(e) => handleKeyDown(e, () => toggleChallenge(challenge.id))}
                      tabIndex={0}
                      role="button"
                      aria-expanded={expandedChallenges[challenge.id]}
                      aria-controls={`challenge-versions-${challenge.id}`}
                    >
                      <div className="challenge-icon-title">
                        <svg 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="challenge-icon"
                          aria-hidden="true"
                        >
                          <path 
                            d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76zM16 8l-2-2M17 15H9" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{challenge.title}</span>
                      </div>
                      <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className={`challenge-chevron ${expandedChallenges[challenge.id] ? 'rotate' : ''}`}
                        aria-hidden="true"
                      >
                        <path 
                          d="M9 18l6-6-6-6" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    
                    <div 
                      id={`challenge-versions-${challenge.id}`}
                      className={`versions ${expandedChallenges[challenge.id] ? 'expanded' : ''}`}
                      role="group"
                    >
                      {challenge.versions.map(version => (
                        <div 
                          key={version.id}
                          className={`version ${activeChallengeId === version.id ? 'active' : ''}`}
                          onClick={() => handleVersionClick(version.id)}
                          onKeyDown={(e) => handleKeyDown(e, () => handleVersionClick(version.id))}
                          tabIndex={0}
                          role="button"
                          aria-selected={activeChallengeId === version.id}
                          aria-current={activeChallengeId === version.id ? "page" : undefined}
                        >
                          <svg 
                            width="14" 
                            height="14" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className="version-icon"
                            aria-hidden="true"
                          >
                            <path 
                              d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" 
                              stroke="currentColor" 
                              strokeWidth="1.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                            <path 
                              d="M14 2v6h6M9 15h6M9 11h3" 
                              stroke="currentColor" 
                              strokeWidth="1.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>{version.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar; 
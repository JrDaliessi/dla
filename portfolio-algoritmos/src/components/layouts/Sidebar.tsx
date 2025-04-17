import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useChallenges } from '../../contexts/ChallengeContext';
import { ChallengeDay, ChallengeData, ChallengeVersion } from '../../types';

const Sidebar: React.FC = () => {
  const { challengeDays, toggleSidebar, sidebarCollapsed, loadChallenge } = useChallenges();
  const [expandedDays, setExpandedDays] = useState<Record<string, boolean>>({});
  const [expandedChallenges, setExpandedChallenges] = useState<Record<string, boolean>>({});
  const [activeChallengeId, setActiveChallengeId] = useState<string | null>(null);
  const router = useRouter();

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
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, callback: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  };

  return (
    <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`} aria-label="Menu de navegação entre desafios">
      <div className="sidebar-header">
        <h2>Desafios</h2>
        <button 
          className="toggle-btn" 
          onClick={toggleSidebar} 
          aria-label={sidebarCollapsed ? "Expandir menu lateral" : "Recolher menu lateral"}
          aria-expanded={!sidebarCollapsed}
        >
          <i className="fas fa-bars" aria-hidden="true"></i>
        </button>
      </div>
      
      <div className="sidebar-content">
        <ul className="challenges-tree" role="tree">
          {challengeDays.map((day, dayIndex) => (
            <li key={day.day} role="treeitem" aria-expanded={expandedDays[dayIndex]}>
              <div 
                className={`day ${expandedDays[dayIndex] ? 'expanded' : ''}`}
                onClick={() => toggleDay(dayIndex)}
                onKeyDown={(e) => handleKeyDown(e, () => toggleDay(dayIndex))}
                tabIndex={0}
                role="button"
                aria-expanded={expandedDays[dayIndex]}
                aria-controls={`day-content-${dayIndex}`}
              >
                <span>{day.day}</span>
                <i className="fas fa-chevron-right" aria-hidden="true"></i>
              </div>
              
              <div 
                id={`day-content-${dayIndex}`}
                className="day-content" 
                style={{ display: expandedDays[dayIndex] ? 'block' : 'none' }}
                role="group"
              >
                {day.challenges.map(challenge => (
                  <div key={challenge.id} role="treeitem" aria-expanded={expandedChallenges[challenge.id]}>
                    <div 
                      className={`challenge ${expandedChallenges[challenge.id] ? 'expanded' : ''}`}
                      onClick={() => toggleChallenge(challenge.id)}
                      onKeyDown={(e) => handleKeyDown(e, () => toggleChallenge(challenge.id))}
                      tabIndex={0}
                      role="button"
                      aria-expanded={expandedChallenges[challenge.id]}
                      aria-controls={`challenge-versions-${challenge.id}`}
                    >
                      <span>{challenge.title}</span>
                      <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    </div>
                    
                    <div 
                      id={`challenge-versions-${challenge.id}`}
                      className="versions" 
                      style={{ display: expandedChallenges[challenge.id] ? 'block' : 'none' }}
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
                          {version.title}
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
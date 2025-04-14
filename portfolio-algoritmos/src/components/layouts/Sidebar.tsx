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

  return (
    <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h2>Desafios</h2>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
      
      <div className="sidebar-content">
        <ul className="challenges-tree">
          {challengeDays.map((day, dayIndex) => (
            <li key={day.day}>
              <div 
                className={`day ${expandedDays[dayIndex] ? 'expanded' : ''}`}
                onClick={() => toggleDay(dayIndex)}
              >
                <span>{day.day}</span>
                <i className="fas fa-chevron-right"></i>
              </div>
              
              <div className="day-content" style={{ display: expandedDays[dayIndex] ? 'block' : 'none' }}>
                {day.challenges.map(challenge => (
                  <div key={challenge.id}>
                    <div 
                      className={`challenge ${expandedChallenges[challenge.id] ? 'expanded' : ''}`}
                      onClick={() => toggleChallenge(challenge.id)}
                    >
                      <span>{challenge.title}</span>
                      <i className="fas fa-chevron-right"></i>
                    </div>
                    
                    <div className="versions" style={{ display: expandedChallenges[challenge.id] ? 'block' : 'none' }}>
                      {challenge.versions.map(version => (
                        <div 
                          key={version.id}
                          className={`version ${activeChallengeId === version.id ? 'active' : ''}`}
                          onClick={() => handleVersionClick(version.id)}
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
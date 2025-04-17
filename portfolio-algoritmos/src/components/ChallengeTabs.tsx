import React from 'react';
import { useChallenges } from '../contexts/ChallengeContext';

interface TabProps {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const tabs: TabProps[] = [
  { 
    id: 'enunciado', 
    label: 'Enunciado',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 17H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  { 
    id: 'solucao', 
    label: 'Solução',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2L10 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  { 
    id: 'estudo-mesa', 
    label: 'Estudo de Mesa',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const ChallengeTabs: React.FC = () => {
  const { activeTab, setActiveTab } = useChallenges();
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent, tabId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTabChange(tabId);
    }
  };
  
  return (
    <nav className="challenge-nav" aria-label="Navegação entre seções do desafio">
      <ul className="challenge-tabs" role="tablist">
        {tabs.map(tab => (
          <li 
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabChange(tab.id)}
            onKeyDown={(e) => handleKeyDown(e, tab.id)}
            role="tab"
            tabIndex={0}
            aria-selected={activeTab === tab.id}
            aria-controls={tab.id}
            id={`tab-${tab.id}`}
            title={tab.label}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ChallengeTabs; 
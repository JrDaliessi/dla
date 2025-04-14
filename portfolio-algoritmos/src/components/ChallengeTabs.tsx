import React from 'react';
import { useChallenges } from '../contexts/ChallengeContext';

interface TabProps {
  id: string;
  label: string;
}

const tabs: TabProps[] = [
  { id: 'enunciado', label: 'Enunciado' },
  { id: 'solucao', label: 'Solução' },
  { id: 'estudo-mesa', label: 'Estudo de Mesa' }
];

const ChallengeTabs: React.FC = () => {
  const { activeTab, setActiveTab } = useChallenges();
  
  return (
    <nav className="challenge-nav">
      <ul className="challenge-tabs">
        {tabs.map(tab => (
          <li 
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ChallengeTabs; 
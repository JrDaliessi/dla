import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ChallengeDay, ChallengeVersion } from '../types';
import { challengesData } from '../data/challenges';

interface ChallengeContextType {
  challengeDays: ChallengeDay[];
  currentChallenge: ChallengeVersion | null;
  loadChallenge: (id: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

const ChallengeContext = createContext<ChallengeContextType | undefined>(undefined);

interface ChallengeProviderProps {
  children: ReactNode;
}

export const ChallengeProvider: React.FC<ChallengeProviderProps> = ({ children }) => {
  const [challengeDays] = useState<ChallengeDay[]>(challengesData);
  const [currentChallenge, setCurrentChallenge] = useState<ChallengeVersion | null>(null);
  const [activeTab, setActiveTab] = useState('enunciado');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Marcar que estamos no cliente
    setIsClient(true);
    
    // Verificar preferência salva no localStorage para a sidebar
    const savedSidebarState = localStorage.getItem('sidebarCollapsed');
    if (savedSidebarState) {
      setSidebarCollapsed(savedSidebarState === 'true');
    }
  }, []);

  const loadChallenge = (id: string) => {
    // Não carregar desafios durante a renderização SSR
    if (!isClient) return;
    
    // Encontrar o desafio na estrutura de dados
    for (const day of challengeDays) {
      for (const challenge of day.challenges) {
        const version = challenge.versions.find(v => v.id === id);
        if (version) {
          setCurrentChallenge(version);
          return;
        }
      }
    }
  };

  const toggleSidebar = () => {
    // Não alternar sidebar durante a renderização SSR
    if (!isClient) return;
    
    const newState = !sidebarCollapsed;
    setSidebarCollapsed(newState);
    localStorage.setItem('sidebarCollapsed', String(newState));
  };

  return (
    <ChallengeContext.Provider 
      value={{ 
        challengeDays, 
        currentChallenge, 
        loadChallenge, 
        activeTab, 
        setActiveTab,
        sidebarCollapsed,
        toggleSidebar
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};

export const useChallenges = () => {
  const context = useContext(ChallengeContext);
  if (context === undefined) {
    throw new Error('useChallenges must be used within a ChallengeProvider');
  }
  return context;
}; 
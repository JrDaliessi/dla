import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ThemeToggle from '@/components/ui/ThemeToggle';
import ChallengeTabs from '@/components/ChallengeTabs';
import Solution from '@/components/Solution';
import TraceTable from '@/components/TraceTable';
import ConsoleSimulator from '@/components/ui/ConsoleSimulator';
import { useChallenges } from '@/contexts/ChallengeContext';
import { TraceStep } from '@/types';

const ChallengePage: NextPage = () => {
  const router = useRouter();
  const { dia, desafio, versao } = router.query;
  const { 
    loadChallenge, 
    currentChallenge, 
    activeTab, 
    setActiveTab 
  } = useChallenges();
  
  const [dynamicTraceData, setDynamicTraceData] = useState<TraceStep[]>([]);
  const [useSimulatedData, setUseSimulatedData] = useState(false);
  
  useEffect(() => {
    if (dia && desafio && versao && typeof dia === 'string' && typeof desafio === 'string' && typeof versao === 'string') {
      const challengeId = `${dia}-${desafio}-${versao}`;
      loadChallenge(challengeId);
    }
  }, [dia, desafio, versao, loadChallenge]);
  
  // Resetar os dados dinâmicos quando mudar de desafio
  useEffect(() => {
    if (currentChallenge) {
      setDynamicTraceData([]);
      setUseSimulatedData(false);
    }
  }, [currentChallenge]);
  
  const handleSimulationComplete = (traceData: TraceStep[]) => {
    setDynamicTraceData(traceData);
    setUseSimulatedData(true);
  };
  
  const handleResetTrace = () => {
    setUseSimulatedData(false);
  };
  
  if (!currentChallenge) {
    return <div className="loading">Carregando...</div>;
  }
  
  // Determinar quais dados de trace exibir (originais ou simulados)
  const displayTraceData = useSimulatedData ? dynamicTraceData : currentChallenge.trace;
  
  return (
    <>
      <Head>
        <title>{currentChallenge.title} | Portfolio de Algoritmos</title>
        <meta name="description" content={`Solução e explicação para o desafio ${currentChallenge.title}`} />
      </Head>
      
      <header className="main-header">
        <h1>{currentChallenge.title}</h1>
        <ThemeToggle />
        <ChallengeTabs />
      </header>
      
      <section id="enunciado" className={`content-section ${activeTab === 'enunciado' ? 'active' : ''}`}>
        <div className="enunciado-container">
          <div className="enunciado-header">
            <div className="enunciado-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="currentColor"/>
                <path d="M11 7H13V14H11V7Z" fill="currentColor"/>
              </svg>
            </div>
            <h2>Enunciado do Desafio</h2>
          </div>
          
          <div className="enunciado-content">
            <div className="enunciado-card" dangerouslySetInnerHTML={{ __html: currentChallenge.statement }} />
            
            <div className="enunciado-dicas">
              <div className="enunciado-dicas-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                  <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="currentColor"/>
                  <path d="M11 7H13V14H11V7Z" fill="currentColor"/>
                </svg>
                <h3>Dicas para solução</h3>
              </div>
              <ul className="enunciado-dicas-list">
                <li>Leia o enunciado com atenção para entender completamente o problema</li>
                <li>Identifique as entradas e saídas esperadas</li>
                <li>Considere casos de borda e exceções</li>
                <li>Pense na lógica antes de implementar o código</li>
              </ul>
              
              <div className="enunciado-action">
                <button 
                  className="ver-solucao-btn" 
                  onClick={() => setActiveTab('solucao')}
                  aria-label="Ver solução do desafio"
                >
                  Ver Solução
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="solucao" className={`content-section ${activeTab === 'solucao' ? 'active' : ''}`}>
        <Solution
          code={currentChallenge.code}
          explanation={currentChallenge.explanation}
        />
      </section>
      
      <section id="estudo-mesa" className={`content-section ${activeTab === 'estudo-mesa' ? 'active' : ''}`}>
        <div className="estudo-mesa-header">
          <h3>Estudo de Mesa</h3>
          
          {useSimulatedData && (
            <button 
              className="reset-trace-btn" 
              onClick={handleResetTrace}
              title="Voltar aos dados originais"
            >
              Dados Originais
            </button>
          )}
        </div>
        
        <ConsoleSimulator 
          code={currentChallenge.code} 
          onSimulationComplete={handleSimulationComplete} 
        />
        
        <div className="trace-container">
          <TraceTable traceData={displayTraceData} />
        </div>
      </section>
    </>
  );
};

export default ChallengePage; 
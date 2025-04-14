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
        <div dangerouslySetInnerHTML={{ __html: currentChallenge.statement }} />
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
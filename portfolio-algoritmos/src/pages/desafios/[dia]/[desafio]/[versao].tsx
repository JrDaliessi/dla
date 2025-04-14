import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ThemeToggle from '../../../../components/ui/ThemeToggle';
import ChallengeTabs from '../../../../components/ChallengeTabs';
import Solution from '../../../../components/Solution';
import TraceTable from '../../../../components/TraceTable';
import { useChallenges } from '../../../../contexts/ChallengeContext';

const ChallengePage: NextPage = () => {
  const router = useRouter();
  const { dia, desafio, versao } = router.query;
  const { 
    loadChallenge, 
    currentChallenge, 
    activeTab, 
    setActiveTab 
  } = useChallenges();
  
  useEffect(() => {
    if (dia && desafio && versao && typeof dia === 'string' && typeof desafio === 'string' && typeof versao === 'string') {
      const challengeId = `${dia}-${desafio}-${versao}`;
      loadChallenge(challengeId);
    }
  }, [dia, desafio, versao, loadChallenge]);
  
  if (!currentChallenge) {
    return <div className="loading">Carregando...</div>;
  }
  
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
        <h3>Estudo de Mesa</h3>
        <TraceTable traceData={currentChallenge.trace} />
      </section>
    </>
  );
};

export default ChallengePage; 
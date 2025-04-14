import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import ThemeToggle from '../components/ui/ThemeToggle';
import ChallengeTabs from '../components/ChallengeTabs';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio de Desafios de Algoritmos</title>
        <meta name="description" content="Portfólio de desafios de algoritmos com soluções e estudos de mesa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="main-header">
        <h1>Portfolio de Desafios de Algoritmos</h1>
        <ThemeToggle />
      </header>
      
      <section id="enunciado" className="content-section active">
        <div className="welcome-message">
          <h2>Bem-vindo ao meu portfólio de algoritmos!</h2>
          <p>Este é um espaço onde compartilho meus desafios de algoritmos, soluções e estudos detalhados.</p>
          <p>Selecione um desafio no menu lateral para começar a explorar.</p>
        </div>
      </section>
    </>
  );
};

export default HomePage; 
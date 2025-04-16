import '@/styles/globals.css';
import { ChallengeProvider } from '@/contexts/ChallengeContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Layout from '@/components/layouts/Layout';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

// Estende a interface Window para incluir Prism
declare global {
  interface Window {
    Prism: {
      highlightElement: (element: HTMLElement) => void;
      manual?: boolean;
    };
  }
}

export default function App({ Component, pageProps }: AppProps) {
  // Carrega o tema Dracula para Prism.js
  useEffect(() => {
    // Adiciona classe para ativar o tema Dracula
    document.documentElement.classList.add('prism-dracula');
    
    // Inicializa o Prism.js para coloração sintática
    if (typeof window !== 'undefined' && window.Prism) {
      // Aplica highlighting em todos os blocos de código
      const codeBlocks = document.querySelectorAll('pre code');
      codeBlocks.forEach((block) => {
        window.Prism.highlightElement(block as HTMLElement);
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio de Desafios de Algoritmos</title>
        <meta name="description" content="Portfólio de desafios de algoritmos com explicações detalhadas e estudos de mesa." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f8f9fa" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap" 
          rel="stylesheet"
        />
      </Head>
      
      <Script
        src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-javascript.min.js"
        strategy="beforeInteractive"
      />
      
      <ThemeProvider>
        <ChallengeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChallengeProvider>
      </ThemeProvider>
    </>
  );
} 
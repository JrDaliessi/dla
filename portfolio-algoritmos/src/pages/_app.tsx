import '@/styles/globals.css';
import { ChallengeProvider } from '@/contexts/ChallengeContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Layout from '@/components/layouts/Layout';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  // Adiciona a classe do tema quando o componente é montado
  useEffect(() => {
    // Adiciona classe para ativar o tema Dracula
    document.documentElement.classList.add('prism-dracula');
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio de Desafios de Algoritmos</title>
        <meta name="description" content="Portfólio de desafios de algoritmos com explicações detalhadas e estudos de mesa." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f8f9fa" />
      </Head>
      
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
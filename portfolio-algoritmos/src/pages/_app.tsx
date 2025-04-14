import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { ThemeProvider } from '../contexts/ThemeContext';
import { ChallengeProvider } from '../contexts/ChallengeContext';
import Layout from '../components/layouts/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
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

export default MyApp; 
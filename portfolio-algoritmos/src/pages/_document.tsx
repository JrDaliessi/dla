import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="pt-BR" className="prism-dracula">
      <Head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        
        {/* Fonte para código */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Tema Dracula para Prism.js */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-dracula.min.css" 
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        
        {/* Scripts para Prism.js */}
        <Script
          src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-javascript.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
} 
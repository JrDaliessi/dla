import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR" className="prism-dracula">
      <Head>
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
      </body>
    </Html>
  );
} 
import React, { useEffect, useRef } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'javascript',
  showLineNumbers = true,
  className = '',
}) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Aplica a formatação de sintaxe quando o componente é montado ou o código muda
    if (codeRef.current && typeof window !== 'undefined' && window.Prism) {
      window.Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const languageClass = `language-${language}`;
  const lineNumbersClass = showLineNumbers ? 'line-numbers' : '';
  const combinedClassName = `${languageClass} ${lineNumbersClass} ${className}`.trim();

  return (
    <pre className={lineNumbersClass}>
      <code ref={codeRef} className={combinedClassName}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock; 
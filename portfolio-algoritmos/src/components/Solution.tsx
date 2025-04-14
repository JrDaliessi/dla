import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface SolutionProps {
  code: string;
  explanation: string;
}

const Solution: React.FC<SolutionProps> = ({ code, explanation }) => {
  const codeRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    // Aplicar formatação de sintaxe (Prism.js)
    if (typeof window !== 'undefined' && window.Prism && codeRef.current) {
      window.Prism.highlightElement(codeRef.current);
    }
  }, [code, theme]);
  
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    
    // Fornecer feedback visual (pode ser melhorado com um componente de Toast)
    const button = document.querySelector('.copy-btn');
    if (button) {
      const originalText = button.innerHTML;
      button.innerHTML = 'Copiado! <i class="fas fa-check"></i>';
      setTimeout(() => {
        button.innerHTML = originalText;
      }, 2000);
    }
  };
  
  return (
    <>
      <div className="code-container">
        <div className="code-header">
          <h3>Solução</h3>
          <button className="copy-btn" onClick={handleCopyCode}>
            Copiar <i className="fas fa-copy"></i>
          </button>
        </div>
        <pre>
          <code ref={codeRef} className="language-javascript">
            {code}
          </code>
        </pre>
      </div>
      
      <div className="explanation">
        <h3>Explicação</h3>
        <div dangerouslySetInnerHTML={{ __html: explanation }} />
      </div>
    </>
  );
};

export default Solution; 
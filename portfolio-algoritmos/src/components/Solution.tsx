import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface SolutionProps {
  code: string;
  explanation: string;
}

const Solution: React.FC<SolutionProps> = ({ code, explanation }) => {
  const codeRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const [isCopied, setIsCopied] = useState(false);
  const [isExplanationExpanded, setIsExplanationExpanded] = useState(true);
  
  useEffect(() => {
    // Aplicar formatação de sintaxe (Prism.js)
    if (typeof window !== 'undefined' && window.Prism && codeRef.current) {
      window.Prism.highlightElement(codeRef.current);
    }
  }, [code, theme]);
  
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    
    // Reset estado após 2 segundos
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  
  const toggleExplanation = () => {
    setIsExplanationExpanded(!isExplanationExpanded);
  };
  
  // Processa a explicação para melhorar a formatação
  const processExplanation = () => {
    // Mantém o HTML original, pois já tem formatação própria nos desafios
    return explanation;
  };
  
  return (
    <div className="solution-container">
      <div className="code-container">
        <div className="code-header">
          <h3>Solução</h3>
          <div className="code-actions">
            <button 
              className={`copy-btn ${isCopied ? 'copied' : ''}`} 
              onClick={handleCopyCode}
              aria-label="Copiar código"
              title="Copiar código"
            >
              {isCopied ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Copiar código</span>
                </>
              )}
            </button>
          </div>
        </div>
        <div className="code-scroll">
          <pre>
            <code ref={codeRef} className="language-javascript">
              {code}
            </code>
          </pre>
        </div>
      </div>
      
      <div className={`explanation-container ${isExplanationExpanded ? 'expanded' : ''}`}>
        <div 
          className="explanation-header"
          onClick={toggleExplanation}
        >
          <h3>Explicação</h3>
          <div className="explanation-toggle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d={isExplanationExpanded ? "M19 15L12 8L5 15" : "M5 9L12 16L19 9"} 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        
        {isExplanationExpanded && (
          <div className="explanation-content">
            <div dangerouslySetInnerHTML={{ __html: processExplanation() }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Solution; 
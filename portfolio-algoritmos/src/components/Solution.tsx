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
  
  // Função para formatar e indentar o conteúdo da explicação
  const formatExplanation = (content: string): string => {
    // Adiciona classes para melhorar a formatação de listas e parágrafos
    let formatted = content
      // Melhora a indentação das listas
      .replace(/<ul>/g, '<ul class="explanation-list">')
      .replace(/<ol>/g, '<ol class="explanation-list">')
      .replace(/<li>/g, '<li class="explanation-item">')
      // Adiciona espaçamento para parágrafos
      .replace(/<p>/g, '<p class="explanation-paragraph">')
      // Destaca títulos e subtítulos
      .replace(/<h4>/g, '<h4 class="explanation-subtitle">')
      .replace(/<h3>/g, '<h3 class="explanation-title">')
      // Formata blocos de código dentro da explicação
      .replace(/<pre>/g, '<pre class="explanation-code-block dracula-vscode">')
      .replace(/<code>/g, '<code class="explanation-code dracula-vscode">')
      // Adiciona seções para organizar melhor o conteúdo
      .replace(/<h2>/g, '<div class="explanation-section"><h2 class="explanation-section-title">')
      .replace(/<\/h2>/g, '</h2>')
      .replace(/<h3>/g, '</div><div class="explanation-section"><h3 class="explanation-section-title">')
      .replace(/<\/h3>/g, '</h3>')
      // Adiciona estilo para a classe code-explanation (análise detalhada)
      .replace(/<div class="code-explanation">/g, '<div class="code-explanation analysis-section dracula-theme">');
    
    // Adiciona div de fechamento da última seção e remove a div vazia do início
    formatted = formatted + '</div>';
    formatted = formatted.replace('<div class="explanation-section"></div>', '');
    
    // Melhora a formatação de trechos importantes
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="explanation-highlight">$1</strong>');

    // Adiciona atributos de acessibilidade para links
    formatted = formatted.replace(/<a /g, '<a aria-label="Link externo" ');
    
    return formatted;
  };

  useEffect(() => {
    // Aplicar formatação de sintaxe (Prism.js) com tema Dracula
    if (typeof window !== 'undefined' && window.Prism && codeRef.current) {
      // Adiciona classe para usar o tema Dracula do VSCode
      document.documentElement.classList.add('prism-dracula');
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
  
  return (
    <div className="solution-container dracula-theme">
      <div className="code-container" role="region" aria-label="Código da solução">
        <div className="code-header">
          <h3>Solução</h3>
          <div className="code-actions">
            <button 
              className={`copy-btn ${isCopied ? 'copied' : ''}`} 
              onClick={handleCopyCode}
              aria-label={isCopied ? "Código copiado" : "Copiar código"}
              title={isCopied ? "Código copiado" : "Copiar código"}
            >
              {isCopied ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
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
          <pre className="dracula-vscode-block">
            <code ref={codeRef} className="language-javascript dracula-vscode" tabIndex={0}>
              {code}
            </code>
          </pre>
        </div>
      </div>
      
      <div 
        className={`explanation-container ${isExplanationExpanded ? 'expanded' : ''}`}
        role="region" 
        aria-label="Explicação da solução"
      >
        <div 
          className="explanation-header"
          onClick={toggleExplanation}
          onKeyDown={(e) => e.key === 'Enter' && toggleExplanation()}
          role="button"
          tabIndex={0}
          aria-expanded={isExplanationExpanded}
          aria-controls="explanation-content"
        >
          <h3>Explicação</h3>
          <div className="explanation-toggle" aria-hidden="true">
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
          <div id="explanation-content" className="explanation-content">
            <div dangerouslySetInnerHTML={{ __html: formatExplanation(explanation) }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Solution; 
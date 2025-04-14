import React, { useState, useRef, useEffect } from 'react';
import { TraceStep } from '@/types';

interface ConsoleSimulatorProps {
  code: string;
  onSimulationComplete: (traceData: TraceStep[]) => void;
}

const ConsoleSimulator: React.FC<ConsoleSimulatorProps> = ({ code, onSimulationComplete }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [promptDialogOpen, setPromptDialogOpen] = useState(false);
  const [promptValue, setPromptValue] = useState('');
  const [promptMessage, setPromptMessage] = useState('');
  const [promptCallback, setPromptCallback] = useState<((value: string) => void) | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const consoleRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Efeito para rolar para o final do console quando a saída mudar
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [output]);

  // Efeito para focar no input do prompt quando abrir
  useEffect(() => {
    if (promptDialogOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [promptDialogOpen]);

  // Função para executar o código do algoritmo
  const runSimulation = () => {
    setIsRunning(true);
    setOutput([]);
    setIsCollapsed(false);

    // Preparar um ambiente seguro para execução
    const traceData: TraceStep[] = [];
    let step = 1;
    let userInputs: {[key: string]: string} = {};

    // Mock do prompt para capturar entradas do usuário
    const mockPrompt = (message: string) => {
      return new Promise<string>((resolve) => {
        setPromptMessage(message);
        setPromptValue('');
        setPromptDialogOpen(true);

        setPromptCallback(() => (value: string) => {
          // Armazenar o valor do input para uso na tabela de trace
          const inputVarName = message.includes("primeira vez") ? "primeiraVezInput" : 
                               message.includes("idade") ? "idadeInput" : 
                               `input_${Object.keys(userInputs).length}`;
          
          userInputs[inputVarName] = value;
          
          // Adicionar ao trace a entrada do usuário
          traceData.push({
            step,
            algoritmo: "Input do usuário",
            instrucao: `prompt("${message}")`,
            [inputVarName]: value,
            explanation: `Usuário forneceu entrada: ${value} para a pergunta "${message}"`
          });
          
          step++;
          
          // Registrar no console de saída
          setOutput(prev => [...prev, `> Pergunta: ${message}`]);
          setOutput(prev => [...prev, `$ Resposta: ${value}`]);
          
          resolve(value);
        });
      });
    };

    // Console mockado para capturar logs
    const mockConsole = {
      log: (...args: any[]) => {
        const logMessage = args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' ');
        
        setOutput(prev => [...prev, `> ${logMessage}`]);
        
        // Adicionar informações à tabela de trace
        const variables: Record<string, any> = {};
        
        // Tentar extrair variáveis da mensagem (formato "variável: valor")
        const varMatch = logMessage.match(/(\w+):\s*([^,]+)/g);
        if (varMatch) {
          varMatch.forEach(match => {
            const [varName, varValue] = match.split(':').map(s => s.trim());
            variables[varName] = varValue;
          });
        }
        
        // Adicionar passo à tabela de trace
        traceData.push({
          step,
          algoritmo: "Saída do console",
          instrucao: `console.log("${logMessage}")`,
          saida: logMessage,
          ...variables,
          explanation: `Console: ${logMessage}`
        });
        
        step++;
      },
      
      trace: (message: string, variables: Record<string, any> = {}) => {
        setOutput(prev => [...prev, `# ${message}`]);
        
        // Adicionar passo à tabela de trace diretamente com variáveis
        traceData.push({
          step,
          algoritmo: "Trace",
          ...variables,
          explanation: message
        });
        
        step++;
      }
    };

    // Função para capturar estruturas condicionais
    const trackConditional = (condition: any, conditionStr: string) => {
      const result = Boolean(condition);
      traceData.push({
        step,
        algoritmo: "Verificação de condição",
        instrucao: conditionStr,
        resultado: result ? "true" : "false",
        explanation: `Avaliação da condição: ${conditionStr} resultou em ${result}`
      });
      step++;
      return result;
    };

    try {
      // Substituir prompt(), console.log e condicionais no código
      let modifiedCode = code
        .replace(/prompt\("([^"]+)"\)/g, 'await mockPrompt("$1")')
        .replace(/console\.log\(/g, 'mockConsole.log(')
        .replace(/\/\/\s*trace:\s*(.+)$/gm, 'mockConsole.trace($1);');
      
      // Substituir estruturas condicionais para rastreamento - com escape de aspas
      modifiedCode = modifiedCode
        .replace(/if\s*\((.*?)\)\s*{/g, (match, group) => {
          // Escapar aspas e converter para string segura
          const escapedCondition = group.replace(/"/g, '\\"');
          return `if(trackConditional(${group}, "${escapedCondition}")) {`;
        })
        .replace(/}\s*else\s*if\s*\((.*?)\)\s*{/g, (match, group) => {
          // Escapar aspas e converter para string segura
          const escapedCondition = group.replace(/"/g, '\\"');
          return `} else if(trackConditional(${group}, "${escapedCondition}")) {`;
        });

      // Criar função executável com async para suportar await no prompt
      const executableCode = `
        (async function() {
          try {
            ${modifiedCode}
          } catch (e) {
            console.error(e);
          }
        })();
      `;
      
      // Executar com nosso console mockado
      const originalConsole = window.console;
      const originalPrompt = window.prompt;
      window.console = mockConsole as any;
      window.prompt = mockPrompt as any;
      
      // Usar setTimeout para não bloquear a interface
      setTimeout(() => {
        try {
          // eslint-disable-next-line no-eval
          eval(executableCode);
          
          // Verificar se ainda temos diálogo de prompt aberto
          if (!promptDialogOpen) {
            setOutput(prev => [...prev, "✅ Execução concluída com sucesso!"]);
            window.console = originalConsole;
            window.prompt = originalPrompt;
            setIsRunning(false);
            onSimulationComplete(traceData);
          }
        } catch (err: any) {
          setOutput(prev => [...prev, `❌ Erro: ${err.message}`]);
          traceData.push({
            step,
            algoritmo: "Erro",
            error: err.message,
            explanation: `Erro: ${err.message}`
          });
          window.console = originalConsole;
          window.prompt = originalPrompt;
          setIsRunning(false);
          onSimulationComplete(traceData);
        }
      }, 100);
      
    } catch (err: any) {
      setOutput(prev => [...prev, `❌ Erro: ${err.message}`]);
      setIsRunning(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOutput(prev => [...prev, `$ ${input}`]);
    setInput('');
  };

  const handlePromptSubmit = () => {
    if (promptCallback) {
      promptCallback(promptValue);
      setPromptDialogOpen(false);
      setPromptCallback(null);
    }
  };

  const handlePromptCancel = () => {
    if (promptCallback) {
      promptCallback('');
      setPromptDialogOpen(false);
      setPromptCallback(null);
    }
  };

  const toggleConsole = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`console-simulator ${!isCollapsed ? 'expanded' : ''}`}>
      <div className="console-header" onClick={toggleConsole}>
        <div className="console-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 9L12 5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 15L12 19L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3>Simulador de Console</h3>
        </div>
        
        <div className="console-actions">
          <button 
            className="run-btn" 
            onClick={(e) => {
              e.stopPropagation();
              runSimulation();
            }}
            disabled={isRunning || promptDialogOpen}
          >
            {isRunning ? (
              <>
                <svg className="loading-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Executando...
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3L19 12L5 21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Executar Código
              </>
            )}
          </button>
          
          <div className="console-toggle">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={isCollapsed ? "M19 9L12 16L5 9" : "M19 15L12 8L5 15"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      
      {!isCollapsed && (
        <div className="console-body">
          <div className="console-output" ref={consoleRef}>
            {output.length === 0 ? (
              <div className="console-empty-state">
                <p>Clique em "Executar Código" para ver a saída.</p>
              </div>
            ) : (
              output.map((line, index) => (
                <div 
                  key={index}
                  className={`console-line ${
                    line.startsWith('❌') ? 'error' : 
                    line.startsWith('✅') ? 'success' : 
                    line.startsWith('#') ? 'trace' :
                    line.startsWith('$') ? 'input' : 
                    'output'
                  }`}
                >
                  {line}
                </div>
              ))
            )}
          </div>

          <form className="console-input-form" onSubmit={handleInputSubmit}>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Digite e pressione Enter..."
              disabled={isRunning || promptDialogOpen}
            />
            <button type="submit" disabled={isRunning || promptDialogOpen || !input.trim()}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      )}
      
      {/* Modal de prompt */}
      {promptDialogOpen && (
        <div className="prompt-dialog-overlay">
          <div className="prompt-dialog">
            <div className="prompt-dialog-header">
              <h4>Entrada Necessária</h4>
            </div>
            <div className="prompt-dialog-content">
              <p>{promptMessage}</p>
              <input
                type="text"
                value={promptValue}
                onChange={(e) => setPromptValue(e.target.value)}
                placeholder="Digite sua resposta..."
                ref={inputRef}
                autoFocus
              />
            </div>
            <div className="prompt-dialog-actions">
              <button onClick={handlePromptCancel}>Cancelar</button>
              <button className="btn-primary" onClick={handlePromptSubmit}>Enviar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsoleSimulator; 
import React, { useState, useRef } from 'react';
import { TraceStep } from '@/types';

interface ConsoleSimulatorProps {
  code: string;
  onSimulationComplete: (traceData: TraceStep[]) => void;
}

const ConsoleSimulator: React.FC<ConsoleSimulatorProps> = ({ code, onSimulationComplete }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const consoleRef = useRef<HTMLDivElement>(null);

  // Função para executar o código do algoritmo
  const runSimulation = () => {
    setIsRunning(true);
    setOutput([]);

    // Preparar um ambiente seguro para execução
    const traceData: TraceStep[] = [];
    let step = 1;

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
          ...variables,
          explanation: message
        });
        
        step++;
      }
    };

    try {
      // Substituir console.log no código para usar nosso mock
      const modifiedCode = code
        .replace(/console\.log\(/g, 'mockConsole.log(')
        .replace(/\/\/\s*trace:\s*(.+)$/gm, 'mockConsole.trace($1);');

      // Criar função executável
      const executableCode = `
        (function() {
          ${modifiedCode}
        })();
      `;
      
      // Executar com nosso console mockado
      const originalConsole = window.console;
      window.console = mockConsole as any;
      
      // Usar setTimeout para não bloquear a interface
      setTimeout(() => {
        try {
          // eslint-disable-next-line no-eval
          eval(executableCode);
          setOutput(prev => [...prev, "✅ Execução concluída com sucesso!"]);
        } catch (err: any) {
          setOutput(prev => [...prev, `❌ Erro: ${err.message}`]);
          traceData.push({
            step,
            error: err.message,
            explanation: `Erro: ${err.message}`
          });
        } finally {
          window.console = originalConsole;
          setIsRunning(false);
          onSimulationComplete(traceData);
          
          // Rolar para o final do console
          if (consoleRef.current) {
            consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
          }
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

  return (
    <div className="console-simulator">
      <div className="console-header">
        <h3>Simulador de Console</h3>
        <button 
          className="run-btn" 
          onClick={runSimulation}
          disabled={isRunning}
        >
          {isRunning ? 'Executando...' : 'Executar Código'}
        </button>
      </div>
      
      <div className="console-output" ref={consoleRef}>
        {output.map((line, index) => (
          <div 
            key={index}
            className={`console-line ${
              line.startsWith('❌') ? 'error' : 
              line.startsWith('✅') ? 'success' : 
              line.startsWith('#') ? 'trace' :
              line.startsWith('$') ? 'input' : 'output'
            }`}
          >
            {line}
          </div>
        ))}
      </div>
      
      <form className="console-input-form" onSubmit={handleInputSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Digite um valor e pressione Enter..."
          disabled={isRunning}
        />
        <button type="submit" disabled={isRunning}>Enviar</button>
      </form>
    </div>
  );
};

export default ConsoleSimulator; 
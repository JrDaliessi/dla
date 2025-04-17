import React, { useMemo, useState } from 'react';
import { TraceStep } from '@/types';

interface TraceTableProps {
  traceData: TraceStep[];
}

const TraceTable: React.FC<TraceTableProps> = ({ traceData }) => {
  const [expandedAlgoritmo, setExpandedAlgoritmo] = useState<string | null>(null);

  // Agrupar os passos por algoritmo se a propriedade existir
  const algoritmoGroups = useMemo(() => {
    // Se não há dados, retorna um objeto vazio
    if (!traceData || traceData.length === 0) {
      return {};
    }
    
    // Verifica se algum item tem a propriedade 'algoritmo'
    const hasAlgoritmoProperty = traceData.some(step => step.algoritmo);
    
    if (!hasAlgoritmoProperty) {
      // Se não tiver a propriedade algoritmo, retorna um único grupo com todos os passos
      return { "Algoritmo": traceData };
    }
    
    // Agrupa os passos por algoritmo
    return traceData.reduce((groups, step) => {
      const algoritmoKey = step.algoritmo || "Sem classificação";
      if (!groups[algoritmoKey]) {
        groups[algoritmoKey] = [];
      }
      groups[algoritmoKey].push(step);
      return groups;
    }, {} as Record<string, TraceStep[]>);
  }, [traceData]);
  
  // Pré-calcular as colunas para cada grupo em um único hook
  const groupColumns = useMemo(() => {
    const result: Record<string, string[]> = {};
    
    Object.entries(algoritmoGroups).forEach(([algoritmoName, steps]) => {
      const columnsSet = new Set<string>();
      
      steps.forEach(step => {
        Object.keys(step).forEach(key => {
          if (key !== 'step' && key !== 'explanation' && key !== 'algoritmo') {
            columnsSet.add(key);
          }
        });
      });
      
      result[algoritmoName] = Array.from(columnsSet);
    });
    
    return result;
  }, [algoritmoGroups]);
  
  // Verificar se há dados no trace - APÓS chamar todos os hooks
  if (!traceData || traceData.length === 0) {
    return (
      <div className="trace-empty-state" role="alert" aria-live="polite">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p>Não há estudo de mesa disponível para este desafio.</p>
      </div>
    );
  }
  
  // Se não houver grupos após o processamento, também exiba a mensagem
  if (Object.keys(algoritmoGroups).length === 0) {
    return (
      <div className="trace-empty-state" role="alert" aria-live="polite">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p>Não há estudo de mesa disponível para este desafio.</p>
      </div>
    );
  }
  
  const toggleAlgoritmo = (algoritmoName: string) => {
    if (expandedAlgoritmo === algoritmoName) {
      setExpandedAlgoritmo(null);
    } else {
      setExpandedAlgoritmo(algoritmoName);
    }
  };
  
  return (
    <div className="trace-tables-container" role="region" aria-label="Estudo de mesa do algoritmo">
      {Object.entries(algoritmoGroups).map(([algoritmoName, steps], groupIndex) => {
        // Obter as colunas pré-calculadas para este grupo
        const columns = groupColumns[algoritmoName] || [];
        const isExpanded = expandedAlgoritmo === algoritmoName || Object.keys(algoritmoGroups).length === 1;
        const sectionId = `trace-table-${groupIndex}`;
        
        return (
          <div key={groupIndex} className={`trace-table-group ${isExpanded ? 'expanded' : ''}`}>
            {Object.keys(algoritmoGroups).length > 1 && (
              <div 
                className="algoritmo-header"
                onClick={() => toggleAlgoritmo(algoritmoName)}
                onKeyDown={(e) => e.key === 'Enter' && toggleAlgoritmo(algoritmoName)}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                aria-controls={sectionId}
              >
                <h3 className="algoritmo-title">{algoritmoName}</h3>
                <div className="algoritmo-toggle" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={isExpanded ? "M19 15L12 8L5 15" : "M5 9L12 16L19 9"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            )}
            
            {isExpanded && (
              <div className="trace-table-content" id={sectionId}>
                <div className="trace-table-scroll">
                  <table className="trace-table" aria-label={`Passos do algoritmo ${algoritmoName}`}>
                    <thead>
                      <tr>
                        <th className="step-column" scope="col">Passo</th>
                        {columns.map(column => (
                          <th key={column} scope="col">
                            {column.charAt(0).toUpperCase() + column.slice(1)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {steps.map((step, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'row-even' : 'row-odd'}>
                          <td className="step-column" data-label="Passo">{step.step}</td>
                          {columns.map(column => {
                            const columnLabel = column.charAt(0).toUpperCase() + column.slice(1);
                            const value = step[column] !== undefined ? String(step[column]) : '-';
                            const cellClass = `${column}-column`;
                            
                            // Aplicar classes especiais para diferentes tipos de valores
                            const isVariableValue = typeof step[column] === 'string' && 
                              !['undefined', 'null', '-'].includes(String(step[column])) &&
                              !String(step[column]).includes('(');
                            
                            const isFunctionCall = typeof step[column] === 'string' && 
                              String(step[column]).includes('(');
                            
                            let displayValue = value;
                            let additionalClass = '';
                            
                            if (isVariableValue) {
                              additionalClass = 'variable-value';
                            } else if (isFunctionCall) {
                              additionalClass = 'function-call';
                            }
                            
                            return (
                              <td 
                                key={column} 
                                className={`${cellClass} ${additionalClass}`}
                                data-label={columnLabel}
                              >
                                {displayValue}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {steps.some(step => step.explanation) && (
                  <div className="trace-explanation" aria-labelledby={`explanation-header-${groupIndex}`}>
                    <h4 id={`explanation-header-${groupIndex}`}>Observações:</h4>
                    <ul className="explanation-list">
                      {steps.map((step, index) => (
                        step.explanation && (
                          <li key={index} className="explanation-item">
                            <span className="explanation-step">Passo {step.step}:</span> {step.explanation}
                          </li>
                        )
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TraceTable; 
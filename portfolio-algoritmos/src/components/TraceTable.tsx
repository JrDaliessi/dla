import React, { useMemo } from 'react';
import { TraceStep } from '@/types';

interface TraceTableProps {
  traceData: TraceStep[];
}

const TraceTable: React.FC<TraceTableProps> = ({ traceData }) => {
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
    return <p>Não há estudo de mesa disponível para este desafio.</p>;
  }
  
  // Se não houver grupos após o processamento, também exiba a mensagem
  if (Object.keys(algoritmoGroups).length === 0) {
    return <p>Não há estudo de mesa disponível para este desafio.</p>;
  }
  
  return (
    <div className="trace-tables-container">
      {Object.entries(algoritmoGroups).map(([algoritmoName, steps], groupIndex) => {
        // Obter as colunas pré-calculadas para este grupo
        const columns = groupColumns[algoritmoName] || [];
        
        return (
          <div key={groupIndex} className="trace-table-group">
            {Object.keys(algoritmoGroups).length > 1 && (
              <h3 className="algoritmo-title">{algoritmoName}</h3>
            )}
            
            <div className="trace-table">
              <table>
                <thead>
                  <tr>
                    <th>Passo</th>
                    {columns.map(column => (
                      <th key={column}>
                        {column.charAt(0).toUpperCase() + column.slice(1)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {steps.map((step, index) => (
                    <tr key={index}>
                      <td>{step.step}</td>
                      {columns.map(column => (
                        <td key={column}>{step[column] !== undefined ? step[column] : '-'}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="trace-explanation">
                <h4>Observações:</h4>
                <ul>
                  {steps.map((step, index) => (
                    step.explanation && (
                      <li key={index}>
                        <strong>Passo {step.step}:</strong> {step.explanation}
                      </li>
                    )
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TraceTable; 
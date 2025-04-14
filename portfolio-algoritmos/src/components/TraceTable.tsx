import React, { useMemo } from 'react';
import { TraceStep } from '@/types';

interface TraceTableProps {
  traceData: TraceStep[];
}

const TraceTable: React.FC<TraceTableProps> = ({ traceData }) => {
  // Descobrir quais colunas incluir com base nos dados disponíveis
  const columns = useMemo(() => {
    const columnsSet = new Set<string>();
    
    if (!traceData || traceData.length === 0) return [];
    
    traceData.forEach(step => {
      Object.keys(step).forEach(key => {
        if (key !== 'step' && key !== 'explanation') {
          columnsSet.add(key);
        }
      });
    });
    
    return Array.from(columnsSet);
  }, [traceData]);
  
  if (!traceData || traceData.length === 0) {
    return <p>Não há estudo de mesa disponível para este desafio.</p>;
  }
  
  return (
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
          {traceData.map((step, index) => (
            <tr key={index}>
              <td>{step.step}</td>
              {columns.map(column => (
                <td key={column}>{step[column] !== undefined ? step[column] : '-'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      <div id="trace-explanation">
        <h4>Observações:</h4>
        <ul>
          {traceData.map((step, index) => (
            step.explanation && (
              <li key={index}>
                <strong>Passo {step.step}:</strong> {step.explanation}
              </li>
            )
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TraceTable; 
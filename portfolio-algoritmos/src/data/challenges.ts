import { ChallengeDay } from '../types';

export const challengesData: ChallengeDay[] = [
  {
    day: "Dia 1",
    challenges: [
      {
        id: "dia1-desafio1",
        title: "Fibonacci",
        versions: [
          {
            id: "dia1-desafio1-v1",
            title: "Versão Recursiva",
            statement: `<h2>Sequência de Fibonacci - Versão Recursiva</h2>
                        <p>Implemente uma função recursiva para calcular o n-ésimo número da sequência de Fibonacci.</p>
                        <p>Na matemática, a sequência de Fibonacci é uma sequência de números inteiros, começando normalmente por 0 e 1, na qual cada termo subsequente corresponde à soma dos dois anteriores.</p>
                        <p>Por exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...</p>
                        <h3>Entrada:</h3>
                        <p>Um número inteiro não negativo n.</p>
                        <h3>Saída:</h3>
                        <p>O n-ésimo número na sequência de Fibonacci.</p>
                        <h3>Restrições:</h3>
                        <ul>
                            <li>0 ≤ n ≤ 30</li>
                        </ul>`,
            code: `function fibonacci(n) {
    // Casos base
    if (n <= 0) return 0;
    if (n === 1) return 1;
    
    // Chamada recursiva
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Exemplo de uso
console.log(fibonacci(10)); // Deve retornar 55`,
            explanation: `<p>Esta implementação usa o método recursivo para calcular a sequência de Fibonacci.</p>
                        <p>Recursão é quando uma função chama a si mesma para resolver um problema.</p>
                        <p>A função <code>fibonacci(n)</code> calcula o n-ésimo número da sequência de Fibonacci da seguinte maneira:</p>
                        <ul>
                            <li>Se n for 0, retorna 0 (caso base)</li>
                            <li>Se n for 1, retorna 1 (caso base)</li>
                            <li>Para qualquer outro n, retorna a soma de fibonacci(n-1) e fibonacci(n-2) (passo recursivo)</li>
                        </ul>
                        <p>No entanto, este método tem um problema de desempenho significativo para valores grandes de n, pois calcula os mesmos valores repetidamente.</p>`,
            trace: [
              {
                step: 1,
                call: "fibonacci(5)",
                n: 5,
                return: "fibonacci(4) + fibonacci(3)",
                explanation: "Para calcular fibonacci(5), precisamos de fibonacci(4) e fibonacci(3)"
              },
              {
                step: 2,
                call: "fibonacci(4)",
                n: 4,
                return: "fibonacci(3) + fibonacci(2)",
                explanation: "Para calcular fibonacci(4), precisamos de fibonacci(3) e fibonacci(2)"
              },
              {
                step: 3,
                call: "fibonacci(3)",
                n: 3,
                return: "fibonacci(2) + fibonacci(1)",
                explanation: "Para calcular fibonacci(3), precisamos de fibonacci(2) e fibonacci(1)"
              },
              {
                step: 4,
                call: "fibonacci(2)",
                n: 2,
                return: "fibonacci(1) + fibonacci(0)",
                explanation: "Para calcular fibonacci(2), precisamos de fibonacci(1) e fibonacci(0)"
              },
              {
                step: 5,
                call: "fibonacci(1)",
                n: 1,
                return: "1",
                explanation: "Caso base: fibonacci(1) = 1"
              },
              {
                step: 6,
                call: "fibonacci(0)",
                n: 0,
                return: "0",
                explanation: "Caso base: fibonacci(0) = 0"
              },
              {
                step: 7,
                call: "fibonacci(2) (resultado)",
                n: 2,
                return: "1 + 0 = 1",
                explanation: "fibonacci(2) = fibonacci(1) + fibonacci(0) = 1 + 0 = 1"
              },
              {
                step: 8,
                call: "fibonacci(1) (novamente)",
                n: 1,
                return: "1",
                explanation: "Caso base: fibonacci(1) = 1"
              },
              {
                step: 9,
                call: "fibonacci(3) (resultado)",
                n: 3,
                return: "1 + 1 = 2",
                explanation: "fibonacci(3) = fibonacci(2) + fibonacci(1) = 1 + 1 = 2"
              },
              {
                step: 10,
                call: "fibonacci(2) (novamente)",
                n: 2,
                return: "1",
                explanation: "Já calculado: fibonacci(2) = 1"
              },
              {
                step: 11,
                call: "fibonacci(4) (resultado)",
                n: 4,
                return: "2 + 1 = 3",
                explanation: "fibonacci(4) = fibonacci(3) + fibonacci(2) = 2 + 1 = 3"
              },
              {
                step: 12,
                call: "fibonacci(3) (novamente)",
                n: 3,
                return: "2",
                explanation: "Já calculado: fibonacci(3) = 2"
              },
              {
                step: 13,
                call: "fibonacci(5) (resultado)",
                n: 5,
                return: "3 + 2 = 5",
                explanation: "fibonacci(5) = fibonacci(4) + fibonacci(3) = 3 + 2 = 5"
              }
            ]
          },
          {
            id: "dia1-desafio1-v2",
            title: "Versão Iterativa",
            statement: `<h2>Sequência de Fibonacci - Versão Iterativa</h2>
                        <p>Implemente uma função iterativa para calcular o n-ésimo número da sequência de Fibonacci.</p>
                        <p>Na matemática, a sequência de Fibonacci é uma sequência de números inteiros, começando normalmente por 0 e 1, na qual cada termo subsequente corresponde à soma dos dois anteriores.</p>
                        <p>Por exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...</p>
                        <h3>Entrada:</h3>
                        <p>Um número inteiro não negativo n.</p>
                        <h3>Saída:</h3>
                        <p>O n-ésimo número na sequência de Fibonacci.</p>
                        <h3>Restrições:</h3>
                        <ul>
                            <li>0 ≤ n ≤ 45</li>
                        </ul>`,
            code: `function fibonacci(n) {
    // Casos base
    if (n <= 0) return 0;
    if (n === 1) return 1;
    
    // Abordagem iterativa
    let a = 0;
    let b = 1;
    let resultado;
    
    for (let i = 2; i <= n; i++) {
        resultado = a + b;
        a = b;
        b = resultado;
    }
    
    return resultado;
}

// Exemplo de uso
console.log(fibonacci(10)); // Deve retornar 55`,
            explanation: `<p>Esta implementação usa o método iterativo para calcular a sequência de Fibonacci.</p>
                        <p>Em vez de chamar a função recursivamente, usamos um loop para calcular cada número da sequência:</p>
                        <ul>
                            <li>Inicializamos duas variáveis <code>a</code> e <code>b</code> com os dois primeiros números da sequência: 0 e 1.</li>
                            <li>Em cada iteração do loop, calculamos o próximo número <code>resultado</code> somando <code>a</code> e <code>b</code>.</li>
                            <li>Em seguida, atualizamos <code>a</code> para ser igual a <code>b</code> e <code>b</code> para ser igual ao <code>resultado</code>.</li>
                            <li>Continuamos este processo n-1 vezes para chegar ao n-ésimo número de Fibonacci.</li>
                        </ul>
                        <p>Esta abordagem é muito mais eficiente que a recursiva, com complexidade de tempo O(n) em vez de O(2^n).</p>`,
            trace: [
              {
                step: 1,
                call: "fibonacci(5)",
                n: 5,
                variaveis: "a = 0, b = 1",
                explanation: "Inicializamos as variáveis a = 0 e b = 1 (os dois primeiros números da sequência)"
              },
              {
                step: 2,
                iteracao: "i = 2",
                calculo: "resultado = 0 + 1 = 1",
                atualizacao: "a = 1, b = 1",
                explanation: "1ª iteração: resultado = a + b = 0 + 1 = 1, atualizamos a = 1 e b = 1"
              },
              {
                step: 3,
                iteracao: "i = 3",
                calculo: "resultado = 1 + 1 = 2",
                atualizacao: "a = 1, b = 2",
                explanation: "2ª iteração: resultado = a + b = 1 + 1 = 2, atualizamos a = 1 e b = 2"
              },
              {
                step: 4,
                iteracao: "i = 4",
                calculo: "resultado = 1 + 2 = 3",
                atualizacao: "a = 2, b = 3",
                explanation: "3ª iteração: resultado = a + b = 1 + 2 = 3, atualizamos a = 2 e b = 3"
              },
              {
                step: 5,
                iteracao: "i = 5",
                calculo: "resultado = 2 + 3 = 5",
                atualizacao: "a = 3, b = 5",
                explanation: "4ª iteração: resultado = a + b = 2 + 3 = 5, atualizamos a = 3 e b = 5"
              },
              {
                step: 6,
                call: "Fim do loop",
                return: "5",
                explanation: "Retornamos resultado = 5, que é o 5º número de Fibonacci"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    day: "Dia 2",
    challenges: [
      {
        id: "dia2-desafio1",
        title: "Busca Binária",
        versions: [
          {
            id: "dia2-desafio1-v1",
            title: "Implementação Básica",
            statement: `<h2>Busca Binária</h2>
                        <p>Implemente um algoritmo de busca binária para encontrar um elemento em um array ordenado.</p>
                        <p>A busca binária é um algoritmo eficiente para encontrar um item em uma lista ordenada de itens. Ele funciona dividindo repetidamente pela metade a porção da lista que pode conter o item, até reduzir as localizações possíveis a apenas uma.</p>
                        <h3>Entrada:</h3>
                        <p>Um array ordenado de números e um valor alvo para buscar.</p>
                        <h3>Saída:</h3>
                        <p>O índice do elemento no array, ou -1 se o elemento não existir no array.</p>`,
            code: `function buscaBinaria(array, alvo) {
    let inicio = 0;
    let fim = array.length - 1;
    
    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);
        
        // Encontrou o elemento
        if (array[meio] === alvo) {
            return meio;
        }
        
        // Elemento está na metade direita
        if (array[meio] < alvo) {
            inicio = meio + 1;
        } 
        // Elemento está na metade esquerda
        else {
            fim = meio - 1;
        }
    }
    
    return -1; // Elemento não encontrado
}

// Exemplo de uso
const arrayOrdenado = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(buscaBinaria(arrayOrdenado, 7)); // Deve retornar 3
console.log(buscaBinaria(arrayOrdenado, 6)); // Deve retornar -1`,
            explanation: `<p>A busca binária é um algoritmo eficiente para encontrar um item em uma lista ordenada:</p>
                        <ul>
                            <li>Inicializamos dois ponteiros <code>inicio</code> e <code>fim</code> que representam o intervalo de busca.</li>
                            <li>Em cada iteração, calculamos o ponto <code>meio</code> do intervalo atual.</li>
                            <li>Se o elemento no ponto médio for igual ao alvo, retornamos o índice.</li>
                            <li>Se o elemento no ponto médio for menor que o alvo, sabemos que o alvo deve estar na metade direita, então atualizamos <code>inicio = meio + 1</code>.</li>
                            <li>Se o elemento no ponto médio for maior que o alvo, sabemos que o alvo deve estar na metade esquerda, então atualizamos <code>fim = meio - 1</code>.</li>
                            <li>Continuamos este processo até encontrar o elemento ou até que o intervalo de busca esteja vazio (<code>inicio > fim</code>).</li>
                        </ul>
                        <p>A busca binária tem uma complexidade de tempo O(log n), o que a torna muito mais eficiente que uma busca linear para arrays grandes.</p>`,
            trace: [
              {
                step: 1,
                call: "buscaBinaria([1, 3, 5, 7, 9, 11, 13, 15, 17], 7)",
                inicializacao: "inicio = 0, fim = 8",
                explanation: "Inicializamos os ponteiros de início e fim para cobrir todo o array"
              },
              {
                step: 2,
                iteracao: 1,
                calculo: "meio = Math.floor((0 + 8) / 2) = 4",
                comparacao: "array[4] = 9, 9 > 7",
                atualizacao: "fim = meio - 1 = 3",
                explanation: "O elemento no meio (9) é maior que o alvo (7), então buscamos na metade esquerda"
              },
              {
                step: 3,
                iteracao: 2,
                calculo: "meio = Math.floor((0 + 3) / 2) = 1",
                comparacao: "array[1] = 3, 3 < 7",
                atualizacao: "inicio = meio + 1 = 2",
                explanation: "O elemento no meio (3) é menor que o alvo (7), então buscamos na metade direita"
              },
              {
                step: 4,
                iteracao: 3,
                calculo: "meio = Math.floor((2 + 3) / 2) = 2",
                comparacao: "array[2] = 5, 5 < 7",
                atualizacao: "inicio = meio + 1 = 3",
                explanation: "O elemento no meio (5) é menor que o alvo (7), então buscamos na metade direita"
              },
              {
                step: 5,
                iteracao: 4,
                calculo: "meio = Math.floor((3 + 3) / 2) = 3",
                comparacao: "array[3] = 7, 7 === 7",
                resultado: "return 3",
                explanation: "Encontramos o alvo 7 no índice 3, então retornamos 3"
              }
            ]
          }
        ]
      }
    ]
  }
]; 
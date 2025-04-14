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
  },
  {
    day: "Dia 3",
    challenges: [
      {
        id: "dia3-desafio1",
        title: "Operadores Aritméticos",
        versions: [
          {
            id: "dia3-desafio1-v1",
            title: "Adição",
            statement: `<h2>Operadores Aritméticos - Adição</h2>
                        <p>Este exemplo demonstra o uso do operador de adição (+) em JavaScript em diferentes contextos práticos.</p>
                        <p>O operador de adição é usado para somar valores numéricos ou concatenar strings.</p>
                        <h3>Exemplos incluídos:</h3>
                        <ul>
                            <li>Cálculo de pontuação em jogos</li>
                            <li>Soma de horas trabalhadas</li>
                            <li>Cálculo de salários</li>
                        </ul>`,
            code: `// ---------- ADIÇÃO ----------
console.log("=== ADIÇÃO ===");

// 1) Pontos de um jogo fictício
let totalPontos = 100;
let novosPontos = 50;
let totalAtualizado = totalPontos + novosPontos;
console.log("1) Total de pontos após adicionar nova pontuação:", totalAtualizado);

console.log("\\n");

// 2) Horas trabalhadas em cada dia da semana
let segunda = 8;
let terca = 6;
let quarta = 8;
let quinta = 7;
let sexta = 5;
let totalHorasSemana = segunda + terca + quarta + quinta + sexta;
console.log("2) Total de horas trabalhadas na semana:", totalHorasSemana);

console.log("\\n");

// 3) Soma de dois salários
let salario1 = 2000;
let salario2 = 3500;
let somaSalarios = salario1 + salario2;
console.log("3) Soma de dois salários diferentes:", somaSalarios);

console.log("\\n==============================\\n");`,
            explanation: `<p>O operador de adição (+) é um dos operadores aritméticos fundamentais em JavaScript e em muitas outras linguagens de programação.</p>
                        <p>Nos exemplos apresentados, vemos três aplicações práticas do operador de adição:</p>
                        <ul>
                            <li><strong>Exemplo 1:</strong> Somamos pontos em um jogo, simulando a adição de novas pontuações a um total existente.</li>
                            <li><strong>Exemplo 2:</strong> Calculamos o total de horas trabalhadas na semana somando as horas de cada dia.</li>
                            <li><strong>Exemplo 3:</strong> Somamos dois valores de salários para obter um total.</li>
                        </ul>
                        <p>Vale lembrar que em JavaScript o operador + também pode ser usado para concatenar strings. Se um dos operandos for uma string, o JavaScript converteria o outro operando para string e faria a concatenação em vez da adição numérica.</p>`,
            trace: [
              // Algoritmo 1: Pontos de um jogo fictício
              {
                step: 1,
                algoritmo: "Exemplo 1: Pontos de um jogo",
                instrucao: "let totalPontos = 100",
                totalPontos: 100,
                explanation: "Inicializamos a variável totalPontos com o valor 100"
              },
              {
                step: 2,
                algoritmo: "Exemplo 1: Pontos de um jogo",
                instrucao: "let novosPontos = 50",
                novosPontos: 50,
                explanation: "Inicializamos a variável novosPontos com o valor 50"
              },
              {
                step: 3,
                algoritmo: "Exemplo 1: Pontos de um jogo",
                instrucao: "let totalAtualizado = totalPontos + novosPontos",
                calculo: "100 + 50 = 150",
                totalAtualizado: 150,
                explanation: "Somamos totalPontos (100) e novosPontos (50) e armazenamos o resultado (150) em totalAtualizado"
              },
              {
                step: 4,
                algoritmo: "Exemplo 1: Pontos de um jogo",
                instrucao: "console.log(\"1) Total de pontos após adicionar nova pontuação:\", totalAtualizado)",
                saida: "1) Total de pontos após adicionar nova pontuação: 150",
                explanation: "Exibimos o resultado da soma no console"
              },
              
              // Algoritmo 2: Horas trabalhadas na semana
              {
                step: 1,
                algoritmo: "Exemplo 2: Horas trabalhadas",
                instrucao: "let segunda = 8",
                segunda: 8,
                explanation: "Inicializamos a variável segunda com o valor 8"
              },
              {
                step: 2,
                algoritmo: "Exemplo 2: Horas trabalhadas",
                instrucao: "let terca = 6",
                terca: 6,
                explanation: "Inicializamos a variável terca com o valor 6"
              },
              {
                step: 3,
                algoritmo: "Exemplo 2: Horas trabalhadas",
                instrucao: "let quarta = 8",
                quarta: 8,
                explanation: "Inicializamos a variável quarta com o valor 8"
              },
              {
                step: 4,
                algoritmo: "Exemplo 2: Horas trabalhadas",
                instrucao: "let quinta = 7",
                quinta: 7,
                explanation: "Inicializamos a variável quinta com o valor 7"
              },
              {
                step: 5,
                algoritmo: "Exemplo 2: Horas trabalhadas",
                instrucao: "let sexta = 5",
                sexta: 5,
                explanation: "Inicializamos a variável sexta com o valor 5"
              },
              {
                step: 6,
                algoritmo: "Exemplo 2: Horas trabalhadas",
                instrucao: "let totalHorasSemana = segunda + terca + quarta + quinta + sexta",
                calculo: "8 + 6 + 8 + 7 + 5 = 34",
                totalHorasSemana: 34,
                explanation: "Somamos as horas de todos os dias da semana (8+6+8+7+5) e armazenamos o resultado (34) em totalHorasSemana"
              },
              {
                step: 7,
                algoritmo: "Exemplo 2: Horas trabalhadas",
                instrucao: "console.log(\"2) Total de horas trabalhadas na semana:\", totalHorasSemana)",
                saida: "2) Total de horas trabalhadas na semana: 34",
                explanation: "Exibimos o total de horas trabalhadas no console"
              },
              
              // Algoritmo 3: Soma de salários
              {
                step: 1,
                algoritmo: "Exemplo 3: Soma de salários",
                instrucao: "let salario1 = 2000",
                salario1: 2000,
                explanation: "Inicializamos a variável salario1 com o valor 2000"
              },
              {
                step: 2,
                algoritmo: "Exemplo 3: Soma de salários",
                instrucao: "let salario2 = 3500",
                salario2: 3500,
                explanation: "Inicializamos a variável salario2 com o valor 3500"
              },
              {
                step: 3,
                algoritmo: "Exemplo 3: Soma de salários",
                instrucao: "let somaSalarios = salario1 + salario2",
                calculo: "2000 + 3500 = 5500",
                somaSalarios: 5500,
                explanation: "Somamos salario1 (2000) e salario2 (3500) e armazenamos o resultado (5500) em somaSalarios"
              },
              {
                step: 4,
                algoritmo: "Exemplo 3: Soma de salários",
                instrucao: "console.log(\"3) Soma de dois salários diferentes:\", somaSalarios)",
                saida: "3) Soma de dois salários diferentes: 5500",
                explanation: "Exibimos a soma dos salários no console"
              }
            ]
          },
          {
            id: "dia3-desafio1-v2",
            title: "Subtração",
            statement: `<h2>Operadores Aritméticos - Subtração</h2>
                        <p>Este exemplo demonstra o uso do operador de subtração (-) em JavaScript em diferentes contextos práticos.</p>
                        <p>O operador de subtração é usado para calcular a diferença entre dois valores numéricos.</p>
                        <h3>Exemplos incluídos:</h3>
                        <ul>
                            <li>Atualização de saldo após compra</li>
                            <li>Cálculo de idade</li>
                            <li>Diferença entre dois valores</li>
                        </ul>`,
            code: `// ---------- SUBTRAÇÃO ----------
console.log("=== SUBTRAÇÃO ===");

// 1) Atualizar valor do cartão de crédito
let saldoCartao = 1000;
let valorCompra = 250;
let saldoAtualizado = saldoCartao - valorCompra;
console.log("1) Saldo do cartão de crédito após compra:", saldoAtualizado);

console.log("\\n");

// 2) Calcular idade (ano atual - ano de nascimento)
let anoNascimento = 1990;
let anoAtual = 2025;
let idade = anoAtual - anoNascimento;
console.log("2) Idade calculada:", idade);

console.log("\\n");

// 3) Diferença entre duas variáveis
let numA = 50;
let numB = 30;
let diferenca = numA - numB;
console.log("3) Diferença entre numA e numB:", diferenca);

console.log("\\n==============================\\n");`,
            explanation: `<p>O operador de subtração (-) é outro operador aritmético fundamental em JavaScript e em muitas outras linguagens de programação.</p>
                        <p>Nos exemplos apresentados, vemos três aplicações práticas do operador de subtração:</p>
                        <ul>
                            <li><strong>Exemplo 1:</strong> Calculamos o saldo atualizado de um cartão de crédito após uma compra, subtraindo o valor da compra do saldo disponível.</li>
                            <li><strong>Exemplo 2:</strong> Calculamos a idade de uma pessoa subtraindo o ano de nascimento do ano atual.</li>
                            <li><strong>Exemplo 3:</strong> Calculamos a diferença entre dois valores numéricos quaisquer.</li>
                        </ul>
                        <p>Diferente do operador de adição, o operador de subtração só funciona com valores numéricos. Se você tentar subtrair uma string de um número ou vice-versa, o JavaScript tentará converter a string em número antes de realizar a operação.</p>`,
            trace: [
              // Algoritmo 1: Atualizar valor do cartão de crédito
              {
                step: 1,
                algoritmo: "Exemplo 1: Cartão de crédito",
                instrucao: "let saldoCartao = 1000",
                saldoCartao: 1000,
                explanation: "Inicializamos a variável saldoCartao com o valor 1000"
              },
              {
                step: 2,
                algoritmo: "Exemplo 1: Cartão de crédito",
                instrucao: "let valorCompra = 250",
                valorCompra: 250,
                explanation: "Inicializamos a variável valorCompra com o valor 250"
              },
              {
                step: 3,
                algoritmo: "Exemplo 1: Cartão de crédito",
                instrucao: "let saldoAtualizado = saldoCartao - valorCompra",
                calculo: "1000 - 250 = 750",
                saldoAtualizado: 750,
                explanation: "Subtraímos valorCompra (250) de saldoCartao (1000) e armazenamos o resultado (750) em saldoAtualizado"
              },
              {
                step: 4,
                algoritmo: "Exemplo 1: Cartão de crédito",
                instrucao: "console.log(\"1) Saldo do cartão de crédito após compra:\", saldoAtualizado)",
                saida: "1) Saldo do cartão de crédito após compra: 750",
                explanation: "Exibimos o saldo atualizado no console"
              },
              
              // Algoritmo 2: Calcular idade
              {
                step: 1,
                algoritmo: "Exemplo 2: Cálculo de idade",
                instrucao: "let anoNascimento = 1990",
                anoNascimento: 1990,
                explanation: "Inicializamos a variável anoNascimento com o valor 1990"
              },
              {
                step: 2,
                algoritmo: "Exemplo 2: Cálculo de idade",
                instrucao: "let anoAtual = 2025",
                anoAtual: 2025,
                explanation: "Inicializamos a variável anoAtual com o valor 2025"
              },
              {
                step: 3,
                algoritmo: "Exemplo 2: Cálculo de idade",
                instrucao: "let idade = anoAtual - anoNascimento",
                calculo: "2025 - 1990 = 35",
                idade: 35,
                explanation: "Subtraímos anoNascimento (1990) de anoAtual (2025) e armazenamos o resultado (35) em idade"
              },
              {
                step: 4,
                algoritmo: "Exemplo 2: Cálculo de idade",
                instrucao: "console.log(\"2) Idade calculada:\", idade)",
                saida: "2) Idade calculada: 35",
                explanation: "Exibimos a idade calculada no console"
              },
              
              // Algoritmo 3: Diferença entre dois valores
              {
                step: 1,
                algoritmo: "Exemplo 3: Diferença entre valores",
                instrucao: "let numA = 50",
                numA: 50,
                explanation: "Inicializamos a variável numA com o valor 50"
              },
              {
                step: 2,
                algoritmo: "Exemplo 3: Diferença entre valores",
                instrucao: "let numB = 30",
                numB: 30,
                explanation: "Inicializamos a variável numB com o valor 30"
              },
              {
                step: 3,
                algoritmo: "Exemplo 3: Diferença entre valores",
                instrucao: "let diferenca = numA - numB",
                calculo: "50 - 30 = 20",
                diferenca: 20,
                explanation: "Subtraímos numB (30) de numA (50) e armazenamos o resultado (20) em diferenca"
              },
              {
                step: 4,
                algoritmo: "Exemplo 3: Diferença entre valores",
                instrucao: "console.log(\"3) Diferença entre numA e numB:\", diferenca)",
                saida: "3) Diferença entre numA e numB: 20",
                explanation: "Exibimos a diferença calculada no console"
              }
            ]
          },
          {
            id: "dia3-desafio1-v3",
            title: "Multiplicação",
            statement: `<h2>Operadores Aritméticos - Multiplicação</h2>
                        <p>Este exemplo demonstra o uso do operador de multiplicação (*) em JavaScript em diferentes contextos práticos.</p>
                        <p>O operador de multiplicação é usado para calcular o produto de dois valores numéricos.</p>
                        <h3>Exemplos incluídos:</h3>
                        <ul>
                            <li>Cálculo de ganho diário (valor/hora × horas trabalhadas)</li>
                            <li>Multiplicação de uma média pelo total de dados</li>
                            <li>Cálculo de horas trabalhadas em um período</li>
                        </ul>`,
            code: `// ---------- MULTIPLICAÇÃO ----------
console.log("=== MULTIPLICAÇÃO ===");

// 1) Ganho por hora trabalhada
let valorHora = 30;
let horasTrabalhadasDia = 8;
let ganhoDia = valorHora * horasTrabalhadasDia;
console.log("1) Ganho diário (30/h * 8h):", ganhoDia);

console.log("\\n");

// 2) Multiplicação de uma média pelo total de dados
let media = 7;
let totalDados = 5;
let resultadoMultiplicacao = media * totalDados;
console.log("2) Multiplicação da média pelo total de dados:", resultadoMultiplicacao);

console.log("\\n");

// 3) Total de horas trabalhadas em 20 dias (exemplo de 8h/dia)
let diasTrabalhados = 20;
let horasPorDia = 8;
let totalHoras = diasTrabalhados * horasPorDia;
console.log("3) Total de horas trabalhadas no mês (20 dias):", totalHoras);

console.log("\\n==============================\\n");`,
            explanation: `<p>O operador de multiplicação (*) é um dos operadores aritméticos fundamentais em JavaScript e em muitas outras linguagens de programação.</p>
                        <p>Nos exemplos apresentados, vemos três aplicações práticas do operador de multiplicação:</p>
                        <ul>
                            <li><strong>Exemplo 1:</strong> Calculamos o ganho diário multiplicando o valor da hora de trabalho pelo número de horas trabalhadas.</li>
                            <li><strong>Exemplo 2:</strong> Multiplicamos uma média pelo total de dados, uma operação comum em estatística e análise de dados.</li>
                            <li><strong>Exemplo 3:</strong> Calculamos o total de horas trabalhadas em um mês, multiplicando o número de dias trabalhados pelas horas diárias.</li>
                        </ul>
                        <p>A multiplicação em JavaScript aceita apenas valores numéricos. Quando tentamos multiplicar um número por uma string, o JavaScript tenta converter a string em número antes de realizar a operação.</p>`,
            trace: [
              // Algoritmo 1: Ganho por hora trabalhada
              {
                step: 1,
                algoritmo: "Exemplo 1: Ganho diário",
                instrucao: "let valorHora = 30",
                valorHora: 30,
                explanation: "Inicializamos a variável valorHora com o valor 30"
              },
              {
                step: 2,
                algoritmo: "Exemplo 1: Ganho diário",
                instrucao: "let horasTrabalhadasDia = 8",
                horasTrabalhadasDia: 8,
                explanation: "Inicializamos a variável horasTrabalhadasDia com o valor 8"
              },
              {
                step: 3,
                algoritmo: "Exemplo 1: Ganho diário",
                instrucao: "let ganhoDia = valorHora * horasTrabalhadasDia",
                calculo: "30 * 8 = 240",
                ganhoDia: 240,
                explanation: "Multiplicamos valorHora (30) por horasTrabalhadasDia (8) e armazenamos o resultado (240) em ganhoDia"
              },
              {
                step: 4,
                algoritmo: "Exemplo 1: Ganho diário",
                instrucao: "console.log(\"1) Ganho diário (30/h * 8h):\", ganhoDia)",
                saida: "1) Ganho diário (30/h * 8h): 240",
                explanation: "Exibimos o ganho diário calculado no console"
              },
              
              // Algoritmo 2: Multiplicação de média pelo total
              {
                step: 1,
                algoritmo: "Exemplo 2: Média × Total",
                instrucao: "let media = 7",
                media: 7,
                explanation: "Inicializamos a variável media com o valor 7"
              },
              {
                step: 2,
                algoritmo: "Exemplo 2: Média × Total",
                instrucao: "let totalDados = 5",
                totalDados: 5,
                explanation: "Inicializamos a variável totalDados com o valor 5"
              },
              {
                step: 3,
                algoritmo: "Exemplo 2: Média × Total",
                instrucao: "let resultadoMultiplicacao = media * totalDados",
                calculo: "7 * 5 = 35",
                resultadoMultiplicacao: 35,
                explanation: "Multiplicamos media (7) por totalDados (5) e armazenamos o resultado (35) em resultadoMultiplicacao"
              },
              {
                step: 4,
                algoritmo: "Exemplo 2: Média × Total",
                instrucao: "console.log(\"2) Multiplicação da média pelo total de dados:\", resultadoMultiplicacao)",
                saida: "2) Multiplicação da média pelo total de dados: 35",
                explanation: "Exibimos o resultado da multiplicação no console"
              },
              
              // Algoritmo 3: Total de horas trabalhadas
              {
                step: 1,
                algoritmo: "Exemplo 3: Horas mensais",
                instrucao: "let diasTrabalhados = 20",
                diasTrabalhados: 20,
                explanation: "Inicializamos a variável diasTrabalhados com o valor 20"
              },
              {
                step: 2,
                algoritmo: "Exemplo 3: Horas mensais",
                instrucao: "let horasPorDia = 8",
                horasPorDia: 8,
                explanation: "Inicializamos a variável horasPorDia com o valor 8"
              },
              {
                step: 3,
                algoritmo: "Exemplo 3: Horas mensais",
                instrucao: "let totalHoras = diasTrabalhados * horasPorDia",
                calculo: "20 * 8 = 160",
                totalHoras: 160,
                explanation: "Multiplicamos diasTrabalhados (20) por horasPorDia (8) e armazenamos o resultado (160) em totalHoras"
              },
              {
                step: 4,
                algoritmo: "Exemplo 3: Horas mensais",
                instrucao: "console.log(\"3) Total de horas trabalhadas no mês (20 dias):\", totalHoras)",
                saida: "3) Total de horas trabalhadas no mês (20 dias): 160",
                explanation: "Exibimos o total de horas trabalhadas no console"
              }
            ]
          },
          {
            id: "dia3-desafio1-v4",
            title: "Divisão e Módulo",
            statement: `<h2>Operadores Aritméticos - Divisão e Módulo</h2>
                        <p>Este exemplo demonstra o uso dos operadores de divisão (/) e módulo (%) em JavaScript em contextos práticos.</p>
                        <p>O operador de divisão é usado para dividir um valor por outro, enquanto o operador de módulo retorna o resto de uma divisão.</p>
                        <h3>Exemplos incluídos:</h3>
                        <ul>
                            <li>Divisão de um valor entre várias pessoas</li>
                            <li>Cálculo do resto de uma divisão</li>
                            <li>Verificação de números pares e ímpares usando o operador de módulo</li>
                        </ul>`,
            code: `// ---------- DIVISÃO ----------
console.log("=== DIVISÃO ===");

// Exemplo de divisão: dividir R$500 entre 5 pessoas
let valorTotal = 500;
let numeroPessoas = 5;
let valorPorPessoa = valorTotal / numeroPessoas;
console.log("Divisão de R$500 entre 5 pessoas:", valorPorPessoa);

console.log("\\n==============================\\n");

// ---------- MÓDULO (RESTO) ----------
console.log("=== MÓDULO (RESTO) ===");

// Exemplo: resto da divisão de 13 por 5
let x = 13;
let y = 5;
let resto = x % y;
console.log("Resto da divisão de 13 por 5:", resto);

// Exemplo: verificar se números são pares ou ímpares
console.log("\\n--- Verificando números pares e ímpares ---");
let num1 = 10;
let num2 = 7;

// Verificar se num1 é par ou ímpar
let restoNum1 = num1 % 2;
if (restoNum1 === 0) {
    console.log(num1 + " é um número par");
} else {
    console.log(num1 + " é um número ímpar");
}

// Verificar se num2 é par ou ímpar
let restoNum2 = num2 % 2;
if (restoNum2 === 0) {
    console.log(num2 + " é um número par");
} else {
    console.log(num2 + " é um número ímpar");
}

console.log("\\n==============================\\n");`,
            explanation: `<p>Os operadores de divisão (/) e módulo (%) são fundamentais para diversos cálculos em programação:</p>
                        <ul>
                            <li><strong>Operador de divisão (/):</strong> Divide o operando à esquerda pelo operando à direita. É útil para distribuir valores igualmente ou calcular proporções.</li>
                            <li><strong>Operador de módulo (%):</strong> Retorna o resto da divisão do operando à esquerda pelo operando à direita. É frequentemente usado para verificar divisibilidade e em algoritmos cíclicos.</li>
                        </ul>
                        <p>No primeiro exemplo, dividimos um valor total entre um número de pessoas, situação comum em divisões de contas ou pagamentos.</p>
                        <p>No segundo exemplo, calculamos o resto da divisão de um número por outro, útil para determinar se um número é divisível por outro (o resto seria 0) ou para operações que precisam trabalhar com ciclos.</p>
                        <p>No terceiro exemplo, aplicamos o operador de módulo para verificar se um número é par ou ímpar:</p>
                        <ul>
                            <li>Um número é par quando o resto da divisão por 2 é 0: <code>numero % 2 === 0</code></li>
                            <li>Um número é ímpar quando o resto da divisão por 2 é 1: <code>numero % 2 === 1</code> ou <code>numero % 2 !== 0</code></li>
                        </ul>
                        <p>Este é um uso extremamente comum do operador de módulo e uma técnica fundamental em programação, usada em muitos algoritmos e soluções de problemas.</p>`,
            trace: [
              // Algoritmo 1: Divisão de valor entre pessoas
              {
                step: 1,
                algoritmo: "Exemplo 1: Divisão",
                instrucao: "let valorTotal = 500",
                valorTotal: 500,
                explanation: "Inicializamos a variável valorTotal com o valor 500"
              },
              {
                step: 2,
                algoritmo: "Exemplo 1: Divisão",
                instrucao: "let numeroPessoas = 5",
                numeroPessoas: 5,
                explanation: "Inicializamos a variável numeroPessoas com o valor 5"
              },
              {
                step: 3,
                algoritmo: "Exemplo 1: Divisão",
                instrucao: "let valorPorPessoa = valorTotal / numeroPessoas",
                calculo: "500 / 5 = 100",
                valorPorPessoa: 100,
                explanation: "Dividimos valorTotal (500) por numeroPessoas (5) e armazenamos o resultado (100) em valorPorPessoa"
              },
              {
                step: 4,
                algoritmo: "Exemplo 1: Divisão",
                instrucao: "console.log(\"Divisão de R$500 entre 5 pessoas:\", valorPorPessoa)",
                saida: "Divisão de R$500 entre 5 pessoas: 100",
                explanation: "Exibimos o valor por pessoa no console"
              },
              
              // Algoritmo 2: Cálculo do resto
              {
                step: 1,
                algoritmo: "Exemplo 2: Módulo (resto)",
                instrucao: "let x = 13",
                x: 13,
                explanation: "Inicializamos a variável x com o valor 13"
              },
              {
                step: 2,
                algoritmo: "Exemplo 2: Módulo (resto)",
                instrucao: "let y = 5",
                y: 5,
                explanation: "Inicializamos a variável y com o valor 5"
              },
              {
                step: 3,
                algoritmo: "Exemplo 2: Módulo (resto)",
                instrucao: "let resto = x % y",
                calculo: "13 % 5 = 3 (13 ÷ 5 = 2 com resto 3)",
                resto: 3,
                explanation: "Calculamos o resto da divisão de x (13) por y (5), que é 3, e armazenamos em resto"
              },
              {
                step: 4,
                algoritmo: "Exemplo 2: Módulo (resto)",
                instrucao: "console.log(\"Resto da divisão de 13 por 5:\", resto)",
                saida: "Resto da divisão de 13 por 5: 3",
                explanation: "Exibimos o resto da divisão no console"
              },
              
              // Algoritmo 3: Verificação de números pares ou ímpares
              {
                step: 1,
                algoritmo: "Exemplo 3: Verificação de números pares ou ímpares",
                instrucao: "let num1 = 10",
                num1: 10,
                explanation: "Inicializamos a variável num1 com o valor 10"
              },
              {
                step: 2,
                algoritmo: "Exemplo 3: Verificação de números pares ou ímpares",
                instrucao: "let num2 = 7",
                num2: 7,
                explanation: "Inicializamos a variável num2 com o valor 7"
              },
              {
                step: 3,
                algoritmo: "Exemplo 3: Verificação de números pares ou ímpares",
                instrucao: "let restoNum1 = num1 % 2",
                calculo: "10 % 2 = 0",
                restoNum1: 0,
                explanation: "Calculamos o resto da divisão de num1 (10) por 2, que é 0"
              },
              {
                step: 4,
                algoritmo: "Exemplo 3: Verificação de números pares ou ímpares",
                instrucao: "if (restoNum1 === 0) { console.log(num1 + \" é um número par\"); } else { console.log(num1 + \" é um número ímpar\"); }",
                saida: "10 é um número par",
                explanation: "Exibimos que num1 (10) é um número par"
              },
              {
                step: 5,
                algoritmo: "Exemplo 3: Verificação de números pares ou ímpares",
                instrucao: "let restoNum2 = num2 % 2",
                calculo: "7 % 2 = 1",
                restoNum2: 1,
                explanation: "Calculamos o resto da divisão de num2 (7) por 2, que é 1"
              },
              {
                step: 6,
                algoritmo: "Exemplo 3: Verificação de números pares ou ímpares",
                instrucao: "if (restoNum2 === 0) { console.log(num2 + \" é um número par\"); } else { console.log(num2 + \" é um número ímpar\"); }",
                saida: "7 é um número ímpar",
                explanation: "Exibimos que num2 (7) é um número ímpar"
              }
            ]
          },
          {
            id: "dia3-desafio1-v5",
            title: "Exponenciação",
            statement: `<h2>Operadores Aritméticos - Exponenciação</h2>
                        <p>Este exemplo demonstra o uso do operador de exponenciação (**) em JavaScript para calcular potências.</p>
                        <p>O operador de exponenciação é usado para elevar um número (a base) à potência de outro número (o expoente).</p>
                        <h3>Exemplo incluído:</h3>
                        <ul>
                            <li>Cálculo de 2 elevado à quarta potência (2^4)</li>
                        </ul>`,
            code: `// ---------- EXPONENCIAÇÃO ----------
console.log("=== EXPONENCIAÇÃO ===");

// Exemplo: 2 elevado a 4
let base = 2;
let expoente = 4;
let resultadoExpo = base ** expoente;
console.log("2 elevado a 4 =", resultadoExpo);`,
            explanation: `<p>O operador de exponenciação (**) foi introduzido no ECMAScript 2016 (ES7) e é usado para calcular potências em JavaScript.</p>
                        <p>Neste exemplo, calculamos 2 elevado à potência de 4 (2^4), que é igual a 16. O cálculo pode ser decomposto da seguinte forma:</p>
                        <ul>
                            <li>2^4 = 2 × 2 × 2 × 2 = 16</li>
                        </ul>
                        <p>Antes da introdução deste operador, a exponenciação em JavaScript era feita usando a função <code>Math.pow(base, expoente)</code>, que ainda é uma alternativa válida.</p>
                        <p>A exponenciação é amplamente utilizada em diversas áreas como matemática, finanças (juros compostos), ciência da computação e física.</p>
                        <p>Alguns exemplos práticos incluem:</p>
                        <ul>
                            <li>Cálculos financeiros: juros compostos, onde um valor cresce exponencialmente ao longo do tempo</li>
                            <li>Cálculos geométricos: área de um quadrado (lado²), volume de um cubo (lado³)</li>
                            <li>Computação gráfica: escalonamento de objetos em espaços 2D ou 3D</li>
                        </ul>`,
            trace: [
              {
                step: 1,
                algoritmo: "Exponenciação",
                instrucao: "let base = 2",
                base: 2,
                explanation: "Inicializamos a variável base com o valor 2"
              },
              {
                step: 2,
                algoritmo: "Exponenciação",
                instrucao: "let expoente = 4",
                expoente: 4,
                explanation: "Inicializamos a variável expoente com o valor 4"
              },
              {
                step: 3,
                algoritmo: "Exponenciação",
                instrucao: "let resultadoExpo = base ** expoente",
                calculo: "2 ** 4 = 2 × 2 × 2 × 2 = 16",
                resultadoExpo: 16,
                explanation: "Calculamos base (2) elevado ao expoente (4), que é 2^4 = 16, e armazenamos em resultadoExpo"
              },
              {
                step: 4,
                algoritmo: "Exponenciação",
                instrucao: "console.log(\"2 elevado a 4 =\", resultadoExpo)",
                saida: "2 elevado a 4 = 16",
                explanation: "Exibimos o resultado da exponenciação no console"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    day: "Dia 4",
    challenges: [
      {
        id: "dia4-desafio1",
        title: "Renovação da CNH",
        versions: [
          {
            id: "dia4-desafio1-v1",
            title: "Estruturas Condicionais",
            statement: `<h2>Desafio 01: Renovação da CNH</h2>
                        <p>Vamos supor que estamos criando um sistema para controlar a renovação da carteira de motorista e precisamos saber em quanto tempo a mesma irá vencer de acordo com a legislação.</p>
                        <p>De acordo com a lei, se você está tirando a carteira pela primeira vez (independentemente da sua idade), o tempo de vencimento dela é de 1 ano.</p>
                        <p>Caso contrário, as regras são:</p>
                        <ol>
                            <li>Se você tem idade inferior a 50 anos, o vencimento é de 10 anos;</li>
                            <li>Se for igual ou superior a 50 anos ou inferior a 70 anos, o vencimento é de 5 anos;</li>
                            <li>Mas se for igual ou superior a 70 anos, o vencimento será de 3 anos.</li>
                        </ol>
                        <p>Você deve criar variáveis e estruturas condicionais para controlar esse vencimento.</p>`,
            code: `// === DESAFIO 01: Renovação da CNH ===
//
// Regras:
// 1) Se é a primeira carteira (independente da idade) => vencimento em 1 ano
// 2) Se a idade é menor que 50 anos => vencimento em 10 anos
// 3) Se a idade é >= 50 e < 70 => vencimento em 5 anos
// 4) Se a idade é >= 70 => vencimento em 3 anos

// Solicita os dados ao usuário
let primeiraVezInput = prompt("É a primeira vez que você está tirando a carteira? (sim/nao)");
let idadeInput = prompt("Qual a sua idade?");

// Converte e normaliza as entradas
let primeiraVez = primeiraVezInput.toLowerCase() === "sim";
let idade = parseInt(idadeInput);

console.log("=== DESAFIO 01: Renovação da CNH ===\\n");

// Verifica se a idade é válida
if (isNaN(idade) || idade <= 0) {
  console.log("Idade inválida. Verifique o valor digitado.");
} else {
  // Verifica se é a primeira carteira
  if (primeiraVez) {
    console.log("Como é a sua primeira carteira, o vencimento é de 1 ano.");
  } else {
    // Caso não seja a primeira vez, verifica a idade
    if (idade < 50) {
      console.log("O vencimento da sua CNH é de 10 anos.");
    } else if (idade >= 50 && idade < 70) {
      console.log("O vencimento da sua CNH é de 5 anos.");
    } else {
      console.log("O vencimento da sua CNH é de 3 anos.");
    }
  }
}`,
            explanation: `<p>Este programa implementa um sistema que determina o período de vencimento da Carteira Nacional de Habilitação (CNH) com base em dois critérios: se é a primeira vez que a pessoa está tirando a carteira e sua idade.</p>
                        
                        <div class="code-explanation">
                          <h4>Análise detalhada linha por linha:</h4>
                          
                          <pre><code>// === DESAFIO 01: Renovação da CNH ===</code></pre>
                          <p>Comentário que identifica o início do programa e seu propósito.</p>
                          
                          <pre><code>// Regras:
// 1) Se é a primeira carteira (independente da idade) => vencimento em 1 ano
// 2) Se a idade é menor que 50 anos => vencimento em 10 anos
// 3) Se a idade é >= 50 e < 70 => vencimento em 5 anos
// 4) Se a idade é >= 70 => vencimento em 3 anos</code></pre>
                          <p>Comentários que descrevem as regras de negócio que o algoritmo irá implementar. Isso é uma boa prática para documentar o propósito e o funcionamento do código.</p>
                          
                          <pre><code>let primeiraVezInput = prompt("É a primeira vez que você está tirando a carteira? (sim/nao)");</code></pre>
                          <p>Declara a variável <code>primeiraVezInput</code> e atribui a ela o valor retornado pela função <code>prompt()</code>, que exibe uma caixa de diálogo solicitando ao usuário que informe se é a primeira vez que está tirando a carteira. A resposta do usuário é armazenada como texto (string).</p>
                          
                          <pre><code>let idadeInput = prompt("Qual a sua idade?");</code></pre>
                          <p>Declara a variável <code>idadeInput</code> e atribui a ela o valor retornado por outro <code>prompt()</code>, solicitando ao usuário que informe sua idade. Novamente, a resposta é armazenada como texto, mesmo que o usuário digite números.</p>
                          
                          <pre><code>let primeiraVez = primeiraVezInput.toLowerCase() === "sim";</code></pre>
                          <p>Declara a variável <code>primeiraVez</code> e atribui a ela o resultado da expressão <code>primeiraVezInput.toLowerCase() === "sim"</code>, que é um valor booleano (true/false).
                          <ul>
                            <li>O método <code>toLowerCase()</code> converte o texto para minúsculas, garantindo que a comparação não seja sensível a maiúsculas/minúsculas (por exemplo, "SIM", "Sim" e "sim" serão todos considerados iguais).</li>
                            <li>O operador <code>===</code> compara se o valor é exatamente igual a "sim".</li>
                            <li>Se o usuário digitou "sim" (em qualquer combinação de maiúsculas/minúsculas), <code>primeiraVez</code> será <code>true</code>; caso contrário, será <code>false</code>.</li>
                          </ul></p>
                          
                          <pre><code>let idade = parseInt(idadeInput);</code></pre>
                          <p>Declara a variável <code>idade</code> e atribui a ela o resultado da função <code>parseInt(idadeInput)</code>.
                          <ul>
                            <li>A função <code>parseInt()</code> converte um texto para um número inteiro.</li>
                            <li>Se o texto não puder ser convertido para um número (por exemplo, se o usuário digitou "trinta" em vez de "30"), o resultado será <code>NaN</code> (Not a Number).</li>
                          </ul></p>
                          
                          <pre><code>console.log("=== DESAFIO 01: Renovação da CNH ===\\n");</code></pre>
                          <p>Exibe o título do desafio no console. O <code>\\n</code> representa uma quebra de linha, criando um espaço após o título.</p>
                          
                          <pre><code>if (isNaN(idade) || idade <= 0) {</code></pre>
                          <p>Inicia uma estrutura condicional que verifica se:
                          <ul>
                            <li><code>isNaN(idade)</code>: a função <code>isNaN()</code> retorna <code>true</code> se o valor não for um número válido. Isso acontece se o usuário digitar algo que não pode ser convertido para número.</li>
                            <li><code>idade <= 0</code>: verifica se a idade é menor ou igual a zero, o que seria inválido.</li>
                            <li>O operador <code>||</code> (OU lógico) retorna <code>true</code> se qualquer uma das condições for verdadeira.</li>
                          </ul></p>
                          
                          <pre><code>  console.log("Idade inválida. Verifique o valor digitado.");</code></pre>
                          <p>Se a condição anterior for verdadeira (idade inválida), exibe uma mensagem de erro no console. O código está indentado para mostrar que está dentro do bloco <code>if</code>.</p>
                          
                          <pre><code>} else {</code></pre>
                          <p>Inicia o bloco <code>else</code>, que será executado se a idade for válida (um número positivo).</p>
                          
                          <pre><code>  if (primeiraVez) {</code></pre>
                          <p>Dentro do bloco <code>else</code>, inicia outra estrutura condicional que verifica se <code>primeiraVez</code> é <code>true</code>, ou seja, se o usuário respondeu "sim" à pergunta sobre ser a primeira vez tirando a carteira.</p>
                          
                          <pre><code>    console.log("Como é a sua primeira carteira, o vencimento é de 1 ano.");</code></pre>
                          <p>Se for a primeira vez, exibe a mensagem informando que o vencimento é de 1 ano, independentemente da idade.</p>
                          
                          <pre><code>  } else {</code></pre>
                          <p>Inicia outro bloco <code>else</code> que será executado se não for a primeira carteira.</p>
                          
                          <pre><code>    if (idade < 50) {</code></pre>
                          <p>Verifica se a idade é menor que 50 anos.</p>
                          
                          <pre><code>      console.log("O vencimento da sua CNH é de 10 anos.");</code></pre>
                          <p>Se a idade for menor que 50, exibe que o vencimento é de 10 anos.</p>
                          
                          <pre><code>    } else if (idade >= 50 && idade < 70) {</code></pre>
                          <p>Se a idade não for menor que 50, verifica se ela está entre 50 (inclusive) e 70 (exclusive).
                          <ul>
                            <li><code>idade >= 50</code>: verifica se a idade é maior ou igual a 50.</li>
                            <li><code>idade < 70</code>: verifica se a idade é menor que 70.</li>
                            <li>O operador <code>&&</code> (E lógico) retorna <code>true</code> somente se ambas as condições forem verdadeiras.</li>
                          </ul></p>
                          
                          <pre><code>      console.log("O vencimento da sua CNH é de 5 anos.");</code></pre>
                          <p>Se a idade estiver entre 50 e 70 anos, exibe que o vencimento é de 5 anos.</p>
                          
                          <pre><code>    } else {</code></pre>
                          <p>Inicia o bloco <code>else</code> final, que será executado se nenhuma das condições anteriores for verdadeira (ou seja, se a idade for 70 anos ou mais).</p>
                          
                          <pre><code>      console.log("O vencimento da sua CNH é de 3 anos.");</code></pre>
                          <p>Se a idade for 70 anos ou mais, exibe que o vencimento é de 3 anos.</p>
                          
                          <pre><code>    }</code></pre>
                          <p>Fecha o bloco condicional para as diferentes faixas etárias.</p>
                          
                          <pre><code>  }</code></pre>
                          <p>Fecha o bloco condicional para a verificação de primeira carteira.</p>
                          
                          <pre><code>}</code></pre>
                          <p>Fecha o bloco condicional principal para a verificação de idade válida.</p>
                        </div>
                        
                        <h4>Fluxo de execução:</h4>
                        <ol>
                            <li>Coleta dos dados do usuário via prompts</li>
                            <li>Processamento e normalização dos dados (conversão para tipos adequados)</li>
                            <li>Validação da idade (verificação se é um número válido e positivo)</li>
                            <li>Aplicação da lógica de negócio por meio de estruturas condicionais aninhadas:
                                <ul>
                                    <li>Primeira verificação: se é primeira carteira</li>
                                    <li>Segunda verificação (se não for primeira carteira): análise da faixa etária</li>
                                </ul>
                            </li>
                            <li>Apresentação do resultado ao usuário via console.log</li>
                        </ol>
                        
                        <p>Este tipo de estrutura de decisão aninhada é comum em sistemas que precisam aplicar diferentes regras com base em múltiplos critérios. O código é organizado de forma lógica, começando pela validação das entradas, seguido pela aplicação das regras de negócio, e finalizando com a exibição do resultado apropriado.</p>`,
            trace: [
              // Cenário 1: Primeira carteira
              {
                step: 1,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "Input do usuário para primeiraVezInput",
                primeiraVezInput: "sim",
                explanation: "Usuário informa que é a primeira vez que está tirando a carteira"
              },
              {
                step: 2,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "Input do usuário para idadeInput",
                idadeInput: "25",
                explanation: "Usuário informa que tem 25 anos"
              },
              {
                step: 3,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "let primeiraVez = primeiraVezInput.toLowerCase() === \"sim\"",
                calculo: "'sim'.toLowerCase() === 'sim' é true",
                primeiraVez: true,
                explanation: "Convertemos a entrada para minúsculo e verificamos se é igual a 'sim'"
              },
              {
                step: 4,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "let idade = parseInt(idadeInput)",
                calculo: "parseInt('25') resulta em 25",
                idade: 25,
                explanation: "Convertemos a string '25' para o número inteiro 25"
              },
              {
                step: 5,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "if (isNaN(idade) || idade <= 0)",
                calculo: "isNaN(25) é false, 25 <= 0 é false, então false || false é false",
                resultado: false,
                explanation: "Verificamos se a idade é válida: não é NaN e é maior que zero"
              },
              {
                step: 6,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "if (primeiraVez)",
                calculo: "primeiraVez é true",
                resultado: true,
                explanation: "Verificamos se é a primeira carteira, o que é verdadeiro"
              },
              {
                step: 7,
                algoritmo: "Cenário 1: Primeira carteira",
                instrucao: "console.log(\"Como é a sua primeira carteira, o vencimento é de 1 ano.\")",
                saida: "Como é a sua primeira carteira, o vencimento é de 1 ano.",
                explanation: "Exibimos que o vencimento é de 1 ano pois é a primeira carteira"
              },
              
              // Cenário 2: Idade menor que 50 anos
              {
                step: 1,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "Input do usuário para primeiraVezInput",
                primeiraVezInput: "nao",
                explanation: "Usuário informa que não é a primeira vez que está tirando a carteira"
              },
              {
                step: 2,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "Input do usuário para idadeInput",
                idadeInput: "35",
                explanation: "Usuário informa que tem 35 anos"
              },
              {
                step: 3,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "let primeiraVez = primeiraVezInput.toLowerCase() === \"sim\"",
                calculo: "'nao'.toLowerCase() === 'sim' é false",
                primeiraVez: false,
                explanation: "Convertemos a entrada para minúsculo e verificamos se é igual a 'sim'"
              },
              {
                step: 4,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "let idade = parseInt(idadeInput)",
                calculo: "parseInt('35') resulta em 35",
                idade: 35,
                explanation: "Convertemos a string '35' para o número inteiro 35"
              },
              {
                step: 5,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "if (isNaN(idade) || idade <= 0)",
                calculo: "isNaN(35) é false, 35 <= 0 é false, então false || false é false",
                resultado: false,
                explanation: "Verificamos se a idade é válida: não é NaN e é maior que zero"
              },
              {
                step: 6,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "if (primeiraVez)",
                calculo: "primeiraVez é false",
                resultado: false,
                explanation: "Verificamos se é a primeira carteira, o que é falso"
              },
              {
                step: 7,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "if (idade < 50)",
                calculo: "35 < 50 é true",
                resultado: true,
                explanation: "Verificamos se a idade é menor que 50 anos"
              },
              {
                step: 8,
                algoritmo: "Cenário 2: Idade < 50",
                instrucao: "console.log(\"O vencimento da sua CNH é de 10 anos.\")",
                saida: "O vencimento da sua CNH é de 10 anos.",
                explanation: "Exibimos que o vencimento é de 10 anos para idade menor que 50"
              },
              
              // Cenário 3: Idade entre 50 e 70 anos
              {
                step: 1,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "Input do usuário para primeiraVezInput",
                primeiraVezInput: "nao",
                explanation: "Usuário informa que não é a primeira vez que está tirando a carteira"
              },
              {
                step: 2,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "Input do usuário para idadeInput",
                idadeInput: "60",
                explanation: "Usuário informa que tem 60 anos"
              },
              {
                step: 3,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "let primeiraVez = primeiraVezInput.toLowerCase() === \"sim\"",
                calculo: "'nao'.toLowerCase() === 'sim' é false",
                primeiraVez: false,
                explanation: "Convertemos a entrada para minúsculo e verificamos se é igual a 'sim'"
              },
              {
                step: 4,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "let idade = parseInt(idadeInput)",
                calculo: "parseInt('60') resulta em 60",
                idade: 60,
                explanation: "Convertemos a string '60' para o número inteiro 60"
              },
              {
                step: 5,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "if (isNaN(idade) || idade <= 0)",
                calculo: "isNaN(60) é false, 60 <= 0 é false, então false || false é false",
                resultado: false,
                explanation: "Verificamos se a idade é válida: não é NaN e é maior que zero"
              },
              {
                step: 6,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "if (primeiraVez)",
                calculo: "primeiraVez é false",
                resultado: false,
                explanation: "Verificamos se é a primeira carteira, o que é falso"
              },
              {
                step: 7,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "if (idade < 50)",
                calculo: "60 < 50 é false",
                resultado: false,
                explanation: "Verificamos se a idade é menor que 50 anos"
              },
              {
                step: 8,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "else if (idade >= 50 && idade < 70)",
                calculo: "60 >= 50 é true, 60 < 70 é true, então true && true é true",
                resultado: true,
                explanation: "Verificamos se a idade está entre 50 e 70 anos"
              },
              {
                step: 9,
                algoritmo: "Cenário 3: 50 ≤ Idade < 70",
                instrucao: "console.log(\"O vencimento da sua CNH é de 5 anos.\")",
                saida: "O vencimento da sua CNH é de 5 anos.",
                explanation: "Exibimos que o vencimento é de 5 anos para idade entre 50 e 70 anos"
              },
              
              // Cenário 4: Idade maior ou igual a 70 anos
              {
                step: 1,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "Input do usuário para primeiraVezInput",
                primeiraVezInput: "nao",
                explanation: "Usuário informa que não é a primeira vez que está tirando a carteira"
              },
              {
                step: 2,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "Input do usuário para idadeInput",
                idadeInput: "75",
                explanation: "Usuário informa que tem 75 anos"
              },
              {
                step: 3,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "let primeiraVez = primeiraVezInput.toLowerCase() === \"sim\"",
                calculo: "'nao'.toLowerCase() === 'sim' é false",
                primeiraVez: false,
                explanation: "Convertemos a entrada para minúsculo e verificamos se é igual a 'sim'"
              },
              {
                step: 4,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "let idade = parseInt(idadeInput)",
                calculo: "parseInt('75') resulta em 75",
                idade: 75,
                explanation: "Convertemos a string '75' para o número inteiro 75"
              },
              {
                step: 5,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "if (isNaN(idade) || idade <= 0)",
                calculo: "isNaN(75) é false, 75 <= 0 é false, então false || false é false",
                resultado: false,
                explanation: "Verificamos se a idade é válida: não é NaN e é maior que zero"
              },
              {
                step: 6,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "if (primeiraVez)",
                calculo: "primeiraVez é false",
                resultado: false,
                explanation: "Verificamos se é a primeira carteira, o que é falso"
              },
              {
                step: 7,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "if (idade < 50)",
                calculo: "75 < 50 é false",
                resultado: false,
                explanation: "Verificamos se a idade é menor que 50 anos"
              },
              {
                step: 8,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "else if (idade >= 50 && idade < 70)",
                calculo: "75 >= 50 é true, 75 < 70 é false, então true && false é false",
                resultado: false,
                explanation: "Verificamos se a idade está entre 50 e 70 anos"
              },
              {
                step: 9,
                algoritmo: "Cenário 4: Idade ≥ 70",
                instrucao: "else { console.log(\"O vencimento da sua CNH é de 3 anos.\"); }",
                saida: "O vencimento da sua CNH é de 3 anos.",
                explanation: "Exibimos que o vencimento é de 3 anos para idade maior ou igual a 70 anos"
              }
            ]
          }
        ]
      }
    ]
  }
]; 
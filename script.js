document.addEventListener('DOMContentLoaded', function() {
    // Dados de exemplo - Estes seriam substituídos por seus dados reais
    const challengesData = [
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
                                    return: "5",
                                    explanation: "Retornamos resultado = 5, que é o 5º número na sequência de Fibonacci"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "dia1-desafio2",
                    title: "Busca Binária",
                    versions: [
                        {
                            id: "dia1-desafio2-v1",
                            title: "Versão Básica",
                            statement: `<h2>Busca Binária</h2>
                            <p>Implemente uma função que realiza uma busca binária em um array ordenado.</p>
                            <p>A busca binária é um algoritmo de busca eficiente que funciona em arrays ordenados, dividindo repetidamente pela metade a porção do array que pode conter o item, até reduzir as localizações possíveis a apenas uma.</p>
                            <h3>Entrada:</h3>
                            <p>Um array ordenado de números e um valor a ser buscado.</p>
                            <h3>Saída:</h3>
                            <p>O índice do valor no array, ou -1 se o valor não estiver presente.</p>`,
                            code: `function buscaBinaria(array, alvo) {
    let inicio = 0;
    let fim = array.length - 1;
    
    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);
        
        // Encontrou o elemento
        if (array[meio] === alvo) {
            return meio;
        }
        
        // Decide qual metade do array pesquisar
        if (array[meio] < alvo) {
            inicio = meio + 1; // Busca na metade direita
        } else {
            fim = meio - 1; // Busca na metade esquerda
        }
    }
    
    // Elemento não encontrado
    return -1;
}

// Exemplo de uso
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(buscaBinaria(array, 7)); // Deve retornar 3
console.log(buscaBinaria(array, 6)); // Deve retornar -1`,
                            explanation: `<p>A busca binária é um algoritmo eficiente para encontrar um elemento em um array ordenado.</p>
                            <p>O algoritmo funciona da seguinte forma:</p>
                            <ul>
                                <li>Começamos com dois ponteiros: <code>inicio</code> e <code>fim</code>, que inicialmente apontam para o primeiro e último elemento do array.</li>
                                <li>Em cada iteração, calculamos o índice do meio entre <code>inicio</code> e <code>fim</code>.</li>
                                <li>Se o elemento do meio for igual ao valor buscado, retornamos esse índice.</li>
                                <li>Se o elemento do meio for menor que o valor buscado, atualizamos <code>inicio</code> para <code>meio + 1</code> (descartando a metade esquerda).</li>
                                <li>Se o elemento do meio for maior que o valor buscado, atualizamos <code>fim</code> para <code>meio - 1</code> (descartando a metade direita).</li>
                                <li>Continuamos esse processo até encontrar o elemento ou até que <code>inicio</code> seja maior que <code>fim</code> (o que significa que o elemento não está presente).</li>
                            </ul>
                            <p>A complexidade de tempo da busca binária é O(log n), o que a torna muito mais eficiente que a busca linear em arrays grandes.</p>`,
                            trace: [
                                {
                                    step: 1,
                                    array: "[1, 3, 5, 7, 9, 11, 13, 15, 17]",
                                    alvo: 7,
                                    variaveis: "inicio = 0, fim = 8",
                                    explanation: "Inicializamos inicio = 0 e fim = 8 (índice do último elemento)"
                                },
                                {
                                    step: 2,
                                    calculo: "meio = Math.floor((0 + 8) / 2) = 4",
                                    comparacao: "array[4] = 9, 9 > 7",
                                    atualizacao: "fim = 4 - 1 = 3",
                                    explanation: "O elemento do meio (9) é maior que o alvo (7), então descartamos a metade direita"
                                },
                                {
                                    step: 3,
                                    variaveis: "inicio = 0, fim = 3",
                                    calculo: "meio = Math.floor((0 + 3) / 2) = 1",
                                    comparacao: "array[1] = 3, 3 < 7",
                                    atualizacao: "inicio = 1 + 1 = 2",
                                    explanation: "O elemento do meio (3) é menor que o alvo (7), então descartamos a metade esquerda"
                                },
                                {
                                    step: 4,
                                    variaveis: "inicio = 2, fim = 3",
                                    calculo: "meio = Math.floor((2 + 3) / 2) = 2",
                                    comparacao: "array[2] = 5, 5 < 7",
                                    atualizacao: "inicio = 2 + 1 = 3",
                                    explanation: "O elemento do meio (5) é menor que o alvo (7), então descartamos a metade esquerda novamente"
                                },
                                {
                                    step: 5,
                                    variaveis: "inicio = 3, fim = 3",
                                    calculo: "meio = Math.floor((3 + 3) / 2) = 3",
                                    comparacao: "array[3] = 7, 7 == 7",
                                    atualizacao: "Elemento encontrado!",
                                    explanation: "O elemento do meio (7) é igual ao alvo (7), então encontramos o elemento no índice 3"
                                },
                                {
                                    step: 6,
                                    return: "3",
                                    explanation: "Retornamos o índice 3, que é a posição do elemento 7 no array"
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
                    title: "Ordenação por Bubble Sort",
                    versions: [
                        {
                            id: "dia2-desafio1-v1",
                            title: "Implementação Básica",
                            statement: `<h2>Bubble Sort</h2>
                            <p>Implemente o algoritmo de ordenação Bubble Sort.</p>
                            <p>O Bubble Sort é um algoritmo de ordenação simples que percorre repetidamente a lista, compara elementos adjacentes e os troca se estiverem na ordem errada. O processo é repetido até que nenhuma troca seja necessária, o que indica que a lista está ordenada.</p>
                            <h3>Entrada:</h3>
                            <p>Um array de números não ordenados.</p>
                            <h3>Saída:</h3>
                            <p>O mesmo array, ordenado em ordem crescente.</p>`,
                            code: `function bubbleSort(array) {
    const n = array.length;
    
    for (let i = 0; i < n; i++) {
        // Flag para otimização - se nenhuma troca ocorrer em uma passagem completa,
        // o array já está ordenado
        let trocaOcorreu = false;
        
        // A cada passagem, o maior elemento "borbulha" para o final
        for (let j = 0; j < n - i - 1; j++) {
            // Se o elemento atual for maior que o próximo
            if (array[j] > array[j + 1]) {
                // Troca os elementos
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                trocaOcorreu = true;
            }
        }
        
        // Se nenhuma troca ocorreu na passagem, o array está ordenado
        if (!trocaOcorreu) break;
    }
    
    return array;
}

// Exemplo de uso
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array)); // Deve retornar [11, 12, 22, 25, 34, 64, 90]`,
                            explanation: `<p>O Bubble Sort é um dos algoritmos de ordenação mais simples de entender e implementar.</p>
                            <p>O algoritmo funciona da seguinte forma:</p>
                            <ul>
                                <li>Percorremos o array várias vezes.</li>
                                <li>Em cada passagem, comparamos cada elemento com o próximo.</li>
                                <li>Se o elemento atual for maior que o próximo, trocamos os dois.</li>
                                <li>Após cada passagem completa, o maior elemento encontrado "borbulha" até o final do array.</li>
                                <li>Repetimos até que o array esteja completamente ordenado.</li>
                            </ul>
                            <p>A otimização que usamos (com a variável <code>trocaOcorreu</code>) permite interromper o algoritmo mais cedo se o array já estiver ordenado.</p>
                            <p>O Bubble Sort tem complexidade de tempo de O(n²) no pior caso, o que o torna ineficiente para arrays grandes. No entanto, sua simplicidade o torna útil para arrays pequenos ou arrays quase ordenados.</p>`,
                            trace: [
                                {
                                    step: 1,
                                    array: "[64, 34, 25, 12, 22, 11, 90]",
                                    i: 0,
                                    explanation: "Começamos com i = 0, primeira passagem pelo array"
                                },
                                {
                                    step: 2,
                                    comparacao: "64 > 34?",
                                    resultado: "Sim, troca",
                                    array: "[34, 64, 25, 12, 22, 11, 90]",
                                    explanation: "array[0] > array[1], então trocamos"
                                },
                                {
                                    step: 3,
                                    comparacao: "64 > 25?",
                                    resultado: "Sim, troca",
                                    array: "[34, 25, 64, 12, 22, 11, 90]",
                                    explanation: "array[1] > array[2], então trocamos"
                                },
                                {
                                    step: 4,
                                    comparacao: "64 > 12?",
                                    resultado: "Sim, troca",
                                    array: "[34, 25, 12, 64, 22, 11, 90]",
                                    explanation: "array[2] > array[3], então trocamos"
                                },
                                {
                                    step: 5,
                                    comparacao: "64 > 22?",
                                    resultado: "Sim, troca",
                                    array: "[34, 25, 12, 22, 64, 11, 90]",
                                    explanation: "array[3] > array[4], então trocamos"
                                },
                                {
                                    step: 6,
                                    comparacao: "64 > 11?",
                                    resultado: "Sim, troca",
                                    array: "[34, 25, 12, 22, 11, 64, 90]",
                                    explanation: "array[4] > array[5], então trocamos"
                                },
                                {
                                    step: 7,
                                    comparacao: "64 > 90?",
                                    resultado: "Não, mantém",
                                    array: "[34, 25, 12, 22, 11, 64, 90]",
                                    explanation: "array[5] < array[6], não há troca"
                                },
                                {
                                    step: 8,
                                    i: 1,
                                    explanation: "Segunda passagem pelo array (i = 1)"
                                },
                                {
                                    step: 9,
                                    comparacao: "34 > 25?",
                                    resultado: "Sim, troca",
                                    array: "[25, 34, 12, 22, 11, 64, 90]",
                                    explanation: "array[0] > array[1], então trocamos"
                                },
                                {
                                    step: 10,
                                    comparacao: "34 > 12?",
                                    resultado: "Sim, troca",
                                    array: "[25, 12, 34, 22, 11, 64, 90]",
                                    explanation: "array[1] > array[2], então trocamos"
                                },
                                {
                                    step: 11,
                                    comparacao: "34 > 22?",
                                    resultado: "Sim, troca",
                                    array: "[25, 12, 22, 34, 11, 64, 90]",
                                    explanation: "array[2] > array[3], então trocamos"
                                },
                                {
                                    step: 12,
                                    comparacao: "34 > 11?",
                                    resultado: "Sim, troca",
                                    array: "[25, 12, 22, 11, 34, 64, 90]",
                                    explanation: "array[3] > array[4], então trocamos"
                                },
                                {
                                    step: "...",
                                    explanation: "Continua por mais algumas passagens até que o array esteja completamente ordenado"
                                },
                                {
                                    step: "Final",
                                    array: "[11, 12, 22, 25, 34, 64, 90]",
                                    explanation: "Array ordenado final após todas as passagens"
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
                    title: "Operações Básicas com JavaScript",
                    versions: [
                        {
                            id: "dia3-desafio1-v1",
                            title: "Adição",
                            statement: `<h2>Operações Básicas com JavaScript - Adição</h2>
                            <p>Neste desafio, vamos explorar operações de adição em JavaScript, utilizando exemplos práticos para entender como funciona a soma de valores.</p>
                            <p>Iremos trabalhar com três casos diferentes:</p>
                            <ol>
                                <li>Soma de pontos em um jogo</li>
                                <li>Cálculo de horas trabalhadas na semana</li>
                                <li>Soma de salários</li>
                            </ol>
                            <h3>Entrada:</h3>
                            <p>Valores numéricos para realizar operações de adição.</p>
                            <h3>Saída:</h3>
                            <p>Resultados das operações de adição com suas respectivas descrições.</p>`,
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
                            explanation: `<p>Este algoritmo demonstra operações básicas de adição em JavaScript através de três exemplos práticos:</p>
                            <ol>
                                <li><strong>Pontos em um jogo:</strong> Somamos a pontuação atual (100) com novos pontos obtidos (50) para calcular o total atualizado.</li>
                                <li><strong>Cálculo de horas trabalhadas:</strong> Somamos as horas trabalhadas em cada dia da semana para obter o total semanal.</li>
                                <li><strong>Soma de salários:</strong> Calculamos a soma de dois valores salariais diferentes.</li>
                            </ol>
                            <p>O operador <code>+</code> é utilizado para realizar a adição de valores numéricos em JavaScript. É um dos operadores aritméticos básicos e funciona da mesma forma que na matemática tradicional.</p>
                            <p>Após cada operação, utilizamos <code>console.log()</code> para exibir o resultado, facilitando a visualização do funcionamento da adição em diferentes contextos.</p>`,
                            trace: [
                                {
                                    step: 1,
                                    operacao: "Declaração de variáveis (caso 1)",
                                    variaveis: "totalPontos = 100, novosPontos = 50",
                                    explanation: "Inicializamos as variáveis para o primeiro exemplo (pontos do jogo)"
                                },
                                {
                                    step: 2,
                                    operacao: "totalPontos + novosPontos",
                                    calculo: "100 + 50 = 150",
                                    resultado: "totalAtualizado = 150",
                                    explanation: "Calculamos a soma dos pontos atuais com os novos pontos"
                                },
                                {
                                    step: 3,
                                    operacao: "Exibir resultado (caso 1)",
                                    saida: "1) Total de pontos após adicionar nova pontuação: 150",
                                    explanation: "Exibimos o resultado da operação no console"
                                },
                                {
                                    step: 4,
                                    operacao: "Declaração de variáveis (caso 2)",
                                    variaveis: "segunda = 8, terca = 6, quarta = 8, quinta = 7, sexta = 5",
                                    explanation: "Inicializamos as variáveis para o segundo exemplo (horas trabalhadas)"
                                },
                                {
                                    step: 5,
                                    operacao: "segunda + terca + quarta + quinta + sexta",
                                    calculo: "8 + 6 + 8 + 7 + 5 = 34",
                                    resultado: "totalHorasSemana = 34",
                                    explanation: "Calculamos a soma das horas trabalhadas em cada dia da semana"
                                },
                                {
                                    step: 6,
                                    operacao: "Exibir resultado (caso 2)",
                                    saida: "2) Total de horas trabalhadas na semana: 34",
                                    explanation: "Exibimos o resultado da operação no console"
                                },
                                {
                                    step: 7,
                                    operacao: "Declaração de variáveis (caso 3)",
                                    variaveis: "salario1 = 2000, salario2 = 3500",
                                    explanation: "Inicializamos as variáveis para o terceiro exemplo (salários)"
                                },
                                {
                                    step: 8,
                                    operacao: "salario1 + salario2",
                                    calculo: "2000 + 3500 = 5500",
                                    resultado: "somaSalarios = 5500",
                                    explanation: "Calculamos a soma dos dois salários"
                                },
                                {
                                    step: 9,
                                    operacao: "Exibir resultado (caso 3)",
                                    saida: "3) Soma de dois salários diferentes: 5500",
                                    explanation: "Exibimos o resultado da operação no console"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];

    // Elementos do DOM
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.getElementById('toggleSidebar');
    const mainContent = document.querySelector('.main-content');
    const challengesTree = document.getElementById('challenges-tree');
    const challengeTabs = document.getElementById('challenge-tabs');
    const challengeTitle = document.getElementById('challenge-title');
    const enunciadoSection = document.getElementById('enunciado');
    const solutionSection = document.getElementById('solucao');
    const traceSection = document.getElementById('estudo-mesa');
    const solutionCode = document.getElementById('solution-code');
    const solutionExplanation = document.getElementById('solution-explanation');
    const traceTable = document.getElementById('trace-table');
    const traceExplanation = document.getElementById('trace-explanation');
    const copyBtn = document.getElementById('copy-solution');

    // Função para construir a árvore de desafios na sidebar
    function buildChallengesTree() {
        challengesTree.innerHTML = '';

        challengesData.forEach(dayData => {
            const dayItem = document.createElement('li');
            
            const dayHeader = document.createElement('div');
            dayHeader.className = 'day';
            dayHeader.innerHTML = `${dayData.day} <i class="fas fa-chevron-right"></i>`;
            
            const dayContent = document.createElement('div');
            dayContent.className = 'day-content';
            
            // Adicionar challenges para este dia
            dayData.challenges.forEach(challenge => {
                const challengeItem = document.createElement('div');
                challengeItem.className = 'challenge';
                challengeItem.innerHTML = `${challenge.title} <i class="fas fa-chevron-right"></i>`;
                
                const versionsList = document.createElement('div');
                versionsList.className = 'versions';
                
                // Adicionar versões para este desafio
                challenge.versions.forEach(version => {
                    const versionItem = document.createElement('div');
                    versionItem.className = 'version';
                    versionItem.textContent = version.title;
                    versionItem.dataset.id = version.id;
                    
                    versionItem.addEventListener('click', () => {
                        // Remover classe active de todas as versões
                        document.querySelectorAll('.version').forEach(v => v.classList.remove('active'));
                        // Adicionar classe active à versão clicada
                        versionItem.classList.add('active');
                        // Carregar o desafio selecionado
                        loadChallenge(version);
                    });
                    
                    versionsList.appendChild(versionItem);
                });
                
                challengeItem.addEventListener('click', (e) => {
                    if (e.target === challengeItem || e.target === challengeItem.querySelector('i')) {
                        challengeItem.classList.toggle('expanded');
                    }
                });
                
                challengeItem.appendChild(versionsList);
                dayContent.appendChild(challengeItem);
            });
            
            // CORREÇÃO: Adicionar evento de clique que expanda o conteúdo do dia
            dayHeader.addEventListener('click', () => {
                dayHeader.classList.toggle('expanded');
                dayContent.style.display = dayHeader.classList.contains('expanded') ? 'block' : 'none';
            });
            
            dayItem.appendChild(dayHeader);
            dayItem.appendChild(dayContent);
            challengesTree.appendChild(dayItem);
        });
    }

    // Função para carregar um desafio específico
    function loadChallenge(challenge) {
        // Atualizar título
        challengeTitle.textContent = challenge.title;

        // Carregar o enunciado
        enunciadoSection.innerHTML = challenge.statement;

        // Carregar a solução
        solutionCode.textContent = challenge.code;
        Prism.highlightElement(solutionCode); // Reaplica a formatação de destaque sintático
        solutionExplanation.innerHTML = challenge.explanation;

        // Carregar o estudo de mesa
        generateTraceTable(challenge.trace);

        // Ativar a primeira aba por padrão
        activateTab('enunciado');
    }

    // Função para gerar a tabela de estudo de mesa
    function generateTraceTable(traceData) {
        if (!traceData || traceData.length === 0) {
            traceTable.innerHTML = '<p>Não há estudo de mesa disponível para este desafio.</p>';
            traceExplanation.innerHTML = '';
            return;
        }

        // Descobre quais colunas incluir com base nos dados disponíveis
        const columns = new Set();
        traceData.forEach(step => {
            Object.keys(step).forEach(key => {
                if (key !== 'step' && key !== 'explanation') {
                    columns.add(key);
                }
            });
        });

        // Constrói a tabela
        let tableHTML = '<table>';
        
        // Cabeçalho da tabela
        tableHTML += '<tr><th>Passo</th>';
        columns.forEach(column => {
            tableHTML += `<th>${column.charAt(0).toUpperCase() + column.slice(1)}</th>`;
        });
        tableHTML += '</tr>';
        
        // Linhas da tabela
        traceData.forEach((step, index) => {
            // Adiciona separador entre os exemplos para o caso específico da adição
            if ((step.step === 4 || step.step === 7) && challengeTitle.textContent === "Adição") {
                tableHTML += `<tr class="example-separator"><td colspan="${columns.size + 1}" style="background-color: #f0f0f0; font-weight: bold; text-align: left; padding: 8px;">Exemplo ${step.step === 4 ? '2' : '3'}</td></tr>`;
            }
            
            // Se for o primeiro passo e for o desafio de adição, adiciona um título para o exemplo 1
            if (index === 0 && challengeTitle.textContent === "Adição") {
                tableHTML += `<tr class="example-separator"><td colspan="${columns.size + 1}" style="background-color: #f0f0f0; font-weight: bold; text-align: left; padding: 8px;">Exemplo 1</td></tr>`;
            }

            tableHTML += `<tr><td>${step.step}</td>`;
            columns.forEach(column => {
                tableHTML += `<td>${step[column] || '-'}</td>`;
            });
            tableHTML += '</tr>';
        });
        
        tableHTML += '</table>';
        traceTable.innerHTML = tableHTML;

        // Explicações adicionais
        let explanationHTML = '<h4>Observações:</h4>';
        
        if (challengeTitle.textContent === "Adição") {
            // Separar explicações por exemplos
            explanationHTML += '<div class="explanation-section"><h5>Exemplo 1 - Pontos em um jogo:</h5><ul>';
            traceData.slice(0, 3).forEach(step => {
                if (step.explanation) {
                    explanationHTML += `<li><strong>Passo ${step.step}:</strong> ${step.explanation}</li>`;
                }
            });
            explanationHTML += '</ul></div>';

            explanationHTML += '<div class="explanation-section"><h5>Exemplo 2 - Horas trabalhadas:</h5><ul>';
            traceData.slice(3, 6).forEach(step => {
                if (step.explanation) {
                    explanationHTML += `<li><strong>Passo ${step.step}:</strong> ${step.explanation}</li>`;
                }
            });
            explanationHTML += '</ul></div>';

            explanationHTML += '<div class="explanation-section"><h5>Exemplo 3 - Soma de salários:</h5><ul>';
            traceData.slice(6, 9).forEach(step => {
                if (step.explanation) {
                    explanationHTML += `<li><strong>Passo ${step.step}:</strong> ${step.explanation}</li>`;
                }
            });
            explanationHTML += '</ul></div>';
        } else {
            // Para outros desafios, mantém o formato original
            explanationHTML += '<ul>';
            traceData.forEach(step => {
                if (step.explanation) {
                    explanationHTML += `<li><strong>Passo ${step.step}:</strong> ${step.explanation}</li>`;
                }
            });
            explanationHTML += '</ul>';
        }
        
        traceExplanation.innerHTML = explanationHTML;
    }

    // Função para ativar uma aba específica
    function activateTab(tabId) {
        // Remover classe active de todas as abas
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        // Adicionar classe active à aba selecionada
        document.querySelector(`.tab[data-tab="${tabId}"]`).classList.add('active');

        // Esconder todas as seções de conteúdo
        document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
        // Mostrar a seção de conteúdo selecionada
        document.getElementById(tabId).classList.add('active');
    }

    // Adicionar event listeners

    // Toggle sidebar
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
    });

    // Navegação entre abas
    challengeTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab')) {
            activateTab(e.target.dataset.tab);
        }
    });

    // Copiar código
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(solutionCode.textContent).then(() => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = 'Copiado! <i class="fas fa-check"></i>';
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        });
    });

    // Inicializar a interface
    buildChallengesTree();
    
    // Expandir automaticamente o Dia 3 ao carregar a página
    setTimeout(() => {
        const dia3Item = Array.from(document.querySelectorAll('.day')).find(day => day.textContent.includes('Dia 3'));
        if (dia3Item) {
            dia3Item.classList.add('expanded');
            const dayContent = dia3Item.nextElementSibling;
            if (dayContent) {
                dayContent.style.display = 'block';
                
                // Expandir o primeiro desafio do Dia 3
                const firstChallenge = dayContent.querySelector('.challenge');
                if (firstChallenge) {
                    firstChallenge.classList.add('expanded');
                    const versionsList = firstChallenge.querySelector('.versions');
                    if (versionsList) {
                        versionsList.style.display = 'block';
                        
                        // Selecionar a primeira versão
                        const firstVersion = versionsList.querySelector('.version');
                        if (firstVersion) {
                            firstVersion.classList.add('active');
                            
                            // Carregar o desafio
                            const dia3Id = 'dia3-desafio1-v1';
                            const versionData = challengesData[2].challenges[0].versions[0];
                            loadChallenge(versionData);
                        }
                    }
                }
            }
        }
    }, 500);
}); 
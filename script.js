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
                            explanation: `<p>Este algoritmo implementa operações de adição em JavaScript. Vamos analisá-lo linha por linha:</p>
                            
                            <pre><code>// ---------- ADIÇÃO ----------</code></pre>
                            <p>Comentário que delimita o início da seção de adição. Isso ajuda a organizar o código e a identificar facilmente as diferentes partes do programa.</p>
                            
                            <pre><code>console.log("=== ADIÇÃO ===");</code></pre>
                            <p>Exibe um cabeçalho no console que indica o início dos exemplos de adição, criando uma separação visual entre diferentes seções do código.</p>
                            
                            <h4>Exemplo 1: Pontos em um jogo</h4>
                            
                            <pre><code>let totalPontos = 100;</code></pre>
                            <p>Declara e inicializa a variável <code>totalPontos</code> com o valor 100, representando o total de pontos antes da adição.</p>
                            
                            <pre><code>let novosPontos = 50;</code></pre>
                            <p>Declara e inicializa a variável <code>novosPontos</code> com o valor 50, representando os novos pontos a serem adicionados.</p>
                            
                            <pre><code>let totalAtualizado = totalPontos + novosPontos;</code></pre>
                            <p>Realiza a operação de adição entre as variáveis <code>totalPontos</code> e <code>novosPontos</code> usando o operador <code>+</code> e armazena o resultado (150) na nova variável <code>totalAtualizado</code>. Esta linha simula o processo de adição de novos pontos a um total já existente.</p>
                            
                            <pre><code>console.log("1) Total de pontos após adicionar nova pontuação:", totalAtualizado);</code></pre>
                            <p>Exibe no console uma mensagem explicativa junto com o valor calculado do total atualizado (150). Esta saída permite visualizar como a adição foi aplicada neste contexto.</p>
                            
                            <pre><code>console.log("\\n");</code></pre>
                            <p>Insere uma linha em branco no console para separar visualmente este exemplo do próximo, melhorando a legibilidade da saída.</p>
                            
                            <h4>Exemplo 2: Horas trabalhadas</h4>
                            
                            <pre><code>let segunda = 8;
let terca = 6;
let quarta = 8;
let quinta = 7;
let sexta = 5;</code></pre>
                            <p>Declara e inicializa cinco variáveis representando as horas trabalhadas em cada dia da semana (de segunda a sexta).</p>
                            
                            <pre><code>let totalHorasSemana = segunda + terca + quarta + quinta + sexta;</code></pre>
                            <p>Calcula a soma das horas trabalhadas nos cinco dias usando múltiplos operadores de adição em uma única expressão. Esta linha demonstra como o operador <code>+</code> pode ser encadeado para somar vários valores. O resultado (34) é armazenado na variável <code>totalHorasSemana</code>. Esta linha simula o cálculo do total de horas trabalhadas em uma semana.</p>
                            
                            <pre><code>console.log("2) Total de horas trabalhadas na semana:", totalHorasSemana);</code></pre>
                            <p>Exibe no console uma mensagem explicativa junto com o total de horas trabalhadas calculado (34). Esta saída permite visualizar como o cálculo de horas trabalhadas foi aplicado neste contexto.</p>
                            
                            <pre><code>console.log("\\n");</code></pre>
                            <p>Insere outra linha em branco no console para separar visualmente este exemplo do próximo, melhorando a legibilidade da saída.</p>
                            
                            <h4>Exemplo 3: Soma de salários</h4>
                            
                            <pre><code>let salario1 = 2000;</code></pre>
                            <p>Declara e inicializa a variável <code>salario1</code> com o valor 2000, representando o salário de uma pessoa.</p>
                            
                            <pre><code>let salario2 = 3500;</code></pre>
                            <p>Declara e inicializa a variável <code>salario2</code> com o valor 3500, representando o salário de outra pessoa.</p>
                            
                            <p>Declara e inicializa a variável <code>salario2</code> com o valor 3500.</p>
                            
                            <pre><code>let somaSalarios = salario1 + salario2;</code></pre>
                            <p>Realiza a adição dos valores armazenados em <code>salario1</code> e <code>salario2</code> e armazena o resultado (5500) na variável <code>somaSalarios</code>.</p>
                            
                            <pre><code>console.log("3) Soma de dois salários diferentes:", somaSalarios);</code></pre>
                            <p>Exibe no console uma mensagem explicativa junto com o valor calculado da soma dos salários (5500).</p>
                            
                            <pre><code>console.log("\\n==============================\\n");</code></pre>
                            <p>Finaliza a seção de adição com uma linha de separação visual no console, que consiste em uma quebra de linha, seguida por uma série de caracteres de igual (=) e outra quebra de linha. Isso ajuda a delimitar visualmente o fim da seção de exemplos de adição.</p>
                            
                            <h4>Considerações finais</h4>
                            <p>Este algoritmo demonstra o uso do operador <code>+</code> para somar valores numéricos em diferentes contextos. O operador de adição é um dos operadores aritméticos fundamentais em JavaScript e funciona exatamente como na matemática convencional. A utilização de <code>console.log()</code> ao longo do código permite visualizar os resultados de cada operação, facilitando o entendimento do funcionamento do algoritmo.</p>`,
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
                        },
                        {
                            id: "dia3-desafio1-v2",
                            title: "Subtração",
                            statement: `<h2>Operações Básicas com JavaScript - Subtração</h2>
                            <p>Neste desafio, vamos explorar operações de subtração em JavaScript, utilizando exemplos práticos para entender como funciona a diminuição de valores.</p>
                            <p>Iremos trabalhar com três casos diferentes:</p>
                            <ol>
                                <li>Imagine que você tem algumas variáveis com compras no cartão de crédito, e uma com um valor a ser estornado de uma compra errada, calcule o total da fatura atualizado.</li>
                                <li>Calcule a sua idade a partir de duas variáveis contendo o ano de nascimento e o ano atual.</li>
                                <li>Imagine que em um jogo você tenha um total de moedas e para cada vez que você compra um artefato você gasta um determinado número de moedas. Calcule a quantidade final de moedas.</li>
                            </ol>
                            <h3>Entrada:</h3>
                            <p>Valores numéricos para realizar operações de subtração.</p>
                            <h3>Saída:</h3>
                            <p>Resultados das operações de subtração com suas respectivas descrições.</p>`,
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
                            explanation: `<p>Este algoritmo implementa operações de subtração em JavaScript. Vamos analisá-lo linha por linha:</p>
                            
                            <pre><code>// ---------- SUBTRAÇÃO ----------</code></pre>
                            <p>Comentário que delimita o início da seção de subtração. Isso ajuda a organizar o código e a identificar facilmente as diferentes partes do programa.</p>
                            
                            <pre><code>console.log("=== SUBTRAÇÃO ===");</code></pre>
                            <p>Exibe um cabeçalho no console que indica o início dos exemplos de subtração, criando uma separação visual entre diferentes seções do código.</p>
                            
                            <h4>Exemplo 1: Saldo do cartão de crédito</h4>
                            
                            <pre><code>let saldoCartao = 1000;</code></pre>
                            <p>Declara e inicializa a variável <code>saldoCartao</code> com o valor 1000, representando o saldo inicial disponível no cartão de crédito.</p>
                            
                            <pre><code>let valorCompra = 250;</code></pre>
                            <p>Declara e inicializa a variável <code>valorCompra</code> com o valor 250, representando o valor de uma compra realizada com o cartão.</p>
                            
                            <pre><code>let saldoAtualizado = saldoCartao - valorCompra;</code></pre>
                            <p>Realiza a operação de subtração entre as variáveis <code>saldoCartao</code> e <code>valorCompra</code> usando o operador <code>-</code> e armazena o resultado (750) na nova variável <code>saldoAtualizado</code>. Esta linha simula a dedução de uma compra do saldo do cartão.</p>
                            
                            <pre><code>console.log("1) Saldo do cartão de crédito após compra:", saldoAtualizado);</code></pre>
                            <p>Exibe no console uma mensagem explicativa junto com o valor calculado do saldo atualizado (750). Esta saída permite visualizar como a subtração foi aplicada neste contexto.</p>
                            
                            <pre><code>console.log("\\n");</code></pre>
                            <p>Insere uma linha em branco no console para separar visualmente este exemplo do próximo, melhorando a legibilidade da saída.</p>
                            
                            <h4>Exemplo 2: Cálculo de idade</h4>
                            
                            <pre><code>let anoNascimento = 1990;</code></pre>
                            <p>Declara e inicializa a variável <code>anoNascimento</code> com o valor 1990, representando o ano de nascimento de uma pessoa.</p>
                            
                            <pre><code>let anoAtual = 2025;</code></pre>
                            <p>Declara e inicializa a variável <code>anoAtual</code> com o valor 2025, representando o ano atual para o cálculo.</p>
                            
                            <pre><code>let idade = anoAtual - anoNascimento;</code></pre>
                            <p>Utiliza o operador de subtração <code>-</code> para calcular a diferença entre o ano atual e o ano de nascimento, obtendo a idade da pessoa (35 anos). Esta é uma aplicação comum da subtração em programação para cálculos temporais.</p>
                            
                            <pre><code>console.log("2) Idade calculada:", idade);</code></pre>
                            <p>Exibe no console uma mensagem explicativa junto com a idade calculada (35). Este exemplo demonstra como a subtração pode ser usada para calcular períodos de tempo.</p>
                            
                            <pre><code>console.log("\\n");</code></pre>
                            <p>Insere outra linha em branco no console para separar este exemplo do próximo.</p>
                            
                            <h4>Exemplo 3: Diferença entre números</h4>
                            
                            <pre><code>let numA = 50;</code></pre>
                            <p>Declara e inicializa a variável <code>numA</code> com o valor 50, que será o minuendo na operação de subtração.</p>
                            
                            <pre><code>let numB = 30;</code></pre>
                            <p>Declara e inicializa a variável <code>numB</code> com o valor 30, que será o subtraendo na operação de subtração.</p>
                            
                            <pre><code>let diferenca = numA - numB;</code></pre>
                            <p>Executa a operação de subtração entre <code>numA</code> e <code>numB</code> e armazena o resultado (20) na variável <code>diferenca</code>. Este é um exemplo direto do uso do operador de subtração entre dois valores.</p>
                            
                            <pre><code>console.log("3) Diferença entre numA e numB:", diferenca);</code></pre>
                            <p>Exibe no console uma mensagem explicativa junto com o valor calculado da diferença (20), apresentando o resultado final da operação.</p>
                            
                            <pre><code>console.log("\\n==============================\\n");</code></pre>
                            <p>Finaliza a seção de subtração com uma linha de separação visual no console, consistindo em uma quebra de linha, seguida por caracteres de igual (=) e outra quebra de linha. Isso ajuda a demarcar claramente o fim desta seção de exemplos.</p>
                            
                            <h4>Considerações finais</h4>
                            <p>Este algoritmo demonstra o uso do operador <code>-</code> para realizar subtrações em diferentes contextos de aplicação prática. O operador de subtração é fundamental em JavaScript e se comporta como na matemática tradicional. Os exemplos mostram usos comuns da subtração: cálculos financeiros, determinação de idade e obtenção da diferença entre valores, ilustrando a versatilidade deste operador em aplicações do mundo real.</p>`,
                            trace: [
                                {
                                    step: 1,
                                    operacao: "Declaração de variáveis (caso 1)",
                                    variaveis: "saldoCartao = 1000, valorCompra = 250",
                                    explanation: "Inicializamos as variáveis para o primeiro exemplo (saldo do cartão de crédito)"
                                },
                                {
                                    step: 2,
                                    operacao: "saldoCartao - valorCompra",
                                    calculo: "1000 - 250 = 750",
                                    resultado: "saldoAtualizado = 750",
                                    explanation: "Calculamos o saldo atualizado do cartão subtraindo o valor da compra"
                                },
                                {
                                    step: 3,
                                    operacao: "Exibir resultado (caso 1)",
                                    saida: "1) Saldo do cartão de crédito após compra: 750",
                                    explanation: "Exibimos o resultado da operação no console"
                                },
                                {
                                    step: 4,
                                    operacao: "Declaração de variáveis (caso 2)",
                                    variaveis: "anoNascimento = 1990, anoAtual = 2025",
                                    explanation: "Inicializamos as variáveis para o segundo exemplo (cálculo de idade)"
                                },
                                {
                                    step: 5,
                                    operacao: "anoAtual - anoNascimento",
                                    calculo: "2025 - 1990 = 35",
                                    resultado: "idade = 35",
                                    explanation: "Calculamos a idade subtraindo o ano de nascimento do ano atual"
                                },
                                {
                                    step: 6,
                                    operacao: "Exibir resultado (caso 2)",
                                    saida: "2) Idade calculada: 35",
                                    explanation: "Exibimos o resultado da operação no console"
                                },
                                {
                                    step: 7,
                                    operacao: "Declaração de variáveis (caso 3)",
                                    variaveis: "numA = 50, numB = 30",
                                    explanation: "Inicializamos as variáveis para o terceiro exemplo (diferença entre números)"
                                },
                                {
                                    step: 8,
                                    operacao: "numA - numB",
                                    calculo: "50 - 30 = 20",
                                    resultado: "diferenca = 20",
                                    explanation: "Calculamos a diferença entre os dois números"
                                },
                                {
                                    step: 9,
                                    operacao: "Exibir resultado (caso 3)",
                                    saida: "3) Diferença entre numA e numB: 20",
                                    explanation: "Exibimos o resultado da operação no console"
                                }
                            ]
                        },
                        {
                            id: "dia3-desafio1-v3",
                            title: "Multiplicação",
                            statement: `<h2>Operações Básicas com JavaScript - Multiplicação</h2>
                            <p>Neste desafio, vamos explorar operações de multiplicação em JavaScript, utilizando exemplos práticos para entender como funciona a multiplicação de valores.</p>
                            <p>Iremos trabalhar com três casos diferentes:</p>
                            <ol>
                                <li>Vamos supor que você tenha 2 produtos e que queira comprar 2 unidades de cada. Faça a multiplicação para encontrar o total.</li>
                                <li>Calcule a área de um retângulo.</li>
                                <li>Crie 2 variáveis que contêm o total de horas trabalhadas e o valor por hora. Calcule o total a receber depois de trabalhar 160 horas.</li>
                            </ol>
                            <h3>Entrada:</h3>
                            <p>Valores numéricos para realizar operações de multiplicação.</p>
                            <h3>Saída:</h3>
                            <p>Resultados das operações de multiplicação com suas respectivas descrições.</p>`,
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
                            explanation: `<p>Este algoritmo implementa operações de multiplicação em JavaScript. Vamos analisá-lo linha por linha:</p>
                            
                            <pre><code>// ---------- MULTIPLICAÇÃO ----------</code></pre>
                            <p>Comentário que delimita o início da seção de multiplicação, separando-a visualmente das outras seções do código e melhorando a organização.</p>
                            
                            <pre><code>console.log("=== MULTIPLICAÇÃO ===");</code></pre>
                            <p>Exibe um cabeçalho no console que indica o início dos exemplos de multiplicação, fornecendo uma separação visual entre as diferentes seções do código.</p>
                            
                            <h4>Exemplo 1: Ganho diário</h4>
                            
                            <pre><code>let valorHora = 30;</code></pre>
                            <p>Declara e inicializa a variável <code>valorHora</code> com o valor 30, representando quanto alguém ganha por hora de trabalho (em unidades monetárias).</p>
                            
                            <pre><code>let horasTrabalhadasDia = 8;</code></pre>
                            <p>Declara e inicializa a variável <code>horasTrabalhadasDia</code> com o valor 8, representando o número de horas trabalhadas em um dia.</p>
                            
                            <pre><code>let ganhoDia = valorHora * horasTrabalhadasDia;</code></pre>
                            <p>Realiza a operação de multiplicação entre as variáveis <code>valorHora</code> e <code>horasTrabalhadasDia</code> usando o operador <code>*</code> e armazena o resultado (240) na nova variável <code>ganhoDia</code>. Esta linha calcula quanto alguém ganha por um dia completo de trabalho.</p>
                            
                            <pre><code>console.log("1) Ganho diário (30/h * 8h):", ganhoDia);</code></pre>
                            <p>Exibe no console uma mensagem explicativa junto com o valor calculado do ganho diário (240). A mensagem inclui informações sobre o cálculo realizado (30/h * 8h) para contextualizar o resultado.</p>
                            
                            <pre><code>console.log("\\n");</code></pre>
                            <p>Insere uma linha em branco no console para separar visualmente este exemplo do próximo, melhorando a legibilidade da saída.</p>
                            
                            <h4>Exemplo 2: Multiplicação de média</h4>
                            
                            <pre><code>let media = 7;</code></pre>
                            <p>Declara e inicializa a variável <code>media</code> com o valor 7, representando a média aritmética em um conjunto de dados.</p>
                            
                            <pre><code>let totalDados = 5;</code></pre>
                            <p>Declara e inicializa a variável <code>totalDados</code> com o valor 5, representando o número total de itens ou dados considerados.</p>
                            
                            <pre><code>let resultadoMultiplicacao = media * totalDados;</code></pre>
                            <p>Realiza a multiplicação entre <code>media</code> e <code>totalDados</code> usando o operador <code>*</code> e armazena o resultado (35) na variável <code>resultadoMultiplicacao</code>. Este tipo de operação é comum quando se precisa reverter uma média para encontrar o valor total.</p>
                            
                            <pre><code>console.log("2) Multiplicação da média pelo total de dados:", resultadoMultiplicacao);</code></pre>
                            <p>Exibe no console uma mensagem explicativa junto com o resultado da multiplicação (35). Este exemplo demonstra como a multiplicação pode ser usada em cálculos estatísticos.</p>
                            
                            <pre><code>console.log("\\n");</code></pre>
                            <p>Insere outra linha em branco no console para separar este exemplo do próximo, facilitando a leitura dos resultados.</p>
                            
                            <h4>Exemplo 3: Cálculo de horas mensais</h4>
                            
                            <pre><code>let diasTrabalhados = 20;</code></pre>
                            <p>Declara e inicializa a variável <code>diasTrabalhados</code> com o valor 20, representando o número de dias trabalhados em um mês.</p>
                            
                            <pre><code>let horasPorDia = 8;</code></pre>
                            <p>Declara e inicializa a variável <code>horasPorDia</code> com o valor 8, representando o número de horas trabalhadas por dia.</p>
                            
                            <pre><code>let totalHoras = diasTrabalhados * horasPorDia;</code></pre>
                            <p>Executa a operação de multiplicação entre <code>diasTrabalhados</code> e <code>horasPorDia</code> e armazena o resultado (160) na variável <code>totalHoras</code>. Esta linha calcula o total de horas trabalhadas em um mês com 20 dias úteis.</p>
                            
                            <pre><code>console.log("3) Total de horas trabalhadas no mês (20 dias):", totalHoras);</code></pre>
                            <p>Exibe no console uma mensagem explicativa junto com o valor calculado do total de horas mensais (160). Este exemplo demonstra um uso prático da multiplicação para cálculos de carga horária de trabalho.</p>
                            
                            <pre><code>console.log("\\n==============================\\n");</code></pre>
                            <p>Finaliza a seção de multiplicação com uma linha de separação visual no console, que consiste em uma quebra de linha, seguida por uma série de caracteres de igual (=) e outra quebra de linha, delimitando claramente o fim deste conjunto de exemplos.</p>
                            
                            <h4>Considerações finais</h4>
                            <p>Este algoritmo demonstra o uso do operador <code>*</code> para realizar multiplicações em diferentes contextos práticos. O operador de multiplicação é essencial em JavaScript e se comporta como na matemática tradicional. Os exemplos mostram aplicações comuns da multiplicação: cálculo de rendimentos, conversão de médias para totais e cálculo de horas trabalhadas, ilustrando como esse operador é fundamental em diversos tipos de cálculos do dia a dia.</p>`,
                            trace: [
                                {
                                    step: 1,
                                    operacao: "Declaração de variáveis (caso 1)",
                                    variaveis: "valorHora = 30, horasTrabalhadasDia = 8",
                                    explanation: "Inicializamos as variáveis para o primeiro exemplo (ganho diário)"
                                },
                                {
                                    step: 2,
                                    operacao: "valorHora * horasTrabalhadasDia",
                                    calculo: "30 * 8 = 240",
                                    resultado: "ganhoDia = 240",
                                    explanation: "Calculamos o ganho diário multiplicando o valor por hora pelo número de horas trabalhadas"
                                },
                                {
                                    step: 3,
                                    operacao: "Exibir resultado (caso 1)",
                                    saida: "1) Ganho diário (30/h * 8h): 240",
                                    explanation: "Exibimos o resultado da operação no console"
                                },
                                {
                                    step: 4,
                                    operacao: "Declaração de variáveis (caso 2)",
                                    variaveis: "media = 7, totalDados = 5",
                                    explanation: "Inicializamos as variáveis para o segundo exemplo (multiplicação de média)"
                                },
                                {
                                    step: 5,
                                    operacao: "media * totalDados",
                                    calculo: "7 * 5 = 35",
                                    resultado: "resultadoMultiplicacao = 35",
                                    explanation: "Calculamos o resultado da multiplicação da média pelo total de dados"
                                },
                                {
                                    step: 6,
                                    operacao: "Exibir resultado (caso 2)",
                                    saida: "2) Multiplicação da média pelo total de dados: 35",
                                    explanation: "Exibimos o resultado da operação no console"
                                },
                                {
                                    step: 7,
                                    operacao: "Declaração de variáveis (caso 3)",
                                    variaveis: "diasTrabalhados = 20, horasPorDia = 8",
                                    explanation: "Inicializamos as variáveis para o terceiro exemplo (cálculo de horas mensais)"
                                },
                                {
                                    step: 8,
                                    operacao: "diasTrabalhados * horasPorDia",
                                    calculo: "20 * 8 = 160",
                                    resultado: "totalHoras = 160",
                                    explanation: "Calculamos o total de horas trabalhadas no mês multiplicando o número de dias pelo número de horas por dia"
                                },
                                {
                                    step: 9,
                                    operacao: "Exibir resultado (caso 3)",
                                    saida: "3) Total de horas trabalhadas no mês (20 dias): 160",
                                    explanation: "Exibimos o resultado da operação no console"
                                }
                            ]
                        },
                        {
                            id: "dia3-desafio1-v4",
                            title: "Divisão",
                            statement: `<h2>Operações Básicas com JavaScript - Divisão</h2>
                            <p>Neste desafio, vamos explorar operações de divisão em JavaScript, utilizando exemplos práticos para entender como funciona a divisão de valores.</p>
                            <p>Iremos trabalhar com três casos diferentes:</p>
                            <ol>
                                <li>Calcule a média de quatro notas.</li>
                                <li>Converta a distância de metros para quilômetros.</li>
                                <li>Divida um valor monetário igualmente entre várias pessoas.</li>
                            </ol>
                            <h3>Entrada:</h3>
                            <p>Valores numéricos para realizar operações de divisão.</p>
                            <h3>Saída:</h3>
                            <p>Resultados das operações de divisão com suas respectivas descrições.</p>`,
                            code: `// ---------- DIVISÃO ----------
console.log("=== DIVISÃO ===");

// 1) Calcular a média de 4 notas
let nota1 = 7;
let nota2 = 8;
let nota3 = 9;
let nota4 = 6;
let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("1) Média das notas:", media);

console.log("\\n");

// 2) Converter metros para quilômetros
let distanciaMetros = 1500;
let distanciaKm = distanciaMetros / 1000;
console.log("2) Distância em quilômetros:", distanciaKm, "km");

console.log("\\n");

// 3) Exemplo de divisão: dividir R$500 entre 5 pessoas
let valorTotal = 500;
let numeroPessoas = 5;
let valorPorPessoa = valorTotal / numeroPessoas;
console.log("3) Divisão de R$500 entre 5 pessoas:", valorPorPessoa);

console.log("\\n==============================\\n");`,
                            explanation: `<p>Este algoritmo implementa operações de divisão em JavaScript. Vamos analisá-lo linha por linha:</p>
                            
                            <pre><code>// ---------- DIVISÃO ----------</code></pre>
                            <p>Comentário que delimita o início da seção de divisão, organizando o código e fornecendo uma indicação visual clara da funcionalidade que será implementada.</p>
                            
                            <pre><code>console.log("=== DIVISÃO ===");</code></pre>
                            <p>Exibe um cabeçalho no console que indica o início dos exemplos de divisão, criando uma separação visual entre as diferentes seções do código.</p>
                            
                            <h4>Exemplo 1: Cálculo de média</h4>
                            
                            <pre><code>let nota1 = 7;</code></pre>
                            <p>Declara e inicializa a variável <code>nota1</code> com o valor 7, representando a primeira nota de um aluno.</p>
                            
                            <pre><code>let nota2 = 8;</code></pre>
                            <p>Declara e inicializa a variável <code>nota2</code> com o valor 8, representando a segunda nota.</p>
                            
                            <pre><code>let nota3 = 9;</code></pre>
                            <p>Declara e inicializa a variável <code>nota3</code> com o valor 9, representando a terceira nota.</p>
                            
                            <pre><code>let nota4 = 6;</code></pre>
                            <p>Declara e inicializa a variável <code>nota4</code> com o valor 6, representando a quarta nota.</p>
                            
                            <pre><code>let media = (nota1 + nota2 + nota3 + nota4) / 4;</code></pre>
                            <p>Calcula a média aritmética das quatro notas. Primeiro, soma as notas (7 + 8 + 9 + 6 = 30) e depois divide o resultado pelo número de notas (4), obtendo 7.5. O operador <code>/</code> realiza a divisão. Os parênteses garantem que a soma seja calculada antes da divisão, seguindo a ordem correta de precedência de operadores.</p>
                            
                            <pre><code>console.log("1) Média das notas:", media);</code></pre>
                            <p>Exibe no console uma mensagem explicativa junto com o valor calculado da média (7.5). Este exemplo ilustra um uso comum da divisão no cálculo de médias aritméticas.</p>
                            
                            <pre><code>console.log("\\n");</code></pre>
                            <p>Insere uma linha em branco no console para separar visualmente este exemplo do próximo, melhorando a legibilidade dos resultados.</p>
                            
                            <h4>Exemplo 2: Conversão de unidades</h4>
                            
                            <pre><code>let distanciaMetros = 1500;</code></pre>
                            <p>Declara e inicializa a variável <code>distanciaMetros</code> com o valor 1500, representando uma distância em metros.</p>
                            
                            <pre><code>let distanciaKm = distanciaMetros / 1000;</code></pre>
                            <p>Realiza a conversão de metros para quilômetros dividindo o valor em metros (1500) por 1000 (pois 1 quilômetro = 1000 metros). O resultado (1.5) é armazenado na variável <code>distanciaKm</code>. Este exemplo demonstra um uso prático da divisão para conversão de unidades de medida.</p>
                            
                            <pre><code>console.log("2) Distância em quilômetros:", distanciaKm, "km");</code></pre>
                            <p>Exibe no console uma mensagem explicativa junto com a distância convertida (1.5 km). Observe que o código inclui a unidade "km" para tornar a saída mais clara e informativa.</p>
                            
                            <pre><code>console.log("\\n");</code></pre>
                            <p>Insere outra linha em branco no console para separar este exemplo do próximo, facilitando a leitura das diferentes saídas.</p>
                            
                            <h4>Exemplo 3: Divisão de valor monetário</h4>
                            
                            <pre><code>let valorTotal = 500;</code></pre>
                            <p>Declara e inicializa a variável <code>valorTotal</code> com o valor 500, representando um valor monetário total a ser dividido (por exemplo, R$500).</p>
                            
                            <pre><code>let numeroPessoas = 5;</code></pre>
                            <p>Declara e inicializa a variável <code>numeroPessoas</code> com o valor 5, representando o número de pessoas entre as quais o valor será dividido.</p>
                            
                            <pre><code>let valorPorPessoa = valorTotal / numeroPessoas;</code></pre>
                            <p>Executa a operação de divisão do <code>valorTotal</code> (500) pelo <code>numeroPessoas</code> (5) para calcular quanto cada pessoa receberá (100). Esta operação simula a divisão igual de um valor entre várias pessoas.</p>
                            
                            <pre><code>console.log("3) Divisão de R$500 entre 5 pessoas:", valorPorPessoa);</code></pre>
                            <p>Exibe no console uma mensagem explicativa junto com o valor calculado por pessoa (100). Este exemplo ilustra a aplicação da divisão em um contexto financeiro de distribuição igualitária.</p>
                            
                            <pre><code>console.log("\\n==============================\\n");</code></pre>
                            <p>Finaliza a seção de divisão com uma linha de separação visual no console, consistindo em uma quebra de linha, seguida por uma série de caracteres de igual (=) e outra quebra de linha. Isso demarca claramente o término deste conjunto de exemplos.</p>
                            
                            <h4>Considerações finais</h4>
                            <p>Este algoritmo demonstra o uso do operador <code>/</code> para realizar divisões em diferentes contextos práticos. O operador de divisão é fundamental em JavaScript e se comporta como na matemática tradicional. Os exemplos mostram aplicações comuns da divisão: cálculo de médias, conversão de unidades e distribuição equitativa de valores, ilustrando a versatilidade e importância deste operador em diversos cenários de programação e do cotidiano.</p>`,
                            trace: [
                                {
                                    step: 1,
                                    operacao: "Declaração de variáveis (caso 1)",
                                    variaveis: "nota1 = 7, nota2 = 8, nota3 = 9, nota4 = 6",
                                    explanation: "Inicializamos as variáveis para o primeiro exemplo (cálculo de média)"
                                },
                                {
                                    step: 2,
                                    operacao: "(nota1 + nota2 + nota3 + nota4) / 4",
                                    calculo: "(7 + 8 + 9 + 6) / 4 = 30 / 4 = 7.5",
                                    resultado: "media = 7.5",
                                    explanation: "Calculamos a média somando as quatro notas e dividindo por 4"
                                },
                                {
                                    step: 3,
                                    operacao: "Exibir resultado (caso 1)",
                                    saida: "1) Média das notas: 7.5",
                                    explanation: "Exibimos o resultado da operação no console"
                                },
                                {
                                    step: 4,
                                    operacao: "Declaração de variáveis (caso 2)",
                                    variaveis: "distanciaMetros = 1500",
                                    explanation: "Inicializamos as variáveis para o segundo exemplo (conversão para km)"
                                },
                                {
                                    step: 5,
                                    operacao: "distanciaMetros / 1000",
                                    calculo: "1500 / 1000 = 1.5",
                                    resultado: "distanciaKm = 1.5",
                                    explanation: "Calculamos a distância em quilômetros dividindo o valor em metros por 1000"
                                },
                                {
                                    step: 6,
                                    operacao: "Exibir resultado (caso 2)",
                                    saida: "2) Distância em quilômetros: 1.5 km",
                                    explanation: "Exibimos o resultado da operação no console"
                                },
                                {
                                    step: 7,
                                    operacao: "Declaração de variáveis (caso 3)",
                                    variaveis: "valorTotal = 500, numeroPessoas = 5",
                                    explanation: "Inicializamos as variáveis para o terceiro exemplo (divisão de valor)"
                                },
                                {
                                    step: 8,
                                    operacao: "valorTotal / numeroPessoas",
                                    calculo: "500 / 5 = 100",
                                    resultado: "valorPorPessoa = 100",
                                    explanation: "Calculamos quanto cada pessoa receberá dividindo o valor total pelo número de pessoas"
                                },
                                {
                                    step: 9,
                                    operacao: "Exibir resultado (caso 3)",
                                    saida: "3) Divisão de R$500 entre 5 pessoas: 100",
                                    explanation: "Exibimos o resultado da operação no console"
                                }
                            ]
                        },
                        {
                            id: "dia3-desafio1-v5",
                            title: "Módulo (Resto)",
                            statement: `<h2>Operações Básicas com JavaScript - Módulo (Resto)</h2>
                            <p>Neste desafio, vamos explorar a operação de módulo (resto da divisão) em JavaScript, utilizando exemplos práticos para entender como funciona o cálculo do resto.</p>
                            <p>Iremos trabalhar com três casos diferentes:</p>
                            <ol>
                                <li>Verificar se um número é par ou ímpar usando o resto da divisão</li>
                                <li>Obter o último dígito de um número</li>
                                <li>Calcular o resto em uma divisão de quantidade (itens restantes)</li>
                            </ol>
                            <h3>Entrada:</h3>
                            <p>Valores numéricos para realizar operações de módulo.</p>
                            <h3>Saída:</h3>
                            <p>Resultados das operações de módulo com suas respectivas descrições.</p>`,
                            code: `// ---------- MÓDULO (RESTO) ----------
console.log("=== MÓDULO (RESTO) ===");

// 1) Verificar se um número é par ou ímpar
let numero = 15;
let ehPar = numero % 2 === 0;
console.log("1) O número", numero, "é par?", ehPar);

console.log("\\n");

// 2) Obter o último dígito de um número
let numeroGrande = 1234;
let ultimoDigito = numeroGrande % 10;
console.log("2) Último dígito de", numeroGrande, ":", ultimoDigito);

console.log("\\n");

// 3) Exemplo: resto da divisão de 13 por 5 (itens restantes)
let total = 13;
let tamanhoPacote = 5;
let resto = total % tamanhoPacote;
console.log("3) Resto da divisão de 13 por 5:", resto);

console.log("\\n==============================\\n");`,
                            explanation: `<p>Este algoritmo implementa operações com o operador de módulo (resto da divisão) em JavaScript. Vamos analisá-lo linha por linha:</p>
                            
                            <pre><code>// ---------- MÓDULO (RESTO) ----------</code></pre>
                            <p>Comentário que delimita o início da seção sobre operações de módulo, organizando o código e facilitando a identificação desta funcionalidade específica.</p>
                            
                            <pre><code>console.log("=== MÓDULO (RESTO) ===");</code></pre>
                            <p>Exibe um cabeçalho no console que indica o início dos exemplos de operações de módulo, criando uma separação visual entre diferentes seções do código.</p>
                            
                            <h4>Exemplo 1: Verificação de número par/ímpar</h4>
                            
                            <pre><code>let numero = 15;</code></pre>
                            <p>Declara e inicializa a variável <code>numero</code> com o valor 15, representando o número que vamos verificar se é par ou ímpar.</p>
                            
                            <pre><code>let ehPar = numero % 2 === 0;</code></pre>
                            <p>Utiliza o operador de módulo (<code>%</code>) para calcular o resto da divisão de <code>numero</code> por 2. Em seguida, compara o resultado com 0 usando o operador de igualdade estrita (<code>===</code>). Se o resto for igual a 0, o número é par e a variável <code>ehPar</code> recebe <code>true</code>; caso contrário, recebe <code>false</code>. Como 15 dividido por 2 dá resto 1, <code>ehPar</code> recebe <code>false</code>. Esta é uma das aplicações mais comuns do operador de módulo.</p>
                            
                            <pre><code>console.log("1) O número", numero, "é par?", ehPar);</code></pre>
                            <p>Exibe no console uma mensagem que mostra o número verificado (15) e o resultado da verificação (false). Esta saída demonstra como o operador de módulo pode ser usado para determinar se um número é par ou ímpar.</p>
                            
                            <pre><code>console.log("\\n");</code></pre>
                            <p>Insere uma linha em branco no console para separar visualmente este exemplo do próximo, melhorando a legibilidade dos resultados.</p>
                            
                            <h4>Exemplo 2: Extração do último dígito</h4>
                            
                            <pre><code>let numeroGrande = 1234;</code></pre>
                            <p>Declara e inicializa a variável <code>numeroGrande</code> com o valor 1234, um número de vários dígitos do qual queremos extrair o último dígito.</p>
                            
                            <pre><code>let ultimoDigito = numeroGrande % 10;</code></pre>
                            <p>Calcula o resto da divisão de <code>numeroGrande</code> por 10 usando o operador de módulo (<code>%</code>) e armazena o resultado na variável <code>ultimoDigito</code>. Quando dividimos qualquer número por 10, o resto é sempre o último dígito desse número. No caso de 1234, o resto é 4. Esta é uma técnica muito útil em processamento numérico e algoritmos de manipulação de dígitos.</p>
                            
                            <pre><code>console.log("2) Último dígito de", numeroGrande, ":", ultimoDigito);</code></pre>
                            <p>Exibe no console uma mensagem que mostra o número original (1234) e seu último dígito extraído (4). Esta saída ilustra como o operador de módulo pode ser usado para separar dígitos de um número.</p>
                            
                            <pre><code>console.log("\\n");</code></pre>
                            <p>Insere outra linha em branco no console para separar este exemplo do próximo, facilitando a leitura dos diferentes resultados.</p>
                            
                            <h4>Exemplo 3: Cálculo de itens restantes</h4>
                            
                            <pre><code>let total = 13;</code></pre>
                            <p>Declara e inicializa a variável <code>total</code> com o valor 13, representando um número total de itens a serem divididos em grupos.</p>
                            
                            <pre><code>let tamanhoPacote = 5;</code></pre>
                            <p>Declara e inicializa a variável <code>tamanhoPacote</code> com o valor 5, representando o tamanho de cada grupo ou pacote que queremos formar.</p>
                            
                            <pre><code>let resto = total % tamanhoPacote;</code></pre>
                            <p>Calcula o resto da divisão de <code>total</code> por <code>tamanhoPacote</code> usando o operador de módulo (<code>%</code>) e armazena o resultado na variável <code>resto</code>. Este cálculo determina quantos itens sobrarão após formamos o máximo possível de grupos completos. No caso de 13 itens divididos em grupos de 5, formamos 2 grupos completos (totalizando 10 itens) e sobram 3 itens, que é o valor de <code>resto</code>.</p>
                            
                            <pre><code>console.log("3) Resto da divisão de 13 por 5:", resto);</code></pre>
                            <p>Exibe no console uma mensagem que mostra o resultado da operação de módulo (3). Esta saída demonstra uma aplicação prática do operador de módulo no cálculo de distribuição com resto.</p>
                            
                            <pre><code>console.log("\\n==============================\\n");</code></pre>
                            <p>Finaliza a seção de módulo com uma linha de separação visual no console, consistindo em uma quebra de linha, seguida por uma série de caracteres de igual (=) e outra quebra de linha. Isso demarca claramente o fim deste conjunto de exemplos.</p>
                            
                            <h4>Considerações finais</h4>
                            <p>Este algoritmo demonstra o uso do operador <code>%</code> (módulo) para calcular o resto da divisão em diferentes contextos práticos. O operador de módulo é extremamente útil em programação e pode ser aplicado em diversas situações, como verificação de paridade (par/ímpar), extração de dígitos e cálculos de distribuição. Suas aplicações vão desde operações matemáticas simples até algoritmos complexos como criptografia, hashing e geração de números pseudoaleatórios.</p>`,
                            trace: [
                                {
                                    step: 1,
                                    operacao: "Declaração de variáveis (caso 1)",
                                    variaveis: "numero = 15",
                                    explanation: "Inicializamos a variável para o primeiro exemplo (verificação de par/ímpar)"
                                },
                                {
                                    step: 2,
                                    operacao: "numero % 2",
                                    calculo: "15 % 2 = 1",
                                    resultado: "ehPar = false (pois o resto é 1, não 0)",
                                    explanation: "Calculamos o resto da divisão de 15 por 2, que é 1. Como o resto não é 0, o número não é par"
                                },
                                {
                                    step: 3,
                                    operacao: "Exibir resultado (caso 1)",
                                    saida: "1) O número 15 é par? false",
                                    explanation: "Exibimos o resultado da verificação no console"
                                },
                                {
                                    step: 4,
                                    operacao: "Declaração de variáveis (caso 2)",
                                    variaveis: "numeroGrande = 1234",
                                    explanation: "Inicializamos a variável para o segundo exemplo (extração do último dígito)"
                                },
                                {
                                    step: 5,
                                    operacao: "numeroGrande % 10",
                                    calculo: "1234 % 10 = 4",
                                    resultado: "ultimoDigito = 4",
                                    explanation: "Calculamos o resto da divisão de 1234 por 10, que é 4 (o último dígito do número)"
                                },
                                {
                                    step: 6,
                                    operacao: "Exibir resultado (caso 2)",
                                    saida: "2) Último dígito de 1234: 4",
                                    explanation: "Exibimos o último dígito extraído no console"
                                },
                                {
                                    step: 7,
                                    operacao: "Declaração de variáveis (caso 3)",
                                    variaveis: "total = 13, tamanhoPacote = 5",
                                    explanation: "Inicializamos as variáveis para o terceiro exemplo (cálculo de itens restantes)"
                                },
                                {
                                    step: 8,
                                    operacao: "total % tamanhoPacote",
                                    calculo: "13 % 5 = 3",
                                    resultado: "resto = 3",
                                    explanation: "Calculamos o resto da divisão de 13 por 5, que é 3. Isso significa que após formar grupos de 5 itens, sobram 3 itens"
                                },
                                {
                                    step: 9,
                                    operacao: "Exibir resultado (caso 3)",
                                    saida: "3) Resto da divisão de 13 por 5: 3",
                                    explanation: "Exibimos o resultado da operação no console"
                                }
                            ]
                        },
                        {
                            id: "dia3-desafio1-v6",
                            title: "Exponenciação",
                            statement: `<h2>Operações Básicas com JavaScript - Exponenciação</h2>
                            <p>Neste desafio, vamos explorar a operação de exponenciação em JavaScript, utilizando exemplos práticos para entender como funciona a elevação de um número a uma potência.</p>
                            <p>Iremos trabalhar com três casos diferentes:</p>
                            <ol>
                                <li>Calcular uma potência básica (um número elevado a outro)</li>
                                <li>Calcular a área de um quadrado usando exponenciação</li>
                                <li>Calcular o volume de um cubo usando exponenciação</li>
                            </ol>
                            <h3>Entrada:</h3>
                            <p>Valores numéricos para realizar operações de exponenciação.</p>
                            <h3>Saída:</h3>
                            <p>Resultados das operações de exponenciação com suas respectivas descrições.</p>`,
                            code: `// ---------- EXPONENCIAÇÃO ----------
console.log("=== EXPONENCIAÇÃO ===");

// 1) Exemplo: 2 elevado a 4
let base = 2;
let expoente = 4;
let resultadoExpo = base ** expoente;
console.log("1) 2 elevado a 4 =", resultadoExpo);

console.log("\\n");

// 2) Área de um quadrado (lado²)
let lado = 5;
let areaQuadrado = lado ** 2;
console.log("2) Área de um quadrado com lado 5:", areaQuadrado);

console.log("\\n");

// 3) Volume de um cubo (lado³)
let dimensao = 3;
let volumeCubo = dimensao ** 3;
console.log("3) Volume de um cubo com lado 3:", volumeCubo);

console.log("\\n==============================\\n");`,
                            explanation: `<p>Este algoritmo implementa operações de exponenciação em JavaScript. Vamos analisá-lo linha por linha:</p>
                            
                            <pre><code>// ---------- EXPONENCIAÇÃO ----------</code></pre>
                            <p>Comentário que delimita o início da seção sobre operações de exponenciação, organizando o código e facilitando a identificação desta funcionalidade específica.</p>
                            
                            <pre><code>console.log("=== EXPONENCIAÇÃO ===");</code></pre>
                            <p>Exibe um cabeçalho no console que indica o início dos exemplos de operações de exponenciação, criando uma separação visual entre diferentes seções do código.</p>
                            
                            <h4>Exemplo 1: Potência básica</h4>
                            
                            <pre><code>let base = 2;</code></pre>
                            <p>Declara e inicializa a variável <code>base</code> com o valor 2, representando o número que será elevado a uma potência (o número base da operação).</p>
                            
                            <pre><code>let expoente = 4;</code></pre>
                            <p>Declara e inicializa a variável <code>expoente</code> com o valor 4, representando a potência à qual a base será elevada, ou seja, quantas vezes o número base será multiplicado por si mesmo.</p>
                            
                            <pre><code>let resultadoExpo = base ** expoente;</code></pre>
                            <p>Realiza a operação de exponenciação usando o operador <code>**</code>, que eleva a <code>base</code> (2) à potência definida pelo <code>expoente</code> (4). Isso equivale a multiplicar 2 por si mesmo 4 vezes: 2 × 2 × 2 × 2 = 16. O resultado (16) é armazenado na variável <code>resultadoExpo</code>. O operador <code>**</code> foi introduzido no ECMAScript 2016 (ES7) e proporciona uma sintaxe mais concisa do que a antiga função <code>Math.pow()</code>.</p>
                            
                            <pre><code>console.log("1) 2 elevado a 4 =", resultadoExpo);</code></pre>
                            <p>Exibe no console uma mensagem explicativa junto com o resultado da operação de exponenciação (16). Esta saída demonstra o uso básico do operador de exponenciação para calcular potências.</p>
                            
                            <pre><code>console.log("\\n");</code></pre>
                            <p>Insere uma linha em branco no console para separar visualmente este exemplo do próximo, melhorando a legibilidade dos resultados.</p>
                            
                            <h4>Exemplo 2: Cálculo de área de um quadrado</h4>
                            
                            <pre><code>let lado = 5;</code></pre>
                            <p>Declara e inicializa a variável <code>lado</code> com o valor 5, representando o comprimento do lado de um quadrado em unidades de medida arbitrárias.</p>
                            
                            <pre><code>let areaQuadrado = lado ** 2;</code></pre>
                            <p>Utiliza o operador de exponenciação (<code>**</code>) para elevar o valor do <code>lado</code> (5) ao quadrado (potência 2). Isso calcula a área do quadrado usando a fórmula matemática "área = lado²". O resultado (5² = 5 × 5 = 25) é armazenado na variável <code>areaQuadrado</code>. Este exemplo mostra uma aplicação prática da exponenciação em cálculos geométricos.</p>
                            
                            <pre><code>console.log("2) Área de um quadrado com lado 5:", areaQuadrado);</code></pre>
                            <p>Exibe no console uma mensagem explicativa junto com o valor calculado da área do quadrado (25). Esta saída ilustra como a exponenciação pode ser usada em fórmulas matemáticas aplicadas à geometria.</p>
                            
                            <pre><code>console.log("\\n");</code></pre>
                            <p>Insere outra linha em branco no console para separar este exemplo do próximo, facilitando a leitura dos diferentes resultados.</p>
                            
                            <h4>Exemplo 3: Cálculo de volume de um cubo</h4>
                            
                            <pre><code>let dimensao = 3;</code></pre>
                            <p>Declara e inicializa a variável <code>dimensao</code> com o valor 3, representando o comprimento da aresta de um cubo em unidades de medida arbitrárias.</p>
                            
                            <pre><code>let volumeCubo = dimensao ** 3;</code></pre>
                            <p>Utiliza o operador de exponenciação (<code>**</code>) para elevar o valor da <code>dimensao</code> (3) ao cubo (potência 3). Isso calcula o volume do cubo usando a fórmula matemática "volume = lado³". O resultado (3³ = 3 × 3 × 3 = 27) é armazenado na variável <code>volumeCubo</code>. Este exemplo demonstra como a exponenciação pode ser usada em cálculos tridimensionais.</p>
                            
                            <pre><code>console.log("3) Volume de um cubo com lado 3:", volumeCubo);</code></pre>
                            <p>Exibe no console uma mensagem explicativa junto com o valor calculado do volume do cubo (27). Esta saída mostra outra aplicação prática da exponenciação, desta vez para calcular o volume de um sólido geométrico.</p>
                            
                            <pre><code>console.log("\\n==============================\\n");</code></pre>
                            <p>Finaliza a seção de exponenciação com uma linha de separação visual no console, consistindo em uma quebra de linha, seguida por uma série de caracteres de igual (=) e outra quebra de linha. Isso demarca claramente o fim deste conjunto de exemplos.</p>
                            
                            <h4>Considerações finais</h4>
                            <p>Este algoritmo demonstra o uso do operador <code>**</code> para realizar exponenciação em diferentes contextos práticos. A exponenciação é uma operação matemática fundamental que tem aplicações em diversos campos, como matemática, física, engenharia, finanças e computação gráfica. Em JavaScript, o operador <code>**</code> oferece uma maneira concisa e intuitiva de realizar cálculos de potência, sendo especialmente útil em fórmulas que envolvem quadrados, cubos e outras potências.</p>`,
                            trace: [
                                {
                                    step: 1,
                                    operacao: "Declaração de variáveis (caso 1)",
                                    variaveis: "base = 2, expoente = 4",
                                    explanation: "Inicializamos as variáveis para o primeiro exemplo (potência básica)"
                                },
                                {
                                    step: 2,
                                    operacao: "base ** expoente",
                                    calculo: "2 ** 4 = 2 × 2 × 2 × 2 = 16",
                                    resultado: "resultadoExpo = 16",
                                    explanation: "Calculamos 2 elevado a 4, ou seja, 2 multiplicado por si mesmo 4 vezes"
                                },
                                {
                                    step: 3,
                                    operacao: "Exibir resultado (caso 1)",
                                    saida: "1) 2 elevado a 4 = 16",
                                    explanation: "Exibimos o resultado da operação no console"
                                },
                                {
                                    step: 4,
                                    operacao: "Declaração de variáveis (caso 2)",
                                    variaveis: "lado = 5",
                                    explanation: "Inicializamos a variável para o segundo exemplo (área do quadrado)"
                                },
                                {
                                    step: 5,
                                    operacao: "lado ** 2",
                                    calculo: "5 ** 2 = 5 × 5 = 25",
                                    resultado: "areaQuadrado = 25",
                                    explanation: "Calculamos a área do quadrado elevando o lado ao quadrado (potência 2)"
                                },
                                {
                                    step: 6,
                                    operacao: "Exibir resultado (caso 2)",
                                    saida: "2) Área de um quadrado com lado 5: 25",
                                    explanation: "Exibimos o resultado da operação no console"
                                },
                                {
                                    step: 7,
                                    operacao: "Declaração de variáveis (caso 3)",
                                    variaveis: "dimensao = 3",
                                    explanation: "Inicializamos a variável para o terceiro exemplo (volume do cubo)"
                                },
                                {
                                    step: 8,
                                    operacao: "dimensao ** 3",
                                    calculo: "3 ** 3 = 3 × 3 × 3 = 27",
                                    resultado: "volumeCubo = 27",
                                    explanation: "Calculamos o volume do cubo elevando a dimensão ao cubo (potência 3)"
                                },
                                {
                                    step: 9,
                                    operacao: "Exibir resultado (caso 3)",
                                    saida: "3) Volume de um cubo com lado 3: 27",
                                    explanation: "Exibimos o resultado da operação no console"
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
                            statement: `<h2>Renovação da CNH</h2>
                            <p>Vamos supor que estamos criando um sistema para controlar a renovação da carteira de motorista e precisamos saber em quanto tempo a mesma irá vencer de acordo com a legislação.</p>
                            <p>Regras para o vencimento da CNH:</p>
                            <ol>
                                <li>De acordo com a lei, se você está tirando a carteira pela 1ª vez (independentemente da sua idade), o tempo de vencimento dela é de 1 ano;</li>
                                <li>Se você tem idade inferior a 50 anos o vencimento é de 10 anos;</li>
                                <li>Se for igual ou superior a 50 anos ou inferior a 70 anos o vencimento é de 5 anos;</li>
                                <li>Mas se for igual ou superior a 70 anos o vencimento será de 3 anos.</li>
                            </ol>
                            <h3>Entrada:</h3>
                            <p>A informação se é a primeira vez tirando a carteira (sim/nao) e a idade da pessoa.</p>
                            <h3>Saída:</h3>
                            <p>O tempo de vencimento da CNH com base nas regras estabelecidas.</p>`,
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
                            explanation: `<p>Este algoritmo implementa a lógica para determinar o tempo de vencimento de uma Carteira Nacional de Habilitação (CNH). Vamos analisá-lo linha por linha:</p>
                            
                            <pre><code>// === DESAFIO 01: Renovação da CNH ===</code></pre>
                            <p>Comentário que indica o título do desafio, organizando o código e identificando sua finalidade.</p>
                            
                            <pre><code>//
// Regras:
// 1) Se é a primeira carteira (independente da idade) => vencimento em 1 ano
// 2) Se a idade é menor que 50 anos => vencimento em 10 anos
// 3) Se a idade é >= 50 e < 70 => vencimento em 5 anos
// 4) Se a idade é >= 70 => vencimento em 3 anos</code></pre>
                            <p>Comentários que documentam as regras de negócio que o algoritmo implementa. Esta prática é fundamental para tornar o código mais compreensível e manutenível, especialmente quando as regras são complexas ou baseadas em legislação específica.</p>
                            
                            <pre><code>// Solicita os dados ao usuário
let primeiraVezInput = prompt("É a primeira vez que você está tirando a carteira? (sim/nao)");</code></pre>
                            <p>Declara a variável <code>primeiraVezInput</code> e atribui a ela o valor retornado pela função <code>prompt()</code>, que exibe uma caixa de diálogo solicitando ao usuário que informe se é a primeira vez que está tirando a carteira. A resposta do usuário é armazenada como texto (string).</p>
                            
                            <pre><code>let idadeInput = prompt("Qual a sua idade?");</code></pre>
                            <p>Declara a variável <code>idadeInput</code> e atribui a ela o valor retornado por outro <code>prompt()</code>, solicitando ao usuário que informe sua idade. Novamente, a resposta é armazenada como texto, mesmo que o usuário digite números.</p>
                            
                            <pre><code>// Converte e normaliza as entradas
let primeiraVez = primeiraVezInput.toLowerCase() === "sim";</code></pre>
                            <p>Declara a variável <code>primeiraVez</code> e atribui a ela um valor booleano (true/false) baseado na comparação. Primeiro, converte o texto de <code>primeiraVezInput</code> para minúsculas usando <code>toLowerCase()</code>, garantindo que "SIM", "Sim" ou "sim" sejam tratados da mesma forma. Em seguida, compara o resultado com a string "sim". Se forem iguais, <code>primeiraVez</code> recebe <code>true</code>; caso contrário, recebe <code>false</code>.</p>
                            
                            <pre><code>let idade = parseInt(idadeInput);</code></pre>
                            <p>Declara a variável <code>idade</code> e atribui a ela o resultado da conversão de <code>idadeInput</code> (que é uma string) para um número inteiro, usando a função <code>parseInt()</code>. Esta conversão é necessária porque precisamos realizar comparações numéricas com a idade mais adiante no código.</p>
                            
                            <pre><code>console.log("=== DESAFIO 01: Renovação da CNH ===\\n");</code></pre>
                            <p>Exibe um título no console para indicar o início da saída do programa. O <code>\\n</code> adiciona uma quebra de linha após o título para melhorar a legibilidade.</p>
                            
                            <pre><code>// Verifica se a idade é válida
if (isNaN(idade) || idade <= 0) {</code></pre>
                            <p>Inicia uma estrutura condicional que verifica se a idade é inválida. A função <code>isNaN()</code> retorna <code>true</code> se o valor não for um número (por exemplo, se o usuário digitou letras). A condição <code>idade <= 0</code> verifica se a idade é zero ou negativa. O operador <code>||</code> (OU lógico) significa que a condição completa é verdadeira se qualquer uma das subcondições for verdadeira.</p>
                            
                            <pre><code>  console.log("Idade inválida. Verifique o valor digitado.");</code></pre>
                            <p>Se a idade for inválida, exibe uma mensagem de erro no console. Esta é uma validação de entrada importante para garantir que o algoritmo trabalhe apenas com dados válidos.</p>
                            
                            <pre><code>} else {</code></pre>
                            <p>Abre o bloco de código que será executado quando a idade for válida (não é NaN e é maior que zero).</p>
                            
                            <pre><code>  // Verifica se é a primeira carteira
  if (primeiraVez) {</code></pre>
                            <p>Inicia uma estrutura condicional aninhada que verifica se é a primeira vez que o usuário está tirando a carteira. Quando <code>primeiraVez</code> é <code>true</code>, este bloco é executado.</p>
                            
                            <pre><code    console.log("Como é a sua primeira carteira, o vencimento é de 1 ano.");</code></pre>
                            <p>Se for a primeira carteira, exibe a mensagem informando que o vencimento é de 1 ano, independentemente da idade do usuário. Esta é a implementação da primeira regra de negócio.</p>
                            
                            <pre><code  } else {</code></pre>
                            <p>Abre o bloco de código que será executado quando não for a primeira carteira. Aqui continuamos para verificar as demais regras baseadas na idade.</p>
                            
                            <pre><code    // Caso não seja a primeira vez, verifica a idade
    if (idade < 50) {</code></pre>
                            <p>Inicia outra estrutura condicional aninhada que verifica se a idade é menor que 50 anos.</p>
                            
                            <pre><code      console.log("O vencimento da sua CNH é de 10 anos.");</code></pre>
                            <p>Se a idade for menor que 50 anos e não for a primeira carteira, exibe a mensagem informando que o vencimento é de 10 anos. Esta é a implementação da segunda regra de negócio.</p>
                            
                            <pre><code    } else if (idade >= 50 && idade < 70) {</code></pre>
                            <p>Verifica se a idade está entre 50 e 69 anos (inclusive). O operador <code>&&</code> (E lógico) significa que ambas as condições precisam ser verdadeiras: a idade deve ser maior ou igual a 50 E menor que 70.</p>
                            
                            <pre><code      console.log("O vencimento da sua CNH é de 5 anos.");</code></pre>
                            <p>Se a idade estiver entre 50 e 69 anos e não for a primeira carteira, exibe a mensagem informando que o vencimento é de 5 anos. Esta é a implementação da terceira regra de negócio.</p>
                            
                            <pre><code    } else {</code></pre>
                            <p>Abre o bloco final que será executado quando nenhuma das condições anteriores for verdadeira, ou seja, quando a idade for 70 anos ou mais.</p>
                            
                            <pre><code      console.log("O vencimento da sua CNH é de 3 anos.");</code></pre>
                            <p>Se a idade for 70 anos ou mais e não for a primeira carteira, exibe a mensagem informando que o vencimento é de 3 anos. Esta é a implementação da quarta regra de negócio.</p>
                            
                            <pre><code    }
  }
}</code></pre>
                            <p>Fechamento dos blocos condicionais aninhados.</p>
                            
                            <h4>Considerações finais</h4>
                            <p>Este algoritmo demonstra a implementação de regras de negócio complexas usando estruturas condicionais aninhadas (if/else). A abordagem utilizada segue um fluxo lógico claro: primeiro valida a entrada, depois verifica a condição prioritária (se é a primeira carteira) e, em seguida, aplica as regras baseadas na idade quando necessário.</p>
                            
                            <p>O uso de estruturas condicionais aninhadas é uma técnica fundamental na programação para implementar lógicas de decisão que dependem de múltiplas condições inter-relacionadas. Neste caso, as regras têm uma hierarquia natural, onde a verificação de primeira carteira tem precedência sobre as verificações de idade.</p>`,
                            trace: [
                                {
                                    step: 1,
                                    operacao: "Entrada de dados",
                                    entrada: "primeiraVezInput = 'nao', idadeInput = '45'",
                                    explanation: "O usuário informa que não é a primeira vez tirando a carteira e sua idade é 45 anos"
                                },
                                {
                                    step: 2,
                                    operacao: "Conversão e normalização",
                                    processamento: "primeiraVez = false, idade = 45",
                                    explanation: "Convertemos a entrada 'nao' para o valor booleano false e o texto '45' para o número 45"
                                },
                                {
                                    step: 3,
                                    operacao: "Verificação de idade válida",
                                    condicao: "isNaN(idade) || idade <= 0",
                                    resultado: "false (idade é um número válido)",
                                    explanation: "Verificamos se idade é um número válido e maior que zero, o que é verdadeiro (idade = 45)"
                                },
                                {
                                    step: 4,
                                    operacao: "Verificação se é primeira vez",
                                    condicao: "primeiraVez",
                                    resultado: "false (não é a primeira vez)",
                                    explanation: "Verificamos se é a primeira vez tirando a carteira, o que é falso"
                                },
                                {
                                    step: 5,
                                    operacao: "Verificação da idade < 50",
                                    condicao: "idade < 50",
                                    resultado: "true (idade é menor que 50)",
                                    explanation: "Verificamos se a idade é menor que 50 anos, o que é verdadeiro (idade = 45)"
                                },
                                {
                                    step: 6,
                                    operacao: "Resultado final",
                                    saida: "O vencimento da sua CNH é de 10 anos.",
                                    explanation: "Como não é a primeira vez e a idade é menor que 50 anos, o vencimento é de 10 anos"
                                }
                            ]
                        },
                        {
                            id: "dia4-desafio1-v2",
                            title: "Versão com if/else if",
                            statement: `<h2>Renovação da CNH (versão com if, else if)</h2>
                            <p>Vamos supor que estamos criando um sistema para controlar a renovação da carteira de motorista e precisamos saber em quanto tempo a mesma irá vencer de acordo com a legislação.</p>
                            <p>Esta implementação usa uma estrutura alternativa com if/else if em sequência.</p>
                            <p>Regras para o vencimento da CNH:</p>
                            <ol>
                                <li>De acordo com a lei, se você está tirando a carteira pela 1ª vez (independentemente da sua idade), o tempo de vencimento dela é de 1 ano;</li>
                                <li>Se você tem idade inferior a 50 anos o vencimento é de 10 anos;</li>
                                <li>Se for igual ou superior a 50 anos ou inferior a 70 anos o vencimento é de 5 anos;</li>
                                <li>Mas se for igual ou superior a 70 anos o vencimento será de 3 anos.</li>
                            </ol>
                            <h3>Entrada:</h3>
                            <p>A informação se é a primeira vez tirando a carteira (sim/nao) e a idade da pessoa.</p>
                            <h3>Saída:</h3>
                            <p>O tempo de vencimento da CNH com base nas regras estabelecidas.</p>`,
                            code: `// === DESAFIO 01: Renovação da CNH (versão com if, else if) ===
//
// Este código solicita que o usuário informe se é a primeira vez que está tirando a CNH 
// e sua idade, para determinar o prazo de vencimento da carteira:
//
// - Se for a primeira carteira (independente da idade): vencimento em 1 ano
// - Se não for a primeira e a idade for menor que 50 anos: vencimento em 10 anos
// - Se não for a primeira e a idade for entre 50 (inclusive) e 70 anos: vencimento em 5 anos
// - Se não for a primeira e a idade for 70 ou mais: vencimento em 3 anos

let primeiraVezInput = prompt("É a primeira vez que você está tirando a carteira? (sim/nao)").toLowerCase();
let idade = parseInt(prompt("Qual a sua idade?"));

console.log("=== DESAFIO 01: Renovação da CNH ===\\n");

// Verifica se a idade é um valor válido
if (isNaN(idade) || idade <= 0) {
  console.log("Idade inválida. Verifique o valor digitado.");
} else if (primeiraVezInput === "sim") {
  console.log("Como é a sua primeira carteira, o vencimento é de 1 ano.");
} else if (idade < 50) {
  console.log("O vencimento da sua CNH é de 10 anos.");
} else if (idade < 70) {
  console.log("O vencimento da sua CNH é de 5 anos.");
} else {
  console.log("O vencimento da sua CNH é de 3 anos.");
}`,
                            explanation: `<p>Este algoritmo implementa a mesma lógica do exemplo anterior, mas pode ser testado com entradas diferentes para demonstrar outros caminhos de execução.</p>
                            <p>O código continua usando estruturas condicionais (if/else) para implementar as regras de vencimento da CNH:</p>
                            <ol>
                                <li>Se é a primeira carteira (independentemente da idade), o vencimento é de 1 ano.</li>
                                <li>Se não é a primeira carteira e a idade é menor que 50 anos, o vencimento é de 10 anos.</li>
                                <li>Se não é a primeira carteira e a idade está entre 50 e 69 anos (inclusive), o vencimento é de 5 anos.</li>
                                <li>Se não é a primeira carteira e a idade é 70 anos ou mais, o vencimento é de 3 anos.</li>
                            </ol>
                            <p>Este exemplo demonstra especialmente a situação em que a pessoa tem uma idade mais avançada, mostrando como o algoritmo se comporta para determinar um prazo de vencimento mais curto para pessoas idosas, o que é uma medida de segurança para garantir avaliações médicas mais frequentes.</p>`,
                            trace: [
                                {
                                    step: 1,
                                    operacao: "Entrada de dados",
                                    entrada: "primeiraVezInput = 'nao', idadeInput = '72'",
                                    explanation: "O usuário informa que não é a primeira vez tirando a carteira e sua idade é 72 anos"
                                },
                                {
                                    step: 2,
                                    operacao: "Conversão e normalização",
                                    processamento: "primeiraVez = false, idade = 72",
                                    explanation: "Convertemos a entrada 'nao' para o valor booleano false e o texto '72' para o número 72"
                                },
                                {
                                    step: 3,
                                    operacao: "Verificação de idade válida",
                                    condicao: "isNaN(idade) || idade <= 0",
                                    resultado: "false (idade é um número válido)",
                                    explanation: "Verificamos se idade é um número válido e maior que zero, o que é verdadeiro (idade = 72)"
                                },
                                {
                                    step: 4,
                                    operacao: "Verificação se é primeira vez",
                                    condicao: "primeiraVez",
                                    resultado: "false (não é a primeira vez)",
                                    explanation: "Verificamos se é a primeira vez tirando a carteira, o que é falso"
                                },
                                {
                                    step: 5,
                                    operacao: "Verificação da idade < 50",
                                    condicao: "idade < 50",
                                    resultado: "false (idade não é menor que 50)",
                                    explanation: "Verificamos se a idade é menor que 50 anos, o que é falso (idade = 72)"
                                },
                                {
                                    step: 6,
                                    operacao: "Verificação da idade >= 50 e < 70",
                                    condicao: "idade >= 50 && idade < 70",
                                    resultado: "false (idade não está entre 50 e 69)",
                                    explanation: "Verificamos se a idade está entre 50 e 69 anos, o que é falso (idade = 72)"
                                },
                                {
                                    step: 7,
                                    operacao: "Resultado final",
                                    saida: "O vencimento da sua CNH é de 3 anos.",
                                    explanation: "Como não é a primeira vez e a idade é 70 anos ou mais, o vencimento é de 3 anos"
                                }
                            ]
                        },
                        {
                            id: "dia4-desafio1-v3",
                            title: "Versão com if, else if",
                            statement: `<h2>Renovação da CNH - Versão com if, else if</h2>
                            <p>Esta é uma versão alternativa do mesmo sistema de controle de renovação da CNH, mas implementada com uma estrutura de controle diferente usando if, else if em sequência, em vez de ifs aninhados.</p>
                            <p>As mesmas regras continuam se aplicando:</p>
                            <ol>
                                <li>De acordo com a lei, se você está tirando a carteira pela 1ª vez (independentemente da sua idade), o tempo de vencimento dela é de 1 ano;</li>
                                <li>Se você tem idade inferior a 50 anos o vencimento é de 10 anos;</li>
                                <li>Se for igual ou superior a 50 anos ou inferior a 70 anos o vencimento é de 5 anos;</li>
                                <li>Mas se for igual ou superior a 70 anos o vencimento será de 3 anos.</li>
                            </ol>
                            <h3>Entrada:</h3>
                            <p>A informação se é a primeira vez tirando a carteira (sim/nao) e a idade da pessoa.</p>
                            <h3>Saída:</h3>
                            <p>O tempo de vencimento da CNH com base nas regras estabelecidas.</p>`,
                            code: `// === DESAFIO 01: Renovação da CNH (versão com if, else if) ===
//
// Este código solicita que o usuário informe se é a primeira vez que está tirando a CNH 
// e sua idade, para determinar o prazo de vencimento da carteira:
//
// - Se for a primeira carteira (independente da idade): vencimento em 1 ano
// - Se não for a primeira e a idade for menor que 50 anos: vencimento em 10 anos
// - Se não for a primeira e a idade for entre 50 (inclusive) e 70 anos: vencimento em 5 anos
// - Se não for a primeira e a idade for 70 ou mais: vencimento em 3 anos

let primeiraVezInput = prompt("É a primeira vez que você está tirando a carteira? (sim/nao)").toLowerCase();
let idade = parseInt(prompt("Qual a sua idade?"));

console.log("=== DESAFIO 01: Renovação da CNH ===\\n");

// Verifica se a idade é um valor válido
if (isNaN(idade) || idade <= 0) {
  console.log("Idade inválida. Verifique o valor digitado.");
} else if (primeiraVezInput === "sim") {
  console.log("Como é a sua primeira carteira, o vencimento é de 1 ano.");
} else if (idade < 50) {
  console.log("O vencimento da sua CNH é de 10 anos.");
} else if (idade < 70) {
  console.log("O vencimento da sua CNH é de 5 anos.");
} else {
  console.log("O vencimento da sua CNH é de 3 anos.");
}`,
                            explanation: `<p>Este algoritmo implementa a lógica para determinar o tempo de vencimento de uma CNH usando uma estrutura condicional linear. Vamos analisá-lo linha por linha:</p>
                            
                            <pre><code>// === DESAFIO 01: Renovação da CNH (versão com if, else if) ===</code></pre>
                            <p>Comentário que indica o título do desafio e especifica que esta é uma versão alternativa usando a estrutura if/else if em sequência.</p>
                            
                            <pre><code>//
// Este código solicita que o usuário informe se é a primeira vez que está tirando a CNH 
// e sua idade, para determinar o prazo de vencimento da carteira:
//
// - Se for a primeira carteira (independente da idade): vencimento em 1 ano
// - Se não for a primeira e a idade for menor que 50 anos: vencimento em 10 anos
// - Se não for a primeira e a idade for entre 50 (inclusive) e 70 anos: vencimento em 5 anos
// - Se não for a primeira e a idade for 70 ou mais: vencimento em 3 anos</code></pre>
                            <p>Comentários que descrevem a finalidade do código e as regras de negócio que serão implementadas. Os comentários explicativos são ainda mais detalhados nesta versão, tornando o código mais autoexplicativo.</p>
                            
                            <pre><code>let primeiraVezInput = prompt("É a primeira vez que você está tirando a carteira? (sim/nao)").toLowerCase();</code></pre>
                            <p>Declara a variável <code>primeiraVezInput</code>, solicita ao usuário se é a primeira vez tirando a carteira usando a função <code>prompt()</code>, e imediatamente converte a resposta para minúsculas com <code>toLowerCase()</code>. Esta abordagem é mais concisa que a versão anterior, pois combina a coleta de dados e a normalização em uma única linha.</p>
                            
                            <pre><code>let idade = parseInt(prompt("Qual a sua idade?"));</code></pre>
                            <p>Declara a variável <code>idade</code>, solicita a idade do usuário com <code>prompt()</code> e converte diretamente o resultado para um número inteiro com <code>parseInt()</code>. Novamente, esta é uma abordagem mais concisa que combina a coleta de dados e a conversão em uma única linha.</p>
                            
                            <pre><code>console.log("=== DESAFIO 01: Renovação da CNH ===\\n");</code></pre>
                            <p>Exibe o título do desafio no console, seguido por uma quebra de linha para melhorar a legibilidade da saída.</p>
                            
                            <pre><code>// Verifica se a idade é um valor válido
if (isNaN(idade) || idade <= 0) {</code></pre>
                            <p>Inicia a primeira condição que verifica se a idade é inválida (não é um número ou é menor ou igual a zero). Este é o primeiro caso a ser verificado para garantir a validação dos dados antes de prosseguir com a lógica principal.</p>
                            
                            <pre><code>  console.log("Idade inválida. Verifique o valor digitado.");</code></pre>
                            <p>Se a idade for inválida, exibe uma mensagem de erro no console. A validação de dados é mantida como prioridade, assim como na versão anterior.</p>
                            
                            <pre><code>} else if (primeiraVezInput === "sim") {</code></pre>
                            <p>Se a idade for válida, verifica se é a primeira vez que o usuário está tirando a carteira, comparando <code>primeiraVezInput</code> diretamente com a string "sim". Diferente da versão anterior, que usava uma variável booleana, esta versão compara diretamente as strings, mas o resultado é equivalente.</p>
                            
                            <pre><code>  console.log("Como é a sua primeira carteira, o vencimento é de 1 ano.");</code></pre>
                            <p>Se for a primeira carteira, exibe a mensagem informando que o vencimento é de 1 ano, independentemente da idade. Esta parte implementa a primeira regra de negócio.</p>
                            
                            <pre><code>} else if (idade < 50) {</code></pre>
                            <p>Se não for a primeira carteira e a idade for válida, verifica se a idade é menor que 50 anos. Esta é a primeira verificação de idade na cadeia de condições.</p>
                            
                            <pre><code>  console.log("O vencimento da sua CNH é de 10 anos.");</code></pre>
                            <p>Se a idade for menor que 50 anos e não for a primeira carteira, exibe a mensagem informando que o vencimento é de 10 anos. Esta parte implementa a segunda regra de negócio.</p>
                            
                            <pre><code>} else if (idade < 70) {</code></pre>
                            <p>Se não for a primeira carteira, a idade for válida e não for menor que 50, verifica se a idade é menor que 70. Observe que não é necessário verificar explicitamente se a idade é maior ou igual a 50, pois se chegamos a este ponto, sabemos que a idade já não é menor que 50.</p>
                            
                            <pre><code>  console.log("O vencimento da sua CNH é de 5 anos.");</code></pre>
                            <p>Se a idade estiver entre 50 e 69 anos (inclusive) e não for a primeira carteira, exibe a mensagem informando que o vencimento é de 5 anos. Esta parte implementa a terceira regra de negócio.</p>
                            
                            <pre><code>} else {</code></pre>
                            <p>Se nenhuma das condições anteriores for verdadeira, significa que a idade é válida, não é a primeira carteira, e a idade é 70 anos ou mais.</p>
                            
                            <pre><code>  console.log("O vencimento da sua CNH é de 3 anos.");</code></pre>
                            <p>Exibe a mensagem informando que o vencimento é de 3 anos para pessoas com 70 anos ou mais que não estão tirando a primeira carteira. Esta parte implementa a quarta e última regra de negócio.</p>
                            
                            <pre><code>}</code></pre>
                            <p>Fecha o bloco da estrutura condicional.</p>
                            
                            <h4>Considerações finais</h4>
                            <p>Esta versão do algoritmo implementa a mesma lógica da versão anterior, mas com uma estrutura de controle linear utilizando if/else if em sequência, em vez de estruturas condicionais aninhadas. As principais diferenças são:</p>
                            
                            <ol>
                                <li>Maior clareza e facilidade de leitura, pois todas as condições estão no mesmo nível de indentação;</li>
                                <li>Código mais conciso na parte de coleta e processamento de dados;</li>
                                <li>Simplificação da verificação de faixa etária, removendo a necessidade de usar o operador lógico AND (&&) para verificar se a idade está entre 50 e 69 anos.</li>
                            </ol>
                            
                            <p>Esta abordagem é geralmente preferida quando as condições são mutuamente exclusivas e seguem uma ordem natural de prioridade. A estrutura linear facilita a manutenção do código e reduz a possibilidade de erros lógicos que podem ocorrer em estruturas aninhadas complexas.</p>`,
                            trace: [
                                {
                                    step: 1,
                                    operacao: "Entrada de dados",
                                    entrada: "primeiraVezInput = 'nao', idade = 55",
                                    explanation: "O usuário informa que não é a primeira vez tirando a carteira e sua idade é 55 anos"
                                },
                                {
                                    step: 2,
                                    operacao: "Normalização da entrada",
                                    processamento: "primeiraVezInput = 'nao' (já em minúsculas), idade = 55 (convertido para número)",
                                    explanation: "A entrada 'nao' já está em minúsculas e o texto '55' é convertido para o número 55"
                                },
                                {
                                    step: 3,
                                    operacao: "Verificação de idade válida",
                                    condicao: "isNaN(idade) || idade <= 0",
                                    resultado: "false (idade é um número válido)",
                                    explanation: "Verificamos se idade é um número válido e maior que zero, o que é verdadeiro (idade = 55)"
                                },
                                {
                                    step: 4,
                                    operacao: "Verificação se é primeira vez",
                                    condicao: "primeiraVezInput === 'sim'",
                                    resultado: "false (não é a primeira vez)",
                                    explanation: "Verificamos se é a primeira vez tirando a carteira, o que é falso"
                                },
                                {
                                    step: 5,
                                    operacao: "Verificação se idade < 50",
                                    condicao: "idade < 50",
                                    resultado: "false (idade não é menor que 50)",
                                    explanation: "Verificamos se a idade é menor que 50 anos, o que é falso (idade = 55)"
                                },
                                {
                                    step: 6,
                                    operacao: "Verificação se idade < 70",
                                    condicao: "idade < 70",
                                    resultado: "true (idade é menor que 70)",
                                    explanation: "Verificamos se a idade é menor que 70 anos, o que é verdadeiro (idade = 55)"
                                },
                                {
                                    step: 7,
                                    operacao: "Resultado final",
                                    saida: "O vencimento da sua CNH é de 5 anos.",
                                    explanation: "Como não é a primeira vez e a idade está entre 50 e 69 anos, o vencimento é de 5 anos"
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
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');

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
            // Adiciona separador entre os exemplos para operações básicas
            const isBasicOperation = challengeTitle.textContent === "Adição" || challengeTitle.textContent === "Subtração" || challengeTitle.textContent === "Multiplicação" || challengeTitle.textContent === "Divisão" || challengeTitle.textContent === "Módulo (Resto)" || challengeTitle.textContent === "Exponenciação";
            
            if ((step.step === 4 || step.step === 7) && isBasicOperation) {
                tableHTML += `<tr class="example-separator"><td colspan="${columns.size + 1}" style="background-color: #f0f0f0; font-weight: bold; text-align: left; padding: 8px;">Exemplo ${step.step === 4 ? '2' : '3'}</td></tr>`;
            }
            
            // Se for o primeiro passo e for uma operação básica, adiciona um título para o exemplo 1
            if (index === 0 && isBasicOperation) {
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
        
        if (challengeTitle.textContent === "Adição" || challengeTitle.textContent === "Subtração" || challengeTitle.textContent === "Multiplicação" || challengeTitle.textContent === "Divisão" || challengeTitle.textContent === "Módulo (Resto)" || challengeTitle.textContent === "Exponenciação") {
            // Títulos específicos para cada operação
            const operationTitles = {
                "Adição": ["Pontos em um jogo", "Horas trabalhadas", "Soma de salários"],
                "Subtração": ["Saldo do cartão de crédito", "Cálculo de idade", "Diferença entre números"],
                "Multiplicação": ["Ganho diário", "Multiplicação de média", "Total de horas mensais"],
                "Divisão": ["Cálculo de média", "Conversão para quilômetros", "Divisão de valor"],
                "Módulo (Resto)": ["Verificação de par/ímpar", "Extração do último dígito", "Cálculo de itens restantes"],
                "Exponenciação": ["Potência básica", "Área do quadrado", "Volume do cubo"]
            };
            
            const titles = operationTitles[challengeTitle.textContent];

            // Separar explicações por exemplos
            explanationHTML += `<div class="explanation-section"><h5>Exemplo 1 - ${titles[0]}:</h5><ul>`;
            traceData.slice(0, 3).forEach(step => {
                if (step.explanation) {
                    explanationHTML += `<li><strong>Passo ${step.step}:</strong> ${step.explanation}</li>`;
                }
            });
            explanationHTML += '</ul></div>';

            explanationHTML += `<div class="explanation-section"><h5>Exemplo 2 - ${titles[1]}:</h5><ul>`;
            traceData.slice(3, 6).forEach(step => {
                if (step.explanation) {
                    explanationHTML += `<li><strong>Passo ${step.step}:</strong> ${step.explanation}</li>`;
                }
            });
            explanationHTML += '</ul></div>';

            explanationHTML += `<div class="explanation-section"><h5>Exemplo 3 - ${titles[2]}:</h5><ul>`;
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
    
    // Toggle mobile menu (botão adicional para dispositivos móveis)
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
            
            // Scroll para o topo do sidebar quando aberto
            if (!sidebar.classList.contains('collapsed')) {
                sidebar.scrollTop = 0;
            }
        });
    }

    // Adiciona função para verificar se o dispositivo é móvel
    function isMobileDevice() {
        return window.innerWidth <= 768;
    }

    // Adiciona função para fechar o sidebar em dispositivos móveis
    function closeSidebarOnMobile() {
        if (isMobileDevice() && !sidebar.classList.contains('collapsed')) {
            sidebar.classList.add('collapsed');
            mainContent.classList.add('expanded');
        }
    }

    // Fecha o sidebar quando uma versão de desafio é selecionada em dispositivos móveis
    document.addEventListener('click', function(e) {
        const target = e.target;
        
        // Se clicar na versão do desafio em tela móvel, fecha o sidebar
        if ((target.classList.contains('version') || target.closest('.version')) && isMobileDevice()) {
            setTimeout(closeSidebarOnMobile, 200);
        }
    });

    // Evento de redimensionamento da janela
    window.addEventListener('resize', function() {
        if (isMobileDevice()) {
            // Em dispositivos móveis, inicia com o sidebar fechado
            sidebar.classList.add('collapsed');
            mainContent.classList.add('expanded');
        } else {
            // Em desktop, mostra o sidebar aberto
            sidebar.classList.remove('collapsed');
            mainContent.classList.remove('expanded');
        }
    });

    // Executa verificação de tamanho da tela na inicialização
    if (isMobileDevice()) {
        sidebar.classList.add('collapsed');
        mainContent.classList.add('expanded');
    }

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

    // Adiciona smooth scroll para elementos clicados
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 
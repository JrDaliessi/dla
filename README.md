# Portfolio de Desafios de Algoritmos

Um site responsivo para visualizar desafios de algoritmos com suas soluções e estudos de mesa detalhados. O projeto está disponível em duas versões: uma versão estática com HTML, CSS e JavaScript puro, e uma versão moderna usando Next.js e TypeScript.

## 🚀 Características

- Navegação intuitiva por dias e desafios
- Visualização de enunciados, soluções e estudos de mesa
- Design responsivo para desktop e dispositivos móveis
- Syntax highlighting para códigos JavaScript
- Interface amigável com opções de copiar código
- Modo claro/escuro (versão Next.js)
- Persistência de estado da navegação

## 🛠️ Versões do Projeto

### Versão Estática (Root)

A versão estática está localizada na raiz do projeto e utiliza:

- HTML5
- CSS3 (com variáveis e media queries para responsividade)
- JavaScript vanilla
- Prism.js para syntax highlighting
- Font Awesome para ícones

#### Como Executar a Versão Estática

1. Clone o repositório
2. Abra o arquivo `index.html` em seu navegador

### Versão Next.js (/portfolio-algoritmos)

A versão moderna, localizada na pasta `/portfolio-algoritmos`, utiliza:

- Next.js 15.3.0
- TypeScript
- React
- Tailwind CSS
- Prism.js
- Context API para gerenciamento de estado

#### Como Executar a Versão Next.js

1. Navegue até a pasta do projeto:
   ```bash
   cd portfolio-algoritmos
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📚 Estrutura de Dados

O projeto organiza os desafios de algoritmos em uma estrutura hierárquica:

- **Dias**: Agrupamentos principais (ex: "Dia 1", "Dia 2", etc.)
  - **Desafios**: Problemas específicos dentro de cada dia
    - **Versões**: Diferentes implementações/abordagens para cada desafio

Cada versão de um desafio contém:
- Um enunciado detalhado
- Código da solução
- Explicação do código
- Estudo de mesa (trace table) para visualizar a execução passo a passo

## 🌐 Deploy

Este projeto está configurado para deploy na Vercel.

### Deploy da Versão Estática
A versão estática pode ser implantada em qualquer serviço de hospedagem estática como Vercel, Netlify, GitHub Pages, etc.

### Deploy da Versão Next.js
A maneira mais fácil de implantar a versão Next.js é usar a [Plataforma Vercel](https://vercel.com/new).

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para adicionar novos desafios, corrigir bugs ou melhorar a documentação.

1. Faça um fork do projeto
2. Crie sua branch de feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes. 
# Portfolio de Desafios de Algoritmos (Versão Next.js)

Esta é a versão moderna do Portfolio de Desafios de Algoritmos, desenvolvida com Next.js e TypeScript. O projeto oferece uma interface interativa para visualizar desafios de algoritmos, suas soluções e estudos de mesa detalhados.

## 🚀 Funcionalidades

- **Navegação Intuitiva**: Estrutura hierárquica de dias, desafios e versões
- **Visualização Completa**: Enunciados, soluções e estudos de mesa
- **Syntax Highlighting**: Destaque de sintaxe para os códigos JavaScript
- **Design Responsivo**: Experiência otimizada em dispositivos móveis e desktop
- **Tema Claro/Escuro**: Alternância entre temas para melhor leitura
- **Persistência de Estado**: Navegação e preferências salvas entre sessões

## 🛠️ Tecnologias Utilizadas

- **Next.js 15.3.0**: Framework React para renderização híbrida (SSR/CSR)
- **TypeScript**: Tipagem estática para código mais seguro e manutenível
- **React**: Biblioteca para construção de interfaces
- **Context API**: Gerenciamento de estado global
- **Tailwind CSS**: Framework CSS utility-first para estilização
- **Prism.js**: Biblioteca para syntax highlighting de código

## 🚦 Início Rápido

1. **Instale as dependências**:
   ```bash
   npm install
   # ou
   yarn install
   ```

2. **Execute o servidor de desenvolvimento**:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

3. **Acesse a aplicação**:
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📁 Estrutura do Projeto

```
src/
├── components/        # Componentes React reutilizáveis
│   ├── layouts/       # Componentes de layout (Sidebar, Layout)
│   └── ui/            # Componentes de interface (botões, cards, etc.)
├── contexts/          # Context API para gerenciamento de estado
├── data/              # Dados dos desafios
├── hooks/             # Hooks personalizados
├── pages/             # Páginas do Next.js
│   ├── _app.tsx       # Componente App principal
│   ├── index.tsx      # Página inicial
│   └── desafios/      # Páginas dinâmicas para desafios
├── styles/            # Estilos globais e de componentes
└── types/             # Definições de tipos TypeScript
```

## 🔧 Configuração

### Requisitos

- Node.js 18.x ou superior
- npm ou yarn

### Comandos Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Constrói a aplicação para produção
- `npm start`: Inicia a aplicação construída
- `npm run lint`: Executa a verificação de linting

## 🌐 Deploy

Este projeto está otimizado para deploy na Vercel, a plataforma dos criadores do Next.js:

1. Faça push do seu código para um repositório Git (GitHub, GitLab, Bitbucket)
2. Importe o projeto na [Vercel](https://vercel.com/new)
3. A Vercel detectará automaticamente as configurações do Next.js e fará o deploy

## 🔄 Relação com a Versão Estática

Este projeto é uma reimplementação moderna da versão estática (encontrada na raiz do repositório principal). As principais melhorias incluem:

- Arquitetura baseada em componentes
- Tipagem estática com TypeScript
- Melhor gerenciamento de estado com Context API
- Roteamento otimizado com Next.js
- Melhorias de performance e UX

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Implemente suas mudanças
4. Execute os testes e linting para garantir qualidade
5. Faça commit e push das suas alterações
6. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

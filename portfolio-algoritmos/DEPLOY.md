# Instruções de Deploy na Vercel

Este documento contém as instruções para fazer deploy desta aplicação Next.js na Vercel.

## Pré-requisitos

1. Uma conta na [Vercel](https://vercel.com)
2. Seu código em um repositório Git (GitHub, GitLab ou Bitbucket)

## Passos para Deploy

### 1. Prepare seu repositório

Certifique-se de que os arquivos de configuração estão corretamente configurados:
- `package.json` (dentro da pasta portfolio-algoritmos)
- `next.config.ts`
- `vercel.json`

### 2. Conecte à Vercel

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Importe seu repositório Git
3. Selecione a conta pessoal ou time onde o projeto será deployado

### 3. Configure o Projeto

Na tela de configuração do projeto:

1. **Nome do Projeto:** Defina um nome ou aceite o sugerido
2. **Framework Preset:** Deve ser automaticamente detectado como "Next.js"
3. **Root Directory:** Selecione a pasta `portfolio-algoritmos`
4. **Build Command:** Mantenha o padrão (`npm run build`)
5. **Output Directory:** Mantenha o padrão (`.next`)
6. **Install Command:** Mantenha o padrão (`npm install`)

### 4. Configurações de Ambiente

Se necessário, adicione as variáveis de ambiente no painel "Environment Variables":
- Copie as variáveis do arquivo `.env.example` e preencha os valores

### 5. Deploy

Clique no botão "Deploy" e aguarde o processo ser concluído.

## Atualizações Futuras

Para deployar atualizações, basta fazer push para a branch principal do seu repositório. A Vercel detectará as mudanças e fará o redeploy automaticamente.

## Domínio Personalizado (Opcional)

Para configurar um domínio personalizado:

1. Acesse o dashboard do projeto na Vercel
2. Vá para a aba "Domains"
3. Adicione seu domínio personalizado
4. Siga as instruções para configurar os registros DNS

## Monitoramento

Após o deploy, você pode monitorar:
- Performance
- Logs
- Analytics
- Status do deploy

através do dashboard da Vercel. 
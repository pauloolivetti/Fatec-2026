# App

## Descrição

Este é um projeto de aplicação web simples construído com Node.js e Express. A aplicação serve páginas estáticas HTML para um sistema básico de login e cadastro, incluindo uma página de erro 404. O servidor Express gerencia as rotas e serve arquivos estáticos como CSS e imagens.

## Funcionalidades

- Página inicial (`/`)
- Página de login (`/login`)
- Página de cadastro (`/cadastro`)
- Página de erro 404 para rotas não encontradas
- Servindo de arquivos estáticos (CSS, imagens) a partir da pasta `assets`

## Estrutura de Pastas

A estrutura de pastas do projeto é organizada da seguinte forma:

```
App/
├── package.json          # Arquivo de configuração do npm com dependências e scripts
├── server.js             # Arquivo principal do servidor Express
├── .gitignore            # Arquivo para ignorar arquivos no Git
└── public/               # Pasta contendo arquivos públicos servidos pelo servidor
    ├── README.md         # Arquivo README existente (não relacionado ao projeto atual)
    ├── assets/           # Pasta para recursos estáticos
    │   ├── css/          # Folhas de estilo CSS
    │   │   └── main.css  # Arquivo CSS principal
    │   └── img/          # Imagens do projeto
    │       ├── logo_cps_transparente.png
    │       ├── logo_dsm_transparente.png
    │       └── logo_fatec_transparente.png
    └── pages/            # Páginas HTML da aplicação
        ├── 404.html      # Página de erro 404
        ├── cadastro.html # Página de cadastro
        ├── index.html    # Página inicial
        └── login.html    # Página de login
```

### Descrição Detalhada da Estrutura

- **package.json**: Define as dependências do projeto (Express e dotenv), scripts para iniciar o servidor (`npm start` para produção, `npm run dev` para desenvolvimento com watch), e metadados básicos.

- **server.js**: O coração da aplicação. Configura o servidor Express, carrega variáveis de ambiente com dotenv, define rotas para as páginas HTML, serve arquivos estáticos da pasta `assets`, e trata erros 404.

- **public/**: Pasta raiz para arquivos acessíveis publicamente via navegador.
  - **assets/**: Contém recursos estáticos divididos em subpastas.
    - **css/**: Arquivos de estilo. Atualmente, contém `main.css` para estilização das páginas.
    - **img/**: Imagens utilizadas no projeto, como logotipos (CPS, DSM, FATEC).
  - **pages/**: Páginas HTML da aplicação. Cada arquivo corresponde a uma rota específica no servidor.
    - **index.html**: Página inicial da aplicação.
    - **login.html**: Formulário de login.
    - **cadastro.html**: Formulário de cadastro.
    - **404.html**: Página exibida quando uma rota não é encontrada.
  - **README.md**: Um arquivo README pré-existente que parece ser um template para um artigo acadêmico ou paper, não relacionado diretamente ao projeto atual.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (geralmente vem com Node.js)

## Instalação

1. Clone ou baixe o repositório.
2. Navegue até a pasta do projeto: `cd App`
3. Instale as dependências: `npm install`

## Configuração

Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

```
PORT=3000
```

Substitua `3000` pela porta desejada.

## Como Executar

### Modo Produção
Execute: `npm start`

### Modo Desenvolvimento (com watch)
Execute: `npm run dev`

O servidor iniciará e exibirá uma mensagem como: `Rodando em http://localhost:3000`

Acesse a aplicação no navegador através das rotas definidas.

## Dependências

- **express**: Framework web para Node.js.
- **dotenv**: Carrega variáveis de ambiente de um arquivo `.env`.

## Desenvolvimento

- As páginas HTML estão em `public/pages/`.
- Estilos em `public/assets/css/`.
- Imagens em `public/assets/img/`.
- Modificações no `server.js` requerem reinício do servidor (exceto no modo dev com watch).

## Contribuição

Para contribuir, faça um fork do repositório, crie uma branch para suas alterações e envie um pull request.

## Licença

Este projeto está sob a licença ISC.
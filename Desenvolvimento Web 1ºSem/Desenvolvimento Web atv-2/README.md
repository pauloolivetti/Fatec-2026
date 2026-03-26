# DMS CEP - Consulta de CEP

Este projeto é uma aplicação web simples construída com Node.js e Express para consulta de CEP no Brasil usando a API pública ViaCEP.

## 🧩 Funcionalidades

- Página inicial com campo para digitar CEP
- Validação de CEP (8 dígitos) antes da consulta
- Busca de endereço via `https://viacep.com.br/ws/{cep}/json/`
- Exibição de resultado de CEP válido com dados:
  - CEP, Logradouro, Complemento, Bairro, Cidade, Estado, Região, DDD
- Tratamento de erro:
  - CEP inválido (menos de 8 dígitos)
  - CEP não encontrado (`data.erro` retornado pela API)
  - Falha no serviço (HTTP não OK)

## 📁 Estrutura de pastas

- `server.js` - Servidor Express simples
- `.env` - Variável `PORT` (ex: `PORT=3000`)
- `public/` - Arquivos públicos
  - `pages/index.html` - Página principal
  - `assets/css/main.css` - Estilos
  - `assets/js/main.js` - Lógica de busca do CEP

## 🚀 Como usar

1. Instale dependências:
   - `npm install`
2. Crie `.env` com:
   - `PORT=3000`
3. Execute:
   - `npm start`
4. Acesse no navegador:
   - `http://localhost:3000`

## 🛠️ Trechos importantes

### `server.js`
- Rota `/` serve `public/pages/index.html`
- Estáticos `/assets` servem CSS e JS

### `public/assets/js/main.js`
- `handlecepSearch` faz fetch para ViaCEP
- Verifica:
  - `rawCep.length !== 8` → erro
  - `!response.ok` → erro
  - `data.erro` → CEP não encontrado
  - Caso OK -> exibe dados com `showresult`
- Evento Enter no input dispara consulta

## ✅ Observações

- É recomendado usar `try/catch` em `handlecepSearch` para capturar exceções de rede.

## 📌 Sugestões de melhoria

- Máscaras de CEP (`00000-000`)
- Indicador de carregando
- Requisições repetidas bloqueadas
- Armazenar histórico de pesquisas localmente

## 📝 Licença

- ISC

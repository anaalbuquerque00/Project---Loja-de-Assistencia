# Assistência Técnica — repositório-modelo

Ponto de partida do projeto da UC00615.

## Abrir no GitHub Codespaces

1. Na página deste repositório no GitHub, carregue no botão verde **Code**.
2. Escolha o separador **Codespaces** e carregue em **Create codespace on main**.
3. Espere que o ambiente termine de preparar (a primeira vez demora 1–3 minutos). O VS Code abre no browser e as dependências são instaladas automaticamente.

## Arrancar a aplicação

No terminal do VS Code (menu **Terminal → New Terminal**), escreva:

```bash
npm start
```

Deve aparecer `Servidor a correr em http://localhost:3000`. O Codespace abre a aplicação num novo separador; se não abrir, use o separador **Ports** e carregue no ícone do globo da porta 3000.

Para parar o servidor, carregue em `Ctrl+C` no terminal.

## Trabalhar no computador (sem Codespaces)

Instale o [Node.js 24 LTS](https://nodejs.org/) e o [VS Code](https://code.visualstudio.com/), abra esta pasta no VS Code e execute `npm install` e depois `npm start` no terminal.

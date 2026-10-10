# Sua cartinha de aniversário ♡

## Como abrir

Abra `index.html` no navegador. Para rodar com Python, abra um terminal nesta pasta e execute `python -m http.server 8000`; depois acesse `http://localhost:8000`.

## Personalizações rápidas

- **Fotos:** as imagens já estão em `assets`. Em `script.js`, edite a lista `photos` para trocar os caminhos e as legendas. Para adicionar fotos, copie os arquivos para `assets` e acrescente mais itens à lista.
- **Música:** copie seu arquivo MP3 para `assets`, renomeie para `sua-musica.mp3` ou altere o caminho do `<source>` em `index.html`. A faixa apresentada na imagem que você enviou é “Baby Now That I Found You”, de Ella Bright; o arquivo de áudio não veio junto.
- **Quiz:** edite `correctAnswer` em `script.js` e o texto da pergunta em `index.html`. A comparação ignora maiúsculas, espaços nas pontas e acentos.
- **Textos:** edite diretamente os parágrafos em `index.html`, incluindo o tempo juntos e a mensagem final.
- **Cores e fontes:** as principais cores ficam no começo de `style.css`, nas variáveis dentro de `:root`.
- **Figurinhas decorativas:** as quatro PNGs `image-1.png` a `image-4.png` ficam em `assets` e aparecem sobrepostas às seções. Ajuste tamanho e posição pelas classes `.sticker-*` no final de `style.css`.

O quiz inicial roda no navegador, então serve como brincadeira carinhosa; a resposta pode ser encontrada por alguém que inspecione os arquivos do site. Não é uma senha de segurança.

- **Contagem regressiva:** a data e o fuso estão definidos em `birthdayTarget` no `script.js` (24/11/2026 à meia-noite de Brasília).
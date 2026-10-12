# Cartinha de aniversário ♡

## Como abrir localmente

Abra `index.html` no navegador. Para rodar com Python, abra um terminal nesta pasta e execute `python -m http.server 8000`; depois acesse `http://localhost:8000`.

## Personalizar

- **Fotos:** coloque as imagens em `assets/`. Edite a lista `photos` em `script.js` para trocar caminhos e legendas.
- **Música:** coloque o arquivo de áudio em `assets/`; altere o `<source>` em `index.html` para usar outra faixa.
- **Sons do quiz:** `comemoracao.mp3` e `beijo.mp3` tocam após a resposta certa. `Windows Error Meme Sound Effect.mp3` toca após uma resposta errada.
- **Quiz:** edite `correctAnswer` em `script.js` e o texto da pergunta em `index.html`.
- **Contagem regressiva:** `birthdayTarget` em `script.js` define 24/11/2026 à meia-noite no horário de Brasília.
- **Acesso antes da data:** a cartinha fica atrás da contagem até o aniversário. Para liberar antes, troque `creatorPassword` em `script.js` (senha atual: `pizzaquente`). Essa senha é apenas uma trava casual, pois fica visível no código do site.
- **Figurinhas e imagens:** ficam em `assets/`. Posições e tamanhos estão no final de `style.css`.

## GitHub Pages

Mantenha `index.html`, `style.css`, `script.js` e a pasta `assets/` na raiz do repositório. O fluxo em `.github/workflows/pages.yml` publica a pasta de mídia junto com o site.

Se o repositório for privado, confirme que o plano da conta permite GitHub Pages a partir de repositório privado. O site publicado continua público para abrir sem login.

O quiz é uma brincadeira; a resposta pode ser encontrada no código do navegador e não funciona como senha de segurança.

<h1 align="center">CineList</h1>

<p><img alt="Static Badge" src="https://img.shields.io/badge/license%20-%20ISC%20-%20green"> <img alt="Static Badge" src="https://img.shields.io/badge/version-1.0.0-blue"> <img alt="Static Badge" src="https://img.shields.io/badge/release%20date-april-turquoise"></p>

<p align="center">
    <a href="#sobre">Sobre</a> /
    <a href="#funcionalidades">Funcionalidades</a> /
    <a href="#tecnologias">Tecnologias</a> /
    <a href="#requisitos">Requisitos</a> /
    <a href="#instalação">Instalação</a> /
    <a href="#autor">Autor</a>
</p>

# Sobre

CineList — um projeto completo de exibição de filmes com categorias como Populares, Mais Recentes, Mais Bem Votados e a opção de Favoritos. Desenvolvido para praticar integração entre Front-end e Back-end, o projeto consome a API pública do [TMDB](https://www.themoviedb.org/) e utiliza paginação para otimizar o carregamento de filmes na tela.


# Funcionalidades

1 - Exibir filmes em categorias:
- Populares
- Mais Recentes
- Mais Bem Votados
- Favoritos (lista personalizada de filmes marcados pelo usuário)

2 - Backend em Node.js e Express consumindo dados da API TMDB

3 - Paginação eficiente para melhorar performance e carregamento das listas de filmes

4 - Integração Back-end ⇄ Front-end feita via API local

5 - Armazenamento de filmes favoritados localmente no navegador (localStorage)


# Tecnologias
- Node.js
- TypeScript
- JavaScript
- HTML5
- CSS3
- Express
- TMDB API

# Requisitos
- [Node.js](https://nodejs.org/pt)
- [Visual Studio Code](https://code.visualstudio.com/)
- Extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) instalada no VS Code

# Instalação

1 - Clone o repositório

            git clone https://github.com/sthephanny-jrv/CineList.git

2 - Acesse a pasta do projeto

            cd CineList

3 - Instale as dependências

            npm install

4 - Inicie o servidor

            npm run dev

5 - Abra o Front-end
- No VS Code, abra o arquivo index.html.
- Clique com o botão direito sobre a página e selecione "Open with Live Server".

Pronto! O projeto estará rodando localmente e exibindo os filmes atualizados via TMDB.

.

# Observações

- A API utilizada é pública e gratuita, mas requer cadastro no [TMDB](https://www.themoviedb.org/) para geração de uma chave de acesso (caso queira utilizar a sua própria).

- Os filmes favoritados são armazenados via localStorage e permanecem salvos no navegador até que sejam removidos manualmente.

# Autor

Projeto desenvolvido por Sthephanny Jamilly. [Veja meu LinkedIn](https://www.linkedin.com/in/sthephanny-jamilly)
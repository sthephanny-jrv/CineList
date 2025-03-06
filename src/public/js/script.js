
async function popular() {
    try {
      const response = await fetch('http://localhost:3000/cinelist/movies/popular?page=1');
      const data = await response.json();
      renderMovies(data.results, 'movie-list');
    } catch (error) {
      console.error('Erro ao buscar filmes populares:', error);
    }
}
  
async function now_playing() {
    try {
        const response = await fetch('http://localhost:3000/cinelist/movies/now_playing?page=1');
        const data = await response.json();
        renderMovies(data.results, 'movie-list');
    } catch (error) {
        console.error('Erro ao buscar filmes em exibição:', error);
    }
}

async function top_rated() {
    try {
        const response = await fetch('http://localhost:3000/cinelist/movies/top_rated?page=1');
        const data = await response.json();
        renderMovies(data.results, 'top-rated-movies');
    } catch (error) {
        console.error('Erro ao buscar filmes mais votados:', error);
    }
}

// Função para renderizar os filmes na tela
function renderMovies(movies, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Limpa a área antes de renderizar

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
        <h3>${movie.title}</h3>
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
        <p>${movie.overview}</p>
        `;
        container.appendChild(movieItem);
    });
}

function favorites() {
    const container = document.getElementById('favorites-list');
    container.innerHTML = '<p>Favoritos em breve...</p>';
}
  
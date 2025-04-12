let moviesData = {
    popular: [],
    now_playing: [],
    top_rated: []
};

async function popular() {
    toggleSections('id-popular');
    const response = await fetch('http://localhost:3000/cinelist/movies/popular?page=1');
    const movies = await response.json();
    moviesData.popular = movies;
    showMovies(movies, 'id-popular');
}

async function now_playing() {
    toggleSections('id-now_playing');
    const response = await fetch('http://localhost:3000/cinelist/movies/now_playing?page=1');
    const movies = await response.json();
    moviesData.now_playing = movies;
    showMovies(movies, 'id-now_playing');
}

async function top_rated() {
    toggleSections('id-top_rated');
    const response = await fetch('http://localhost:3000/cinelist/movies/top_rated?page=1');
    const movies = await response.json();
    moviesData.top_rated = movies;
    showMovies(movies, 'id-top_rated');
}

function toggleSections(sectionId) {
    const sections = ['id-popular', 'id-now_playing', 'id-top_rated', 'id-favorites'];
    const nav = ['pop', 'exib', 'vota', 'fav'];

    sections.forEach((id, index) => {
        document.getElementById(id).style.display = id === sectionId ? 'flex' : 'none';
        document.getElementById(nav[index]).style.color = id === sectionId ? 'black' : 'white';
    });
} 




function showMovies(movies, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';   

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');

        const isFavorite = moviesFavorites.includes(movie.id); /* retorna True ou false*/
        const favoriteColor = isFavorite ? 'rgb(255, 217, 2)' : 'black';
        const favoriteBgColor = isFavorite ? 'rgba(255, 217, 2, 0.247)' : 'rgba(255, 71, 71, 0.247)';
        const favoriteBorderColor = isFavorite ? 'rgb(255, 217, 2)' : 'rgb(255, 0, 0)';

        movieItem.innerHTML = `
            <div class="div-movie">
                <h3 id="title">${movie.title}</h3>
                <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
                <div class="buton-movies">
                    <button onclick="showMoreDetails(this)">Ver Mais</button>
                    <button onclick="butonfavorite(${movie.id}, this)" id="favorite" style="color: ${favoriteColor}; background-color: ${favoriteBgColor}; border: 2px solid ${favoriteBorderColor};">☆</button>
                </div>
            </div>
            <div class="movie-details">
                <p class="description"><strong>Descrição: </strong> ${movie.overview}</p>
                <p><strong>Data de Lançamento: </strong> ${movie.release_date}</p>
                <p><strong>Nota: </strong> ${movie.vote_average}</p>
                <p><strong>Contagem de Votos: </strong> ${movie.vote_count}</p>
                <button onclick="window.location.href='./filme.html?movieId=${movie.id}'">Imagens e Trailers</button>
            </div>
        `;
        container.appendChild(movieItem);
    });
}


function showMoreDetails(button) {
    const movieItem = button.closest('.movie-item');
    const details = movieItem.querySelector('.movie-details');
    const title = movieItem.querySelector('#title');

    details.style.display = details.style.display === 'block' ? 'none' : 'block';
    
    if (details.style.display === 'block') {
        button.textContent = 'Ver Menos';
        title.style.fontSize = '18px';
    } else {
        title.style.fontSize = '24px';
        button.textContent = 'Ver Mais';
    }
}


function loadFavorites() {
    const storedFavorites = localStorage.getItem('moviesFavorites');
    
    if (storedFavorites) {
        return JSON.parse(storedFavorites);
    } else {
        return [];
    }
}

function saveFavorites() {
    localStorage.setItem('moviesFavorites', JSON.stringify(moviesFavorites));
}

let moviesFavorites = loadFavorites();

async function butonfavorite(movieId, button) {
    const isFavorite = moviesFavorites.includes(movieId); /*retorna True ou false*/

    if (isFavorite) {
        moviesFavorites = moviesFavorites.filter(id => id !== movieId);
        button.style.color = 'black';
        button.style.backgroundColor = 'rgba(255, 71, 71, 0.247)';
        button.style.border = '2px solid rgb(255, 0, 0)';
    } else {
        moviesFavorites.push(movieId);
        button.style.color = 'rgb(255, 217, 2)';
        button.style.backgroundColor = 'rgba(255, 217, 2, 0.247)';
        button.style.border = '2px solid rgb(255, 217, 2)';
    }

    saveFavorites();
}

async function favorites() {
    toggleSections('id-favorites');
    const container = document.getElementById('id-favorites');
    container.innerHTML = '';

    if (moviesFavorites.length === 0) {
        container.innerHTML = '<p>Você não tem filmes favoritos no momento.</p>';
        return;
    }

    const allMovies = [...moviesData.popular, ...moviesData.now_playing, ...moviesData.top_rated];
    
    const uniqueMovies = new Set();
    const favoriteMovies = allMovies.filter(movie => {
        if (moviesFavorites.includes(movie.id) && !uniqueMovies.has(movie.id)) {
            uniqueMovies.add(movie.id);
            return true;
        }
        return false;
    });

    if (favoriteMovies.length === 0) {
        container.innerHTML = '<p>Você não tem filmes favoritos no momento.</p>';
        return;
    }

    showMovies(favoriteMovies, 'id-favorites');
}

window.onload = () => {
    moviesFavorites = loadFavorites();
    popular();
};
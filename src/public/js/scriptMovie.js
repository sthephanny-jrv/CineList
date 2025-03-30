async function showMovie() {
    const params = new URLSearchParams(window.location.search);
    const movieID = params.get('movieId');

    if (movieID) {
        console.log(`ID do filme: ${movieID}`);
    } else {
        console.log('Nenhum movieId foi encontrado na URL.');
    }

    const moviesPopular = await fetch('http://localhost:3000/cinelist/movies/popular?page=1');
    const popular = await moviesPopular.json();

    const moviesNow_playing = await fetch('http://localhost:3000/cinelist/movies/now_playing?page=1');
    const now_playing = await moviesNow_playing.json();

    const moviesTop_rated = await fetch('http://localhost:3000/cinelist/movies/top_rated?page=1');
    const top_rated  = await moviesTop_rated.json();

    const allMovies = [...popular, ...now_playing, ...top_rated];
    
    

    const images = await fetch(`http://localhost:3000/cinelist/movies/images/${movieID}`);
    const jsonImages = await images.json();

    const videos = await fetch(`http://localhost:3000/cinelist/movies/videos/${movieID}`);
    const jsonVideos = await videos.json();

    const container = document.getElementById('pictures');
    container.innerHTML = '';     

    const movie = allMovies.find(movie => movie.id == movieID);

    if (movie) {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-images');
        
        movieItem.innerHTML = `
            <div class="div-movie">
                <h3 id="title-movie">${movie.title}</h3>
                <p><strong>Overview: </strong> ${movie.overview}</p>
            </div>
            <div class="containerImagesVideos">
                <div class="divImages"></div>
                <div class="divVideos"></div>
            </div>
            
        `;
    
        const divImagess = movieItem.querySelector(".divImages");

        jsonImages.backdrops.forEach(image => {
            divImagess.innerHTML += `
                <img src="https://image.tmdb.org/t/p/w500${image.file_path}" alt="${movie.title}">
            `;
        });

        const divVideos = movieItem.querySelector(".divVideos");
    
        jsonVideos.forEach(video => {
            if (video.site === "YouTube") {
                divVideos.innerHTML += `
                    <div class="video-container">
                        <iframe
                            src="https://www.youtube.com/embed/${video.key}" 
                            title="${video.name}" 
                            allowfullscreen>
                        </iframe>
                    </div>
                `;
            }
        });
    
        container.appendChild(movieItem);
    } else {
        console.error("Filme não encontrado!");
    }    
}

window.onload = showMovie;

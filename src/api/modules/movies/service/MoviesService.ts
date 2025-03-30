import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default class MoviesService {

  public async listService(page: number = 1): Promise<object[]> {
    try {
      const apiKey = process.env.TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=${page}`;

      const response = await axios.get(url);
      const movies = response.data.results;

      const filterMovies = movies.filter((movie: any) => movie.overview && movie.overview.trim() !== "");
      return filterMovies;

    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      throw new Error("Não foi possível buscar os filmes");
    }
  }

  public async listNowPlayingService(page: number = 1): Promise<object[]> {
    try {
      const apiKey = process.env.TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=pt-BR&page=${page}`;

      const response = await axios.get(url);
      const movies = response.data.results;

      const filterMovies = movies.filter((movie: any) => movie.overview && movie.overview.trim() !== "");
      return filterMovies;

    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      throw new Error("Não foi possível buscar os filmes");
    }
  }

  public async listTopRatedService(page: number = 1): Promise<object[]> {
    try {
      const apiKey = process.env.TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR&page=${page}`;

      const response = await axios.get(url);
      const movies = response.data.results;

      const filterMovies = movies.filter((movie: any) => movie.overview && movie.overview.trim() !== "");
      return filterMovies;

    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      throw new Error("Não foi possível buscar os filmes");
    }
  }

  public async imagesMovieService(id: number = 0): Promise<{ backdrops: object[]; posters: object[]; logos: object[] }> {
    try {
      const apiKey = process.env.TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}`;

      const response = await axios.get(url);
      const images = {
        backdrops: response.data.backdrops,
        posters: response.data.posters,
        logos: response.data.logos,
      };
      
      return images;
    } catch (error) {
      console.error("Erro ao buscar filme:", error);
      throw new Error("Não foi possível buscar o filme");
    }
  } 

  public async videosMovieService(id: number = 0): Promise<object[]> {
    try {
      const apiKey = process.env.TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;

      const response = await axios.get(url);
      const videos = response.data.results;

      return videos;
    } catch (error) {
      console.error("Erro ao buscar filme:", error);
      throw new Error("Não foi possível buscar o filme");
    }
  }
}

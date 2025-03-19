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

      return movies;
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

      return movies;
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

      return movies;
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      throw new Error("Não foi possível buscar os filmes");
    }
  }
}

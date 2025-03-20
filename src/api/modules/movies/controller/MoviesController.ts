import { Request, Response } from 'express';
import MoviesService from '../service/MoviesService';

export default class MoviesController {

  public async list(
    request: Request,
    response: Response,
  ): Promise<Response> {

    const { page } = request.query;
    const pageNumber = page ? Number(page) : 1;

    const moviesService = new MoviesService();
    const movies = await moviesService.listService(pageNumber);

    return response.status(200).json(movies);
  }

  public async listNowPlaying(
    request: Request,
    response: Response,
  ): Promise<Response> {

    const { page } = request.query;
    const pageNumber = page ? Number(page) : 1;

    const moviesService = new MoviesService();
    const movies = await moviesService.listNowPlayingService(pageNumber);

    return response.status(200).json(movies);
  }

  public async listTopRated(
    request: Request,
    response: Response,
  ): Promise<Response> {

    const { page } = request.query;
    const pageNumber = page ? Number(page) : 1;

    const moviesService = new MoviesService();
    const movies = await moviesService.listTopRatedService(pageNumber);

    return response.status(200).json(movies);
  }

  public async imagesMovie(
    request: Request,
    response: Response,
  ): Promise<Response> {

    const { id } = request.params;
    const iD = Number(id)

    const moviesService = new MoviesService();
    const images = await moviesService.imagesMovieService(iD);

    return response.status(200).json(images);
  }
  
  public async videosMovie(
    request: Request,
    response: Response,
  ): Promise<Response> {

    const { id } = request.params;
    const iD = Number(id)

    const moviesService = new MoviesService();
    const videos = await moviesService.videosMovieService(iD);

    return response.status(200).json(videos);
  }
}

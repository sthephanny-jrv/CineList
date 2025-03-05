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
}

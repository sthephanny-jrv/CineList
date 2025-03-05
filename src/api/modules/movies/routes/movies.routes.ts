import { Router } from 'express';
import MoviesController from '../controller/MoviesController';

const moviesRouter = Router();
const moviesController = new MoviesController();

moviesRouter.get('/movies/popular', moviesController.list);
moviesRouter.get('/movies/now_playing', moviesController.listNowPlaying); // Recentemente
moviesRouter.get('/movies/top_rated', moviesController.listTopRated); // + bem avaliados

export default moviesRouter;